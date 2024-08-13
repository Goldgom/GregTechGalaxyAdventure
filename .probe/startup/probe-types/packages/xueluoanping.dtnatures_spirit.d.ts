declare module "packages/xueluoanping/dtnatures_spirit/systems/pods/$FallingPodBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Pod, $Pod$Type} from "packages/com/ferreusveritas/dynamictrees/systems/pod/$Pod"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IFallingFruit, $IFallingFruit$Type} from "packages/xueluoanping/dtnatures_spirit/systems/pods/$IFallingFruit"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PodBlock, $PodBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/$PodBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FallingPodBlock extends $PodBlock implements $IFallingFruit {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Pod$Type)

public "isSupported"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "getRootY"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getDropOnFallItems"(arg0: $FallingBlockEntity$Type): $ItemStack
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "doTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDamageSource"(arg0: $Level$Type): $DamageSource
public "getRandomFruitFallChance"(): float
public "getPlayerDistanceToFall"(): float
public "getMaxAge"(): integer
public "getAge"(arg0: $BlockState$Type): integer
public "getFallingEntity"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $FallingBlockEntity
public "checkToFall"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): boolean
public "doFall"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
get "randomFruitFallChance"(): float
get "playerDistanceToFall"(): float
get "maxAge"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallingPodBlock$Type = ($FallingPodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FallingPodBlock_ = $FallingPodBlock$Type;
}}
declare module "packages/xueluoanping/dtnatures_spirit/systems/pods/$IFallingFruit" {
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IFallingFruit {

 "getMaxAge"(): integer
 "getAge"(arg0: $BlockState$Type): integer
 "getRootY"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
 "getFallingEntity"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $FallingBlockEntity
 "getDropOnFallItems"(arg0: $FallingBlockEntity$Type): $ItemStack
 "checkToFall"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): boolean
 "getDamageSource"(arg0: $Level$Type): $DamageSource
 "doFall"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
 "getRandomFruitFallChance"(): float
 "getPlayerDistanceToFall"(): float
}

export namespace $IFallingFruit {
const fallDamageMax: integer
const fallDamageAmount: float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFallingFruit$Type = ($IFallingFruit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFallingFruit_ = $IFallingFruit$Type;
}}
