declare module "packages/twilightforest/$TFMazeMapData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MapDecoration, $MapDecoration$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MapFrame, $MapFrame$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapFrame"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MapBanner, $MapBanner$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapBanner"

export class $TFMazeMapData extends $MapItemSavedData {
 "yCenter": integer
 "ore": boolean
static readonly "MAX_SCALE": integer
static readonly "TRACKED_DECORATION_LIMIT": integer
 "centerX": integer
 "centerZ": integer
 "dimension": $ResourceKey<($Level)>
readonly "scale": byte
 "colors": (byte)[]
readonly "locked": boolean
 "bannerMarkers": $Map<(string), ($MapBanner)>
readonly "decorations": $Map<(string), ($MapDecoration)>
 "frameMarkers": $Map<(string), ($MapFrame)>
 "trackedDecorationCount": integer
 "moonlight$customDecorations": $Map<(any), (any)>
readonly "moonlight$customData": $Map<(any), (any)>

constructor(arg0: integer, arg1: integer, arg2: byte, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ResourceKey$Type<($Level$Type)>)

public static "load"(arg0: $CompoundTag$Type): $TFMazeMapData
public "getUpdatePacket"(arg0: integer, arg1: $Player$Type): $Packet<(any)>
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public static "registerMazeMapData"(arg0: $Level$Type, arg1: $TFMazeMapData$Type, arg2: string): void
public static "getMazeMapData"(arg0: $Level$Type, arg1: string): $TFMazeMapData
public "calculateMapCenter"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TFMazeMapData$Type = ($TFMazeMapData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TFMazeMapData_ = $TFMazeMapData$Type;
}}
