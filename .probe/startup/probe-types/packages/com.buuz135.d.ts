declare module "packages/com/buuz135/findme/particle/$CustomParticleType" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $CustomParticleType extends $ParticleType<($CustomParticleType)> implements $ParticleOptions {

constructor(bl: boolean)

public "getType"(): $CustomParticleType
public "writeToString"(): string
public "writeToNetwork"(friendlyByteBuf: $FriendlyByteBuf$Type): void
public "codec"(): $Codec<($CustomParticleType)>
get "type"(): $CustomParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomParticleType$Type = ($CustomParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomParticleType_ = $CustomParticleType$Type;
}}
