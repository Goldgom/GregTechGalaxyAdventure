declare module "packages/twilightforest/$TFMagicMapData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MapDecoration, $MapDecoration$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration"
import {$MapFrame, $MapFrame$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapFrame"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$TFMagicMapData$TFMapDecoration, $TFMagicMapData$TFMapDecoration$Type} from "packages/twilightforest/$TFMagicMapData$TFMapDecoration"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MapBanner, $MapBanner$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapBanner"

export class $TFMagicMapData extends $MapItemSavedData {
readonly "tfDecorations": $Set<($TFMagicMapData$TFMapDecoration)>
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

public static "load"(arg0: $CompoundTag$Type): $TFMagicMapData
public "deserializeFeatures"(arg0: (byte)[]): void
public "checkExistingFeatures"(arg0: $Level$Type): void
public "getUpdatePacket"(arg0: integer, arg1: $Player$Type): $Packet<(any)>
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public "serializeFeatures"(): (byte)[]
public static "registerMagicMapData"(arg0: $Level$Type, arg1: $TFMagicMapData$Type, arg2: string): void
public static "getMagicMapData"(arg0: $Level$Type, arg1: string): $TFMagicMapData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TFMagicMapData$Type = ($TFMagicMapData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TFMagicMapData_ = $TFMagicMapData$Type;
}}
