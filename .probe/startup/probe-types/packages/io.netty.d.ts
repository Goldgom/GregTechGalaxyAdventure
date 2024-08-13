declare module "packages/io/netty/util/concurrent/$ScheduledFuture" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$ScheduledFuture as $ScheduledFuture$0, $ScheduledFuture$Type as $ScheduledFuture$0$Type} from "packages/java/util/concurrent/$ScheduledFuture"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Delayed, $Delayed$Type} from "packages/java/util/concurrent/$Delayed"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScheduledFuture<V> extends $Future<(V)>, $ScheduledFuture$0<(V)> {

 "cause"(): $Throwable
 "sync"(): $Future<(V)>
 "cancel"(arg0: boolean): boolean
 "isSuccess"(): boolean
 "removeListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $Future<(V)>
 "removeListener"(arg0: $GenericFutureListener$Type<(any)>): $Future<(V)>
 "await"(arg0: long, arg1: $TimeUnit$Type): boolean
 "await"(arg0: long): boolean
 "await"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$Type): boolean
 "awaitUninterruptibly"(): $Future<(V)>
 "addListener"(arg0: $GenericFutureListener$Type<(any)>): $Future<(V)>
 "getNow"(): V
 "syncUninterruptibly"(): $Future<(V)>
 "isCancellable"(): boolean
 "addListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $Future<(V)>
 "get"(arg0: long, arg1: $TimeUnit$Type): V
 "get"(): V
 "isDone"(): boolean
 "isCancelled"(): boolean
 "getDelay"(arg0: $TimeUnit$Type): long
 "compareTo"(arg0: $Delayed$Type): integer
}

export namespace $ScheduledFuture {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledFuture$Type<V> = ($ScheduledFuture<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScheduledFuture_<V> = $ScheduledFuture$Type<(V)>;
}}
declare module "packages/io/netty/buffer/$CompositeByteBuf" {
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$ByteBufAllocator, $ByteBufAllocator$Type} from "packages/io/netty/buffer/$ByteBufAllocator"
import {$AbstractReferenceCountedByteBuf, $AbstractReferenceCountedByteBuf$Type} from "packages/io/netty/buffer/$AbstractReferenceCountedByteBuf"
import {$ByteOrder, $ByteOrder$Type} from "packages/java/nio/$ByteOrder"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ScatteringByteChannel, $ScatteringByteChannel$Type} from "packages/java/nio/channels/$ScatteringByteChannel"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$GatheringByteChannel, $GatheringByteChannel$Type} from "packages/java/nio/channels/$GatheringByteChannel"
import {$FileChannel, $FileChannel$Type} from "packages/java/nio/channels/$FileChannel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CompositeByteBuf extends $AbstractReferenceCountedByteBuf implements $Iterable<($ByteBuf)> {

constructor(arg0: $ByteBufAllocator$Type, arg1: boolean, arg2: integer, arg3: $Iterable$Type<($ByteBuf$Type)>)
constructor(arg0: $ByteBufAllocator$Type, arg1: boolean, arg2: integer)
constructor(arg0: $ByteBufAllocator$Type, arg1: boolean, arg2: integer, ...arg3: ($ByteBuf$Type)[])

public "toString"(): string
public "getByte"(arg0: integer): byte
public "clear"(): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $OutputStream$Type, arg2: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$Type, arg2: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$Type): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuffer$Type): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$Type, arg2: integer, arg3: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $GatheringByteChannel$Type, arg2: integer): integer
public "getBytes"(arg0: integer, arg1: $FileChannel$Type, arg2: long, arg3: integer): integer
public "iterator"(): $Iterator<($ByteBuf)>
public "component"(arg0: integer): $ByteBuf
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (byte)[]
public "arrayOffset"(): integer
public "setBoolean"(arg0: integer, arg1: boolean): $CompositeByteBuf
public "setByte"(arg0: integer, arg1: integer): $CompositeByteBuf
public "setChar"(arg0: integer, arg1: integer): $CompositeByteBuf
public "setDouble"(arg0: integer, arg1: double): $CompositeByteBuf
public "copy"(arg0: integer, arg1: integer): $ByteBuf
public "unwrap"(): $ByteBuf
public "capacity"(arg0: integer): $CompositeByteBuf
public "capacity"(): integer
public "order"(): $ByteOrder
public "readBytes"(arg0: $ByteBuffer$Type): $CompositeByteBuf
public "readBytes"(arg0: $OutputStream$Type, arg1: integer): $CompositeByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $CompositeByteBuf
public "readBytes"(arg0: (byte)[]): $CompositeByteBuf
public "readBytes"(arg0: $ByteBuf$Type): $CompositeByteBuf
public "readBytes"(arg0: $ByteBuf$Type, arg1: integer): $CompositeByteBuf
public "writeBytes"(arg0: $ByteBuf$Type): $CompositeByteBuf
public "writeBytes"(arg0: (byte)[]): $CompositeByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $CompositeByteBuf
public "writeChar"(arg0: integer): $CompositeByteBuf
public "writeFloat"(arg0: float): $CompositeByteBuf
public "writeByte"(arg0: integer): $CompositeByteBuf
public "writeShort"(arg0: integer): $CompositeByteBuf
public "writeDouble"(arg0: double): $CompositeByteBuf
public "decompose"(arg0: integer, arg1: integer): $List<($ByteBuf)>
public "numComponents"(): integer
public "alloc"(): $ByteBufAllocator
public "addComponent"(arg0: boolean, arg1: integer, arg2: $ByteBuf$Type): $CompositeByteBuf
public "addComponent"(arg0: $ByteBuf$Type): $CompositeByteBuf
public "addComponent"(arg0: integer, arg1: $ByteBuf$Type): $CompositeByteBuf
public "addComponent"(arg0: boolean, arg1: $ByteBuf$Type): $CompositeByteBuf
public "discardReadBytes"(): $CompositeByteBuf
public "resetReaderIndex"(): $CompositeByteBuf
public "readerIndex"(arg0: integer): $CompositeByteBuf
public "markReaderIndex"(): $CompositeByteBuf
public "markWriterIndex"(): $CompositeByteBuf
public "setZero"(arg0: integer, arg1: integer): $CompositeByteBuf
public "setMedium"(arg0: integer, arg1: integer): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuffer$Type): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $FileChannel$Type, arg2: long, arg3: integer): integer
public "setBytes"(arg0: integer, arg1: $ByteBuf$Type, arg2: integer, arg3: integer): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $InputStream$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $ScatteringByteChannel$Type, arg2: integer): integer
public "writeZero"(arg0: integer): $CompositeByteBuf
public "writeMedium"(arg0: integer): $CompositeByteBuf
public "nioBufferCount"(): integer
public "internalNioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "memoryAddress"(): long
public "retain"(arg0: integer): $CompositeByteBuf
public "hasMemoryAddress"(): boolean
public "nioBuffers"(arg0: integer, arg1: integer): ($ByteBuffer)[]
public "nioBuffers"(): ($ByteBuffer)[]
public "nioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "touch"(arg0: any): $CompositeByteBuf
public "addComponents"(arg0: integer, arg1: $Iterable$Type<($ByteBuf$Type)>): $CompositeByteBuf
public "addComponents"(arg0: boolean, arg1: $Iterable$Type<($ByteBuf$Type)>): $CompositeByteBuf
public "addComponents"(arg0: integer, ...arg1: ($ByteBuf$Type)[]): $CompositeByteBuf
public "addComponents"(arg0: $Iterable$Type<($ByteBuf$Type)>): $CompositeByteBuf
public "addComponents"(...arg0: ($ByteBuf$Type)[]): $CompositeByteBuf
public "addComponents"(arg0: boolean, ...arg1: ($ByteBuf$Type)[]): $CompositeByteBuf
public "internalComponentAtOffset"(arg0: integer): $ByteBuf
public "discardReadComponents"(): $CompositeByteBuf
public "addFlattenedComponents"(arg0: boolean, arg1: $ByteBuf$Type): $CompositeByteBuf
public "maxNumComponents"(): integer
public "removeComponent"(arg0: integer): $CompositeByteBuf
public "removeComponents"(arg0: integer, arg1: integer): $CompositeByteBuf
public "internalComponent"(arg0: integer): $ByteBuf
public "toByteIndex"(arg0: integer): integer
public "componentAtOffset"(arg0: integer): $ByteBuf
public "consolidate"(arg0: integer, arg1: integer): $CompositeByteBuf
public "consolidate"(): $CompositeByteBuf
public "toComponentIndex"(arg0: integer): integer
public "spliterator"(): $Spliterator<($ByteBuf)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$ByteBuf>;
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeByteBuf$Type = ($CompositeByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeByteBuf_ = $CompositeByteBuf$Type;
}}
declare module "packages/io/netty/channel/$ChannelOutboundBuffer" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$ChannelOutboundBuffer$MessageProcessor, $ChannelOutboundBuffer$MessageProcessor$Type} from "packages/io/netty/channel/$ChannelOutboundBuffer$MessageProcessor"
import {$ChannelPromise, $ChannelPromise$Type} from "packages/io/netty/channel/$ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOutboundBuffer {


public "remove"(arg0: $Throwable$Type): boolean
public "remove"(): boolean
public "isEmpty"(): boolean
public "size"(): integer
public "current"(): any
public "isWritable"(): boolean
public "currentProgress"(): long
public "addMessage"(arg0: any, arg1: integer, arg2: $ChannelPromise$Type): void
public "progress"(arg0: long): void
public "nioBufferCount"(): integer
public "nioBuffers"(arg0: integer, arg1: long): ($ByteBuffer)[]
public "nioBuffers"(): ($ByteBuffer)[]
/**
 * 
 * @deprecated
 */
public "recycle"(): void
public "addFlush"(): void
public "setUserDefinedWritability"(arg0: integer, arg1: boolean): void
public "bytesBeforeUnwritable"(): long
public "bytesBeforeWritable"(): long
public "getUserDefinedWritability"(arg0: integer): boolean
public "totalPendingWriteBytes"(): long
public "forEachFlushedMessage"(arg0: $ChannelOutboundBuffer$MessageProcessor$Type): void
public "nioBufferSize"(): long
public "removeBytes"(arg0: long): void
get "empty"(): boolean
get "writable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundBuffer$Type = ($ChannelOutboundBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOutboundBuffer_ = $ChannelOutboundBuffer$Type;
}}
declare module "packages/io/netty/channel/$ChannelInboundHandler" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$Type} from "packages/io/netty/channel/$ChannelHandlerContext"
import {$ChannelHandler, $ChannelHandler$Type} from "packages/io/netty/channel/$ChannelHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundHandler extends $ChannelHandler {

 "userEventTriggered"(arg0: $ChannelHandlerContext$Type, arg1: any): void
 "channelRead"(arg0: $ChannelHandlerContext$Type, arg1: any): void
 "channelRegistered"(arg0: $ChannelHandlerContext$Type): void
 "channelWritabilityChanged"(arg0: $ChannelHandlerContext$Type): void
 "channelReadComplete"(arg0: $ChannelHandlerContext$Type): void
 "channelUnregistered"(arg0: $ChannelHandlerContext$Type): void
 "channelActive"(arg0: $ChannelHandlerContext$Type): void
 "channelInactive"(arg0: $ChannelHandlerContext$Type): void
 "exceptionCaught"(arg0: $ChannelHandlerContext$Type, arg1: $Throwable$Type): void
 "handlerAdded"(arg0: $ChannelHandlerContext$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$Type): void
}

export namespace $ChannelInboundHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundHandler$Type = ($ChannelInboundHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInboundHandler_ = $ChannelInboundHandler$Type;
}}
declare module "packages/io/netty/util/concurrent/$SingleThreadEventExecutor" {
import {$OrderedEventExecutor, $OrderedEventExecutor$Type} from "packages/io/netty/util/concurrent/$OrderedEventExecutor"
import {$EventExecutorGroup, $EventExecutorGroup$Type} from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$Promise, $Promise$Type} from "packages/io/netty/util/concurrent/$Promise"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$EventExecutor, $EventExecutor$Type} from "packages/io/netty/util/concurrent/$EventExecutor"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$AbstractScheduledEventExecutor, $AbstractScheduledEventExecutor$Type} from "packages/io/netty/util/concurrent/$AbstractScheduledEventExecutor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Future as $Future$0, $Future$Type as $Future$0$Type} from "packages/java/util/concurrent/$Future"
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"
import {$ProgressivePromise, $ProgressivePromise$Type} from "packages/io/netty/util/concurrent/$ProgressivePromise"
import {$ThreadProperties, $ThreadProperties$Type} from "packages/io/netty/util/concurrent/$ThreadProperties"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SingleThreadEventExecutor extends $AbstractScheduledEventExecutor implements $OrderedEventExecutor {


/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "execute"(arg0: $Runnable$Type): void
public "addShutdownHook"(arg0: $Runnable$Type): void
public "removeShutdownHook"(arg0: $Runnable$Type): void
public "isShutdown"(): boolean
public "invokeAny"<T>(arg0: $Collection$Type<(any)>): T
public "invokeAny"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): T
public "invokeAll"<T>(arg0: $Collection$Type<(any)>): $List<($Future$0<(T)>)>
public "invokeAll"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): $List<($Future$0<(T)>)>
public "isTerminated"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$Type): boolean
public "terminationFuture"(): $Future<(any)>
public "isShuttingDown"(): boolean
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$Type): $Future<(any)>
public "inEventLoop"(arg0: $Thread$Type): boolean
public "pendingTasks"(): integer
public "lazyExecute"(arg0: $Runnable$Type): void
public "threadProperties"(): $ThreadProperties
public "parent"(): $EventExecutorGroup
public "next"(): $EventExecutor
public "inEventLoop"(): boolean
public "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
public "newPromise"<V>(): $Promise<(V)>
public "newFailedFuture"<V>(arg0: $Throwable$Type): $Future<(V)>
public "newSucceededFuture"<V>(arg0: V): $Future<(V)>
get "terminated"(): boolean
get "shuttingDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleThreadEventExecutor$Type = ($SingleThreadEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleThreadEventExecutor_ = $SingleThreadEventExecutor$Type;
}}
declare module "packages/io/netty/buffer/$AbstractByteBuf" {
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$GatheringByteChannel, $GatheringByteChannel$Type} from "packages/java/nio/channels/$GatheringByteChannel"
import {$FileChannel, $FileChannel$Type} from "packages/java/nio/channels/$FileChannel"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$ByteOrder, $ByteOrder$Type} from "packages/java/nio/$ByteOrder"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$ByteProcessor, $ByteProcessor$Type} from "packages/io/netty/util/$ByteProcessor"
import {$ScatteringByteChannel, $ScatteringByteChannel$Type} from "packages/java/nio/channels/$ScatteringByteChannel"
import {$Charset, $Charset$Type} from "packages/java/nio/charset/$Charset"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractByteBuf extends $ByteBuf {


public "equals"(arg0: any): boolean
public "toString"(): string
public "toString"(arg0: integer, arg1: integer, arg2: $Charset$Type): string
public "toString"(arg0: $Charset$Type): string
public "hashCode"(): integer
public "compareTo"(arg0: $ByteBuf$Type): integer
public "indexOf"(arg0: integer, arg1: integer, arg2: byte): integer
public "getBoolean"(arg0: integer): boolean
public "getByte"(arg0: integer): byte
public "getShort"(arg0: integer): short
public "getChar"(arg0: integer): character
public "getInt"(arg0: integer): integer
public "getLong"(arg0: integer): long
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "writeInt"(arg0: integer): $ByteBuf
public "readInt"(): integer
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $ByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(): $ByteBuf
public "isReadOnly"(): boolean
public "slice"(): $ByteBuf
public "slice"(arg0: integer, arg1: integer): $ByteBuf
public "duplicate"(): $ByteBuf
public "order"(arg0: $ByteOrder$Type): $ByteBuf
public "readBytes"(arg0: (byte)[]): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuffer$Type): $ByteBuf
public "readBytes"(arg0: $GatheringByteChannel$Type, arg1: integer): integer
public "readBytes"(arg0: $FileChannel$Type, arg1: long, arg2: integer): integer
public "readBytes"(arg0: $OutputStream$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$Type): $ByteBuf
public "readBytes"(arg0: $ByteBuf$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuffer$Type): $ByteBuf
public "writeBytes"(arg0: $InputStream$Type, arg1: integer): integer
public "writeBytes"(arg0: $ByteBuf$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$Type): $ByteBuf
public "writeBytes"(arg0: (byte)[]): $ByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $FileChannel$Type, arg1: long, arg2: integer): integer
public "writeBytes"(arg0: $ScatteringByteChannel$Type, arg1: integer): integer
public "writeChar"(arg0: integer): $ByteBuf
public "readChar"(): character
public "writeFloat"(arg0: float): $ByteBuf
public "readFloat"(): float
public "skipBytes"(arg0: integer): $ByteBuf
public "readBoolean"(): boolean
public "readByte"(): byte
public "readUnsignedByte"(): short
public "readShort"(): short
public "readUnsignedShort"(): integer
public "readLong"(): long
public "readDouble"(): double
public "writeBoolean"(arg0: boolean): $ByteBuf
public "writeByte"(arg0: integer): $ByteBuf
public "writeShort"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $ByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "isReadable"(arg0: integer): boolean
public "isReadable"(): boolean
public "isWritable"(arg0: integer): boolean
public "isWritable"(): boolean
public "setIndex"(arg0: integer, arg1: integer): $ByteBuf
public "getCharSequence"(arg0: integer, arg1: integer, arg2: $Charset$Type): charseq
public "readableBytes"(): integer
public "discardReadBytes"(): $ByteBuf
public "maxWritableBytes"(): integer
public "resetReaderIndex"(): $ByteBuf
public "writerIndex"(): integer
public "writerIndex"(arg0: integer): $ByteBuf
public "getUnsignedByte"(arg0: integer): short
public "getShortLE"(arg0: integer): short
public "readerIndex"(): integer
public "readerIndex"(arg0: integer): $ByteBuf
public "ensureWritable"(arg0: integer): $ByteBuf
public "ensureWritable"(arg0: integer, arg1: boolean): integer
public "markReaderIndex"(): $ByteBuf
public "markWriterIndex"(): $ByteBuf
public "maxCapacity"(): integer
public "asReadOnly"(): $ByteBuf
public "writableBytes"(): integer
public "resetWriterIndex"(): $ByteBuf
public "setCharSequence"(arg0: integer, arg1: charseq, arg2: $Charset$Type): integer
public "getUnsignedShortLE"(arg0: integer): integer
public "setLongLE"(arg0: integer, arg1: long): $ByteBuf
public "getUnsignedIntLE"(arg0: integer): long
public "getMedium"(arg0: integer): integer
public "getLongLE"(arg0: integer): long
public "setIntLE"(arg0: integer, arg1: integer): $ByteBuf
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "readShortLE"(): short
public "getUnsignedInt"(arg0: integer): long
public "getMediumLE"(arg0: integer): integer
public "getUnsignedShort"(arg0: integer): integer
public "getUnsignedMedium"(arg0: integer): integer
public "setMedium"(arg0: integer, arg1: integer): $ByteBuf
public "readMedium"(): integer
public "getIntLE"(arg0: integer): integer
public "setMediumLE"(arg0: integer, arg1: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$Type): $ByteBuf
public "setShortLE"(arg0: integer, arg1: integer): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "writeCharSequence"(arg0: charseq, arg1: $Charset$Type): integer
public "bytesBefore"(arg0: integer, arg1: byte): integer
public "bytesBefore"(arg0: integer, arg1: integer, arg2: byte): integer
public "bytesBefore"(arg0: byte): integer
public "retainedSlice"(): $ByteBuf
public "retainedSlice"(arg0: integer, arg1: integer): $ByteBuf
public "writeIntLE"(arg0: integer): $ByteBuf
public "retainedDuplicate"(): $ByteBuf
public "readUnsignedIntLE"(): long
public "writeMediumLE"(arg0: integer): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "readUnsignedMedium"(): integer
public "readUnsignedInt"(): long
public "readSlice"(arg0: integer): $ByteBuf
public "readCharSequence"(arg0: integer, arg1: $Charset$Type): charseq
public "writeLongLE"(arg0: long): $ByteBuf
public "readLongLE"(): long
public "readRetainedSlice"(arg0: integer): $ByteBuf
public "readMediumLE"(): integer
public "readIntLE"(): integer
public "writeShortLE"(arg0: integer): $ByteBuf
public "nioBuffers"(): ($ByteBuffer)[]
public "nioBuffer"(): $ByteBuffer
public "getUnsignedMediumLE"(arg0: integer): integer
public "discardSomeReadBytes"(): $ByteBuf
public "readUnsignedShortLE"(): integer
public "readUnsignedMediumLE"(): integer
public "forEachByteDesc"(arg0: integer, arg1: integer, arg2: $ByteProcessor$Type): integer
public "forEachByteDesc"(arg0: $ByteProcessor$Type): integer
public "forEachByte"(arg0: integer, arg1: integer, arg2: $ByteProcessor$Type): integer
public "forEachByte"(arg0: $ByteProcessor$Type): integer
get "readOnly"(): boolean
get "readable"(): boolean
get "writable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractByteBuf$Type = ($AbstractByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractByteBuf_ = $AbstractByteBuf$Type;
}}
declare module "packages/io/netty/channel/$EventLoopTaskQueueFactory" {
import {$Queue, $Queue$Type} from "packages/java/util/$Queue"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopTaskQueueFactory {

 "newTaskQueue"(arg0: integer): $Queue<($Runnable)>

(arg0: integer): $Queue<($Runnable)>
}

export namespace $EventLoopTaskQueueFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoopTaskQueueFactory$Type = ($EventLoopTaskQueueFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventLoopTaskQueueFactory_ = $EventLoopTaskQueueFactory$Type;
}}
declare module "packages/io/netty/channel/$ChannelPromise" {
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Channel, $Channel$Type} from "packages/io/netty/channel/$Channel"
import {$Promise, $Promise$Type} from "packages/io/netty/util/concurrent/$Promise"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$ChannelFuture, $ChannelFuture$Type} from "packages/io/netty/channel/$ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPromise extends $ChannelFuture, $Promise<(void)> {

 "sync"(): $ChannelPromise
 "channel"(): $Channel
 "removeListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $ChannelPromise
 "removeListener"(arg0: $GenericFutureListener$Type<(any)>): $ChannelPromise
 "await"(): $ChannelPromise
 "awaitUninterruptibly"(): $ChannelPromise
 "addListener"(arg0: $GenericFutureListener$Type<(any)>): $ChannelPromise
 "syncUninterruptibly"(): $ChannelPromise
 "setFailure"(arg0: $Throwable$Type): $ChannelPromise
 "unvoid"(): $ChannelPromise
 "trySuccess"(): boolean
 "addListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $ChannelPromise
 "setSuccess"(arg0: void): $ChannelPromise
 "setSuccess"(): $ChannelPromise
 "isVoid"(): boolean
 "trySuccess"(arg0: void): boolean
 "setUncancellable"(): boolean
 "tryFailure"(arg0: $Throwable$Type): boolean
 "setSuccess"(arg0: void): $Promise<(void)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "isSuccess"(): boolean
 "await"(arg0: long, arg1: $TimeUnit$Type): boolean
 "await"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$Type): boolean
 "getNow"(): void
 "isCancellable"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$Type): void
 "get"(): void
 "isDone"(): boolean
 "isCancelled"(): boolean
}

export namespace $ChannelPromise {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelPromise$Type = ($ChannelPromise);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelPromise_ = $ChannelPromise$Type;
}}
declare module "packages/io/netty/channel/$Channel$Unsafe" {
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"
import {$ChannelOutboundBuffer, $ChannelOutboundBuffer$Type} from "packages/io/netty/channel/$ChannelOutboundBuffer"
import {$EventLoop, $EventLoop$Type} from "packages/io/netty/channel/$EventLoop"
import {$RecvByteBufAllocator$Handle, $RecvByteBufAllocator$Handle$Type} from "packages/io/netty/channel/$RecvByteBufAllocator$Handle"
import {$ChannelPromise, $ChannelPromise$Type} from "packages/io/netty/channel/$ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel$Unsafe {

 "flush"(): void
 "register"(arg0: $EventLoop$Type, arg1: $ChannelPromise$Type): void
 "write"(arg0: any, arg1: $ChannelPromise$Type): void
 "connect"(arg0: $SocketAddress$Type, arg1: $SocketAddress$Type, arg2: $ChannelPromise$Type): void
 "close"(arg0: $ChannelPromise$Type): void
 "bind"(arg0: $SocketAddress$Type, arg1: $ChannelPromise$Type): void
 "beginRead"(): void
 "disconnect"(arg0: $ChannelPromise$Type): void
 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "deregister"(arg0: $ChannelPromise$Type): void
 "voidPromise"(): $ChannelPromise
 "recvBufAllocHandle"(): $RecvByteBufAllocator$Handle
 "outboundBuffer"(): $ChannelOutboundBuffer
 "closeForcibly"(): void
}

export namespace $Channel$Unsafe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$Unsafe$Type = ($Channel$Unsafe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Channel$Unsafe_ = $Channel$Unsafe$Type;
}}
declare module "packages/io/netty/util/$Constant" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Constant<T extends $Constant<(T)>> extends $Comparable<(T)> {

 "name"(): string
 "id"(): integer
 "compareTo"(arg0: T): integer
}

export namespace $Constant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constant$Type<T> = ($Constant<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Constant_<T> = $Constant$Type<(T)>;
}}
declare module "packages/io/netty/channel/nio/$NioEventLoopGroup" {
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/io/netty/util/concurrent/$ScheduledFuture"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$MultithreadEventLoopGroup, $MultithreadEventLoopGroup$Type} from "packages/io/netty/channel/$MultithreadEventLoopGroup"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$EventExecutorChooserFactory, $EventExecutorChooserFactory$Type} from "packages/io/netty/util/concurrent/$EventExecutorChooserFactory"
import {$SelectorProvider, $SelectorProvider$Type} from "packages/java/nio/channels/spi/$SelectorProvider"
import {$SelectStrategyFactory, $SelectStrategyFactory$Type} from "packages/io/netty/channel/$SelectStrategyFactory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RejectedExecutionHandler, $RejectedExecutionHandler$Type} from "packages/io/netty/util/concurrent/$RejectedExecutionHandler"
import {$ThreadFactory, $ThreadFactory$Type} from "packages/java/util/concurrent/$ThreadFactory"
import {$EventLoopTaskQueueFactory, $EventLoopTaskQueueFactory$Type} from "packages/io/netty/channel/$EventLoopTaskQueueFactory"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NioEventLoopGroup extends $MultithreadEventLoopGroup {

constructor(arg0: integer, arg1: $Executor$Type, arg2: $EventExecutorChooserFactory$Type, arg3: $SelectorProvider$Type, arg4: $SelectStrategyFactory$Type)
constructor(arg0: integer, arg1: $Executor$Type, arg2: $SelectorProvider$Type, arg3: $SelectStrategyFactory$Type)
constructor(arg0: integer, arg1: $Executor$Type, arg2: $SelectorProvider$Type)
constructor(arg0: integer, arg1: $ThreadFactory$Type, arg2: $SelectorProvider$Type, arg3: $SelectStrategyFactory$Type)
constructor(arg0: integer, arg1: $Executor$Type, arg2: $EventExecutorChooserFactory$Type, arg3: $SelectorProvider$Type, arg4: $SelectStrategyFactory$Type, arg5: $RejectedExecutionHandler$Type)
constructor(arg0: integer, arg1: $Executor$Type, arg2: $EventExecutorChooserFactory$Type, arg3: $SelectorProvider$Type, arg4: $SelectStrategyFactory$Type, arg5: $RejectedExecutionHandler$Type, arg6: $EventLoopTaskQueueFactory$Type)
constructor(arg0: integer, arg1: $Executor$Type, arg2: $EventExecutorChooserFactory$Type, arg3: $SelectorProvider$Type, arg4: $SelectStrategyFactory$Type, arg5: $RejectedExecutionHandler$Type, arg6: $EventLoopTaskQueueFactory$Type, arg7: $EventLoopTaskQueueFactory$Type)
constructor()
constructor(arg0: integer)
constructor(arg0: $ThreadFactory$Type)
constructor(arg0: integer, arg1: $ThreadFactory$Type, arg2: $SelectorProvider$Type)
constructor(arg0: integer, arg1: $Executor$Type)
constructor(arg0: integer, arg1: $ThreadFactory$Type)

public "setIoRatio"(arg0: integer): void
public "rebuildSelectors"(): void
public "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
public "submit"<T>(arg0: $Callable$Type<(T)>): $Future<(T)>
public "submit"(arg0: $Runnable$Type): $Future<(any)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleWithFixedDelay"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$Type<(V)>, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$Type, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
set "ioRatio"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NioEventLoopGroup$Type = ($NioEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NioEventLoopGroup_ = $NioEventLoopGroup$Type;
}}
declare module "packages/io/netty/buffer/$AbstractReferenceCountedByteBuf" {
import {$AbstractByteBuf, $AbstractByteBuf$Type} from "packages/io/netty/buffer/$AbstractByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractReferenceCountedByteBuf extends $AbstractByteBuf {


public "release"(): boolean
public "release"(arg0: integer): boolean
public "refCnt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReferenceCountedByteBuf$Type = ($AbstractReferenceCountedByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractReferenceCountedByteBuf_ = $AbstractReferenceCountedByteBuf$Type;
}}
declare module "packages/io/netty/util/$AttributeMap" {
import {$AttributeKey, $AttributeKey$Type} from "packages/io/netty/util/$AttributeKey"
import {$Attribute, $Attribute$Type} from "packages/io/netty/util/$Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AttributeMap {

 "attr"<T>(arg0: $AttributeKey$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$Type<(T)>): boolean
}

export namespace $AttributeMap {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeMap$Type = ($AttributeMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeMap_ = $AttributeMap$Type;
}}
declare module "packages/io/netty/channel/$ChannelHandlerContext" {
import {$ChannelPipeline, $ChannelPipeline$Type} from "packages/io/netty/channel/$ChannelPipeline"
import {$Channel, $Channel$Type} from "packages/io/netty/channel/$Channel"
import {$ByteBufAllocator, $ByteBufAllocator$Type} from "packages/io/netty/buffer/$ByteBufAllocator"
import {$AttributeKey, $AttributeKey$Type} from "packages/io/netty/util/$AttributeKey"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$Type} from "packages/io/netty/channel/$ChannelProgressivePromise"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$Type} from "packages/io/netty/channel/$ChannelOutboundInvoker"
import {$Attribute, $Attribute$Type} from "packages/io/netty/util/$Attribute"
import {$ChannelPromise, $ChannelPromise$Type} from "packages/io/netty/channel/$ChannelPromise"
import {$EventExecutor, $EventExecutor$Type} from "packages/io/netty/util/concurrent/$EventExecutor"
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"
import {$AttributeMap, $AttributeMap$Type} from "packages/io/netty/util/$AttributeMap"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$ChannelHandler, $ChannelHandler$Type} from "packages/io/netty/channel/$ChannelHandler"
import {$ChannelInboundInvoker, $ChannelInboundInvoker$Type} from "packages/io/netty/channel/$ChannelInboundInvoker"
import {$ChannelFuture, $ChannelFuture$Type} from "packages/io/netty/channel/$ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandlerContext extends $AttributeMap, $ChannelInboundInvoker, $ChannelOutboundInvoker {

 "name"(): string
 "flush"(): $ChannelHandlerContext
 "read"(): $ChannelHandlerContext
 "handler"(): $ChannelHandler
/**
 * 
 * @deprecated
 */
 "attr"<T>(arg0: $AttributeKey$Type<(T)>): $Attribute<(T)>
 "channel"(): $Channel
 "executor"(): $EventExecutor
 "alloc"(): $ByteBufAllocator
 "fireChannelRead"(arg0: any): $ChannelHandlerContext
 "fireChannelActive"(): $ChannelHandlerContext
 "fireUserEventTriggered"(arg0: any): $ChannelHandlerContext
 "fireChannelInactive"(): $ChannelHandlerContext
 "fireChannelWritabilityChanged"(): $ChannelHandlerContext
 "fireChannelUnregistered"(): $ChannelHandlerContext
 "fireExceptionCaught"(arg0: $Throwable$Type): $ChannelHandlerContext
 "fireChannelRegistered"(): $ChannelHandlerContext
 "fireChannelReadComplete"(): $ChannelHandlerContext
 "isRemoved"(): boolean
 "pipeline"(): $ChannelPipeline
/**
 * 
 * @deprecated
 */
 "hasAttr"<T>(arg0: $AttributeKey$Type<(T)>): boolean
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type, arg1: $ChannelPromise$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type, arg1: $SocketAddress$Type, arg2: $ChannelPromise$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type, arg1: $SocketAddress$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$Type, arg1: $ChannelPromise$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "deregister"(arg0: $ChannelPromise$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
 "voidPromise"(): $ChannelPromise
 "newPromise"(): $ChannelPromise
 "newFailedFuture"(arg0: $Throwable$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
}

export namespace $ChannelHandlerContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandlerContext$Type = ($ChannelHandlerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandlerContext_ = $ChannelHandlerContext$Type;
}}
declare module "packages/io/netty/util/$IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IntSupplier {

 "get"(): integer

(): integer
}

export namespace $IntSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSupplier$Type = ($IntSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntSupplier_ = $IntSupplier$Type;
}}
declare module "packages/io/netty/util/concurrent/$ThreadProperties" {
import {$StackTraceElement, $StackTraceElement$Type} from "packages/java/lang/$StackTraceElement"
import {$Thread$State, $Thread$State$Type} from "packages/java/lang/$Thread$State"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ThreadProperties {

 "name"(): string
 "priority"(): integer
 "id"(): long
 "stackTrace"(): ($StackTraceElement)[]
 "isDaemon"(): boolean
 "isAlive"(): boolean
 "isInterrupted"(): boolean
 "state"(): $Thread$State
}

export namespace $ThreadProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadProperties$Type = ($ThreadProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreadProperties_ = $ThreadProperties$Type;
}}
declare module "packages/io/netty/channel/$ChannelFuture" {
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Channel, $Channel$Type} from "packages/io/netty/channel/$Channel"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelFuture extends $Future<(void)> {

 "isVoid"(): boolean
 "sync"(): $ChannelFuture
 "channel"(): $Channel
 "removeListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $ChannelFuture
 "removeListener"(arg0: $GenericFutureListener$Type<(any)>): $ChannelFuture
 "await"(): $ChannelFuture
 "awaitUninterruptibly"(): $ChannelFuture
 "addListener"(arg0: $GenericFutureListener$Type<(any)>): $ChannelFuture
 "syncUninterruptibly"(): $ChannelFuture
 "addListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $ChannelFuture
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "isSuccess"(): boolean
 "await"(arg0: long, arg1: $TimeUnit$Type): boolean
 "await"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$Type): boolean
 "getNow"(): void
 "isCancellable"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$Type): void
 "get"(): void
 "isDone"(): boolean
 "isCancelled"(): boolean
}

export namespace $ChannelFuture {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelFuture$Type = ($ChannelFuture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelFuture_ = $ChannelFuture$Type;
}}
declare module "packages/io/netty/util/concurrent/$EventExecutorGroup" {
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/io/netty/util/concurrent/$ScheduledFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ScheduledExecutorService, $ScheduledExecutorService$Type} from "packages/java/util/concurrent/$ScheduledExecutorService"
import {$EventExecutor, $EventExecutor$Type} from "packages/io/netty/util/concurrent/$EventExecutor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Future as $Future$0, $Future$Type as $Future$0$Type} from "packages/java/util/concurrent/$Future"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorGroup extends $ScheduledExecutorService, $Iterable<($EventExecutor)> {

/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "next"(): $EventExecutor
 "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
 "submit"<T>(arg0: $Callable$Type<(T)>): $Future<(T)>
 "submit"(arg0: $Runnable$Type): $Future<(any)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleWithFixedDelay"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$Type<(V)>, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$Type, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(any)>
 "terminationFuture"(): $Future<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$Type): $Future<(any)>
 "shutdownGracefully"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): T
 "invokeAny"<T>(arg0: $Collection$Type<(any)>): T
 "invokeAll"<T>(arg0: $Collection$Type<(any)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): $List<($Future$0<(T)>)>
 "isTerminated"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$Type): boolean
 "execute"(arg0: $Runnable$Type): void
}

export namespace $EventExecutorGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorGroup$Type = ($EventExecutorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutorGroup_ = $EventExecutorGroup$Type;
}}
declare module "packages/io/netty/util/collection/$LongObjectMap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LongObjectMap$PrimitiveEntry, $LongObjectMap$PrimitiveEntry$Type} from "packages/io/netty/util/collection/$LongObjectMap$PrimitiveEntry"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $LongObjectMap<V> extends $Map<(long), (V)> {

 "remove"(arg0: long): V
 "get"(arg0: long): V
 "put"(arg0: long, arg1: V): V
 "containsKey"(arg0: long): boolean
 "entries"(): $Iterable<($LongObjectMap$PrimitiveEntry<(V)>)>
 "remove"(arg0: any): V
 "remove"(arg0: any, arg1: any): boolean
 "get"(arg0: any): V
 "put"(arg0: long, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: long, arg1: V): V
 "replace"(arg0: long, arg1: V, arg2: V): boolean
 "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
 "size"(): integer
 "merge"(arg0: long, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
 "entrySet"(): $Set<($Map$Entry<(long), (V)>)>
 "putAll"(arg0: $Map$Type<(any), (any)>): void
 "putIfAbsent"(arg0: long, arg1: V): V
 "compute"(arg0: long, arg1: $BiFunction$Type<(any), (any), (any)>): V
 "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: long, arg1: $Function$Type<(any), (any)>): V
 "keySet"(): $Set<(long)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: long, arg1: $BiFunction$Type<(any), (any), (any)>): V
}

export namespace $LongObjectMap {
function copyOf<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(long), (V)>
function of<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V): $Map<(long), (V)>
function of<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V): $Map<(long), (V)>
function of<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V): $Map<(long), (V)>
function of<K, V>(): $Map<(long), (V)>
function of<K, V>(arg0: long, arg1: V, arg2: long, arg3: V): $Map<(long), (V)>
function of<K, V>(arg0: long, arg1: V): $Map<(long), (V)>
function of<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V, arg16: long, arg17: V, arg18: long, arg19: V): $Map<(long), (V)>
function of<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V, arg16: long, arg17: V): $Map<(long), (V)>
function of<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V, arg14: long, arg15: V): $Map<(long), (V)>
function of<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V, arg12: long, arg13: V): $Map<(long), (V)>
function of<K, V>(arg0: long, arg1: V, arg2: long, arg3: V, arg4: long, arg5: V, arg6: long, arg7: V, arg8: long, arg9: V, arg10: long, arg11: V): $Map<(long), (V)>
function entry<K, V>(arg0: long, arg1: V): $Map$Entry<(long), (V)>
function ofEntries<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(long), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongObjectMap$Type<V> = ($LongObjectMap<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongObjectMap_<V> = $LongObjectMap$Type<(V)>;
}}
declare module "packages/io/netty/channel/$ChannelConfig" {
import {$RecvByteBufAllocator, $RecvByteBufAllocator$Type} from "packages/io/netty/channel/$RecvByteBufAllocator"
import {$ByteBufAllocator, $ByteBufAllocator$Type} from "packages/io/netty/buffer/$ByteBufAllocator"
import {$ChannelOption, $ChannelOption$Type} from "packages/io/netty/channel/$ChannelOption"
import {$MessageSizeEstimator, $MessageSizeEstimator$Type} from "packages/io/netty/channel/$MessageSizeEstimator"
import {$WriteBufferWaterMark, $WriteBufferWaterMark$Type} from "packages/io/netty/channel/$WriteBufferWaterMark"
import {$Map, $Map$Type} from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelConfig {

 "getAllocator"(): $ByteBufAllocator
 "setConnectTimeoutMillis"(arg0: integer): $ChannelConfig
 "setOption"<T>(arg0: $ChannelOption$Type<(T)>, arg1: T): boolean
 "getOption"<T>(arg0: $ChannelOption$Type<(T)>): T
 "getOptions"(): $Map<($ChannelOption<(any)>), (any)>
 "setAutoRead"(arg0: boolean): $ChannelConfig
 "setOptions"(arg0: $Map$Type<($ChannelOption$Type<(any)>), (any)>): boolean
 "isAutoClose"(): boolean
 "setAutoClose"(arg0: boolean): $ChannelConfig
 "getWriteSpinCount"(): integer
 "setWriteSpinCount"(arg0: integer): $ChannelConfig
 "setAllocator"(arg0: $ByteBufAllocator$Type): $ChannelConfig
 "isAutoRead"(): boolean
 "getWriteBufferHighWaterMark"(): integer
/**
 * 
 * @deprecated
 */
 "getMaxMessagesPerRead"(): integer
 "setWriteBufferHighWaterMark"(arg0: integer): $ChannelConfig
 "getWriteBufferLowWaterMark"(): integer
 "getRecvByteBufAllocator"<T extends $RecvByteBufAllocator>(): T
 "getConnectTimeoutMillis"(): integer
/**
 * 
 * @deprecated
 */
 "setMaxMessagesPerRead"(arg0: integer): $ChannelConfig
 "setRecvByteBufAllocator"(arg0: $RecvByteBufAllocator$Type): $ChannelConfig
 "setWriteBufferWaterMark"(arg0: $WriteBufferWaterMark$Type): $ChannelConfig
 "setMessageSizeEstimator"(arg0: $MessageSizeEstimator$Type): $ChannelConfig
 "getMessageSizeEstimator"(): $MessageSizeEstimator
 "setWriteBufferLowWaterMark"(arg0: integer): $ChannelConfig
 "getWriteBufferWaterMark"(): $WriteBufferWaterMark
}

export namespace $ChannelConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelConfig$Type = ($ChannelConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelConfig_ = $ChannelConfig$Type;
}}
declare module "packages/io/netty/channel/$MultithreadEventLoopGroup" {
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/io/netty/util/concurrent/$ScheduledFuture"
import {$Channel, $Channel$Type} from "packages/io/netty/channel/$Channel"
import {$EventLoopGroup, $EventLoopGroup$Type} from "packages/io/netty/channel/$EventLoopGroup"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ChannelFuture, $ChannelFuture$Type} from "packages/io/netty/channel/$ChannelFuture"
import {$ChannelPromise, $ChannelPromise$Type} from "packages/io/netty/channel/$ChannelPromise"
import {$MultithreadEventExecutorGroup, $MultithreadEventExecutorGroup$Type} from "packages/io/netty/util/concurrent/$MultithreadEventExecutorGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventLoopGroup extends $MultithreadEventExecutorGroup implements $EventLoopGroup {


public "register"(arg0: $Channel$Type): $ChannelFuture
/**
 * 
 * @deprecated
 */
public "register"(arg0: $Channel$Type, arg1: $ChannelPromise$Type): $ChannelFuture
public "register"(arg0: $ChannelPromise$Type): $ChannelFuture
public "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
public "submit"<T>(arg0: $Callable$Type<(T)>): $Future<(T)>
public "submit"(arg0: $Runnable$Type): $Future<(any)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleWithFixedDelay"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$Type<(V)>, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$Type, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultithreadEventLoopGroup$Type = ($MultithreadEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultithreadEventLoopGroup_ = $MultithreadEventLoopGroup$Type;
}}
declare module "packages/io/netty/util/collection/$LongObjectMap$PrimitiveEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $LongObjectMap$PrimitiveEntry<V> {

 "value"(): V
 "key"(): long
 "setValue"(arg0: V): void
}

export namespace $LongObjectMap$PrimitiveEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongObjectMap$PrimitiveEntry$Type<V> = ($LongObjectMap$PrimitiveEntry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongObjectMap$PrimitiveEntry_<V> = $LongObjectMap$PrimitiveEntry$Type<(V)>;
}}
declare module "packages/io/netty/util/concurrent/$ProgressivePromise" {
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$ProgressiveFuture, $ProgressiveFuture$Type} from "packages/io/netty/util/concurrent/$ProgressiveFuture"
import {$Promise, $Promise$Type} from "packages/io/netty/util/concurrent/$Promise"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressivePromise<V> extends $Promise<(V)>, $ProgressiveFuture<(V)> {

 "sync"(): $ProgressivePromise<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $ProgressivePromise<(V)>
 "removeListener"(arg0: $GenericFutureListener$Type<(any)>): $ProgressivePromise<(V)>
 "await"(): $ProgressivePromise<(V)>
 "awaitUninterruptibly"(): $ProgressivePromise<(V)>
 "addListener"(arg0: $GenericFutureListener$Type<(any)>): $ProgressivePromise<(V)>
 "syncUninterruptibly"(): $ProgressivePromise<(V)>
 "setProgress"(arg0: long, arg1: long): $ProgressivePromise<(V)>
 "setFailure"(arg0: $Throwable$Type): $ProgressivePromise<(V)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "addListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $ProgressivePromise<(V)>
 "setSuccess"(arg0: V): $ProgressivePromise<(V)>
 "trySuccess"(arg0: V): boolean
 "setUncancellable"(): boolean
 "tryFailure"(arg0: $Throwable$Type): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "isSuccess"(): boolean
 "await"(arg0: long, arg1: $TimeUnit$Type): boolean
 "await"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$Type): boolean
 "getNow"(): V
 "isCancellable"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$Type): V
 "get"(): V
 "isDone"(): boolean
 "isCancelled"(): boolean
}

export namespace $ProgressivePromise {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressivePromise$Type<V> = ($ProgressivePromise<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressivePromise_<V> = $ProgressivePromise$Type<(V)>;
}}
declare module "packages/io/netty/util/$AbstractConstant" {
import {$Constant, $Constant$Type} from "packages/io/netty/util/$Constant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractConstant<T extends $AbstractConstant<(T)>> implements $Constant<(T)> {


public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: T): integer
public "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConstant$Type<T> = ($AbstractConstant<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractConstant_<T> = $AbstractConstant$Type<(T)>;
}}
declare module "packages/io/netty/channel/$ChannelId" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelId extends $Serializable, $Comparable<($ChannelId)> {

 "asShortText"(): string
 "asLongText"(): string
 "compareTo"(arg0: $ChannelId$Type): integer
}

export namespace $ChannelId {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelId$Type = ($ChannelId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelId_ = $ChannelId$Type;
}}
declare module "packages/io/netty/channel/$DefaultEventLoopGroup" {
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/io/netty/util/concurrent/$ScheduledFuture"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$MultithreadEventLoopGroup, $MultithreadEventLoopGroup$Type} from "packages/io/netty/channel/$MultithreadEventLoopGroup"
import {$ThreadFactory, $ThreadFactory$Type} from "packages/java/util/concurrent/$ThreadFactory"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DefaultEventLoopGroup extends $MultithreadEventLoopGroup {

constructor(arg0: integer, arg1: $Executor$Type)
constructor(arg0: integer, arg1: $ThreadFactory$Type)
constructor(arg0: $ThreadFactory$Type)
constructor(arg0: integer)
constructor()

public "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
public "submit"<T>(arg0: $Callable$Type<(T)>): $Future<(T)>
public "submit"(arg0: $Runnable$Type): $Future<(any)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleWithFixedDelay"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$Type<(V)>, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$Type, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultEventLoopGroup$Type = ($DefaultEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultEventLoopGroup_ = $DefaultEventLoopGroup$Type;
}}
declare module "packages/io/netty/util/concurrent/$EventExecutorChooserFactory$EventExecutorChooser" {
import {$EventExecutor, $EventExecutor$Type} from "packages/io/netty/util/concurrent/$EventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory$EventExecutorChooser {

 "next"(): $EventExecutor

(): $EventExecutor
}

export namespace $EventExecutorChooserFactory$EventExecutorChooser {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorChooserFactory$EventExecutorChooser$Type = ($EventExecutorChooserFactory$EventExecutorChooser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutorChooserFactory$EventExecutorChooser_ = $EventExecutorChooserFactory$EventExecutorChooser$Type;
}}
declare module "packages/io/netty/util/concurrent/$MultithreadEventExecutorGroup" {
import {$EventExecutor, $EventExecutor$Type} from "packages/io/netty/util/concurrent/$EventExecutor"
import {$AbstractEventExecutorGroup, $AbstractEventExecutorGroup$Type} from "packages/io/netty/util/concurrent/$AbstractEventExecutorGroup"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventExecutorGroup extends $AbstractEventExecutorGroup {


/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "iterator"(): $Iterator<($EventExecutor)>
public "next"(): $EventExecutor
public "isShutdown"(): boolean
public "isTerminated"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$Type): boolean
public "terminationFuture"(): $Future<(any)>
public "isShuttingDown"(): boolean
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$Type): $Future<(any)>
public "executorCount"(): integer
get "terminated"(): boolean
get "shuttingDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultithreadEventExecutorGroup$Type = ($MultithreadEventExecutorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultithreadEventExecutorGroup_ = $MultithreadEventExecutorGroup$Type;
}}
declare module "packages/io/netty/channel/$Channel" {
import {$ChannelPipeline, $ChannelPipeline$Type} from "packages/io/netty/channel/$ChannelPipeline"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$ByteBufAllocator, $ByteBufAllocator$Type} from "packages/io/netty/buffer/$ByteBufAllocator"
import {$ChannelId, $ChannelId$Type} from "packages/io/netty/channel/$ChannelId"
import {$AttributeKey, $AttributeKey$Type} from "packages/io/netty/util/$AttributeKey"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$Type} from "packages/io/netty/channel/$ChannelProgressivePromise"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$Type} from "packages/io/netty/channel/$ChannelOutboundInvoker"
import {$Attribute, $Attribute$Type} from "packages/io/netty/util/$Attribute"
import {$ChannelPromise, $ChannelPromise$Type} from "packages/io/netty/channel/$ChannelPromise"
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"
import {$AttributeMap, $AttributeMap$Type} from "packages/io/netty/util/$AttributeMap"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$ChannelConfig, $ChannelConfig$Type} from "packages/io/netty/channel/$ChannelConfig"
import {$Channel$Unsafe, $Channel$Unsafe$Type} from "packages/io/netty/channel/$Channel$Unsafe"
import {$EventLoop, $EventLoop$Type} from "packages/io/netty/channel/$EventLoop"
import {$ChannelMetadata, $ChannelMetadata$Type} from "packages/io/netty/channel/$ChannelMetadata"
import {$ChannelFuture, $ChannelFuture$Type} from "packages/io/netty/channel/$ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel extends $AttributeMap, $ChannelOutboundInvoker, $Comparable<($Channel)> {

 "parent"(): $Channel
 "flush"(): $Channel
 "isOpen"(): boolean
 "isRegistered"(): boolean
 "id"(): $ChannelId
 "unsafe"(): $Channel$Unsafe
 "read"(): $Channel
 "isActive"(): boolean
 "isWritable"(): boolean
 "config"(): $ChannelConfig
 "metadata"(): $ChannelMetadata
 "alloc"(): $ByteBufAllocator
 "eventLoop"(): $EventLoop
 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "pipeline"(): $ChannelPipeline
 "bytesBeforeUnwritable"(): long
 "bytesBeforeWritable"(): long
 "closeFuture"(): $ChannelFuture
 "attr"<T>(arg0: $AttributeKey$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$Type<(T)>): boolean
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type, arg1: $ChannelPromise$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type, arg1: $SocketAddress$Type, arg2: $ChannelPromise$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type, arg1: $SocketAddress$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$Type, arg1: $ChannelPromise$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "deregister"(arg0: $ChannelPromise$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
 "voidPromise"(): $ChannelPromise
 "newPromise"(): $ChannelPromise
 "newFailedFuture"(arg0: $Throwable$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "compareTo"(arg0: $Channel$Type): integer
}

export namespace $Channel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$Type = ($Channel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Channel_ = $Channel$Type;
}}
declare module "packages/io/netty/util/concurrent/$AbstractScheduledEventExecutor" {
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/io/netty/util/concurrent/$ScheduledFuture"
import {$AbstractEventExecutor, $AbstractEventExecutor$Type} from "packages/io/netty/util/concurrent/$AbstractEventExecutor"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractScheduledEventExecutor extends $AbstractEventExecutor {


public "scheduleWithFixedDelay"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
public "schedule"(arg0: $Runnable$Type, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$Type<(V)>, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractScheduledEventExecutor$Type = ($AbstractScheduledEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractScheduledEventExecutor_ = $AbstractScheduledEventExecutor$Type;
}}
declare module "packages/io/netty/channel/$ChannelMetadata" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelMetadata {

constructor(arg0: boolean)
constructor(arg0: boolean, arg1: integer)

public "defaultMaxMessagesPerRead"(): integer
public "hasDisconnect"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelMetadata$Type = ($ChannelMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelMetadata_ = $ChannelMetadata$Type;
}}
declare module "packages/io/netty/channel/$ChannelProgressiveFuture" {
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$ProgressiveFuture, $ProgressiveFuture$Type} from "packages/io/netty/util/concurrent/$ProgressiveFuture"
import {$Channel, $Channel$Type} from "packages/io/netty/channel/$Channel"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$ChannelFuture, $ChannelFuture$Type} from "packages/io/netty/channel/$ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressiveFuture extends $ChannelFuture, $ProgressiveFuture<(void)> {

 "sync"(): $ChannelProgressiveFuture
 "removeListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $ChannelProgressiveFuture
 "removeListener"(arg0: $GenericFutureListener$Type<(any)>): $ChannelProgressiveFuture
 "await"(): $ChannelProgressiveFuture
 "awaitUninterruptibly"(): $ChannelProgressiveFuture
 "addListener"(arg0: $GenericFutureListener$Type<(any)>): $ChannelProgressiveFuture
 "syncUninterruptibly"(): $ChannelProgressiveFuture
 "addListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $ChannelProgressiveFuture
 "isVoid"(): boolean
 "channel"(): $Channel
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "isSuccess"(): boolean
 "await"(arg0: long, arg1: $TimeUnit$Type): boolean
 "await"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$Type): boolean
 "getNow"(): void
 "isCancellable"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$Type): void
 "get"(): void
 "isDone"(): boolean
 "isCancelled"(): boolean
}

export namespace $ChannelProgressiveFuture {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelProgressiveFuture$Type = ($ChannelProgressiveFuture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelProgressiveFuture_ = $ChannelProgressiveFuture$Type;
}}
declare module "packages/io/netty/channel/$ChannelOutboundBuffer$MessageProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundBuffer$MessageProcessor {

 "processMessage"(arg0: any): boolean

(arg0: any): boolean
}

export namespace $ChannelOutboundBuffer$MessageProcessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundBuffer$MessageProcessor$Type = ($ChannelOutboundBuffer$MessageProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOutboundBuffer$MessageProcessor_ = $ChannelOutboundBuffer$MessageProcessor$Type;
}}
declare module "packages/io/netty/buffer/$ByteBufConvertible" {
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufConvertible {

 "asByteBuf"(): $ByteBuf

(): $ByteBuf
}

export namespace $ByteBufConvertible {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufConvertible$Type = ($ByteBufConvertible);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufConvertible_ = $ByteBufConvertible$Type;
}}
declare module "packages/io/netty/channel/$RecvByteBufAllocator" {
import {$RecvByteBufAllocator$Handle, $RecvByteBufAllocator$Handle$Type} from "packages/io/netty/channel/$RecvByteBufAllocator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator {

 "newHandle"(): $RecvByteBufAllocator$Handle

(): $RecvByteBufAllocator$Handle
}

export namespace $RecvByteBufAllocator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecvByteBufAllocator$Type = ($RecvByteBufAllocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecvByteBufAllocator_ = $RecvByteBufAllocator$Type;
}}
declare module "packages/io/netty/channel/$MessageSizeEstimator" {
import {$MessageSizeEstimator$Handle, $MessageSizeEstimator$Handle$Type} from "packages/io/netty/channel/$MessageSizeEstimator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator {

 "newHandle"(): $MessageSizeEstimator$Handle

(): $MessageSizeEstimator$Handle
}

export namespace $MessageSizeEstimator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSizeEstimator$Type = ($MessageSizeEstimator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageSizeEstimator_ = $MessageSizeEstimator$Type;
}}
declare module "packages/io/netty/util/$Attribute" {
import {$AttributeKey, $AttributeKey$Type} from "packages/io/netty/util/$AttributeKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Attribute<T> {

/**
 * 
 * @deprecated
 */
 "remove"(): void
 "get"(): T
 "set"(arg0: T): void
 "key"(): $AttributeKey<(T)>
 "compareAndSet"(arg0: T, arg1: T): boolean
 "getAndSet"(arg0: T): T
 "setIfAbsent"(arg0: T): T
/**
 * 
 * @deprecated
 */
 "getAndRemove"(): T
}

export namespace $Attribute {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Attribute$Type<T> = ($Attribute<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Attribute_<T> = $Attribute$Type<(T)>;
}}
declare module "packages/io/netty/channel/$RecvByteBufAllocator$Handle" {
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$ByteBufAllocator, $ByteBufAllocator$Type} from "packages/io/netty/buffer/$ByteBufAllocator"
import {$ChannelConfig, $ChannelConfig$Type} from "packages/io/netty/channel/$ChannelConfig"

/**
 * 
 * @deprecated
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator$Handle {

 "reset"(arg0: $ChannelConfig$Type): void
 "allocate"(arg0: $ByteBufAllocator$Type): $ByteBuf
 "guess"(): integer
 "continueReading"(): boolean
 "readComplete"(): void
 "attemptedBytesRead"(): integer
 "attemptedBytesRead"(arg0: integer): void
 "lastBytesRead"(): integer
 "lastBytesRead"(arg0: integer): void
 "incMessagesRead"(arg0: integer): void
}

export namespace $RecvByteBufAllocator$Handle {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecvByteBufAllocator$Handle$Type = ($RecvByteBufAllocator$Handle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecvByteBufAllocator$Handle_ = $RecvByteBufAllocator$Handle$Type;
}}
declare module "packages/io/netty/util/concurrent/$GenericFutureListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GenericFutureListener<F extends $Future<(any)>> extends $EventListener {

 "operationComplete"(arg0: F): void

(arg0: F): void
}

export namespace $GenericFutureListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericFutureListener$Type<F> = ($GenericFutureListener<(F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericFutureListener_<F> = $GenericFutureListener$Type<(F)>;
}}
declare module "packages/io/netty/channel/epoll/$EpollEventLoopGroup" {
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/io/netty/util/concurrent/$ScheduledFuture"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$MultithreadEventLoopGroup, $MultithreadEventLoopGroup$Type} from "packages/io/netty/channel/$MultithreadEventLoopGroup"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$EventExecutorChooserFactory, $EventExecutorChooserFactory$Type} from "packages/io/netty/util/concurrent/$EventExecutorChooserFactory"
import {$SelectStrategyFactory, $SelectStrategyFactory$Type} from "packages/io/netty/channel/$SelectStrategyFactory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RejectedExecutionHandler, $RejectedExecutionHandler$Type} from "packages/io/netty/util/concurrent/$RejectedExecutionHandler"
import {$ThreadFactory, $ThreadFactory$Type} from "packages/java/util/concurrent/$ThreadFactory"
import {$EventLoopTaskQueueFactory, $EventLoopTaskQueueFactory$Type} from "packages/io/netty/channel/$EventLoopTaskQueueFactory"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $EpollEventLoopGroup extends $MultithreadEventLoopGroup {

constructor(arg0: integer, arg1: $Executor$Type, arg2: $EventExecutorChooserFactory$Type, arg3: $SelectStrategyFactory$Type)
constructor(arg0: integer, arg1: $Executor$Type, arg2: $SelectStrategyFactory$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: $ThreadFactory$Type, arg2: integer, arg3: $SelectStrategyFactory$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: $ThreadFactory$Type, arg2: integer)
constructor(arg0: integer, arg1: $Executor$Type, arg2: $EventExecutorChooserFactory$Type, arg3: $SelectStrategyFactory$Type, arg4: $RejectedExecutionHandler$Type)
constructor(arg0: integer, arg1: $Executor$Type, arg2: $EventExecutorChooserFactory$Type, arg3: $SelectStrategyFactory$Type, arg4: $RejectedExecutionHandler$Type, arg5: $EventLoopTaskQueueFactory$Type)
constructor(arg0: integer, arg1: $Executor$Type, arg2: $EventExecutorChooserFactory$Type, arg3: $SelectStrategyFactory$Type, arg4: $RejectedExecutionHandler$Type, arg5: $EventLoopTaskQueueFactory$Type, arg6: $EventLoopTaskQueueFactory$Type)
constructor(arg0: integer, arg1: $SelectStrategyFactory$Type)
constructor(arg0: $ThreadFactory$Type)
constructor(arg0: integer)
constructor()
constructor(arg0: integer, arg1: $ThreadFactory$Type, arg2: $SelectStrategyFactory$Type)
constructor(arg0: integer, arg1: $Executor$Type)
constructor(arg0: integer, arg1: $ThreadFactory$Type)

public "setIoRatio"(arg0: integer): void
public "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
public "submit"<T>(arg0: $Callable$Type<(T)>): $Future<(T)>
public "submit"(arg0: $Runnable$Type): $Future<(any)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleWithFixedDelay"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$Type<(V)>, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$Type, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
set "ioRatio"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpollEventLoopGroup$Type = ($EpollEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpollEventLoopGroup_ = $EpollEventLoopGroup$Type;
}}
declare module "packages/io/netty/channel/$MessageSizeEstimator$Handle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator$Handle {

 "size"(arg0: any): integer

(arg0: any): integer
}

export namespace $MessageSizeEstimator$Handle {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSizeEstimator$Handle$Type = ($MessageSizeEstimator$Handle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageSizeEstimator$Handle_ = $MessageSizeEstimator$Handle$Type;
}}
declare module "packages/io/netty/channel/$ChannelOutboundInvoker" {
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$Type} from "packages/io/netty/channel/$ChannelProgressivePromise"
import {$ChannelFuture, $ChannelFuture$Type} from "packages/io/netty/channel/$ChannelFuture"
import {$ChannelPromise, $ChannelPromise$Type} from "packages/io/netty/channel/$ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundInvoker {

 "flush"(): $ChannelOutboundInvoker
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$Type): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$Type, arg1: $ChannelPromise$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type, arg1: $SocketAddress$Type, arg2: $ChannelPromise$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type, arg1: $SocketAddress$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$Type, arg1: $ChannelPromise$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "deregister"(arg0: $ChannelPromise$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
 "voidPromise"(): $ChannelPromise
 "newPromise"(): $ChannelPromise
 "newFailedFuture"(arg0: $Throwable$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
}

export namespace $ChannelOutboundInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundInvoker$Type = ($ChannelOutboundInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOutboundInvoker_ = $ChannelOutboundInvoker$Type;
}}
declare module "packages/io/netty/util/concurrent/$EventExecutorChooserFactory" {
import {$EventExecutor, $EventExecutor$Type} from "packages/io/netty/util/concurrent/$EventExecutor"
import {$EventExecutorChooserFactory$EventExecutorChooser, $EventExecutorChooserFactory$EventExecutorChooser$Type} from "packages/io/netty/util/concurrent/$EventExecutorChooserFactory$EventExecutorChooser"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory {

 "newChooser"(arg0: ($EventExecutor$Type)[]): $EventExecutorChooserFactory$EventExecutorChooser

(arg0: ($EventExecutor$Type)[]): $EventExecutorChooserFactory$EventExecutorChooser
}

export namespace $EventExecutorChooserFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorChooserFactory$Type = ($EventExecutorChooserFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutorChooserFactory_ = $EventExecutorChooserFactory$Type;
}}
declare module "packages/io/netty/channel/$EventLoopGroup" {
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/io/netty/util/concurrent/$ScheduledFuture"
import {$Channel, $Channel$Type} from "packages/io/netty/channel/$Channel"
import {$EventExecutorGroup, $EventExecutorGroup$Type} from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ChannelPromise, $ChannelPromise$Type} from "packages/io/netty/channel/$ChannelPromise"
import {$EventExecutor, $EventExecutor$Type} from "packages/io/netty/util/concurrent/$EventExecutor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Future as $Future$0, $Future$Type as $Future$0$Type} from "packages/java/util/concurrent/$Future"
import {$EventLoop, $EventLoop$Type} from "packages/io/netty/channel/$EventLoop"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ChannelFuture, $ChannelFuture$Type} from "packages/io/netty/channel/$ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopGroup extends $EventExecutorGroup {

 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$Type, arg1: $ChannelPromise$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$Type): $ChannelFuture
 "register"(arg0: $Channel$Type): $ChannelFuture
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
 "submit"<T>(arg0: $Callable$Type<(T)>): $Future<(T)>
 "submit"(arg0: $Runnable$Type): $Future<(any)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleWithFixedDelay"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$Type<(V)>, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$Type, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(any)>
 "terminationFuture"(): $Future<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$Type): $Future<(any)>
 "shutdownGracefully"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): T
 "invokeAny"<T>(arg0: $Collection$Type<(any)>): T
 "invokeAll"<T>(arg0: $Collection$Type<(any)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): $List<($Future$0<(T)>)>
 "isTerminated"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$Type): boolean
 "execute"(arg0: $Runnable$Type): void
}

export namespace $EventLoopGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoopGroup$Type = ($EventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventLoopGroup_ = $EventLoopGroup$Type;
}}
declare module "packages/io/netty/channel/$ChannelHandler" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$Type} from "packages/io/netty/channel/$ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandler {

 "handlerAdded"(arg0: $ChannelHandlerContext$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$Type): void
/**
 * 
 * @deprecated
 */
 "exceptionCaught"(arg0: $ChannelHandlerContext$Type, arg1: $Throwable$Type): void
}

export namespace $ChannelHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandler$Type = ($ChannelHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandler_ = $ChannelHandler$Type;
}}
declare module "packages/io/netty/util/concurrent/$Promise" {
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Promise<V> extends $Future<(V)> {

 "sync"(): $Promise<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $Promise<(V)>
 "removeListener"(arg0: $GenericFutureListener$Type<(any)>): $Promise<(V)>
 "await"(): $Promise<(V)>
 "awaitUninterruptibly"(): $Promise<(V)>
 "addListener"(arg0: $GenericFutureListener$Type<(any)>): $Promise<(V)>
 "syncUninterruptibly"(): $Promise<(V)>
 "setFailure"(arg0: $Throwable$Type): $Promise<(V)>
 "trySuccess"(arg0: V): boolean
 "setUncancellable"(): boolean
 "tryFailure"(arg0: $Throwable$Type): boolean
 "addListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $Promise<(V)>
 "setSuccess"(arg0: V): $Promise<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "isSuccess"(): boolean
 "await"(arg0: long, arg1: $TimeUnit$Type): boolean
 "await"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$Type): boolean
 "getNow"(): V
 "isCancellable"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$Type): V
 "get"(): V
 "isDone"(): boolean
 "isCancelled"(): boolean
}

export namespace $Promise {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Promise$Type<V> = ($Promise<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Promise_<V> = $Promise$Type<(V)>;
}}
declare module "packages/io/netty/channel/$EventLoop" {
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/io/netty/util/concurrent/$ScheduledFuture"
import {$OrderedEventExecutor, $OrderedEventExecutor$Type} from "packages/io/netty/util/concurrent/$OrderedEventExecutor"
import {$Channel, $Channel$Type} from "packages/io/netty/channel/$Channel"
import {$EventLoopGroup, $EventLoopGroup$Type} from "packages/io/netty/channel/$EventLoopGroup"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$Promise, $Promise$Type} from "packages/io/netty/util/concurrent/$Promise"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ChannelPromise, $ChannelPromise$Type} from "packages/io/netty/channel/$ChannelPromise"
import {$EventExecutor, $EventExecutor$Type} from "packages/io/netty/util/concurrent/$EventExecutor"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Future as $Future$0, $Future$Type as $Future$0$Type} from "packages/java/util/concurrent/$Future"
import {$ProgressivePromise, $ProgressivePromise$Type} from "packages/io/netty/util/concurrent/$ProgressivePromise"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ChannelFuture, $ChannelFuture$Type} from "packages/io/netty/channel/$ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoop extends $OrderedEventExecutor, $EventLoopGroup {

 "parent"(): $EventLoopGroup
 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$Type, arg1: $ChannelPromise$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$Type): $ChannelFuture
 "register"(arg0: $Channel$Type): $ChannelFuture
 "inEventLoop"(arg0: $Thread$Type): boolean
 "inEventLoop"(): boolean
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newPromise"<V>(): $Promise<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$Type): $Future<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future<(V)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
 "submit"<T>(arg0: $Callable$Type<(T)>): $Future<(T)>
 "submit"(arg0: $Runnable$Type): $Future<(any)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleWithFixedDelay"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$Type<(V)>, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$Type, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(any)>
 "terminationFuture"(): $Future<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$Type): $Future<(any)>
 "shutdownGracefully"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): T
 "invokeAny"<T>(arg0: $Collection$Type<(any)>): T
 "invokeAll"<T>(arg0: $Collection$Type<(any)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): $List<($Future$0<(T)>)>
 "isTerminated"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$Type): boolean
 "execute"(arg0: $Runnable$Type): void
}

export namespace $EventLoop {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoop$Type = ($EventLoop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventLoop_ = $EventLoop$Type;
}}
declare module "packages/io/netty/buffer/$ByteBuf" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$ByteBufAllocator, $ByteBufAllocator$Type} from "packages/io/netty/buffer/$ByteBufAllocator"
import {$ByteBufConvertible, $ByteBufConvertible$Type} from "packages/io/netty/buffer/$ByteBufConvertible"
import {$ByteOrder, $ByteOrder$Type} from "packages/java/nio/$ByteOrder"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$ByteProcessor, $ByteProcessor$Type} from "packages/io/netty/util/$ByteProcessor"
import {$ScatteringByteChannel, $ScatteringByteChannel$Type} from "packages/java/nio/channels/$ScatteringByteChannel"
import {$ReferenceCounted, $ReferenceCounted$Type} from "packages/io/netty/util/$ReferenceCounted"
import {$Charset, $Charset$Type} from "packages/java/nio/charset/$Charset"
import {$GatheringByteChannel, $GatheringByteChannel$Type} from "packages/java/nio/channels/$GatheringByteChannel"
import {$FileChannel, $FileChannel$Type} from "packages/java/nio/channels/$FileChannel"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ByteBuf implements $ReferenceCounted, $Comparable<($ByteBuf)>, $ByteBufConvertible {

constructor()

public "equals"(arg0: any): boolean
public "toString"(arg0: integer, arg1: integer, arg2: $Charset$Type): string
public "toString"(arg0: $Charset$Type): string
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ByteBuf$Type): integer
public "indexOf"(arg0: integer, arg1: integer, arg2: byte): integer
public "getBoolean"(arg0: integer): boolean
public "getByte"(arg0: integer): byte
public "getShort"(arg0: integer): short
public "getChar"(arg0: integer): character
public "getInt"(arg0: integer): integer
public "getLong"(arg0: integer): long
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: $GatheringByteChannel$Type, arg2: integer): integer
public "getBytes"(arg0: integer, arg1: $OutputStream$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $FileChannel$Type, arg2: long, arg3: integer): integer
public "getBytes"(arg0: integer, arg1: $ByteBuf$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$Type, arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuffer$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (byte)[]
public "arrayOffset"(): integer
public "writeInt"(arg0: integer): $ByteBuf
public "readInt"(): integer
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $ByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(): $ByteBuf
public "copy"(arg0: integer, arg1: integer): $ByteBuf
public "unwrap"(): $ByteBuf
public "capacity"(): integer
public "capacity"(arg0: integer): $ByteBuf
public "isReadOnly"(): boolean
public "slice"(arg0: integer, arg1: integer): $ByteBuf
public "slice"(): $ByteBuf
public "duplicate"(): $ByteBuf
/**
 * 
 * @deprecated
 */
public "order"(arg0: $ByteOrder$Type): $ByteBuf
/**
 * 
 * @deprecated
 */
public "order"(): $ByteOrder
public "readBytes"(arg0: $ByteBuffer$Type): $ByteBuf
public "readBytes"(arg0: $OutputStream$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $GatheringByteChannel$Type, arg1: integer): integer
public "readBytes"(arg0: $FileChannel$Type, arg1: long, arg2: integer): integer
public "readBytes"(arg0: $ByteBuf$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$Type): $ByteBuf
public "readBytes"(arg0: (byte)[]): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: integer): $ByteBuf
public "writeBytes"(arg0: $ScatteringByteChannel$Type, arg1: integer): integer
public "writeBytes"(arg0: $InputStream$Type, arg1: integer): integer
public "writeBytes"(arg0: $FileChannel$Type, arg1: long, arg2: integer): integer
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuffer$Type): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$Type): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: (byte)[]): $ByteBuf
public "writeChar"(arg0: integer): $ByteBuf
public "readChar"(): character
public "writeFloat"(arg0: float): $ByteBuf
public "readFloat"(): float
public "skipBytes"(arg0: integer): $ByteBuf
public "readBoolean"(): boolean
public "readByte"(): byte
public "readUnsignedByte"(): short
public "readShort"(): short
public "readUnsignedShort"(): integer
public "readLong"(): long
public "readDouble"(): double
public "writeBoolean"(arg0: boolean): $ByteBuf
public "writeByte"(arg0: integer): $ByteBuf
public "writeShort"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $ByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "isReadable"(): boolean
public "isReadable"(arg0: integer): boolean
public "isWritable"(arg0: integer): boolean
public "isWritable"(): boolean
public "setIndex"(arg0: integer, arg1: integer): $ByteBuf
public "alloc"(): $ByteBufAllocator
public "getCharSequence"(arg0: integer, arg1: integer, arg2: $Charset$Type): charseq
public "readableBytes"(): integer
public "discardReadBytes"(): $ByteBuf
public "maxWritableBytes"(): integer
public "resetReaderIndex"(): $ByteBuf
public "writerIndex"(): integer
public "writerIndex"(arg0: integer): $ByteBuf
public "getUnsignedByte"(arg0: integer): short
public "getShortLE"(arg0: integer): short
public "readerIndex"(): integer
public "readerIndex"(arg0: integer): $ByteBuf
public "ensureWritable"(arg0: integer): $ByteBuf
public "ensureWritable"(arg0: integer, arg1: boolean): integer
public "markReaderIndex"(): $ByteBuf
public "markWriterIndex"(): $ByteBuf
public "maxCapacity"(): integer
public "asReadOnly"(): $ByteBuf
public "writableBytes"(): integer
public "resetWriterIndex"(): $ByteBuf
public "setCharSequence"(arg0: integer, arg1: charseq, arg2: $Charset$Type): integer
public "getUnsignedShortLE"(arg0: integer): integer
public "setLongLE"(arg0: integer, arg1: long): $ByteBuf
public "getUnsignedIntLE"(arg0: integer): long
public "getMedium"(arg0: integer): integer
public "getLongLE"(arg0: integer): long
public "setIntLE"(arg0: integer, arg1: integer): $ByteBuf
public "setFloatLE"(arg0: integer, arg1: float): $ByteBuf
public "setDoubleLE"(arg0: integer, arg1: double): $ByteBuf
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "readShortLE"(): short
public "getUnsignedInt"(arg0: integer): long
public "getMediumLE"(arg0: integer): integer
public "getUnsignedShort"(arg0: integer): integer
public "getFloatLE"(arg0: integer): float
public "getUnsignedMedium"(arg0: integer): integer
public "setMedium"(arg0: integer, arg1: integer): $ByteBuf
public "readMedium"(): integer
public "getIntLE"(arg0: integer): integer
public "setMediumLE"(arg0: integer, arg1: integer): $ByteBuf
public "getDoubleLE"(arg0: integer): double
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$Type, arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $FileChannel$Type, arg2: long, arg3: integer): integer
public "setBytes"(arg0: integer, arg1: $ByteBuf$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $InputStream$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $ByteBuffer$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ScatteringByteChannel$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "setShortLE"(arg0: integer, arg1: integer): $ByteBuf
public "writeDoubleLE"(arg0: double): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "writeCharSequence"(arg0: charseq, arg1: $Charset$Type): integer
public "bytesBefore"(arg0: integer, arg1: byte): integer
public "bytesBefore"(arg0: integer, arg1: integer, arg2: byte): integer
public "bytesBefore"(arg0: byte): integer
public "retainedSlice"(arg0: integer, arg1: integer): $ByteBuf
public "retainedSlice"(): $ByteBuf
public "writeIntLE"(arg0: integer): $ByteBuf
public "retainedDuplicate"(): $ByteBuf
public "readUnsignedIntLE"(): long
public "writeMediumLE"(arg0: integer): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "readUnsignedMedium"(): integer
public "writeFloatLE"(arg0: float): $ByteBuf
public "nioBufferCount"(): integer
public "readUnsignedInt"(): long
public "readDoubleLE"(): double
public "readSlice"(arg0: integer): $ByteBuf
public "readCharSequence"(arg0: integer, arg1: $Charset$Type): charseq
public "writeLongLE"(arg0: long): $ByteBuf
public "readLongLE"(): long
public "readRetainedSlice"(arg0: integer): $ByteBuf
public "readMediumLE"(): integer
public "readIntLE"(): integer
public "writeShortLE"(arg0: integer): $ByteBuf
public "readFloatLE"(): float
public "internalNioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "memoryAddress"(): long
public "retain"(arg0: integer): $ByteBuf
public "asByteBuf"(): $ByteBuf
public "hasMemoryAddress"(): boolean
public "nioBuffers"(arg0: integer, arg1: integer): ($ByteBuffer)[]
public "nioBuffers"(): ($ByteBuffer)[]
public "nioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "nioBuffer"(): $ByteBuffer
public "touch"(): $ByteBuf
public "touch"(arg0: any): $ByteBuf
public "isContiguous"(): boolean
public "getUnsignedMediumLE"(arg0: integer): integer
public "maxFastWritableBytes"(): integer
public "discardSomeReadBytes"(): $ByteBuf
public "readUnsignedShortLE"(): integer
public "readUnsignedMediumLE"(): integer
public "forEachByteDesc"(arg0: integer, arg1: integer, arg2: $ByteProcessor$Type): integer
public "forEachByteDesc"(arg0: $ByteProcessor$Type): integer
public "forEachByte"(arg0: integer, arg1: integer, arg2: $ByteProcessor$Type): integer
public "forEachByte"(arg0: $ByteProcessor$Type): integer
public "release"(arg0: integer): boolean
public "release"(): boolean
public "refCnt"(): integer
get "direct"(): boolean
get "readOnly"(): boolean
get "readable"(): boolean
get "writable"(): boolean
get "contiguous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBuf$Type = ($ByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBuf_ = $ByteBuf$Type;
}}
declare module "packages/io/netty/util/concurrent/$RejectedExecutionHandler" {
import {$SingleThreadEventExecutor, $SingleThreadEventExecutor$Type} from "packages/io/netty/util/concurrent/$SingleThreadEventExecutor"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RejectedExecutionHandler {

 "rejected"(arg0: $Runnable$Type, arg1: $SingleThreadEventExecutor$Type): void

(arg0: $Runnable$Type, arg1: $SingleThreadEventExecutor$Type): void
}

export namespace $RejectedExecutionHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RejectedExecutionHandler$Type = ($RejectedExecutionHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RejectedExecutionHandler_ = $RejectedExecutionHandler$Type;
}}
declare module "packages/io/netty/channel/$ChannelOption" {
import {$RecvByteBufAllocator, $RecvByteBufAllocator$Type} from "packages/io/netty/channel/$RecvByteBufAllocator"
import {$ByteBufAllocator, $ByteBufAllocator$Type} from "packages/io/netty/buffer/$ByteBufAllocator"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$MessageSizeEstimator, $MessageSizeEstimator$Type} from "packages/io/netty/channel/$MessageSizeEstimator"
import {$NetworkInterface, $NetworkInterface$Type} from "packages/java/net/$NetworkInterface"
import {$InetAddress, $InetAddress$Type} from "packages/java/net/$InetAddress"
import {$AbstractConstant, $AbstractConstant$Type} from "packages/io/netty/util/$AbstractConstant"
import {$WriteBufferWaterMark, $WriteBufferWaterMark$Type} from "packages/io/netty/channel/$WriteBufferWaterMark"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOption<T> extends $AbstractConstant<($ChannelOption<(T)>)> {
static readonly "ALLOCATOR": $ChannelOption<($ByteBufAllocator)>
static readonly "RCVBUF_ALLOCATOR": $ChannelOption<($RecvByteBufAllocator)>
static readonly "MESSAGE_SIZE_ESTIMATOR": $ChannelOption<($MessageSizeEstimator)>
static readonly "CONNECT_TIMEOUT_MILLIS": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "MAX_MESSAGES_PER_READ": $ChannelOption<(integer)>
static readonly "MAX_MESSAGES_PER_WRITE": $ChannelOption<(integer)>
static readonly "WRITE_SPIN_COUNT": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "WRITE_BUFFER_HIGH_WATER_MARK": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "WRITE_BUFFER_LOW_WATER_MARK": $ChannelOption<(integer)>
static readonly "WRITE_BUFFER_WATER_MARK": $ChannelOption<($WriteBufferWaterMark)>
static readonly "ALLOW_HALF_CLOSURE": $ChannelOption<(boolean)>
static readonly "AUTO_READ": $ChannelOption<(boolean)>
static readonly "AUTO_CLOSE": $ChannelOption<(boolean)>
static readonly "SO_BROADCAST": $ChannelOption<(boolean)>
static readonly "SO_KEEPALIVE": $ChannelOption<(boolean)>
static readonly "SO_SNDBUF": $ChannelOption<(integer)>
static readonly "SO_RCVBUF": $ChannelOption<(integer)>
static readonly "SO_REUSEADDR": $ChannelOption<(boolean)>
static readonly "SO_LINGER": $ChannelOption<(integer)>
static readonly "SO_BACKLOG": $ChannelOption<(integer)>
static readonly "SO_TIMEOUT": $ChannelOption<(integer)>
static readonly "IP_TOS": $ChannelOption<(integer)>
static readonly "IP_MULTICAST_ADDR": $ChannelOption<($InetAddress)>
static readonly "IP_MULTICAST_IF": $ChannelOption<($NetworkInterface)>
static readonly "IP_MULTICAST_TTL": $ChannelOption<(integer)>
static readonly "IP_MULTICAST_LOOP_DISABLED": $ChannelOption<(boolean)>
static readonly "TCP_NODELAY": $ChannelOption<(boolean)>
static readonly "TCP_FASTOPEN_CONNECT": $ChannelOption<(boolean)>
static readonly "TCP_FASTOPEN": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION": $ChannelOption<(boolean)>
static readonly "SINGLE_EVENTEXECUTOR_PER_GROUP": $ChannelOption<(boolean)>


public static "valueOf"<T>(arg0: string): $ChannelOption<(T)>
public static "valueOf"<T>(arg0: $Class$Type<(any)>, arg1: string): $ChannelOption<(T)>
/**
 * 
 * @deprecated
 */
public static "newInstance"<T>(arg0: string): $ChannelOption<(T)>
public "validate"(arg0: T): void
public static "exists"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOption$Type<T> = ($ChannelOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOption_<T> = $ChannelOption$Type<(T)>;
}}
declare module "packages/io/netty/channel/$ChannelPipeline" {
import {$ChannelHandlerContext, $ChannelHandlerContext$Type} from "packages/io/netty/channel/$ChannelHandlerContext"
import {$Channel, $Channel$Type} from "packages/io/netty/channel/$Channel"
import {$EventExecutorGroup, $EventExecutorGroup$Type} from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$Type} from "packages/io/netty/channel/$ChannelOutboundInvoker"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$Type} from "packages/io/netty/channel/$ChannelProgressivePromise"
import {$ChannelPromise, $ChannelPromise$Type} from "packages/io/netty/channel/$ChannelPromise"
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ChannelHandler, $ChannelHandler$Type} from "packages/io/netty/channel/$ChannelHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChannelInboundInvoker, $ChannelInboundInvoker$Type} from "packages/io/netty/channel/$ChannelInboundInvoker"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ChannelFuture, $ChannelFuture$Type} from "packages/io/netty/channel/$ChannelFuture"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPipeline extends $ChannelInboundInvoker, $ChannelOutboundInvoker, $Iterable<($Map$Entry<(string), ($ChannelHandler)>)> {

 "remove"<T extends $ChannelHandler>(arg0: $Class$Type<(T)>): T
 "remove"(arg0: string): $ChannelHandler
 "remove"(arg0: $ChannelHandler$Type): $ChannelPipeline
 "get"<T extends $ChannelHandler>(arg0: $Class$Type<(T)>): T
 "get"(arg0: string): $ChannelHandler
 "context"(arg0: $ChannelHandler$Type): $ChannelHandlerContext
 "context"(arg0: string): $ChannelHandlerContext
 "context"(arg0: $Class$Type<(any)>): $ChannelHandlerContext
 "flush"(): $ChannelPipeline
 "replace"(arg0: string, arg1: string, arg2: $ChannelHandler$Type): $ChannelHandler
 "replace"<T extends $ChannelHandler>(arg0: $Class$Type<(T)>, arg1: string, arg2: $ChannelHandler$Type): T
 "replace"(arg0: $ChannelHandler$Type, arg1: string, arg2: $ChannelHandler$Type): $ChannelPipeline
 "last"(): $ChannelHandler
 "toMap"(): $Map<(string), ($ChannelHandler)>
 "first"(): $ChannelHandler
 "names"(): $List<(string)>
 "channel"(): $Channel
 "addFirst"(arg0: string, arg1: $ChannelHandler$Type): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$Type, arg1: string, arg2: $ChannelHandler$Type): $ChannelPipeline
 "addFirst"(...arg0: ($ChannelHandler$Type)[]): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$Type, ...arg1: ($ChannelHandler$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$Type, arg1: string, arg2: $ChannelHandler$Type): $ChannelPipeline
 "addLast"(arg0: string, arg1: $ChannelHandler$Type): $ChannelPipeline
 "addLast"(...arg0: ($ChannelHandler$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$Type, ...arg1: ($ChannelHandler$Type)[]): $ChannelPipeline
 "removeFirst"(): $ChannelHandler
 "removeLast"(): $ChannelHandler
 "fireChannelRead"(arg0: any): $ChannelPipeline
 "fireChannelActive"(): $ChannelPipeline
 "fireUserEventTriggered"(arg0: any): $ChannelPipeline
 "fireChannelInactive"(): $ChannelPipeline
 "fireChannelWritabilityChanged"(): $ChannelPipeline
 "fireChannelUnregistered"(): $ChannelPipeline
 "fireExceptionCaught"(arg0: $Throwable$Type): $ChannelPipeline
 "fireChannelRegistered"(): $ChannelPipeline
 "fireChannelReadComplete"(): $ChannelPipeline
 "addAfter"(arg0: string, arg1: string, arg2: $ChannelHandler$Type): $ChannelPipeline
 "addAfter"(arg0: $EventExecutorGroup$Type, arg1: string, arg2: string, arg3: $ChannelHandler$Type): $ChannelPipeline
 "addBefore"(arg0: string, arg1: string, arg2: $ChannelHandler$Type): $ChannelPipeline
 "addBefore"(arg0: $EventExecutorGroup$Type, arg1: string, arg2: string, arg3: $ChannelHandler$Type): $ChannelPipeline
 "firstContext"(): $ChannelHandlerContext
 "lastContext"(): $ChannelHandlerContext
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$Type): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$Type, arg1: $ChannelPromise$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type, arg1: $SocketAddress$Type, arg2: $ChannelPromise$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type, arg1: $SocketAddress$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$Type, arg1: $ChannelPromise$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "deregister"(arg0: $ChannelPromise$Type): $ChannelFuture
 "deregister"(): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
 "voidPromise"(): $ChannelPromise
 "newPromise"(): $ChannelPromise
 "newFailedFuture"(arg0: $Throwable$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "iterator"(): $Iterator<($Map$Entry<(string), ($ChannelHandler)>)>
 "spliterator"(): $Spliterator<($Map$Entry<(string), ($ChannelHandler)>)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $ChannelPipeline {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelPipeline$Type = ($ChannelPipeline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelPipeline_ = $ChannelPipeline$Type;
}}
declare module "packages/io/netty/util/concurrent/$ProgressiveFuture" {
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressiveFuture<V> extends $Future<(V)> {

 "sync"(): $ProgressiveFuture<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $ProgressiveFuture<(V)>
 "removeListener"(arg0: $GenericFutureListener$Type<(any)>): $ProgressiveFuture<(V)>
 "await"(): $ProgressiveFuture<(V)>
 "awaitUninterruptibly"(): $ProgressiveFuture<(V)>
 "addListener"(arg0: $GenericFutureListener$Type<(any)>): $ProgressiveFuture<(V)>
 "syncUninterruptibly"(): $ProgressiveFuture<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $ProgressiveFuture<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "isSuccess"(): boolean
 "await"(arg0: long, arg1: $TimeUnit$Type): boolean
 "await"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$Type): boolean
 "getNow"(): V
 "isCancellable"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$Type): V
 "get"(): V
 "isDone"(): boolean
 "isCancelled"(): boolean
}

export namespace $ProgressiveFuture {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressiveFuture$Type<V> = ($ProgressiveFuture<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressiveFuture_<V> = $ProgressiveFuture$Type<(V)>;
}}
declare module "packages/io/netty/channel/$ChannelInboundHandlerAdapter" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$Type} from "packages/io/netty/channel/$ChannelHandlerContext"
import {$ChannelInboundHandler, $ChannelInboundHandler$Type} from "packages/io/netty/channel/$ChannelInboundHandler"
import {$ChannelHandlerAdapter, $ChannelHandlerAdapter$Type} from "packages/io/netty/channel/$ChannelHandlerAdapter"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelInboundHandlerAdapter extends $ChannelHandlerAdapter implements $ChannelInboundHandler {

constructor()

public "userEventTriggered"(arg0: $ChannelHandlerContext$Type, arg1: any): void
public "channelRead"(arg0: $ChannelHandlerContext$Type, arg1: any): void
public "channelRegistered"(arg0: $ChannelHandlerContext$Type): void
public "channelWritabilityChanged"(arg0: $ChannelHandlerContext$Type): void
public "channelReadComplete"(arg0: $ChannelHandlerContext$Type): void
public "channelUnregistered"(arg0: $ChannelHandlerContext$Type): void
public "channelActive"(arg0: $ChannelHandlerContext$Type): void
public "channelInactive"(arg0: $ChannelHandlerContext$Type): void
public "exceptionCaught"(arg0: $ChannelHandlerContext$Type, arg1: $Throwable$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundHandlerAdapter$Type = ($ChannelInboundHandlerAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInboundHandlerAdapter_ = $ChannelInboundHandlerAdapter$Type;
}}
declare module "packages/io/netty/channel/$ChannelInboundInvoker" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundInvoker {

 "fireChannelRead"(arg0: any): $ChannelInboundInvoker
 "fireChannelActive"(): $ChannelInboundInvoker
 "fireUserEventTriggered"(arg0: any): $ChannelInboundInvoker
 "fireChannelInactive"(): $ChannelInboundInvoker
 "fireChannelWritabilityChanged"(): $ChannelInboundInvoker
 "fireChannelUnregistered"(): $ChannelInboundInvoker
 "fireExceptionCaught"(arg0: $Throwable$Type): $ChannelInboundInvoker
 "fireChannelRegistered"(): $ChannelInboundInvoker
 "fireChannelReadComplete"(): $ChannelInboundInvoker
}

export namespace $ChannelInboundInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundInvoker$Type = ($ChannelInboundInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInboundInvoker_ = $ChannelInboundInvoker$Type;
}}
declare module "packages/io/netty/channel/$ChannelHandlerAdapter" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$Type} from "packages/io/netty/channel/$ChannelHandlerContext"
import {$ChannelHandler, $ChannelHandler$Type} from "packages/io/netty/channel/$ChannelHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelHandlerAdapter implements $ChannelHandler {

constructor()

public "isSharable"(): boolean
public "handlerAdded"(arg0: $ChannelHandlerContext$Type): void
public "handlerRemoved"(arg0: $ChannelHandlerContext$Type): void
/**
 * 
 * @deprecated
 */
public "exceptionCaught"(arg0: $ChannelHandlerContext$Type, arg1: $Throwable$Type): void
get "sharable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandlerAdapter$Type = ($ChannelHandlerAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandlerAdapter_ = $ChannelHandlerAdapter$Type;
}}
declare module "packages/io/netty/util/concurrent/$EventExecutor" {
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/io/netty/util/concurrent/$ScheduledFuture"
import {$EventExecutorGroup, $EventExecutorGroup$Type} from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$Promise, $Promise$Type} from "packages/io/netty/util/concurrent/$Promise"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Future as $Future$0, $Future$Type as $Future$0$Type} from "packages/java/util/concurrent/$Future"
import {$ProgressivePromise, $ProgressivePromise$Type} from "packages/io/netty/util/concurrent/$ProgressivePromise"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutor extends $EventExecutorGroup {

 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "inEventLoop"(arg0: $Thread$Type): boolean
 "inEventLoop"(): boolean
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newPromise"<V>(): $Promise<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$Type): $Future<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future<(V)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
 "submit"<T>(arg0: $Callable$Type<(T)>): $Future<(T)>
 "submit"(arg0: $Runnable$Type): $Future<(any)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleWithFixedDelay"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$Type<(V)>, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$Type, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(any)>
 "terminationFuture"(): $Future<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$Type): $Future<(any)>
 "shutdownGracefully"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): T
 "invokeAny"<T>(arg0: $Collection$Type<(any)>): T
 "invokeAll"<T>(arg0: $Collection$Type<(any)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): $List<($Future$0<(T)>)>
 "isTerminated"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$Type): boolean
 "execute"(arg0: $Runnable$Type): void
}

export namespace $EventExecutor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutor$Type = ($EventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutor_ = $EventExecutor$Type;
}}
declare module "packages/io/netty/util/$AttributeKey" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AbstractConstant, $AbstractConstant$Type} from "packages/io/netty/util/$AbstractConstant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AttributeKey<T> extends $AbstractConstant<($AttributeKey<(T)>)> {


public static "valueOf"<T>(arg0: string): $AttributeKey<(T)>
public static "valueOf"<T>(arg0: $Class$Type<(any)>, arg1: string): $AttributeKey<(T)>
public static "newInstance"<T>(arg0: string): $AttributeKey<(T)>
public static "exists"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeKey$Type<T> = ($AttributeKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeKey_<T> = $AttributeKey$Type<(T)>;
}}
declare module "packages/io/netty/util/concurrent/$AbstractEventExecutor" {
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/io/netty/util/concurrent/$ScheduledFuture"
import {$EventExecutorGroup, $EventExecutorGroup$Type} from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$AbstractExecutorService, $AbstractExecutorService$Type} from "packages/java/util/concurrent/$AbstractExecutorService"
import {$Promise, $Promise$Type} from "packages/io/netty/util/concurrent/$Promise"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$EventExecutor, $EventExecutor$Type} from "packages/io/netty/util/concurrent/$EventExecutor"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"
import {$ProgressivePromise, $ProgressivePromise$Type} from "packages/io/netty/util/concurrent/$ProgressivePromise"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractEventExecutor extends $AbstractExecutorService implements $EventExecutor {


public "parent"(): $EventExecutorGroup
/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "iterator"(): $Iterator<($EventExecutor)>
public "next"(): $EventExecutor
public "submit"(arg0: $Runnable$Type): $Future<(any)>
public "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
public "inEventLoop"(): boolean
public "lazyExecute"(arg0: $Runnable$Type): void
public "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
public "newPromise"<V>(): $Promise<(V)>
public "newFailedFuture"<V>(arg0: $Throwable$Type): $Future<(V)>
public "newSucceededFuture"<V>(arg0: V): $Future<(V)>
public "inEventLoop"(arg0: $Thread$Type): boolean
public "terminationFuture"(): $Future<(any)>
public "isShuttingDown"(): boolean
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$Type): $Future<(any)>
public "spliterator"(): $Spliterator<($EventExecutor)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEventExecutor$Type = ($AbstractEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEventExecutor_ = $AbstractEventExecutor$Type;
}}
declare module "packages/io/netty/channel/$SelectStrategyFactory" {
import {$SelectStrategy, $SelectStrategy$Type} from "packages/io/netty/channel/$SelectStrategy"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategyFactory {

 "newSelectStrategy"(): $SelectStrategy

(): $SelectStrategy
}

export namespace $SelectStrategyFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectStrategyFactory$Type = ($SelectStrategyFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectStrategyFactory_ = $SelectStrategyFactory$Type;
}}
declare module "packages/io/netty/channel/$SimpleChannelInboundHandler" {
import {$ChannelHandlerContext, $ChannelHandlerContext$Type} from "packages/io/netty/channel/$ChannelHandlerContext"
import {$ChannelInboundHandlerAdapter, $ChannelInboundHandlerAdapter$Type} from "packages/io/netty/channel/$ChannelInboundHandlerAdapter"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SimpleChannelInboundHandler<I> extends $ChannelInboundHandlerAdapter {


public "channelRead"(arg0: $ChannelHandlerContext$Type, arg1: any): void
public "acceptInboundMessage"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleChannelInboundHandler$Type<I> = ($SimpleChannelInboundHandler<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleChannelInboundHandler_<I> = $SimpleChannelInboundHandler$Type<(I)>;
}}
declare module "packages/io/netty/channel/$WriteBufferWaterMark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $WriteBufferWaterMark {
static readonly "DEFAULT": $WriteBufferWaterMark

constructor(arg0: integer, arg1: integer)

public "toString"(): string
public "high"(): integer
public "low"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WriteBufferWaterMark$Type = ($WriteBufferWaterMark);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WriteBufferWaterMark_ = $WriteBufferWaterMark$Type;
}}
declare module "packages/io/netty/util/concurrent/$Future" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$Future as $Future$0, $Future$Type as $Future$0$Type} from "packages/java/util/concurrent/$Future"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Future<V> extends $Future$0<(V)> {

 "cause"(): $Throwable
 "sync"(): $Future<(V)>
 "cancel"(arg0: boolean): boolean
 "isSuccess"(): boolean
 "removeListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $Future<(V)>
 "removeListener"(arg0: $GenericFutureListener$Type<(any)>): $Future<(V)>
 "await"(arg0: long, arg1: $TimeUnit$Type): boolean
 "await"(arg0: long): boolean
 "await"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$Type): boolean
 "awaitUninterruptibly"(): $Future<(V)>
 "addListener"(arg0: $GenericFutureListener$Type<(any)>): $Future<(V)>
 "getNow"(): V
 "syncUninterruptibly"(): $Future<(V)>
 "isCancellable"(): boolean
 "addListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $Future<(V)>
 "get"(arg0: long, arg1: $TimeUnit$Type): V
 "get"(): V
 "isDone"(): boolean
 "isCancelled"(): boolean
}

export namespace $Future {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Future$Type<V> = ($Future<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Future_<V> = $Future$Type<(V)>;
}}
declare module "packages/io/netty/channel/$ChannelProgressivePromise" {
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Channel, $Channel$Type} from "packages/io/netty/channel/$Channel"
import {$ProgressivePromise, $ProgressivePromise$Type} from "packages/io/netty/util/concurrent/$ProgressivePromise"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$ChannelProgressiveFuture, $ChannelProgressiveFuture$Type} from "packages/io/netty/channel/$ChannelProgressiveFuture"
import {$ChannelPromise, $ChannelPromise$Type} from "packages/io/netty/channel/$ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressivePromise extends $ProgressivePromise<(void)>, $ChannelProgressiveFuture, $ChannelPromise {

 "sync"(): $ChannelProgressivePromise
 "removeListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $ChannelProgressivePromise
 "removeListener"(arg0: $GenericFutureListener$Type<(any)>): $ChannelProgressivePromise
 "await"(): $ChannelProgressivePromise
 "awaitUninterruptibly"(): $ChannelProgressivePromise
 "addListener"(arg0: $GenericFutureListener$Type<(any)>): $ChannelProgressivePromise
 "syncUninterruptibly"(): $ChannelProgressivePromise
 "setProgress"(arg0: long, arg1: long): $ChannelProgressivePromise
 "setFailure"(arg0: $Throwable$Type): $ChannelProgressivePromise
 "unvoid"(): $ChannelProgressivePromise
 "addListeners"(...arg0: ($GenericFutureListener$Type<(any)>)[]): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ChannelProgressivePromise
 "setSuccess"(): $ChannelProgressivePromise
 "tryProgress"(arg0: long, arg1: long): boolean
 "setSuccess"(arg0: void): $ProgressivePromise<(void)>
 "channel"(): $Channel
 "trySuccess"(): boolean
 "trySuccess"(arg0: void): boolean
 "setUncancellable"(): boolean
 "tryFailure"(arg0: $Throwable$Type): boolean
 "isVoid"(): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "isSuccess"(): boolean
 "await"(arg0: long, arg1: $TimeUnit$Type): boolean
 "await"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$Type): boolean
 "getNow"(): void
 "isCancellable"(): boolean
 "get"(arg0: long, arg1: $TimeUnit$Type): void
 "get"(): void
 "isDone"(): boolean
 "isCancelled"(): boolean
}

export namespace $ChannelProgressivePromise {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelProgressivePromise$Type = ($ChannelProgressivePromise);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelProgressivePromise_ = $ChannelProgressivePromise$Type;
}}
declare module "packages/io/netty/util/$ReferenceCounted" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ReferenceCounted {

 "release"(arg0: integer): boolean
 "release"(): boolean
 "retain"(arg0: integer): $ReferenceCounted
 "retain"(): $ReferenceCounted
 "touch"(arg0: any): $ReferenceCounted
 "touch"(): $ReferenceCounted
 "refCnt"(): integer
}

export namespace $ReferenceCounted {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceCounted$Type = ($ReferenceCounted);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReferenceCounted_ = $ReferenceCounted$Type;
}}
declare module "packages/io/netty/channel/$SelectStrategy" {
import {$IntSupplier, $IntSupplier$Type} from "packages/io/netty/util/$IntSupplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategy {

 "calculateStrategy"(arg0: $IntSupplier$Type, arg1: boolean): integer

(arg0: $IntSupplier$Type, arg1: boolean): integer
}

export namespace $SelectStrategy {
const SELECT: integer
const CONTINUE: integer
const BUSY_WAIT: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectStrategy$Type = ($SelectStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectStrategy_ = $SelectStrategy$Type;
}}
declare module "packages/io/netty/util/concurrent/$AbstractEventExecutorGroup" {
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/io/netty/util/concurrent/$ScheduledFuture"
import {$EventExecutorGroup, $EventExecutorGroup$Type} from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Future as $Future$0, $Future$Type as $Future$0$Type} from "packages/io/netty/util/concurrent/$Future"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$EventExecutor, $EventExecutor$Type} from "packages/io/netty/util/concurrent/$EventExecutor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Future, $Future$Type} from "packages/java/util/concurrent/$Future"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractEventExecutorGroup implements $EventExecutorGroup {

constructor()

/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "execute"(arg0: $Runnable$Type): void
public "invokeAny"<T>(arg0: $Collection$Type<(any)>): T
public "invokeAny"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): T
public "invokeAll"<T>(arg0: $Collection$Type<(any)>): $List<($Future<(T)>)>
public "invokeAll"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): $List<($Future<(T)>)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleWithFixedDelay"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
public "schedule"(arg0: $Runnable$Type, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future$0<(any)>
public "iterator"(): $Iterator<($EventExecutor)>
public "next"(): $EventExecutor
public "terminationFuture"(): $Future$0<(any)>
public "isShuttingDown"(): boolean
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$Type): $Future$0<(any)>
public "spliterator"(): $Spliterator<($EventExecutor)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "isShutdown"(): boolean
public "isTerminated"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$Type): boolean
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEventExecutorGroup$Type = ($AbstractEventExecutorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEventExecutorGroup_ = $AbstractEventExecutorGroup$Type;
}}
declare module "packages/io/netty/util/concurrent/$OrderedEventExecutor" {
import {$ScheduledFuture, $ScheduledFuture$Type} from "packages/io/netty/util/concurrent/$ScheduledFuture"
import {$EventExecutorGroup, $EventExecutorGroup$Type} from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Future, $Future$Type} from "packages/io/netty/util/concurrent/$Future"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$Promise, $Promise$Type} from "packages/io/netty/util/concurrent/$Promise"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$EventExecutor, $EventExecutor$Type} from "packages/io/netty/util/concurrent/$EventExecutor"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Future as $Future$0, $Future$Type as $Future$0$Type} from "packages/java/util/concurrent/$Future"
import {$ProgressivePromise, $ProgressivePromise$Type} from "packages/io/netty/util/concurrent/$ProgressivePromise"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $OrderedEventExecutor extends $EventExecutor {

 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "inEventLoop"(arg0: $Thread$Type): boolean
 "inEventLoop"(): boolean
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "newPromise"<V>(): $Promise<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$Type): $Future<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future<(V)>
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "submit"<T>(arg0: $Runnable$Type, arg1: T): $Future<(T)>
 "submit"<T>(arg0: $Callable$Type<(T)>): $Future<(T)>
 "submit"(arg0: $Runnable$Type): $Future<(any)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleWithFixedDelay"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
 "scheduleAtFixedRate"(arg0: $Runnable$Type, arg1: long, arg2: long, arg3: $TimeUnit$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$Type<(V)>, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(V)>
 "schedule"(arg0: $Runnable$Type, arg1: long, arg2: $TimeUnit$Type): $ScheduledFuture<(any)>
 "terminationFuture"(): $Future<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$Type): $Future<(any)>
 "shutdownGracefully"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): T
 "invokeAny"<T>(arg0: $Collection$Type<(any)>): T
 "invokeAll"<T>(arg0: $Collection$Type<(any)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$Type<(any)>, arg1: long, arg2: $TimeUnit$Type): $List<($Future$0<(T)>)>
 "isTerminated"(): boolean
 "awaitTermination"(arg0: long, arg1: $TimeUnit$Type): boolean
 "execute"(arg0: $Runnable$Type): void
}

export namespace $OrderedEventExecutor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrderedEventExecutor$Type = ($OrderedEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrderedEventExecutor_ = $OrderedEventExecutor$Type;
}}
declare module "packages/io/netty/buffer/$ByteBufAllocator" {
import {$CompositeByteBuf, $CompositeByteBuf$Type} from "packages/io/netty/buffer/$CompositeByteBuf"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufAllocator {

 "buffer"(): $ByteBuf
 "buffer"(arg0: integer, arg1: integer): $ByteBuf
 "buffer"(arg0: integer): $ByteBuf
 "directBuffer"(): $ByteBuf
 "directBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "directBuffer"(arg0: integer): $ByteBuf
 "compositeBuffer"(arg0: integer): $CompositeByteBuf
 "compositeBuffer"(): $CompositeByteBuf
 "compositeHeapBuffer"(arg0: integer): $CompositeByteBuf
 "compositeHeapBuffer"(): $CompositeByteBuf
 "isDirectBufferPooled"(): boolean
 "calculateNewCapacity"(arg0: integer, arg1: integer): integer
 "compositeDirectBuffer"(): $CompositeByteBuf
 "compositeDirectBuffer"(arg0: integer): $CompositeByteBuf
 "heapBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "heapBuffer"(): $ByteBuf
 "heapBuffer"(arg0: integer): $ByteBuf
 "ioBuffer"(): $ByteBuf
 "ioBuffer"(arg0: integer): $ByteBuf
 "ioBuffer"(arg0: integer, arg1: integer): $ByteBuf
}

export namespace $ByteBufAllocator {
const DEFAULT: $ByteBufAllocator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufAllocator$Type = ($ByteBufAllocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufAllocator_ = $ByteBufAllocator$Type;
}}
declare module "packages/io/netty/util/$ByteProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteProcessor {

 "process"(arg0: byte): boolean

(arg0: byte): boolean
}

export namespace $ByteProcessor {
const FIND_NUL: $ByteProcessor
const FIND_NON_NUL: $ByteProcessor
const FIND_CR: $ByteProcessor
const FIND_NON_CR: $ByteProcessor
const FIND_LF: $ByteProcessor
const FIND_NON_LF: $ByteProcessor
const FIND_SEMI_COLON: $ByteProcessor
const FIND_COMMA: $ByteProcessor
const FIND_ASCII_SPACE: $ByteProcessor
const FIND_CRLF: $ByteProcessor
const FIND_NON_CRLF: $ByteProcessor
const FIND_LINEAR_WHITESPACE: $ByteProcessor
const FIND_NON_LINEAR_WHITESPACE: $ByteProcessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteProcessor$Type = ($ByteProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteProcessor_ = $ByteProcessor$Type;
}}
