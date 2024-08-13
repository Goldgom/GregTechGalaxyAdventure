declare module "packages/twilightforest/$TFMagicMapData$TFMapDecoration" {
import {$TFLandmark, $TFLandmark$Type} from "packages/twilightforest/init/$TFLandmark"
import {$MapDecoration, $MapDecoration$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration"

export class $TFMagicMapData$TFMapDecoration extends $MapDecoration {

constructor(arg0: $TFLandmark$Type, arg1: byte, arg2: byte, arg3: byte)
constructor(arg0: integer, arg1: byte, arg2: byte, arg3: byte)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "render"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TFMagicMapData$TFMapDecoration$Type = ($TFMagicMapData$TFMapDecoration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TFMagicMapData$TFMapDecoration_ = $TFMagicMapData$TFMapDecoration$Type;
}}
