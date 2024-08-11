declare module "packages/com/legacy/lucent/core/capability/$IEntityLightingData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEntityLightingData {

 "lucent$setBrightness"(arg0: integer): void
 "lucent$getBrightness"(): integer
}

export namespace $IEntityLightingData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityLightingData$Type = ($IEntityLightingData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityLightingData_ = $IEntityLightingData$Type;
}}
declare module "packages/com/legacy/lucent/core/plugin/$CreatePlugin$Data" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CreatePlugin$Data extends $Record {

constructor(lights: $List$Type<($Pair$Type<($BlockPos$Type), (integer)>)>, type: string, initOrientation: $Direction$Type)

public "type"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "lights"(): $List<($Pair<($BlockPos), (integer)>)>
public "initOrientation"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreatePlugin$Data$Type = ($CreatePlugin$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreatePlugin$Data_ = $CreatePlugin$Data$Type;
}}
declare module "packages/com/legacy/lucent/core/compat/create/$IContraptionEntityInfo" {
import {$CreatePlugin$Data, $CreatePlugin$Data$Type} from "packages/com/legacy/lucent/core/plugin/$CreatePlugin$Data"

export interface $IContraptionEntityInfo {

 "lucent$shouldAttemptRead"(): boolean
 "lucent$incrementReadAttempt"(): void
 "lucent$getLightData"(): $CreatePlugin$Data
 "lucent$setLightData"(arg0: $CreatePlugin$Data$Type): void
}

export namespace $IContraptionEntityInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContraptionEntityInfo$Type = ($IContraptionEntityInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContraptionEntityInfo_ = $IContraptionEntityInfo$Type;
}}
