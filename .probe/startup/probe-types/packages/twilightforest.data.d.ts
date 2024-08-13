declare module "packages/twilightforest/data/custom/stalactites/entry/$Stalactite" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$AddReloadListenerEvent, $AddReloadListenerEvent$Type} from "packages/net/minecraftforge/event/$AddReloadListenerEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$StalactiteReloadListener, $StalactiteReloadListener$Type} from "packages/twilightforest/data/custom/stalactites/entry/$StalactiteReloadListener"

export class $Stalactite extends $Record {

constructor(ores: $Map$Type<($Block$Type), (integer)>, sizeVariation: float, maxLength: integer, weight: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "maxLength"(): integer
public "weight"(): integer
public static "reloadStalactites"(arg0: $AddReloadListenerEvent$Type): void
public "ores"(): $Map<($Block), (integer)>
public static "getStalactiteConfig"(): $StalactiteReloadListener
public "sizeVariation"(): float
get "stalactiteConfig"(): $StalactiteReloadListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stalactite$Type = ($Stalactite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stalactite_ = $Stalactite$Type;
}}
declare module "packages/twilightforest/data/custom/stalactites/entry/$StalactiteReloadListener" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Gson, $Gson$Type} from "packages/com/google/gson/$Gson"
import {$SimpleJsonResourceReloadListener, $SimpleJsonResourceReloadListener$Type} from "packages/net/minecraft/server/packs/resources/$SimpleJsonResourceReloadListener"
import {$Stalactite, $Stalactite$Type} from "packages/twilightforest/data/custom/stalactites/entry/$Stalactite"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StalactiteReloadListener extends $SimpleJsonResourceReloadListener {
static readonly "GSON": $Gson

constructor()

public static "serialize"(arg0: $Stalactite$Type): $JsonElement
public "getRandomStalactiteFromList"(arg0: $RandomSource$Type, arg1: $Map$Type<($ResourceLocation$Type), ($Stalactite$Type)>): $Stalactite
public "getLargeStalactites"(): $Map<($ResourceLocation), ($Stalactite)>
public "getMediumStalactites"(): $Map<($ResourceLocation), ($Stalactite)>
public "getSmallStalactites"(): $Map<($ResourceLocation), ($Stalactite)>
get "largeStalactites"(): $Map<($ResourceLocation), ($Stalactite)>
get "mediumStalactites"(): $Map<($ResourceLocation), ($Stalactite)>
get "smallStalactites"(): $Map<($ResourceLocation), ($Stalactite)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StalactiteReloadListener$Type = ($StalactiteReloadListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StalactiteReloadListener_ = $StalactiteReloadListener$Type;
}}
