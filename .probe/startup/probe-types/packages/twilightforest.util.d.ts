declare module "packages/twilightforest/util/$WoodPalette" {
import {$WoodPalette$WoodShapes, $WoodPalette$WoodShapes$Type} from "packages/twilightforest/util/$WoodPalette$WoodShapes"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BanisterBlock, $BanisterBlock$Type} from "packages/twilightforest/block/$BanisterBlock"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $WoodPalette {
static readonly "CODEC": $Codec<($WoodPalette)>

constructor(arg0: $Supplier$Type<($Block$Type)>, arg1: $Supplier$Type<($StairBlock$Type)>, arg2: $Supplier$Type<($Block$Type)>, arg3: $Supplier$Type<($Block$Type)>, arg4: $Supplier$Type<($Block$Type)>, arg5: $Supplier$Type<($Block$Type)>, arg6: $Supplier$Type<($Block$Type)>, arg7: $Supplier$Type<($BanisterBlock$Type)>)
constructor(arg0: $Block$Type, arg1: $Block$Type, arg2: $Block$Type, arg3: $Block$Type, arg4: $Block$Type, arg5: $Block$Type, arg6: $Block$Type, arg7: $Block$Type)

public "contains"(arg0: $Block$Type): boolean
public "getWoodShapeFromBlock"(arg0: $Block$Type): $WoodPalette$WoodShapes
public "modifyBlockWithType"(arg0: $WoodPalette$Type, arg1: $BlockState$Type): $BlockState
public "modifyBlockWithType"(arg0: $WoodPalette$Type, arg1: $StructureTemplate$StructureBlockInfo$Type): $StructureTemplate$StructureBlockInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodPalette$Type = ($WoodPalette);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodPalette_ = $WoodPalette$Type;
}}
declare module "packages/twilightforest/util/$WoodPalette$WoodShapes" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WoodPalette$WoodShapes extends $Enum<($WoodPalette$WoodShapes)> {
static readonly "BLOCK": $WoodPalette$WoodShapes
static readonly "STAIRS": $WoodPalette$WoodShapes
static readonly "SLAB": $WoodPalette$WoodShapes
static readonly "BUTTON": $WoodPalette$WoodShapes
static readonly "FENCE": $WoodPalette$WoodShapes
static readonly "GATE": $WoodPalette$WoodShapes
static readonly "PLATE": $WoodPalette$WoodShapes
static readonly "BANISTER": $WoodPalette$WoodShapes
static readonly "INVALID": $WoodPalette$WoodShapes


public static "values"(): ($WoodPalette$WoodShapes)[]
public static "valueOf"(arg0: string): $WoodPalette$WoodShapes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodPalette$WoodShapes$Type = (("button") | ("stairs") | ("invalid") | ("block") | ("plate") | ("banister") | ("gate") | ("fence") | ("slab")) | ($WoodPalette$WoodShapes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodPalette$WoodShapes_ = $WoodPalette$WoodShapes$Type;
}}
