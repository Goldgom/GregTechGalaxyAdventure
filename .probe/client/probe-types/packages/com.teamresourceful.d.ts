declare module "packages/com/teamresourceful/resourcefullib/common/recipe/$CodecRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CodecRecipeSerializer<R extends $Recipe<(any)>> implements $RecipeSerializer<(R)> {

constructor(recipeType: $RecipeType$Type<(R)>, codec: $Function$Type<($ResourceLocation$Type), ($Codec$Type<(R)>)>)
constructor(recipeType: $RecipeType$Type<(R)>, jsonCodec: $Function$Type<($ResourceLocation$Type), ($Codec$Type<(R)>)>, networkCodec: $Function$Type<($ResourceLocation$Type), ($Codec$Type<(R)>)>)

public "type"(): $RecipeType<(R)>
public "fromNetwork"(id: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): R
public "fromJson"(id: $ResourceLocation$Type, json: $JsonObject$Type): R
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: R): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecRecipeSerializer$Type<R> = ($CodecRecipeSerializer<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecRecipeSerializer_<R> = $CodecRecipeSerializer$Type<(R)>;
}}
declare module "packages/com/teamresourceful/resourcefullib/common/registry/$RegistryEntry" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RegistryEntry<T> extends $Supplier<(T)> {

 "get"(): T
 "getId"(): $ResourceLocation
}

export namespace $RegistryEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$Type<T> = ($RegistryEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryEntry_<T> = $RegistryEntry$Type<(T)>;
}}
declare module "packages/com/teamresourceful/resourcefullib/common/recipe/$CodecRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $CodecRecipe<C extends $Container> extends $Recipe<(C)> {

 "id"(): $ResourceLocation
 "getId"(): $ResourceLocation
 "jsonCodec"<T extends $CodecRecipe<(C)>>(id: $ResourceLocation$Type): $Codec<(T)>
 "assemble"(container: C, access: $RegistryAccess$Type): $ItemStack
 "isSpecial"(): boolean
 "canCraftInDimensions"(pWidth: integer, pHeight: integer): boolean
 "getResultItem"(access: $RegistryAccess$Type): $ItemStack
 "networkCodec"<T extends $CodecRecipe<(C)>>(id: $ResourceLocation$Type): $Codec<(T)>
 "matches"(arg0: C, arg1: $Level$Type): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getToastSymbol"(): $ItemStack
 "getSerializer"(): $RecipeSerializer<(any)>
 "showNotification"(): boolean
 "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
 "isIncomplete"(): boolean
 "getType"(): $ResourceLocation
 "getMod"(): string
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getGroup"(): string
 "setGroup"(group: string): void
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "getSchema"(): $RecipeSchema
 "hasInput"(match: $ReplacementMatch$Type): boolean
}

export namespace $CodecRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecRecipe$Type<C> = ($CodecRecipe<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecRecipe_<C> = $CodecRecipe$Type<(C)>;
}}
declare module "packages/com/teamresourceful/resourcefullib/common/recipe/$CodecRecipeType" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$CodecRecipe, $CodecRecipe$Type} from "packages/com/teamresourceful/resourcefullib/common/recipe/$CodecRecipe"

export class $CodecRecipeType<T extends $CodecRecipe<(any)>> implements $RecipeType<(T)> {


public "toString"(): string
public static "of"<T extends $CodecRecipe<(any)>>(id: string): $CodecRecipeType<(T)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(T)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecRecipeType$Type<T> = ($CodecRecipeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecRecipeType_<T> = $CodecRecipeType$Type<(T)>;
}}
declare module "packages/com/teamresourceful/resourcefullib/common/utils/$TriState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TriState extends $Enum<($TriState)> {
static readonly "TRUE": $TriState
static readonly "FALSE": $TriState
static readonly "UNDEFINED": $TriState


public static "values"(): ($TriState)[]
public static "valueOf"(name: string): $TriState
public "map"(value: boolean): boolean
public static "map"(state: $TriState$Type, value: $TriState$Type): $TriState
public static "of"(value: boolean): $TriState
public static "of"(number: number): $TriState
public static "of"(value: boolean): $TriState
public "isDefined"(): boolean
public "isTrue"(): boolean
public "isUndefined"(): boolean
public "isFalse"(): boolean
get "defined"(): boolean
get "true"(): boolean
get "undefined"(): boolean
get "false"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriState$Type = (("true") | ("false") | ("undefined")) | ($TriState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriState_ = $TriState$Type;
}}
