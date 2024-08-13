declare module "packages/twilightforest/potions/$FrostedEffect" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $FrostedEffect extends $MobEffect {
static readonly "MOVEMENT_SPEED_MODIFIER_UUID": $UUID
static readonly "FROST_MULTIPLIER": double

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostedEffect$Type = ($FrostedEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostedEffect_ = $FrostedEffect$Type;
}}
