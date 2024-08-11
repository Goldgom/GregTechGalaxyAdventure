declare module "packages/com/cyvack/crystal_clear/common/content/blocks/$GlassEncasedCogwheel" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EncasedBlock, $EncasedBlock$Type} from "packages/com/simibubi/create/content/decoration/encasing/$EncasedBlock"
import {$EncasedCogwheelBlock, $EncasedCogwheelBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/encased/$EncasedCogwheelBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GlassEncasedCogwheel extends $EncasedCogwheelBlock implements $EncasedBlock {
static readonly "TOP_SHAFT": $BooleanProperty
static readonly "BOTTOM_SHAFT": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type, large: boolean, casing: $Supplier$Type<($Block$Type)>)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "skipRendering"(selfState: $BlockState$Type, adjacentBlock: $BlockState$Type, side: $Direction$Type): boolean
public "getShadeBrightness"(p_60472_: $BlockState$Type, p_60473_: $BlockGetter$Type, p_60474_: $BlockPos$Type): float
public "propagatesSkylightDown"(p_49928_: $BlockState$Type, p_49929_: $BlockGetter$Type, p_49930_: $BlockPos$Type): boolean
public "handleEncasing"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $InteractionHand$Type, arg6: $BlockHitResult$Type): void
public "getCasing"(): $Block
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "casing"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassEncasedCogwheel$Type = ($GlassEncasedCogwheel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassEncasedCogwheel_ = $GlassEncasedCogwheel$Type;
}}
declare module "packages/com/cyvack/crystal_clear/common/content/blocks/$GlassEncasedShaft" {
import {$EncasedBlock, $EncasedBlock$Type} from "packages/com/simibubi/create/content/decoration/encasing/$EncasedBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EncasedShaftBlock, $EncasedShaftBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/encased/$EncasedShaftBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"

export class $GlassEncasedShaft extends $EncasedShaftBlock implements $EncasedBlock, $IBE<($KineticBlockEntity)> {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type, casing: $Supplier$Type<($Block$Type)>)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "skipRendering"(selfState: $BlockState$Type, adjacentBlock: $BlockState$Type, side: $Direction$Type): boolean
public "getShadeBrightness"(p_60472_: $BlockState$Type, p_60473_: $BlockGetter$Type, p_60474_: $BlockPos$Type): float
public "propagatesSkylightDown"(p_49928_: $BlockState$Type, p_49929_: $BlockGetter$Type, p_49930_: $BlockPos$Type): boolean
public "handleEncasing"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: $Player$Type, arg5: $InteractionHand$Type, arg6: $BlockHitResult$Type): void
public "getCasing"(): $Block
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getBlockEntityClass"(): $Class<($KineticBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "casing"(): $Block
get "blockEntityClass"(): $Class<($KineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassEncasedShaft$Type = ($GlassEncasedShaft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassEncasedShaft_ = $GlassEncasedShaft$Type;
}}
declare module "packages/com/cyvack/crystal_clear/common/content/blocks/$GlassCasing" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$CasingBlock, $CasingBlock$Type} from "packages/com/simibubi/create/content/decoration/encasing/$CasingBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GlassCasing extends $CasingBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(p_53640_: $BlockBehaviour$Properties$Type)

public "skipRendering"(pState: $BlockState$Type, pAdjacentBlockState: $BlockState$Type, side: $Direction$Type): boolean
public "getShadeBrightness"(p_60472_: $BlockState$Type, p_60473_: $BlockGetter$Type, p_60474_: $BlockPos$Type): float
public "propagatesSkylightDown"(p_49928_: $BlockState$Type, p_49929_: $BlockGetter$Type, p_49930_: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassCasing$Type = ($GlassCasing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassCasing_ = $GlassCasing$Type;
}}
