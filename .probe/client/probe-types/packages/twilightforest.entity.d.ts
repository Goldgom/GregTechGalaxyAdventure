declare module "packages/twilightforest/entity/$TwilightBoat$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $TwilightBoat$Type extends $Enum<($TwilightBoat$Type)> {
static readonly "TWILIGHT_OAK": $TwilightBoat$Type
static readonly "CANOPY": $TwilightBoat$Type
static readonly "MANGROVE": $TwilightBoat$Type
static readonly "DARKWOOD": $TwilightBoat$Type
static readonly "TIME": $TwilightBoat$Type
static readonly "TRANSFORMATION": $TwilightBoat$Type
static readonly "MINING": $TwilightBoat$Type
static readonly "SORTING": $TwilightBoat$Type


public "getName"(): string
public "toString"(): string
public static "values"(): ($TwilightBoat$Type)[]
public static "valueOf"(arg0: string): $TwilightBoat$Type
public static "byId"(arg0: integer): $TwilightBoat$Type
public "asPlank"(): $Block
public static "getTypeFromString"(arg0: string): $TwilightBoat$Type
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwilightBoat$Type$Type = (("canopy") | ("darkwood") | ("sorting") | ("twilight_oak") | ("mangrove") | ("time") | ("mining") | ("transformation")) | ($TwilightBoat$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TwilightBoat$Type_ = $TwilightBoat$Type$Type;
}}
