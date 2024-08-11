declare module "packages/twilightforest/enums/$BossVariant$TrophyType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BossVariant$TrophyType extends $Enum<($BossVariant$TrophyType)> {
static readonly "GOLD": $BossVariant$TrophyType
static readonly "IRON": $BossVariant$TrophyType
static readonly "IRONWOOD": $BossVariant$TrophyType


public static "values"(): ($BossVariant$TrophyType)[]
public static "valueOf"(arg0: string): $BossVariant$TrophyType
public "getModelName"(): string
get "modelName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossVariant$TrophyType$Type = (("gold") | ("ironwood") | ("iron")) | ($BossVariant$TrophyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BossVariant$TrophyType_ = $BossVariant$TrophyType$Type;
}}
declare module "packages/twilightforest/enums/$HollowLogVariants$Climbable" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $HollowLogVariants$Climbable extends $Enum<($HollowLogVariants$Climbable)> implements $StringRepresentable {
static readonly "VINE": $HollowLogVariants$Climbable
static readonly "LADDER": $HollowLogVariants$Climbable
static readonly "LADDER_WATERLOGGED": $HollowLogVariants$Climbable


public static "values"(): ($HollowLogVariants$Climbable)[]
public static "valueOf"(arg0: string): $HollowLogVariants$Climbable
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HollowLogVariants$Climbable$Type = (("ladder") | ("ladder_waterlogged") | ("vine")) | ($HollowLogVariants$Climbable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HollowLogVariants$Climbable_ = $HollowLogVariants$Climbable$Type;
}}
declare module "packages/twilightforest/enums/$Diagonals" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Diagonals$Inversion, $Diagonals$Inversion$Type} from "packages/twilightforest/enums/$Diagonals$Inversion"

export class $Diagonals extends $Enum<($Diagonals)> implements $StringRepresentable {
static readonly "TOP_RIGHT": $Diagonals
static readonly "BOTTOM_RIGHT": $Diagonals
static readonly "BOTTOM_LEFT": $Diagonals
static readonly "TOP_LEFT": $Diagonals
readonly "operationX": $Diagonals$Inversion
readonly "operationY": $Diagonals$Inversion


public static "values"(): ($Diagonals)[]
public static "valueOf"(arg0: string): $Diagonals
public static "rotate"(arg0: $Diagonals$Type, arg1: $Rotation$Type): $Diagonals
public "isLeft"(): boolean
public static "mirror"(arg0: $Diagonals$Type, arg1: $Mirror$Type): $Diagonals
public "isTop"(): boolean
public static "mirrorLeftRight"(arg0: $Diagonals$Type): $Diagonals
public static "mirrorUpDown"(arg0: $Diagonals$Type): $Diagonals
public static "mirrorOnX"(arg0: $Diagonals$Type, arg1: $Mirror$Type): $Diagonals
public static "mirrorOnZ"(arg0: $Diagonals$Type, arg1: $Mirror$Type): $Diagonals
public static "mirrorOn"(arg0: $Direction$Axis$Type, arg1: $Diagonals$Type, arg2: $Mirror$Type): $Diagonals
public "getSerializedName"(): string
public static "getDiagonalFromUpDownLeftRight"(arg0: boolean, arg1: boolean): $Diagonals
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "left"(): boolean
get "top"(): boolean
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Diagonals$Type = (("top_right") | ("top_left") | ("bottom_right") | ("bottom_left")) | ($Diagonals);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Diagonals_ = $Diagonals$Type;
}}
declare module "packages/twilightforest/enums/$BossVariant" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BossVariant$TrophyType, $BossVariant$TrophyType$Type} from "packages/twilightforest/enums/$BossVariant$TrophyType"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BossVariant extends $Enum<($BossVariant)> implements $StringRepresentable {
static readonly "NAGA": $BossVariant
static readonly "LICH": $BossVariant
static readonly "HYDRA": $BossVariant
static readonly "UR_GHAST": $BossVariant
static readonly "KNIGHT_PHANTOM": $BossVariant
static readonly "SNOW_QUEEN": $BossVariant
static readonly "MINOSHROOM": $BossVariant
static readonly "ALPHA_YETI": $BossVariant
static readonly "QUEST_RAM": $BossVariant
static readonly "FINAL_BOSS": $BossVariant


public static "values"(): ($BossVariant)[]
public static "valueOf"(arg0: string): $BossVariant
public "getType"(): $BlockEntityType<(any)>
public "getTrophyType"(): $BossVariant$TrophyType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "type"(): $BlockEntityType<(any)>
get "trophyType"(): $BossVariant$TrophyType
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossVariant$Type = (("lich") | ("hydra") | ("final_boss") | ("quest_ram") | ("minoshroom") | ("alpha_yeti") | ("snow_queen") | ("ur_ghast") | ("naga") | ("knight_phantom")) | ($BossVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BossVariant_ = $BossVariant$Type;
}}
declare module "packages/twilightforest/enums/$HugeLilypadPiece" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $HugeLilypadPiece extends $Enum<($HugeLilypadPiece)> implements $StringRepresentable {
static readonly "NW": $HugeLilypadPiece
static readonly "NE": $HugeLilypadPiece
static readonly "SE": $HugeLilypadPiece
static readonly "SW": $HugeLilypadPiece


public static "values"(): ($HugeLilypadPiece)[]
public static "valueOf"(arg0: string): $HugeLilypadPiece
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HugeLilypadPiece$Type = (("se") | ("sw") | ("ne") | ("nw")) | ($HugeLilypadPiece);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HugeLilypadPiece_ = $HugeLilypadPiece$Type;
}}
declare module "packages/twilightforest/enums/$HollowLogVariants$Horizontal" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $HollowLogVariants$Horizontal extends $Enum<($HollowLogVariants$Horizontal)> implements $StringRepresentable {
static readonly "EMPTY": $HollowLogVariants$Horizontal
static readonly "MOSS": $HollowLogVariants$Horizontal
static readonly "MOSS_AND_GRASS": $HollowLogVariants$Horizontal
static readonly "SNOW": $HollowLogVariants$Horizontal
static readonly "WATERLOGGED": $HollowLogVariants$Horizontal


public static "values"(): ($HollowLogVariants$Horizontal)[]
public static "valueOf"(arg0: string): $HollowLogVariants$Horizontal
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HollowLogVariants$Horizontal$Type = (("moss") | ("waterlogged") | ("moss_and_grass") | ("snow") | ("empty")) | ($HollowLogVariants$Horizontal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HollowLogVariants$Horizontal_ = $HollowLogVariants$Horizontal$Type;
}}
declare module "packages/twilightforest/enums/$TowerDeviceVariant" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TowerDeviceVariant extends $Enum<($TowerDeviceVariant)> implements $StringRepresentable {
static readonly "BUILDER_INACTIVE": $TowerDeviceVariant
static readonly "BUILDER_ACTIVE": $TowerDeviceVariant
static readonly "BUILDER_TIMEOUT": $TowerDeviceVariant


public static "values"(): ($TowerDeviceVariant)[]
public static "valueOf"(arg0: string): $TowerDeviceVariant
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TowerDeviceVariant$Type = (("builder_inactive") | ("builder_active") | ("builder_timeout")) | ($TowerDeviceVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TowerDeviceVariant_ = $TowerDeviceVariant$Type;
}}
declare module "packages/twilightforest/enums/$BanisterShape" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BanisterShape extends $Enum<($BanisterShape)> implements $StringRepresentable {
static readonly "SHORT": $BanisterShape
static readonly "TALL": $BanisterShape
static readonly "CONNECTED": $BanisterShape


public static "values"(): ($BanisterShape)[]
public static "valueOf"(arg0: string): $BanisterShape
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BanisterShape$Type = (("connected") | ("short") | ("tall")) | ($BanisterShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BanisterShape_ = $BanisterShape$Type;
}}
declare module "packages/twilightforest/enums/$FireJetVariant" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FireJetVariant extends $Enum<($FireJetVariant)> implements $StringRepresentable {
static readonly "IDLE": $FireJetVariant
static readonly "POPPING": $FireJetVariant
static readonly "FLAME": $FireJetVariant
static readonly "TIMEOUT": $FireJetVariant


public "toString"(): string
public static "values"(): ($FireJetVariant)[]
public static "valueOf"(arg0: string): $FireJetVariant
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireJetVariant$Type = (("popping") | ("idle") | ("flame") | ("timeout")) | ($FireJetVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireJetVariant_ = $FireJetVariant$Type;
}}
declare module "packages/twilightforest/enums/$BlockLoggingEnum$IMultiLoggable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BucketPickup, $BucketPickup$Type} from "packages/net/minecraft/world/level/block/$BucketPickup"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$LiquidBlockContainer, $LiquidBlockContainer$Type} from "packages/net/minecraft/world/level/block/$LiquidBlockContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export interface $BlockLoggingEnum$IMultiLoggable extends $BucketPickup, $LiquidBlockContainer {

 "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
 "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
/**
 * 
 * @deprecated
 */
 "getPickupSound"(): $Optional<($SoundEvent)>
 "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>

(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
}

export namespace $BlockLoggingEnum$IMultiLoggable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLoggingEnum$IMultiLoggable$Type = ($BlockLoggingEnum$IMultiLoggable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLoggingEnum$IMultiLoggable_ = $BlockLoggingEnum$IMultiLoggable$Type;
}}
declare module "packages/twilightforest/enums/$NagastoneVariant" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $NagastoneVariant extends $Enum<($NagastoneVariant)> implements $StringRepresentable {
static readonly "NORTH_DOWN": $NagastoneVariant
static readonly "SOUTH_DOWN": $NagastoneVariant
static readonly "WEST_DOWN": $NagastoneVariant
static readonly "EAST_DOWN": $NagastoneVariant
static readonly "NORTH_UP": $NagastoneVariant
static readonly "SOUTH_UP": $NagastoneVariant
static readonly "EAST_UP": $NagastoneVariant
static readonly "WEST_UP": $NagastoneVariant
static readonly "AXIS_X": $NagastoneVariant
static readonly "AXIS_Y": $NagastoneVariant
static readonly "AXIS_Z": $NagastoneVariant
static readonly "SOLID": $NagastoneVariant


public static "values"(): ($NagastoneVariant)[]
public static "valueOf"(arg0: string): $NagastoneVariant
public static "getVariantFromAxis"(arg0: $Direction$Axis$Type): $NagastoneVariant
public "getSerializedName"(): string
public static "getVariantFromDoubleFacing"(arg0: $Direction$Type, arg1: $Direction$Type): $NagastoneVariant
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NagastoneVariant$Type = (("west_up") | ("solid") | ("north_up") | ("south_up") | ("axis_x") | ("north_down") | ("axis_y") | ("east_up") | ("south_down") | ("west_down") | ("east_down") | ("axis_z")) | ($NagastoneVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NagastoneVariant_ = $NagastoneVariant$Type;
}}
declare module "packages/twilightforest/enums/$Diagonals$Inversion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Diagonals$Inversion {

 "convert"(arg0: integer, arg1: integer): integer

(arg0: integer, arg1: integer): integer
}

export namespace $Diagonals$Inversion {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Diagonals$Inversion$Type = ($Diagonals$Inversion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Diagonals$Inversion_ = $Diagonals$Inversion$Type;
}}
