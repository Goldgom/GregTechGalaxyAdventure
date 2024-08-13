declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/breech/$AutocannonBreechBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AutocannonBaseBlock, $AutocannonBaseBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBaseBlock"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$AbstractAutocannonBreechBlockEntity, $AbstractAutocannonBreechBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/breech/$AbstractAutocannonBreechBlockEntity"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AutocannonMaterial, $AutocannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterial"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AutocannonBreechBlock extends $AutocannonBaseBlock implements $IBE<($AbstractAutocannonBreechBlockEntity)>, $IWrenchable {
static readonly "HANDLE": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $AutocannonMaterial$Type)

public "isComplete"(state: $BlockState$Type): boolean
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCannonShape"(): $CannonCastShape
public "canConnectToSide"(state: $BlockState$Type, face: $Direction$Type): boolean
public "onInteractWhileAssembled"(player: $Player$Type, localPos: $BlockPos$Type, side: $Direction$Type, interactionHand: $InteractionHand$Type, level: $Level$Type, contraption: $Contraption$Type, be: $BlockEntity$Type, info: $StructureTemplate$StructureBlockInfo$Type, entity: $PitchOrientedContraptionEntity$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<($AbstractAutocannonBreechBlockEntity)>
public "isBreechMechanism"(state: $BlockState$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($AbstractAutocannonBreechBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($AbstractAutocannonBreechBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $AbstractAutocannonBreechBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($AbstractAutocannonBreechBlockEntity)>
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "blockEntityClass"(): $Class<($AbstractAutocannonBreechBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonBreechBlock$Type = ($AutocannonBreechBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonBreechBlock_ = $AutocannonBreechBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/builtup/$CannonBuilderBlock$BuilderState" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CannonBuilderBlock$BuilderState extends $Enum<($CannonBuilderBlock$BuilderState)> implements $StringRepresentable {
static readonly "UNACTIVATED": $CannonBuilderBlock$BuilderState
static readonly "ACTIVATED": $CannonBuilderBlock$BuilderState
static readonly "MOVING": $CannonBuilderBlock$BuilderState
static readonly "EXTENDED": $CannonBuilderBlock$BuilderState


public static "values"(): ($CannonBuilderBlock$BuilderState)[]
public static "valueOf"(name: string): $CannonBuilderBlock$BuilderState
public "getSerializedName"(): string
public "isFullBlock"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "fullBlock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonBuilderBlock$BuilderState$Type = (("unactivated") | ("moving") | ("extended") | ("activated")) | ($CannonBuilderBlock$BuilderState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonBuilderBlock$BuilderState_ = $CannonBuilderBlock$BuilderState$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/carriage/$CannonCarriageBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$CannonCarriageBlockEntity, $CannonCarriageBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/carriage/$CannonCarriageBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CannonCarriageBlock extends $Block implements $IWrenchable, $IBE<($CannonCarriageBlockEntity)> {
static readonly "FACING": $DirectionProperty
static readonly "SADDLED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "getBlockEntityClass"(): $Class<($CannonCarriageBlockEntity)>
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CannonCarriageBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CannonCarriageBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CannonCarriageBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CannonCarriageBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CannonCarriageBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonCarriageBlock$Type = ($CannonCarriageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonCarriageBlock_ = $CannonCarriageBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/mortar_stone/$MortarStoneBlock" {
import {$ProjectileBlock, $ProjectileBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$ProjectileBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MortarStoneProjectile, $MortarStoneProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/mortar_stone/$MortarStoneProjectile"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractBigCannonProjectile, $AbstractBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MortarStoneBlock extends $ProjectileBlock<($MortarStoneProjectile)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getProjectile"(level: $Level$Type, itemStack: $ItemStack$Type): $AbstractBigCannonProjectile
public "getProjectile"(level: $Level$Type, projectileBlocks: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>): $AbstractBigCannonProjectile
public "getAssociatedEntityType"(): $EntityType<(any)>
get "associatedEntityType"(): $EntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MortarStoneBlock$Type = ($MortarStoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MortarStoneBlock_ = $MortarStoneBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/index/fluid_utils/$CBCFlowingFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$CBCFlowingFluid, $CBCFlowingFluid$Type} from "packages/rbasamoyai/createbigcannons/index/fluid_utils/$CBCFlowingFluid"
import {$CBCFlowingFluid$Properties, $CBCFlowingFluid$Properties$Type} from "packages/rbasamoyai/createbigcannons/index/fluid_utils/$CBCFlowingFluid$Properties"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $CBCFlowingFluid$Flowing extends $CBCFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(properties: $CBCFlowingFluid$Properties$Type)

public "isSource"(state: $FluidState$Type): boolean
public "getAmount"(state: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBCFlowingFluid$Flowing$Type = ($CBCFlowingFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBCFlowingFluid$Flowing_ = $CBCFlowingFluid$Flowing$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/equipment/manual_loading/$WormItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$HandloadingTool, $HandloadingTool$Type} from "packages/rbasamoyai/createbigcannons/equipment/manual_loading/$HandloadingTool"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MountedBigCannonContraption, $MountedBigCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$MountedBigCannonContraption"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WormItem extends $Item implements $HandloadingTool {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "onUseOnCannon"(player: $Player$Type, level: $Level$Type, startPos: $BlockPos$Type, face: $Direction$Type, contraption: $MountedBigCannonContraption$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "getDefaultAttributeModifiers"(slot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public static "deployersCanUse"(): boolean
public static "getReach"(): integer
public static "isValidLoadBlock"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, dir: $Direction$Type): boolean
public static "isValidLoadBlock"(state: $BlockState$Type, contraption: $MountedBigCannonContraption$Type, pos: $BlockPos$Type, dir: $Direction$Type): boolean
get "reach"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WormItem$Type = ($WormItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WormItem_ = $WormItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterialProperties" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BigCannonMaterialProperties$Builder, $BigCannonMaterialProperties$Builder$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterialProperties$Builder"
import {$BigCannonMaterialProperties$FailureMode, $BigCannonMaterialProperties$FailureMode$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterialProperties$FailureMode"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BigCannonMaterialProperties extends $Record {

constructor(minimumVelocityPerBarrel: double, weight: float, maxSafePropellantStress: integer, failureMode: $BigCannonMaterialProperties$FailureMode$Type, connectsInSurvival: boolean, isWeldable: boolean, weldDamage: integer, weldStressPenalty: integer, minimumSpread: float, spreadReductionPerBarrel: float)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $BigCannonMaterialProperties$Builder
public static "fromJson"(id: $ResourceLocation$Type, obj: $JsonObject$Type): $BigCannonMaterialProperties
public "serialize"(): $JsonObject
public "weight"(): float
public "weldDamage"(): integer
public "isWeldable"(): boolean
public "failureMode"(): $BigCannonMaterialProperties$FailureMode
public "maxSafePropellantStress"(): integer
public "spreadReductionPerBarrel"(): float
public "connectsInSurvival"(): boolean
public "writeBuf"(buf: $FriendlyByteBuf$Type): void
public "minimumSpread"(): float
public "weldStressPenalty"(): integer
public "mayGetStuck"(chargesUsed: float, barrelTravelled: integer): boolean
public "minimumVelocityPerBarrel"(): double
public static "fromBuf"(buf: $FriendlyByteBuf$Type): $BigCannonMaterialProperties
get "weldable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonMaterialProperties$Type = ($BigCannonMaterialProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonMaterialProperties_ = $BigCannonMaterialProperties$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/bullet/$MachineGunRoundItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AutocannonAmmoType, $AutocannonAmmoType$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonAmmoType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$AutocannonProjectilePropertiesComponent, $AutocannonProjectilePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/config/$AutocannonProjectilePropertiesComponent"
import {$AbstractAutocannonProjectile, $AbstractAutocannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AbstractAutocannonProjectile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AutocannonAmmoItem, $AutocannonAmmoItem$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonAmmoItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineGunRoundItem extends $Item implements $AutocannonAmmoItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "getType"(): $AutocannonAmmoType
public "getAutocannonProjectile"(stack: $ItemStack$Type, level: $Level$Type): $AbstractAutocannonProjectile
public "getAutocannonProperties"(itemStack: $ItemStack$Type): $AutocannonProjectilePropertiesComponent
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getEntityType"(stack: $ItemStack$Type): $EntityType<(any)>
public "setTracer"(stack: $ItemStack$Type, value: boolean): void
public "isTracer"(stack: $ItemStack$Type): boolean
public "getSpentItem"(stack: $ItemStack$Type): $ItemStack
get "type"(): $AutocannonAmmoType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineGunRoundItem$Type = ($MachineGunRoundItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineGunRoundItem_ = $MachineGunRoundItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBlockEntity" {
import {$IAutocannonBlockEntity, $IAutocannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$IAutocannonBlockEntity"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemCannonBehavior, $ItemCannonBehavior$Type} from "packages/rbasamoyai/createbigcannons/cannons/$ItemCannonBehavior"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AutocannonBlockEntity extends $SmartBlockEntity implements $IAutocannonBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "cannonBehavior"(): $ItemCannonBehavior
public "tickFromContraption"(level: $Level$Type, poce: $PitchOrientedContraptionEntity$Type, localPos: $BlockPos$Type): void
public "getDrops"(): $List<($ItemStack)>
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "drops"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonBlockEntity$Type = ($AutocannonBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonBlockEntity_ = $AutocannonBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/boring/$UnboredAutocannonBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$AbstractIncompleteAutocannonBlock, $AbstractIncompleteAutocannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AbstractIncompleteAutocannonBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$AutocannonMaterial, $AutocannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterial"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $UnboredAutocannonBlock extends $AbstractIncompleteAutocannonBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $AutocannonMaterial$Type, shape: $VoxelShape$Type, castShape: $Supplier$Type<($CannonCastShape$Type)>)

public static "recoilSpring"(properties: $BlockBehaviour$Properties$Type, material: $AutocannonMaterial$Type): $UnboredAutocannonBlock
public static "breech"(properties: $BlockBehaviour$Properties$Type, material: $AutocannonMaterial$Type): $UnboredAutocannonBlock
public "getCannonShape"(): $CannonCastShape
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public static "barrel"(properties: $BlockBehaviour$Properties$Type, material: $AutocannonMaterial$Type): $UnboredAutocannonBlock
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
get "cannonShape"(): $CannonCastShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnboredAutocannonBlock$Type = ($UnboredAutocannonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnboredAutocannonBlock_ = $UnboredAutocannonBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/breeches/quickfiring_breech/$QuickfiringBreechBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$IBigCannonBlockEntity, $IBigCannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$IBigCannonBlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $QuickfiringBreechBlockEntity extends $SmartBlockEntity implements $IBigCannonBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "isOpen"(): boolean
public "tick"(): void
public "canBeAutomaticallyLoaded"(): boolean
public "onInteractionCooldown"(): boolean
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "setLoadingCooldown"(value: integer): void
public static "isInstantOpen"(): boolean
public static "getOpeningTime"(): integer
public "canLoadBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "getOpenDirection"(): integer
public "toggleOpening"(): void
public "getOpenProgress"(): integer
public "getOpenProgress"(partialTicks: float): float
public "tickAnimation"(): void
public static "getInnerCannonBlockState"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, state: $BlockState$Type): boolean
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "canPushBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "isValidLoader"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "blockCanHandle"(data: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "open"(): boolean
set "loadingCooldown"(value: integer)
get "instantOpen"(): boolean
get "openingTime"(): integer
get "openDirection"(): integer
get "openProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuickfiringBreechBlockEntity$Type = ($QuickfiringBreechBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuickfiringBreechBlockEntity_ = $QuickfiringBreechBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeSerializer" {
import {$BuiltUpHeatingRecipe, $BuiltUpHeatingRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/builtup/$BuiltUpHeatingRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$DrillBoringBlockRecipe, $DrillBoringBlockRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/boring/$DrillBoringBlockRecipe"
import {$CannonCastingRecipe, $CannonCastingRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockRecipe, $BlockRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipe"

export interface $BlockRecipeSerializer<T extends $BlockRecipe> {

 "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
 "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
 "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
}

export namespace $BlockRecipeSerializer {
const CANNON_CASTING: $BlockRecipeSerializer<($CannonCastingRecipe)>
const BUILT_UP_HEATING: $BlockRecipeSerializer<($BuiltUpHeatingRecipe)>
const DRILL_BORING: $BlockRecipeSerializer<($DrillBoringBlockRecipe)>
function register(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRecipeSerializer$Type<T> = ($BlockRecipeSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRecipeSerializer_<T> = $BlockRecipeSerializer$Type<(T)>;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/ammo_container/$AutocannonAmmoContainerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AutocannonAmmoType, $AutocannonAmmoType$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonAmmoType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutocannonAmmoContainerItem extends $BlockItem implements $MenuProvider {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "getDisplayName"(): $Component
public static "pollItemFromContainer"(container: $ItemStack$Type): $ItemStack
public "isCreative"(): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "createMenu"(i: integer, inventory: $Inventory$Type, player: $Player$Type): $AbstractContainerMenu
public static "getTotalAmmoCount"(container: $ItemStack$Type): integer
public static "getMainAmmoStack"(container: $ItemStack$Type): $ItemStack
public static "getTracerSpacing"(container: $ItemStack$Type): integer
public static "getTracerAmmoStack"(container: $ItemStack$Type): $ItemStack
public static "getTypeOfContainer"(container: $ItemStack$Type): $AutocannonAmmoType
public static "shouldPullTracer"(container: $ItemStack$Type): boolean
public "shouldCloseCurrentScreen"(): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "displayName"(): $Component
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonAmmoContainerItem$Type = ($AutocannonAmmoContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonAmmoContainerItem_ = $AutocannonAmmoContainerItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/fluid_shell/$AbstractFluidShellBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FuzedBlockEntity, $FuzedBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractFluidShellBlockEntity extends $FuzedBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte


public static "getFluidShellCapacity"(): integer
public "tryEmptyItemIntoTE"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Direction$Type): boolean
public "tryFillItemFromTE"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Direction$Type): boolean
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "fluidShellCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFluidShellBlockEntity$Type = ($AbstractFluidShellBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractFluidShellBlockEntity_ = $AbstractFluidShellBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonAmmoItem" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$AutocannonProjectilePropertiesComponent, $AutocannonProjectilePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/config/$AutocannonProjectilePropertiesComponent"
import {$AbstractAutocannonProjectile, $AbstractAutocannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AbstractAutocannonProjectile"
import {$AutocannonAmmoType, $AutocannonAmmoType$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonAmmoType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AutocannonAmmoItem {

 "getType"(): $AutocannonAmmoType
 "getAutocannonProjectile"(arg0: $ItemStack$Type, arg1: $Level$Type): $AbstractAutocannonProjectile
 "getAutocannonProperties"(arg0: $ItemStack$Type): $AutocannonProjectilePropertiesComponent
 "getEntityType"(arg0: $ItemStack$Type): $EntityType<(any)>
 "setTracer"(arg0: $ItemStack$Type, arg1: boolean): void
 "isTracer"(arg0: $ItemStack$Type): boolean
 "getSpentItem"(arg0: $ItemStack$Type): $ItemStack
}

export namespace $AutocannonAmmoItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonAmmoItem$Type = ($AutocannonAmmoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonAmmoItem_ = $AutocannonAmmoItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/index/fluid_utils/$CBCFlowingFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$CBCFlowingFluid$Properties, $CBCFlowingFluid$Properties$Type} from "packages/rbasamoyai/createbigcannons/index/fluid_utils/$CBCFlowingFluid$Properties"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $CBCFlowingFluid extends $FlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(properties: $CBCFlowingFluid$Properties$Type)

public "getFluidType"(): $FluidType
public "getBucket"(): $Item
public "getTickDelay"(level: $LevelReader$Type): integer
public "isSame"(fluid: $Fluid$Type): boolean
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
get "fluidType"(): $FluidType
get "bucket"(): $Item
get "flowing"(): $Fluid
get "source"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBCFlowingFluid$Type = ($CBCFlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBCFlowingFluid_ = $CBCFlowingFluid$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/foundry/$MoltenMetalLiquidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$CBCLiquidBlock, $CBCLiquidBlock$Type} from "packages/rbasamoyai/createbigcannons/index/fluid_utils/$CBCLiquidBlock"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MoltenMetalLiquidBlock extends $CBCLiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
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

constructor(fluid: $NonNullSupplier$Type<(any)>, properties: $BlockBehaviour$Properties$Type)

public "isPathfindable"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoltenMetalLiquidBlock$Type = ($MoltenMetalLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoltenMetalLiquidBlock_ = $MoltenMetalLiquidBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/boring/$UnboredBigCannonBlock" {
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$SolidBigCannonBlock, $SolidBigCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$SolidBigCannonBlock"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BigCannonEndBlockEntity, $BigCannonEndBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEndBlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $UnboredBigCannonBlock extends $SolidBigCannonBlock<($BigCannonEndBlockEntity)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type, cannonShape: $Supplier$Type<($CannonCastShape$Type)>, base: $VoxelShape$Type)
constructor(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type, cannonShape: $Supplier$Type<($CannonCastShape$Type)>, visualShape: $VoxelShape$Type, collisionShape: $VoxelShape$Type)

public static "small"(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type): $UnboredBigCannonBlock
public "isComplete"(state: $BlockState$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "verySmall"(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type): $UnboredBigCannonBlock
public static "veryLarge"(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type): $UnboredBigCannonBlock
public "getCannonShape"(): $CannonCastShape
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public static "medium"(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type): $UnboredBigCannonBlock
public static "large"(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type): $UnboredBigCannonBlock
public "getBlockEntityClass"(): $Class<($BigCannonEndBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "blockEntityClass"(): $Class<($BigCannonEndBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnboredBigCannonBlock$Type = ($UnboredBigCannonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnboredBigCannonBlock_ = $UnboredBigCannonBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_loading/$CannonLoaderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DirectionalAxisKineticBlock, $DirectionalAxisKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalAxisKineticBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonLoaderBlockEntity, $CannonLoaderBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_loading/$CannonLoaderBlockEntity"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CannonLoaderBlock extends $DirectionalAxisKineticBlock implements $IBE<($CannonLoaderBlockEntity)> {
static readonly "MOVING": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "AXIS_ALONG_FIRST_COORDINATE": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public static "maxAllowedLoaderLength"(): integer
public static "destroyExtensionPoles"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, dropBlocks: boolean): void
public "getBlockEntityClass"(): $Class<($CannonLoaderBlockEntity)>
public static "isLoaderHead"(state: $BlockState$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CannonLoaderBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CannonLoaderBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CannonLoaderBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CannonLoaderBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CannonLoaderBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonLoaderBlock$Type = ($CannonLoaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonLoaderBlock_ = $CannonLoaderBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/ap_shell/$APShellBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$APShellProjectile, $APShellProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/ap_shell/$APShellProjectile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SimpleShellBlock, $SimpleShellBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$SimpleShellBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $APShellBlock extends $SimpleShellBlock<($APShellProjectile)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getAssociatedEntityType"(): $EntityType<(any)>
public "isBaseFuze"(): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "associatedEntityType"(): $EntityType<(any)>
get "baseFuze"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APShellBlock$Type = ($APShellBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APShellBlock_ = $APShellBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/breeches/$AbstractBigCannonBreechBlockEntity" {
import {$BigCannonBehavior, $BigCannonBehavior$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBehavior"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$IBigCannonBlockEntity, $IBigCannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$IBigCannonBlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractBigCannonBreechBlockEntity extends $KineticBlockEntity implements $IBigCannonBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "isOpen"(): boolean
public "addBehaviours"(behaviors: $List$Type<($BlockEntityBehaviour$Type)>): void
public "canLoadBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "cannonBehavior"(): $BigCannonBehavior
public static "getInnerCannonBlockState"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, state: $BlockState$Type): boolean
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "canPushBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "isValidLoader"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "blockCanHandle"(data: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "open"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBigCannonBreechBlockEntity$Type = ($AbstractBigCannonBreechBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBigCannonBreechBlockEntity_ = $AbstractBigCannonBreechBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/boring/$UnboredScrewBreechBlock" {
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$UnboredBigCannonBlock, $UnboredBigCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/crafting/boring/$UnboredBigCannonBlock"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $UnboredScrewBreechBlock extends $UnboredBigCannonBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnboredScrewBreechBlock$Type = ($UnboredScrewBreechBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnboredScrewBreechBlock_ = $UnboredScrewBreechBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/he_shell/$HEShellBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SimpleShellBlock, $SimpleShellBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$SimpleShellBlock"
import {$HEShellProjectile, $HEShellProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/he_shell/$HEShellProjectile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $HEShellBlock extends $SimpleShellBlock<($HEShellProjectile)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getAssociatedEntityType"(): $EntityType<(any)>
public "isBaseFuze"(): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "associatedEntityType"(): $EntityType<(any)>
get "baseFuze"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HEShellBlock$Type = ($HEShellBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HEShellBlock_ = $HEShellBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBaseBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$AbstractMountedCannonContraption, $AbstractMountedCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$AbstractMountedCannonContraption"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AutocannonBlock, $AutocannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$AutocannonMaterial, $AutocannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterial"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $AutocannonBaseBlock extends $DirectionalBlock implements $AutocannonBlock, $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
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


public "getFacing"(state: $BlockState$Type): $Direction
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, face: $Direction$Type, otherState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, otherPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getAutocannonMaterial"(): $AutocannonMaterial
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public "onRemoveCannon"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "weldDamage"(): integer
public "canWeldSide"(level: $Level$Type, dir: $Direction$Type, state: $BlockState$Type, otherState: $BlockState$Type, pos: $BlockPos$Type): boolean
public "isWeldable"(state: $BlockState$Type): boolean
public "weldBlock"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, dir: $Direction$Type): void
public "onInteractWhileAssembled"(player: $Player$Type, localPos: $BlockPos$Type, side: $Direction$Type, interactionHand: $InteractionHand$Type, level: $Level$Type, contraption: $Contraption$Type, be: $BlockEntity$Type, info: $StructureTemplate$StructureBlockInfo$Type, entity: $PitchOrientedContraptionEntity$Type): boolean
public "getCannonContraption"(): $AbstractMountedCannonContraption
public "getAutocannonMaterialInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $AutocannonMaterial
public "isBreechMechanism"(arg0: $BlockState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "isComplete"(arg0: $BlockState$Type): boolean
public "getCannonShape"(): $CannonCastShape
public "canConnectToSide"(state: $BlockState$Type, face: $Direction$Type): boolean
public "getCannonShapeInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $CannonCastShape
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "autocannonMaterial"(): $AutocannonMaterial
get "cannonContraption"(): $AbstractMountedCannonContraption
get "pickupSound"(): $Optional<($SoundEvent)>
get "cannonShape"(): $CannonCastShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonBaseBlock$Type = ($AutocannonBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonBaseBlock_ = $AutocannonBaseBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AnimatedAutocannon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnimatedAutocannon {

 "incrementAnimationTicks"(): void
 "getAnimationTicks"(): integer
}

export namespace $AnimatedAutocannon {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatedAutocannon$Type = ($AnimatedAutocannon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatedAutocannon_ = $AnimatedAutocannon$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/drop_mortar/$DropMortarEndBlock" {
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$SolidBigCannonBlock, $SolidBigCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$SolidBigCannonBlock"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BigCannonEndBlockEntity, $BigCannonEndBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEndBlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $DropMortarEndBlock extends $SolidBigCannonBlock<($BigCannonEndBlockEntity)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, cannonMaterial: $BigCannonMaterial$Type)

public "isComplete"(state: $BlockState$Type): boolean
public "getFacing"(state: $BlockState$Type): $Direction
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCannonShape"(): $CannonCastShape
public "canConnectToSide"(state: $BlockState$Type, dir: $Direction$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<($BigCannonEndBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "blockEntityClass"(): $Class<($BigCannonEndBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropMortarEndBlock$Type = ($DropMortarEndBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropMortarEndBlock_ = $DropMortarEndBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/network/$RootPacket" {
import {$PacketListener, $PacketListener$Type} from "packages/net/minecraft/network/$PacketListener"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"

export interface $RootPacket {

 "handle"(arg0: $Executor$Type, arg1: $PacketListener$Type, arg2: $ServerPlayer$Type): void
 "rootEncode"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $RootPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootPacket$Type = ($RootPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RootPacket_ = $RootPacket$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/welding/$WeldableBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $WeldableBlock {

 "weldDamage"(): integer
 "canWeldSide"(arg0: $Level$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): boolean
 "isWeldable"(arg0: $BlockState$Type): boolean
 "weldBlock"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): void
}

export namespace $WeldableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeldableBlock$Type = ($WeldableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeldableBlock_ = $WeldableBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/ammo_container/$AutocannonAmmoContainerBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$AutocannonAmmoContainerBlock$State, $AutocannonAmmoContainerBlock$State$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/ammo_container/$AutocannonAmmoContainerBlock$State"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AutocannonAmmoContainerBlockEntity, $AutocannonAmmoContainerBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/ammo_container/$AutocannonAmmoContainerBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AutocannonAmmoContainerBlock extends $Block implements $IWrenchable, $SimpleWaterloggedBlock, $IBE<($AutocannonAmmoContainerBlockEntity)> {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONTAINER_STATE": $EnumProperty<($AutocannonAmmoContainerBlock$State)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "updateShape"(state: $BlockState$Type, face: $Direction$Type, otherState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, otherPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getBlockEntityClass"(): $Class<($AutocannonAmmoContainerBlockEntity)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($AutocannonAmmoContainerBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($AutocannonAmmoContainerBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $AutocannonAmmoContainerBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($AutocannonAmmoContainerBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($AutocannonAmmoContainerBlockEntity)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonAmmoContainerBlock$Type = ($AutocannonAmmoContainerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonAmmoContainerBlock_ = $AutocannonAmmoContainerBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/builtup/$BuiltUpHeatingRecipe" {
import {$BlockRecipeType, $BlockRecipeType$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeType"
import {$BlockRecipeSerializer, $BlockRecipeSerializer$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeSerializer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockRecipeIngredient, $BlockRecipeIngredient$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeIngredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockRecipe, $BlockRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipe"

export class $BuiltUpHeatingRecipe implements $BlockRecipe {

constructor(requiredLayers: $Set$Type<($BlockRecipeIngredient$Type)>, result: $Block$Type, id: $ResourceLocation$Type)

public "matches"(level: $Level$Type, pos: $BlockPos$Type): boolean
public "result"(): $Block
public "getId"(): $ResourceLocation
public "layers"(): $Set<($BlockRecipeIngredient)>
public "getType"(): $BlockRecipeType<(any)>
public "getSerializer"(): $BlockRecipeSerializer<(any)>
public "getResultBlock"(): $Block
public "assembleInWorld"(level: $Level$Type, pos: $BlockPos$Type): void
get "id"(): $ResourceLocation
get "type"(): $BlockRecipeType<(any)>
get "serializer"(): $BlockRecipeSerializer<(any)>
get "resultBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuiltUpHeatingRecipe$Type = ($BuiltUpHeatingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuiltUpHeatingRecipe_ = $BuiltUpHeatingRecipe$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/mortar_stone/$MortarStoneItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MortarStoneItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MortarStoneItem$Type = ($MortarStoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MortarStoneItem_ = $MortarStoneItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BigCannonProjectileBlockEntity, $BigCannonProjectileBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$BigCannonProjectileBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FuzedBlockEntity extends $BigCannonProjectileBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "hasFuze"(): boolean
public "removeItem"(slot: integer, amount: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "setItem"(slot: integer, stack: $ItemStack$Type): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "getItem"(slot: integer): $ItemStack
public "load"(tag: $CompoundTag$Type): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "empty"(): boolean
get "containerSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuzedBlockEntity$Type = ($FuzedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuzedBlockEntity_ = $FuzedBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/incomplete/$IncompleteAutocannonBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$IncompleteWithItemsCannonBlock, $IncompleteWithItemsCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/crafting/incomplete/$IncompleteWithItemsCannonBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractIncompleteAutocannonBlock, $AbstractIncompleteAutocannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AbstractIncompleteAutocannonBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$AutocannonMaterial, $AutocannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterial"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $IncompleteAutocannonBlock extends $AbstractIncompleteAutocannonBlock implements $IncompleteWithItemsCannonBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $AutocannonMaterial$Type, shape: $VoxelShape$Type, cannonShape: $Supplier$Type<($CannonCastShape$Type)>, completeBlockSup: $NonNullSupplier$Type<(any)>, item: $NonNullSupplier$Type<(any)>)

public "progress"(state: $BlockState$Type): integer
public static "recoilSpring"(properties: $BlockBehaviour$Properties$Type, material: $AutocannonMaterial$Type, completeBlock: $NonNullSupplier$Type<(any)>, item: $NonNullSupplier$Type<(any)>): $IncompleteAutocannonBlock
public static "breech"(properties: $BlockBehaviour$Properties$Type, material: $AutocannonMaterial$Type, completeBlock: $NonNullSupplier$Type<(any)>, item: $NonNullSupplier$Type<(any)>): $IncompleteAutocannonBlock
public "getCannonShape"(): $CannonCastShape
public "getCompleteBlockState"(state: $BlockState$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "requiredItems"(): $List<($ItemLike)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
get "cannonShape"(): $CannonCastShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncompleteAutocannonBlock$Type = ($IncompleteAutocannonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IncompleteAutocannonBlock_ = $IncompleteAutocannonBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$ProjectileBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ProjectileBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileBlockItem$Type = ($ProjectileBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileBlockItem_ = $ProjectileBlockItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/propellant/$BigCartridgeBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BigCannonBehavior, $BigCannonBehavior$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBehavior"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$BigCannonPropellantBlock, $BigCannonPropellantBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/propellant/$BigCannonPropellantBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BigCartridgeBlockEntity, $BigCartridgeBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/propellant/$BigCartridgeBlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $BigCartridgeBlock extends $DirectionalBlock implements $IWrenchable, $BigCannonPropellantBlock, $IBE<($BigCartridgeBlockEntity)> {
static readonly "FILLED": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getChargePower"(data: $StructureTemplate$StructureBlockInfo$Type): float
public "getChargePower"(stack: $ItemStack$Type): float
public static "getPowerFromData"(data: $StructureTemplate$StructureBlockInfo$Type): float
public "getStressOnCannon"(data: $StructureTemplate$StructureBlockInfo$Type): float
public "getStressOnCannon"(stack: $ItemStack$Type): float
public "getExtractedItem"(info: $StructureTemplate$StructureBlockInfo$Type): $ItemStack
public "getRecoil"(data: $StructureTemplate$StructureBlockInfo$Type): float
public "consumePropellant"(behavior: $BigCannonBehavior$Type): void
public "canBeIgnited"(data: $StructureTemplate$StructureBlockInfo$Type, dir: $Direction$Type): boolean
public "getHandloadingInfo"(stack: $ItemStack$Type, localPos: $BlockPos$Type, cannonOrientation: $Direction$Type): $StructureTemplate$StructureBlockInfo
public "isValidAddition"(self: $StructureTemplate$StructureBlockInfo$Type, index: integer, dir: $Direction$Type): boolean
public "onCannonRotate"(oldState: $BlockState$Type, rotationAxis: $Direction$Axis$Type, rotation: $Rotation$Type): $BlockState
public "canBeLoaded"(state: $BlockState$Type, facing: $Direction$Axis$Type): boolean
public "getAxis"(state: $BlockState$Type): $Direction$Axis
public "getMaximumPowerLevels"(): integer
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getSpread"(data: $StructureTemplate$StructureBlockInfo$Type): float
public "getBlockEntityClass"(): $Class<($BigCartridgeBlockEntity)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($BigCartridgeBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($BigCartridgeBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BigCartridgeBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($BigCartridgeBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "maximumPowerLevels"(): integer
get "blockEntityClass"(): $Class<($BigCartridgeBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCartridgeBlock$Type = ($BigCartridgeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCartridgeBlock_ = $BigCartridgeBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterialProperties" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AutocannonMaterialProperties$Builder, $AutocannonMaterialProperties$Builder$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterialProperties$Builder"

export class $AutocannonMaterialProperties extends $Record {

constructor(maxBarrelLength: integer, weight: float, baseSpread: float, spreadReductionPerBarrel: float, baseSpeed: float, speedIncreasePerBarrel: float, maxSpeedIncreases: integer, projectileLifetime: integer, baseRecoil: float, connectsInSurvival: boolean, isWeldable: boolean, weldDamage: integer, weldStressPenalty: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $AutocannonMaterialProperties$Builder
public static "fromJson"(obj: $JsonObject$Type): $AutocannonMaterialProperties
public "serialize"(): $JsonObject
public "weight"(): float
public "weldDamage"(): integer
public "isWeldable"(): boolean
public "spreadReductionPerBarrel"(): float
public "speedIncreasePerBarrel"(): float
public "baseSpeed"(): float
public "connectsInSurvival"(): boolean
public "writeBuf"(buf: $FriendlyByteBuf$Type): void
public "weldStressPenalty"(): integer
public "maxBarrelLength"(): integer
public "maxSpeedIncreases"(): integer
public "baseSpread"(): float
public "projectileLifetime"(): integer
public "baseRecoil"(): float
public static "fromBuf"(buf: $FriendlyByteBuf$Type): $AutocannonMaterialProperties
get "weldable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonMaterialProperties$Type = ($AutocannonMaterialProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonMaterialProperties_ = $AutocannonMaterialProperties$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/$ProjectileContext" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$CBCCfgMunitions$GriefState, $CBCCfgMunitions$GriefState$Type} from "packages/rbasamoyai/createbigcannons/config/$CBCCfgMunitions$GriefState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractCannonProjectile, $AbstractCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile"
import {$ClientboundPlayBlockHitEffectPacket, $ClientboundPlayBlockHitEffectPacket$Type} from "packages/rbasamoyai/createbigcannons/network/$ClientboundPlayBlockHitEffectPacket"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ProjectileContext {

constructor(projectile: $AbstractCannonProjectile$Type, griefState: $CBCCfgMunitions$GriefState$Type)

public "getQueuedExplosions"(): $Map<($BlockPos), (float)>
public "addPlayedEffect"(packet: $ClientboundPlayBlockHitEffectPacket$Type): void
public "griefState"(): $CBCCfgMunitions$GriefState
public "addEntity"(entity: $Entity$Type): void
public "hasHitEntity"(entity: $Entity$Type): boolean
public "getPlayedEffects"(): $List<($ClientboundPlayBlockHitEffectPacket)>
public "hitEntities"(): $Set<($Entity)>
public "queueExplosion"(pos: $BlockPos$Type, power: float): void
public "collisionContext"(): $CollisionContext
get "queuedExplosions"(): $Map<($BlockPos), (float)>
get "playedEffects"(): $List<($ClientboundPlayBlockHitEffectPacket)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileContext$Type = ($ProjectileContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileContext_ = $ProjectileContext$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/$ControlPitchContraption$Block" {
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$ControlPitchContraption, $ControlPitchContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/$ControlPitchContraption"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ControlPitchContraption$Block extends $ControlPitchContraption {

 "getControllerBlockPos"(): $BlockPos
 "attach"(arg0: $PitchOrientedContraptionEntity$Type): void
 "getTypeId"(): $ResourceLocation
 "disassemble"(): void
 "getControllerState"(): $BlockState
 "isAttachedTo"(arg0: $AbstractContraptionEntity$Type): boolean
 "onStall"(): void
 "getDismountPositionForContraption"(arg0: $PitchOrientedContraptionEntity$Type): $BlockPos
 "onRecoil"(vector: $Vec3$Type, cannon: $AbstractContraptionEntity$Type): void
}

export namespace $ControlPitchContraption$Block {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlPitchContraption$Block$Type = ($ControlPitchContraption$Block);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlPitchContraption$Block_ = $ControlPitchContraption$Block$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonAmmoType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AutocannonAmmoType extends $Enum<($AutocannonAmmoType)> {
static readonly "AUTOCANNON": $AutocannonAmmoType
static readonly "MACHINE_GUN": $AutocannonAmmoType
static readonly "NONE": $AutocannonAmmoType


public static "values"(): ($AutocannonAmmoType)[]
public static "valueOf"(name: string): $AutocannonAmmoType
public static "of"(stack: $ItemStack$Type): $AutocannonAmmoType
public "getCapacity"(): integer
public "isValidMunition"(stack: $ItemStack$Type): boolean
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonAmmoType$Type = (("none") | ("autocannon") | ("machine_gun")) | ($AutocannonAmmoType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonAmmoType_ = $AutocannonAmmoType$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/equipment/manual_loading/$HandloadingTool" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MountedBigCannonContraption, $MountedBigCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$MountedBigCannonContraption"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $HandloadingTool {

 "onUseOnCannon"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $MountedBigCannonContraption$Type): void

(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $MountedBigCannonContraption$Type): void
}

export namespace $HandloadingTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandloadingTool$Type = ($HandloadingTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandloadingTool_ = $HandloadingTool$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/propellant/$PowderChargeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PowderChargeItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowderChargeItem$Type = ($PowderChargeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PowderChargeItem_ = $PowderChargeItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastingRecipe$Serializer" {
import {$BlockRecipeSerializer, $BlockRecipeSerializer$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$CannonCastingRecipe, $CannonCastingRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastingRecipe"

export class $CannonCastingRecipe$Serializer implements $BlockRecipeSerializer<($CannonCastingRecipe)> {

constructor()

public "toNetwork"(buf: $FriendlyByteBuf$Type, recipe: $CannonCastingRecipe$Type): void
public static "register"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonCastingRecipe$Serializer$Type = ($CannonCastingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonCastingRecipe$Serializer_ = $CannonCastingRecipe$Serializer$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AbstractAutocannonProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AutocannonAmmoType, $AutocannonAmmoType$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonAmmoType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$AbstractCannonProjectile, $AbstractCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AbstractAutocannonProjectile extends $AbstractCannonProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>


public "remove"(reason: $Entity$RemovalReason$Type): void
public "getAutocannonRoundType"(): $AutocannonAmmoType
public "getTotalDisplacement"(): double
public "setTotalDisplacement"(value: double): void
public "tick"(): void
public "readAdditionalSaveData"(tag: $CompoundTag$Type): void
public "addAdditionalSaveData"(tag: $CompoundTag$Type): void
public "addExtraSyncData"(): $CompoundTag
public "readExtraSyncData"(tag: $CompoundTag$Type): void
public "setTracer"(tracer: boolean): void
public "isTracer"(): boolean
public "setLifetime"(lifetime: integer): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "autocannonRoundType"(): $AutocannonAmmoType
get "totalDisplacement"(): double
set "totalDisplacement"(value: double)
set "tracer"(value: boolean)
get "tracer"(): boolean
set "lifetime"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAutocannonProjectile$Type = ($AbstractAutocannonProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAutocannonProjectile_ = $AbstractAutocannonProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/$ICannonBlockEntity" {
import {$CannonBehavior, $CannonBehavior$Type} from "packages/rbasamoyai/createbigcannons/cannons/$CannonBehavior"

export interface $ICannonBlockEntity<T extends $CannonBehavior> {

 "cannonBehavior"(): T

(): T
}

export namespace $ICannonBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICannonBlockEntity$Type<T> = ($ICannonBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICannonBlockEntity_<T> = $ICannonBlockEntity$Type<(T)>;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/breeches/sliding_breech/$SlidingBreechBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BigCannonEnd, $BigCannonEnd$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEnd"
import {$AbstractBigCannonBreechBlockEntity, $AbstractBigCannonBreechBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/breeches/$AbstractBigCannonBreechBlockEntity"

export class $SlidingBreechBlockEntity extends $AbstractBigCannonBreechBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "isOpen"(): boolean
public "tick"(): void
public "getOpeningType"(): $BigCannonEnd
public "getRenderedBlockOffset"(partialTicks: float): float
public "canClose"(): boolean
public "getOpeningSpeed"(): float
public static "getInnerCannonBlockState"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, state: $BlockState$Type): boolean
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "isValidLoader"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "open"(): boolean
get "openingType"(): $BigCannonEnd
get "openingSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlidingBreechBlockEntity$Type = ($SlidingBreechBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlidingBreechBlockEntity_ = $SlidingBreechBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedProjectileBlock" {
import {$ProjectileBlock, $ProjectileBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$ProjectileBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AbstractBigCannonProjectile, $AbstractBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$FuzedBigCannonProjectile, $FuzedBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBigCannonProjectile"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FuzedBlockEntity, $FuzedBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FuzedProjectileBlock<BLOCK_ENTITY extends $FuzedBlockEntity, ENTITY extends $FuzedBigCannonProjectile> extends $ProjectileBlock<(ENTITY)> implements $IBE<(BLOCK_ENTITY)> {
static readonly "FACING": $DirectionProperty
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


public "getProjectile"(level: $Level$Type, itemStack: $ItemStack$Type): $AbstractBigCannonProjectile
public "getProjectile"(level: $Level$Type, projectileBlocks: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>): $AbstractBigCannonProjectile
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public static "getFuzeFromItemStack"(stack: $ItemStack$Type): $ItemStack
public "isBaseFuze"(): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<(BLOCK_ENTITY)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<(BLOCK_ENTITY), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): BLOCK_ENTITY
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<(BLOCK_ENTITY)>
public "getBlockEntityClass"(): $Class<(BLOCK_ENTITY)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "baseFuze"(): boolean
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<(BLOCK_ENTITY)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuzedProjectileBlock$Type<BLOCK_ENTITY, ENTITY> = ($FuzedProjectileBlock<(BLOCK_ENTITY), (ENTITY)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuzedProjectileBlock_<BLOCK_ENTITY, ENTITY> = $FuzedProjectileBlock$Type<(BLOCK_ENTITY), (ENTITY)>;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BigCannonBlock, $BigCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BigCannonBlockItem<T extends ($Block) & ($BigCannonBlock)> extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: T, properties: $Item$Properties$Type)

public "place"(context: $BlockPlaceContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonBlockItem$Type<T> = ($BigCannonBlockItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonBlockItem_<T> = $BigCannonBlockItem$Type<(T)>;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/builtup/$CannonBuilderHeadBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WrenchableDirectionalBlock, $WrenchableDirectionalBlock$Type} from "packages/com/simibubi/create/foundation/block/$WrenchableDirectionalBlock"

export class $CannonBuilderHeadBlock extends $WrenchableDirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "ATTACHED": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "isPathfindable"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(state: $BlockState$Type, face: $Direction$Type, otherState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, otherPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonBuilderHeadBlock$Type = ($CannonBuilderHeadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonBuilderHeadBlock_ = $CannonBuilderHeadBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_loading/$RamHeadBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WrenchableDirectionalBlock, $WrenchableDirectionalBlock$Type} from "packages/com/simibubi/create/foundation/block/$WrenchableDirectionalBlock"

export class $RamHeadBlock extends $WrenchableDirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighbor: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RamHeadBlock$Type = ($RamHeadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RamHeadBlock_ = $RamHeadBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$MountedBigCannonContraption" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$ControlPitchContraption, $ControlPitchContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/$ControlPitchContraption"
import {$Operation, $Operation$Type} from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ContraptionType, $ContraptionType$Type} from "packages/com/simibubi/create/content/contraptions/$ContraptionType"
import {$AbstractMountedCannonContraption, $AbstractMountedCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$AbstractMountedCannonContraption"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ICannonContraptionType, $ICannonContraptionType$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/cannon_types/$ICannonContraptionType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractBigCannonProjectile, $AbstractBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MountedBigCannonContraption extends $AbstractMountedCannonContraption {
 "hasFired": boolean
 "hasWeldedPenalty": boolean
 "simplifiedEntityColliders": $Optional<($List<($AABB)>)>
 "entity": $AbstractContraptionEntity
 "bounds": $AABB
 "anchor": $BlockPos
 "stalled": boolean
 "hasUniversalCreativeCrate": boolean
 "disassembled": boolean
 "modelData": $Map<($BlockPos), ($ModelData)>
 "presentBlockEntities": $Map<($BlockPos), ($BlockEntity)>
 "maybeInstancedBlockEntities": $List<($BlockEntity)>
 "specialRenderedBlockEntities": $List<($BlockEntity)>
 "deferInvalidate": boolean

constructor()

public "getType"(): $ContraptionType
public "fail"(localPos: $BlockPos$Type, level: $Level$Type, entity: $PitchOrientedContraptionEntity$Type, failed: $BlockEntity$Type, charges: integer): void
public "tick"(level: $Level$Type, entity: $PitchOrientedContraptionEntity$Type): void
public "isDropMortar"(): boolean
public "assemble"(level: $Level$Type, pos: $BlockPos$Type): boolean
public "tryDroppingMortarRound"(stack: $ItemStack$Type): boolean
public "writeNBT"(clientData: boolean): $CompoundTag
public "readNBT"(level: $Level$Type, tag: $CompoundTag$Type, clientData: boolean): void
public "onRedstoneUpdate"(level: $ServerLevel$Type, entity: $PitchOrientedContraptionEntity$Type, togglePower: boolean, firePower: integer, controller: $ControlPitchContraption$Type): void
public "wrapOperation$gdi000$vs_addition$shoot"(instance: $AbstractBigCannonProjectile$Type, x: double, y: double, z: double, velocity: float, inaccuracy: float, original: $Operation$Type<(any)>): void
public "handler$gdi001$vs_addition$getShip"(level: $ServerLevel$Type, entity: $PitchOrientedContraptionEntity$Type, ci: $CallbackInfo$Type): void
public "handler$gdi001$vs_addition$recoil"(level: $ServerLevel$Type, entity: $PitchOrientedContraptionEntity$Type, ci: $CallbackInfo$Type): void
public "actuallyFireDropMortar"(): void
public "addPassengersToWorld"(world: $Level$Type, transform: $StructureTransform$Type, seatedEntities: $List$Type<($Entity$Type)>): void
public "getWeightForStress"(): float
public "fireShot"(level: $ServerLevel$Type, entity: $PitchOrientedContraptionEntity$Type): void
public "getInteractionVec"(poce: $PitchOrientedContraptionEntity$Type): $Vec3
public "getCannonType"(): $ICannonContraptionType
public "getMaxSafeCharges"(): integer
get "type"(): $ContraptionType
get "dropMortar"(): boolean
get "weightForStress"(): float
get "cannonType"(): $ICannonContraptionType
get "maxSafeCharges"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountedBigCannonContraption$Type = ($MountedBigCannonContraption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MountedBigCannonContraption_ = $MountedBigCannonContraption$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/smoke_shell/$SmokeShellBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SmokeShellProjectile, $SmokeShellProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/smoke_shell/$SmokeShellProjectile"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SimpleShellBlock, $SimpleShellBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$SimpleShellBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SmokeShellBlock extends $SimpleShellBlock<($SmokeShellProjectile)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getAssociatedEntityType"(): $EntityType<(any)>
public "isBaseFuze"(): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "associatedEntityType"(): $EntityType<(any)>
get "baseFuze"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokeShellBlock$Type = ($SmokeShellBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmokeShellBlock_ = $SmokeShellBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_loading/$CannonLoaderBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$PoleMoverBlockEntity, $PoleMoverBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/base/$PoleMoverBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CannonLoaderBlockEntity extends $PoleMoverBlockEntity {
 "offset": float
 "running": boolean
 "assembleNextTick": boolean
 "needsContraption": boolean
 "movedContraption": $AbstractContraptionEntity
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(typeIn: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "tick"(): void
public "disassemble"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonLoaderBlockEntity$Type = ($CannonLoaderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonLoaderBlockEntity_ = $CannonLoaderBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/block_armor_properties/$BlockArmorInspectionToolItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockArmorInspectionToolItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public static "addIsHoldingPredicate"(predicate: $Predicate$Type<($Player$Type)>): void
public static "registerDefaultHandlers"(): void
public "isFoil"(stack: $ItemStack$Type): boolean
public static "isHoldingTool"(player: $Player$Type): boolean
public static "addBlockArmorInfo"(tooltip: $List$Type<($Component$Type)>, level: $Level$Type, pos: $BlockPos$Type, blockState: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockArmorInspectionToolItem$Type = ($BlockArmorInspectionToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockArmorInspectionToolItem_ = $BlockArmorInspectionToolItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonRoundItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$AutocannonProjectilePropertiesComponent, $AutocannonProjectilePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/config/$AutocannonProjectilePropertiesComponent"
import {$AbstractAutocannonProjectile, $AbstractAutocannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AbstractAutocannonProjectile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutocannonRoundItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any


public "getCreativeTabCartridgeItem"(): $ItemStack
public "getAutocannonProjectile"(arg0: $ItemStack$Type, arg1: $Level$Type): $AbstractAutocannonProjectile
public "getAutocannonProperties"(arg0: $ItemStack$Type): $AutocannonProjectilePropertiesComponent
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "getEntityType"(arg0: $ItemStack$Type): $EntityType<(any)>
get "creativeTabCartridgeItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonRoundItem$Type = ($AutocannonRoundItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonRoundItem_ = $AutocannonRoundItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/shrapnel/$ShrapnelShellBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SimpleShellBlock, $SimpleShellBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$SimpleShellBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ShrapnelShellProjectile, $ShrapnelShellProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/shrapnel/$ShrapnelShellProjectile"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ShrapnelShellBlock extends $SimpleShellBlock<($ShrapnelShellProjectile)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getAssociatedEntityType"(): $EntityType<(any)>
public "isBaseFuze"(): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "associatedEntityType"(): $EntityType<(any)>
get "baseFuze"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShrapnelShellBlock$Type = ($ShrapnelShellBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShrapnelShellBlock_ = $ShrapnelShellBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractCannonCastBlockEntity, $AbstractCannonCastBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$AbstractCannonCastBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $CannonCastBlock extends $Block implements $IBE<($AbstractCannonCastBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "castFractionToRedstoneLevel"(frac: float): integer
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, dropContents: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "getShadeBrightness"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getVisualShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getBlockEntityClass"(): $Class<($AbstractCannonCastBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($AbstractCannonCastBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($AbstractCannonCastBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $AbstractCannonCastBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($AbstractCannonCastBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($AbstractCannonCastBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonCastBlock$Type = ($CannonCastBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonCastBlock_ = $CannonCastBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/fluid_shell/$FluidShellBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FuzedProjectileBlockItem, $FuzedProjectileBlockItem$Type} from "packages/rbasamoyai/createbigcannons/munitions/$FuzedProjectileBlockItem"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidShellBlockItem extends $FuzedProjectileBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidShellBlockItem$Type = ($FluidShellBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidShellBlockItem_ = $FluidShellBlockItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/breeches/quickfiring_breech/$QuickfiringMechanismItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuickfiringMechanismItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuickfiringMechanismItem$Type = ($QuickfiringMechanismItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuickfiringMechanismItem_ = $QuickfiringMechanismItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBehavior" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BehaviourType, $BehaviourType$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"
import {$CannonBehavior, $CannonBehavior$Type} from "packages/rbasamoyai/createbigcannons/cannons/$CannonBehavior"

export class $BigCannonBehavior extends $CannonBehavior {
static readonly "TYPE": $BehaviourType<(any)>
static readonly "EMPTY": $StructureTemplate$StructureBlockInfo
 "blockEntity": $SmartBlockEntity

constructor(te: $SmartBlockEntity$Type, predicate: $Predicate$Type<($StructureTemplate$StructureBlockInfo$Type)>)

public "write"(nbt: $CompoundTag$Type, spawnPacket: boolean): void
public "read"(nbt: $CompoundTag$Type, clientPacket: boolean): void
public "getType"(): $BehaviourType<(any)>
public "block"(): $StructureTemplate$StructureBlockInfo
public "loadBlock"(info: $StructureTemplate$StructureBlockInfo$Type): void
public "tryLoadingBlock"(info: $StructureTemplate$StructureBlockInfo$Type): boolean
public "removeBlock"(): void
public "canLoadBlock"(info: $StructureTemplate$StructureBlockInfo$Type): boolean
get "type"(): $BehaviourType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonBehavior$Type = ($BigCannonBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonBehavior_ = $BigCannonBehavior$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/he_shell/$HEShellProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FuzedBigCannonProjectile, $FuzedBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBigCannonProjectile"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$EntityDamagePropertiesComponent, $EntityDamagePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/config/components/$EntityDamagePropertiesComponent"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HEShellProjectile extends $FuzedBigCannonProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>

constructor(type: $EntityType$Type<(any)>, level: $Level$Type)

public "getDamageProperties"(): $EntityDamagePropertiesComponent
public "getRenderedBlockState"(): $BlockState
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "damageProperties"(): $EntityDamagePropertiesComponent
get "renderedBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HEShellProjectile$Type = ($HEShellProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HEShellProjectile_ = $HEShellProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/breech/$AbstractAutocannonBreechBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$AnimatedAutocannon, $AnimatedAutocannon$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AnimatedAutocannon"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractAutocannonBreechBlockEntityAccessor, $AbstractAutocannonBreechBlockEntityAccessor$Type} from "packages/io/github/xiewuzhiying/vs_addition/mixin/createbigcannons/$AbstractAutocannonBreechBlockEntityAccessor"
import {$AutocannonBlockEntity, $AutocannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBlockEntity"

export class $AbstractAutocannonBreechBlockEntity extends $AutocannonBlockEntity implements $AnimatedAutocannon, $AbstractAutocannonBreechBlockEntityAccessor {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte


public "tick"(): void
public "incrementAnimationTicks"(): void
public "tickFromContraption"(level: $Level$Type, poce: $PitchOrientedContraptionEntity$Type, localPos: $BlockPos$Type): void
public "insertOutput"(stack: $ItemStack$Type): $ItemStack
public "getActualFireRate"(): integer
public "setOutputBuffer"(stack: $ItemStack$Type): void
public "getAnimateOffset"(partialTicks: float): float
public "isInputFull"(): boolean
public "getOutputBuffer"(): $ItemStack
public "setFireRate"(power: integer): void
public "canFire"(): boolean
public "handleFiring"(): void
public "getAnimationTicks"(): integer
public "getQueueLimit"(): integer
public "getInputBuffer"(): $Deque<($ItemStack)>
public "isOutputFull"(): boolean
public "extractNextInput"(): $ItemStack
public "setMagazine"(stack: $ItemStack$Type): void
public "setSeatColor"(color: $DyeColor$Type): void
public "getMagazine"(): $ItemStack
public "getDrops"(): $List<($ItemStack)>
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "actualFireRate"(): integer
set "outputBuffer"(value: $ItemStack$Type)
get "inputFull"(): boolean
get "outputBuffer"(): $ItemStack
set "fireRate"(value: integer)
get "animationTicks"(): integer
get "queueLimit"(): integer
get "inputBuffer"(): $Deque<($ItemStack)>
get "outputFull"(): boolean
set "magazine"(value: $ItemStack$Type)
set "seatColor"(value: $DyeColor$Type)
get "magazine"(): $ItemStack
get "drops"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAutocannonBreechBlockEntity$Type = ($AbstractAutocannonBreechBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAutocannonBreechBlockEntity_ = $AbstractAutocannonBreechBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/mixin/client/$Blaze3DAudioChannelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Blaze3DAudioChannelAccessor {

 "getSource"(): integer

(): integer
}

export namespace $Blaze3DAudioChannelAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Blaze3DAudioChannelAccessor$Type = ($Blaze3DAudioChannelAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Blaze3DAudioChannelAccessor_ = $Blaze3DAudioChannelAccessor$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/$MovesWithAutocannonRecoilSpring" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $MovesWithAutocannonRecoilSpring {

 "getMovingState"(arg0: $BlockState$Type): $BlockState
 "getStationaryState"(arg0: $BlockState$Type): $BlockState
}

export namespace $MovesWithAutocannonRecoilSpring {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovesWithAutocannonRecoilSpring$Type = ($MovesWithAutocannonRecoilSpring);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MovesWithAutocannonRecoilSpring_ = $MovesWithAutocannonRecoilSpring$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/incomplete/$IncompleteSlidingBreechBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$SolidBigCannonBlock, $SolidBigCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$SolidBigCannonBlock"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IncompleteBigCannonBlockEntity, $IncompleteBigCannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/crafting/incomplete/$IncompleteBigCannonBlockEntity"
import {$ITransformableBlock, $ITransformableBlock$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$IncompleteWithItemsCannonBlock, $IncompleteWithItemsCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/crafting/incomplete/$IncompleteWithItemsCannonBlock"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $IncompleteSlidingBreechBlock extends $SolidBigCannonBlock<($IncompleteBigCannonBlockEntity)> implements $IncompleteWithItemsCannonBlock, $ITransformableBlock {
static readonly "ALONG_FIRST": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type, secondItemSupplier: $NonNullSupplier$Type<(any)>, resultSupplier: $NonNullSupplier$Type<(any)>)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "isComplete"(state: $BlockState$Type): boolean
public "progress"(state: $BlockState$Type): integer
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCannonShape"(): $CannonCastShape
public "getCompleteBlockState"(state: $BlockState$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "requiredItems"(): $List<($ItemLike)>
public "getBlockEntityClass"(): $Class<($IncompleteBigCannonBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "blockEntityClass"(): $Class<($IncompleteBigCannonBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncompleteSlidingBreechBlock$Type = ($IncompleteSlidingBreechBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IncompleteSlidingBreechBlock_ = $IncompleteSlidingBreechBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$DisintegratingBigCannonProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractBigCannonProjectile, $AbstractBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DisintegratingBigCannonProjectile extends $AbstractBigCannonProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>


public "tick"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisintegratingBigCannonProjectile$Type = ($DisintegratingBigCannonProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisintegratingBigCannonProjectile_ = $DisintegratingBigCannonProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$InertProjectileBlock" {
import {$ProjectileBlock, $ProjectileBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$ProjectileBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BigCannonProjectileBlockEntity, $BigCannonProjectileBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$BigCannonProjectileBlockEntity"
import {$AbstractBigCannonProjectile, $AbstractBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $InertProjectileBlock extends $ProjectileBlock<($AbstractBigCannonProjectile)> implements $IBE<($BigCannonProjectileBlockEntity)> {
static readonly "FACING": $DirectionProperty
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


public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getProjectile"(level: $Level$Type, itemStack: $ItemStack$Type): $AbstractBigCannonProjectile
public "getProjectile"(level: $Level$Type, projectileBlocks: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>): $AbstractBigCannonProjectile
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntityClass"(): $Class<($BigCannonProjectileBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($BigCannonProjectileBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($BigCannonProjectileBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BigCannonProjectileBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($BigCannonProjectileBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($BigCannonProjectileBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InertProjectileBlock$Type = ($InertProjectileBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InertProjectileBlock_ = $InertProjectileBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/flak/$FlakAutocannonRoundItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AutocannonRoundItem, $AutocannonRoundItem$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonRoundItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FuzedItemMunition, $FuzedItemMunition$Type} from "packages/rbasamoyai/createbigcannons/munitions/$FuzedItemMunition"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$AutocannonProjectilePropertiesComponent, $AutocannonProjectilePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/config/$AutocannonProjectilePropertiesComponent"
import {$AbstractAutocannonProjectile, $AbstractAutocannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AbstractAutocannonProjectile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FlakAutocannonRoundItem extends $AutocannonRoundItem implements $FuzedItemMunition {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "getAutocannonProjectile"(stack: $ItemStack$Type, level: $Level$Type): $AbstractAutocannonProjectile
public "getAutocannonProperties"(itemStack: $ItemStack$Type): $AutocannonProjectilePropertiesComponent
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getEntityType"(stack: $ItemStack$Type): $EntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlakAutocannonRoundItem$Type = ($FlakAutocannonRoundItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlakAutocannonRoundItem_ = $FlakAutocannonRoundItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/index/$CBCRecipeTypes$SimpleRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CBCRecipeTypes$SimpleRecipeSerializer<T extends $Recipe<(any)>> implements $RecipeSerializer<(T)> {

constructor(arg0: $Function$Type<($ResourceLocation$Type), (T)>)

public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): T
public "fromJson"(recipeId: $ResourceLocation$Type, serializedRecipe: $JsonObject$Type): T
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBCRecipeTypes$SimpleRecipeSerializer$Type<T> = ($CBCRecipeTypes$SimpleRecipeSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBCRecipeTypes$SimpleRecipeSerializer_<T> = $CBCRecipeTypes$SimpleRecipeSerializer$Type<(T)>;
}}
declare module "packages/rbasamoyai/createbigcannons/index/fluid_utils/$CBCFlowingFluid$Properties" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CBCFlowingFluid$Properties {

constructor(still: $Supplier$Type<(any)>, flowing: $Supplier$Type<(any)>, stillTex: $ResourceLocation$Type, flowingTex: $ResourceLocation$Type)

public "block"(block: $Supplier$Type<(any)>): $CBCFlowingFluid$Properties
public "color"(color: integer): $CBCFlowingFluid$Properties
public "bucket"(bucket: $Supplier$Type<(any)>): $CBCFlowingFluid$Properties
public "levelDecreasePerBlock"(levelDecreasePerBlock: integer): $CBCFlowingFluid$Properties
public "sound"(sound: $SoundEvent$Type): $CBCFlowingFluid$Properties
public "sound"(fill: $SoundEvent$Type, empty: $SoundEvent$Type): $CBCFlowingFluid$Properties
public "tickRate"(tickRate: integer): $CBCFlowingFluid$Properties
public "blastResistance"(blastResistance: float): $CBCFlowingFluid$Properties
public "flowSpeed"(flowSpeed: integer): $CBCFlowingFluid$Properties
public "canMultiply"(): $CBCFlowingFluid$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBCFlowingFluid$Properties$Type = ($CBCFlowingFluid$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBCFlowingFluid$Properties_ = $CBCFlowingFluid$Properties$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/casting/$AbstractCannonCastBlockEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IMultiBlockEntityContainer, $IMultiBlockEntityContainer$Type} from "packages/com/simibubi/create/foundation/blockEntity/$IMultiBlockEntityContainer"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$WandActionable, $WandActionable$Type} from "packages/rbasamoyai/createbigcannons/crafting/$WandActionable"
import {$IHaveHoveringInformation, $IHaveHoveringInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveHoveringInformation"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$CannonCastingRecipe, $CannonCastingRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastingRecipe"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractCannonCastBlockEntity extends $SmartBlockEntity implements $WandActionable, $IMultiBlockEntityContainer, $IHaveHoveringInformation {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "initialize"(): void
public "tick"(): void
public "getMaxWidth"(): integer
public "getMaxLength"(longAxis: $Direction$Axis$Type, width: integer): integer
public "preventConnectivityUpdate"(): void
public "getMainConnectionAxis"(): $Direction$Axis
public "getHeight"(): integer
public "getWidth"(): integer
public "calculateCapacityFromStructure"(): integer
public static "getStructureFromPoint"(level: $Level$Type, pos: $BlockPos$Type, height: integer): $List<($CannonCastShape)>
public "destroyCastMultiblockAtLayer"(): void
public "initializeCastMultiblock"(size: $CannonCastShape$Type): void
public static "getMaxHeight"(): integer
public "setWidth"(width: integer): void
public "getRenderedSize"(): $CannonCastShape
public "getCastingState"(): float
public "canRenderCastModel"(): boolean
public "getCenterBlock"(): $BlockPos
public "matchesRecipe"(recipe: $CannonCastingRecipe$Type): boolean
public "setFluidLevel"(level: $LerpedFloat$Type): void
public "getCastingLevel"(): $LerpedFloat
public "isController"(): boolean
public "setController"(pos: $BlockPos$Type): void
public "getLastKnownPos"(): $BlockPos
public "getController"(): $BlockPos
public "addToTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "onWandUsed"(context: $UseOnContext$Type): $InteractionResult
public "sendData"(): void
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "removeController"(keepContents: boolean): void
public "getFillState"(): float
public "notifyMultiUpdated"(): void
public "getFluidLevel"(): $LerpedFloat
public "setHeight"(height: integer): void
public "tryEmptyItemIntoBE"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Direction$Type): boolean
public "tryFillItemFromBE"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: $Direction$Type): boolean
public "getExtraData"(): any
public "getMainAxisOf"(arg0: $BlockEntity$Type): $Direction$Axis
public "modifyExtraData"(arg0: any): any
public "setExtraData"(arg0: any): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "maxWidth"(): integer
get "mainConnectionAxis"(): $Direction$Axis
get "height"(): integer
get "width"(): integer
get "maxHeight"(): integer
set "width"(value: integer)
get "renderedSize"(): $CannonCastShape
get "castingState"(): float
get "centerBlock"(): $BlockPos
set "fluidLevel"(value: $LerpedFloat$Type)
get "castingLevel"(): $LerpedFloat
get "controller"(): boolean
set "controller"(value: $BlockPos$Type)
get "lastKnownPos"(): $BlockPos
get "controller"(): $BlockPos
get "fillState"(): float
get "fluidLevel"(): $LerpedFloat
set "height"(value: integer)
get "extraData"(): any
set "extraData"(value: any)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCannonCastBlockEntity$Type = ($AbstractCannonCastBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCannonCastBlockEntity_ = $AbstractCannonCastBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/cannon_mount/$CannonMountBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ControlPitchContraption$Block, $ControlPitchContraption$Block$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/$ControlPitchContraption$Block"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$IDisplayAssemblyExceptions, $IDisplayAssemblyExceptions$Type} from "packages/com/simibubi/create/content/contraptions/$IDisplayAssemblyExceptions"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CannonMountBlockEntityAccessor, $CannonMountBlockEntityAccessor$Type} from "packages/io/github/xiewuzhiying/vs_addition/mixin/createbigcannons/$CannonMountBlockEntityAccessor"
import {$ExtendsCannonMount, $ExtendsCannonMount$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/cannon_mount/$ExtendsCannonMount"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AssemblyException, $AssemblyException$Type} from "packages/com/simibubi/create/content/contraptions/$AssemblyException"

export class $CannonMountBlockEntity extends $KineticBlockEntity implements $IDisplayAssemblyExceptions, $ControlPitchContraption$Block, $ExtendsCannonMount, $CannonMountBlockEntityAccessor {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(typeIn: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "remove"(): void
public "attach"(contraption: $PitchOrientedContraptionEntity$Type): void
public "tick"(): void
public "isRunning"(): boolean
public "getCapability"(cap: $Capability$Type<(any)>, side: $Direction$Type): $LazyOptional<(any)>
public "onSpeedChanged"(prevSpeed: float): void
public "getTypeId"(): $ResourceLocation
public "setPitch"(pitch: float): void
public "setYaw"(yaw: float): void
public "disassemble"(): void
public "getCannonMount"(): $CannonMountBlockEntity
public "getDisplayPitch"(): float
public "getControllerState"(): $BlockState
public "getContraption"(): $PitchOrientedContraptionEntity
public "onRedstoneUpdate"(assemblyPowered: boolean, prevAssemblyPowered: boolean, firePowered: boolean, prevFirePowered: boolean, firePower: integer): void
public "getAngularSpeed"(sup: $Supplier$Type<(float)>, clientDiff: float): float
public "isAttachedTo"(entity: $AbstractContraptionEntity$Type): boolean
public "onStall"(): void
public "getControllerBlockPos"(): $BlockPos
public "getDismountPositionForContraption"(poce: $PitchOrientedContraptionEntity$Type): $BlockPos
public "getContraptionDirection"(): $Direction
public "getTheoreticalYawSpeed"(): float
public "setSequencedYawAngleLimit"(angleLimit: float): void
public static "cannonBlockOutsideOfWorld"(pos: $BlockPos$Type): $AssemblyException
public "getInteractionLocation"(): $Vec3
public "getYawOffset"(partialTicks: float): float
public "getLastAssemblyException"(): $AssemblyException
public "lazyTick"(): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "calculateStressApplied"(): float
public "getPitchOffset"(partialTicks: float): float
public "getYawSpeed"(): float
public "addExceptionToTooltip"(arg0: $List$Type<($Component$Type)>): boolean
public static "addCannonInfoToTooltip"(tooltip: $List$Type<($Component$Type)>, mountedContraption: $PitchOrientedContraptionEntity$Type): void
public "onRecoil"(vector: $Vec3$Type, cannon: $AbstractContraptionEntity$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "running"(): boolean
get "typeId"(): $ResourceLocation
set "pitch"(value: float)
set "yaw"(value: float)
get "cannonMount"(): $CannonMountBlockEntity
get "displayPitch"(): float
get "controllerState"(): $BlockState
get "contraption"(): $PitchOrientedContraptionEntity
get "controllerBlockPos"(): $BlockPos
get "contraptionDirection"(): $Direction
get "theoreticalYawSpeed"(): float
set "sequencedYawAngleLimit"(value: float)
get "interactionLocation"(): $Vec3
get "lastAssemblyException"(): $AssemblyException
get "yawSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonMountBlockEntity$Type = ($CannonMountBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonMountBlockEntity_ = $CannonMountBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/grapeshot/$GrapeshotBlock" {
import {$ProjectileBlock, $ProjectileBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$ProjectileBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$GrapeshotBagProjectile, $GrapeshotBagProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/grapeshot/$GrapeshotBagProjectile"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractBigCannonProjectile, $AbstractBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $GrapeshotBlock extends $ProjectileBlock<($GrapeshotBagProjectile)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getProjectile"(level: $Level$Type, itemStack: $ItemStack$Type): $AbstractBigCannonProjectile
public "getProjectile"(level: $Level$Type, projectileBlocks: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>): $AbstractBigCannonProjectile
public "getAssociatedEntityType"(): $EntityType<(any)>
get "associatedEntityType"(): $EntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrapeshotBlock$Type = ($GrapeshotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrapeshotBlock_ = $GrapeshotBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/breeches/quickfiring_breech/$QuickfiringBreechBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BigCannonEnd, $BigCannonEnd$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEnd"
import {$QuickfiringBreechBlockEntity, $QuickfiringBreechBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/breeches/quickfiring_breech/$QuickfiringBreechBlockEntity"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ITransformableBlock, $ITransformableBlock$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlock"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$BigCannonBaseBlock, $BigCannonBaseBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBaseBlock"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $QuickfiringBreechBlock extends $BigCannonBaseBlock implements $IBE<($QuickfiringBreechBlockEntity)>, $ITransformableBlock, $IWrenchable {
static readonly "AXIS": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type, slidingConversion: $NonNullSupplier$Type<(any)>)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "isComplete"(state: $BlockState$Type): boolean
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCannonShape"(): $CannonCastShape
public "onInteractWhileAssembled"(player: $Player$Type, localPos: $BlockPos$Type, side: $Direction$Type, interactionHand: $InteractionHand$Type, level: $Level$Type, contraption: $Contraption$Type, be: $BlockEntity$Type, info: $StructureTemplate$StructureBlockInfo$Type, entity: $PitchOrientedContraptionEntity$Type): boolean
public "getDefaultOpeningType"(): $BigCannonEnd
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "getBlockEntityClass"(): $Class<($QuickfiringBreechBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($QuickfiringBreechBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($QuickfiringBreechBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $QuickfiringBreechBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($QuickfiringBreechBlockEntity)>
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "defaultOpeningType"(): $BigCannonEnd
get "blockEntityClass"(): $Class<($QuickfiringBreechBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuickfiringBreechBlock$Type = ($QuickfiringBreechBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuickfiringBreechBlock_ = $QuickfiringBreechBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeIngredient" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockRecipeIngredient implements $Predicate<($BlockState)> {
static readonly "NONE": $BlockRecipeIngredient

constructor()

public static "of"(tag: $TagKey$Type<($Block$Type)>): $BlockRecipeIngredient
public static "of"(block: $Block$Type): $BlockRecipeIngredient
public static "fromString"(s: string): $BlockRecipeIngredient
public static "fromJson"(el: $JsonElement$Type): $BlockRecipeIngredient
public static "fromNetwork"(buf: $FriendlyByteBuf$Type): $BlockRecipeIngredient
public "toNetwork"(buf: $FriendlyByteBuf$Type): void
public "getBlockItems"(): $List<($ItemStack)>
public "stringForSerialization"(): string
public "test"(arg0: $BlockState$Type): boolean
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public "negate"(): $Predicate<($BlockState)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
get "blockItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRecipeIngredient$Type = ($BlockRecipeIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRecipeIngredient_ = $BlockRecipeIngredient$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile$ImpactResult" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$AbstractCannonProjectile$ImpactResult$KinematicOutcome, $AbstractCannonProjectile$ImpactResult$KinematicOutcome$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile$ImpactResult$KinematicOutcome"

export class $AbstractCannonProjectile$ImpactResult extends $Record {

constructor(kinematics: $AbstractCannonProjectile$ImpactResult$KinematicOutcome$Type, shouldRemove: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "kinematics"(): $AbstractCannonProjectile$ImpactResult$KinematicOutcome
public "shouldRemove"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCannonProjectile$ImpactResult$Type = ($AbstractCannonProjectile$ImpactResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCannonProjectile$ImpactResult_ = $AbstractCannonProjectile$ImpactResult$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/propellant/$BigCannonPropellantBlock" {
import {$BigCannonMunitionBlock, $BigCannonMunitionBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$BigCannonMunitionBlock"
import {$BigCannonBehavior, $BigCannonBehavior$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBehavior"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BigCannonPropellantBlock extends $BigCannonMunitionBlock {

 "getChargePower"(arg0: $StructureTemplate$StructureBlockInfo$Type): float
 "getChargePower"(arg0: $ItemStack$Type): float
 "getStressOnCannon"(arg0: $ItemStack$Type): float
 "getStressOnCannon"(arg0: $StructureTemplate$StructureBlockInfo$Type): float
 "getRecoil"(arg0: $StructureTemplate$StructureBlockInfo$Type): float
 "consumePropellant"(arg0: $BigCannonBehavior$Type): void
 "canBeIgnited"(data: $StructureTemplate$StructureBlockInfo$Type, dir: $Direction$Type): boolean
 "isValidAddition"(self: $StructureTemplate$StructureBlockInfo$Type, index: integer, dir: $Direction$Type): boolean
 "getSpread"(arg0: $StructureTemplate$StructureBlockInfo$Type): float
 "getExtractedItem"(arg0: $StructureTemplate$StructureBlockInfo$Type): $ItemStack
 "getHandloadingInfo"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $StructureTemplate$StructureBlockInfo
 "onCannonRotate"(arg0: $BlockState$Type, arg1: $Direction$Axis$Type, arg2: $Rotation$Type): $BlockState
 "canBeLoaded"(arg0: $BlockState$Type, arg1: $Direction$Axis$Type): boolean
 "getAxis"(arg0: $BlockState$Type): $Direction$Axis
}

export namespace $BigCannonPropellantBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonPropellantBlock$Type = ($BigCannonPropellantBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonPropellantBlock_ = $BigCannonPropellantBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/smoke_shell/$SmokeShellProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FuzedBigCannonProjectile, $FuzedBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBigCannonProjectile"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$EntityDamagePropertiesComponent, $EntityDamagePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/config/components/$EntityDamagePropertiesComponent"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SmokeShellProjectile extends $FuzedBigCannonProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>

constructor(type: $EntityType$Type<(any)>, level: $Level$Type)

public "getDamageProperties"(): $EntityDamagePropertiesComponent
public "getRenderedBlockState"(): $BlockState
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "damageProperties"(): $EntityDamagePropertiesComponent
get "renderedBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokeShellProjectile$Type = ($SmokeShellProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmokeShellProjectile_ = $SmokeShellProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEndBlock" {
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$SolidBigCannonBlock, $SolidBigCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$SolidBigCannonBlock"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BigCannonEndBlockEntity, $BigCannonEndBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEndBlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $BigCannonEndBlock extends $SolidBigCannonBlock<($BigCannonEndBlockEntity)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, cannonMaterial: $BigCannonMaterial$Type)

public "isComplete"(state: $BlockState$Type): boolean
public "getFacing"(state: $BlockState$Type): $Direction
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCannonShape"(): $CannonCastShape
public "canConnectToSide"(state: $BlockState$Type, dir: $Direction$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<($BigCannonEndBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "blockEntityClass"(): $Class<($BigCannonEndBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonEndBlock$Type = ($BigCannonEndBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonEndBlock_ = $BigCannonEndBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/fluid_shell/$FluidShellBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidShellProjectile, $FluidShellProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/fluid_shell/$FluidShellProjectile"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$AbstractBigCannonProjectile, $AbstractBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$AbstractFluidShellBlockEntity, $AbstractFluidShellBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/fluid_shell/$AbstractFluidShellBlockEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$FuzedProjectileBlock, $FuzedProjectileBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedProjectileBlock"

export class $FluidShellBlock extends $FuzedProjectileBlock<($AbstractFluidShellBlockEntity), ($FluidShellProjectile)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getProjectile"(level: $Level$Type, itemStack: $ItemStack$Type): $AbstractBigCannonProjectile
public "getProjectile"(level: $Level$Type, projectileBlocks: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>): $AbstractBigCannonProjectile
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getAssociatedEntityType"(): $EntityType<(any)>
public "getBlockEntityClass"(): $Class<($AbstractFluidShellBlockEntity)>
public "isBaseFuze"(): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "associatedEntityType"(): $EntityType<(any)>
get "blockEntityClass"(): $Class<($AbstractFluidShellBlockEntity)>
get "baseFuze"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidShellBlock$Type = ($FluidShellBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidShellBlock_ = $FluidShellBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/casting/$FinishedCannonCastBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FinishedCannonCastBlockEntity, $FinishedCannonCastBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$FinishedCannonCastBlockEntity"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FinishedCannonCastBlock extends $Block implements $IBE<($FinishedCannonCastBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
public "getShadeBrightness"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getVisualShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getBlockEntityClass"(): $Class<($FinishedCannonCastBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($FinishedCannonCastBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($FinishedCannonCastBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $FinishedCannonCastBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($FinishedCannonCastBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($FinishedCannonCastBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FinishedCannonCastBlock$Type = ($FinishedCannonCastBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FinishedCannonCastBlock_ = $FinishedCannonCastBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/$FuzedProjectileBlockItem" {
import {$ProjectileBlockItem, $ProjectileBlockItem$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$ProjectileBlockItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FuzedProjectileBlockItem extends $ProjectileBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuzedProjectileBlockItem$Type = ($FuzedProjectileBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuzedProjectileBlockItem_ = $FuzedProjectileBlockItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape" {
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PropertySetter, $PropertySetter$Type} from "packages/rbasamoyai/createbigcannons/base/$PropertySetter"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $CannonCastShape {
static readonly "VERY_SMALL": $CannonCastShape
static readonly "SMALL": $CannonCastShape
static readonly "MEDIUM": $CannonCastShape
static readonly "LARGE": $CannonCastShape
static readonly "VERY_LARGE": $CannonCastShape
static readonly "CANNON_END": $CannonCastShape
static readonly "SLIDING_BREECH": $CannonCastShape
static readonly "SCREW_BREECH": $CannonCastShape
static readonly "DROP_MORTAR_END": $CannonCastShape
static readonly "AUTOCANNON_BARREL": $CannonCastShape
static readonly "AUTOCANNON_BARREL_FLANGED": $CannonCastShape
static readonly "AUTOCANNON_BREECH": $CannonCastShape
static readonly "AUTOCANNON_RECOIL_SPRING": $CannonCastShape

constructor(fluidSizeForge: integer, diameter: integer, castMould: $NonNullSupplier$Type<(any)>, ...properties: ($PropertySetter$Type<(any)>)[])
constructor(fluidSizeForge: integer, diameter: integer, castMould: $NonNullSupplier$Type<(any)>, large: boolean, texturesCanConnect: boolean, ...properties: ($PropertySetter$Type<(any)>)[])

public "toString"(): string
public static "register"(): void
public "castMould"(): $Block
public "texturesCanConnect"(): boolean
public "diameter"(): integer
public "isLarge"(): boolean
public "applyTo"(state: $BlockState$Type): $BlockState
public "fluidSize"(): integer
get "large"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonCastShape$Type = ($CannonCastShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonCastShape_ = $CannonCastShape$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBarrelBlock$AutocannonBarrelEnd" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AutocannonBarrelBlock$AutocannonBarrelEnd extends $Enum<($AutocannonBarrelBlock$AutocannonBarrelEnd)> implements $StringRepresentable {
static readonly "NOTHING": $AutocannonBarrelBlock$AutocannonBarrelEnd
static readonly "FLANGED": $AutocannonBarrelBlock$AutocannonBarrelEnd


public static "values"(): ($AutocannonBarrelBlock$AutocannonBarrelEnd)[]
public static "valueOf"(name: string): $AutocannonBarrelBlock$AutocannonBarrelEnd
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
export type $AutocannonBarrelBlock$AutocannonBarrelEnd$Type = (("flanged") | ("nothing")) | ($AutocannonBarrelBlock$AutocannonBarrelEnd);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonBarrelBlock$AutocannonBarrelEnd_ = $AutocannonBarrelBlock$AutocannonBarrelEnd$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$DropMortarMunition" {
import {$DropMortarProjectile, $DropMortarProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$DropMortarProjectile"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractBigCannonProjectile, $AbstractBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile"

export interface $DropMortarMunition<PROJECTILE extends ($AbstractBigCannonProjectile) & ($DropMortarProjectile)> {

 "getDropMortarProjectile"(arg0: $Level$Type, arg1: $ItemStack$Type): PROJECTILE

(arg0: $Level$Type, arg1: $ItemStack$Type): PROJECTILE
}

export namespace $DropMortarMunition {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropMortarMunition$Type<PROJECTILE> = ($DropMortarMunition<(PROJECTILE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropMortarMunition_<PROJECTILE> = $DropMortarMunition$Type<(PROJECTILE)>;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$AutocannonBlock, $AutocannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutocannonBlockItem<T extends ($Block) & ($AutocannonBlock)> extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: T, properties: $Item$Properties$Type)

public "place"(context: $BlockPlaceContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonBlockItem$Type<T> = ($AutocannonBlockItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonBlockItem_<T> = $AutocannonBlockItem$Type<(T)>;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/carriage/$CannonCarriageBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CannonCarriageBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonCarriageBlockItem$Type = ($CannonCarriageBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonCarriageBlockItem_ = $CannonCarriageBlockItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$WeldableBlock, $WeldableBlock$Type} from "packages/rbasamoyai/createbigcannons/crafting/welding/$WeldableBlock"
import {$CannonContraptionProviderBlock, $CannonContraptionProviderBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/$CannonContraptionProviderBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BigCannonEnd, $BigCannonEnd$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEnd"
import {$AbstractMountedCannonContraption, $AbstractMountedCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$AbstractMountedCannonContraption"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$MountedBigCannonContraption, $MountedBigCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$MountedBigCannonContraption"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InteractableCannonBlock, $InteractableCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/$InteractableCannonBlock"

export interface $BigCannonBlock extends $WeldableBlock, $CannonContraptionProviderBlock, $InteractableCannonBlock {

 "getFacing"(arg0: $BlockState$Type): $Direction
 "getOpeningType"(contraption: $MountedBigCannonContraption$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonEnd
 "getOpeningType"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonEnd
 "onRemoveCannon"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
 "isImmovable"(state: $BlockState$Type): boolean
 "getCannonMaterial"(): $BigCannonMaterial
 "weldDamage"(): integer
 "canWeldSide"(level: $Level$Type, dir: $Direction$Type, state: $BlockState$Type, otherState: $BlockState$Type, pos: $BlockPos$Type): boolean
 "isWeldable"(state: $BlockState$Type): boolean
 "weldBlock"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, dir: $Direction$Type): void
 "onInteractWhileAssembled"(player: $Player$Type, localPos: $BlockPos$Type, side: $Direction$Type, interactionHand: $InteractionHand$Type, level: $Level$Type, contraption: $Contraption$Type, be: $BlockEntity$Type, info: $StructureTemplate$StructureBlockInfo$Type, entity: $PitchOrientedContraptionEntity$Type): boolean
 "getDefaultOpeningType"(): $BigCannonEnd
 "getCannonMaterialInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonMaterial
 "playerWillDestroyBigCannon"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
 "getCannonContraption"(): $AbstractMountedCannonContraption
 "isComplete"(arg0: $BlockState$Type): boolean
 "getCannonShape"(): $CannonCastShape
 "canConnectToSide"(state: $BlockState$Type, face: $Direction$Type): boolean
 "getCannonShapeInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $CannonCastShape
}

export namespace $BigCannonBlock {
function onPlace(level: $Level$Type, pos: $BlockPos$Type): void
function writeAndSyncSingleBlockData(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
function writeAndSyncMultipleBlockData(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonBlock$Type = ($BigCannonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonBlock_ = $BigCannonBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/base/$PoleMoverBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LinearActuatorBlockEntity, $LinearActuatorBlockEntity$Type} from "packages/com/simibubi/create/content/contraptions/piston/$LinearActuatorBlockEntity"

export class $PoleMoverBlockEntity extends $LinearActuatorBlockEntity {
 "offset": float
 "running": boolean
 "assembleNextTick": boolean
 "needsContraption": boolean
 "movedContraption": $AbstractContraptionEntity
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(typeIn: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "disassemble"(): void
public "getMovementSpeed"(): float
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "movementSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoleMoverBlockEntity$Type = ($PoleMoverBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoleMoverBlockEntity_ = $PoleMoverBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/index/fluid_utils/$CBCLiquidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidGetter, $FluidGetter$Type} from "packages/rbasamoyai/createbigcannons/index/fluid_utils/$FluidGetter"

export class $CBCLiquidBlock extends $LiquidBlock implements $FluidGetter {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
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

constructor(fluid: $NonNullSupplier$Type<(any)>, properties: $BlockBehaviour$Properties$Type)

public "getFluid"(): $FlowingFluid
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "skipRendering"(state: $BlockState$Type, adjacentBlockState: $BlockState$Type, direction: $Direction$Type): boolean
public "getFluidState"(arg: $BlockState$Type): $FluidState
public "pickupBlock"(level: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
get "fluid"(): $FlowingFluid
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBCLiquidBlock$Type = ($CBCLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBCLiquidBlock_ = $CBCLiquidBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/mixin/client/$CameraAccessor" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $CameraAccessor {

 "callSetPosition"(arg0: $Vec3$Type): void

(arg0: $Vec3$Type): void
}

export namespace $CameraAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraAccessor$Type = ($CameraAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraAccessor_ = $CameraAccessor$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/$ItemCannonBehavior" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BehaviourType, $BehaviourType$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"
import {$CannonBehavior, $CannonBehavior$Type} from "packages/rbasamoyai/createbigcannons/cannons/$CannonBehavior"

export class $ItemCannonBehavior extends $CannonBehavior {
static readonly "TYPE": $BehaviourType<($ItemCannonBehavior)>
 "blockEntity": $SmartBlockEntity

constructor(te: $SmartBlockEntity$Type)

public "write"(nbt: $CompoundTag$Type, spawnPacket: boolean): void
public "read"(nbt: $CompoundTag$Type, clientPacket: boolean): void
public "getType"(): $BehaviourType<(any)>
public "getItem"(): $ItemStack
public "removeItem"(): void
public "canLoadItem"(stack: $ItemStack$Type): boolean
public "tryLoadingItem"(stack: $ItemStack$Type): boolean
get "type"(): $BehaviourType<(any)>
get "item"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCannonBehavior$Type = ($ItemCannonBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCannonBehavior_ = $ItemCannonBehavior$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ControlPitchContraption, $ControlPitchContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/$ControlPitchContraption"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity$MoveFunction, $Entity$MoveFunction$Type} from "packages/net/minecraft/world/entity/$Entity$MoveFunction"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$AbstractContraptionEntity$ContraptionRotationState, $AbstractContraptionEntity$ContraptionRotationState$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity$ContraptionRotationState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$EntityDraggingInformation, $EntityDraggingInformation$Type} from "packages/org/valkyrienskies/mod/common/util/$EntityDraggingInformation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$MutableInt, $MutableInt$Type} from "packages/org/apache/commons/lang3/mutable/$MutableInt"
import {$ControlPitchContraption$Block, $ControlPitchContraption$Block$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/$ControlPitchContraption$Block"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$OrientedContraptionEntity, $OrientedContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$OrientedContraptionEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PitchOrientedContraptionEntity extends $OrientedContraptionEntity {
 "prevYaw": float
 "yaw": float
 "targetYaw": float
 "prevPitch": float
 "pitch": float
 "nonDamageTicks": integer
readonly "collidingEntities": $Map<($Entity), ($MutableInt)>
 "staleTicks": integer
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>

constructor(type: $EntityType$Type<(any)>, level: $Level$Type)

public static "create"(level: $Level$Type, contraption: $Contraption$Type, initialOrientation: $Direction$Type, block: $ControlPitchContraption$Block$Type): $PitchOrientedContraptionEntity
public static "create"(level: $Level$Type, contraption: $Contraption$Type, initialOrientation: $Direction$Type, updatesOwnRotation: boolean): $PitchOrientedContraptionEntity
public "getCapability"(cap: $Capability$Type<(any)>, side: $Direction$Type): $LazyOptional<(any)>
public "positionRider"(passenger: $Entity$Type, arg1: $Entity$MoveFunction$Type): void
public "ignoreExplosion"(): boolean
public "getSeatPos"(passenger: $Entity$Type): $BlockPos
public "maximumDepression"(): float
public "maximumElevation"(): float
public "onSyncedDataUpdated"(key: $EntityDataAccessor$Type<(any)>): void
public "invalidateCaps"(): void
public "getRotationCoefficient"(): float
public "getController"(): $ControlPitchContraption
public "canBeTurnedByController"(control: $ControlPitchContraption$Type): boolean
public "applyRotation"(localPos: $Vec3$Type, partialTicks: float): $Vec3
public "reverseRotation"(localPos: $Vec3$Type, partialTicks: float): $Vec3
public "getRotationState"(): $AbstractContraptionEntity$ContraptionRotationState
public "getDismountLocationForPassenger"(entityLiving: $LivingEntity$Type): $Vec3
public "getControllingPassenger"(): $LivingEntity
public "getPassengerPosition"(passenger: $Entity$Type, partialTicks: float): $Vec3
public "handlePlayerInteraction"(player: $Player$Type, localPos: $BlockPos$Type, side: $Direction$Type, interactionHand: $InteractionHand$Type): boolean
public "applyLocalTransforms"(stack: $PoseStack$Type, partialTicks: float): void
public "addSittingPassenger"(passenger: $Entity$Type, seatIndex: integer): void
public "handleAnimation"(): void
public "tryFiringShot"(): void
public "getDraggingInformation"(): $EntityDraggingInformation
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "rotationCoefficient"(): float
get "controller"(): $ControlPitchContraption
get "rotationState"(): $AbstractContraptionEntity$ContraptionRotationState
get "controllingPassenger"(): $LivingEntity
get "draggingInformation"(): $EntityDraggingInformation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PitchOrientedContraptionEntity$Type = ($PitchOrientedContraptionEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PitchOrientedContraptionEntity_ = $PitchOrientedContraptionEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/fuzes/$FuzeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ProjectileContext, $ProjectileContext$Type} from "packages/rbasamoyai/createbigcannons/munitions/$ProjectileContext"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractCannonProjectile, $AbstractCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$AbstractCannonProjectile$ImpactResult, $AbstractCannonProjectile$ImpactResult$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile$ImpactResult"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FuzeItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "onProjectileImpact"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type, hitResult: $HitResult$Type, impactResult: $AbstractCannonProjectile$ImpactResult$Type, baseFuze: boolean): boolean
public "canLingerInGround"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type): boolean
public "onProjectileTick"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type): boolean
public "onProjectileClip"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type, start: $Vec3$Type, end: $Vec3$Type, ctx: $ProjectileContext$Type, baseFuze: boolean): boolean
public "onProjectileExpiry"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type): boolean
public "addExtraInfo"(tooltip: $List$Type<($Component$Type)>, isSneaking: boolean, stack: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuzeItem$Type = ($FuzeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuzeItem_ = $FuzeItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/index/fluid_utils/$FluidGetter" {
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"

export interface $FluidGetter {

 "getFluid"(): $FlowingFluid

(): $FlowingFluid
}

export namespace $FluidGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidGetter$Type = ($FluidGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidGetter_ = $FluidGetter$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/solid_shot/$SolidShotBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InertProjectileBlock, $InertProjectileBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$InertProjectileBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SolidShotBlock extends $InertProjectileBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getAssociatedEntityType"(): $EntityType<(any)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "associatedEntityType"(): $EntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidShotBlock$Type = ($SolidShotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolidShotBlock_ = $SolidShotBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeType" {
import {$BuiltUpHeatingRecipe, $BuiltUpHeatingRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/builtup/$BuiltUpHeatingRecipe"
import {$DrillBoringBlockRecipe, $DrillBoringBlockRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/boring/$DrillBoringBlockRecipe"
import {$CannonCastingRecipe, $CannonCastingRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastingRecipe"
import {$BlockRecipe, $BlockRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipe"

export interface $BlockRecipeType<T extends $BlockRecipe> {

}

export namespace $BlockRecipeType {
const CANNON_CASTING: $BlockRecipeType<($CannonCastingRecipe)>
const BUILT_UP_HEATING: $BlockRecipeType<($BuiltUpHeatingRecipe)>
const DRILL_BORING: $BlockRecipeType<($DrillBoringBlockRecipe)>
function register(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRecipeType$Type<T> = ($BlockRecipeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRecipeType_<T> = $BlockRecipeType$Type<(T)>;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/ammo_container/$AutocannonAmmoContainerBlock$State" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AutocannonAmmoContainerBlock$State extends $Enum<($AutocannonAmmoContainerBlock$State)> implements $StringRepresentable {
static readonly "CLOSED": $AutocannonAmmoContainerBlock$State
static readonly "EMPTY": $AutocannonAmmoContainerBlock$State
static readonly "FILLED": $AutocannonAmmoContainerBlock$State


public static "values"(): ($AutocannonAmmoContainerBlock$State)[]
public static "valueOf"(name: string): $AutocannonAmmoContainerBlock$State
public static "getFromFilled"(filled: boolean): $AutocannonAmmoContainerBlock$State
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
export type $AutocannonAmmoContainerBlock$State$Type = (("closed") | ("filled") | ("empty")) | ($AutocannonAmmoContainerBlock$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonAmmoContainerBlock$State_ = $AutocannonAmmoContainerBlock$State$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/mortar_stone/$MortarStoneProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractBigCannonProjectile, $AbstractBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDamagePropertiesComponent, $EntityDamagePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/config/components/$EntityDamagePropertiesComponent"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $MortarStoneProjectile extends $AbstractBigCannonProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>

constructor(type: $EntityType$Type<(any)>, level: $Level$Type)

public "getDamageProperties"(): $EntityDamagePropertiesComponent
public "getRenderedBlockState"(): $BlockState
public "tick"(): void
public "readAdditionalSaveData"(tag: $CompoundTag$Type): void
public "addAdditionalSaveData"(tag: $CompoundTag$Type): void
public "setChargePower"(power: float): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "damageProperties"(): $EntityDamagePropertiesComponent
get "renderedBlockState"(): $BlockState
set "chargePower"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MortarStoneProjectile$Type = ($MortarStoneProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MortarStoneProjectile_ = $MortarStoneProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/propellant/$BigCartridgeBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SyncedBlockEntity, $SyncedBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SyncedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BigCartridgeBlockEntity extends $SyncedBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "load"(tag: $CompoundTag$Type): void
public "setPower"(power: integer): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "power"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCartridgeBlockEntity$Type = ($BigCartridgeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCartridgeBlockEntity_ = $BigCartridgeBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/cannon_mount/$CannonMountBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$CannonMountBlockEntity, $CannonMountBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/cannon_mount/$CannonMountBlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$KineticBlock, $KineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CannonMountBlock extends $KineticBlock implements $IBE<($CannonMountBlockEntity)> {
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "ASSEMBLY_POWERED": $BooleanProperty
static readonly "FIRE_POWERED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "hasShaftTowards"(world: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, face: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, neighborPos: $BlockPos$Type, isMoving: boolean): void
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public "getBlockEntityClass"(): $Class<($CannonMountBlockEntity)>
public "getRotationAxis"(state: $BlockState$Type): $Direction$Axis
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CannonMountBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CannonMountBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CannonMountBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CannonMountBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CannonMountBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonMountBlock$Type = ($CannonMountBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonMountBlock_ = $CannonMountBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/drop_mortar_shell/$DropMortarShellProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$FuzedBigCannonProjectile, $FuzedBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBigCannonProjectile"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDamagePropertiesComponent, $EntityDamagePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/config/components/$EntityDamagePropertiesComponent"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$DropMortarProjectile, $DropMortarProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$DropMortarProjectile"
import {$DropMortarProjectileProperties, $DropMortarProjectileProperties$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/config/$DropMortarProjectileProperties"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $DropMortarShellProjectile extends $FuzedBigCannonProjectile implements $DropMortarProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>

constructor(type: $EntityType$Type<(any)>, level: $Level$Type)

public "getDamageProperties"(): $EntityDamagePropertiesComponent
public "getRenderedBlockState"(): $BlockState
public "getDropMortarProperties"(): $DropMortarProjectileProperties
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "damageProperties"(): $EntityDamagePropertiesComponent
get "renderedBlockState"(): $BlockState
get "dropMortarProperties"(): $DropMortarProjectileProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropMortarShellProjectile$Type = ($DropMortarShellProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropMortarShellProjectile_ = $DropMortarShellProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/config/$CBCCfgMunitions$GriefState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Level$ExplosionInteraction, $Level$ExplosionInteraction$Type} from "packages/net/minecraft/world/level/$Level$ExplosionInteraction"

export class $CBCCfgMunitions$GriefState extends $Enum<($CBCCfgMunitions$GriefState)> {
static readonly "ALL_DAMAGE": $CBCCfgMunitions$GriefState
static readonly "NO_EXPLOSIVE_DAMAGE": $CBCCfgMunitions$GriefState
static readonly "NO_DAMAGE": $CBCCfgMunitions$GriefState


public static "values"(): ($CBCCfgMunitions$GriefState)[]
public static "valueOf"(name: string): $CBCCfgMunitions$GriefState
public "explosiveInteraction"(): $Level$ExplosionInteraction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBCCfgMunitions$GriefState$Type = (("no_damage") | ("all_damage") | ("no_explosive_damage")) | ($CBCCfgMunitions$GriefState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBCCfgMunitions$GriefState_ = $CBCCfgMunitions$GriefState$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/config/$DropMortarProjectilePropertiesComponent" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $DropMortarProjectilePropertiesComponent extends $Record {
static readonly "DEFAULT": $DropMortarProjectilePropertiesComponent

constructor(mortarPower: float, mortarRecoil: float, mortarSpread: float)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "fromJson"(id: string, obj: $JsonObject$Type): $DropMortarProjectilePropertiesComponent
public static "fromNetwork"(buf: $FriendlyByteBuf$Type): $DropMortarProjectilePropertiesComponent
public "toNetwork"(buf: $FriendlyByteBuf$Type): void
public "mortarRecoil"(): float
public "mortarPower"(): float
public "mortarSpread"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropMortarProjectilePropertiesComponent$Type = ($DropMortarProjectilePropertiesComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropMortarProjectilePropertiesComponent_ = $DropMortarProjectilePropertiesComponent$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/$ControlPitchContraption" {
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ControlPitchContraption {

 "attach"(arg0: $PitchOrientedContraptionEntity$Type): void
 "getTypeId"(): $ResourceLocation
 "disassemble"(): void
 "getControllerState"(): $BlockState
 "isAttachedTo"(arg0: $AbstractContraptionEntity$Type): boolean
 "onStall"(): void
 "getDismountPositionForContraption"(arg0: $PitchOrientedContraptionEntity$Type): $BlockPos
 "onRecoil"(vector: $Vec3$Type, cannon: $AbstractContraptionEntity$Type): void
}

export namespace $ControlPitchContraption {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlPitchContraption$Type = ($ControlPitchContraption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlPitchContraption_ = $ControlPitchContraption$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/builtup/$BigCannonLayerBlock" {
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BigCannonEnd, $BigCannonEnd$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEnd"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$LayeredBigCannonBlockEntity, $LayeredBigCannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/crafting/builtup/$LayeredBigCannonBlockEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BigCannonBaseBlock, $BigCannonBaseBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBaseBlock"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BigCannonLayerBlock extends $BigCannonBaseBlock implements $IBE<($LayeredBigCannonBlockEntity)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type, shape: $Supplier$Type<($CannonCastShape$Type)>)

public "isComplete"(state: $BlockState$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCannonShape"(): $CannonCastShape
public "getDefaultOpeningType"(): $BigCannonEnd
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, dropItems: boolean): void
public "getBlockEntityClass"(): $Class<($LayeredBigCannonBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($LayeredBigCannonBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($LayeredBigCannonBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $LayeredBigCannonBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($LayeredBigCannonBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "defaultOpeningType"(): $BigCannonEnd
get "blockEntityClass"(): $Class<($LayeredBigCannonBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonLayerBlock$Type = ($BigCannonLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonLayerBlock_ = $BigCannonLayerBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/mixin/client/$ClientLevelAccessor" {
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"

export interface $ClientLevelAccessor {

 "getLevelRenderer"(): $LevelRenderer

(): $LevelRenderer
}

export namespace $ClientLevelAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelAccessor$Type = ($ClientLevelAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientLevelAccessor_ = $ClientLevelAccessor$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/$CannonContraptionProviderBlock" {
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$AbstractMountedCannonContraption, $AbstractMountedCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$AbstractMountedCannonContraption"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $CannonContraptionProviderBlock {

 "isComplete"(arg0: $BlockState$Type): boolean
 "getFacing"(arg0: $BlockState$Type): $Direction
 "getCannonShape"(): $CannonCastShape
 "canConnectToSide"(state: $BlockState$Type, face: $Direction$Type): boolean
 "getCannonShapeInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $CannonCastShape
 "getCannonContraption"(): $AbstractMountedCannonContraption
}

export namespace $CannonContraptionProviderBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonContraptionProviderBlock$Type = ($CannonContraptionProviderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonContraptionProviderBlock_ = $CannonContraptionProviderBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/foundry/$BasinFoundryLidBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BasinFoundryBlockEntity, $BasinFoundryBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/crafting/foundry/$BasinFoundryBlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BasinFoundryLidBlock extends $Block implements $IBE<($BasinFoundryBlockEntity)>, $IWrenchable {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<($BasinFoundryBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($BasinFoundryBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($BasinFoundryBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BasinFoundryBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($BasinFoundryBlockEntity)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($BasinFoundryBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasinFoundryLidBlock$Type = ($BasinFoundryLidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasinFoundryLidBlock_ = $BasinFoundryLidBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/welding/$CannonWelderItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CannonWelderItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public static "welderItemAlwaysPlacesWhenUsed"(player: $Player$Type, level: $Level$Type, hand: $InteractionHand$Type, hitResult: $BlockHitResult$Type): $InteractionResult
public "canAttackBlock"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "canBeDepleted"(): boolean
public static "validWeldPositions"(from: $BlockPos$Type, to: $BlockPos$Type): boolean
public static "weldBlocks"(level: $Level$Type, from: $BlockPos$Type, to: $BlockPos$Type, simulate: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonWelderItem$Type = ($CannonWelderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonWelderItem_ = $CannonWelderItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/foundry/$BasinFoundryBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$BasinOperatingBlockEntity, $BasinOperatingBlockEntity$Type} from "packages/com/simibubi/create/content/processing/basin/$BasinOperatingBlockEntity"
import {$DeferralBehaviour, $DeferralBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/simple/$DeferralBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BasinFoundryBlockEntity extends $BasinOperatingBlockEntity {
 "meltingTime": integer
 "recipeCooldown": integer
 "running": boolean
 "basinChecker": $DeferralBehaviour
 "basinRemoved": boolean
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(typeIn: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "tick"(): void
public "startProcessingBasin"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasinFoundryBlockEntity$Type = ($BasinFoundryBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasinFoundryBlockEntity_ = $BasinFoundryBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBarrelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$AutocannonBarrelBlock$AutocannonBarrelEnd, $AutocannonBarrelBlock$AutocannonBarrelEnd$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBarrelBlock$AutocannonBarrelEnd"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AutocannonBaseBlock, $AutocannonBaseBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBaseBlock"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$AutocannonBlockEntity, $AutocannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$MovesWithAutocannonRecoilSpring, $MovesWithAutocannonRecoilSpring$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$MovesWithAutocannonRecoilSpring"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AutocannonMaterial, $AutocannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterial"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AutocannonBarrelBlock extends $AutocannonBaseBlock implements $IBE<($AutocannonBlockEntity)>, $IWrenchable, $MovesWithAutocannonRecoilSpring {
static readonly "ASSEMBLED": $BooleanProperty
static readonly "BARREL_END": $EnumProperty<($AutocannonBarrelBlock$AutocannonBarrelEnd)>
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $AutocannonMaterial$Type)

public "isComplete"(state: $BlockState$Type): boolean
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCannonShape"(): $CannonCastShape
public "getCannonShapeInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $CannonCastShape
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<($AutocannonBlockEntity)>
public "isBreechMechanism"(state: $BlockState$Type): boolean
public "getMovingState"(original: $BlockState$Type): $BlockState
public "getStationaryState"(original: $BlockState$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($AutocannonBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($AutocannonBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $AutocannonBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($AutocannonBlockEntity)>
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "blockEntityClass"(): $Class<($AutocannonBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonBarrelBlock$Type = ($AutocannonBarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonBarrelBlock_ = $AutocannonBarrelBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/incomplete/$IncompleteWithItemsCannonBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export interface $IncompleteWithItemsCannonBlock {

 "progress"(arg0: $BlockState$Type): integer
 "getCompleteBlockState"(arg0: $BlockState$Type): $BlockState
 "requiredItems"(): $List<($ItemLike)>
}

export namespace $IncompleteWithItemsCannonBlock {
const STAGE_2: $IntegerProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncompleteWithItemsCannonBlock$Type = ($IncompleteWithItemsCannonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IncompleteWithItemsCannonBlock_ = $IncompleteWithItemsCannonBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/boring/$DrillBoringBlockRecipe$Serializer" {
import {$BlockRecipeSerializer, $BlockRecipeSerializer$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$DrillBoringBlockRecipe, $DrillBoringBlockRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/boring/$DrillBoringBlockRecipe"

export class $DrillBoringBlockRecipe$Serializer implements $BlockRecipeSerializer<($DrillBoringBlockRecipe)> {

constructor()

public "toNetwork"(buf: $FriendlyByteBuf$Type, recipe: $DrillBoringBlockRecipe$Type): void
public static "register"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillBoringBlockRecipe$Serializer$Type = ($DrillBoringBlockRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillBoringBlockRecipe$Serializer_ = $DrillBoringBlockRecipe$Serializer$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/$WandActionable" {
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export interface $WandActionable {

 "onWandUsed"(arg0: $UseOnContext$Type): $InteractionResult

(arg0: $UseOnContext$Type): $InteractionResult
}

export namespace $WandActionable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandActionable$Type = ($WandActionable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandActionable_ = $WandActionable$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/builtup/$CannonBuilderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$CannonBuilderBlock$BuilderState, $CannonBuilderBlock$BuilderState$Type} from "packages/rbasamoyai/createbigcannons/crafting/builtup/$CannonBuilderBlock$BuilderState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DirectionalAxisKineticBlock, $DirectionalAxisKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalAxisKineticBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonBuilderBlockEntity, $CannonBuilderBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/crafting/builtup/$CannonBuilderBlockEntity"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CannonBuilderBlock extends $DirectionalAxisKineticBlock implements $IBE<($CannonBuilderBlockEntity)> {
static readonly "POWERED": $BooleanProperty
static readonly "STATE": $EnumProperty<($CannonBuilderBlock$BuilderState)>
static readonly "AXIS_ALONG_FIRST_COORDINATE": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, neighborPos: $BlockPos$Type, isMoving: boolean): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, rand: $RandomSource$Type): void
public static "destroyExtensionPoles"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, dropBlocks: boolean): void
public static "maxAllowedBuilderLength"(): integer
public "getBlockEntityClass"(): $Class<($CannonBuilderBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CannonBuilderBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CannonBuilderBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CannonBuilderBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CannonBuilderBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CannonBuilderBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonBuilderBlock$Type = ($CannonBuilderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonBuilderBlock_ = $CannonBuilderBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$DropMortarProjectile" {
import {$DropMortarProjectileProperties, $DropMortarProjectileProperties$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/config/$DropMortarProjectileProperties"

export interface $DropMortarProjectile {

 "getDropMortarProperties"(): $DropMortarProjectileProperties

(): $DropMortarProjectileProperties
}

export namespace $DropMortarProjectile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropMortarProjectile$Type = ($DropMortarProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropMortarProjectile_ = $DropMortarProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$WeldableBlock, $WeldableBlock$Type} from "packages/rbasamoyai/createbigcannons/crafting/welding/$WeldableBlock"
import {$CannonContraptionProviderBlock, $CannonContraptionProviderBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/$CannonContraptionProviderBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AbstractMountedCannonContraption, $AbstractMountedCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$AbstractMountedCannonContraption"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$AutocannonMaterial, $AutocannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InteractableCannonBlock, $InteractableCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/$InteractableCannonBlock"

export interface $AutocannonBlock extends $WeldableBlock, $CannonContraptionProviderBlock, $InteractableCannonBlock {

 "onRemoveCannon"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
 "weldDamage"(): integer
 "canWeldSide"(level: $Level$Type, dir: $Direction$Type, state: $BlockState$Type, otherState: $BlockState$Type, pos: $BlockPos$Type): boolean
 "isWeldable"(state: $BlockState$Type): boolean
 "weldBlock"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, dir: $Direction$Type): void
 "onInteractWhileAssembled"(player: $Player$Type, localPos: $BlockPos$Type, side: $Direction$Type, interactionHand: $InteractionHand$Type, level: $Level$Type, contraption: $Contraption$Type, be: $BlockEntity$Type, info: $StructureTemplate$StructureBlockInfo$Type, entity: $PitchOrientedContraptionEntity$Type): boolean
 "getCannonContraption"(): $AbstractMountedCannonContraption
 "getAutocannonMaterial"(): $AutocannonMaterial
 "getAutocannonMaterialInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $AutocannonMaterial
 "isBreechMechanism"(arg0: $BlockState$Type): boolean
 "isComplete"(arg0: $BlockState$Type): boolean
 "getFacing"(arg0: $BlockState$Type): $Direction
 "getCannonShape"(): $CannonCastShape
 "canConnectToSide"(state: $BlockState$Type, face: $Direction$Type): boolean
 "getCannonShapeInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $CannonCastShape
}

export namespace $AutocannonBlock {
function onPlace(level: $Level$Type, pos: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonBlock$Type = ($AutocannonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonBlock_ = $AutocannonBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$AbstractMountedCannonContraption" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$ControlPitchContraption, $ControlPitchContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/$ControlPitchContraption"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ContraptionLighter, $ContraptionLighter$Type} from "packages/com/simibubi/create/content/contraptions/render/$ContraptionLighter"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ICannonContraptionType, $ICannonContraptionType$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/cannon_types/$ICannonContraptionType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$AssemblyException, $AssemblyException$Type} from "packages/com/simibubi/create/content/contraptions/$AssemblyException"

export class $AbstractMountedCannonContraption extends $Contraption {
 "simplifiedEntityColliders": $Optional<($List<($AABB)>)>
 "entity": $AbstractContraptionEntity
 "bounds": $AABB
 "anchor": $BlockPos
 "stalled": boolean
 "hasUniversalCreativeCrate": boolean
 "disassembled": boolean
 "modelData": $Map<($BlockPos), ($ModelData)>
 "presentBlockEntities": $Map<($BlockPos), ($BlockEntity)>
 "maybeInstancedBlockEntities": $List<($BlockEntity)>
 "specialRenderedBlockEntities": $List<($BlockEntity)>
 "deferInvalidate": boolean

constructor()

public "tick"(level: $Level$Type, entity: $PitchOrientedContraptionEntity$Type): void
public "getSeatPos"(entity: $Entity$Type): $BlockPos
public "maximumDepression"(controller: $ControlPitchContraption$Type): float
public "maximumElevation"(controller: $ControlPitchContraption$Type): float
public "getStartPos"(): $BlockPos
public "canBeStabilized"(direction: $Direction$Type, pos: $BlockPos$Type): boolean
public "writeNBT"(spawnPacket: boolean): $CompoundTag
public "readNBT"(world: $Level$Type, tag: $CompoundTag$Type, spawnData: boolean): void
public "onRedstoneUpdate"(arg0: $ServerLevel$Type, arg1: $PitchOrientedContraptionEntity$Type, arg2: boolean, arg3: integer, arg4: $ControlPitchContraption$Type): void
public "animate"(): void
public "createBoundsFromExtensionLengths"(): $AABB
public "createInitialLightingBounds"(): $AABB
public static "cannonLoaderInsideDuringAssembly"(pos: $BlockPos$Type): $AssemblyException
public static "incorrectBreechDirection"(pos: $BlockPos$Type): $AssemblyException
public "canBeFiredOnController"(control: $ControlPitchContraption$Type): boolean
public static "hasIncompleteCannonBlocks"(pos: $BlockPos$Type): $AssemblyException
public "canBeTurnedByController"(control: $ControlPitchContraption$Type): boolean
public "canBeTurnedByPassenger"(entity: $Entity$Type): boolean
public "initialOrientation"(): $Direction
public "makeLighter"(): $ContraptionLighter<(any)>
public "getWeightForStress"(): float
public "fireShot"(arg0: $ServerLevel$Type, arg1: $PitchOrientedContraptionEntity$Type): void
public static "getMaxCannonLength"(): integer
public "getInteractionVec"(arg0: $PitchOrientedContraptionEntity$Type): $Vec3
public static "cannonTooLarge"(): $AssemblyException
public "getCannonType"(): $ICannonContraptionType
public static "invalidCannon"(): $AssemblyException
get "startPos"(): $BlockPos
get "weightForStress"(): float
get "maxCannonLength"(): integer
get "cannonType"(): $ICannonContraptionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMountedCannonContraption$Type = ($AbstractMountedCannonContraption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMountedCannonContraption_ = $AbstractMountedCannonContraption$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/grapeshot/$GrapeshotBagProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$DisintegratingBigCannonProjectile, $DisintegratingBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$DisintegratingBigCannonProjectile"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$EntityDamagePropertiesComponent, $EntityDamagePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/config/components/$EntityDamagePropertiesComponent"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GrapeshotBagProjectile extends $DisintegratingBigCannonProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>

constructor(type: $EntityType$Type<(any)>, level: $Level$Type)

public "getDamageProperties"(): $EntityDamagePropertiesComponent
public "getRenderedBlockState"(): $BlockState
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "damageProperties"(): $EntityDamagePropertiesComponent
get "renderedBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrapeshotBagProjectile$Type = ($GrapeshotBagProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrapeshotBagProjectile_ = $GrapeshotBagProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/equipment/manual_loading/$RamRodItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$HandloadingTool, $HandloadingTool$Type} from "packages/rbasamoyai/createbigcannons/equipment/manual_loading/$HandloadingTool"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MountedBigCannonContraption, $MountedBigCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$MountedBigCannonContraption"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RamRodItem extends $Item implements $HandloadingTool {
static readonly "BASE_ATTACK_KNOCKBACK_UUID": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "onUseOnCannon"(player: $Player$Type, level: $Level$Type, startPos: $BlockPos$Type, face: $Direction$Type, contraption: $MountedBigCannonContraption$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "getDefaultAttributeModifiers"(slot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public static "getPushStrength"(): integer
public static "deployersCanUse"(): boolean
public static "getReach"(): integer
public static "isValidLoadBlock"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, dir: $Direction$Type): boolean
public static "isValidLoadBlock"(state: $BlockState$Type, contraption: $MountedBigCannonContraption$Type, pos: $BlockPos$Type, dir: $Direction$Type): boolean
get "pushStrength"(): integer
get "reach"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RamRodItem$Type = ($RamRodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RamRodItem_ = $RamRodItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/base/$PropertySetter" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $PropertySetter<T extends $Comparable<(T)>> {

constructor(property: $Property$Type<(T)>, value: T)

public static "of"<T extends $Comparable<(T)>>(property: $Property$Type<(T)>, value: T): $PropertySetter<(T)>
public "applyTo"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertySetter$Type<T> = ($PropertySetter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertySetter_<T> = $PropertySetter$Type<(T)>;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/$CannonCraftingWandItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CannonCraftingWandItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonCraftingWandItem$Type = ($CannonCraftingWandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonCraftingWandItem_ = $CannonCraftingWandItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEnd" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BigCannonEnd extends $Enum<($BigCannonEnd)> implements $StringRepresentable {
static readonly "CLOSED": $BigCannonEnd
static readonly "OPEN": $BigCannonEnd
static readonly "PARTIAL": $BigCannonEnd


public static "values"(): ($BigCannonEnd)[]
public static "valueOf"(name: string): $BigCannonEnd
public static "getOpeningType"(openProgress: float): $BigCannonEnd
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
export type $BigCannonEnd$Type = (("closed") | ("partial") | ("open")) | ($BigCannonEnd);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonEnd_ = $BigCannonEnd$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BigCannonMaterialProperties, $BigCannonMaterialProperties$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterialProperties"

export class $BigCannonMaterial extends $Record {

constructor(name: $ResourceLocation$Type, defaultProperties: $BigCannonMaterialProperties$Type)

public "name"(): $ResourceLocation
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "register"(loc: $ResourceLocation$Type, defaultProperties: $BigCannonMaterialProperties$Type): $BigCannonMaterial
public "properties"(): $BigCannonMaterialProperties
public static "fromName"(loc: $ResourceLocation$Type): $BigCannonMaterial
public static "fromNameOrNull"(loc: $ResourceLocation$Type): $BigCannonMaterial
public "defaultProperties"(): $BigCannonMaterialProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonMaterial$Type = ($BigCannonMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonMaterial_ = $BigCannonMaterial$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/ap_shot/$APShotBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InertProjectileBlock, $InertProjectileBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$InertProjectileBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $APShotBlock extends $InertProjectileBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getAssociatedEntityType"(): $EntityType<(any)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "associatedEntityType"(): $EntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APShotBlock$Type = ($APShotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APShotBlock_ = $APShotBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/boring/$AbstractCannonDrillBlockEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PoleMoverBlockEntity, $PoleMoverBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/base/$PoleMoverBlockEntity"
import {$ControlledContraptionEntity, $ControlledContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$ControlledContraptionEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$DrillBoringBlockRecipe, $DrillBoringBlockRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/boring/$DrillBoringBlockRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractCannonDrillBlockEntity extends $PoleMoverBlockEntity {
 "offset": float
 "running": boolean
 "assembleNextTick": boolean
 "needsContraption": boolean
 "movedContraption": $AbstractContraptionEntity
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte


public "tick"(): void
public "onSpeedChanged"(prevSpeed: float): void
public "disassemble"(): void
public "collideWithContraptionToBore"(other: $ControlledContraptionEntity$Type, collide: boolean): boolean
public "lazyTick"(): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "calculateStressApplied"(): float
public static "getBlockRecipe"(block: $BlockState$Type, dir: $Direction$Type): $DrillBoringBlockRecipe
public "getMovementSpeed"(): float
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "movementSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCannonDrillBlockEntity$Type = ($AbstractCannonDrillBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCannonDrillBlockEntity_ = $AbstractCannonDrillBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AbstractIncompleteAutocannonBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IncompleteAutocannonBlockEntity, $IncompleteAutocannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/crafting/incomplete/$IncompleteAutocannonBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AutocannonBaseBlock, $AutocannonBaseBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBaseBlock"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractIncompleteAutocannonBlock extends $AutocannonBaseBlock implements $IBE<($IncompleteAutocannonBlockEntity)> {
static readonly "FACING": $DirectionProperty
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


public "isComplete"(state: $BlockState$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($IncompleteAutocannonBlockEntity)>
public "isBreechMechanism"(state: $BlockState$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($IncompleteAutocannonBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($IncompleteAutocannonBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $IncompleteAutocannonBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($IncompleteAutocannonBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($IncompleteAutocannonBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractIncompleteAutocannonBlock$Type = ($AbstractIncompleteAutocannonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractIncompleteAutocannonBlock_ = $AbstractIncompleteAutocannonBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/breeches/sliding_breech/$SlidingBreechBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BigCannonEnd, $BigCannonEnd$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEnd"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$AbstractMountedCannonContraption, $AbstractMountedCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$AbstractMountedCannonContraption"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$MountedBigCannonContraption, $MountedBigCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$MountedBigCannonContraption"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BigCannonBlock, $BigCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBlock"
import {$DirectionalAxisKineticBlock, $DirectionalAxisKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalAxisKineticBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SlidingBreechBlockEntity, $SlidingBreechBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/breeches/sliding_breech/$SlidingBreechBlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SlidingBreechBlock extends $DirectionalAxisKineticBlock implements $IBE<($SlidingBreechBlockEntity)>, $BigCannonBlock {
static readonly "AXIS_ALONG_FIRST_COORDINATE": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, cannonMaterial: $BigCannonMaterial$Type, quickfiringConversion: $NonNullSupplier$Type<(any)>)

public "getConversion"(old: $BlockState$Type): $BlockState
public "isComplete"(state: $BlockState$Type): boolean
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getFacing"(state: $BlockState$Type): $Direction
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCannonShape"(): $CannonCastShape
public "getOpeningType"(contraption: $MountedBigCannonContraption$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonEnd
public "getOpeningType"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonEnd
public "getCannonMaterial"(): $BigCannonMaterial
public "getDefaultOpeningType"(): $BigCannonEnd
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getBlockEntityClass"(): $Class<($SlidingBreechBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($SlidingBreechBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($SlidingBreechBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $SlidingBreechBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($SlidingBreechBlockEntity)>
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public "onRemoveCannon"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "isImmovable"(state: $BlockState$Type): boolean
public "weldDamage"(): integer
public "canWeldSide"(level: $Level$Type, dir: $Direction$Type, state: $BlockState$Type, otherState: $BlockState$Type, pos: $BlockPos$Type): boolean
public "isWeldable"(state: $BlockState$Type): boolean
public "weldBlock"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, dir: $Direction$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public "onInteractWhileAssembled"(player: $Player$Type, localPos: $BlockPos$Type, side: $Direction$Type, interactionHand: $InteractionHand$Type, level: $Level$Type, contraption: $Contraption$Type, be: $BlockEntity$Type, info: $StructureTemplate$StructureBlockInfo$Type, entity: $PitchOrientedContraptionEntity$Type): boolean
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public "getCannonMaterialInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonMaterial
public "playerWillDestroyBigCannon"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getCannonContraption"(): $AbstractMountedCannonContraption
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "canConnectToSide"(state: $BlockState$Type, face: $Direction$Type): boolean
public "getCannonShapeInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $CannonCastShape
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "cannonMaterial"(): $BigCannonMaterial
get "defaultOpeningType"(): $BigCannonEnd
get "blockEntityClass"(): $Class<($SlidingBreechBlockEntity)>
get "cannonContraption"(): $AbstractMountedCannonContraption
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlidingBreechBlock$Type = ($SlidingBreechBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlidingBreechBlock_ = $SlidingBreechBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$SolidBigCannonBlock" {
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BigCannonEnd, $BigCannonEnd$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEnd"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BigCannonBaseBlock, $BigCannonBaseBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBaseBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BigCannonEndBlockEntity, $BigCannonEndBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEndBlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SolidBigCannonBlock<TE extends $BigCannonEndBlockEntity> extends $BigCannonBaseBlock implements $IBE<(TE)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type)

public "getDefaultOpeningType"(): $BigCannonEnd
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<(TE)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<(TE), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): TE
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<(TE)>
public "getBlockEntityClass"(): $Class<(TE)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
get "defaultOpeningType"(): $BigCannonEnd
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<(TE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidBigCannonBlock$Type<TE> = ($SolidBigCannonBlock<(TE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolidBigCannonBlock_<TE> = $SolidBigCannonBlock$Type<(TE)>;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/fuzes/$DelayedImpactFuzeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractCannonProjectile, $AbstractCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$AbstractCannonProjectile$ImpactResult, $AbstractCannonProjectile$ImpactResult$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile$ImpactResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FuzeItem, $FuzeItem$Type} from "packages/rbasamoyai/createbigcannons/munitions/fuzes/$FuzeItem"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DelayedImpactFuzeItem extends $FuzeItem implements $MenuProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "onProjectileImpact"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type, hitResult: $HitResult$Type, impactResult: $AbstractCannonProjectile$ImpactResult$Type, baseFuze: boolean): boolean
public "getDisplayName"(): $Component
public static "getCreativeTabItem"(defaultFuze: integer): $ItemStack
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "canLingerInGround"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type): boolean
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "createMenu"(windowId: integer, playerInv: $Inventory$Type, player: $Player$Type): $AbstractContainerMenu
public "onProjectileTick"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type): boolean
public "onProjectileExpiry"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type): boolean
public "addExtraInfo"(tooltip: $List$Type<($Component$Type)>, isSneaking: boolean, stack: $ItemStack$Type): void
public "shouldCloseCurrentScreen"(): boolean
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelayedImpactFuzeItem$Type = ($DelayedImpactFuzeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelayedImpactFuzeItem_ = $DelayedImpactFuzeItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonTubeBlock" {
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BigCannonEnd, $BigCannonEnd$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEnd"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BigCannonBlockEntity, $BigCannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BigCannonBaseBlock, $BigCannonBaseBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBaseBlock"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BigCannonTubeBlock extends $BigCannonBaseBlock implements $IBE<($BigCannonBlockEntity)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type, cannonShape: $Supplier$Type<($CannonCastShape$Type)>, base: $VoxelShape$Type)
constructor(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type, cannonShape: $Supplier$Type<($CannonCastShape$Type)>, visualShape: $VoxelShape$Type, collisionShape: $VoxelShape$Type)

public static "small"(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type): $BigCannonTubeBlock
public "isComplete"(state: $BlockState$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public static "verySmall"(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type): $BigCannonTubeBlock
public static "veryLarge"(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type): $BigCannonTubeBlock
public "getCannonShape"(): $CannonCastShape
public "getDefaultOpeningType"(): $BigCannonEnd
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public static "medium"(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type): $BigCannonTubeBlock
public static "large"(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type): $BigCannonTubeBlock
public "getBlockEntityClass"(): $Class<($BigCannonBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($BigCannonBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($BigCannonBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BigCannonBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($BigCannonBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "defaultOpeningType"(): $BigCannonEnd
get "blockEntityClass"(): $Class<($BigCannonBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonTubeBlock$Type = ($BigCannonTubeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonTubeBlock_ = $BigCannonTubeBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeType$Simple" {
import {$BlockRecipeType, $BlockRecipeType$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeType"
import {$BlockRecipe, $BlockRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipe"

export class $BlockRecipeType$Simple<T extends $BlockRecipe> implements $BlockRecipeType<(T)> {

constructor(id: string)

public "toString"(): string
public static "register"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRecipeType$Simple$Type<T> = ($BlockRecipeType$Simple<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRecipeType$Simple_<T> = $BlockRecipeType$Simple$Type<(T)>;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/cannon_mount/$ExtendsCannonMount" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CannonMountBlockEntity, $CannonMountBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/cannon_mount/$CannonMountBlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $ExtendsCannonMount {

 "getCannonMount"(): $CannonMountBlockEntity

(): $CannonMountBlockEntity
}

export namespace $ExtendsCannonMount {
const noCannonPresent: $MutableComponent
const cannonYawComponent: $MutableComponent
const cannonPitchComponent: $MutableComponent
const bigCannonStrengthComponent: $MutableComponent
const bigCannonStrengthValueKey: string
const autocannonRPMComponent: $MutableComponent
const autocannonRPMValueKey: string
function addCannonInfoToTooltip(tooltip: $List$Type<($Component$Type)>, mountedContraption: $PitchOrientedContraptionEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendsCannonMount$Type = ($ExtendsCannonMount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendsCannonMount_ = $ExtendsCannonMount$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/network/$ClientboundPlayBlockHitEffectPacket" {
import {$PacketListener, $PacketListener$Type} from "packages/net/minecraft/network/$PacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RootPacket, $RootPacket$Type} from "packages/rbasamoyai/createbigcannons/network/$RootPacket"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"

export class $ClientboundPlayBlockHitEffectPacket extends $Record implements $RootPacket {

constructor(buf: $FriendlyByteBuf$Type)
constructor(blockState: $BlockState$Type, entityType: $EntityType$Type<(any)>, deflect: boolean, forceDisplay: boolean, x: double, y: double, z: double, dx: float, dy: float, dz: float)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): double
public "z"(): double
public "handle"(exec: $Executor$Type, listener: $PacketListener$Type, sender: $ServerPlayer$Type): void
public "y"(): double
public "dz"(): float
public "dx"(): float
public "dy"(): float
public "entityType"(): $EntityType<(any)>
public "blockState"(): $BlockState
public "deflect"(): boolean
public "forceDisplay"(): boolean
public "rootEncode"(buf: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPlayBlockHitEffectPacket$Type = ($ClientboundPlayBlockHitEffectPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientboundPlayBlockHitEffectPacket_ = $ClientboundPlayBlockHitEffectPacket$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/carriage/$CannonCarriageBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SyncedBlockEntity, $SyncedBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SyncedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CannonCarriageBlockEntity extends $SyncedBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "tryAssemble"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonCarriageBlockEntity$Type = ($CannonCarriageBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonCarriageBlockEntity_ = $CannonCarriageBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/cannon_mount/$YawControllerBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$YawControllerBlockEntity, $YawControllerBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/cannon_mount/$YawControllerBlockEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$KineticBlock, $KineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $YawControllerBlock extends $KineticBlock implements $IBE<($YawControllerBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "hasShaftTowards"(level: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, face: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($YawControllerBlockEntity)>
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($YawControllerBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($YawControllerBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $YawControllerBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($YawControllerBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($YawControllerBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YawControllerBlock$Type = ($YawControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YawControllerBlock_ = $YawControllerBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/config/components/$EntityDamagePropertiesComponent" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $EntityDamagePropertiesComponent extends $Record {
static readonly "DEFAULT": $EntityDamagePropertiesComponent

constructor(entityDamage: float, rendersInvulnerable: boolean, ignoresInvulnerability: boolean, ignoresEntityArmor: boolean, knockback: float)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "fromJson"(id: string, obj: $JsonObject$Type): $EntityDamagePropertiesComponent
public "rendersInvulnerable"(): boolean
public "ignoresInvulnerability"(): boolean
public static "fromNetwork"(buf: $FriendlyByteBuf$Type): $EntityDamagePropertiesComponent
public "toNetwork"(buf: $FriendlyByteBuf$Type): void
public "knockback"(): float
public "entityDamage"(): float
public "ignoresEntityArmor"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityDamagePropertiesComponent$Type = ($EntityDamagePropertiesComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityDamagePropertiesComponent_ = $EntityDamagePropertiesComponent$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/config/$AutocannonProjectilePropertiesComponent" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $AutocannonProjectilePropertiesComponent extends $Record {
static readonly "DEFAULT": $AutocannonProjectilePropertiesComponent

constructor(addedRecoil: double, canSquib: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "fromJson"(id: string, obj: $JsonObject$Type): $AutocannonProjectilePropertiesComponent
public static "fromNetwork"(buf: $FriendlyByteBuf$Type): $AutocannonProjectilePropertiesComponent
public "toNetwork"(buf: $FriendlyByteBuf$Type): void
public "canSquib"(): boolean
public "addedRecoil"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonProjectilePropertiesComponent$Type = ($AutocannonProjectilePropertiesComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonProjectilePropertiesComponent_ = $AutocannonProjectilePropertiesComponent$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterialProperties$Builder" {
import {$BigCannonMaterialProperties$FailureMode, $BigCannonMaterialProperties$FailureMode$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterialProperties$FailureMode"
import {$BigCannonMaterialProperties, $BigCannonMaterialProperties$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterialProperties"

export class $BigCannonMaterialProperties$Builder {


public "build"(): $BigCannonMaterialProperties
public "weight"(weight: float): $BigCannonMaterialProperties$Builder
public "weldDamage"(weldDamage: integer): $BigCannonMaterialProperties$Builder
public "isWeldable"(isWeldable: boolean): $BigCannonMaterialProperties$Builder
public "failureMode"(failureMode: $BigCannonMaterialProperties$FailureMode$Type): $BigCannonMaterialProperties$Builder
public "maxSafePropellantStress"(maxSafePropellantStress: integer): $BigCannonMaterialProperties$Builder
public "spreadReductionPerBarrel"(spreadReductionPerBarrel: float): $BigCannonMaterialProperties$Builder
public "connectsInSurvival"(connectsInSurvival: boolean): $BigCannonMaterialProperties$Builder
public "minimumSpread"(minimumSpread: float): $BigCannonMaterialProperties$Builder
public "weldStressPenalty"(weldStressPenalty: integer): $BigCannonMaterialProperties$Builder
public "minimumVelocityPerBarrel"(minimumVelocityPerBarrel: double): $BigCannonMaterialProperties$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonMaterialProperties$Builder$Type = ($BigCannonMaterialProperties$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonMaterialProperties$Builder_ = $BigCannonMaterialProperties$Builder$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$BigCannonMunitionBlock" {
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BigCannonMunitionBlock {

 "getExtractedItem"(arg0: $StructureTemplate$StructureBlockInfo$Type): $ItemStack
 "getHandloadingInfo"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): $StructureTemplate$StructureBlockInfo
 "onCannonRotate"(arg0: $BlockState$Type, arg1: $Direction$Axis$Type, arg2: $Rotation$Type): $BlockState
 "canBeLoaded"(arg0: $BlockState$Type, arg1: $Direction$Axis$Type): boolean
 "getAxis"(arg0: $BlockState$Type): $Direction$Axis
}

export namespace $BigCannonMunitionBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonMunitionBlock$Type = ($BigCannonMunitionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonMunitionBlock_ = $BigCannonMunitionBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/$IAutocannonBlockEntity" {
import {$ItemCannonBehavior, $ItemCannonBehavior$Type} from "packages/rbasamoyai/createbigcannons/cannons/$ItemCannonBehavior"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICannonBlockEntity, $ICannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/$ICannonBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IAutocannonBlockEntity extends $ICannonBlockEntity<($ItemCannonBehavior)> {

 "tickFromContraption"(level: $Level$Type, poce: $PitchOrientedContraptionEntity$Type, localPos: $BlockPos$Type): void
 "getDrops"(): $List<($ItemStack)>
 "cannonBehavior"(): $ItemCannonBehavior

(level: $Level$Type, poce: $PitchOrientedContraptionEntity$Type, localPos: $BlockPos$Type): void
}

export namespace $IAutocannonBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutocannonBlockEntity$Type = ($IAutocannonBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutocannonBlockEntity_ = $IAutocannonBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterialProperties$FailureMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BigCannonMaterialProperties$FailureMode extends $Enum<($BigCannonMaterialProperties$FailureMode)> implements $StringRepresentable {
static readonly "RUPTURE": $BigCannonMaterialProperties$FailureMode
static readonly "FRAGMENT": $BigCannonMaterialProperties$FailureMode


public static "values"(): ($BigCannonMaterialProperties$FailureMode)[]
public static "valueOf"(name: string): $BigCannonMaterialProperties$FailureMode
public static "byId"(id: string): $BigCannonMaterialProperties$FailureMode
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
export type $BigCannonMaterialProperties$FailureMode$Type = (("fragment") | ("rupture")) | ($BigCannonMaterialProperties$FailureMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonMaterialProperties$FailureMode_ = $BigCannonMaterialProperties$FailureMode$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/recoil_spring/$AutocannonRecoilSpringBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AutocannonRecoilSpringBlockEntity, $AutocannonRecoilSpringBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/recoil_spring/$AutocannonRecoilSpringBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AutocannonBaseBlock, $AutocannonBaseBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBaseBlock"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MovesWithAutocannonRecoilSpring, $MovesWithAutocannonRecoilSpring$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$MovesWithAutocannonRecoilSpring"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AutocannonMaterial, $AutocannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterial"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$NonNullFunction, $NonNullFunction$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullFunction"

export class $AutocannonRecoilSpringBlock extends $AutocannonBaseBlock implements $IBE<($AutocannonRecoilSpringBlockEntity)>, $MovesWithAutocannonRecoilSpring {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $AutocannonMaterial$Type, movingBlockFunction: $NonNullFunction$Type<($Direction$Type), ($BlockState$Type)>)

public "isComplete"(state: $BlockState$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCannonShape"(): $CannonCastShape
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<($AutocannonRecoilSpringBlockEntity)>
public "isBreechMechanism"(state: $BlockState$Type): boolean
public "getMovingState"(original: $BlockState$Type): $BlockState
public "getStationaryState"(original: $BlockState$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($AutocannonRecoilSpringBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($AutocannonRecoilSpringBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $AutocannonRecoilSpringBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($AutocannonRecoilSpringBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "blockEntityClass"(): $Class<($AutocannonRecoilSpringBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonRecoilSpringBlock$Type = ($AutocannonRecoilSpringBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonRecoilSpringBlock_ = $AutocannonRecoilSpringBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/fuzes/$ImpactFuzeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractCannonProjectile, $AbstractCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$AbstractCannonProjectile$ImpactResult, $AbstractCannonProjectile$ImpactResult$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile$ImpactResult"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FuzeItem, $FuzeItem$Type} from "packages/rbasamoyai/createbigcannons/munitions/fuzes/$FuzeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ImpactFuzeItem extends $FuzeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "onProjectileImpact"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type, hitResult: $HitResult$Type, impactResult: $AbstractCannonProjectile$ImpactResult$Type, baseFuze: boolean): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "addExtraInfo"(tooltip: $List$Type<($Component$Type)>, isSneaking: boolean, stack: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImpactFuzeItem$Type = ($ImpactFuzeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImpactFuzeItem_ = $ImpactFuzeItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/remix/$CustomBlockDamageDisplay" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $CustomBlockDamageDisplay {

 "createbigcannons$trackCustomProgress"(arg0: $BlockPos$Type, arg1: integer): void

(arg0: $BlockPos$Type, arg1: integer): void
}

export namespace $CustomBlockDamageDisplay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBlockDamageDisplay$Type = ($CustomBlockDamageDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBlockDamageDisplay_ = $CustomBlockDamageDisplay$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_loading/$WormHeadBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WrenchableDirectionalBlock, $WrenchableDirectionalBlock$Type} from "packages/com/simibubi/create/foundation/block/$WrenchableDirectionalBlock"

export class $WormHeadBlock extends $WrenchableDirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighbor: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WormHeadBlock$Type = ($WormHeadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WormHeadBlock_ = $WormHeadBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/incomplete/$IncompleteScrewBreechBlock" {
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$SolidBigCannonBlock, $SolidBigCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$SolidBigCannonBlock"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$IncompleteBigCannonBlockEntity, $IncompleteBigCannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/crafting/incomplete/$IncompleteBigCannonBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$IncompleteWithItemsCannonBlock, $IncompleteWithItemsCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/crafting/incomplete/$IncompleteWithItemsCannonBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $IncompleteScrewBreechBlock extends $SolidBigCannonBlock<($IncompleteBigCannonBlockEntity)> implements $IncompleteWithItemsCannonBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type, secondItemSupplier: $NonNullSupplier$Type<(any)>, resultSupplier: $NonNullSupplier$Type<(any)>)

public "isComplete"(state: $BlockState$Type): boolean
public "progress"(state: $BlockState$Type): integer
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCannonShape"(): $CannonCastShape
public "getCompleteBlockState"(state: $BlockState$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "requiredItems"(): $List<($ItemLike)>
public "getBlockEntityClass"(): $Class<($IncompleteBigCannonBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "blockEntityClass"(): $Class<($IncompleteBigCannonBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncompleteScrewBreechBlock$Type = ($IncompleteScrewBreechBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IncompleteScrewBreechBlock_ = $IncompleteScrewBreechBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastingRecipe" {
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$BlockRecipeType, $BlockRecipeType$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeType"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/simibubi/create/foundation/fluid/$FluidIngredient"
import {$BlockRecipeSerializer, $BlockRecipeSerializer$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeSerializer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockRecipe, $BlockRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipe"

export class $CannonCastingRecipe implements $BlockRecipe {

constructor(requiredShape: $CannonCastShape$Type, ingredient: $FluidIngredient$Type, result: $Block$Type, id: $ResourceLocation$Type)

public "matches"(level: $Level$Type, pos: $BlockPos$Type): boolean
public "id"(): $ResourceLocation
public "getId"(): $ResourceLocation
public "getType"(): $BlockRecipeType<(any)>
public "shape"(): $CannonCastShape
public "getSerializer"(): $BlockRecipeSerializer<(any)>
public "ingredient"(): $FluidIngredient
public "getResultBlock"(): $Block
public "assembleInWorld"(level: $Level$Type, pos: $BlockPos$Type): void
get "type"(): $BlockRecipeType<(any)>
get "serializer"(): $BlockRecipeSerializer<(any)>
get "resultBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonCastingRecipe$Type = ($CannonCastingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonCastingRecipe_ = $CannonCastingRecipe$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/builtup/$BuiltUpHeatingRecipe$Serializer" {
import {$BuiltUpHeatingRecipe, $BuiltUpHeatingRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/builtup/$BuiltUpHeatingRecipe"
import {$BlockRecipeSerializer, $BlockRecipeSerializer$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $BuiltUpHeatingRecipe$Serializer implements $BlockRecipeSerializer<($BuiltUpHeatingRecipe)> {

constructor()

public "toNetwork"(buf: $FriendlyByteBuf$Type, recipe: $BuiltUpHeatingRecipe$Type): void
public static "register"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuiltUpHeatingRecipe$Serializer$Type = ($BuiltUpHeatingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuiltUpHeatingRecipe$Serializer_ = $BuiltUpHeatingRecipe$Serializer$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/fuzes/$ProximityFuzeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ProjectileContext, $ProjectileContext$Type} from "packages/rbasamoyai/createbigcannons/munitions/$ProjectileContext"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractCannonProjectile, $AbstractCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$AbstractCannonProjectile$ImpactResult, $AbstractCannonProjectile$ImpactResult$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile$ImpactResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FuzeItem, $FuzeItem$Type} from "packages/rbasamoyai/createbigcannons/munitions/fuzes/$FuzeItem"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ProximityFuzeItem extends $FuzeItem implements $MenuProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "onProjectileImpact"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type, hitResult: $HitResult$Type, impactResult: $AbstractCannonProjectile$ImpactResult$Type, baseFuze: boolean): boolean
public "getDisplayName"(): $Component
public static "getCreativeTabItem"(defaultFuze: integer): $ItemStack
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "createMenu"(windowId: integer, playerInv: $Inventory$Type, player: $Player$Type): $AbstractContainerMenu
public "onProjectileTick"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type): boolean
public "onProjectileClip"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type, start: $Vec3$Type, end: $Vec3$Type, ctx: $ProjectileContext$Type, baseFuze: boolean): boolean
public "onProjectileExpiry"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type): boolean
public "addExtraInfo"(tooltip: $List$Type<($Component$Type)>, isSneaking: boolean, stack: $ItemStack$Type): void
public "shouldCloseCurrentScreen"(): boolean
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProximityFuzeItem$Type = ($ProximityFuzeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProximityFuzeItem_ = $ProximityFuzeItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/$FuzedItemMunition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FuzedItemMunition {

}

export namespace $FuzedItemMunition {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuzedItemMunition$Type = ($FuzedItemMunition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuzedItemMunition_ = $FuzedItemMunition$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/ammo_container/$IAutocannonAmmoContainerContainer" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$AutocannonAmmoType, $AutocannonAmmoType$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonAmmoType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $IAutocannonAmmoContainerContainer extends $Container {

 "getTotalCount"(): integer
 "getTracerAmmoCapacity"(): integer
 "getMainAmmoCapacity"(): integer
 "isEmpty"(): boolean
 "getContainerSize"(): integer
 "getItem"(slot: integer): $ItemStack
 "canPlaceItem"(index: integer, stack: $ItemStack$Type): boolean
 "getMainAmmoStack"(): $ItemStack
 "getAmmoType"(): $AutocannonAmmoType
 "getTracerStack"(): $ItemStack
 "setChanged"(): void
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "setItem"(arg0: integer, arg1: $ItemStack$Type): void
 "kjs$self"(): $Container
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getMaxStackSize"(): integer
 "startOpen"(arg0: $Player$Type): void
 "stillValid"(arg0: $Player$Type): boolean
 "stopOpen"(arg0: $Player$Type): void
 "isMutable"(): boolean
 "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
 "getStackInSlot"(slot: integer): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
 "getSlots"(): integer
 "countItem"(arg0: $Item$Type): integer
 "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "getHeight"(): integer
 "clear"(): void
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "asContainer"(): $Container
 "getWidth"(): integer
 "getSlotLimit"(slot: integer): integer
 "setChanged"(): void
 "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
 "clearContent"(): void
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "clear"(ingredient: $Ingredient$Type): void
 "find"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "isEmpty"(): boolean
}

export namespace $IAutocannonAmmoContainerContainer {
const AMMO_SLOT: integer
const TRACER_SLOT: integer
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutocannonAmmoContainerContainer$Type = ($IAutocannonAmmoContainerContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutocannonAmmoContainerContainer_ = $IAutocannonAmmoContainerContainer$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/fluid_shell/$EndFluidStack" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $EndFluidStack extends $Record {
static "EMPTY": $EndFluidStack
static readonly "CODEC": $Codec<($EndFluidStack)>

constructor(fluid: $Fluid$Type, amount: integer, data: $CompoundTag$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "data"(): $CompoundTag
public static "read"(location: $ResourceLocation$Type): $DataResult<($Fluid)>
public "copy"(newAmount: integer): $EndFluidStack
public "copy"(): $EndFluidStack
public "amount"(): integer
public static "readBuf"(buf: $FriendlyByteBuf$Type): $EndFluidStack
public static "readTag"(tag: $CompoundTag$Type): $EndFluidStack
public "writeTag"(tag: $CompoundTag$Type): $CompoundTag
public "fluid"(): $Fluid
public "writeBuf"(buf: $FriendlyByteBuf$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndFluidStack$Type = ($EndFluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndFluidStack_ = $EndFluidStack$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBigCannonProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractBigCannonProjectile, $AbstractBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FuzedBigCannonProjectile extends $AbstractBigCannonProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>


public "canLingerInGround"(): boolean
public "tick"(): void
public "readAdditionalSaveData"(tag: $CompoundTag$Type): void
public "addAdditionalSaveData"(tag: $CompoundTag$Type): void
public "setFuze"(stack: $ItemStack$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "fuze"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuzedBigCannonProjectile$Type = ($FuzedBigCannonProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuzedBigCannonProjectile_ = $FuzedBigCannonProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/traffic_cone/$TrafficConeBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InertProjectileBlock, $InertProjectileBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$InertProjectileBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TrafficConeBlock extends $InertProjectileBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getAssociatedEntityType"(): $EntityType<(any)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "associatedEntityType"(): $EntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrafficConeBlock$Type = ($TrafficConeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrafficConeBlock_ = $TrafficConeBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$IBigCannonBlockEntity" {
import {$BigCannonBehavior, $BigCannonBehavior$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBehavior"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICannonBlockEntity, $ICannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/$ICannonBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBigCannonBlockEntity extends $ICannonBlockEntity<($BigCannonBehavior)> {

 "canPushBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
 "blockCanHandle"(data: $StructureTemplate$StructureBlockInfo$Type): boolean
 "canLoadBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
 "cannonBehavior"(): $BigCannonBehavior

(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
}

export namespace $IBigCannonBlockEntity {
function getInnerCannonBlockState(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
function isValidMunitionState(cannonAxis: $Direction$Axis$Type, state: $BlockState$Type): boolean
function isValidMunitionState(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
function isValidLoader(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBigCannonBlockEntity$Type = ($IBigCannonBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBigCannonBlockEntity_ = $IBigCannonBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile$ImpactResult$KinematicOutcome" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AbstractCannonProjectile$ImpactResult$KinematicOutcome extends $Enum<($AbstractCannonProjectile$ImpactResult$KinematicOutcome)> {
static readonly "PENETRATE": $AbstractCannonProjectile$ImpactResult$KinematicOutcome
static readonly "STOP": $AbstractCannonProjectile$ImpactResult$KinematicOutcome
static readonly "BOUNCE": $AbstractCannonProjectile$ImpactResult$KinematicOutcome


public static "values"(): ($AbstractCannonProjectile$ImpactResult$KinematicOutcome)[]
public static "valueOf"(name: string): $AbstractCannonProjectile$ImpactResult$KinematicOutcome
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCannonProjectile$ImpactResult$KinematicOutcome$Type = (("stop") | ("bounce") | ("penetrate")) | ($AbstractCannonProjectile$ImpactResult$KinematicOutcome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCannonProjectile$ImpactResult$KinematicOutcome_ = $AbstractCannonProjectile$ImpactResult$KinematicOutcome$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/breeches/screw_breech/$ScrewBreechBlockEntity" {
import {$BigCannonBehavior, $BigCannonBehavior$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBehavior"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$IBigCannonBlockEntity, $IBigCannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$IBigCannonBlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ScrewBreechBlockEntity extends $KineticBlockEntity implements $IBigCannonBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "tick"(): void
public "getRenderedBlockOffset"(partialTicks: float): float
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getOpeningSpeed"(): float
public "canLoadBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "cannonBehavior"(): $BigCannonBehavior
public static "getInnerCannonBlockState"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, state: $BlockState$Type): boolean
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "canPushBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "isValidLoader"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "blockCanHandle"(data: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "openingSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrewBreechBlockEntity$Type = ($ScrewBreechBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrewBreechBlockEntity_ = $ScrewBreechBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterial" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$AutocannonMaterialProperties, $AutocannonMaterialProperties$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterialProperties"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AutocannonMaterial extends $Record {

constructor(name: $ResourceLocation$Type, defaultProperties: $AutocannonMaterialProperties$Type)

public "name"(): $ResourceLocation
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "register"(loc: $ResourceLocation$Type, defaultProperties: $AutocannonMaterialProperties$Type): $AutocannonMaterial
public "properties"(): $AutocannonMaterialProperties
public static "fromName"(loc: $ResourceLocation$Type): $AutocannonMaterial
public static "fromNameOrNull"(loc: $ResourceLocation$Type): $AutocannonMaterial
public "defaultProperties"(): $AutocannonMaterialProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonMaterial$Type = ($AutocannonMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonMaterial_ = $AutocannonMaterial$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/mixin/$TagAppenderAccessor" {
import {$TagBuilder, $TagBuilder$Type} from "packages/net/minecraft/tags/$TagBuilder"

export interface $TagAppenderAccessor {

 "getBuilder"(): $TagBuilder

(): $TagBuilder
}

export namespace $TagAppenderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagAppenderAccessor$Type = ($TagAppenderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagAppenderAccessor_ = $TagAppenderAccessor$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/cannon_mount/$YawControllerBlockEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CannonMountBlockEntity, $CannonMountBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/cannon_mount/$CannonMountBlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ExtendsCannonMount, $ExtendsCannonMount$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/cannon_mount/$ExtendsCannonMount"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $YawControllerBlockEntity extends $KineticBlockEntity implements $ExtendsCannonMount {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "remove"(): void
public "tick"(): void
public "onSpeedChanged"(prevSpeed: float): void
public "getCannonMount"(): $CannonMountBlockEntity
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "calculateStressApplied"(): float
public static "addCannonInfoToTooltip"(tooltip: $List$Type<($Component$Type)>, mountedContraption: $PitchOrientedContraptionEntity$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "cannonMount"(): $CannonMountBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YawControllerBlockEntity$Type = ($YawControllerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YawControllerBlockEntity_ = $YawControllerBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/boring/$DrillBoringBlockRecipe" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockRecipe, $BlockRecipe$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipe"
import {$BlockRecipeType, $BlockRecipeType$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeType"
import {$BlockRecipeSerializer, $BlockRecipeSerializer$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockRecipeIngredient, $BlockRecipeIngredient$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeIngredient"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DrillBoringBlockRecipe implements $BlockRecipe {

constructor(id: $ResourceLocation$Type, input: $BlockRecipeIngredient$Type, result: $Block$Type, obeyFacingOrAxis: boolean)

public "matches"(level: $Level$Type, pos: $BlockPos$Type): boolean
public "matches"(state: $BlockState$Type, dir: $Direction$Type): boolean
public "getId"(): $ResourceLocation
public "getType"(): $BlockRecipeType<(any)>
public "getSerializer"(): $BlockRecipeSerializer<(any)>
public "ingredients"(): $List<($ItemStack)>
public "getResultBlock"(): $Block
public "assembleInWorld"(level: $Level$Type, pos: $BlockPos$Type): void
public "getResultState"(input: $BlockState$Type): $BlockState
get "id"(): $ResourceLocation
get "type"(): $BlockRecipeType<(any)>
get "serializer"(): $BlockRecipeSerializer<(any)>
get "resultBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillBoringBlockRecipe$Type = ($DrillBoringBlockRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillBoringBlockRecipe_ = $DrillBoringBlockRecipe$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$BigCannonProjectileBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SyncedBlockEntity, $SyncedBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SyncedBlockEntity"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $BigCannonProjectileBlockEntity extends $SyncedBlockEntity implements $IHaveGoggleInformation, $Container {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "removeItem"(slot: integer, amount: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "setItem"(slot: integer, stack: $ItemStack$Type): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "getItem"(slot: integer): $ItemStack
public "load"(tag: $CompoundTag$Type): void
public "stillValid"(player: $Player$Type): boolean
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "containedFluidTooltip"(arg0: $List$Type<(any)>, arg1: boolean, arg2: $LazyOptional$Type<(any)>): boolean
public "getPurityColor"(arg0: integer): $ChatFormatting
public "setChanged"(): void
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "getMaxStackSize"(): integer
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "isMutable"(): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "getStackInSlot"(slot: integer): $ItemStack
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "getSlots"(): integer
public "countItem"(arg0: $Item$Type): integer
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getHeight"(): integer
public "clear"(): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "asContainer"(): $Container
public "getWidth"(): integer
public "getSlotLimit"(slot: integer): integer
public "setChanged"(): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public static "tryClear"(arg0: any): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "clear"(ingredient: $Ingredient$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonProjectileBlockEntity$Type = ($BigCannonProjectileBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonProjectileBlockEntity_ = $BigCannonProjectileBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/base/$SyncsExtraDataOnAdd" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $SyncsExtraDataOnAdd {

 "addExtraSyncData"(): $CompoundTag
 "readExtraSyncData"(tag: $CompoundTag$Type): void
}

export namespace $SyncsExtraDataOnAdd {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncsExtraDataOnAdd$Type = ($SyncsExtraDataOnAdd);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncsExtraDataOnAdd_ = $SyncsExtraDataOnAdd$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/drop_mortar_shell/$DropMortarShellBlock" {
import {$DropMortarShellProjectile, $DropMortarShellProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/drop_mortar_shell/$DropMortarShellProjectile"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SimpleShellBlock, $SimpleShellBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$SimpleShellBlock"
import {$DropMortarMunition, $DropMortarMunition$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$DropMortarMunition"
import {$AbstractBigCannonProjectile, $AbstractBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $DropMortarShellBlock extends $SimpleShellBlock<($DropMortarShellProjectile)> implements $DropMortarMunition<($DropMortarShellProjectile)> {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getProjectile"(level: $Level$Type, itemStack: $ItemStack$Type): $AbstractBigCannonProjectile
public "getAssociatedEntityType"(): $EntityType<(any)>
public "isBaseFuze"(): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "associatedEntityType"(): $EntityType<(any)>
get "baseFuze"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropMortarShellBlock$Type = ($DropMortarShellBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropMortarShellBlock_ = $DropMortarShellBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/propellant/$BigCartridgeBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BigCartridgeBlock, $BigCartridgeBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/propellant/$BigCartridgeBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BigCartridgeBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: $BigCartridgeBlock$Type, properties: $Item$Properties$Type)

public "getMaximumPowerLevels"(): integer
public "place"(context: $BlockPlaceContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public static "getPower"(stack: $ItemStack$Type): integer
public static "getWithPower"(power: integer): $ItemStack
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "maximumPowerLevels"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCartridgeBlockItem$Type = ($BigCartridgeBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCartridgeBlockItem_ = $BigCartridgeBlockItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipe" {
import {$BlockRecipeType, $BlockRecipeType$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeType"
import {$BlockRecipeSerializer, $BlockRecipeSerializer$Type} from "packages/rbasamoyai/createbigcannons/crafting/$BlockRecipeSerializer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockRecipe {

 "matches"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "getId"(): $ResourceLocation
 "getType"(): $BlockRecipeType<(any)>
 "getSerializer"(): $BlockRecipeSerializer<(any)>
 "getResultBlock"(): $Block
 "assembleInWorld"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}

export namespace $BlockRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRecipe$Type = ($BlockRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRecipe_ = $BlockRecipe$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterialProperties$Builder" {
import {$AutocannonMaterialProperties, $AutocannonMaterialProperties$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/material/$AutocannonMaterialProperties"

export class $AutocannonMaterialProperties$Builder {


public "build"(): $AutocannonMaterialProperties
public "weight"(weight: float): $AutocannonMaterialProperties$Builder
public "weldDamage"(weldDamage: integer): $AutocannonMaterialProperties$Builder
public "isWeldable"(isWeldable: boolean): $AutocannonMaterialProperties$Builder
public "spreadReductionPerBarrel"(spreadReductionPerBarrel: float): $AutocannonMaterialProperties$Builder
public "speedIncreasePerBarrel"(speedIncreasePerBarrel: float): $AutocannonMaterialProperties$Builder
public "baseSpeed"(baseSpeed: float): $AutocannonMaterialProperties$Builder
public "connectsInSurvival"(connectsInSurvival: boolean): $AutocannonMaterialProperties$Builder
public "weldStressPenalty"(weldStressPenalty: integer): $AutocannonMaterialProperties$Builder
public "maxBarrelLength"(maxBarrelLength: integer): $AutocannonMaterialProperties$Builder
public "maxSpeedIncreases"(maxSpeedIncreases: integer): $AutocannonMaterialProperties$Builder
public "baseSpread"(baseSpread: float): $AutocannonMaterialProperties$Builder
public "projectileLifetime"(projectileLifetime: integer): $AutocannonMaterialProperties$Builder
public "baseRecoil"(baseRecoil: float): $AutocannonMaterialProperties$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonMaterialProperties$Builder$Type = ($AutocannonMaterialProperties$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonMaterialProperties$Builder_ = $AutocannonMaterialProperties$Builder$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/ap_shell/$APShellProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FuzedBigCannonProjectile, $FuzedBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBigCannonProjectile"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$EntityDamagePropertiesComponent, $EntityDamagePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/config/components/$EntityDamagePropertiesComponent"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $APShellProjectile extends $FuzedBigCannonProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>

constructor(type: $EntityType$Type<(any)>, level: $Level$Type)

public "getDamageProperties"(): $EntityDamagePropertiesComponent
public "getRenderedBlockState"(): $BlockState
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "damageProperties"(): $EntityDamagePropertiesComponent
get "renderedBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APShellProjectile$Type = ($APShellProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APShellProjectile_ = $APShellProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/breeches/screw_breech/$ScrewBreechBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BigCannonEnd, $BigCannonEnd$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEnd"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$AbstractMountedCannonContraption, $AbstractMountedCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$AbstractMountedCannonContraption"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$MountedBigCannonContraption, $MountedBigCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$MountedBigCannonContraption"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BigCannonBlock, $BigCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ScrewBreechBlockEntity, $ScrewBreechBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/breeches/screw_breech/$ScrewBreechBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DirectionalKineticBlock, $DirectionalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalKineticBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ScrewBreechBlock extends $DirectionalKineticBlock implements $IBE<($ScrewBreechBlockEntity)>, $BigCannonBlock {
static readonly "OPEN": $EnumProperty<($BigCannonEnd)>
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type)

public "isComplete"(state: $BlockState$Type): boolean
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "hasShaftTowards"(world: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, face: $Direction$Type): boolean
public "getPreferredFacing"(context: $BlockPlaceContext$Type): $Direction
public "getFacing"(state: $BlockState$Type): $Direction
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCannonShape"(): $CannonCastShape
public "getOpeningType"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonEnd
public "canConnectToSide"(state: $BlockState$Type, dir: $Direction$Type): boolean
public "getCannonMaterial"(): $BigCannonMaterial
public "getDefaultOpeningType"(): $BigCannonEnd
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<($ScrewBreechBlockEntity)>
public "getRotationAxis"(state: $BlockState$Type): $Direction$Axis
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($ScrewBreechBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($ScrewBreechBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $ScrewBreechBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($ScrewBreechBlockEntity)>
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public "getOpeningType"(contraption: $MountedBigCannonContraption$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonEnd
public "onRemoveCannon"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "isImmovable"(state: $BlockState$Type): boolean
public "weldDamage"(): integer
public "canWeldSide"(level: $Level$Type, dir: $Direction$Type, state: $BlockState$Type, otherState: $BlockState$Type, pos: $BlockPos$Type): boolean
public "isWeldable"(state: $BlockState$Type): boolean
public "weldBlock"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, dir: $Direction$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public "onInteractWhileAssembled"(player: $Player$Type, localPos: $BlockPos$Type, side: $Direction$Type, interactionHand: $InteractionHand$Type, level: $Level$Type, contraption: $Contraption$Type, be: $BlockEntity$Type, info: $StructureTemplate$StructureBlockInfo$Type, entity: $PitchOrientedContraptionEntity$Type): boolean
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public "getCannonMaterialInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonMaterial
public "playerWillDestroyBigCannon"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getCannonContraption"(): $AbstractMountedCannonContraption
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getCannonShapeInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $CannonCastShape
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "cannonMaterial"(): $BigCannonMaterial
get "defaultOpeningType"(): $BigCannonEnd
get "blockEntityClass"(): $Class<($ScrewBreechBlockEntity)>
get "cannonContraption"(): $AbstractMountedCannonContraption
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrewBreechBlock$Type = ($ScrewBreechBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrewBreechBlock_ = $ScrewBreechBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/builtup/$BuiltUpCannonBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BigCannonEnd, $BigCannonEnd$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEnd"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$AbstractMountedCannonContraption, $AbstractMountedCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$AbstractMountedCannonContraption"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MountedBigCannonContraption, $MountedBigCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$MountedBigCannonContraption"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$LayeredBigCannonBlockEntity, $LayeredBigCannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/crafting/builtup/$LayeredBigCannonBlockEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BigCannonBlock, $BigCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $BuiltUpCannonBlock extends $DirectionalBlock implements $IBE<($LayeredBigCannonBlockEntity)>, $BigCannonBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isComplete"(state: $BlockState$Type): boolean
public "getFacing"(state: $BlockState$Type): $Direction
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCannonShape"(): $CannonCastShape
public "getCannonMaterial"(): $BigCannonMaterial
public "getDefaultOpeningType"(): $BigCannonEnd
public "getCannonMaterialInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonMaterial
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getDrops"(state: $BlockState$Type, params: $LootParams$Builder$Type): $List<($ItemStack)>
public "getBlockEntityClass"(): $Class<($LayeredBigCannonBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($LayeredBigCannonBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($LayeredBigCannonBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $LayeredBigCannonBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($LayeredBigCannonBlockEntity)>
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public "getOpeningType"(contraption: $MountedBigCannonContraption$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonEnd
public "getOpeningType"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonEnd
public "onRemoveCannon"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "isImmovable"(state: $BlockState$Type): boolean
public "weldDamage"(): integer
public "canWeldSide"(level: $Level$Type, dir: $Direction$Type, state: $BlockState$Type, otherState: $BlockState$Type, pos: $BlockPos$Type): boolean
public "isWeldable"(state: $BlockState$Type): boolean
public "weldBlock"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, dir: $Direction$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public "onInteractWhileAssembled"(player: $Player$Type, localPos: $BlockPos$Type, side: $Direction$Type, interactionHand: $InteractionHand$Type, level: $Level$Type, contraption: $Contraption$Type, be: $BlockEntity$Type, info: $StructureTemplate$StructureBlockInfo$Type, entity: $PitchOrientedContraptionEntity$Type): boolean
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public "playerWillDestroyBigCannon"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getCannonContraption"(): $AbstractMountedCannonContraption
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "canConnectToSide"(state: $BlockState$Type, face: $Direction$Type): boolean
public "getCannonShapeInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $CannonCastShape
get "blockEntityType"(): $BlockEntityType<(any)>
get "cannonShape"(): $CannonCastShape
get "cannonMaterial"(): $BigCannonMaterial
get "defaultOpeningType"(): $BigCannonEnd
get "blockEntityClass"(): $Class<($LayeredBigCannonBlockEntity)>
get "cannonContraption"(): $AbstractMountedCannonContraption
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuiltUpCannonBlock$Type = ($BuiltUpCannonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuiltUpCannonBlock_ = $BuiltUpCannonBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/shrapnel/$ShrapnelShellProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FuzedBigCannonProjectile, $FuzedBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBigCannonProjectile"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$EntityDamagePropertiesComponent, $EntityDamagePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/config/components/$EntityDamagePropertiesComponent"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ShrapnelShellProjectile extends $FuzedBigCannonProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>

constructor(type: $EntityType$Type<(any)>, level: $Level$Type)

public "getDamageProperties"(): $EntityDamagePropertiesComponent
public "getRenderedBlockState"(): $BlockState
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "damageProperties"(): $EntityDamagePropertiesComponent
get "renderedBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShrapnelShellProjectile$Type = ($ShrapnelShellProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShrapnelShellProjectile_ = $ShrapnelShellProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/ap_round/$APAutocannonRoundItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AutocannonRoundItem, $AutocannonRoundItem$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonRoundItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$AutocannonProjectilePropertiesComponent, $AutocannonProjectilePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/config/$AutocannonProjectilePropertiesComponent"
import {$AbstractAutocannonProjectile, $AbstractAutocannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AbstractAutocannonProjectile"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $APAutocannonRoundItem extends $AutocannonRoundItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "getAutocannonProjectile"(stack: $ItemStack$Type, level: $Level$Type): $AbstractAutocannonProjectile
public "getAutocannonProperties"(itemStack: $ItemStack$Type): $AutocannonProjectilePropertiesComponent
public "getEntityType"(stack: $ItemStack$Type): $EntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APAutocannonRoundItem$Type = ($APAutocannonRoundItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APAutocannonRoundItem_ = $APAutocannonRoundItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/boring/$UnboredSlidingBreechBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ITransformableBlock, $ITransformableBlock$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$UnboredBigCannonBlock, $UnboredBigCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/crafting/boring/$UnboredBigCannonBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $UnboredSlidingBreechBlock extends $UnboredBigCannonBlock implements $ITransformableBlock {
static readonly "ALONG_FIRST": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, material: $BigCannonMaterial$Type, baseShape: $VoxelShape$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnboredSlidingBreechBlock$Type = ($UnboredSlidingBreechBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnboredSlidingBreechBlock_ = $UnboredSlidingBreechBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/boring/$CannonDrillBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$AbstractCannonDrillBlockEntity, $AbstractCannonDrillBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/crafting/boring/$AbstractCannonDrillBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DirectionalAxisKineticBlock, $DirectionalAxisKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalAxisKineticBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$MechanicalPistonBlock$PistonState, $MechanicalPistonBlock$PistonState$Type} from "packages/com/simibubi/create/content/contraptions/piston/$MechanicalPistonBlock$PistonState"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CannonDrillBlock extends $DirectionalAxisKineticBlock implements $IBE<($AbstractCannonDrillBlockEntity)> {
static readonly "STATE": $EnumProperty<($MechanicalPistonBlock$PistonState)>
static readonly "AXIS_ALONG_FIRST_COORDINATE": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public static "destroyExtensionPoles"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, dropBlocks: boolean): void
public static "maxAllowedDrillLength"(): integer
public "getBlockEntityClass"(): $Class<($AbstractCannonDrillBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($AbstractCannonDrillBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($AbstractCannonDrillBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $AbstractCannonDrillBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($AbstractCannonDrillBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($AbstractCannonDrillBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonDrillBlock$Type = ($CannonDrillBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonDrillBlock_ = $CannonDrillBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/$CannonBehavior" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"

export class $CannonBehavior extends $BlockEntityBehaviour {
 "blockEntity": $SmartBlockEntity


public "write"(nbt: $CompoundTag$Type, spawnPacket: boolean): void
public "read"(nbt: $CompoundTag$Type, clientPacket: boolean): void
public "tick"(): void
public "canConnectToSide"(face: $Direction$Type): boolean
public "setConnectedFace"(face: $Direction$Type, isConnected: boolean): void
public "setWelded"(face: $Direction$Type, welded: boolean): void
public "isSafeNBT"(): boolean
public "isWeldedOn"(dir: $Direction$Type): boolean
public "isConnectedTo"(face: $Direction$Type): boolean
public "isWelded"(): boolean
get "safeNBT"(): boolean
get "welded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonBehavior$Type = ($CannonBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonBehavior_ = $CannonBehavior$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEndBlockEntity" {
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$WandActionable, $WandActionable$Type} from "packages/rbasamoyai/createbigcannons/crafting/$WandActionable"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$IBigCannonBlockEntity, $IBigCannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$IBigCannonBlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BigCannonEndBlockEntity extends $SmartBlockEntity implements $IBigCannonBlockEntity, $WandActionable {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "onWandUsed"(context: $UseOnContext$Type): $InteractionResult
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "canLoadBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "getInnerCannonBlockState"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, state: $BlockState$Type): boolean
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "canPushBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "isValidLoader"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "blockCanHandle"(data: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonEndBlockEntity$Type = ($BigCannonEndBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonEndBlockEntity_ = $BigCannonEndBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/fluid_shell/$FluidShellProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$EndFluidStack, $EndFluidStack$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/fluid_shell/$EndFluidStack"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$FuzedBigCannonProjectile, $FuzedBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBigCannonProjectile"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDamagePropertiesComponent, $EntityDamagePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/config/components/$EntityDamagePropertiesComponent"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $FluidShellProjectile extends $FuzedBigCannonProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>

constructor(type: $EntityType$Type<(any)>, level: $Level$Type)

public "getDamageProperties"(): $EntityDamagePropertiesComponent
public "getRenderedBlockState"(): $BlockState
public "readAdditionalSaveData"(tag: $CompoundTag$Type): void
public "addAdditionalSaveData"(tag: $CompoundTag$Type): void
public "setFluidStack"(fstack: $EndFluidStack$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "damageProperties"(): $EntityDamagePropertiesComponent
get "renderedBlockState"(): $BlockState
set "fluidStack"(value: $EndFluidStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidShellProjectile$Type = ($FluidShellProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidShellProjectile_ = $FluidShellProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/config/$DropMortarProjectileProperties" {
import {$DropMortarProjectilePropertiesComponent, $DropMortarProjectilePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/config/$DropMortarProjectilePropertiesComponent"

export interface $DropMortarProjectileProperties {

 "dropMortarProperties"(): $DropMortarProjectilePropertiesComponent

(): $DropMortarProjectilePropertiesComponent
}

export namespace $DropMortarProjectileProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropMortarProjectileProperties$Type = ($DropMortarProjectileProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropMortarProjectileProperties_ = $DropMortarProjectileProperties$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannon_control/cannon_types/$ICannonContraptionType" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICannonContraptionType {

 "getId"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $ICannonContraptionType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICannonContraptionType$Type = ($ICannonContraptionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICannonContraptionType_ = $ICannonContraptionType$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/ammo_container/$AutocannonAmmoContainerBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IAutocannonAmmoContainerContainer, $IAutocannonAmmoContainerContainer$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/ammo_container/$IAutocannonAmmoContainerContainer"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$AutocannonAmmoType, $AutocannonAmmoType$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonAmmoType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export class $AutocannonAmmoContainerBlockEntity extends $BlockEntity implements $IAutocannonAmmoContainerContainer, $MenuProvider, $Nameable {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "getCapability"(cap: $Capability$Type<(any)>, side: $Direction$Type): $LazyOptional<(any)>
public "recheckOpen"(): void
public "getName"(): $Component
public "getDisplayName"(): $Component
public "setChanged"(): void
public "getCustomName"(): $Component
public "isCreativeContainer"(): boolean
public "setCustomName"(name: $Component$Type): void
public "removeItem"(slot: integer, amount: integer): $ItemStack
public "clearContent"(): void
public "createMenu"(i: integer, inventory: $Inventory$Type, player: $Player$Type): $AbstractContainerMenu
public "setItem"(slot: integer, stack: $ItemStack$Type): void
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "load"(tag: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "startOpen"(player: $Player$Type): void
public "stillValid"(player: $Player$Type): boolean
public "stopOpen"(player: $Player$Type): void
public "saveToItem"(stack: $ItemStack$Type): void
public "getMainAmmoStack"(): $ItemStack
public "canDropInCreative"(): boolean
public "setMainAmmoDirect"(stack: $ItemStack$Type): void
public "setTracersDirect"(stack: $ItemStack$Type): void
public "getSpacing"(): integer
public "setSpacing"(spacing: integer): void
public "getTracerStack"(): $ItemStack
public "getTotalCount"(): integer
public "getTracerAmmoCapacity"(): integer
public "getMainAmmoCapacity"(): integer
public "isEmpty"(): boolean
public "getContainerSize"(): integer
public "getItem"(slot: integer): $ItemStack
public "canPlaceItem"(index: integer, stack: $ItemStack$Type): boolean
public "getAmmoType"(): $AutocannonAmmoType
public "hasCustomName"(): boolean
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "getMaxStackSize"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "isMutable"(): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "getSlots"(): integer
public "countItem"(arg0: $Item$Type): integer
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getHeight"(): integer
public "clear"(): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "asContainer"(): $Container
public "getWidth"(): integer
public "getSlotLimit"(slot: integer): integer
public "setChanged"(): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "shouldCloseCurrentScreen"(): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
public static "tryClear"(arg0: any): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "clear"(ingredient: $Ingredient$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
get "name"(): $Component
get "displayName"(): $Component
get "customName"(): $Component
get "creativeContainer"(): boolean
set "customName"(value: $Component$Type)
get "updateTag"(): $CompoundTag
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "mainAmmoStack"(): $ItemStack
set "mainAmmoDirect"(value: $ItemStack$Type)
set "tracersDirect"(value: $ItemStack$Type)
get "spacing"(): integer
set "spacing"(value: integer)
get "tracerStack"(): $ItemStack
get "totalCount"(): integer
get "tracerAmmoCapacity"(): integer
get "mainAmmoCapacity"(): integer
get "empty"(): boolean
get "containerSize"(): integer
get "ammoType"(): $AutocannonAmmoType
get "maxStackSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonAmmoContainerBlockEntity$Type = ($AutocannonAmmoContainerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonAmmoContainerBlockEntity_ = $AutocannonAmmoContainerBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/builtup/$LayeredBigCannonBlockEntity" {
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$BigCannonBehavior, $BigCannonBehavior$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBehavior"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$WandActionable, $WandActionable$Type} from "packages/rbasamoyai/createbigcannons/crafting/$WandActionable"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$IBigCannonBlockEntity, $IBigCannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$IBigCannonBlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LayeredBigCannonBlockEntity extends $SmartBlockEntity implements $IBigCannonBlockEntity, $WandActionable {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "isEmpty"(): boolean
public "getLayer"(layer: $CannonCastShape$Type): $Block
public "tick"(): void
public "setLayer"(layer: $CannonCastShape$Type, block: $Block$Type): void
public "setBaseMaterial"(material: $BigCannonMaterial$Type): void
public "setLayerConnectedTo"(direction: $Direction$Type, shape: $CannonCastShape$Type, connected: boolean): void
public "isLayerConnectedTo"(direction: $Direction$Type, shape: $CannonCastShape$Type): boolean
public "getTopCannonShape"(): $CannonCastShape
public "onWandUsed"(context: $UseOnContext$Type): $InteractionResult
public "hasLayer"(layer: $CannonCastShape$Type): boolean
public "getBaseMaterial"(): $BigCannonMaterial
public "removeLayer"(layer: $CannonCastShape$Type): void
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getLayers"(): $Map<($CannonCastShape), ($Block)>
public "updateBlockstate"(): void
public "addLayersOfOther"(other: $LayeredBigCannonBlockEntity$Type): void
public "getConnectedTo"(direction: $Direction$Type): $Collection<($CannonCastShape)>
public "isCollidingWith"(info: $StructureTemplate$StructureBlockInfo$Type, other: $LayeredBigCannonBlockEntity$Type, dir: $Direction$Type): boolean
public "getSimplifiedBlock"(): $Block
public "canLoadBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "cannonBehavior"(): $BigCannonBehavior
public "getTopConnectedLayer"(direction: $Direction$Type): $CannonCastShape
public "removeLayersOfOther"(other: $LayeredBigCannonBlockEntity$Type): void
public "getSplitBlockEntity"(fullShape: $CannonCastShape$Type, from: $Direction$Type, movementDirection: $Direction$Type): $LayeredBigCannonBlockEntity
public "getSplitBlockEntity"(layers: $Collection$Type<($CannonCastShape$Type)>, from: $Direction$Type, movementDirection: $Direction$Type): $LayeredBigCannonBlockEntity
public static "getInnerCannonBlockState"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, state: $BlockState$Type): boolean
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "canPushBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "isValidLoader"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "blockCanHandle"(data: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "empty"(): boolean
set "baseMaterial"(value: $BigCannonMaterial$Type)
get "topCannonShape"(): $CannonCastShape
get "baseMaterial"(): $BigCannonMaterial
get "layers"(): $Map<($CannonCastShape), ($Block)>
get "simplifiedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredBigCannonBlockEntity$Type = ($LayeredBigCannonBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayeredBigCannonBlockEntity_ = $LayeredBigCannonBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$IEntityAdditionalSpawnData, $IEntityAdditionalSpawnData$Type} from "packages/net/minecraftforge/entity/$IEntityAdditionalSpawnData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$EntityType$Builder, $EntityType$Builder$Type} from "packages/net/minecraft/world/entity/$EntityType$Builder"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$SyncsExtraDataOnAdd, $SyncsExtraDataOnAdd$Type} from "packages/rbasamoyai/createbigcannons/base/$SyncsExtraDataOnAdd"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDamagePropertiesComponent, $EntityDamagePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/config/components/$EntityDamagePropertiesComponent"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ClientboundPreciseMotionSyncPacket, $ClientboundPreciseMotionSyncPacket$Type} from "packages/rbasamoyai/ritchiesprojectilelib/network/$ClientboundPreciseMotionSyncPacket"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $AbstractCannonProjectile extends $Projectile implements $SyncsExtraDataOnAdd, $IEntityAdditionalSpawnData {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>


public static "build"(builder: $EntityType$Builder$Type<(any)>): void
public "getOrientation"(): $Vec3
public "getDamageProperties"(): $EntityDamagePropertiesComponent
public "setLocalSoundCooldown"(value: integer): void
public "getLocalSoundCooldown"(): integer
public "indirectArtilleryFire"(bypassArmor: boolean): $DamageSource
public "getLightProbePosition"(partialTicks: float): $Vec3
public "getAddEntityPacket"(): $Packet<(any)>
public "attack"(source: $DamageSource$Type, damage: float): boolean
public "updateKinematics"(packet: $ClientboundPreciseMotionSyncPacket$Type): void
public "getProjectileMass"(): float
public "setProjectileMass"(power: float): void
public "isInGround"(): boolean
public "setInGround"(inGround: boolean): void
public "canLingerInGround"(): boolean
public "writeSpawnData"(buf: $FriendlyByteBuf$Type): void
public "readSpawnData"(buf: $FriendlyByteBuf$Type): void
public "canHitEntity"(entity: $Entity$Type): boolean
public "setOnGround"(onGround: boolean): void
public "tick"(): void
public "readAdditionalSaveData"(tag: $CompoundTag$Type): void
public "addAdditionalSaveData"(tag: $CompoundTag$Type): void
public "lerpTo"(x: double, y: double, z: double, yRot: float, xRot: float, lerpSteps: integer, teleport: boolean): void
public "addExtraSyncData"(): $CompoundTag
public "readExtraSyncData"(tag: $CompoundTag$Type): void
public "setChargePower"(power: float): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "orientation"(): $Vec3
get "damageProperties"(): $EntityDamagePropertiesComponent
set "localSoundCooldown"(value: integer)
get "localSoundCooldown"(): integer
get "addEntityPacket"(): $Packet<(any)>
get "projectileMass"(): float
set "projectileMass"(value: float)
get "inGround"(): boolean
set "inGround"(value: boolean)
set "onGround"(value: boolean)
set "chargePower"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCannonProjectile$Type = ($AbstractCannonProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCannonProjectile_ = $AbstractCannonProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/fuzes/$TimedFuzeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractCannonProjectile, $AbstractCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FuzeItem, $FuzeItem$Type} from "packages/rbasamoyai/createbigcannons/munitions/fuzes/$FuzeItem"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TimedFuzeItem extends $FuzeItem implements $MenuProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "getDisplayName"(): $Component
public static "getCreativeTabItem"(defaultFuze: integer): $ItemStack
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "canLingerInGround"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type): boolean
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "createMenu"(windowId: integer, playerInv: $Inventory$Type, player: $Player$Type): $AbstractContainerMenu
public "onProjectileTick"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type): boolean
public "onProjectileExpiry"(stack: $ItemStack$Type, projectile: $AbstractCannonProjectile$Type): boolean
public "addExtraInfo"(tooltip: $List$Type<($Component$Type)>, isSneaking: boolean, stack: $ItemStack$Type): void
public "shouldCloseCurrentScreen"(): boolean
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimedFuzeItem$Type = ($TimedFuzeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimedFuzeItem_ = $TimedFuzeItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/equipment/gas_mask/$GasMaskItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GasMaskItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public static "isWearingWorkingMask"(entity: $LivingEntity$Type): boolean
public static "addOverlayDisplayPredicate"(predicate: $Predicate$Type<($Player$Type)>): void
public static "canShowGasMaskOverlay"(player: $Player$Type): boolean
public "getEquipmentSlot"(stack: $ItemStack$Type): $EquipmentSlot
public static "registerDefaultHandlers"(): void
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "addIsWearingPredicate"(predicate: $Predicate$Type<($LivingEntity$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GasMaskItem$Type = ($GasMaskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GasMaskItem_ = $GasMaskItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/builtup/$CannonBuilderBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$PoleMoverBlockEntity, $PoleMoverBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/base/$PoleMoverBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CannonBuilderBlockEntity extends $PoleMoverBlockEntity {
 "offset": float
 "running": boolean
 "assembleNextTick": boolean
 "needsContraption": boolean
 "movedContraption": $AbstractContraptionEntity
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "disassemble"(): void
public "updateBlockstatesOnPowered"(state: $BlockState$Type): $BlockState
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonBuilderBlockEntity$Type = ($CannonBuilderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonBuilderBlockEntity_ = $CannonBuilderBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/remix/$HasCannonLightingVolume" {
import {$AbstractMountedCannonContraption, $AbstractMountedCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$AbstractMountedCannonContraption"

export interface $HasCannonLightingVolume {

 "createbigcannons$setCannonContraption"(arg0: $AbstractMountedCannonContraption$Type): void

(arg0: $AbstractMountedCannonContraption$Type): void
}

export namespace $HasCannonLightingVolume {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HasCannonLightingVolume$Type = ($HasCannonLightingVolume);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HasCannonLightingVolume_ = $HasCannonLightingVolume$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$SimpleShellBlock" {
import {$FuzedBigCannonProjectile, $FuzedBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBigCannonProjectile"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$FuzedBlockEntity, $FuzedBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedBlockEntity"
import {$FuzedProjectileBlock, $FuzedProjectileBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$FuzedProjectileBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SimpleShellBlock<ENTITY_TYPE extends $FuzedBigCannonProjectile> extends $FuzedProjectileBlock<($FuzedBlockEntity), (ENTITY_TYPE)> {
static readonly "FACING": $DirectionProperty
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


public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($FuzedBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($FuzedBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleShellBlock$Type<ENTITY_TYPE> = ($SimpleShellBlock<(ENTITY_TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleShellBlock_<ENTITY_TYPE> = $SimpleShellBlock$Type<(ENTITY_TYPE)>;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/traffic_cone/$TrafficConeBlockItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrafficConeBlockItem extends $BlockItem implements $Equipable {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getEquipmentSlot"(): $EquipmentSlot
public "getEquipSound"(): $SoundEvent
public "swapWithEquipmentSlot"(arg0: $Item$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "get"(arg0: $ItemStack$Type): $Equipable
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrafficConeBlockItem$Type = ($TrafficConeBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrafficConeBlockItem_ = $TrafficConeBlockItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/incomplete/$IncompleteAutocannonBlockEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$IHaveHoveringInformation, $IHaveHoveringInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveHoveringInformation"
import {$WandActionable, $WandActionable$Type} from "packages/rbasamoyai/createbigcannons/crafting/$WandActionable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AutocannonBlockEntity, $AutocannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBlockEntity"

export class $IncompleteAutocannonBlockEntity extends $AutocannonBlockEntity implements $IHaveHoveringInformation, $WandActionable {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addToTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "onWandUsed"(context: $UseOnContext$Type): $InteractionResult
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncompleteAutocannonBlockEntity$Type = ($IncompleteAutocannonBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IncompleteAutocannonBlockEntity_ = $IncompleteAutocannonBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/$InteractableCannonBlock" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $InteractableCannonBlock {

 "onInteractWhileAssembled"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $InteractionHand$Type, arg4: $Level$Type, arg5: $Contraption$Type, arg6: $BlockEntity$Type, arg7: $StructureTemplate$StructureBlockInfo$Type, arg8: $PitchOrientedContraptionEntity$Type): boolean

(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $InteractionHand$Type, arg4: $Level$Type, arg5: $Contraption$Type, arg6: $BlockEntity$Type, arg7: $StructureTemplate$StructureBlockInfo$Type, arg8: $PitchOrientedContraptionEntity$Type): boolean
}

export namespace $InteractableCannonBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractableCannonBlock$Type = ($InteractableCannonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InteractableCannonBlock_ = $InteractableCannonBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastMouldBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CannonCastMouldBlock extends $Block {
static readonly "SAND": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, noSandShape: $VoxelShape$Type, cannonShape: $Supplier$Type<($CannonCastShape$Type)>)

public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, result: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonCastMouldBlock$Type = ($CannonCastMouldBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonCastMouldBlock_ = $CannonCastMouldBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/index/fluid_utils/$CBCFlowingFluid$Still" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$CBCFlowingFluid, $CBCFlowingFluid$Type} from "packages/rbasamoyai/createbigcannons/index/fluid_utils/$CBCFlowingFluid"
import {$CBCFlowingFluid$Properties, $CBCFlowingFluid$Properties$Type} from "packages/rbasamoyai/createbigcannons/index/fluid_utils/$CBCFlowingFluid$Properties"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $CBCFlowingFluid$Still extends $CBCFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(properties: $CBCFlowingFluid$Properties$Type)

public "isSource"(state: $FluidState$Type): boolean
public "getAmount"(state: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBCFlowingFluid$Still$Type = ($CBCFlowingFluid$Still);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBCFlowingFluid$Still_ = $CBCFlowingFluid$Still$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/boring/$DrillBitBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WrenchableDirectionalBlock, $WrenchableDirectionalBlock$Type} from "packages/com/simibubi/create/foundation/block/$WrenchableDirectionalBlock"

export class $DrillBitBlock extends $WrenchableDirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "isPathfindable"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighbor: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillBitBlock$Type = ($DrillBitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillBitBlock_ = $DrillBitBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$AbstractCannonProjectile, $AbstractCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/$AbstractCannonProjectile"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AbstractBigCannonProjectile extends $AbstractCannonProjectile {
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>


public "getRenderedBlockState"(): $BlockState
public "tick"(): void
public "readAdditionalSaveData"(tag: $CompoundTag$Type): void
public "addAdditionalSaveData"(tag: $CompoundTag$Type): void
public "hasTracer"(): boolean
public "getTracer"(): $ItemStack
public "addedChargePower"(): float
public "minimumChargePower"(): float
public "canSquib"(): boolean
public "addedRecoil"(): float
public "setTracer"(stack: $ItemStack$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "renderedBlockState"(): $BlockState
get "tracer"(): $ItemStack
set "tracer"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBigCannonProjectile$Type = ($AbstractBigCannonProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBigCannonProjectile_ = $AbstractBigCannonProjectile$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$ProjectileBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractBigCannonProjectile, $AbstractBigCannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$AbstractBigCannonProjectile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BigCannonMunitionBlock, $BigCannonMunitionBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/$BigCannonMunitionBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $ProjectileBlock<ENTITY extends $AbstractBigCannonProjectile> extends $DirectionalBlock implements $IWrenchable, $BigCannonMunitionBlock {
static readonly "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isComplete"(total: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>, dir: $Direction$Type): boolean
public "getProjectile"(arg0: $Level$Type, arg1: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>): $AbstractBigCannonProjectile
public "getProjectile"(arg0: $Level$Type, arg1: $ItemStack$Type): $AbstractBigCannonProjectile
public "getExtractedItem"(info: $StructureTemplate$StructureBlockInfo$Type): $ItemStack
public "getHandloadingInfo"(stack: $ItemStack$Type, localPos: $BlockPos$Type, cannonOrientation: $Direction$Type): $StructureTemplate$StructureBlockInfo
public "isValidAddition"(total: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>, data: $StructureTemplate$StructureBlockInfo$Type, index: integer, dir: $Direction$Type): boolean
public "onCannonRotate"(oldState: $BlockState$Type, rotationAxis: $Direction$Axis$Type, rotation: $Rotation$Type): $BlockState
public "canBeLoaded"(state: $BlockState$Type, facing: $Direction$Axis$Type): boolean
public "getAxis"(state: $BlockState$Type): $Direction$Axis
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAssociatedEntityType"(): $EntityType<(any)>
public static "getTracerFromBlocks"(blocks: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>): $ItemStack
public static "getTracerFromItemStack"(stack: $ItemStack$Type): $ItemStack
public "getExpectedSize"(): integer
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
get "associatedEntityType"(): $EntityType<(any)>
get "expectedSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileBlock$Type<ENTITY> = ($ProjectileBlock<(ENTITY)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileBlock_<ENTITY> = $ProjectileBlock$Type<(ENTITY)>;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBaseBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BigCannonMaterial, $BigCannonMaterial$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/material/$BigCannonMaterial"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BigCannonEnd, $BigCannonEnd$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEnd"
import {$AbstractMountedCannonContraption, $AbstractMountedCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$AbstractMountedCannonContraption"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$MountedBigCannonContraption, $MountedBigCannonContraption$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$MountedBigCannonContraption"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BigCannonBlock, $BigCannonBlock$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $BigCannonBaseBlock extends $DirectionalBlock implements $BigCannonBlock {
static readonly "FACING": $DirectionProperty
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


public "getFacing"(state: $BlockState$Type): $Direction
public "getCannonMaterial"(): $BigCannonMaterial
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public static "onPlace"(level: $Level$Type, pos: $BlockPos$Type): void
public "getOpeningType"(contraption: $MountedBigCannonContraption$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonEnd
public "getOpeningType"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonEnd
public "onRemoveCannon"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "isImmovable"(state: $BlockState$Type): boolean
public "weldDamage"(): integer
public "canWeldSide"(level: $Level$Type, dir: $Direction$Type, state: $BlockState$Type, otherState: $BlockState$Type, pos: $BlockPos$Type): boolean
public "isWeldable"(state: $BlockState$Type): boolean
public "weldBlock"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, dir: $Direction$Type): void
public static "writeAndSyncSingleBlockData"(be: $BlockEntity$Type, oldInfo: $StructureTemplate$StructureBlockInfo$Type, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public "onInteractWhileAssembled"(player: $Player$Type, localPos: $BlockPos$Type, side: $Direction$Type, interactionHand: $InteractionHand$Type, level: $Level$Type, contraption: $Contraption$Type, be: $BlockEntity$Type, info: $StructureTemplate$StructureBlockInfo$Type, entity: $PitchOrientedContraptionEntity$Type): boolean
public "getDefaultOpeningType"(): $BigCannonEnd
public static "writeAndSyncMultipleBlockData"(changed: $Set$Type<($BlockPos$Type)>, entity: $AbstractContraptionEntity$Type, contraption: $Contraption$Type): void
public "getCannonMaterialInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $BigCannonMaterial
public "playerWillDestroyBigCannon"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getCannonContraption"(): $AbstractMountedCannonContraption
public "isComplete"(arg0: $BlockState$Type): boolean
public "getCannonShape"(): $CannonCastShape
public "canConnectToSide"(state: $BlockState$Type, face: $Direction$Type): boolean
public "getCannonShapeInLevel"(level: $LevelAccessor$Type, state: $BlockState$Type, pos: $BlockPos$Type): $CannonCastShape
get "cannonMaterial"(): $BigCannonMaterial
get "defaultOpeningType"(): $BigCannonEnd
get "cannonContraption"(): $AbstractMountedCannonContraption
get "cannonShape"(): $CannonCastShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonBaseBlock$Type = ($BigCannonBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonBaseBlock_ = $BigCannonBaseBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$IBigCannonBlockEntity, $IBigCannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$IBigCannonBlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BigCannonBlockEntity extends $SmartBlockEntity implements $IBigCannonBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviors: $List$Type<($BlockEntityBehaviour$Type)>): void
public static "getInnerCannonBlockState"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, state: $BlockState$Type): boolean
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "canPushBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "isValidLoader"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public "blockCanHandle"(data: $StructureTemplate$StructureBlockInfo$Type): boolean
public "canLoadBlock"(blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigCannonBlockEntity$Type = ($BigCannonBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigCannonBlockEntity_ = $BigCannonBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/incomplete/$IncompleteBigCannonBlockEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$IHaveHoveringInformation, $IHaveHoveringInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveHoveringInformation"
import {$WandActionable, $WandActionable$Type} from "packages/rbasamoyai/createbigcannons/crafting/$WandActionable"
import {$BigCannonEndBlockEntity, $BigCannonEndBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/cannon_end/$BigCannonEndBlockEntity"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $IncompleteBigCannonBlockEntity extends $BigCannonEndBlockEntity implements $IHaveHoveringInformation, $WandActionable {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addToTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "onWandUsed"(context: $UseOnContext$Type): $InteractionResult
public static "getInnerCannonBlockState"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, state: $BlockState$Type): boolean
public static "isValidMunitionState"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "isValidLoader"(cannonAxis: $Direction$Axis$Type, blockInfo: $StructureTemplate$StructureBlockInfo$Type): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncompleteBigCannonBlockEntity$Type = ($IncompleteBigCannonBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IncompleteBigCannonBlockEntity_ = $IncompleteBigCannonBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/big_cannon/propellant/$PowderChargeBlock" {
import {$BigCannonBehavior, $BigCannonBehavior$Type} from "packages/rbasamoyai/createbigcannons/cannons/big_cannons/$BigCannonBehavior"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$BigCannonPropellantBlock, $BigCannonPropellantBlock$Type} from "packages/rbasamoyai/createbigcannons/munitions/big_cannon/propellant/$BigCannonPropellantBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $PowderChargeBlock extends $RotatedPillarBlock implements $IWrenchable, $BigCannonPropellantBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getChargePower"(stack: $ItemStack$Type): float
public "getChargePower"(data: $StructureTemplate$StructureBlockInfo$Type): float
public "getStressOnCannon"(stack: $ItemStack$Type): float
public "getStressOnCannon"(data: $StructureTemplate$StructureBlockInfo$Type): float
public "getExtractedItem"(info: $StructureTemplate$StructureBlockInfo$Type): $ItemStack
public "getRecoil"(data: $StructureTemplate$StructureBlockInfo$Type): float
public "consumePropellant"(behavior: $BigCannonBehavior$Type): void
public "getHandloadingInfo"(stack: $ItemStack$Type, localPos: $BlockPos$Type, cannonOrientation: $Direction$Type): $StructureTemplate$StructureBlockInfo
public "onCannonRotate"(oldState: $BlockState$Type, rotationAxis: $Direction$Axis$Type, rotation: $Rotation$Type): $BlockState
public "canBeLoaded"(state: $BlockState$Type, axis: $Direction$Axis$Type): boolean
public "getAxis"(state: $BlockState$Type): $Direction$Axis
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getSpread"(data: $StructureTemplate$StructureBlockInfo$Type): float
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "canBeIgnited"(data: $StructureTemplate$StructureBlockInfo$Type, dir: $Direction$Type): boolean
public "isValidAddition"(self: $StructureTemplate$StructureBlockInfo$Type, index: integer, dir: $Direction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowderChargeBlock$Type = ($PowderChargeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PowderChargeBlock_ = $PowderChargeBlock$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/cannons/autocannon/recoil_spring/$AutocannonRecoilSpringBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$AnimatedAutocannon, $AnimatedAutocannon$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AnimatedAutocannon"
import {$PitchOrientedContraptionEntity, $PitchOrientedContraptionEntity$Type} from "packages/rbasamoyai/createbigcannons/cannon_control/contraption/$PitchOrientedContraptionEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AutocannonBlockEntity, $AutocannonBlockEntity$Type} from "packages/rbasamoyai/createbigcannons/cannons/autocannon/$AutocannonBlockEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutocannonRecoilSpringBlockEntity extends $AutocannonBlockEntity implements $AnimatedAutocannon {
 "toAnimate": $Map<($BlockPos), ($BlockState)>
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "tick"(): void
public "incrementAnimationTicks"(): void
public "tickFromContraption"(level: $Level$Type, poce: $PitchOrientedContraptionEntity$Type, localPos: $BlockPos$Type): void
public "getAnimateOffset"(partialTicks: float): float
public "handleFiring"(): void
public "getAnimationTicks"(): integer
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "animationTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonRecoilSpringBlockEntity$Type = ($AutocannonRecoilSpringBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonRecoilSpringBlockEntity_ = $AutocannonRecoilSpringBlockEntity$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonCartridgeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AutocannonAmmoType, $AutocannonAmmoType$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonAmmoType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$AutocannonProjectilePropertiesComponent, $AutocannonProjectilePropertiesComponent$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/config/$AutocannonProjectilePropertiesComponent"
import {$AbstractAutocannonProjectile, $AbstractAutocannonProjectile$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AbstractAutocannonProjectile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AutocannonAmmoItem, $AutocannonAmmoItem$Type} from "packages/rbasamoyai/createbigcannons/munitions/autocannon/$AutocannonAmmoItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutocannonCartridgeItem extends $Item implements $AutocannonAmmoItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "getType"(): $AutocannonAmmoType
public "getAutocannonProjectile"(stack: $ItemStack$Type, level: $Level$Type): $AbstractAutocannonProjectile
public "getAutocannonProperties"(itemStack: $ItemStack$Type): $AutocannonProjectilePropertiesComponent
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getEntityType"(stack: $ItemStack$Type): $EntityType<(any)>
public "setTracer"(stack: $ItemStack$Type, value: boolean): void
public "isTracer"(stack: $ItemStack$Type): boolean
public static "hasProjectile"(stack: $ItemStack$Type): boolean
public static "getProjectileStack"(stack: $ItemStack$Type): $ItemStack
public static "writeProjectile"(round: $ItemStack$Type, cartridge: $ItemStack$Type): void
public "getSpentItem"(stack: $ItemStack$Type): $ItemStack
get "type"(): $AutocannonAmmoType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutocannonCartridgeItem$Type = ($AutocannonCartridgeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutocannonCartridgeItem_ = $AutocannonCartridgeItem$Type;
}}
declare module "packages/rbasamoyai/createbigcannons/crafting/casting/$FinishedCannonCastBlockEntity" {
import {$CannonCastShape, $CannonCastShape$Type} from "packages/rbasamoyai/createbigcannons/crafting/casting/$CannonCastShape"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FinishedCannonCastBlockEntity extends $SmartBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "initialize"(): void
public "getRootBlock"(): $BlockPos
public "isCentralBlock"(): boolean
public "getRenderedShape"(): $CannonCastShape
public "setRenderedShape"(shape: $CannonCastShape$Type): void
public "setCentralBlock"(pos: $BlockPos$Type): void
public "setRootBlock"(pos: $BlockPos$Type): void
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "setHeight"(height: integer): void
public "removeCast"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "rootBlock"(): $BlockPos
get "centralBlock"(): boolean
get "renderedShape"(): $CannonCastShape
set "renderedShape"(value: $CannonCastShape$Type)
set "centralBlock"(value: $BlockPos$Type)
set "rootBlock"(value: $BlockPos$Type)
set "height"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FinishedCannonCastBlockEntity$Type = ($FinishedCannonCastBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FinishedCannonCastBlockEntity_ = $FinishedCannonCastBlockEntity$Type;
}}
