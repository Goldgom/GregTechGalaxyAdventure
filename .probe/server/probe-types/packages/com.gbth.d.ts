declare module "packages/com/gbth/gbthcore/gtceu/material/$PropertyKeys" {
import {$BloomProperty, $BloomProperty$Type} from "packages/com/gbth/gbthcore/gtceu/material/$BloomProperty"
import {$PropertyKey, $PropertyKey$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/material/properties/$PropertyKey"

export class $PropertyKeys {
static readonly "BLOOM": $PropertyKey<($BloomProperty)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyKeys$Type = ($PropertyKeys);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyKeys_ = $PropertyKeys$Type;
}}
declare module "packages/com/gbth/gbthcore/gtceu/material/$BloomProperty" {
import {$IMaterialProperty, $IMaterialProperty$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/material/properties/$IMaterialProperty"
import {$MaterialProperties, $MaterialProperties$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/material/properties/$MaterialProperties"

export class $BloomProperty implements $IMaterialProperty<($BloomProperty)> {

constructor()

public "verifyProperty"(arg0: $MaterialProperties$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloomProperty$Type = ($BloomProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloomProperty_ = $BloomProperty$Type;
}}
declare module "packages/com/gbth/gbthcore/gtceu/material/$MaterialFlags" {
import {$MaterialFlag, $MaterialFlag$Type} from "packages/com/gregtechceu/gtceu/api/data/chemical/material/info/$MaterialFlag"

export class $MaterialFlags {
static readonly "GENERATE_BLOOM": $MaterialFlag

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialFlags$Type = ($MaterialFlags);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialFlags_ = $MaterialFlags$Type;
}}
