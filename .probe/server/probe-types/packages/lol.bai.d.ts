declare module "packages/lol/bai/badpackets/impl/handler/$ServerPacketHandler$Holder" {
import {$ServerPacketHandler, $ServerPacketHandler$Type} from "packages/lol/bai/badpackets/impl/handler/$ServerPacketHandler"

export interface $ServerPacketHandler$Holder {

 "badpackets_getHandler"(): $ServerPacketHandler

(): $ServerPacketHandler
}

export namespace $ServerPacketHandler$Holder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPacketHandler$Holder$Type = ($ServerPacketHandler$Holder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPacketHandler$Holder_ = $ServerPacketHandler$Holder$Type;
}}
declare module "packages/lol/bai/badpackets/impl/handler/$AbstractPacketHandler" {
import {$PacketSender, $PacketSender$Type} from "packages/lol/bai/badpackets/api/$PacketSender"
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PacketSendListener, $PacketSendListener$Type} from "packages/net/minecraft/network/$PacketSendListener"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractPacketHandler<T> implements $PacketSender {


public "send"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type, arg2: $PacketSendListener$Type): void
public "send"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type, arg2: $GenericFutureListener$Type<(any)>): void
public "canSend"(arg0: $ResourceLocation$Type): boolean
public "onRegister"(arg0: $ResourceLocation$Type): void
public "receive"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): boolean
public "onDisconnect"(): void
public "sendInitialChannelSyncPacket"(): void
public static "c2s"(): $PacketSender
public static "s2c"(arg0: $ServerPlayer$Type): $PacketSender
public "send"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPacketHandler$Type<T> = ($AbstractPacketHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPacketHandler_<T> = $AbstractPacketHandler$Type<(T)>;
}}
declare module "packages/lol/bai/badpackets/impl/handler/$ServerPacketHandler" {
import {$ServerGamePacketListenerImpl, $ServerGamePacketListenerImpl$Type} from "packages/net/minecraft/server/network/$ServerGamePacketListenerImpl"
import {$PacketSender, $PacketSender$Type} from "packages/lol/bai/badpackets/api/$PacketSender"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$AbstractPacketHandler, $AbstractPacketHandler$Type} from "packages/lol/bai/badpackets/impl/handler/$AbstractPacketHandler"
import {$C2SPacketReceiver, $C2SPacketReceiver$Type} from "packages/lol/bai/badpackets/api/$C2SPacketReceiver"

export class $ServerPacketHandler extends $AbstractPacketHandler<($C2SPacketReceiver)> {

constructor(arg0: $MinecraftServer$Type, arg1: $ServerGamePacketListenerImpl$Type, arg2: $Connection$Type)

public static "get"(arg0: $ServerPlayer$Type): $ServerPacketHandler
public static "c2s"(): $PacketSender
public static "s2c"(arg0: $ServerPlayer$Type): $PacketSender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPacketHandler$Type = ($ServerPacketHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPacketHandler_ = $ServerPacketHandler$Type;
}}
declare module "packages/lol/bai/badpackets/impl/handler/$ClientPacketHandler" {
import {$PacketSender, $PacketSender$Type} from "packages/lol/bai/badpackets/api/$PacketSender"
import {$S2CPacketReceiver, $S2CPacketReceiver$Type} from "packages/lol/bai/badpackets/api/$S2CPacketReceiver"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$AbstractPacketHandler, $AbstractPacketHandler$Type} from "packages/lol/bai/badpackets/impl/handler/$AbstractPacketHandler"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"

export class $ClientPacketHandler extends $AbstractPacketHandler<($S2CPacketReceiver)> {

constructor(arg0: $Minecraft$Type, arg1: $ClientPacketListener$Type)

public static "get"(): $ClientPacketHandler
public static "c2s"(): $PacketSender
public static "s2c"(arg0: $ServerPlayer$Type): $PacketSender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPacketHandler$Type = ($ClientPacketHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientPacketHandler_ = $ClientPacketHandler$Type;
}}
declare module "packages/lol/bai/badpackets/api/$S2CPacketReceiver" {
import {$PacketSender, $PacketSender$Type} from "packages/lol/bai/badpackets/api/$PacketSender"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $S2CPacketReceiver {

 "receive"(arg0: $Minecraft$Type, arg1: $ClientPacketListener$Type, arg2: $FriendlyByteBuf$Type, arg3: $PacketSender$Type): void

(arg0: $ResourceLocation$Type, arg1: $S2CPacketReceiver$Type): void
}

export namespace $S2CPacketReceiver {
function register(arg0: $ResourceLocation$Type, arg1: $S2CPacketReceiver$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $S2CPacketReceiver$Type = ($S2CPacketReceiver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $S2CPacketReceiver_ = $S2CPacketReceiver$Type;
}}
declare module "packages/lol/bai/badpackets/api/$PacketSender" {
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PacketSendListener, $PacketSendListener$Type} from "packages/net/minecraft/network/$PacketSendListener"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $PacketSender {

 "send"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type, arg2: $PacketSendListener$Type): void
/**
 * 
 * @deprecated
 */
 "send"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type, arg2: $GenericFutureListener$Type<(any)>): void
 "send"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): void
 "canSend"(arg0: $ResourceLocation$Type): boolean
}

export namespace $PacketSender {
function c2s(): $PacketSender
function s2c(arg0: $ServerPlayer$Type): $PacketSender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketSender$Type = ($PacketSender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketSender_ = $PacketSender$Type;
}}
declare module "packages/lol/bai/badpackets/impl/handler/$ClientPacketHandler$Holder" {
import {$ClientPacketHandler, $ClientPacketHandler$Type} from "packages/lol/bai/badpackets/impl/handler/$ClientPacketHandler"

export interface $ClientPacketHandler$Holder {

 "badpackets_getHandler"(): $ClientPacketHandler

(): $ClientPacketHandler
}

export namespace $ClientPacketHandler$Holder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPacketHandler$Holder$Type = ($ClientPacketHandler$Holder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientPacketHandler$Holder_ = $ClientPacketHandler$Holder$Type;
}}
declare module "packages/lol/bai/badpackets/api/$C2SPacketReceiver" {
import {$ServerGamePacketListenerImpl, $ServerGamePacketListenerImpl$Type} from "packages/net/minecraft/server/network/$ServerGamePacketListenerImpl"
import {$PacketSender, $PacketSender$Type} from "packages/lol/bai/badpackets/api/$PacketSender"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $C2SPacketReceiver {

 "receive"(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type, arg2: $ServerGamePacketListenerImpl$Type, arg3: $FriendlyByteBuf$Type, arg4: $PacketSender$Type): void

(arg0: $ResourceLocation$Type, arg1: $C2SPacketReceiver$Type): void
}

export namespace $C2SPacketReceiver {
function register(arg0: $ResourceLocation$Type, arg1: $C2SPacketReceiver$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $C2SPacketReceiver$Type = ($C2SPacketReceiver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $C2SPacketReceiver_ = $C2SPacketReceiver$Type;
}}
