declare module "packages/rbasamoyai/ritchiesprojectilelib/network/$ClientboundPreciseMotionSyncPacket" {
import {$PacketListener, $PacketListener$Type} from "packages/net/minecraft/network/$PacketListener"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RootPacket, $RootPacket$Type} from "packages/rbasamoyai/ritchiesprojectilelib/network/$RootPacket"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"

export class $ClientboundPreciseMotionSyncPacket extends $Record implements $RootPacket {

constructor(buf: $FriendlyByteBuf$Type)
constructor(entityId: integer, x: double, y: double, z: double, dx: double, dy: double, dz: double, yRot: float, xRot: float, onGround: boolean, lerpSteps: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): double
public "z"(): double
public "handle"(exec: $Executor$Type, listener: $PacketListener$Type, sender: $ServerPlayer$Type): void
public "y"(): double
public "dz"(): double
public "dx"(): double
public "dy"(): double
public "xRot"(): float
public "yRot"(): float
public "onGround"(): boolean
public "entityId"(): integer
public "lerpSteps"(): integer
public "rootEncode"(buf: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPreciseMotionSyncPacket$Type = ($ClientboundPreciseMotionSyncPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientboundPreciseMotionSyncPacket_ = $ClientboundPreciseMotionSyncPacket$Type;
}}
declare module "packages/rbasamoyai/ritchiesprojectilelib/network/$RootPacket" {
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
