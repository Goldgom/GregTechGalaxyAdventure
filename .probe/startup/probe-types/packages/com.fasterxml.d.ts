declare module "packages/com/fasterxml/jackson/databind/$ObjectWriter" {
import {$StreamWriteFeature, $StreamWriteFeature$Type} from "packages/com/fasterxml/jackson/core/$StreamWriteFeature"
import {$SerializationConfig, $SerializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$SerializationConfig"
import {$DateFormat, $DateFormat$Type} from "packages/java/text/$DateFormat"
import {$JsonGenerator$Feature, $JsonGenerator$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator$Feature"
import {$SequenceWriter, $SequenceWriter$Type} from "packages/com/fasterxml/jackson/databind/$SequenceWriter"
import {$ContextAttributes, $ContextAttributes$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ContextAttributes"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$AtomicReference, $AtomicReference$Type} from "packages/java/util/concurrent/atomic/$AtomicReference"
import {$JsonFactory, $JsonFactory$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory"
import {$FormatSchema, $FormatSchema$Type} from "packages/com/fasterxml/jackson/core/$FormatSchema"
import {$SerializationFeature, $SerializationFeature$Type} from "packages/com/fasterxml/jackson/databind/$SerializationFeature"
import {$PrettyPrinter, $PrettyPrinter$Type} from "packages/com/fasterxml/jackson/core/$PrettyPrinter"
import {$JsonFormatVisitorWrapper, $JsonFormatVisitorWrapper$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWrapper"
import {$FilterProvider, $FilterProvider$Type} from "packages/com/fasterxml/jackson/databind/ser/$FilterProvider"
import {$File, $File$Type} from "packages/java/io/$File"
import {$FormatFeature, $FormatFeature$Type} from "packages/com/fasterxml/jackson/core/$FormatFeature"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"
import {$JsonEncoding, $JsonEncoding$Type} from "packages/com/fasterxml/jackson/core/$JsonEncoding"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$MapperFeature, $MapperFeature$Type} from "packages/com/fasterxml/jackson/databind/$MapperFeature"
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$TypeReference, $TypeReference$Type} from "packages/com/fasterxml/jackson/core/type/$TypeReference"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$DataOutput, $DataOutput$Type} from "packages/java/io/$DataOutput"
import {$Versioned, $Versioned$Type} from "packages/com/fasterxml/jackson/core/$Versioned"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$DatatypeFeature, $DatatypeFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeature"
import {$JsonParser$Feature, $JsonParser$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$Feature"
import {$CharacterEscapes, $CharacterEscapes$Type} from "packages/com/fasterxml/jackson/core/io/$CharacterEscapes"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ObjectWriter implements $Versioned, $Serializable {


public "version"(): $Version
public "getFactory"(): $JsonFactory
public "getAttributes"(): $ContextAttributes
public "with"(arg0: $FilterProvider$Type): $ObjectWriter
public "with"(arg0: $DateFormat$Type): $ObjectWriter
public "with"(arg0: $FormatFeature$Type): $ObjectWriter
public "with"(arg0: $StreamWriteFeature$Type): $ObjectWriter
public "with"(arg0: $JsonGenerator$Feature$Type): $ObjectWriter
public "with"(arg0: $FormatSchema$Type): $ObjectWriter
public "with"(arg0: $Base64Variant$Type): $ObjectWriter
public "with"(arg0: $TimeZone$Type): $ObjectWriter
public "with"(arg0: $Locale$Type): $ObjectWriter
public "with"(arg0: $CharacterEscapes$Type): $ObjectWriter
public "with"(arg0: $ContextAttributes$Type): $ObjectWriter
public "with"(arg0: $PrettyPrinter$Type): $ObjectWriter
public "with"(arg0: $DatatypeFeature$Type): $ObjectWriter
public "with"(arg0: $SerializationFeature$Type, ...arg1: ($SerializationFeature$Type)[]): $ObjectWriter
public "with"(arg0: $SerializationFeature$Type): $ObjectWriter
public "with"(arg0: $JsonFactory$Type): $ObjectWriter
/**
 * 
 * @deprecated
 */
public "isEnabled"(arg0: $JsonParser$Feature$Type): boolean
public "isEnabled"(arg0: $DatatypeFeature$Type): boolean
public "isEnabled"(arg0: $MapperFeature$Type): boolean
public "isEnabled"(arg0: $SerializationFeature$Type): boolean
public "isEnabled"(arg0: $JsonGenerator$Feature$Type): boolean
public "isEnabled"(arg0: $StreamWriteFeature$Type): boolean
public "forType"(arg0: $TypeReference$Type<(any)>): $ObjectWriter
public "forType"(arg0: $JavaType$Type): $ObjectWriter
public "forType"(arg0: $Class$Type<(any)>): $ObjectWriter
public "without"(arg0: $SerializationFeature$Type, ...arg1: ($SerializationFeature$Type)[]): $ObjectWriter
public "without"(arg0: $SerializationFeature$Type): $ObjectWriter
public "without"(arg0: $JsonGenerator$Feature$Type): $ObjectWriter
public "without"(arg0: $StreamWriteFeature$Type): $ObjectWriter
public "without"(arg0: $DatatypeFeature$Type): $ObjectWriter
public "without"(arg0: $FormatFeature$Type): $ObjectWriter
public "writeValue"(arg0: $DataOutput$Type, arg1: any): void
public "writeValue"(arg0: $Writer$Type, arg1: any): void
public "writeValue"(arg0: $OutputStream$Type, arg1: any): void
public "writeValue"(arg0: $File$Type, arg1: any): void
public "writeValue"(arg0: $JsonGenerator$Type, arg1: any): void
public "getConfig"(): $SerializationConfig
/**
 * 
 * @deprecated
 */
public "withType"(arg0: $TypeReference$Type<(any)>): $ObjectWriter
/**
 * 
 * @deprecated
 */
public "withType"(arg0: $Class$Type<(any)>): $ObjectWriter
/**
 * 
 * @deprecated
 */
public "withType"(arg0: $JavaType$Type): $ObjectWriter
public "writeValueAsString"(arg0: any): string
public "withoutAttribute"(arg0: any): $ObjectWriter
public "withFeatures"(...arg0: ($JsonGenerator$Feature$Type)[]): $ObjectWriter
public "withFeatures"(...arg0: ($SerializationFeature$Type)[]): $ObjectWriter
public "withFeatures"(...arg0: ($DatatypeFeature$Type)[]): $ObjectWriter
public "withFeatures"(...arg0: ($FormatFeature$Type)[]): $ObjectWriter
public "withRootName"(arg0: $PropertyName$Type): $ObjectWriter
public "withRootName"(arg0: string): $ObjectWriter
public "withAttributes"(arg0: $Map$Type<(any), (any)>): $ObjectWriter
public "withoutFeatures"(...arg0: ($FormatFeature$Type)[]): $ObjectWriter
public "withoutFeatures"(...arg0: ($SerializationFeature$Type)[]): $ObjectWriter
public "withoutFeatures"(...arg0: ($JsonGenerator$Feature$Type)[]): $ObjectWriter
public "withoutFeatures"(...arg0: ($DatatypeFeature$Type)[]): $ObjectWriter
public "withAttribute"(arg0: any, arg1: any): $ObjectWriter
public "writeValueAsBytes"(arg0: any): (byte)[]
public "createGenerator"(arg0: $OutputStream$Type): $JsonGenerator
public "createGenerator"(arg0: $File$Type, arg1: $JsonEncoding$Type): $JsonGenerator
public "createGenerator"(arg0: $Writer$Type): $JsonGenerator
public "createGenerator"(arg0: $OutputStream$Type, arg1: $JsonEncoding$Type): $JsonGenerator
public "createGenerator"(arg0: $DataOutput$Type): $JsonGenerator
public "getTypeFactory"(): $TypeFactory
public "canSerialize"(arg0: $Class$Type<(any)>): boolean
public "canSerialize"(arg0: $Class$Type<(any)>, arg1: $AtomicReference$Type<($Throwable$Type)>): boolean
public "withView"(arg0: $Class$Type<(any)>): $ObjectWriter
public "withoutRootName"(): $ObjectWriter
public "withDefaultPrettyPrinter"(): $ObjectWriter
public "acceptJsonFormatVisitor"(arg0: $JavaType$Type, arg1: $JsonFormatVisitorWrapper$Type): void
public "acceptJsonFormatVisitor"(arg0: $Class$Type<(any)>, arg1: $JsonFormatVisitorWrapper$Type): void
public "hasPrefetchedSerializer"(): boolean
public "withRootValueSeparator"(arg0: $SerializableString$Type): $ObjectWriter
public "withRootValueSeparator"(arg0: string): $ObjectWriter
/**
 * 
 * @deprecated
 */
public "withSchema"(arg0: $FormatSchema$Type): $ObjectWriter
public "writeValues"(arg0: $Writer$Type): $SequenceWriter
public "writeValues"(arg0: $OutputStream$Type): $SequenceWriter
public "writeValues"(arg0: $DataOutput$Type): $SequenceWriter
public "writeValues"(arg0: $File$Type): $SequenceWriter
public "writeValues"(arg0: $JsonGenerator$Type): $SequenceWriter
public "writeValuesAsArray"(arg0: $JsonGenerator$Type): $SequenceWriter
public "writeValuesAsArray"(arg0: $Writer$Type): $SequenceWriter
public "writeValuesAsArray"(arg0: $File$Type): $SequenceWriter
public "writeValuesAsArray"(arg0: $OutputStream$Type): $SequenceWriter
public "writeValuesAsArray"(arg0: $DataOutput$Type): $SequenceWriter
get "factory"(): $JsonFactory
get "attributes"(): $ContextAttributes
get "config"(): $SerializationConfig
get "typeFactory"(): $TypeFactory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectWriter$Type = ($ObjectWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectWriter_ = $ObjectWriter$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$AccessPattern" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AccessPattern extends $Enum<($AccessPattern)> {
static readonly "ALWAYS_NULL": $AccessPattern
static readonly "CONSTANT": $AccessPattern
static readonly "DYNAMIC": $AccessPattern


public static "values"(): ($AccessPattern)[]
public static "valueOf"(arg0: string): $AccessPattern
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessPattern$Type = (("constant") | ("always_null") | ("dynamic")) | ($AccessPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessPattern_ = $AccessPattern$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$LRUMap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$LookupCache, $LookupCache$Type} from "packages/com/fasterxml/jackson/databind/util/$LookupCache"

export class $LRUMap<K, V> implements $LookupCache<(K), (V)>, $Serializable {

constructor(arg0: integer, arg1: integer)

public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "clear"(): void
public "size"(): integer
public "putIfAbsent"(arg0: K, arg1: V): V
public "contents"(arg0: $BiConsumer$Type<(K), (V)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LRUMap$Type<K, V> = ($LRUMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LRUMap_<K, V> = $LRUMap$Type<(K), (V)>;
}}
declare module "packages/com/fasterxml/jackson/core/io/$CharacterEscapes" {
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $CharacterEscapes implements $Serializable {
static readonly "ESCAPE_NONE": integer
static readonly "ESCAPE_STANDARD": integer
static readonly "ESCAPE_CUSTOM": integer

constructor()

public "getEscapeSequence"(arg0: integer): $SerializableString
public "getEscapeCodesForAscii"(): (integer)[]
public static "standardAsciiEscapesForJSON"(): (integer)[]
get "escapeCodesForAscii"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharacterEscapes$Type = ($CharacterEscapes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharacterEscapes_ = $CharacterEscapes$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitable" {
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$JsonFormatVisitorWrapper, $JsonFormatVisitorWrapper$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWrapper"

export interface $JsonFormatVisitable {

 "acceptJsonFormatVisitor"(arg0: $JsonFormatVisitorWrapper$Type, arg1: $JavaType$Type): void

(arg0: $JsonFormatVisitorWrapper$Type, arg1: $JavaType$Type): void
}

export namespace $JsonFormatVisitable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFormatVisitable$Type = ($JsonFormatVisitable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFormatVisitable_ = $JsonFormatVisitable$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$DefaultDeserializationContext" {
import {$DeserializerFactory, $DeserializerFactory$Type} from "packages/com/fasterxml/jackson/databind/deser/$DeserializerFactory"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$ObjectIdGenerator, $ObjectIdGenerator$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator"
import {$ObjectIdResolver, $ObjectIdResolver$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdResolver"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"
import {$InjectableValues, $InjectableValues$Type} from "packages/com/fasterxml/jackson/databind/$InjectableValues"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$ReadableObjectId, $ReadableObjectId$Type} from "packages/com/fasterxml/jackson/databind/deser/impl/$ReadableObjectId"
import {$Annotated, $Annotated$Type} from "packages/com/fasterxml/jackson/databind/introspect/$Annotated"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$KeyDeserializer, $KeyDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$KeyDeserializer"

export class $DefaultDeserializationContext extends $DeserializationContext implements $Serializable {


public "copy"(): $DefaultDeserializationContext
public "with"(arg0: $DeserializerFactory$Type): $DefaultDeserializationContext
public "createInstance"(arg0: $DeserializationConfig$Type, arg1: $JsonParser$Type, arg2: $InjectableValues$Type): $DefaultDeserializationContext
public "readRootValue"(arg0: $JsonParser$Type, arg1: $JavaType$Type, arg2: $JsonDeserializer$Type<(any)>, arg3: any): any
public "findObjectId"(arg0: any, arg1: $ObjectIdGenerator$Type<(any)>, arg2: $ObjectIdResolver$Type): $ReadableObjectId
public "keyDeserializerInstance"(arg0: $Annotated$Type, arg1: any): $KeyDeserializer
public "deserializerInstance"(arg0: $Annotated$Type, arg1: any): $JsonDeserializer<(any)>
public "createDummyInstance"(arg0: $DeserializationConfig$Type): $DefaultDeserializationContext
public "checkUnresolvedObjectId"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultDeserializationContext$Type = ($DefaultDeserializationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultDeserializationContext_ = $DefaultDeserializationContext$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$TokenStreamFactory" {
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$DataInput, $DataInput$Type} from "packages/java/io/$DataInput"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$JsonGenerator$Feature, $JsonGenerator$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator$Feature"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$FormatSchema, $FormatSchema$Type} from "packages/com/fasterxml/jackson/core/$FormatSchema"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$DataOutput, $DataOutput$Type} from "packages/java/io/$DataOutput"
import {$Versioned, $Versioned$Type} from "packages/com/fasterxml/jackson/core/$Versioned"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$File, $File$Type} from "packages/java/io/$File"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$JsonEncoding, $JsonEncoding$Type} from "packages/com/fasterxml/jackson/core/$JsonEncoding"
import {$JsonParser$Feature, $JsonParser$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$Feature"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"

export class $TokenStreamFactory implements $Versioned, $Serializable {

constructor()

public "isEnabled"(arg0: $JsonGenerator$Feature$Type): boolean
public "isEnabled"(arg0: $JsonParser$Feature$Type): boolean
public "createParser"(arg0: (character)[], arg1: integer, arg2: integer): $JsonParser
public "createParser"(arg0: (character)[]): $JsonParser
public "createParser"(arg0: (byte)[], arg1: integer, arg2: integer): $JsonParser
public "createParser"(arg0: (byte)[]): $JsonParser
public "createParser"(arg0: $URL$Type): $JsonParser
public "createParser"(arg0: string): $JsonParser
public "createParser"(arg0: $Reader$Type): $JsonParser
public "createParser"(arg0: $InputStream$Type): $JsonParser
public "createParser"(arg0: $File$Type): $JsonParser
public "createParser"(arg0: $DataInput$Type): $JsonParser
public "getFormatName"(): string
public "createGenerator"(arg0: $DataOutput$Type): $JsonGenerator
public "createGenerator"(arg0: $OutputStream$Type, arg1: $JsonEncoding$Type): $JsonGenerator
public "createGenerator"(arg0: $OutputStream$Type): $JsonGenerator
public "createGenerator"(arg0: $File$Type, arg1: $JsonEncoding$Type): $JsonGenerator
public "createGenerator"(arg0: $Writer$Type): $JsonGenerator
public "createGenerator"(arg0: $DataOutput$Type, arg1: $JsonEncoding$Type): $JsonGenerator
public "canUseSchema"(arg0: $FormatSchema$Type): boolean
public "canParseAsync"(): boolean
public "getParserFeatures"(): integer
public "createNonBlockingByteArrayParser"(): $JsonParser
public "requiresPropertyOrdering"(): boolean
public "getFormatParserFeatures"(): integer
public "getFormatReadFeatureType"(): $Class<(any)>
public "getFormatWriteFeatureType"(): $Class<(any)>
public "canHandleBinaryNatively"(): boolean
public "createNonBlockingByteBufferParser"(): $JsonParser
public "getFormatGeneratorFeatures"(): integer
public "getGeneratorFeatures"(): integer
public "version"(): $Version
get "formatName"(): string
get "parserFeatures"(): integer
get "formatParserFeatures"(): integer
get "formatReadFeatureType"(): $Class<(any)>
get "formatWriteFeatureType"(): $Class<(any)>
get "formatGeneratorFeatures"(): integer
get "generatorFeatures"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TokenStreamFactory$Type = ($TokenStreamFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TokenStreamFactory_ = $TokenStreamFactory$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonProcessingException" {
import {$JacksonException, $JacksonException$Type} from "packages/com/fasterxml/jackson/core/$JacksonException"
import {$JsonLocation, $JsonLocation$Type} from "packages/com/fasterxml/jackson/core/$JsonLocation"

export class $JsonProcessingException extends $JacksonException {


public "toString"(): string
public "getLocation"(): $JsonLocation
public "getMessage"(): string
public "getOriginalMessage"(): string
public "getProcessor"(): any
public "clearLocation"(): void
get "location"(): $JsonLocation
get "message"(): string
get "originalMessage"(): string
get "processor"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonProcessingException$Type = ($JsonProcessingException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonProcessingException_ = $JsonProcessingException$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeatures" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$DatatypeFeature, $DatatypeFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeature"

export class $DatatypeFeatures implements $Serializable {


public "with"(arg0: $DatatypeFeature$Type): $DatatypeFeatures
public "isEnabled"(arg0: $DatatypeFeature$Type): boolean
public "without"(arg0: $DatatypeFeature$Type): $DatatypeFeatures
public "withFeatures"(...arg0: ($DatatypeFeature$Type)[]): $DatatypeFeatures
public "withoutFeatures"(...arg0: ($DatatypeFeature$Type)[]): $DatatypeFeatures
public static "defaultFeatures"(): $DatatypeFeatures
public "getExplicitState"(arg0: $DatatypeFeature$Type): boolean
public "isExplicitlySet"(arg0: $DatatypeFeature$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatatypeFeatures$Type = ($DatatypeFeatures);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DatatypeFeatures_ = $DatatypeFeatures$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonFormat$Feature" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonFormat$Feature extends $Enum<($JsonFormat$Feature)> {
static readonly "ACCEPT_SINGLE_VALUE_AS_ARRAY": $JsonFormat$Feature
static readonly "ACCEPT_CASE_INSENSITIVE_PROPERTIES": $JsonFormat$Feature
static readonly "ACCEPT_CASE_INSENSITIVE_VALUES": $JsonFormat$Feature
static readonly "WRITE_DATE_TIMESTAMPS_AS_NANOSECONDS": $JsonFormat$Feature
static readonly "WRITE_DATES_WITH_ZONE_ID": $JsonFormat$Feature
static readonly "WRITE_SINGLE_ELEM_ARRAYS_UNWRAPPED": $JsonFormat$Feature
static readonly "WRITE_SORTED_MAP_ENTRIES": $JsonFormat$Feature
static readonly "ADJUST_DATES_TO_CONTEXT_TIME_ZONE": $JsonFormat$Feature


public static "values"(): ($JsonFormat$Feature)[]
public static "valueOf"(arg0: string): $JsonFormat$Feature
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFormat$Feature$Type = (("accept_case_insensitive_values") | ("accept_single_value_as_array") | ("write_sorted_map_entries") | ("accept_case_insensitive_properties") | ("write_single_elem_arrays_unwrapped") | ("adjust_dates_to_context_time_zone") | ("write_dates_with_zone_id") | ("write_date_timestamps_as_nanoseconds")) | ($JsonFormat$Feature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFormat$Feature_ = $JsonFormat$Feature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsontype/$TypeResolverBuilder" {
import {$NamedType, $NamedType$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$NamedType"
import {$JsonTypeInfo$Id, $JsonTypeInfo$Id$Type} from "packages/com/fasterxml/jackson/annotation/$JsonTypeInfo$Id"
import {$SerializationConfig, $SerializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$SerializationConfig"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TypeIdResolver, $TypeIdResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeIdResolver"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$JsonTypeInfo$As, $JsonTypeInfo$As$Type} from "packages/com/fasterxml/jackson/annotation/$JsonTypeInfo$As"
import {$TypeDeserializer, $TypeDeserializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeDeserializer"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export interface $TypeResolverBuilder<T extends $TypeResolverBuilder<(T)>> {

 "init"(arg0: $JsonTypeInfo$Id$Type, arg1: $TypeIdResolver$Type): T
 "defaultImpl"(arg0: $Class$Type<(any)>): T
 "getDefaultImpl"(): $Class<(any)>
 "typeIdVisibility"(arg0: boolean): T
 "withDefaultImpl"(arg0: $Class$Type<(any)>): T
 "inclusion"(arg0: $JsonTypeInfo$As$Type): T
 "typeProperty"(arg0: string): T
 "buildTypeDeserializer"(arg0: $DeserializationConfig$Type, arg1: $JavaType$Type, arg2: $Collection$Type<($NamedType$Type)>): $TypeDeserializer
 "buildTypeSerializer"(arg0: $SerializationConfig$Type, arg1: $JavaType$Type, arg2: $Collection$Type<($NamedType$Type)>): $TypeSerializer
}

export namespace $TypeResolverBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeResolverBuilder$Type<T> = ($TypeResolverBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeResolverBuilder_<T> = $TypeResolverBuilder$Type<(T)>;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$JsonNodeFactory" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$JsonNodeCreator, $JsonNodeCreator$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeCreator"
import {$BinaryNode, $BinaryNode$Type} from "packages/com/fasterxml/jackson/databind/node/$BinaryNode"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$ValueNode, $ValueNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ValueNode"
import {$ArrayNode, $ArrayNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ArrayNode"
import {$NumericNode, $NumericNode$Type} from "packages/com/fasterxml/jackson/databind/node/$NumericNode"
import {$BooleanNode, $BooleanNode$Type} from "packages/com/fasterxml/jackson/databind/node/$BooleanNode"
import {$RawValue, $RawValue$Type} from "packages/com/fasterxml/jackson/databind/util/$RawValue"
import {$ObjectNode, $ObjectNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ObjectNode"
import {$NullNode, $NullNode$Type} from "packages/com/fasterxml/jackson/databind/node/$NullNode"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$TextNode, $TextNode$Type} from "packages/com/fasterxml/jackson/databind/node/$TextNode"

export class $JsonNodeFactory implements $Serializable, $JsonNodeCreator {
static readonly "instance": $JsonNodeFactory

constructor(arg0: boolean)

public "textNode"(arg0: string): $TextNode
public "binaryNode"(arg0: (byte)[], arg1: integer, arg2: integer): $BinaryNode
public "binaryNode"(arg0: (byte)[]): $BinaryNode
public "objectNode"(): $ObjectNode
public static "withExactBigDecimals"(arg0: boolean): $JsonNodeFactory
public "getMaxElementIndexForInsert"(): integer
public "missingNode"(): $JsonNode
public "nullNode"(): $NullNode
public "arrayNode"(): $ArrayNode
public "arrayNode"(arg0: integer): $ArrayNode
public "numberNode"(arg0: integer): $NumericNode
public "numberNode"(arg0: integer): $ValueNode
public "numberNode"(arg0: short): $NumericNode
public "numberNode"(arg0: short): $ValueNode
public "numberNode"(arg0: $BigDecimal$Type): $ValueNode
public "numberNode"(arg0: double): $ValueNode
public "numberNode"(arg0: float): $ValueNode
public "numberNode"(arg0: byte): $ValueNode
public "numberNode"(arg0: $BigInteger$Type): $ValueNode
public "numberNode"(arg0: long): $ValueNode
public "booleanNode"(arg0: boolean): $BooleanNode
public "rawValueNode"(arg0: $RawValue$Type): $ValueNode
public "pojoNode"(arg0: any): $ValueNode
get "maxElementIndexForInsert"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNodeFactory$Type = ($JsonNodeFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonNodeFactory_ = $JsonNodeFactory$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$TokenBuffer" {
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$JsonGenerator$Feature, $JsonGenerator$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator$Feature"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$JsonStreamContext, $JsonStreamContext$Type} from "packages/com/fasterxml/jackson/core/$JsonStreamContext"
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$JacksonFeatureSet, $JacksonFeatureSet$Type} from "packages/com/fasterxml/jackson/core/util/$JacksonFeatureSet"
import {$StreamWriteCapability, $StreamWriteCapability$Type} from "packages/com/fasterxml/jackson/core/$StreamWriteCapability"
import {$TreeNode, $TreeNode$Type} from "packages/com/fasterxml/jackson/core/$TreeNode"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"

export class $TokenBuffer extends $JsonGenerator {

constructor(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type)
constructor(arg0: $JsonParser$Type)
constructor(arg0: $ObjectCodec$Type, arg1: boolean)

public "toString"(): string
public "append"(arg0: $TokenBuffer$Type): $TokenBuffer
public "version"(): $Version
public "flush"(): void
public "isEmpty"(): boolean
public "writeObject"(arg0: any): void
public "close"(): void
public "writeBoolean"(arg0: boolean): void
public "writeString"(arg0: string): void
public "writeString"(arg0: $SerializableString$Type): void
public "writeString"(arg0: (character)[], arg1: integer, arg2: integer): void
public "enable"(arg0: $JsonGenerator$Feature$Type): $JsonGenerator
public "isEnabled"(arg0: $JsonGenerator$Feature$Type): boolean
public "deserialize"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type): $TokenBuffer
public "isClosed"(): boolean
public "disable"(arg0: $JsonGenerator$Feature$Type): $JsonGenerator
public "serialize"(arg0: $JsonGenerator$Type): void
public "writeNull"(): void
public "getCodec"(): $ObjectCodec
public "firstToken"(): $JsonToken
public "canWriteTypeId"(): boolean
public "getFeatureMask"(): integer
public "canWriteObjectId"(): boolean
/**
 * 
 * @deprecated
 */
public "setFeatureMask"(arg0: integer): $JsonGenerator
public "writeRaw"(arg0: $SerializableString$Type): void
public "writeRaw"(arg0: (character)[], arg1: integer, arg2: integer): void
public "writeRaw"(arg0: character): void
public "writeRaw"(arg0: string, arg1: integer, arg2: integer): void
public "writeRaw"(arg0: string): void
public "writeRawUTF8String"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "writeEndArray"(): void
public "writeStartArray"(arg0: any, arg1: integer): void
public "writeStartArray"(arg0: any): void
public "writeStartArray"(): void
public "writeRawValue"(arg0: string): void
public "writeRawValue"(arg0: (character)[], arg1: integer, arg2: integer): void
public "writeRawValue"(arg0: string, arg1: integer, arg2: integer): void
public "writeTypeId"(arg0: any): void
public "writeBinary"(arg0: $Base64Variant$Type, arg1: (byte)[], arg2: integer, arg3: integer): void
public "writeBinary"(arg0: $Base64Variant$Type, arg1: $InputStream$Type, arg2: integer): integer
public "writeObjectId"(arg0: any): void
public "writeUTF8String"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "copyCurrentEvent"(arg0: $JsonParser$Type): void
/**
 * 
 * @deprecated
 */
public static "asCopyOfValue"(arg0: $JsonParser$Type): $TokenBuffer
public "writeTree"(arg0: $TreeNode$Type): void
public "setCodec"(arg0: $ObjectCodec$Type): $JsonGenerator
public "asParser"(arg0: $ObjectCodec$Type): $JsonParser
public "asParser"(arg0: $JsonParser$Type): $JsonParser
public "asParser"(): $JsonParser
public "writeFieldName"(arg0: $SerializableString$Type): void
public "writeFieldName"(arg0: string): void
public "writeNumber"(arg0: double): void
public "writeNumber"(arg0: long): void
public "writeNumber"(arg0: integer): void
public "writeNumber"(arg0: short): void
public "writeNumber"(arg0: string): void
public "writeNumber"(arg0: $BigInteger$Type): void
public "writeNumber"(arg0: $BigDecimal$Type): void
public "writeNumber"(arg0: float): void
public "writeStartObject"(arg0: any, arg1: integer): void
public "writeStartObject"(arg0: any): void
public "writeStartObject"(): void
public "writeEndObject"(): void
public "copyCurrentStructure"(arg0: $JsonParser$Type): void
public "overrideStdFeatures"(arg0: integer, arg1: integer): $JsonGenerator
public "useDefaultPrettyPrinter"(): $JsonGenerator
public "canWriteBinaryNatively"(): boolean
public "getWriteCapabilities"(): $JacksonFeatureSet<($StreamWriteCapability)>
public "writeEmbeddedObject"(arg0: any): void
public "overrideParentContext"(arg0: $JsonStreamContext$Type): $TokenBuffer
public "asParserOnFirstToken"(): $JsonParser
public "forceUseOfBigDecimal"(arg0: boolean): $TokenBuffer
get "empty"(): boolean
get "closed"(): boolean
get "codec"(): $ObjectCodec
get "featureMask"(): integer
set "featureMask"(value: integer)
set "codec"(value: $ObjectCodec$Type)
get "writeCapabilities"(): $JacksonFeatureSet<($StreamWriteCapability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TokenBuffer$Type = ($TokenBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TokenBuffer_ = $TokenBuffer$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonFactoryBuilder" {
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$JsonFactory, $JsonFactory$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory"
import {$JsonWriteFeature, $JsonWriteFeature$Type} from "packages/com/fasterxml/jackson/core/json/$JsonWriteFeature"
import {$TSFBuilder, $TSFBuilder$Type} from "packages/com/fasterxml/jackson/core/$TSFBuilder"
import {$JsonReadFeature, $JsonReadFeature$Type} from "packages/com/fasterxml/jackson/core/json/$JsonReadFeature"
import {$CharacterEscapes, $CharacterEscapes$Type} from "packages/com/fasterxml/jackson/core/io/$CharacterEscapes"

export class $JsonFactoryBuilder extends $TSFBuilder<($JsonFactory), ($JsonFactoryBuilder)> {

constructor()
constructor(arg0: $JsonFactory$Type)

public "build"(): $JsonFactory
public "enable"(arg0: $JsonWriteFeature$Type, ...arg1: ($JsonWriteFeature$Type)[]): $JsonFactoryBuilder
public "disable"(arg0: $JsonReadFeature$Type): $JsonFactoryBuilder
public "disable"(arg0: $JsonReadFeature$Type, ...arg1: ($JsonReadFeature$Type)[]): $JsonFactoryBuilder
public "quoteChar"(arg0: character): $JsonFactoryBuilder
public "quoteChar"(): character
public "rootValueSeparator"(arg0: $SerializableString$Type): $JsonFactoryBuilder
public "rootValueSeparator"(): $SerializableString
public "rootValueSeparator"(arg0: string): $JsonFactoryBuilder
public "characterEscapes"(arg0: $CharacterEscapes$Type): $JsonFactoryBuilder
public "characterEscapes"(): $CharacterEscapes
public "highestNonEscapedChar"(): integer
public "highestNonEscapedChar"(arg0: integer): $JsonFactoryBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFactoryBuilder$Type = ($JsonFactoryBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFactoryBuilder_ = $JsonFactoryBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonIgnoreProperties" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $JsonIgnoreProperties extends $Annotation {

 "value"(): (string)[]
 "allowGetters"(): boolean
 "allowSetters"(): boolean
 "ignoreUnknown"(): boolean
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $JsonIgnoreProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonIgnoreProperties$Type = ($JsonIgnoreProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonIgnoreProperties_ = $JsonIgnoreProperties$Type;
}}
declare module "packages/com/fasterxml/jackson/dataformat/cbor/databind/$CBORMapper" {
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$CBORMapper$Builder, $CBORMapper$Builder$Type} from "packages/com/fasterxml/jackson/dataformat/cbor/databind/$CBORMapper$Builder"
import {$ObjectMapper, $ObjectMapper$Type} from "packages/com/fasterxml/jackson/databind/$ObjectMapper"
import {$CBORFactory, $CBORFactory$Type} from "packages/com/fasterxml/jackson/dataformat/cbor/$CBORFactory"

export class $CBORMapper extends $ObjectMapper {

constructor(arg0: $CBORFactory$Type)
constructor()

public "version"(): $Version
public static "builder"(arg0: $CBORFactory$Type): $CBORMapper$Builder
public static "builder"(): $CBORMapper$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBORMapper$Type = ($CBORMapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBORMapper_ = $CBORMapper$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$DefaultSerializerProvider" {
import {$SerializationConfig, $SerializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$SerializationConfig"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$AtomicReference, $AtomicReference$Type} from "packages/java/util/concurrent/atomic/$AtomicReference"
import {$ObjectIdGenerator, $ObjectIdGenerator$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator"
import {$SerializerFactory, $SerializerFactory$Type} from "packages/com/fasterxml/jackson/databind/ser/$SerializerFactory"
import {$JsonFormatVisitorWrapper, $JsonFormatVisitorWrapper$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWrapper"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$JsonSchema, $JsonSchema$Type} from "packages/com/fasterxml/jackson/databind/jsonschema/$JsonSchema"
import {$Annotated, $Annotated$Type} from "packages/com/fasterxml/jackson/databind/introspect/$Annotated"
import {$WritableObjectId, $WritableObjectId$Type} from "packages/com/fasterxml/jackson/databind/ser/impl/$WritableObjectId"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$BeanPropertyDefinition, $BeanPropertyDefinition$Type} from "packages/com/fasterxml/jackson/databind/introspect/$BeanPropertyDefinition"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"

export class $DefaultSerializerProvider extends $SerializerProvider implements $Serializable {
static readonly "DEFAULT_NULL_KEY_SERIALIZER": $JsonSerializer<(any)>


public "copy"(): $DefaultSerializerProvider
public "createInstance"(arg0: $SerializationConfig$Type, arg1: $SerializerFactory$Type): $DefaultSerializerProvider
public "getGenerator"(): $JsonGenerator
public "serializeValue"(arg0: $JsonGenerator$Type, arg1: any, arg2: $JavaType$Type, arg3: $JsonSerializer$Type<(any)>): void
public "serializeValue"(arg0: $JsonGenerator$Type, arg1: any): void
public "serializeValue"(arg0: $JsonGenerator$Type, arg1: any, arg2: $JavaType$Type): void
/**
 * 
 * @deprecated
 */
public "generateJsonSchema"(arg0: $Class$Type<(any)>): $JsonSchema
public "hasSerializerFor"(arg0: $Class$Type<(any)>, arg1: $AtomicReference$Type<($Throwable$Type)>): boolean
public "findObjectId"(arg0: any, arg1: $ObjectIdGenerator$Type<(any)>): $WritableObjectId
public "serializerInstance"(arg0: $Annotated$Type, arg1: any): $JsonSerializer<(any)>
public "includeFilterInstance"(arg0: $BeanPropertyDefinition$Type, arg1: $Class$Type<(any)>): any
public "cachedSerializersCount"(): integer
public "flushCachedSerializers"(): void
public "serializePolymorphic"(arg0: $JsonGenerator$Type, arg1: any, arg2: $JavaType$Type, arg3: $JsonSerializer$Type<(any)>, arg4: $TypeSerializer$Type): void
public "includeFilterSuppressNulls"(arg0: any): boolean
public "acceptJsonFormatVisitor"(arg0: $JavaType$Type, arg1: $JsonFormatVisitorWrapper$Type): void
get "generator"(): $JsonGenerator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultSerializerProvider$Type = ($DefaultSerializerProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultSerializerProvider_ = $DefaultSerializerProvider$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JsonAutoDetect$Visibility, $JsonAutoDetect$Visibility$Type} from "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect$Visibility"

export interface $JsonAutoDetect extends $Annotation {

 "fieldVisibility"(): $JsonAutoDetect$Visibility
 "setterVisibility"(): $JsonAutoDetect$Visibility
 "getterVisibility"(): $JsonAutoDetect$Visibility
 "isGetterVisibility"(): $JsonAutoDetect$Visibility
 "creatorVisibility"(): $JsonAutoDetect$Visibility
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $JsonAutoDetect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonAutoDetect$Type = ($JsonAutoDetect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonAutoDetect_ = $JsonAutoDetect$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/type/$LogicalType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $LogicalType extends $Enum<($LogicalType)> {
static readonly "Array": $LogicalType
static readonly "Collection": $LogicalType
static readonly "Map": $LogicalType
static readonly "POJO": $LogicalType
static readonly "Untyped": $LogicalType
static readonly "Integer": $LogicalType
static readonly "Float": $LogicalType
static readonly "Boolean": $LogicalType
static readonly "Enum": $LogicalType
static readonly "Textual": $LogicalType
static readonly "Binary": $LogicalType
static readonly "DateTime": $LogicalType
static readonly "OtherScalar": $LogicalType


public static "values"(): ($LogicalType)[]
public static "valueOf"(arg0: string): $LogicalType
public static "fromClass"(arg0: $Class$Type<(any)>, arg1: $LogicalType$Type): $LogicalType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicalType$Type = (("otherscalar") | ("collection") | ("integer") | ("float") | ("enum") | ("textual") | ("pojo") | ("datetime") | ("boolean") | ("array") | ("binary") | ("untyped") | ("map")) | ($LogicalType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicalType_ = $LogicalType$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JacksonInject$Value" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JacksonInject, $JacksonInject$Type} from "packages/com/fasterxml/jackson/annotation/$JacksonInject"
import {$JacksonAnnotationValue, $JacksonAnnotationValue$Type} from "packages/com/fasterxml/jackson/annotation/$JacksonAnnotationValue"

export class $JacksonInject$Value implements $JacksonAnnotationValue<($JacksonInject)>, $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"(arg0: $JacksonInject$Type): $JacksonInject$Value
public static "empty"(): $JacksonInject$Value
public "getId"(): any
public static "construct"(arg0: any, arg1: boolean): $JacksonInject$Value
public "hasId"(): boolean
public "withId"(arg0: any): $JacksonInject$Value
public static "forId"(arg0: any): $JacksonInject$Value
public "valueFor"(): $Class<($JacksonInject)>
public "willUseInput"(arg0: boolean): boolean
public "getUseInput"(): boolean
public "withUseInput"(arg0: boolean): $JacksonInject$Value
get "id"(): any
get "useInput"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JacksonInject$Value$Type = ($JacksonInject$Value);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JacksonInject$Value_ = $JacksonInject$Value$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$ContextualSerializer" {
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"

export interface $ContextualSerializer {

 "createContextual"(arg0: $SerializerProvider$Type, arg1: $BeanProperty$Type): $JsonSerializer<(any)>

(arg0: $SerializerProvider$Type, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
}

export namespace $ContextualSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextualSerializer$Type = ($ContextualSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextualSerializer_ = $ContextualSerializer$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$TreeCodec" {
import {$TreeNode, $TreeNode$Type} from "packages/com/fasterxml/jackson/core/$TreeNode"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"

export class $TreeCodec {

constructor()

public "readTree"<T extends $TreeNode>(arg0: $JsonParser$Type): T
public "missingNode"(): $TreeNode
public "writeTree"(arg0: $JsonGenerator$Type, arg1: $TreeNode$Type): void
public "nullNode"(): $TreeNode
public "createArrayNode"(): $TreeNode
public "createObjectNode"(): $TreeNode
public "treeAsTokens"(arg0: $TreeNode$Type): $JsonParser
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeCodec$Type = ($TreeCodec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeCodec_ = $TreeCodec$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonFactory" {
import {$StreamWriteFeature, $StreamWriteFeature$Type} from "packages/com/fasterxml/jackson/core/$StreamWriteFeature"
import {$DataInput, $DataInput$Type} from "packages/java/io/$DataInput"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$JsonGenerator$Feature, $JsonGenerator$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator$Feature"
import {$JsonFactory$Feature, $JsonFactory$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory$Feature"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$TokenStreamFactory, $TokenStreamFactory$Type} from "packages/com/fasterxml/jackson/core/$TokenStreamFactory"
import {$FormatSchema, $FormatSchema$Type} from "packages/com/fasterxml/jackson/core/$FormatSchema"
import {$BufferRecycler, $BufferRecycler$Type} from "packages/com/fasterxml/jackson/core/util/$BufferRecycler"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$File, $File$Type} from "packages/java/io/$File"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$JsonEncoding, $JsonEncoding$Type} from "packages/com/fasterxml/jackson/core/$JsonEncoding"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"
import {$OutputDecorator, $OutputDecorator$Type} from "packages/com/fasterxml/jackson/core/io/$OutputDecorator"
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$StreamReadFeature, $StreamReadFeature$Type} from "packages/com/fasterxml/jackson/core/$StreamReadFeature"
import {$InputAccessor, $InputAccessor$Type} from "packages/com/fasterxml/jackson/core/format/$InputAccessor"
import {$InputDecorator, $InputDecorator$Type} from "packages/com/fasterxml/jackson/core/io/$InputDecorator"
import {$MatchStrength, $MatchStrength$Type} from "packages/com/fasterxml/jackson/core/format/$MatchStrength"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$DataOutput, $DataOutput$Type} from "packages/java/io/$DataOutput"
import {$JsonFactoryBuilder, $JsonFactoryBuilder$Type} from "packages/com/fasterxml/jackson/core/$JsonFactoryBuilder"
import {$Versioned, $Versioned$Type} from "packages/com/fasterxml/jackson/core/$Versioned"
import {$TSFBuilder, $TSFBuilder$Type} from "packages/com/fasterxml/jackson/core/$TSFBuilder"
import {$JsonParser$Feature, $JsonParser$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$Feature"
import {$CharacterEscapes, $CharacterEscapes$Type} from "packages/com/fasterxml/jackson/core/io/$CharacterEscapes"

export class $JsonFactory extends $TokenStreamFactory implements $Versioned, $Serializable {
static readonly "FORMAT_NAME_JSON": string
static readonly "DEFAULT_ROOT_VALUE_SEPARATOR": $SerializableString
static readonly "DEFAULT_QUOTE_CHAR": character

constructor(arg0: $JsonFactoryBuilder$Type)
constructor(arg0: $ObjectCodec$Type)
constructor()

public "version"(): $Version
public static "builder"(): $TSFBuilder<(any), (any)>
public "copy"(): $JsonFactory
/**
 * 
 * @deprecated
 */
public "enable"(arg0: $JsonFactory$Feature$Type): $JsonFactory
public "enable"(arg0: $JsonGenerator$Feature$Type): $JsonFactory
public "enable"(arg0: $JsonParser$Feature$Type): $JsonFactory
public "isEnabled"(arg0: $JsonParser$Feature$Type): boolean
public "isEnabled"(arg0: $StreamWriteFeature$Type): boolean
public "isEnabled"(arg0: $JsonGenerator$Feature$Type): boolean
public "isEnabled"(arg0: $JsonFactory$Feature$Type): boolean
public "isEnabled"(arg0: $StreamReadFeature$Type): boolean
/**
 * 
 * @deprecated
 */
public "configure"(arg0: $JsonFactory$Feature$Type, arg1: boolean): $JsonFactory
public "configure"(arg0: $JsonGenerator$Feature$Type, arg1: boolean): $JsonFactory
public "configure"(arg0: $JsonParser$Feature$Type, arg1: boolean): $JsonFactory
public "disable"(arg0: $JsonGenerator$Feature$Type): $JsonFactory
/**
 * 
 * @deprecated
 */
public "disable"(arg0: $JsonFactory$Feature$Type): $JsonFactory
public "disable"(arg0: $JsonParser$Feature$Type): $JsonFactory
public "createParser"(arg0: (character)[]): $JsonParser
public "createParser"(arg0: $File$Type): $JsonParser
public "createParser"(arg0: (character)[], arg1: integer, arg2: integer): $JsonParser
public "createParser"(arg0: $DataInput$Type): $JsonParser
public "createParser"(arg0: $InputStream$Type): $JsonParser
public "createParser"(arg0: $Reader$Type): $JsonParser
public "createParser"(arg0: (byte)[]): $JsonParser
public "createParser"(arg0: (byte)[], arg1: integer, arg2: integer): $JsonParser
public "createParser"(arg0: string): $JsonParser
public "createParser"(arg0: $URL$Type): $JsonParser
public "getCodec"(): $ObjectCodec
public "rebuild"(): $TSFBuilder<(any), (any)>
public "getFormatName"(): string
public "createGenerator"(arg0: $OutputStream$Type): $JsonGenerator
public "createGenerator"(arg0: $DataOutput$Type): $JsonGenerator
public "createGenerator"(arg0: $DataOutput$Type, arg1: $JsonEncoding$Type): $JsonGenerator
public "createGenerator"(arg0: $OutputStream$Type, arg1: $JsonEncoding$Type): $JsonGenerator
public "createGenerator"(arg0: $File$Type, arg1: $JsonEncoding$Type): $JsonGenerator
public "createGenerator"(arg0: $Writer$Type): $JsonGenerator
public "setCodec"(arg0: $ObjectCodec$Type): $JsonFactory
public "_getBufferRecycler"(): $BufferRecycler
public "canUseSchema"(arg0: $FormatSchema$Type): boolean
public "canParseAsync"(): boolean
public "getParserFeatures"(): integer
/**
 * 
 * @deprecated
 */
public "setOutputDecorator"(arg0: $OutputDecorator$Type): $JsonFactory
public "getInputDecorator"(): $InputDecorator
public "canUseCharArrays"(): boolean
public "hasFormat"(arg0: $InputAccessor$Type): $MatchStrength
public "getOutputDecorator"(): $OutputDecorator
/**
 * 
 * @deprecated
 */
public "setInputDecorator"(arg0: $InputDecorator$Type): $JsonFactory
/**
 * 
 * @deprecated
 */
public "createJsonParser"(arg0: $URL$Type): $JsonParser
/**
 * 
 * @deprecated
 */
public "createJsonParser"(arg0: $File$Type): $JsonParser
/**
 * 
 * @deprecated
 */
public "createJsonParser"(arg0: string): $JsonParser
/**
 * 
 * @deprecated
 */
public "createJsonParser"(arg0: $Reader$Type): $JsonParser
/**
 * 
 * @deprecated
 */
public "createJsonParser"(arg0: $InputStream$Type): $JsonParser
/**
 * 
 * @deprecated
 */
public "createJsonParser"(arg0: (byte)[]): $JsonParser
/**
 * 
 * @deprecated
 */
public "createJsonParser"(arg0: (byte)[], arg1: integer, arg2: integer): $JsonParser
public "createNonBlockingByteArrayParser"(): $JsonParser
public "requiresPropertyOrdering"(): boolean
public "setRootValueSeparator"(arg0: string): $JsonFactory
public "getFormatParserFeatures"(): integer
public "getRootValueSeparator"(): string
public "setCharacterEscapes"(arg0: $CharacterEscapes$Type): $JsonFactory
public "getFormatReadFeatureType"(): $Class<(any)>
public "getFormatWriteFeatureType"(): $Class<(any)>
public "getCharacterEscapes"(): $CharacterEscapes
public "canHandleBinaryNatively"(): boolean
public "createNonBlockingByteBufferParser"(): $JsonParser
public "requiresCustomCodec"(): boolean
public "getFormatGeneratorFeatures"(): integer
/**
 * 
 * @deprecated
 */
public "createJsonGenerator"(arg0: $OutputStream$Type, arg1: $JsonEncoding$Type): $JsonGenerator
/**
 * 
 * @deprecated
 */
public "createJsonGenerator"(arg0: $OutputStream$Type): $JsonGenerator
/**
 * 
 * @deprecated
 */
public "createJsonGenerator"(arg0: $Writer$Type): $JsonGenerator
public "getGeneratorFeatures"(): integer
get "codec"(): $ObjectCodec
get "formatName"(): string
set "codec"(value: $ObjectCodec$Type)
get "parserFeatures"(): integer
set "outputDecorator"(value: $OutputDecorator$Type)
get "inputDecorator"(): $InputDecorator
get "outputDecorator"(): $OutputDecorator
set "inputDecorator"(value: $InputDecorator$Type)
set "rootValueSeparator"(value: string)
get "formatParserFeatures"(): integer
get "rootValueSeparator"(): string
set "characterEscapes"(value: $CharacterEscapes$Type)
get "formatReadFeatureType"(): $Class<(any)>
get "formatWriteFeatureType"(): $Class<(any)>
get "characterEscapes"(): $CharacterEscapes
get "formatGeneratorFeatures"(): integer
get "generatorFeatures"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFactory$Type = ($JsonFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFactory_ = $JsonFactory$Type;
}}
declare module "packages/com/fasterxml/jackson/core/format/$MatchStrength" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MatchStrength extends $Enum<($MatchStrength)> {
static readonly "NO_MATCH": $MatchStrength
static readonly "INCONCLUSIVE": $MatchStrength
static readonly "WEAK_MATCH": $MatchStrength
static readonly "SOLID_MATCH": $MatchStrength
static readonly "FULL_MATCH": $MatchStrength


public static "values"(): ($MatchStrength)[]
public static "valueOf"(arg0: string): $MatchStrength
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatchStrength$Type = (("inconclusive") | ("weak_match") | ("solid_match") | ("full_match") | ("no_match")) | ($MatchStrength);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatchStrength_ = $MatchStrength$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$FormatFeature" {
import {$JacksonFeature, $JacksonFeature$Type} from "packages/com/fasterxml/jackson/core/util/$JacksonFeature"

export interface $FormatFeature extends $JacksonFeature {

 "getMask"(): integer
 "enabledByDefault"(): boolean
 "enabledIn"(arg0: integer): boolean
}

export namespace $FormatFeature {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormatFeature$Type = ($FormatFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FormatFeature_ = $FormatFeature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$ContextAttributes" {
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ContextAttributes {

constructor()

public "getAttribute"(arg0: any): any
public static "getEmpty"(): $ContextAttributes
public "withSharedAttribute"(arg0: any, arg1: any): $ContextAttributes
public "withoutSharedAttribute"(arg0: any): $ContextAttributes
public "withSharedAttributes"(arg0: $Map$Type<(any), (any)>): $ContextAttributes
public "withPerCallAttribute"(arg0: any, arg1: any): $ContextAttributes
get "empty"(): $ContextAttributes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextAttributes$Type = ($ContextAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextAttributes_ = $ContextAttributes$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$BeanPropertyWriter" {
import {$JsonObjectFormatVisitor, $JsonObjectFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonObjectFormatVisitor"
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$SerializationConfig, $SerializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$SerializationConfig"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$PropertyWriter, $PropertyWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/$PropertyWriter"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$NameTransformer, $NameTransformer$Type} from "packages/com/fasterxml/jackson/databind/util/$NameTransformer"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$ObjectNode, $ObjectNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ObjectNode"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$BeanPropertyDefinition, $BeanPropertyDefinition$Type} from "packages/com/fasterxml/jackson/databind/introspect/$BeanPropertyDefinition"
import {$Annotations, $Annotations$Type} from "packages/com/fasterxml/jackson/databind/util/$Annotations"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"

export class $BeanPropertyWriter extends $PropertyWriter implements $Serializable {
static readonly "MARKER_FOR_EMPTY": any

constructor(arg0: $BeanPropertyDefinition$Type, arg1: $AnnotatedMember$Type, arg2: $Annotations$Type, arg3: $JavaType$Type, arg4: $JsonSerializer$Type<(any)>, arg5: $TypeSerializer$Type, arg6: $JavaType$Type, arg7: boolean, arg8: any, arg9: ($Class$Type<(any)>)[])
/**
 * 
 * @deprecated
 */
constructor(arg0: $BeanPropertyDefinition$Type, arg1: $AnnotatedMember$Type, arg2: $Annotations$Type, arg3: $JavaType$Type, arg4: $JsonSerializer$Type<(any)>, arg5: $TypeSerializer$Type, arg6: $JavaType$Type, arg7: boolean, arg8: any)

public "getName"(): string
public "get"(arg0: any): any
public "toString"(): string
public "getAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "getType"(): $JavaType
public "rename"(arg0: $NameTransformer$Type): $BeanPropertyWriter
public "getFullName"(): $PropertyName
public "getMember"(): $AnnotatedMember
/**
 * 
 * @deprecated
 */
public "getPropertyType"(): $Class<(any)>
public "getSerializationType"(): $JavaType
public "getSerializer"(): $JsonSerializer<(any)>
public "getWrapperName"(): $PropertyName
public "getViews"(): ($Class<(any)>)[]
public "getTypeSerializer"(): $TypeSerializer
public "wouldConflictWithName"(arg0: $PropertyName$Type): boolean
public "assignTypeSerializer"(arg0: $TypeSerializer$Type): void
public "serializeAsElement"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "serializeAsField"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "unwrappingWriter"(arg0: $NameTransformer$Type): $BeanPropertyWriter
public "getInternalSetting"(arg0: any): any
public "setInternalSetting"(arg0: any, arg1: any): any
public "assignSerializer"(arg0: $JsonSerializer$Type<(any)>): void
public "hasNullSerializer"(): boolean
public "hasSerializer"(): boolean
public "isUnwrapping"(): boolean
public "willSuppressNulls"(): boolean
public "assignNullSerializer"(arg0: $JsonSerializer$Type<(any)>): void
/**
 * 
 * @deprecated
 */
public "getRawSerializationType"(): $Class<(any)>
/**
 * 
 * @deprecated
 */
public "depositSchemaProperty"(arg0: $ObjectNode$Type, arg1: $SerializerProvider$Type): void
public "depositSchemaProperty"(arg0: $JsonObjectFormatVisitor$Type, arg1: $SerializerProvider$Type): void
public "setNonTrivialBaseType"(arg0: $JavaType$Type): void
public "serializeAsOmittedField"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
/**
 * 
 * @deprecated
 */
public "getGenericPropertyType"(): $Type
public "removeInternalSetting"(arg0: any): any
public "serializeAsPlaceholder"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "getContextAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "getSerializedName"(): $SerializableString
public "fixAccess"(arg0: $SerializationConfig$Type): void
get "name"(): string
get "type"(): $JavaType
get "fullName"(): $PropertyName
get "member"(): $AnnotatedMember
get "propertyType"(): $Class<(any)>
get "serializationType"(): $JavaType
get "serializer"(): $JsonSerializer<(any)>
get "wrapperName"(): $PropertyName
get "views"(): ($Class<(any)>)[]
get "typeSerializer"(): $TypeSerializer
get "unwrapping"(): boolean
get "rawSerializationType"(): $Class<(any)>
set "nonTrivialBaseType"(value: $JavaType$Type)
get "genericPropertyType"(): $Type
get "serializedName"(): $SerializableString
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeanPropertyWriter$Type = ($BeanPropertyWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeanPropertyWriter_ = $BeanPropertyWriter$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$ObjectWriter$Prefetch" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ObjectWriter, $ObjectWriter$Type} from "packages/com/fasterxml/jackson/databind/$ObjectWriter"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$DefaultSerializerProvider, $DefaultSerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/ser/$DefaultSerializerProvider"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"

export class $ObjectWriter$Prefetch implements $Serializable {
static readonly "empty": $ObjectWriter$Prefetch


public "serialize"(arg0: $JsonGenerator$Type, arg1: any, arg2: $DefaultSerializerProvider$Type): void
public "getTypeSerializer"(): $TypeSerializer
public "hasSerializer"(): boolean
public "forRootType"(arg0: $ObjectWriter$Type, arg1: $JavaType$Type): $ObjectWriter$Prefetch
public "getValueSerializer"(): $JsonSerializer<(any)>
get "typeSerializer"(): $TypeSerializer
get "valueSerializer"(): $JsonSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectWriter$Prefetch$Type = ($ObjectWriter$Prefetch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectWriter$Prefetch_ = $ObjectWriter$Prefetch$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$JsonNodeType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonNodeType extends $Enum<($JsonNodeType)> {
static readonly "ARRAY": $JsonNodeType
static readonly "BINARY": $JsonNodeType
static readonly "BOOLEAN": $JsonNodeType
static readonly "MISSING": $JsonNodeType
static readonly "NULL": $JsonNodeType
static readonly "NUMBER": $JsonNodeType
static readonly "OBJECT": $JsonNodeType
static readonly "POJO": $JsonNodeType
static readonly "STRING": $JsonNodeType


public static "values"(): ($JsonNodeType)[]
public static "valueOf"(arg0: string): $JsonNodeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNodeType$Type = (("pojo") | ("number") | ("boolean") | ("null") | ("string") | ("array") | ("binary") | ("missing") | ("object")) | ($JsonNodeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonNodeType_ = $JsonNodeType$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonValueFormat" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonValueFormat extends $Enum<($JsonValueFormat)> {
static readonly "COLOR": $JsonValueFormat
static readonly "DATE": $JsonValueFormat
static readonly "DATE_TIME": $JsonValueFormat
static readonly "EMAIL": $JsonValueFormat
static readonly "HOST_NAME": $JsonValueFormat
static readonly "IP_ADDRESS": $JsonValueFormat
static readonly "IPV6": $JsonValueFormat
static readonly "PHONE": $JsonValueFormat
static readonly "REGEX": $JsonValueFormat
static readonly "STYLE": $JsonValueFormat
static readonly "TIME": $JsonValueFormat
static readonly "URI": $JsonValueFormat
static readonly "UTC_MILLISEC": $JsonValueFormat
static readonly "UUID": $JsonValueFormat


public "toString"(): string
public static "values"(): ($JsonValueFormat)[]
public static "valueOf"(arg0: string): $JsonValueFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonValueFormat$Type = (("date") | ("color") | ("utc_millisec") | ("ip_address") | ("uri") | ("uuid") | ("regex") | ("date_time") | ("phone") | ("ipv6") | ("style") | ("time") | ("email") | ("host_name")) | ($JsonValueFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonValueFormat_ = $JsonValueFormat$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWrapper" {
import {$JsonObjectFormatVisitor, $JsonObjectFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonObjectFormatVisitor"
import {$JsonFormatVisitorWithSerializerProvider, $JsonFormatVisitorWithSerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWithSerializerProvider"
import {$JsonMapFormatVisitor, $JsonMapFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonMapFormatVisitor"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonAnyFormatVisitor, $JsonAnyFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonAnyFormatVisitor"
import {$JsonStringFormatVisitor, $JsonStringFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonStringFormatVisitor"
import {$JsonArrayFormatVisitor, $JsonArrayFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonArrayFormatVisitor"
import {$JsonNumberFormatVisitor, $JsonNumberFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonNumberFormatVisitor"
import {$JsonNullFormatVisitor, $JsonNullFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonNullFormatVisitor"
import {$JsonBooleanFormatVisitor, $JsonBooleanFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonBooleanFormatVisitor"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$JsonIntegerFormatVisitor, $JsonIntegerFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonIntegerFormatVisitor"

export interface $JsonFormatVisitorWrapper extends $JsonFormatVisitorWithSerializerProvider {

 "expectIntegerFormat"(arg0: $JavaType$Type): $JsonIntegerFormatVisitor
 "expectMapFormat"(arg0: $JavaType$Type): $JsonMapFormatVisitor
 "expectBooleanFormat"(arg0: $JavaType$Type): $JsonBooleanFormatVisitor
 "expectAnyFormat"(arg0: $JavaType$Type): $JsonAnyFormatVisitor
 "expectNumberFormat"(arg0: $JavaType$Type): $JsonNumberFormatVisitor
 "expectStringFormat"(arg0: $JavaType$Type): $JsonStringFormatVisitor
 "expectArrayFormat"(arg0: $JavaType$Type): $JsonArrayFormatVisitor
 "expectNullFormat"(arg0: $JavaType$Type): $JsonNullFormatVisitor
 "expectObjectFormat"(arg0: $JavaType$Type): $JsonObjectFormatVisitor
 "getProvider"(): $SerializerProvider
 "setProvider"(arg0: $SerializerProvider$Type): void
}

export namespace $JsonFormatVisitorWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFormatVisitorWrapper$Type = ($JsonFormatVisitorWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFormatVisitorWrapper_ = $JsonFormatVisitorWrapper$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$PropertyWriter" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$JsonObjectFormatVisitor, $JsonObjectFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonObjectFormatVisitor"
import {$ObjectNode, $ObjectNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ObjectNode"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$ConcreteBeanPropertyBase, $ConcreteBeanPropertyBase$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ConcreteBeanPropertyBase"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"

export class $PropertyWriter extends $ConcreteBeanPropertyBase implements $Serializable {


public "getName"(): string
public "getAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "getFullName"(): $PropertyName
public "findAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "serializeAsElement"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "serializeAsField"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "depositSchemaProperty"(arg0: $JsonObjectFormatVisitor$Type, arg1: $SerializerProvider$Type): void
/**
 * 
 * @deprecated
 */
public "depositSchemaProperty"(arg0: $ObjectNode$Type, arg1: $SerializerProvider$Type): void
public "serializeAsOmittedField"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "serializeAsPlaceholder"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "getContextAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
get "name"(): string
get "fullName"(): $PropertyName
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyWriter$Type = ($PropertyWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyWriter_ = $PropertyWriter$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$AnyGetterWriter" {
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$SerializationConfig, $SerializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$SerializationConfig"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$PropertyFilter, $PropertyFilter$Type} from "packages/com/fasterxml/jackson/databind/ser/$PropertyFilter"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"

export class $AnyGetterWriter {

constructor(arg0: $BeanProperty$Type, arg1: $AnnotatedMember$Type, arg2: $JsonSerializer$Type<(any)>)

public "resolve"(arg0: $SerializerProvider$Type): void
public "getAndSerialize"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "getAndFilter"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type, arg3: $PropertyFilter$Type): void
public "fixAccess"(arg0: $SerializationConfig$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnyGetterWriter$Type = ($AnyGetterWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnyGetterWriter_ = $AnyGetterWriter$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$LookupCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LookupCache<K, V> {

 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "clear"(): void
 "size"(): integer
 "putIfAbsent"(arg0: K, arg1: V): V
}

export namespace $LookupCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LookupCache$Type<K, V> = ($LookupCache<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LookupCache_<K, V> = $LookupCache$Type<(K), (V)>;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$CoercionAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CoercionAction extends $Enum<($CoercionAction)> {
static readonly "Fail": $CoercionAction
static readonly "TryConvert": $CoercionAction
static readonly "AsNull": $CoercionAction
static readonly "AsEmpty": $CoercionAction


public static "values"(): ($CoercionAction)[]
public static "valueOf"(arg0: string): $CoercionAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoercionAction$Type = (("fail") | ("asnull") | ("asempty") | ("tryconvert")) | ($CoercionAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoercionAction_ = $CoercionAction$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect$Visibility" {
import {$Member, $Member$Type} from "packages/java/lang/reflect/$Member"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonAutoDetect$Visibility extends $Enum<($JsonAutoDetect$Visibility)> {
static readonly "ANY": $JsonAutoDetect$Visibility
static readonly "NON_PRIVATE": $JsonAutoDetect$Visibility
static readonly "PROTECTED_AND_PUBLIC": $JsonAutoDetect$Visibility
static readonly "PUBLIC_ONLY": $JsonAutoDetect$Visibility
static readonly "NONE": $JsonAutoDetect$Visibility
static readonly "DEFAULT": $JsonAutoDetect$Visibility


public static "values"(): ($JsonAutoDetect$Visibility)[]
public static "valueOf"(arg0: string): $JsonAutoDetect$Visibility
public "isVisible"(arg0: $Member$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonAutoDetect$Visibility$Type = (("protected_and_public") | ("default") | ("non_private") | ("none") | ("any") | ("public_only")) | ($JsonAutoDetect$Visibility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonAutoDetect$Visibility_ = $JsonAutoDetect$Visibility$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$MutableCoercionConfig" {
import {$CoercionAction, $CoercionAction$Type} from "packages/com/fasterxml/jackson/databind/cfg/$CoercionAction"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$CoercionConfig, $CoercionConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$CoercionConfig"
import {$CoercionInputShape, $CoercionInputShape$Type} from "packages/com/fasterxml/jackson/databind/cfg/$CoercionInputShape"

export class $MutableCoercionConfig extends $CoercionConfig implements $Serializable {

constructor()

public "copy"(): $MutableCoercionConfig
public "setCoercion"(arg0: $CoercionInputShape$Type, arg1: $CoercionAction$Type): $MutableCoercionConfig
public "setAcceptBlankAsEmpty"(arg0: boolean): $MutableCoercionConfig
set "acceptBlankAsEmpty"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableCoercionConfig$Type = ($MutableCoercionConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableCoercionConfig_ = $MutableCoercionConfig$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsontype/$SubtypeResolver" {
import {$NamedType, $NamedType$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$NamedType"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$AnnotatedClass, $AnnotatedClass$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedClass"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"

export class $SubtypeResolver {

constructor()

public "copy"(): $SubtypeResolver
public "registerSubtypes"(...arg0: ($Class$Type<(any)>)[]): void
public "registerSubtypes"(arg0: $Collection$Type<($Class$Type<(any)>)>): void
public "registerSubtypes"(...arg0: ($NamedType$Type)[]): void
public "collectAndResolveSubtypesByClass"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedClass$Type): $Collection<($NamedType)>
public "collectAndResolveSubtypesByClass"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedMember$Type, arg2: $JavaType$Type): $Collection<($NamedType)>
public "collectAndResolveSubtypesByTypeId"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedClass$Type): $Collection<($NamedType)>
public "collectAndResolveSubtypesByTypeId"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedMember$Type, arg2: $JavaType$Type): $Collection<($NamedType)>
/**
 * 
 * @deprecated
 */
public "collectAndResolveSubtypes"(arg0: $AnnotatedMember$Type, arg1: $MapperConfig$Type<(any)>, arg2: $AnnotationIntrospector$Type, arg3: $JavaType$Type): $Collection<($NamedType)>
/**
 * 
 * @deprecated
 */
public "collectAndResolveSubtypes"(arg0: $AnnotatedClass$Type, arg1: $MapperConfig$Type<(any)>, arg2: $AnnotationIntrospector$Type): $Collection<($NamedType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubtypeResolver$Type = ($SubtypeResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SubtypeResolver_ = $SubtypeResolver$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedWithParams" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$AnnotationMap, $AnnotationMap$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotationMap"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$AnnotatedParameter, $AnnotatedParameter$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedParameter"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $AnnotatedWithParams extends $AnnotatedMember {


public "getParameterCount"(): integer
public "getParameterAnnotations"(arg0: integer): $AnnotationMap
public "call"(arg0: (any)[]): any
public "call"(): any
public "getParameter"(arg0: integer): $AnnotatedParameter
public "getParameterType"(arg0: integer): $JavaType
/**
 * 
 * @deprecated
 */
public "getGenericParameterType"(arg0: integer): $Type
public "getRawParameterType"(arg0: integer): $Class<(any)>
public "addOrOverrideParam"(arg0: integer, arg1: $Annotation$Type): void
public "getAnnotationCount"(): integer
public "call1"(arg0: any): any
get "parameterCount"(): integer
get "annotationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedWithParams$Type = ($AnnotatedWithParams);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotatedWithParams_ = $AnnotatedWithParams$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$DeserializationFeature" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfigFeature, $ConfigFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConfigFeature"

export class $DeserializationFeature extends $Enum<($DeserializationFeature)> implements $ConfigFeature {
static readonly "USE_BIG_DECIMAL_FOR_FLOATS": $DeserializationFeature
static readonly "USE_BIG_INTEGER_FOR_INTS": $DeserializationFeature
static readonly "USE_LONG_FOR_INTS": $DeserializationFeature
static readonly "USE_JAVA_ARRAY_FOR_JSON_ARRAY": $DeserializationFeature
static readonly "FAIL_ON_UNKNOWN_PROPERTIES": $DeserializationFeature
static readonly "FAIL_ON_NULL_FOR_PRIMITIVES": $DeserializationFeature
static readonly "FAIL_ON_NUMBERS_FOR_ENUMS": $DeserializationFeature
static readonly "FAIL_ON_INVALID_SUBTYPE": $DeserializationFeature
static readonly "FAIL_ON_READING_DUP_TREE_KEY": $DeserializationFeature
static readonly "FAIL_ON_IGNORED_PROPERTIES": $DeserializationFeature
static readonly "FAIL_ON_UNRESOLVED_OBJECT_IDS": $DeserializationFeature
static readonly "FAIL_ON_MISSING_CREATOR_PROPERTIES": $DeserializationFeature
static readonly "FAIL_ON_NULL_CREATOR_PROPERTIES": $DeserializationFeature
static readonly "FAIL_ON_MISSING_EXTERNAL_TYPE_ID_PROPERTY": $DeserializationFeature
static readonly "FAIL_ON_TRAILING_TOKENS": $DeserializationFeature
static readonly "WRAP_EXCEPTIONS": $DeserializationFeature
static readonly "ACCEPT_SINGLE_VALUE_AS_ARRAY": $DeserializationFeature
static readonly "UNWRAP_SINGLE_VALUE_ARRAYS": $DeserializationFeature
static readonly "UNWRAP_ROOT_VALUE": $DeserializationFeature
static readonly "ACCEPT_EMPTY_STRING_AS_NULL_OBJECT": $DeserializationFeature
static readonly "ACCEPT_EMPTY_ARRAY_AS_NULL_OBJECT": $DeserializationFeature
static readonly "ACCEPT_FLOAT_AS_INT": $DeserializationFeature
static readonly "READ_ENUMS_USING_TO_STRING": $DeserializationFeature
static readonly "READ_UNKNOWN_ENUM_VALUES_AS_NULL": $DeserializationFeature
static readonly "READ_UNKNOWN_ENUM_VALUES_USING_DEFAULT_VALUE": $DeserializationFeature
static readonly "READ_DATE_TIMESTAMPS_AS_NANOSECONDS": $DeserializationFeature
static readonly "ADJUST_DATES_TO_CONTEXT_TIME_ZONE": $DeserializationFeature
static readonly "EAGER_DESERIALIZER_FETCH": $DeserializationFeature


public static "values"(): ($DeserializationFeature)[]
public static "valueOf"(arg0: string): $DeserializationFeature
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "enabledIn"(arg0: integer): boolean
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeserializationFeature$Type = (("read_date_timestamps_as_nanoseconds") | ("fail_on_missing_creator_properties") | ("adjust_dates_to_context_time_zone") | ("fail_on_null_for_primitives") | ("fail_on_unresolved_object_ids") | ("accept_empty_array_as_null_object") | ("use_long_for_ints") | ("fail_on_ignored_properties") | ("accept_single_value_as_array") | ("fail_on_reading_dup_tree_key") | ("unwrap_root_value") | ("unwrap_single_value_arrays") | ("accept_float_as_int") | ("read_enums_using_to_string") | ("use_big_decimal_for_floats") | ("read_unknown_enum_values_using_default_value") | ("read_unknown_enum_values_as_null") | ("fail_on_missing_external_type_id_property") | ("accept_empty_string_as_null_object") | ("fail_on_null_creator_properties") | ("fail_on_unknown_properties") | ("wrap_exceptions") | ("fail_on_invalid_subtype") | ("fail_on_trailing_tokens") | ("eager_deserializer_fetch") | ("use_java_array_for_json_array") | ("fail_on_numbers_for_enums") | ("use_big_integer_for_ints")) | ($DeserializationFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeserializationFeature_ = $DeserializationFeature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$BeanPropertyDefinition" {
import {$ObjectIdInfo, $ObjectIdInfo$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ObjectIdInfo"
import {$Named, $Named$Type} from "packages/com/fasterxml/jackson/databind/util/$Named"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AnnotatedParameter, $AnnotatedParameter$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedParameter"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$AnnotationIntrospector$ReferenceProperty, $AnnotationIntrospector$ReferenceProperty$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector$ReferenceProperty"
import {$AnnotatedField, $AnnotatedField$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedField"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$AnnotatedMethod, $AnnotatedMethod$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMethod"
import {$PropertyMetadata, $PropertyMetadata$Type} from "packages/com/fasterxml/jackson/databind/$PropertyMetadata"

export class $BeanPropertyDefinition implements $Named {

constructor()

public "getName"(): string
public "getField"(): $AnnotatedField
public "getAccessor"(): $AnnotatedMember
public "getInternalName"(): string
public "getFullName"(): $PropertyName
public "hasName"(arg0: $PropertyName$Type): boolean
public "isRequired"(): boolean
public "withName"(arg0: $PropertyName$Type): $BeanPropertyDefinition
public "getGetter"(): $AnnotatedMethod
public "getSetter"(): $AnnotatedMethod
public "getMetadata"(): $PropertyMetadata
public "hasSetter"(): boolean
public "hasGetter"(): boolean
public "hasField"(): boolean
public "isExplicitlyNamed"(): boolean
public "couldSerialize"(): boolean
public "getWrapperName"(): $PropertyName
public "getRawPrimaryType"(): $Class<(any)>
public "findViews"(): ($Class<(any)>)[]
public "findObjectIdInfo"(): $ObjectIdInfo
public "findReferenceName"(): string
public "findReferenceType"(): $AnnotationIntrospector$ReferenceProperty
public "couldDeserialize"(): boolean
public "isTypeId"(): boolean
public "getConstructorParameters"(): $Iterator<($AnnotatedParameter)>
public "getNonConstructorMutator"(): $AnnotatedMember
public "hasConstructorParameter"(): boolean
public "isExplicitlyIncluded"(): boolean
public "withSimpleName"(arg0: string): $BeanPropertyDefinition
public "findInclusion"(): $JsonInclude$Value
public "getMutator"(): $AnnotatedMember
public "getPrimaryMember"(): $AnnotatedMember
public "getConstructorParameter"(): $AnnotatedParameter
public "getPrimaryType"(): $JavaType
get "name"(): string
get "field"(): $AnnotatedField
get "accessor"(): $AnnotatedMember
get "internalName"(): string
get "fullName"(): $PropertyName
get "required"(): boolean
get "getter"(): $AnnotatedMethod
get "setter"(): $AnnotatedMethod
get "metadata"(): $PropertyMetadata
get "explicitlyNamed"(): boolean
get "wrapperName"(): $PropertyName
get "rawPrimaryType"(): $Class<(any)>
get "typeId"(): boolean
get "constructorParameters"(): $Iterator<($AnnotatedParameter)>
get "nonConstructorMutator"(): $AnnotatedMember
get "explicitlyIncluded"(): boolean
get "mutator"(): $AnnotatedMember
get "primaryMember"(): $AnnotatedMember
get "constructorParameter"(): $AnnotatedParameter
get "primaryType"(): $JavaType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeanPropertyDefinition$Type = ($BeanPropertyDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeanPropertyDefinition_ = $BeanPropertyDefinition$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonFormat" {
import {$JsonFormat$Feature, $JsonFormat$Feature$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Feature"
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$OptBoolean, $OptBoolean$Type} from "packages/com/fasterxml/jackson/annotation/$OptBoolean"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JsonFormat$Shape, $JsonFormat$Shape$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Shape"

export interface $JsonFormat extends $Annotation {

 "locale"(): string
 "lenient"(): $OptBoolean
 "pattern"(): string
 "with"(): ($JsonFormat$Feature)[]
 "shape"(): $JsonFormat$Shape
 "without"(): ($JsonFormat$Feature)[]
 "timezone"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $JsonFormat {
const DEFAULT_LOCALE: string
const DEFAULT_TIMEZONE: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFormat$Type = ($JsonFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFormat_ = $JsonFormat$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$BinaryNode" {
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$ValueNode, $ValueNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ValueNode"
import {$JsonNodeType, $JsonNodeType$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeType"

export class $BinaryNode extends $ValueNode {

constructor(arg0: (byte)[])
constructor(arg0: (byte)[], arg1: integer, arg2: integer)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "valueOf"(arg0: (byte)[], arg1: integer, arg2: integer): $BinaryNode
public static "valueOf"(arg0: (byte)[]): $BinaryNode
public "getNodeType"(): $JsonNodeType
public "serialize"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type): void
public "asToken"(): $JsonToken
public "binaryValue"(): (byte)[]
public "asText"(): string
get "nodeType"(): $JsonNodeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BinaryNode$Type = ($BinaryNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BinaryNode_ = $BinaryNode$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonParser$NumberType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonParser$NumberType extends $Enum<($JsonParser$NumberType)> {
static readonly "INT": $JsonParser$NumberType
static readonly "LONG": $JsonParser$NumberType
static readonly "BIG_INTEGER": $JsonParser$NumberType
static readonly "FLOAT": $JsonParser$NumberType
static readonly "DOUBLE": $JsonParser$NumberType
static readonly "BIG_DECIMAL": $JsonParser$NumberType


public static "values"(): ($JsonParser$NumberType)[]
public static "valueOf"(arg0: string): $JsonParser$NumberType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonParser$NumberType$Type = (("big_decimal") | ("big_integer") | ("double") | ("float") | ("int") | ("long")) | ($JsonParser$NumberType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonParser$NumberType_ = $JsonParser$NumberType$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$ConfigOverrides" {
import {$JsonSetter$Value, $JsonSetter$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonSetter$Value"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ConfigOverride, $ConfigOverride$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConfigOverride"
import {$VisibilityChecker, $VisibilityChecker$Type} from "packages/com/fasterxml/jackson/databind/introspect/$VisibilityChecker"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$MutableConfigOverride, $MutableConfigOverride$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MutableConfigOverride"

export class $ConfigOverrides implements $Serializable {

constructor()

public "copy"(): $ConfigOverrides
public "findFormatDefaults"(arg0: $Class$Type<(any)>): $JsonFormat$Value
public "findOverride"(arg0: $Class$Type<(any)>): $ConfigOverride
public "getDefaultLeniency"(): boolean
public "setDefaultLeniency"(arg0: boolean): void
public "getDefaultSetterInfo"(): $JsonSetter$Value
public "getDefaultInclusion"(): $JsonInclude$Value
public "getDefaultMergeable"(): boolean
public "setDefaultVisibility"(arg0: $VisibilityChecker$Type<(any)>): void
public "findOrCreateOverride"(arg0: $Class$Type<(any)>): $MutableConfigOverride
public "setDefaultInclusion"(arg0: $JsonInclude$Value$Type): void
public "getDefaultVisibility"(): $VisibilityChecker<(any)>
public "setDefaultSetterInfo"(arg0: $JsonSetter$Value$Type): void
public "setDefaultMergeable"(arg0: boolean): void
get "defaultLeniency"(): boolean
set "defaultLeniency"(value: boolean)
get "defaultSetterInfo"(): $JsonSetter$Value
get "defaultInclusion"(): $JsonInclude$Value
get "defaultMergeable"(): boolean
set "defaultVisibility"(value: $VisibilityChecker$Type<(any)>)
set "defaultInclusion"(value: $JsonInclude$Value$Type)
get "defaultVisibility"(): $VisibilityChecker<(any)>
set "defaultSetterInfo"(value: $JsonSetter$Value$Type)
set "defaultMergeable"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigOverrides$Type = ($ConfigOverrides);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigOverrides_ = $ConfigOverrides$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$PrettyPrinter" {
import {$Separators, $Separators$Type} from "packages/com/fasterxml/jackson/core/util/$Separators"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$SerializedString, $SerializedString$Type} from "packages/com/fasterxml/jackson/core/io/$SerializedString"

export interface $PrettyPrinter {

 "beforeArrayValues"(arg0: $JsonGenerator$Type): void
 "writeEndArray"(arg0: $JsonGenerator$Type, arg1: integer): void
 "writeStartArray"(arg0: $JsonGenerator$Type): void
 "writeStartObject"(arg0: $JsonGenerator$Type): void
 "writeEndObject"(arg0: $JsonGenerator$Type, arg1: integer): void
 "writeObjectFieldValueSeparator"(arg0: $JsonGenerator$Type): void
 "beforeObjectEntries"(arg0: $JsonGenerator$Type): void
 "writeRootValueSeparator"(arg0: $JsonGenerator$Type): void
 "writeArrayValueSeparator"(arg0: $JsonGenerator$Type): void
 "writeObjectEntrySeparator"(arg0: $JsonGenerator$Type): void
}

export namespace $PrettyPrinter {
const DEFAULT_SEPARATORS: $Separators
const DEFAULT_ROOT_VALUE_SEPARATOR: $SerializedString
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrettyPrinter$Type = ($PrettyPrinter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrettyPrinter_ = $PrettyPrinter$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$ObjectIdInfo" {
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $ObjectIdInfo {

constructor(arg0: $PropertyName$Type, arg1: $Class$Type<(any)>, arg2: $Class$Type<(any)>, arg3: $Class$Type<(any)>)

public "toString"(): string
public static "empty"(): $ObjectIdInfo
public "getScope"(): $Class<(any)>
public "getPropertyName"(): $PropertyName
public "withAlwaysAsId"(arg0: boolean): $ObjectIdInfo
public "getAlwaysAsId"(): boolean
public "getGeneratorType"(): $Class<(any)>
public "getResolverType"(): $Class<(any)>
get "scope"(): $Class<(any)>
get "propertyName"(): $PropertyName
get "alwaysAsId"(): boolean
get "generatorType"(): $Class<(any)>
get "resolverType"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectIdInfo$Type = ($ObjectIdInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectIdInfo_ = $ObjectIdInfo$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$DeserializerFactory" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$ArrayType, $ArrayType$Type} from "packages/com/fasterxml/jackson/databind/type/$ArrayType"
import {$KeyDeserializers, $KeyDeserializers$Type} from "packages/com/fasterxml/jackson/databind/deser/$KeyDeserializers"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$CollectionLikeType, $CollectionLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionLikeType"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$Deserializers, $Deserializers$Type} from "packages/com/fasterxml/jackson/databind/deser/$Deserializers"
import {$AbstractTypeResolver, $AbstractTypeResolver$Type} from "packages/com/fasterxml/jackson/databind/$AbstractTypeResolver"
import {$TypeDeserializer, $TypeDeserializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeDeserializer"
import {$ValueInstantiators, $ValueInstantiators$Type} from "packages/com/fasterxml/jackson/databind/deser/$ValueInstantiators"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"
import {$CollectionType, $CollectionType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionType"
import {$MapLikeType, $MapLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapLikeType"
import {$BeanDeserializerModifier, $BeanDeserializerModifier$Type} from "packages/com/fasterxml/jackson/databind/deser/$BeanDeserializerModifier"
import {$ValueInstantiator, $ValueInstantiator$Type} from "packages/com/fasterxml/jackson/databind/deser/$ValueInstantiator"
import {$ReferenceType, $ReferenceType$Type} from "packages/com/fasterxml/jackson/databind/type/$ReferenceType"
import {$MapType, $MapType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapType"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$KeyDeserializer, $KeyDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$KeyDeserializer"

export class $DeserializerFactory {

constructor()

public "mapAbstractType"(arg0: $DeserializationConfig$Type, arg1: $JavaType$Type): $JavaType
public "withAdditionalDeserializers"(arg0: $Deserializers$Type): $DeserializerFactory
public "withAdditionalKeyDeserializers"(arg0: $KeyDeserializers$Type): $DeserializerFactory
public "withDeserializerModifier"(arg0: $BeanDeserializerModifier$Type): $DeserializerFactory
public "withAbstractTypeResolver"(arg0: $AbstractTypeResolver$Type): $DeserializerFactory
public "withValueInstantiators"(arg0: $ValueInstantiators$Type): $DeserializerFactory
public "findValueInstantiator"(arg0: $DeserializationContext$Type, arg1: $BeanDescription$Type): $ValueInstantiator
public "createTreeDeserializer"(arg0: $DeserializationConfig$Type, arg1: $JavaType$Type, arg2: $BeanDescription$Type): $JsonDeserializer<(any)>
public "createCollectionDeserializer"(arg0: $DeserializationContext$Type, arg1: $CollectionType$Type, arg2: $BeanDescription$Type): $JsonDeserializer<(any)>
public "createEnumDeserializer"(arg0: $DeserializationContext$Type, arg1: $JavaType$Type, arg2: $BeanDescription$Type): $JsonDeserializer<(any)>
public "findTypeDeserializer"(arg0: $DeserializationConfig$Type, arg1: $JavaType$Type): $TypeDeserializer
public "hasExplicitDeserializerFor"(arg0: $DeserializationConfig$Type, arg1: $Class$Type<(any)>): boolean
public "createKeyDeserializer"(arg0: $DeserializationContext$Type, arg1: $JavaType$Type): $KeyDeserializer
public "createMapDeserializer"(arg0: $DeserializationContext$Type, arg1: $MapType$Type, arg2: $BeanDescription$Type): $JsonDeserializer<(any)>
public "createBeanDeserializer"(arg0: $DeserializationContext$Type, arg1: $JavaType$Type, arg2: $BeanDescription$Type): $JsonDeserializer<(any)>
public "createReferenceDeserializer"(arg0: $DeserializationContext$Type, arg1: $ReferenceType$Type, arg2: $BeanDescription$Type): $JsonDeserializer<(any)>
public "createCollectionLikeDeserializer"(arg0: $DeserializationContext$Type, arg1: $CollectionLikeType$Type, arg2: $BeanDescription$Type): $JsonDeserializer<(any)>
public "createArrayDeserializer"(arg0: $DeserializationContext$Type, arg1: $ArrayType$Type, arg2: $BeanDescription$Type): $JsonDeserializer<(any)>
public "createBuilderBasedDeserializer"(arg0: $DeserializationContext$Type, arg1: $JavaType$Type, arg2: $BeanDescription$Type, arg3: $Class$Type<(any)>): $JsonDeserializer<(any)>
public "createMapLikeDeserializer"(arg0: $DeserializationContext$Type, arg1: $MapLikeType$Type, arg2: $BeanDescription$Type): $JsonDeserializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeserializerFactory$Type = ($DeserializerFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeserializerFactory_ = $DeserializerFactory$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonInclude" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$JsonInclude$Include, $JsonInclude$Include$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Include"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $JsonInclude extends $Annotation {

 "value"(): $JsonInclude$Include
 "content"(): $JsonInclude$Include
 "valueFilter"(): $Class<(any)>
 "contentFilter"(): $Class<(any)>
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $JsonInclude {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonInclude$Type = ($JsonInclude);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonInclude_ = $JsonInclude$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$BeanDeserializerModifier" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$ArrayType, $ArrayType$Type} from "packages/com/fasterxml/jackson/databind/type/$ArrayType"
import {$BeanDeserializerBuilder, $BeanDeserializerBuilder$Type} from "packages/com/fasterxml/jackson/databind/deser/$BeanDeserializerBuilder"
import {$CollectionLikeType, $CollectionLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionLikeType"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"
import {$CollectionType, $CollectionType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionType"
import {$MapLikeType, $MapLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapLikeType"
import {$ReferenceType, $ReferenceType$Type} from "packages/com/fasterxml/jackson/databind/type/$ReferenceType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapType, $MapType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapType"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$KeyDeserializer, $KeyDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$KeyDeserializer"
import {$BeanPropertyDefinition, $BeanPropertyDefinition$Type} from "packages/com/fasterxml/jackson/databind/introspect/$BeanPropertyDefinition"

export class $BeanDeserializerModifier {

constructor()

public "updateProperties"(arg0: $DeserializationConfig$Type, arg1: $BeanDescription$Type, arg2: $List$Type<($BeanPropertyDefinition$Type)>): $List<($BeanPropertyDefinition)>
public "modifyDeserializer"(arg0: $DeserializationConfig$Type, arg1: $BeanDescription$Type, arg2: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
public "updateBuilder"(arg0: $DeserializationConfig$Type, arg1: $BeanDescription$Type, arg2: $BeanDeserializerBuilder$Type): $BeanDeserializerBuilder
public "modifyCollectionDeserializer"(arg0: $DeserializationConfig$Type, arg1: $CollectionType$Type, arg2: $BeanDescription$Type, arg3: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
public "modifyArrayDeserializer"(arg0: $DeserializationConfig$Type, arg1: $ArrayType$Type, arg2: $BeanDescription$Type, arg3: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
public "modifyReferenceDeserializer"(arg0: $DeserializationConfig$Type, arg1: $ReferenceType$Type, arg2: $BeanDescription$Type, arg3: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
public "modifyCollectionLikeDeserializer"(arg0: $DeserializationConfig$Type, arg1: $CollectionLikeType$Type, arg2: $BeanDescription$Type, arg3: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
public "modifyMapDeserializer"(arg0: $DeserializationConfig$Type, arg1: $MapType$Type, arg2: $BeanDescription$Type, arg3: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
public "modifyEnumDeserializer"(arg0: $DeserializationConfig$Type, arg1: $JavaType$Type, arg2: $BeanDescription$Type, arg3: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
public "modifyMapLikeDeserializer"(arg0: $DeserializationConfig$Type, arg1: $MapLikeType$Type, arg2: $BeanDescription$Type, arg3: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
public "modifyKeyDeserializer"(arg0: $DeserializationConfig$Type, arg1: $JavaType$Type, arg2: $KeyDeserializer$Type): $KeyDeserializer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeanDeserializerModifier$Type = ($BeanDeserializerModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeanDeserializerModifier_ = $BeanDeserializerModifier$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$CoercionConfigs" {
import {$CoercionAction, $CoercionAction$Type} from "packages/com/fasterxml/jackson/databind/cfg/$CoercionAction"
import {$LogicalType, $LogicalType$Type} from "packages/com/fasterxml/jackson/databind/type/$LogicalType"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$MutableCoercionConfig, $MutableCoercionConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MutableCoercionConfig"
import {$CoercionInputShape, $CoercionInputShape$Type} from "packages/com/fasterxml/jackson/databind/cfg/$CoercionInputShape"

export class $CoercionConfigs implements $Serializable {

constructor()

public "copy"(): $CoercionConfigs
public "findCoercion"(arg0: $DeserializationConfig$Type, arg1: $LogicalType$Type, arg2: $Class$Type<(any)>, arg3: $CoercionInputShape$Type): $CoercionAction
public "defaultCoercions"(): $MutableCoercionConfig
public "findCoercionFromBlankString"(arg0: $DeserializationConfig$Type, arg1: $LogicalType$Type, arg2: $Class$Type<(any)>, arg3: $CoercionAction$Type): $CoercionAction
public "findOrCreateCoercion"(arg0: $LogicalType$Type): $MutableCoercionConfig
public "findOrCreateCoercion"(arg0: $Class$Type<(any)>): $MutableCoercionConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoercionConfigs$Type = ($CoercionConfigs);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoercionConfigs_ = $CoercionConfigs$Type;
}}
declare module "packages/com/fasterxml/jackson/dataformat/cbor/$CBORFactoryBuilder" {
import {$CBORFactory, $CBORFactory$Type} from "packages/com/fasterxml/jackson/dataformat/cbor/$CBORFactory"
import {$CBORGenerator$Feature, $CBORGenerator$Feature$Type} from "packages/com/fasterxml/jackson/dataformat/cbor/$CBORGenerator$Feature"
import {$TSFBuilder, $TSFBuilder$Type} from "packages/com/fasterxml/jackson/core/$TSFBuilder"
import {$CBORParser$Feature, $CBORParser$Feature$Type} from "packages/com/fasterxml/jackson/dataformat/cbor/$CBORParser$Feature"

export class $CBORFactoryBuilder extends $TSFBuilder<($CBORFactory), ($CBORFactoryBuilder)> {

constructor(arg0: $CBORFactory$Type)

public "enable"(arg0: $CBORParser$Feature$Type): $CBORFactoryBuilder
public "enable"(arg0: $CBORParser$Feature$Type, ...arg1: ($CBORParser$Feature$Type)[]): $CBORFactoryBuilder
public "enable"(arg0: $CBORGenerator$Feature$Type): $CBORFactoryBuilder
public "enable"(arg0: $CBORGenerator$Feature$Type, ...arg1: ($CBORGenerator$Feature$Type)[]): $CBORFactoryBuilder
public "configure"(arg0: $CBORGenerator$Feature$Type, arg1: boolean): $CBORFactoryBuilder
public "configure"(arg0: $CBORParser$Feature$Type, arg1: boolean): $CBORFactoryBuilder
public "disable"(arg0: $CBORParser$Feature$Type): $CBORFactoryBuilder
public "disable"(arg0: $CBORGenerator$Feature$Type): $CBORFactoryBuilder
public "disable"(arg0: $CBORParser$Feature$Type, ...arg1: ($CBORParser$Feature$Type)[]): $CBORFactoryBuilder
public "disable"(arg0: $CBORGenerator$Feature$Type, ...arg1: ($CBORGenerator$Feature$Type)[]): $CBORFactoryBuilder
public "formatParserFeaturesMask"(): integer
public "formatGeneratorFeaturesMask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBORFactoryBuilder$Type = ($CBORFactoryBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBORFactoryBuilder_ = $CBORFactoryBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$SequenceWriter" {
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$Versioned, $Versioned$Type} from "packages/com/fasterxml/jackson/core/$Versioned"
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Flushable, $Flushable$Type} from "packages/java/io/$Flushable"
import {$DefaultSerializerProvider, $DefaultSerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/ser/$DefaultSerializerProvider"
import {$ObjectWriter$Prefetch, $ObjectWriter$Prefetch$Type} from "packages/com/fasterxml/jackson/databind/$ObjectWriter$Prefetch"

export class $SequenceWriter implements $Versioned, $Closeable, $Flushable {

constructor(arg0: $DefaultSerializerProvider$Type, arg1: $JsonGenerator$Type, arg2: boolean, arg3: $ObjectWriter$Prefetch$Type)

public "version"(): $Version
public "flush"(): void
public "init"(arg0: boolean): $SequenceWriter
public "write"(arg0: any, arg1: $JavaType$Type): $SequenceWriter
public "write"(arg0: any): $SequenceWriter
public "close"(): void
public "writeAll"<C extends $Collection<(any)>>(arg0: C): $SequenceWriter
public "writeAll"(arg0: (any)[]): $SequenceWriter
public "writeAll"(arg0: $Iterable$Type<(any)>): $SequenceWriter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequenceWriter$Type = ($SequenceWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequenceWriter_ = $SequenceWriter$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsontype/$TypeDeserializer" {
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$TypeIdResolver, $TypeIdResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeIdResolver"
import {$JsonTypeInfo$As, $JsonTypeInfo$As$Type} from "packages/com/fasterxml/jackson/annotation/$JsonTypeInfo$As"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $TypeDeserializer {

constructor()

public "forProperty"(arg0: $BeanProperty$Type): $TypeDeserializer
public "getPropertyName"(): string
public "getDefaultImpl"(): $Class<(any)>
public "getTypeInclusion"(): $JsonTypeInfo$As
public "deserializeTypedFromAny"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type): any
public "deserializeTypedFromArray"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type): any
public "deserializeTypedFromObject"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type): any
public "deserializeTypedFromScalar"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type): any
public static "deserializeIfNatural"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type, arg2: $JavaType$Type): any
public static "deserializeIfNatural"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type, arg2: $Class$Type<(any)>): any
public "getTypeIdResolver"(): $TypeIdResolver
public "hasDefaultImpl"(): boolean
get "propertyName"(): string
get "defaultImpl"(): $Class<(any)>
get "typeInclusion"(): $JsonTypeInfo$As
get "typeIdResolver"(): $TypeIdResolver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeDeserializer$Type = ($TypeDeserializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeDeserializer_ = $TypeDeserializer$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$NullValueProvider" {
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$AccessPattern, $AccessPattern$Type} from "packages/com/fasterxml/jackson/databind/util/$AccessPattern"

export interface $NullValueProvider {

 "getNullValue"(arg0: $DeserializationContext$Type): any
 "getNullAccessPattern"(): $AccessPattern
 "getAbsentValue"(arg0: $DeserializationContext$Type): any
}

export namespace $NullValueProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NullValueProvider$Type = ($NullValueProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NullValueProvider_ = $NullValueProvider$Type;
}}
declare module "packages/com/fasterxml/jackson/dataformat/cbor/$CBORFactory" {
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InputAccessor, $InputAccessor$Type} from "packages/com/fasterxml/jackson/core/format/$InputAccessor"
import {$MatchStrength, $MatchStrength$Type} from "packages/com/fasterxml/jackson/core/format/$MatchStrength"
import {$JsonFactory, $JsonFactory$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory"
import {$CBORFactoryBuilder, $CBORFactoryBuilder$Type} from "packages/com/fasterxml/jackson/dataformat/cbor/$CBORFactoryBuilder"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$CBORGenerator$Feature, $CBORGenerator$Feature$Type} from "packages/com/fasterxml/jackson/dataformat/cbor/$CBORGenerator$Feature"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$CBORParser, $CBORParser$Type} from "packages/com/fasterxml/jackson/dataformat/cbor/$CBORParser"
import {$CBORParser$Feature, $CBORParser$Feature$Type} from "packages/com/fasterxml/jackson/dataformat/cbor/$CBORParser$Feature"

export class $CBORFactory extends $JsonFactory {
static readonly "FORMAT_NAME": string
static readonly "FORMAT_NAME_JSON": string
static readonly "DEFAULT_ROOT_VALUE_SEPARATOR": $SerializableString
static readonly "DEFAULT_QUOTE_CHAR": character

constructor(arg0: $CBORFactory$Type, arg1: $ObjectCodec$Type)
constructor(arg0: $ObjectCodec$Type)
constructor()

public "version"(): $Version
public static "builder"(): $CBORFactoryBuilder
public "enable"(arg0: $CBORGenerator$Feature$Type): $CBORFactory
public "enable"(arg0: $CBORParser$Feature$Type): $CBORFactory
public "isEnabled"(arg0: $CBORParser$Feature$Type): boolean
public "isEnabled"(arg0: $CBORGenerator$Feature$Type): boolean
public "configure"(arg0: $CBORParser$Feature$Type, arg1: boolean): $CBORFactory
public "configure"(arg0: $CBORGenerator$Feature$Type, arg1: boolean): $CBORFactory
public "disable"(arg0: $CBORParser$Feature$Type): $CBORFactory
public "disable"(arg0: $CBORGenerator$Feature$Type): $CBORFactory
public "createParser"(arg0: $URL$Type): $CBORParser
public "createParser"(arg0: (byte)[], arg1: integer, arg2: integer): $CBORParser
public "createParser"(arg0: $InputStream$Type): $CBORParser
public "getFormatName"(): string
public "canUseCharArrays"(): boolean
public "hasFormat"(arg0: $InputAccessor$Type): $MatchStrength
public "getFormatParserFeatures"(): integer
public "getFormatReadFeatureType"(): $Class<($CBORParser$Feature)>
public "getFormatWriteFeatureType"(): $Class<($CBORGenerator$Feature)>
public "canHandleBinaryNatively"(): boolean
public "getFormatGeneratorFeatures"(): integer
get "formatName"(): string
get "formatParserFeatures"(): integer
get "formatReadFeatureType"(): $Class<($CBORParser$Feature)>
get "formatWriteFeatureType"(): $Class<($CBORGenerator$Feature)>
get "formatGeneratorFeatures"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBORFactory$Type = ($CBORFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBORFactory_ = $CBORFactory$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$UnresolvedId" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JsonLocation, $JsonLocation$Type} from "packages/com/fasterxml/jackson/core/$JsonLocation"

export class $UnresolvedId {

constructor(arg0: any, arg1: $Class$Type<(any)>, arg2: $JsonLocation$Type)

public "toString"(): string
public "getLocation"(): $JsonLocation
public "getId"(): any
public "getType"(): $Class<(any)>
get "location"(): $JsonLocation
get "id"(): any
get "type"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnresolvedId$Type = ($UnresolvedId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnresolvedId_ = $UnresolvedId$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$PropertyNamingStrategy" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$AnnotatedField, $AnnotatedField$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedField"
import {$AnnotatedParameter, $AnnotatedParameter$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedParameter"
import {$AnnotatedMethod, $AnnotatedMethod$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMethod"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"

export class $PropertyNamingStrategy implements $Serializable {
/**
 * 
 * @deprecated
 */
static readonly "LOWER_CAMEL_CASE": $PropertyNamingStrategy
/**
 * 
 * @deprecated
 */
static readonly "UPPER_CAMEL_CASE": $PropertyNamingStrategy
/**
 * 
 * @deprecated
 */
static readonly "SNAKE_CASE": $PropertyNamingStrategy
/**
 * 
 * @deprecated
 */
static readonly "LOWER_CASE": $PropertyNamingStrategy
/**
 * 
 * @deprecated
 */
static readonly "KEBAB_CASE": $PropertyNamingStrategy
/**
 * 
 * @deprecated
 */
static readonly "LOWER_DOT_CASE": $PropertyNamingStrategy
/**
 * 
 * @deprecated
 */
static readonly "CAMEL_CASE_TO_LOWER_CASE_WITH_UNDERSCORES": $PropertyNamingStrategy
/**
 * 
 * @deprecated
 */
static readonly "PASCAL_CASE_TO_CAMEL_CASE": $PropertyNamingStrategy

constructor()

public "nameForField"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedField$Type, arg2: string): string
public "nameForGetterMethod"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedMethod$Type, arg2: string): string
public "nameForConstructorParameter"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedParameter$Type, arg2: string): string
public "nameForSetterMethod"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedMethod$Type, arg2: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyNamingStrategy$Type = ($PropertyNamingStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyNamingStrategy_ = $PropertyNamingStrategy$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/type/$MapType" {
import {$TypeBindings, $TypeBindings$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBindings"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$MapLikeType, $MapLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapLikeType"

export class $MapType extends $MapLikeType {


public "toString"(): string
public static "construct"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type, arg2: $JavaType$Type, arg3: ($JavaType$Type)[], arg4: $JavaType$Type, arg5: $JavaType$Type): $MapType
/**
 * 
 * @deprecated
 */
public static "construct"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type, arg2: $JavaType$Type): $MapType
public "refine"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type, arg2: $JavaType$Type, arg3: ($JavaType$Type)[]): $JavaType
public "withContentType"(arg0: $JavaType$Type): $JavaType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapType$Type = ($MapType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapType_ = $MapType$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWithSerializerProvider" {
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"

export interface $JsonFormatVisitorWithSerializerProvider {

 "getProvider"(): $SerializerProvider
 "setProvider"(arg0: $SerializerProvider$Type): void
}

export namespace $JsonFormatVisitorWithSerializerProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFormatVisitorWithSerializerProvider$Type = ($JsonFormatVisitorWithSerializerProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFormatVisitorWithSerializerProvider_ = $JsonFormatVisitorWithSerializerProvider$Type;
}}
declare module "packages/com/fasterxml/jackson/core/util/$JacksonFeatureSet" {
import {$JacksonFeature, $JacksonFeature$Type} from "packages/com/fasterxml/jackson/core/util/$JacksonFeature"

export class $JacksonFeatureSet<F extends $JacksonFeature> {


public "with"(arg0: F): $JacksonFeatureSet<(F)>
public "isEnabled"(arg0: F): boolean
public "without"(arg0: F): $JacksonFeatureSet<(F)>
public static "fromDefaults"<F extends $JacksonFeature>(arg0: (F)[]): $JacksonFeatureSet<(F)>
public static "fromBitmask"<F extends $JacksonFeature>(arg0: integer): $JacksonFeatureSet<(F)>
public "asBitmask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JacksonFeatureSet$Type<F> = ($JacksonFeatureSet<(F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JacksonFeatureSet_<F> = $JacksonFeatureSet$Type<(F)>;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$ConcreteBeanPropertyBase" {
import {$JsonObjectFormatVisitor, $JsonObjectFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonObjectFormatVisitor"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$PropertyMetadata, $PropertyMetadata$Type} from "packages/com/fasterxml/jackson/databind/$PropertyMetadata"

export class $ConcreteBeanPropertyBase implements $BeanProperty, $Serializable {


public "isVirtual"(): boolean
public "isRequired"(): boolean
public "getMetadata"(): $PropertyMetadata
public "findPropertyInclusion"(arg0: $MapperConfig$Type<(any)>, arg1: $Class$Type<(any)>): $JsonInclude$Value
public "findPropertyFormat"(arg0: $MapperConfig$Type<(any)>, arg1: $Class$Type<(any)>): $JsonFormat$Value
public "findAliases"(arg0: $MapperConfig$Type<(any)>): $List<($PropertyName)>
/**
 * 
 * @deprecated
 */
public "findFormatOverrides"(arg0: $AnnotationIntrospector$Type): $JsonFormat$Value
public "getName"(): string
public "getAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "getType"(): $JavaType
public "getFullName"(): $PropertyName
public "getMember"(): $AnnotatedMember
public "getWrapperName"(): $PropertyName
public "depositSchemaProperty"(arg0: $JsonObjectFormatVisitor$Type, arg1: $SerializerProvider$Type): void
public "getContextAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
get "virtual"(): boolean
get "required"(): boolean
get "metadata"(): $PropertyMetadata
get "name"(): string
get "type"(): $JavaType
get "fullName"(): $PropertyName
get "member"(): $AnnotatedMember
get "wrapperName"(): $PropertyName
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcreteBeanPropertyBase$Type = ($ConcreteBeanPropertyBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConcreteBeanPropertyBase_ = $ConcreteBeanPropertyBase$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$Module$SetupContext" {
import {$NamedType, $NamedType$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$NamedType"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$JsonGenerator$Feature, $JsonGenerator$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator$Feature"
import {$JsonFactory$Feature, $JsonFactory$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory$Feature"
import {$TypeModifier, $TypeModifier$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeModifier"
import {$DeserializationProblemHandler, $DeserializationProblemHandler$Type} from "packages/com/fasterxml/jackson/databind/deser/$DeserializationProblemHandler"
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$ClassIntrospector, $ClassIntrospector$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ClassIntrospector"
import {$Deserializers, $Deserializers$Type} from "packages/com/fasterxml/jackson/databind/deser/$Deserializers"
import {$SerializationFeature, $SerializationFeature$Type} from "packages/com/fasterxml/jackson/databind/$SerializationFeature"
import {$Serializers, $Serializers$Type} from "packages/com/fasterxml/jackson/databind/ser/$Serializers"
import {$MutableConfigOverride, $MutableConfigOverride$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MutableConfigOverride"
import {$BeanDeserializerModifier, $BeanDeserializerModifier$Type} from "packages/com/fasterxml/jackson/databind/deser/$BeanDeserializerModifier"
import {$DeserializationFeature, $DeserializationFeature$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationFeature"
import {$MapperFeature, $MapperFeature$Type} from "packages/com/fasterxml/jackson/databind/$MapperFeature"
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$KeyDeserializers, $KeyDeserializers$Type} from "packages/com/fasterxml/jackson/databind/deser/$KeyDeserializers"
import {$BeanSerializerModifier, $BeanSerializerModifier$Type} from "packages/com/fasterxml/jackson/databind/ser/$BeanSerializerModifier"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PropertyNamingStrategy, $PropertyNamingStrategy$Type} from "packages/com/fasterxml/jackson/databind/$PropertyNamingStrategy"
import {$AbstractTypeResolver, $AbstractTypeResolver$Type} from "packages/com/fasterxml/jackson/databind/$AbstractTypeResolver"
import {$ValueInstantiators, $ValueInstantiators$Type} from "packages/com/fasterxml/jackson/databind/deser/$ValueInstantiators"
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$JsonParser$Feature, $JsonParser$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$Feature"

export interface $Module$SetupContext {

 "getOwner"<C extends $ObjectCodec>(): C
 "isEnabled"(arg0: $DeserializationFeature$Type): boolean
 "isEnabled"(arg0: $SerializationFeature$Type): boolean
 "isEnabled"(arg0: $JsonParser$Feature$Type): boolean
 "isEnabled"(arg0: $MapperFeature$Type): boolean
 "isEnabled"(arg0: $JsonGenerator$Feature$Type): boolean
 "isEnabled"(arg0: $JsonFactory$Feature$Type): boolean
 "addSerializers"(arg0: $Serializers$Type): void
 "addTypeModifier"(arg0: $TypeModifier$Type): void
 "addDeserializers"(arg0: $Deserializers$Type): void
 "getMapperVersion"(): $Version
 "addKeySerializers"(arg0: $Serializers$Type): void
 "setNamingStrategy"(arg0: $PropertyNamingStrategy$Type): void
 "registerSubtypes"(...arg0: ($Class$Type<(any)>)[]): void
 "registerSubtypes"(arg0: $Collection$Type<($Class$Type<(any)>)>): void
 "registerSubtypes"(...arg0: ($NamedType$Type)[]): void
 "getTypeFactory"(): $TypeFactory
 "configOverride"(arg0: $Class$Type<(any)>): $MutableConfigOverride
 "addKeyDeserializers"(arg0: $KeyDeserializers$Type): void
 "addBeanDeserializerModifier"(arg0: $BeanDeserializerModifier$Type): void
 "setClassIntrospector"(arg0: $ClassIntrospector$Type): void
 "addAbstractTypeResolver"(arg0: $AbstractTypeResolver$Type): void
 "addDeserializationProblemHandler"(arg0: $DeserializationProblemHandler$Type): void
 "appendAnnotationIntrospector"(arg0: $AnnotationIntrospector$Type): void
 "addValueInstantiators"(arg0: $ValueInstantiators$Type): void
 "addBeanSerializerModifier"(arg0: $BeanSerializerModifier$Type): void
 "insertAnnotationIntrospector"(arg0: $AnnotationIntrospector$Type): void
 "setMixInAnnotations"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>): void
}

export namespace $Module$SetupContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Module$SetupContext$Type = ($Module$SetupContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Module$SetupContext_ = $Module$SetupContext$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$AccessorNamingStrategy" {
import {$AnnotatedField, $AnnotatedField$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedField"
import {$AnnotatedMethod, $AnnotatedMethod$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMethod"

export class $AccessorNamingStrategy {

constructor()

public "modifyFieldName"(arg0: $AnnotatedField$Type, arg1: string): string
public "findNameForMutator"(arg0: $AnnotatedMethod$Type, arg1: string): string
public "findNameForIsGetter"(arg0: $AnnotatedMethod$Type, arg1: string): string
public "findNameForRegularGetter"(arg0: $AnnotatedMethod$Type, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorNamingStrategy$Type = ($AccessorNamingStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorNamingStrategy_ = $AccessorNamingStrategy$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$CoercionConfig" {
import {$CoercionAction, $CoercionAction$Type} from "packages/com/fasterxml/jackson/databind/cfg/$CoercionAction"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$CoercionInputShape, $CoercionInputShape$Type} from "packages/com/fasterxml/jackson/databind/cfg/$CoercionInputShape"

export class $CoercionConfig implements $Serializable {

constructor()

public "findAction"(arg0: $CoercionInputShape$Type): $CoercionAction
public "getAcceptBlankAsEmpty"(): boolean
get "acceptBlankAsEmpty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoercionConfig$Type = ($CoercionConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoercionConfig_ = $CoercionConfig$Type;
}}
declare module "packages/com/fasterxml/jackson/dataformat/cbor/$CBORGenerator$Feature" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FormatFeature, $FormatFeature$Type} from "packages/com/fasterxml/jackson/core/$FormatFeature"

export class $CBORGenerator$Feature extends $Enum<($CBORGenerator$Feature)> implements $FormatFeature {
static readonly "WRITE_MINIMAL_INTS": $CBORGenerator$Feature
static readonly "WRITE_TYPE_HEADER": $CBORGenerator$Feature
static readonly "LENIENT_UTF_ENCODING": $CBORGenerator$Feature


public static "values"(): ($CBORGenerator$Feature)[]
public static "valueOf"(arg0: string): $CBORGenerator$Feature
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "enabledIn"(arg0: integer): boolean
public static "collectDefaults"(): integer
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBORGenerator$Feature$Type = (("lenient_utf_encoding") | ("write_minimal_ints") | ("write_type_header")) | ($CBORGenerator$Feature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBORGenerator$Feature_ = $CBORGenerator$Feature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$IntBuilder" {
import {$PrimitiveArrayBuilder, $PrimitiveArrayBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$PrimitiveArrayBuilder"

export class $ArrayBuilders$IntBuilder extends $PrimitiveArrayBuilder<((integer)[])> {

constructor()

public "_constructArray"(arg0: integer): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayBuilders$IntBuilder$Type = ($ArrayBuilders$IntBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayBuilders$IntBuilder_ = $ArrayBuilders$IntBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/type/$MapLikeType" {
import {$TypeBindings, $TypeBindings$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBindings"
import {$TypeBase, $TypeBase$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBase"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $MapLikeType extends $TypeBase {


public "equals"(arg0: any): boolean
public "toString"(): string
public "getGenericSignature"(arg0: $StringBuilder$Type): $StringBuilder
public "getContentType"(): $JavaType
/**
 * 
 * @deprecated
 */
public static "construct"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type, arg2: $JavaType$Type): $MapLikeType
public "refine"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type, arg2: $JavaType$Type, arg3: ($JavaType$Type)[]): $JavaType
public "getKeyType"(): $JavaType
public "withKeyType"(arg0: $JavaType$Type): $MapLikeType
public "withStaticTyping"(): $MapLikeType
public "withContentType"(arg0: $JavaType$Type): $JavaType
public "withHandlersFrom"(arg0: $JavaType$Type): $JavaType
public "hasHandlers"(): boolean
public "getErasedSignature"(arg0: $StringBuilder$Type): $StringBuilder
public static "upgradeFrom"(arg0: $JavaType$Type, arg1: $JavaType$Type, arg2: $JavaType$Type): $MapLikeType
public "withKeyTypeHandler"(arg0: any): $MapLikeType
/**
 * 
 * @deprecated
 */
public "isTrueMapType"(): boolean
public "withTypeHandler"(arg0: any): $MapLikeType
public "isMapLikeType"(): boolean
public "isContainerType"(): boolean
public "withKeyValueHandler"(arg0: any): $MapLikeType
public "withContentValueHandler"(arg0: any): $MapLikeType
public "withContentTypeHandler"(arg0: any): $MapLikeType
public "getContentTypeHandler"(): any
public "getContentValueHandler"(): any
get "contentType"(): $JavaType
get "keyType"(): $JavaType
get "trueMapType"(): boolean
get "mapLikeType"(): boolean
get "containerType"(): boolean
get "contentTypeHandler"(): any
get "contentValueHandler"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapLikeType$Type = ($MapLikeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapLikeType_ = $MapLikeType$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$VirtualBeanPropertyWriter" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$BeanPropertyWriter, $BeanPropertyWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/$BeanPropertyWriter"
import {$BeanPropertyDefinition, $BeanPropertyDefinition$Type} from "packages/com/fasterxml/jackson/databind/introspect/$BeanPropertyDefinition"
import {$AnnotatedClass, $AnnotatedClass$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedClass"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"

export class $VirtualBeanPropertyWriter extends $BeanPropertyWriter implements $Serializable {
static readonly "MARKER_FOR_EMPTY": any


public "isVirtual"(): boolean
public "withConfig"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedClass$Type, arg2: $BeanPropertyDefinition$Type, arg3: $JavaType$Type): $VirtualBeanPropertyWriter
public "serializeAsElement"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "serializeAsField"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
get "virtual"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirtualBeanPropertyWriter$Type = ($VirtualBeanPropertyWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VirtualBeanPropertyWriter_ = $VirtualBeanPropertyWriter$Type;
}}
declare module "packages/com/fasterxml/jackson/core/util/$ByteArrayBuilder" {
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$BufferRecycler, $BufferRecycler$Type} from "packages/com/fasterxml/jackson/core/util/$BufferRecycler"

export class $ByteArrayBuilder extends $OutputStream {
static readonly "NO_BYTES": (byte)[]

constructor(arg0: $BufferRecycler$Type, arg1: integer)
constructor(arg0: integer)
constructor(arg0: $BufferRecycler$Type)
constructor()

public "append"(arg0: integer): void
public "flush"(): void
public "size"(): integer
public "write"(arg0: integer): void
public "write"(arg0: (byte)[]): void
public "write"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "close"(): void
public "toByteArray"(): (byte)[]
public "reset"(): void
public "release"(): void
public static "fromInitial"(arg0: (byte)[], arg1: integer): $ByteArrayBuilder
public "appendTwoBytes"(arg0: integer): void
public "appendThreeBytes"(arg0: integer): void
public "appendFourBytes"(arg0: integer): void
public "getCurrentSegment"(): (byte)[]
public "resetAndGetFirstSegment"(): (byte)[]
public "completeAndCoalesce"(arg0: integer): (byte)[]
public "setCurrentSegmentLength"(arg0: integer): void
public "getCurrentSegmentLength"(): integer
public "finishCurrentSegment"(): (byte)[]
get "currentSegment"(): (byte)[]
set "currentSegmentLength"(value: integer)
get "currentSegmentLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteArrayBuilder$Type = ($ByteArrayBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteArrayBuilder_ = $ByteArrayBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$ValueNode" {
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$BaseJsonNode, $BaseJsonNode$Type} from "packages/com/fasterxml/jackson/databind/node/$BaseJsonNode"

export class $ValueNode extends $BaseJsonNode {


public "get"(arg0: integer): $JsonNode
public "get"(arg0: string): $JsonNode
public "isEmpty"(): boolean
public "path"(arg0: string): $JsonNode
public "has"(arg0: string): boolean
public "has"(arg0: integer): boolean
public "findValue"(arg0: string): $JsonNode
public "deepCopy"<T extends $JsonNode>(): T
public "asToken"(): $JsonToken
public "serializeWithType"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type, arg2: $TypeSerializer$Type): void
public "hasNonNull"(arg0: string): boolean
public "hasNonNull"(arg0: integer): boolean
public "findValuesAsText"(arg0: string, arg1: $List$Type<(string)>): $List<(string)>
public "findParents"(arg0: string, arg1: $List$Type<($JsonNode$Type)>): $List<($JsonNode)>
public "findValues"(arg0: string, arg1: $List$Type<($JsonNode$Type)>): $List<($JsonNode)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueNode$Type = ($ValueNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueNode_ = $ValueNode$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector$ReferenceProperty" {
import {$AnnotationIntrospector$ReferenceProperty$Type, $AnnotationIntrospector$ReferenceProperty$Type$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector$ReferenceProperty$Type"

export class $AnnotationIntrospector$ReferenceProperty {

constructor(arg0: $AnnotationIntrospector$ReferenceProperty$Type$Type, arg1: string)

public "getName"(): string
public "getType"(): $AnnotationIntrospector$ReferenceProperty$Type
public static "back"(arg0: string): $AnnotationIntrospector$ReferenceProperty
public static "managed"(arg0: string): $AnnotationIntrospector$ReferenceProperty
public "isManagedReference"(): boolean
public "isBackReference"(): boolean
get "name"(): string
get "type"(): $AnnotationIntrospector$ReferenceProperty$Type
get "managedReference"(): boolean
get "backReference"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotationIntrospector$ReferenceProperty$Type = ($AnnotationIntrospector$ReferenceProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotationIntrospector$ReferenceProperty_ = $AnnotationIntrospector$ReferenceProperty$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$BaseSettings" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$DateFormat, $DateFormat$Type} from "packages/java/text/$DateFormat"
import {$PolymorphicTypeValidator, $PolymorphicTypeValidator$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$PolymorphicTypeValidator"
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$ClassIntrospector, $ClassIntrospector$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ClassIntrospector"
import {$PropertyNamingStrategy, $PropertyNamingStrategy$Type} from "packages/com/fasterxml/jackson/databind/$PropertyNamingStrategy"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$TypeResolverBuilder, $TypeResolverBuilder$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeResolverBuilder"
import {$AccessorNamingStrategy$Provider, $AccessorNamingStrategy$Provider$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AccessorNamingStrategy$Provider"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$HandlerInstantiator, $HandlerInstantiator$Type} from "packages/com/fasterxml/jackson/databind/cfg/$HandlerInstantiator"

export class $BaseSettings implements $Serializable {

constructor(arg0: $ClassIntrospector$Type, arg1: $AnnotationIntrospector$Type, arg2: $PropertyNamingStrategy$Type, arg3: $TypeFactory$Type, arg4: $TypeResolverBuilder$Type<(any)>, arg5: $DateFormat$Type, arg6: $HandlerInstantiator$Type, arg7: $Locale$Type, arg8: $TimeZone$Type, arg9: $Base64Variant$Type, arg10: $PolymorphicTypeValidator$Type, arg11: $AccessorNamingStrategy$Provider$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ClassIntrospector$Type, arg1: $AnnotationIntrospector$Type, arg2: $PropertyNamingStrategy$Type, arg3: $TypeFactory$Type, arg4: $TypeResolverBuilder$Type<(any)>, arg5: $DateFormat$Type, arg6: $HandlerInstantiator$Type, arg7: $Locale$Type, arg8: $TimeZone$Type, arg9: $Base64Variant$Type, arg10: $PolymorphicTypeValidator$Type)

public "copy"(): $BaseSettings
public "getTimeZone"(): $TimeZone
public "with"(arg0: $TimeZone$Type): $BaseSettings
public "with"(arg0: $Locale$Type): $BaseSettings
public "with"(arg0: $Base64Variant$Type): $BaseSettings
public "with"(arg0: $PolymorphicTypeValidator$Type): $BaseSettings
public "getLocale"(): $Locale
public "getAccessorNaming"(): $AccessorNamingStrategy$Provider
public "getBase64Variant"(): $Base64Variant
public "getTypeFactory"(): $TypeFactory
public "getDateFormat"(): $DateFormat
public "withAccessorNaming"(arg0: $AccessorNamingStrategy$Provider$Type): $BaseSettings
public "withTypeFactory"(arg0: $TypeFactory$Type): $BaseSettings
public "withDateFormat"(arg0: $DateFormat$Type): $BaseSettings
public "withTypeResolverBuilder"(arg0: $TypeResolverBuilder$Type<(any)>): $BaseSettings
public "getTypeResolverBuilder"(): $TypeResolverBuilder<(any)>
public "withInsertedAnnotationIntrospector"(arg0: $AnnotationIntrospector$Type): $BaseSettings
public "getClassIntrospector"(): $ClassIntrospector
public "withPropertyNamingStrategy"(arg0: $PropertyNamingStrategy$Type): $BaseSettings
public "withAppendedAnnotationIntrospector"(arg0: $AnnotationIntrospector$Type): $BaseSettings
public "withAnnotationIntrospector"(arg0: $AnnotationIntrospector$Type): $BaseSettings
public "withHandlerInstantiator"(arg0: $HandlerInstantiator$Type): $BaseSettings
public "hasExplicitTimeZone"(): boolean
public "withClassIntrospector"(arg0: $ClassIntrospector$Type): $BaseSettings
public "getPropertyNamingStrategy"(): $PropertyNamingStrategy
public "getPolymorphicTypeValidator"(): $PolymorphicTypeValidator
public "getAnnotationIntrospector"(): $AnnotationIntrospector
public "getHandlerInstantiator"(): $HandlerInstantiator
get "timeZone"(): $TimeZone
get "locale"(): $Locale
get "accessorNaming"(): $AccessorNamingStrategy$Provider
get "base64Variant"(): $Base64Variant
get "typeFactory"(): $TypeFactory
get "dateFormat"(): $DateFormat
get "typeResolverBuilder"(): $TypeResolverBuilder<(any)>
get "classIntrospector"(): $ClassIntrospector
get "propertyNamingStrategy"(): $PropertyNamingStrategy
get "polymorphicTypeValidator"(): $PolymorphicTypeValidator
get "annotationIntrospector"(): $AnnotationIntrospector
get "handlerInstantiator"(): $HandlerInstantiator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSettings$Type = ($BaseSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseSettings_ = $BaseSettings$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonValueFormatVisitor" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$JsonValueFormat, $JsonValueFormat$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonValueFormat"

export interface $JsonValueFormatVisitor {

 "format"(arg0: $JsonValueFormat$Type): void
 "enumTypes"(arg0: $Set$Type<(string)>): void
}

export namespace $JsonValueFormatVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonValueFormatVisitor$Type = ($JsonValueFormatVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonValueFormatVisitor_ = $JsonValueFormatVisitor$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$Module" {
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$Versioned, $Versioned$Type} from "packages/com/fasterxml/jackson/core/$Versioned"
import {$Module$SetupContext, $Module$SetupContext$Type} from "packages/com/fasterxml/jackson/databind/$Module$SetupContext"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $Module implements $Versioned {

constructor()

public "version"(): $Version
public "getModuleName"(): string
public "getDependencies"(): $Iterable<(any)>
public "getTypeId"(): any
public "setupModule"(arg0: $Module$SetupContext$Type): void
get "moduleName"(): string
get "dependencies"(): $Iterable<(any)>
get "typeId"(): any
set "upModule"(value: $Module$SetupContext$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Module$Type = ($Module);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Module_ = $Module$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$SettableAnyProperty" {
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$KeyDeserializer, $KeyDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$KeyDeserializer"
import {$TypeDeserializer, $TypeDeserializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeDeserializer"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"

export class $SettableAnyProperty implements $Serializable {

constructor(arg0: $BeanProperty$Type, arg1: $AnnotatedMember$Type, arg2: $JavaType$Type, arg3: $KeyDeserializer$Type, arg4: $JsonDeserializer$Type<(any)>, arg5: $TypeDeserializer$Type)

public "getProperty"(): $BeanProperty
public "toString"(): string
public "set"(arg0: any, arg1: any, arg2: any): void
public "getType"(): $JavaType
public "deserialize"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type): any
public "getPropertyName"(): string
public "deserializeAndSet"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type, arg2: any, arg3: string): void
public static "constructForMethod"(arg0: $DeserializationContext$Type, arg1: $BeanProperty$Type, arg2: $AnnotatedMember$Type, arg3: $JavaType$Type, arg4: $KeyDeserializer$Type, arg5: $JsonDeserializer$Type<(any)>, arg6: $TypeDeserializer$Type): $SettableAnyProperty
public "withValueDeserializer"(arg0: $JsonDeserializer$Type<(any)>): $SettableAnyProperty
public static "constructForJsonNodeField"(arg0: $DeserializationContext$Type, arg1: $BeanProperty$Type, arg2: $AnnotatedMember$Type, arg3: $JavaType$Type, arg4: $JsonDeserializer$Type<(any)>): $SettableAnyProperty
public static "constructForMapField"(arg0: $DeserializationContext$Type, arg1: $BeanProperty$Type, arg2: $AnnotatedMember$Type, arg3: $JavaType$Type, arg4: $KeyDeserializer$Type, arg5: $JsonDeserializer$Type<(any)>, arg6: $TypeDeserializer$Type): $SettableAnyProperty
public "hasValueDeserializer"(): boolean
public "fixAccess"(arg0: $DeserializationConfig$Type): void
get "property"(): $BeanProperty
get "type"(): $JavaType
get "propertyName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettableAnyProperty$Type = ($SettableAnyProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettableAnyProperty_ = $SettableAnyProperty$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$JsonSerializable$Base" {
import {$JsonSerializable, $JsonSerializable$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializable"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"

export class $JsonSerializable$Base implements $JsonSerializable {

constructor()

public "isEmpty"(arg0: $SerializerProvider$Type): boolean
public "serialize"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type): void
public "serializeWithType"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type, arg2: $TypeSerializer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonSerializable$Base$Type = ($JsonSerializable$Base);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonSerializable$Base_ = $JsonSerializable$Base$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$Versioned" {
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"

export interface $Versioned {

 "version"(): $Version

(): $Version
}

export namespace $Versioned {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Versioned$Type = ($Versioned);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Versioned_ = $Versioned$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/type/$ReferenceType" {
import {$TypeBindings, $TypeBindings$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBindings"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$SimpleType, $SimpleType$Type} from "packages/com/fasterxml/jackson/databind/type/$SimpleType"

export class $ReferenceType extends $SimpleType {


public "equals"(arg0: any): boolean
public "toString"(): string
public "getGenericSignature"(arg0: $StringBuilder$Type): $StringBuilder
public "isReferenceType"(): boolean
public "getContentType"(): $JavaType
public static "construct"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type, arg2: $JavaType$Type, arg3: ($JavaType$Type)[], arg4: $JavaType$Type): $ReferenceType
/**
 * 
 * @deprecated
 */
public static "construct"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type): $ReferenceType
public "refine"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type, arg2: $JavaType$Type, arg3: ($JavaType$Type)[]): $JavaType
public "withContentType"(arg0: $JavaType$Type): $JavaType
public "withValueHandler"(arg0: any): $ReferenceType
public "getErasedSignature"(arg0: $StringBuilder$Type): $StringBuilder
public static "upgradeFrom"(arg0: $JavaType$Type, arg1: $JavaType$Type): $ReferenceType
public "hasContentType"(): boolean
public "getReferencedType"(): $JavaType
public "withContentTypeHandler"(arg0: any): $ReferenceType
public "getAnchorType"(): $JavaType
public "isAnchorType"(): boolean
get "referenceType"(): boolean
get "contentType"(): $JavaType
get "referencedType"(): $JavaType
get "anchorType"(): $JavaType
get "anchorType"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceType$Type = ($ReferenceType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReferenceType_ = $ReferenceType$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector$ReferenceProperty$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AnnotationIntrospector$ReferenceProperty$Type extends $Enum<($AnnotationIntrospector$ReferenceProperty$Type)> {
static readonly "MANAGED_REFERENCE": $AnnotationIntrospector$ReferenceProperty$Type
static readonly "BACK_REFERENCE": $AnnotationIntrospector$ReferenceProperty$Type


public static "values"(): ($AnnotationIntrospector$ReferenceProperty$Type)[]
public static "valueOf"(arg0: string): $AnnotationIntrospector$ReferenceProperty$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotationIntrospector$ReferenceProperty$Type$Type = (("back_reference") | ("managed_reference")) | ($AnnotationIntrospector$ReferenceProperty$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotationIntrospector$ReferenceProperty$Type_ = $AnnotationIntrospector$ReferenceProperty$Type$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$SerializationFeature" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfigFeature, $ConfigFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConfigFeature"

export class $SerializationFeature extends $Enum<($SerializationFeature)> implements $ConfigFeature {
static readonly "WRAP_ROOT_VALUE": $SerializationFeature
static readonly "INDENT_OUTPUT": $SerializationFeature
static readonly "FAIL_ON_EMPTY_BEANS": $SerializationFeature
static readonly "FAIL_ON_SELF_REFERENCES": $SerializationFeature
static readonly "WRAP_EXCEPTIONS": $SerializationFeature
static readonly "FAIL_ON_UNWRAPPED_TYPE_IDENTIFIERS": $SerializationFeature
static readonly "WRITE_SELF_REFERENCES_AS_NULL": $SerializationFeature
static readonly "CLOSE_CLOSEABLE": $SerializationFeature
static readonly "FLUSH_AFTER_WRITE_VALUE": $SerializationFeature
static readonly "WRITE_DATES_AS_TIMESTAMPS": $SerializationFeature
static readonly "WRITE_DATE_KEYS_AS_TIMESTAMPS": $SerializationFeature
static readonly "WRITE_DATES_WITH_ZONE_ID": $SerializationFeature
static readonly "WRITE_DATES_WITH_CONTEXT_TIME_ZONE": $SerializationFeature
static readonly "WRITE_DURATIONS_AS_TIMESTAMPS": $SerializationFeature
static readonly "WRITE_CHAR_ARRAYS_AS_JSON_ARRAYS": $SerializationFeature
static readonly "WRITE_ENUMS_USING_TO_STRING": $SerializationFeature
static readonly "WRITE_ENUMS_USING_INDEX": $SerializationFeature
static readonly "WRITE_ENUM_KEYS_USING_INDEX": $SerializationFeature
/**
 * 
 * @deprecated
 */
static readonly "WRITE_NULL_MAP_VALUES": $SerializationFeature
/**
 * 
 * @deprecated
 */
static readonly "WRITE_EMPTY_JSON_ARRAYS": $SerializationFeature
static readonly "WRITE_SINGLE_ELEM_ARRAYS_UNWRAPPED": $SerializationFeature
/**
 * 
 * @deprecated
 */
static readonly "WRITE_BIGDECIMAL_AS_PLAIN": $SerializationFeature
static readonly "WRITE_DATE_TIMESTAMPS_AS_NANOSECONDS": $SerializationFeature
static readonly "ORDER_MAP_ENTRIES_BY_KEYS": $SerializationFeature
static readonly "EAGER_SERIALIZER_FETCH": $SerializationFeature
static readonly "USE_EQUALITY_FOR_OBJECT_ID": $SerializationFeature


public static "values"(): ($SerializationFeature)[]
public static "valueOf"(arg0: string): $SerializationFeature
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "enabledIn"(arg0: integer): boolean
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationFeature$Type = (("eager_serializer_fetch") | ("write_self_references_as_null") | ("write_enums_using_index") | ("write_single_elem_arrays_unwrapped") | ("close_closeable") | ("write_empty_json_arrays") | ("write_dates_as_timestamps") | ("write_dates_with_context_time_zone") | ("fail_on_empty_beans") | ("write_dates_with_zone_id") | ("write_date_timestamps_as_nanoseconds") | ("write_bigdecimal_as_plain") | ("write_enum_keys_using_index") | ("write_durations_as_timestamps") | ("indent_output") | ("write_enums_using_to_string") | ("fail_on_self_references") | ("write_null_map_values") | ("write_char_arrays_as_json_arrays") | ("use_equality_for_object_id") | ("write_date_keys_as_timestamps") | ("wrap_exceptions") | ("wrap_root_value") | ("order_map_entries_by_keys") | ("fail_on_unwrapped_type_identifiers") | ("flush_after_write_value")) | ($SerializationFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationFeature_ = $SerializationFeature$Type;
}}
declare module "packages/com/fasterxml/jackson/core/sym/$ByteQuadsCanonicalizer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ByteQuadsCanonicalizer {


public "toString"(): string
public "size"(): integer
public "release"(): void
public "totalCount"(): integer
public "addName"(arg0: string, arg1: (integer)[], arg2: integer): string
public "addName"(arg0: string, arg1: integer, arg2: integer, arg3: integer): string
public "addName"(arg0: string, arg1: integer): string
public "addName"(arg0: string, arg1: integer, arg2: integer): string
public "makeChild"(arg0: integer): $ByteQuadsCanonicalizer
public "hashSeed"(): integer
public "findName"(arg0: integer, arg1: integer): string
public "findName"(arg0: integer): string
public "findName"(arg0: (integer)[], arg1: integer): string
public "findName"(arg0: integer, arg1: integer, arg2: integer): string
public "calcHash"(arg0: integer): integer
public "calcHash"(arg0: integer, arg1: integer): integer
public "calcHash"(arg0: (integer)[], arg1: integer): integer
public "calcHash"(arg0: integer, arg1: integer, arg2: integer): integer
public "maybeDirty"(): boolean
public "bucketCount"(): integer
public "secondaryCount"(): integer
public "primaryCount"(): integer
public "spilloverCount"(): integer
public "tertiaryCount"(): integer
public static "createRoot"(): $ByteQuadsCanonicalizer
public "isCanonicalizing"(): boolean
public "makeChildOrPlaceholder"(arg0: integer): $ByteQuadsCanonicalizer
get "canonicalizing"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteQuadsCanonicalizer$Type = ($ByteQuadsCanonicalizer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteQuadsCanonicalizer_ = $ByteQuadsCanonicalizer$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsontype/$TypeIdResolver" {
import {$JsonTypeInfo$Id, $JsonTypeInfo$Id$Type} from "packages/com/fasterxml/jackson/annotation/$JsonTypeInfo$Id"
import {$DatabindContext, $DatabindContext$Type} from "packages/com/fasterxml/jackson/databind/$DatabindContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export interface $TypeIdResolver {

 "init"(arg0: $JavaType$Type): void
 "getDescForKnownTypeIds"(): string
 "idFromValue"(arg0: any): string
 "idFromValueAndType"(arg0: any, arg1: $Class$Type<(any)>): string
 "typeFromId"(arg0: $DatabindContext$Type, arg1: string): $JavaType
 "idFromBaseType"(): string
 "getMechanism"(): $JsonTypeInfo$Id
}

export namespace $TypeIdResolver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeIdResolver$Type = ($TypeIdResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeIdResolver_ = $TypeIdResolver$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$ClassIntrospector" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$SerializationConfig, $SerializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$SerializationConfig"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$ClassIntrospector$MixInResolver, $ClassIntrospector$MixInResolver$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ClassIntrospector$MixInResolver"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"

export class $ClassIntrospector {


public "copy"(): $ClassIntrospector
public "forSerialization"(arg0: $SerializationConfig$Type, arg1: $JavaType$Type, arg2: $ClassIntrospector$MixInResolver$Type): $BeanDescription
public "forDeserialization"(arg0: $DeserializationConfig$Type, arg1: $JavaType$Type, arg2: $ClassIntrospector$MixInResolver$Type): $BeanDescription
public "forCreation"(arg0: $DeserializationConfig$Type, arg1: $JavaType$Type, arg2: $ClassIntrospector$MixInResolver$Type): $BeanDescription
/**
 * 
 * @deprecated
 */
public "forDeserializationWithBuilder"(arg0: $DeserializationConfig$Type, arg1: $JavaType$Type, arg2: $ClassIntrospector$MixInResolver$Type): $BeanDescription
public "forDeserializationWithBuilder"(arg0: $DeserializationConfig$Type, arg1: $JavaType$Type, arg2: $ClassIntrospector$MixInResolver$Type, arg3: $BeanDescription$Type): $BeanDescription
public "forDirectClassAnnotations"(arg0: $MapperConfig$Type<(any)>, arg1: $JavaType$Type, arg2: $ClassIntrospector$MixInResolver$Type): $BeanDescription
public "forClassAnnotations"(arg0: $MapperConfig$Type<(any)>, arg1: $JavaType$Type, arg2: $ClassIntrospector$MixInResolver$Type): $BeanDescription
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassIntrospector$Type = ($ClassIntrospector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassIntrospector_ = $ClassIntrospector$Type;
}}
declare module "packages/com/fasterxml/jackson/core/type/$WritableTypeId$Inclusion" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WritableTypeId$Inclusion extends $Enum<($WritableTypeId$Inclusion)> {
static readonly "WRAPPER_ARRAY": $WritableTypeId$Inclusion
static readonly "WRAPPER_OBJECT": $WritableTypeId$Inclusion
static readonly "METADATA_PROPERTY": $WritableTypeId$Inclusion
static readonly "PAYLOAD_PROPERTY": $WritableTypeId$Inclusion
static readonly "PARENT_PROPERTY": $WritableTypeId$Inclusion


public static "values"(): ($WritableTypeId$Inclusion)[]
public static "valueOf"(arg0: string): $WritableTypeId$Inclusion
public "requiresObjectContext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableTypeId$Inclusion$Type = (("payload_property") | ("wrapper_object") | ("parent_property") | ("wrapper_array") | ("metadata_property")) | ($WritableTypeId$Inclusion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritableTypeId$Inclusion_ = $WritableTypeId$Inclusion$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/impl/$ReadableObjectId" {
import {$ObjectIdGenerator$IdKey, $ObjectIdGenerator$IdKey$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator$IdKey"
import {$ReadableObjectId$Referring, $ReadableObjectId$Referring$Type} from "packages/com/fasterxml/jackson/databind/deser/impl/$ReadableObjectId$Referring"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ObjectIdResolver, $ObjectIdResolver$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdResolver"

export class $ReadableObjectId {

constructor(arg0: $ObjectIdGenerator$IdKey$Type)

public "toString"(): string
public "getKey"(): $ObjectIdGenerator$IdKey
public "resolve"(): any
public "getResolver"(): $ObjectIdResolver
public "setResolver"(arg0: $ObjectIdResolver$Type): void
public "bindItem"(arg0: any): void
public "referringProperties"(): $Iterator<($ReadableObjectId$Referring)>
public "tryToResolveUnresolved"(arg0: $DeserializationContext$Type): boolean
public "hasReferringProperties"(): boolean
public "appendReferring"(arg0: $ReadableObjectId$Referring$Type): void
get "key"(): $ObjectIdGenerator$IdKey
get "resolver"(): $ObjectIdResolver
set "resolver"(value: $ObjectIdResolver$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadableObjectId$Type = ($ReadableObjectId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReadableObjectId_ = $ReadableObjectId$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$JsonMappingException$Reference" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $JsonMappingException$Reference implements $Serializable {

constructor(arg0: any, arg1: integer)
constructor(arg0: any, arg1: string)
constructor(arg0: any)

public "toString"(): string
public "getIndex"(): integer
public "getFrom"(): any
public "getFieldName"(): string
public "getDescription"(): string
get "index"(): integer
get "from"(): any
get "fieldName"(): string
get "description"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonMappingException$Reference$Type = ($JsonMappingException$Reference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonMappingException$Reference_ = $JsonMappingException$Reference$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$KeyDeserializer" {
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"

export class $KeyDeserializer {

constructor()

public "deserializeKey"(arg0: string, arg1: $DeserializationContext$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyDeserializer$Type = ($KeyDeserializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyDeserializer_ = $KeyDeserializer$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeature" {
import {$JacksonFeature, $JacksonFeature$Type} from "packages/com/fasterxml/jackson/core/util/$JacksonFeature"

export interface $DatatypeFeature extends $JacksonFeature {

 "featureIndex"(): integer
 "getMask"(): integer
 "enabledByDefault"(): boolean
 "enabledIn"(arg0: integer): boolean
}

export namespace $DatatypeFeature {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatatypeFeature$Type = ($DatatypeFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DatatypeFeature_ = $DatatypeFeature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$JavaType" {
import {$TypeBindings, $TypeBindings$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBindings"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResolvedType, $ResolvedType$Type} from "packages/com/fasterxml/jackson/core/type/$ResolvedType"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export class $JavaType extends $ResolvedType implements $Serializable, $Type {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isInterface"(): boolean
public "isPrimitive"(): boolean
public "getInterfaces"(): $List<($JavaType)>
public "getGenericSignature"(): string
public "getGenericSignature"(arg0: $StringBuilder$Type): $StringBuilder
public "isFinal"(): boolean
public "isAbstract"(): boolean
public "getContentType"(): $JavaType
public "isThrowable"(): boolean
public "refine"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type, arg2: $JavaType$Type, arg3: ($JavaType$Type)[]): $JavaType
public "getSuperClass"(): $JavaType
public "getBindings"(): $TypeBindings
public "getKeyType"(): $JavaType
public "withStaticTyping"(): $JavaType
public "withContentType"(arg0: $JavaType$Type): $JavaType
public "withHandlersFrom"(arg0: $JavaType$Type): $JavaType
public "hasGenericTypes"(): boolean
public "containedTypeCount"(): integer
/**
 * 
 * @deprecated
 */
public "getParameterSource"(): $Class<(any)>
/**
 * 
 * @deprecated
 */
public "containedTypeName"(arg0: integer): string
/**
 * 
 * @deprecated
 */
public "forcedNarrowBy"(arg0: $Class$Type<(any)>): $JavaType
public "withValueHandler"(arg0: any): $JavaType
public "hasHandlers"(): boolean
public "getErasedSignature"(): string
public "getErasedSignature"(arg0: $StringBuilder$Type): $StringBuilder
public "hasValueHandler"(): boolean
public "isRecordType"(): boolean
public "isConcrete"(): boolean
public "getTypeHandler"<T>(): T
public "getValueHandler"<T>(): T
public "isEnumImplType"(): boolean
public "findTypeParameters"(arg0: $Class$Type<(any)>): ($JavaType)[]
public "isEnumType"(): boolean
public "hasContentType"(): boolean
public "withTypeHandler"(arg0: any): $JavaType
public "isMapLikeType"(): boolean
public "useStaticType"(): boolean
public "findSuperType"(arg0: $Class$Type<(any)>): $JavaType
public "isArrayType"(): boolean
public "isJavaLangObject"(): boolean
public "isTypeOrSubTypeOf"(arg0: $Class$Type<(any)>): boolean
public "getRawClass"(): $Class<(any)>
public "hasRawClass"(arg0: $Class$Type<(any)>): boolean
public "isContainerType"(): boolean
public "withContentValueHandler"(arg0: any): $JavaType
public "containedTypeOrUnknown"(arg0: integer): $JavaType
public "withContentTypeHandler"(arg0: any): $JavaType
public "isCollectionLikeType"(): boolean
public "getContentTypeHandler"(): any
public "getContentValueHandler"(): any
public "isTypeOrSuperTypeOf"(arg0: $Class$Type<(any)>): boolean
public "getTypeName"(): string
get "interface"(): boolean
get "primitive"(): boolean
get "interfaces"(): $List<($JavaType)>
get "genericSignature"(): string
get "final"(): boolean
get "abstract"(): boolean
get "contentType"(): $JavaType
get "throwable"(): boolean
get "superClass"(): $JavaType
get "bindings"(): $TypeBindings
get "keyType"(): $JavaType
get "parameterSource"(): $Class<(any)>
get "erasedSignature"(): string
get "recordType"(): boolean
get "concrete"(): boolean
get "typeHandler"(): T
get "valueHandler"(): T
get "enumImplType"(): boolean
get "enumType"(): boolean
get "mapLikeType"(): boolean
get "arrayType"(): boolean
get "javaLangObject"(): boolean
get "rawClass"(): $Class<(any)>
get "containerType"(): boolean
get "collectionLikeType"(): boolean
get "contentTypeHandler"(): any
get "contentValueHandler"(): any
get "typeName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JavaType$Type = ($JavaType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JavaType_ = $JavaType$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$AccessorNamingStrategy$Provider" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$AccessorNamingStrategy, $AccessorNamingStrategy$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AccessorNamingStrategy"
import {$AnnotatedClass, $AnnotatedClass$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedClass"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"

export class $AccessorNamingStrategy$Provider implements $Serializable {

constructor()

public "forPOJO"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedClass$Type): $AccessorNamingStrategy
public "forRecord"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedClass$Type): $AccessorNamingStrategy
public "forBuilder"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedClass$Type, arg2: $BeanDescription$Type): $AccessorNamingStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorNamingStrategy$Provider$Type = ($AccessorNamingStrategy$Provider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorNamingStrategy$Provider_ = $AccessorNamingStrategy$Provider$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$AbstractDeserializer" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$LogicalType, $LogicalType$Type} from "packages/com/fasterxml/jackson/databind/type/$LogicalType"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$BeanDeserializerBuilder, $BeanDeserializerBuilder$Type} from "packages/com/fasterxml/jackson/databind/deser/$BeanDeserializerBuilder"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$TypeDeserializer, $TypeDeserializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeDeserializer"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"
import {$ObjectIdReader, $ObjectIdReader$Type} from "packages/com/fasterxml/jackson/databind/deser/impl/$ObjectIdReader"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$ContextualDeserializer, $ContextualDeserializer$Type} from "packages/com/fasterxml/jackson/databind/deser/$ContextualDeserializer"
import {$SettableBeanProperty, $SettableBeanProperty$Type} from "packages/com/fasterxml/jackson/databind/deser/$SettableBeanProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractDeserializer extends $JsonDeserializer<(any)> implements $ContextualDeserializer, $Serializable {

/**
 * 
 * @deprecated
 */
constructor(arg0: $BeanDeserializerBuilder$Type, arg1: $BeanDescription$Type, arg2: $Map$Type<(string), ($SettableBeanProperty$Type)>)
constructor(arg0: $BeanDeserializerBuilder$Type, arg1: $BeanDescription$Type, arg2: $Map$Type<(string), ($SettableBeanProperty$Type)>, arg3: $Map$Type<(string), ($SettableBeanProperty$Type)>)

public "deserialize"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type): any
public "handledType"(): $Class<(any)>
public "logicalType"(): $LogicalType
public "createContextual"(arg0: $DeserializationContext$Type, arg1: $BeanProperty$Type): $JsonDeserializer<(any)>
public static "constructForNonPOJO"(arg0: $BeanDescription$Type): $AbstractDeserializer
public "deserializeWithType"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type, arg2: $TypeDeserializer$Type): any
public "findBackReference"(arg0: string): $SettableBeanProperty
public "getObjectIdReader"(): $ObjectIdReader
public "isCachable"(): boolean
public "supportsUpdate"(arg0: $DeserializationConfig$Type): boolean
get "objectIdReader"(): $ObjectIdReader
get "cachable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDeserializer$Type = ($AbstractDeserializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractDeserializer_ = $AbstractDeserializer$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$NumericNode" {
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$JsonParser$NumberType, $JsonParser$NumberType$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$NumberType"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$ValueNode, $ValueNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ValueNode"
import {$JsonNodeType, $JsonNodeType$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeType"

export class $NumericNode extends $ValueNode {


public "intValue"(): integer
public "longValue"(): long
public "doubleValue"(): double
public "isNaN"(): boolean
public "asInt"(): integer
public "asInt"(arg0: integer): integer
public "bigIntegerValue"(): $BigInteger
public "numberValue"(): number
public "getNodeType"(): $JsonNodeType
public "asLong"(arg0: long): long
public "asLong"(): long
public "asDouble"(): double
public "asDouble"(arg0: double): double
public "decimalValue"(): $BigDecimal
public "canConvertToInt"(): boolean
public "asText"(): string
public "canConvertToLong"(): boolean
public "numberType"(): $JsonParser$NumberType
get "naN"(): boolean
get "nodeType"(): $JsonNodeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumericNode$Type = ($NumericNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumericNode_ = $NumericNode$Type;
}}
declare module "packages/com/fasterxml/jackson/core/async/$NonBlockingInputFeeder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonBlockingInputFeeder {

 "endOfInput"(): void
 "needMoreInput"(): boolean
}

export namespace $NonBlockingInputFeeder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonBlockingInputFeeder$Type = ($NonBlockingInputFeeder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonBlockingInputFeeder_ = $NonBlockingInputFeeder$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$ClassIntrospector$MixInResolver" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $ClassIntrospector$MixInResolver {

 "copy"(): $ClassIntrospector$MixInResolver
 "findMixInClassFor"(arg0: $Class$Type<(any)>): $Class<(any)>
}

export namespace $ClassIntrospector$MixInResolver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassIntrospector$MixInResolver$Type = ($ClassIntrospector$MixInResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassIntrospector$MixInResolver_ = $ClassIntrospector$MixInResolver$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$VisibilityChecker" {
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$Member, $Member$Type} from "packages/java/lang/reflect/$Member"
import {$AnnotatedField, $AnnotatedField$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedField"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$JsonAutoDetect, $JsonAutoDetect$Type} from "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$PropertyAccessor, $PropertyAccessor$Type} from "packages/com/fasterxml/jackson/annotation/$PropertyAccessor"
import {$JsonAutoDetect$Value, $JsonAutoDetect$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect$Value"
import {$JsonAutoDetect$Visibility, $JsonAutoDetect$Visibility$Type} from "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect$Visibility"
import {$AnnotatedMethod, $AnnotatedMethod$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMethod"

export interface $VisibilityChecker<T extends $VisibilityChecker<(T)>> {

 "with"(arg0: $JsonAutoDetect$Visibility$Type): T
 "with"(arg0: $JsonAutoDetect$Type): T
 "isGetterVisible"(arg0: $AnnotatedMethod$Type): boolean
 "isGetterVisible"(arg0: $Method$Type): boolean
 "isFieldVisible"(arg0: $AnnotatedField$Type): boolean
 "isFieldVisible"(arg0: $Field$Type): boolean
 "isSetterVisible"(arg0: $Method$Type): boolean
 "isSetterVisible"(arg0: $AnnotatedMethod$Type): boolean
 "isIsGetterVisible"(arg0: $AnnotatedMethod$Type): boolean
 "isIsGetterVisible"(arg0: $Method$Type): boolean
 "isCreatorVisible"(arg0: $AnnotatedMember$Type): boolean
 "isCreatorVisible"(arg0: $Member$Type): boolean
 "withVisibility"(arg0: $PropertyAccessor$Type, arg1: $JsonAutoDetect$Visibility$Type): T
 "withOverrides"(arg0: $JsonAutoDetect$Value$Type): T
 "withSetterVisibility"(arg0: $JsonAutoDetect$Visibility$Type): T
 "withIsGetterVisibility"(arg0: $JsonAutoDetect$Visibility$Type): T
 "withFieldVisibility"(arg0: $JsonAutoDetect$Visibility$Type): T
 "withGetterVisibility"(arg0: $JsonAutoDetect$Visibility$Type): T
 "withCreatorVisibility"(arg0: $JsonAutoDetect$Visibility$Type): T
}

export namespace $VisibilityChecker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisibilityChecker$Type<T> = ($VisibilityChecker<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisibilityChecker_<T> = $VisibilityChecker$Type<(T)>;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonSetter$Value" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$JsonSetter, $JsonSetter$Type} from "packages/com/fasterxml/jackson/annotation/$JsonSetter"
import {$Nulls, $Nulls$Type} from "packages/com/fasterxml/jackson/annotation/$Nulls"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JacksonAnnotationValue, $JacksonAnnotationValue$Type} from "packages/com/fasterxml/jackson/annotation/$JacksonAnnotationValue"

export class $JsonSetter$Value implements $JacksonAnnotationValue<($JsonSetter)>, $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"(arg0: $JsonSetter$Type): $JsonSetter$Value
public static "merge"(arg0: $JsonSetter$Value$Type, arg1: $JsonSetter$Value$Type): $JsonSetter$Value
public static "empty"(): $JsonSetter$Value
public static "construct"(arg0: $Nulls$Type, arg1: $Nulls$Type): $JsonSetter$Value
public "valueFor"(): $Class<($JsonSetter)>
public "withContentNulls"(arg0: $Nulls$Type): $JsonSetter$Value
public "getContentNulls"(): $Nulls
public static "forValueNulls"(arg0: $Nulls$Type, arg1: $Nulls$Type): $JsonSetter$Value
public static "forValueNulls"(arg0: $Nulls$Type): $JsonSetter$Value
public static "forContentNulls"(arg0: $Nulls$Type): $JsonSetter$Value
public "getValueNulls"(): $Nulls
public "withValueNulls"(arg0: $Nulls$Type): $JsonSetter$Value
public "withValueNulls"(arg0: $Nulls$Type, arg1: $Nulls$Type): $JsonSetter$Value
public "withOverrides"(arg0: $JsonSetter$Value$Type): $JsonSetter$Value
public "nonDefaultValueNulls"(): $Nulls
public "nonDefaultContentNulls"(): $Nulls
get "contentNulls"(): $Nulls
get "valueNulls"(): $Nulls
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonSetter$Value$Type = ($JsonSetter$Value);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonSetter$Value_ = $JsonSetter$Value$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonStringFormatVisitor" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$JsonValueFormat, $JsonValueFormat$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonValueFormat"
import {$JsonValueFormatVisitor, $JsonValueFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonValueFormatVisitor"

export interface $JsonStringFormatVisitor extends $JsonValueFormatVisitor {

 "format"(arg0: $JsonValueFormat$Type): void
 "enumTypes"(arg0: $Set$Type<(string)>): void
}

export namespace $JsonStringFormatVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonStringFormatVisitor$Type = ($JsonStringFormatVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonStringFormatVisitor_ = $JsonStringFormatVisitor$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$SerializerProvider" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$SerializationConfig, $SerializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$SerializationConfig"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$ObjectIdGenerator, $ObjectIdGenerator$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator"
import {$SerializationFeature, $SerializationFeature$Type} from "packages/com/fasterxml/jackson/databind/$SerializationFeature"
import {$FilterProvider, $FilterProvider$Type} from "packages/com/fasterxml/jackson/databind/ser/$FilterProvider"
import {$WritableObjectId, $WritableObjectId$Type} from "packages/com/fasterxml/jackson/databind/ser/impl/$WritableObjectId"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$MapperFeature, $MapperFeature$Type} from "packages/com/fasterxml/jackson/databind/$MapperFeature"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$JsonMappingException, $JsonMappingException$Type} from "packages/com/fasterxml/jackson/databind/$JsonMappingException"
import {$DatabindContext, $DatabindContext$Type} from "packages/com/fasterxml/jackson/databind/$DatabindContext"
import {$Annotated, $Annotated$Type} from "packages/com/fasterxml/jackson/databind/introspect/$Annotated"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$DatatypeFeature, $DatatypeFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeature"
import {$BeanPropertyDefinition, $BeanPropertyDefinition$Type} from "packages/com/fasterxml/jackson/databind/introspect/$BeanPropertyDefinition"
import {$TokenBuffer, $TokenBuffer$Type} from "packages/com/fasterxml/jackson/databind/util/$TokenBuffer"

export class $SerializerProvider extends $DatabindContext {
static readonly "DEFAULT_NULL_KEY_SERIALIZER": $JsonSerializer<(any)>

constructor()

public "setAttribute"(arg0: any, arg1: any): $SerializerProvider
public "getAttribute"(arg0: any): any
public "getTimeZone"(): $TimeZone
public "getLocale"(): $Locale
public "isEnabled"(arg0: $SerializationFeature$Type): boolean
public "isEnabled"(arg0: $DatatypeFeature$Type): boolean
public "isEnabled"(arg0: $MapperFeature$Type): boolean
public "getGenerator"(): $JsonGenerator
public "getConfig"(): $SerializationConfig
public "getTypeFactory"(): $TypeFactory
public "getActiveView"(): $Class<(any)>
public "getFilterProvider"(): $FilterProvider
public "findObjectId"(arg0: any, arg1: $ObjectIdGenerator$Type<(any)>): $WritableObjectId
public "serializerInstance"(arg0: $Annotated$Type, arg1: any): $JsonSerializer<(any)>
public "findTypeSerializer"(arg0: $JavaType$Type): $TypeSerializer
public "findKeySerializer"(arg0: $Class$Type<(any)>, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
public "findKeySerializer"(arg0: $JavaType$Type, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
/**
 * 
 * @deprecated
 */
public "mappingException"(arg0: string, ...arg1: (any)[]): $JsonMappingException
public "defaultSerializeNull"(arg0: $JsonGenerator$Type): void
public "getDefaultNullKeySerializer"(): $JsonSerializer<(any)>
public "findValueSerializer"(arg0: $JavaType$Type): $JsonSerializer<(any)>
public "findValueSerializer"(arg0: $Class$Type<(any)>, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
public "findValueSerializer"(arg0: $JavaType$Type, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
public "findValueSerializer"(arg0: $Class$Type<(any)>): $JsonSerializer<(any)>
public "handlePrimaryContextualization"(arg0: $JsonSerializer$Type<(any)>, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
public "defaultSerializeDateValue"(arg0: long, arg1: $JsonGenerator$Type): void
public "defaultSerializeDateValue"(arg0: $Date$Type, arg1: $JsonGenerator$Type): void
public "handleSecondaryContextualization"(arg0: $JsonSerializer$Type<(any)>, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
public "includeFilterInstance"(arg0: $BeanPropertyDefinition$Type, arg1: $Class$Type<(any)>): any
public "findPrimaryPropertySerializer"(arg0: $Class$Type<(any)>, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
public "findPrimaryPropertySerializer"(arg0: $JavaType$Type, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
public "defaultSerializeValue"(arg0: any, arg1: $JsonGenerator$Type): void
public "setNullValueSerializer"(arg0: $JsonSerializer$Type<(any)>): void
public "reportMappingProblem"(arg0: $Throwable$Type, arg1: string, ...arg2: (any)[]): void
public "reportMappingProblem"(arg0: string, ...arg1: (any)[]): void
public "isUnknownTypeSerializer"(arg0: $JsonSerializer$Type<(any)>): boolean
public "defaultSerializeField"(arg0: string, arg1: any, arg2: $JsonGenerator$Type): void
public "getDefaultNullValueSerializer"(): $JsonSerializer<(any)>
public "reportBadPropertyDefinition"<T>(arg0: $BeanDescription$Type, arg1: $BeanPropertyDefinition$Type, arg2: string, ...arg3: (any)[]): T
public "findTypedValueSerializer"(arg0: $Class$Type<(any)>, arg1: boolean, arg2: $BeanProperty$Type): $JsonSerializer<(any)>
public "findTypedValueSerializer"(arg0: $JavaType$Type, arg1: boolean, arg2: $BeanProperty$Type): $JsonSerializer<(any)>
public "includeFilterSuppressNulls"(arg0: any): boolean
public "findContentValueSerializer"(arg0: $Class$Type<(any)>, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
public "findContentValueSerializer"(arg0: $JavaType$Type, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
public "findNullKeySerializer"(arg0: $JavaType$Type, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
public "setNullKeySerializer"(arg0: $JsonSerializer$Type<(any)>): void
public "getDefaultPropertyInclusion"(arg0: $Class$Type<(any)>): $JsonInclude$Value
public "findNullValueSerializer"(arg0: $BeanProperty$Type): $JsonSerializer<(any)>
public "reportBadTypeDefinition"<T>(arg0: $BeanDescription$Type, arg1: string, ...arg2: (any)[]): T
public "hasSerializationFeatures"(arg0: integer): boolean
public "setDefaultKeySerializer"(arg0: $JsonSerializer$Type<(any)>): void
public "getUnknownTypeSerializer"(arg0: $Class$Type<(any)>): $JsonSerializer<(any)>
public "defaultSerializeDateKey"(arg0: $Date$Type, arg1: $JsonGenerator$Type): void
public "defaultSerializeDateKey"(arg0: long, arg1: $JsonGenerator$Type): void
public "bufferForValueConversion"(): $TokenBuffer
public "bufferForValueConversion"(arg0: $ObjectCodec$Type): $TokenBuffer
public "getAnnotationIntrospector"(): $AnnotationIntrospector
public "canOverrideAccessModifiers"(): boolean
public "reportBadDefinition"<T>(arg0: $JavaType$Type, arg1: string): T
public "reportBadDefinition"<T>(arg0: $JavaType$Type, arg1: string, arg2: $Throwable$Type): T
public "reportBadDefinition"<T>(arg0: $Class$Type<(any)>, arg1: string, arg2: $Throwable$Type): T
public "getDefaultPropertyFormat"(arg0: $Class$Type<(any)>): $JsonFormat$Value
public "invalidTypeIdException"(arg0: $JavaType$Type, arg1: string, arg2: string): $JsonMappingException
public "constructSpecializedType"(arg0: $JavaType$Type, arg1: $Class$Type<(any)>): $JavaType
get "timeZone"(): $TimeZone
get "locale"(): $Locale
get "generator"(): $JsonGenerator
get "config"(): $SerializationConfig
get "typeFactory"(): $TypeFactory
get "activeView"(): $Class<(any)>
get "filterProvider"(): $FilterProvider
get "defaultNullKeySerializer"(): $JsonSerializer<(any)>
set "nullValueSerializer"(value: $JsonSerializer$Type<(any)>)
get "defaultNullValueSerializer"(): $JsonSerializer<(any)>
set "nullKeySerializer"(value: $JsonSerializer$Type<(any)>)
set "defaultKeySerializer"(value: $JsonSerializer$Type<(any)>)
get "annotationIntrospector"(): $AnnotationIntrospector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializerProvider$Type = ($SerializerProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializerProvider_ = $SerializerProvider$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/std/$BeanSerializerBase" {
import {$JsonFormatVisitable, $JsonFormatVisitable$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitable"
import {$PropertyWriter, $PropertyWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/$PropertyWriter"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$ObjectIdWriter, $ObjectIdWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/impl/$ObjectIdWriter"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$ContextualSerializer, $ContextualSerializer$Type} from "packages/com/fasterxml/jackson/databind/ser/$ContextualSerializer"
import {$JsonFormatVisitorWrapper, $JsonFormatVisitorWrapper$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWrapper"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$SchemaAware, $SchemaAware$Type} from "packages/com/fasterxml/jackson/databind/jsonschema/$SchemaAware"
import {$StdSerializer, $StdSerializer$Type} from "packages/com/fasterxml/jackson/databind/ser/std/$StdSerializer"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"
import {$ResolvableSerializer, $ResolvableSerializer$Type} from "packages/com/fasterxml/jackson/databind/ser/$ResolvableSerializer"

export class $BeanSerializerBase extends $StdSerializer<(any)> implements $ContextualSerializer, $ResolvableSerializer, $JsonFormatVisitable, $SchemaAware {


public "resolve"(arg0: $SerializerProvider$Type): void
public "properties"(): $Iterator<($PropertyWriter)>
/**
 * 
 * @deprecated
 */
public "getSchema"(arg0: $SerializerProvider$Type, arg1: $Type$Type): $JsonNode
public "serialize"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "withObjectIdWriter"(arg0: $ObjectIdWriter$Type): $BeanSerializerBase
public "createContextual"(arg0: $SerializerProvider$Type, arg1: $BeanProperty$Type): $JsonSerializer<(any)>
public "usesObjectId"(): boolean
public "acceptJsonFormatVisitor"(arg0: $JsonFormatVisitorWrapper$Type, arg1: $JavaType$Type): void
public "serializeWithType"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type, arg3: $TypeSerializer$Type): void
public "getSchema"(arg0: $SerializerProvider$Type, arg1: $Type$Type, arg2: boolean): $JsonNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeanSerializerBase$Type = ($BeanSerializerBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeanSerializerBase_ = $BeanSerializerBase$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$FilterProvider" {
import {$BeanPropertyFilter, $BeanPropertyFilter$Type} from "packages/com/fasterxml/jackson/databind/ser/$BeanPropertyFilter"
import {$PropertyFilter, $PropertyFilter$Type} from "packages/com/fasterxml/jackson/databind/ser/$PropertyFilter"

export class $FilterProvider {

constructor()

public "findPropertyFilter"(arg0: any, arg1: any): $PropertyFilter
/**
 * 
 * @deprecated
 */
public "findFilter"(arg0: any): $BeanPropertyFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterProvider$Type = ($FilterProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterProvider_ = $FilterProvider$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$ObjectCodec" {
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$Versioned, $Versioned$Type} from "packages/com/fasterxml/jackson/core/$Versioned"
import {$TreeNode, $TreeNode$Type} from "packages/com/fasterxml/jackson/core/$TreeNode"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResolvedType, $ResolvedType$Type} from "packages/com/fasterxml/jackson/core/type/$ResolvedType"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$TreeCodec, $TreeCodec$Type} from "packages/com/fasterxml/jackson/core/$TreeCodec"
import {$JsonFactory, $JsonFactory$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$TypeReference, $TypeReference$Type} from "packages/com/fasterxml/jackson/core/type/$TypeReference"

export class $ObjectCodec extends $TreeCodec implements $Versioned {


public "version"(): $Version
public "getFactory"(): $JsonFactory
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $ResolvedType$Type): T
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $TypeReference$Type<(T)>): T
public "writeValue"(arg0: $JsonGenerator$Type, arg1: any): void
public "readTree"<T extends $TreeNode>(arg0: $JsonParser$Type): T
public "writeTree"(arg0: $JsonGenerator$Type, arg1: $TreeNode$Type): void
public "readValues"<T>(arg0: $JsonParser$Type, arg1: $ResolvedType$Type): $Iterator<(T)>
public "readValues"<T>(arg0: $JsonParser$Type, arg1: $Class$Type<(T)>): $Iterator<(T)>
public "readValues"<T>(arg0: $JsonParser$Type, arg1: $TypeReference$Type<(T)>): $Iterator<(T)>
public "createArrayNode"(): $TreeNode
public "createObjectNode"(): $TreeNode
public "treeAsTokens"(arg0: $TreeNode$Type): $JsonParser
public "treeToValue"<T>(arg0: $TreeNode$Type, arg1: $Class$Type<(T)>): T
/**
 * 
 * @deprecated
 */
public "getJsonFactory"(): $JsonFactory
get "factory"(): $JsonFactory
get "jsonFactory"(): $JsonFactory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCodec$Type = ($ObjectCodec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCodec_ = $ObjectCodec$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$MutableConfigOverride" {
import {$JsonSetter$Value, $JsonSetter$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonSetter$Value"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ConfigOverride, $ConfigOverride$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConfigOverride"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$JsonIgnoreProperties$Value, $JsonIgnoreProperties$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonIgnoreProperties$Value"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JsonAutoDetect$Value, $JsonAutoDetect$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect$Value"

export class $MutableConfigOverride extends $ConfigOverride implements $Serializable {

constructor()

public "copy"(): $MutableConfigOverride
public "setFormat"(arg0: $JsonFormat$Value$Type): $MutableConfigOverride
public "setVisibility"(arg0: $JsonAutoDetect$Value$Type): $MutableConfigOverride
public "setInclude"(arg0: $JsonInclude$Value$Type): $MutableConfigOverride
public "setIgnorals"(arg0: $JsonIgnoreProperties$Value$Type): $MutableConfigOverride
public "setIsIgnoredType"(arg0: boolean): $MutableConfigOverride
public "setSetterInfo"(arg0: $JsonSetter$Value$Type): $MutableConfigOverride
public "setMergeable"(arg0: boolean): $MutableConfigOverride
public "setIncludeAsProperty"(arg0: $JsonInclude$Value$Type): $MutableConfigOverride
set "format"(value: $JsonFormat$Value$Type)
set "visibility"(value: $JsonAutoDetect$Value$Type)
set "include"(value: $JsonInclude$Value$Type)
set "ignorals"(value: $JsonIgnoreProperties$Value$Type)
set "isIgnoredType"(value: boolean)
set "setterInfo"(value: $JsonSetter$Value$Type)
set "mergeable"(value: boolean)
set "includeAsProperty"(value: $JsonInclude$Value$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableConfigOverride$Type = ($MutableConfigOverride);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableConfigOverride_ = $MutableConfigOverride$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/type/$TypeModifier" {
import {$TypeBindings, $TypeBindings$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBindings"
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $TypeModifier {

constructor()

public "modifyType"(arg0: $JavaType$Type, arg1: $Type$Type, arg2: $TypeBindings$Type, arg3: $TypeFactory$Type): $JavaType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeModifier$Type = ($TypeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeModifier_ = $TypeModifier$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$DateFormat, $DateFormat$Type} from "packages/java/text/$DateFormat"
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$ContextAttributes, $ContextAttributes$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ContextAttributes"
import {$ClassIntrospector, $ClassIntrospector$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ClassIntrospector"
import {$ClassIntrospector$MixInResolver, $ClassIntrospector$MixInResolver$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ClassIntrospector$MixInResolver"
import {$TypeResolverBuilder, $TypeResolverBuilder$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeResolverBuilder"
import {$AccessorNamingStrategy$Provider, $AccessorNamingStrategy$Provider$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AccessorNamingStrategy$Provider"
import {$JsonIgnoreProperties$Value, $JsonIgnoreProperties$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonIgnoreProperties$Value"
import {$JsonIncludeProperties$Value, $JsonIncludeProperties$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonIncludeProperties$Value"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$AnnotatedClass, $AnnotatedClass$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedClass"
import {$MapperFeature, $MapperFeature$Type} from "packages/com/fasterxml/jackson/databind/$MapperFeature"
import {$HandlerInstantiator, $HandlerInstantiator$Type} from "packages/com/fasterxml/jackson/databind/cfg/$HandlerInstantiator"
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$JsonSetter$Value, $JsonSetter$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonSetter$Value"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$PolymorphicTypeValidator, $PolymorphicTypeValidator$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$PolymorphicTypeValidator"
import {$ConfigOverride, $ConfigOverride$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConfigOverride"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$TypeIdResolver, $TypeIdResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeIdResolver"
import {$PropertyNamingStrategy, $PropertyNamingStrategy$Type} from "packages/com/fasterxml/jackson/databind/$PropertyNamingStrategy"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$ConfigFeature, $ConfigFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConfigFeature"
import {$TypeReference, $TypeReference$Type} from "packages/com/fasterxml/jackson/core/type/$TypeReference"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$SubtypeResolver, $SubtypeResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$SubtypeResolver"
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$VisibilityChecker, $VisibilityChecker$Type} from "packages/com/fasterxml/jackson/databind/introspect/$VisibilityChecker"
import {$Annotated, $Annotated$Type} from "packages/com/fasterxml/jackson/databind/introspect/$Annotated"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $MapperConfig<T extends $MapperConfig<(T)>> implements $ClassIntrospector$MixInResolver, $Serializable {


public "getAttributes"(): $ContextAttributes
public "getTimeZone"(): $TimeZone
public "with"(...arg0: ($MapperFeature$Type)[]): T
public "with"(arg0: $MapperFeature$Type, arg1: boolean): T
public "getLocale"(): $Locale
public "isEnabled"(arg0: $MapperFeature$Type): boolean
public "without"(...arg0: ($MapperFeature$Type)[]): T
/**
 * 
 * @deprecated
 */
public "hasMapperFeatures"(arg0: integer): boolean
public "compileString"(arg0: string): $SerializableString
public "findConfigOverride"(arg0: $Class$Type<(any)>): $ConfigOverride
public "getAccessorNaming"(): $AccessorNamingStrategy$Provider
public "getConfigOverride"(arg0: $Class$Type<(any)>): $ConfigOverride
public "getDefaultTyper"(arg0: $JavaType$Type): $TypeResolverBuilder<(any)>
public "getBase64Variant"(): $Base64Variant
public "useRootWrapping"(): boolean
public "getSubtypeResolver"(): $SubtypeResolver
public "getTypeFactory"(): $TypeFactory
public "constructType"(arg0: $TypeReference$Type<(any)>): $JavaType
public "constructType"(arg0: $Class$Type<(any)>): $JavaType
public "getDateFormat"(): $DateFormat
public "getActiveView"(): $Class<(any)>
public "findRootName"(arg0: $JavaType$Type): $PropertyName
public "findRootName"(arg0: $Class$Type<(any)>): $PropertyName
public "getDefaultPropertyIgnorals"(arg0: $Class$Type<(any)>, arg1: $AnnotatedClass$Type): $JsonIgnoreProperties$Value
public "getDefaultPropertyIgnorals"(arg0: $Class$Type<(any)>): $JsonIgnoreProperties$Value
public "introspectClassAnnotations"(arg0: $Class$Type<(any)>): $BeanDescription
public "introspectClassAnnotations"(arg0: $JavaType$Type): $BeanDescription
public "getDefaultSetterInfo"(): $JsonSetter$Value
public "getDefaultPropertyInclusions"(arg0: $Class$Type<(any)>, arg1: $AnnotatedClass$Type): $JsonIncludeProperties$Value
public "typeResolverBuilderInstance"(arg0: $Annotated$Type, arg1: $Class$Type<(any)>): $TypeResolverBuilder<(any)>
public "isAnnotationProcessingEnabled"(): boolean
public "typeIdResolverInstance"(arg0: $Annotated$Type, arg1: $Class$Type<(any)>): $TypeIdResolver
public "getDefaultInclusion"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>, arg2: $JsonInclude$Value$Type): $JsonInclude$Value
public "getDefaultInclusion"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>): $JsonInclude$Value
public "getClassIntrospector"(): $ClassIntrospector
public "hasExplicitTimeZone"(): boolean
public "introspectDirectClassAnnotations"(arg0: $Class$Type<(any)>): $BeanDescription
public "introspectDirectClassAnnotations"(arg0: $JavaType$Type): $BeanDescription
public "shouldSortPropertiesAlphabetically"(): boolean
public static "collectFeatureDefaults"<F extends ($Enum<(F)>) & ($ConfigFeature)>(arg0: $Class$Type<(F)>): integer
public "getDefaultMergeable"(arg0: $Class$Type<(any)>): boolean
public "getDefaultMergeable"(): boolean
public "getDefaultPropertyInclusion"(): $JsonInclude$Value
public "getDefaultPropertyInclusion"(arg0: $Class$Type<(any)>, arg1: $JsonInclude$Value$Type): $JsonInclude$Value
public "getDefaultPropertyInclusion"(arg0: $Class$Type<(any)>): $JsonInclude$Value
public "getPropertyNamingStrategy"(): $PropertyNamingStrategy
public "getDefaultVisibilityChecker"(): $VisibilityChecker<(any)>
public "getDefaultVisibilityChecker"(arg0: $Class$Type<(any)>, arg1: $AnnotatedClass$Type): $VisibilityChecker<(any)>
public "getPolymorphicTypeValidator"(): $PolymorphicTypeValidator
public "getAnnotationIntrospector"(): $AnnotationIntrospector
public "canOverrideAccessModifiers"(): boolean
public "getDefaultPropertyFormat"(arg0: $Class$Type<(any)>): $JsonFormat$Value
public "constructSpecializedType"(arg0: $JavaType$Type, arg1: $Class$Type<(any)>): $JavaType
public "getHandlerInstantiator"(): $HandlerInstantiator
public "copy"(): $ClassIntrospector$MixInResolver
public "findMixInClassFor"(arg0: $Class$Type<(any)>): $Class<(any)>
get "attributes"(): $ContextAttributes
get "timeZone"(): $TimeZone
get "locale"(): $Locale
get "accessorNaming"(): $AccessorNamingStrategy$Provider
get "base64Variant"(): $Base64Variant
get "subtypeResolver"(): $SubtypeResolver
get "typeFactory"(): $TypeFactory
get "dateFormat"(): $DateFormat
get "activeView"(): $Class<(any)>
get "defaultSetterInfo"(): $JsonSetter$Value
get "annotationProcessingEnabled"(): boolean
get "classIntrospector"(): $ClassIntrospector
get "defaultMergeable"(): boolean
get "defaultPropertyInclusion"(): $JsonInclude$Value
get "propertyNamingStrategy"(): $PropertyNamingStrategy
get "defaultVisibilityChecker"(): $VisibilityChecker<(any)>
get "polymorphicTypeValidator"(): $PolymorphicTypeValidator
get "annotationIntrospector"(): $AnnotationIntrospector
get "handlerInstantiator"(): $HandlerInstantiator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapperConfig$Type<T> = ($MapperConfig<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapperConfig_<T> = $MapperConfig$Type<(T)>;
}}
declare module "packages/com/fasterxml/jackson/core/$StreamReadFeature" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$JsonParser$Feature, $JsonParser$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$Feature"
import {$JacksonFeature, $JacksonFeature$Type} from "packages/com/fasterxml/jackson/core/util/$JacksonFeature"

export class $StreamReadFeature extends $Enum<($StreamReadFeature)> implements $JacksonFeature {
static readonly "AUTO_CLOSE_SOURCE": $StreamReadFeature
static readonly "STRICT_DUPLICATE_DETECTION": $StreamReadFeature
static readonly "IGNORE_UNDEFINED": $StreamReadFeature
static readonly "INCLUDE_SOURCE_IN_LOCATION": $StreamReadFeature
static readonly "USE_FAST_DOUBLE_PARSER": $StreamReadFeature


public static "values"(): ($StreamReadFeature)[]
public static "valueOf"(arg0: string): $StreamReadFeature
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "mappedFeature"(): $JsonParser$Feature
public "enabledIn"(arg0: integer): boolean
public static "collectDefaults"(): integer
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamReadFeature$Type = (("include_source_in_location") | ("strict_duplicate_detection") | ("auto_close_source") | ("ignore_undefined") | ("use_fast_double_parser")) | ($StreamReadFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StreamReadFeature_ = $StreamReadFeature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$JsonSerializable" {
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"

export interface $JsonSerializable {

 "serialize"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type): void
 "serializeWithType"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type, arg2: $TypeSerializer$Type): void
}

export namespace $JsonSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonSerializable$Type = ($JsonSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonSerializable_ = $JsonSerializable$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$DatabindContext" {
import {$PolymorphicTypeValidator, $PolymorphicTypeValidator$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$PolymorphicTypeValidator"
import {$Converter, $Converter$Type} from "packages/com/fasterxml/jackson/databind/util/$Converter"
import {$ObjectIdInfo, $ObjectIdInfo$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ObjectIdInfo"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$ObjectIdGenerator, $ObjectIdGenerator$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator"
import {$ObjectIdResolver, $ObjectIdResolver$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdResolver"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$Annotated, $Annotated$Type} from "packages/com/fasterxml/jackson/databind/introspect/$Annotated"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$DatatypeFeature, $DatatypeFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeature"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$MapperFeature, $MapperFeature$Type} from "packages/com/fasterxml/jackson/databind/$MapperFeature"

export class $DatabindContext {

constructor()

public "setAttribute"(arg0: any, arg1: any): $DatabindContext
public "getAttribute"(arg0: any): any
public "getTimeZone"(): $TimeZone
public "getLocale"(): $Locale
public "isEnabled"(arg0: $MapperFeature$Type): boolean
public "isEnabled"(arg0: $DatatypeFeature$Type): boolean
public "getConfig"(): $MapperConfig<(any)>
public "getTypeFactory"(): $TypeFactory
public "constructType"(arg0: $Type$Type): $JavaType
public "getActiveView"(): $Class<(any)>
public "resolveSubType"(arg0: $JavaType$Type, arg1: string): $JavaType
public "converterInstance"(arg0: $Annotated$Type, arg1: any): $Converter<(any), (any)>
public "getAnnotationIntrospector"(): $AnnotationIntrospector
public "canOverrideAccessModifiers"(): boolean
public "reportBadDefinition"<T>(arg0: $Class$Type<(any)>, arg1: string): T
public "reportBadDefinition"<T>(arg0: $JavaType$Type, arg1: string): T
public "objectIdGeneratorInstance"(arg0: $Annotated$Type, arg1: $ObjectIdInfo$Type): $ObjectIdGenerator<(any)>
public "getDefaultPropertyFormat"(arg0: $Class$Type<(any)>): $JsonFormat$Value
public "resolveAndValidateSubType"(arg0: $JavaType$Type, arg1: string, arg2: $PolymorphicTypeValidator$Type): $JavaType
public "objectIdResolverInstance"(arg0: $Annotated$Type, arg1: $ObjectIdInfo$Type): $ObjectIdResolver
public "constructSpecializedType"(arg0: $JavaType$Type, arg1: $Class$Type<(any)>): $JavaType
get "timeZone"(): $TimeZone
get "locale"(): $Locale
get "config"(): $MapperConfig<(any)>
get "typeFactory"(): $TypeFactory
get "activeView"(): $Class<(any)>
get "annotationIntrospector"(): $AnnotationIntrospector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatabindContext$Type = ($DatabindContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DatabindContext_ = $DatabindContext$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JacksonInject" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$OptBoolean, $OptBoolean$Type} from "packages/com/fasterxml/jackson/annotation/$OptBoolean"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $JacksonInject extends $Annotation {

 "value"(): string
 "useInput"(): $OptBoolean
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $JacksonInject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JacksonInject$Type = ($JacksonInject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JacksonInject_ = $JacksonInject$Type;
}}
declare module "packages/com/fasterxml/jackson/core/json/$JsonReadFeature" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FormatFeature, $FormatFeature$Type} from "packages/com/fasterxml/jackson/core/$FormatFeature"
import {$JsonParser$Feature, $JsonParser$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$Feature"

export class $JsonReadFeature extends $Enum<($JsonReadFeature)> implements $FormatFeature {
static readonly "ALLOW_JAVA_COMMENTS": $JsonReadFeature
static readonly "ALLOW_YAML_COMMENTS": $JsonReadFeature
static readonly "ALLOW_SINGLE_QUOTES": $JsonReadFeature
static readonly "ALLOW_UNQUOTED_FIELD_NAMES": $JsonReadFeature
static readonly "ALLOW_UNESCAPED_CONTROL_CHARS": $JsonReadFeature
static readonly "ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER": $JsonReadFeature
static readonly "ALLOW_LEADING_ZEROS_FOR_NUMBERS": $JsonReadFeature
static readonly "ALLOW_LEADING_PLUS_SIGN_FOR_NUMBERS": $JsonReadFeature
static readonly "ALLOW_LEADING_DECIMAL_POINT_FOR_NUMBERS": $JsonReadFeature
static readonly "ALLOW_TRAILING_DECIMAL_POINT_FOR_NUMBERS": $JsonReadFeature
static readonly "ALLOW_NON_NUMERIC_NUMBERS": $JsonReadFeature
static readonly "ALLOW_MISSING_VALUES": $JsonReadFeature
static readonly "ALLOW_TRAILING_COMMA": $JsonReadFeature


public static "values"(): ($JsonReadFeature)[]
public static "valueOf"(arg0: string): $JsonReadFeature
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "mappedFeature"(): $JsonParser$Feature
public "enabledIn"(arg0: integer): boolean
public static "collectDefaults"(): integer
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonReadFeature$Type = (("allow_java_comments") | ("allow_trailing_comma") | ("allow_leading_decimal_point_for_numbers") | ("allow_trailing_decimal_point_for_numbers") | ("allow_unescaped_control_chars") | ("allow_leading_zeros_for_numbers") | ("allow_single_quotes") | ("allow_yaml_comments") | ("allow_non_numeric_numbers") | ("allow_unquoted_field_names") | ("allow_backslash_escaping_any_character") | ("allow_missing_values") | ("allow_leading_plus_sign_for_numbers")) | ($JsonReadFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonReadFeature_ = $JsonReadFeature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$BeanSerializerBuilder" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ObjectIdWriter, $ObjectIdWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/impl/$ObjectIdWriter"
import {$AnyGetterWriter, $AnyGetterWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/$AnyGetterWriter"
import {$BeanPropertyWriter, $BeanPropertyWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/$BeanPropertyWriter"
import {$AnnotatedClass, $AnnotatedClass$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedClass"
import {$BeanSerializer, $BeanSerializer$Type} from "packages/com/fasterxml/jackson/databind/ser/$BeanSerializer"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"

export class $BeanSerializerBuilder {

constructor(arg0: $BeanDescription$Type)

public "getProperties"(): $List<($BeanPropertyWriter)>
public "setProperties"(arg0: $List$Type<($BeanPropertyWriter$Type)>): void
public "build"(): $JsonSerializer<(any)>
public "getTypeId"(): $AnnotatedMember
public "getFilterId"(): any
public "getAnyGetter"(): $AnyGetterWriter
public "getObjectIdWriter"(): $ObjectIdWriter
public "getClassInfo"(): $AnnotatedClass
public "setAnyGetter"(arg0: $AnyGetterWriter$Type): void
public "setObjectIdWriter"(arg0: $ObjectIdWriter$Type): void
public "setFilterId"(arg0: any): void
public "createDummy"(): $BeanSerializer
public "setTypeId"(arg0: $AnnotatedMember$Type): void
public "setFilteredProperties"(arg0: ($BeanPropertyWriter$Type)[]): void
public "getBeanDescription"(): $BeanDescription
public "hasProperties"(): boolean
public "getFilteredProperties"(): ($BeanPropertyWriter)[]
get "properties"(): $List<($BeanPropertyWriter)>
set "properties"(value: $List$Type<($BeanPropertyWriter$Type)>)
get "typeId"(): $AnnotatedMember
get "filterId"(): any
get "anyGetter"(): $AnyGetterWriter
get "objectIdWriter"(): $ObjectIdWriter
get "classInfo"(): $AnnotatedClass
set "anyGetter"(value: $AnyGetterWriter$Type)
set "objectIdWriter"(value: $ObjectIdWriter$Type)
set "filterId"(value: any)
set "typeId"(value: $AnnotatedMember$Type)
set "filteredProperties"(value: ($BeanPropertyWriter$Type)[])
get "beanDescription"(): $BeanDescription
get "filteredProperties"(): ($BeanPropertyWriter)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeanSerializerBuilder$Type = ($BeanSerializerBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeanSerializerBuilder_ = $BeanSerializerBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/type/$ArrayType" {
import {$TypeBindings, $TypeBindings$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBindings"
import {$TypeBase, $TypeBase$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBase"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $ArrayType extends $TypeBase {


public "equals"(arg0: any): boolean
public "toString"(): string
public "getGenericSignature"(arg0: $StringBuilder$Type): $StringBuilder
public "isAbstract"(): boolean
public static "construct"(arg0: $JavaType$Type, arg1: $TypeBindings$Type, arg2: any, arg3: any): $ArrayType
public static "construct"(arg0: $JavaType$Type, arg1: $TypeBindings$Type): $ArrayType
public "refine"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type, arg2: $JavaType$Type, arg3: ($JavaType$Type)[]): $JavaType
public "withContentType"(arg0: $JavaType$Type): $JavaType
public "hasGenericTypes"(): boolean
public "hasHandlers"(): boolean
public "getErasedSignature"(arg0: $StringBuilder$Type): $StringBuilder
public "getEmptyArray"(): (any)[]
public "isConcrete"(): boolean
public "withTypeHandler"(arg0: any): $ArrayType
public "isArrayType"(): boolean
public "isContainerType"(): boolean
public "getContentTypeHandler"(): any
public "getContentValueHandler"(): any
get "abstract"(): boolean
get "emptyArray"(): (any)[]
get "concrete"(): boolean
get "arrayType"(): boolean
get "containerType"(): boolean
get "contentTypeHandler"(): any
get "contentValueHandler"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayType$Type = ($ArrayType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayType_ = $ArrayType$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$ValueInstantiator" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$PropertyValueBuffer, $PropertyValueBuffer$Type} from "packages/com/fasterxml/jackson/databind/deser/impl/$PropertyValueBuffer"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$AnnotatedWithParams, $AnnotatedWithParams$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedWithParams"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$SettableBeanProperty, $SettableBeanProperty$Type} from "packages/com/fasterxml/jackson/databind/deser/$SettableBeanProperty"

export class $ValueInstantiator {

constructor()

public "getValueClass"(): $Class<(any)>
public "getDefaultCreator"(): $AnnotatedWithParams
public "createFromDouble"(arg0: $DeserializationContext$Type, arg1: double): any
public "getArrayDelegateCreator"(): $AnnotatedWithParams
public "getWithArgsCreator"(): $AnnotatedWithParams
public "createFromObjectWith"(arg0: $DeserializationContext$Type, arg1: (any)[]): any
public "createFromObjectWith"(arg0: $DeserializationContext$Type, arg1: ($SettableBeanProperty$Type)[], arg2: $PropertyValueBuffer$Type): any
public "canInstantiate"(): boolean
public "createContextual"(arg0: $DeserializationContext$Type, arg1: $BeanDescription$Type): $ValueInstantiator
public "canCreateFromDouble"(): boolean
public "createFromBigDecimal"(arg0: $DeserializationContext$Type, arg1: $BigDecimal$Type): any
public "canCreateFromBigInteger"(): boolean
public "createFromBigInteger"(arg0: $DeserializationContext$Type, arg1: $BigInteger$Type): any
public "canCreateFromBigDecimal"(): boolean
public "getFromObjectArguments"(arg0: $DeserializationConfig$Type): ($SettableBeanProperty)[]
public "canCreateUsingDefault"(): boolean
public "canCreateFromString"(): boolean
public "canCreateFromBoolean"(): boolean
public "getArrayDelegateType"(arg0: $DeserializationConfig$Type): $JavaType
public "canCreateUsingArrayDelegate"(): boolean
public "createUsingDelegate"(arg0: $DeserializationContext$Type, arg1: any): any
public "canCreateUsingDelegate"(): boolean
public "canCreateFromObjectWith"(): boolean
public "createUsingArrayDelegate"(arg0: $DeserializationContext$Type, arg1: any): any
public "getDelegateCreator"(): $AnnotatedWithParams
public "createFromInt"(arg0: $DeserializationContext$Type, arg1: integer): any
public "createFromLong"(arg0: $DeserializationContext$Type, arg1: long): any
public "createFromBoolean"(arg0: $DeserializationContext$Type, arg1: boolean): any
public "canCreateFromLong"(): boolean
public "canCreateFromInt"(): boolean
public "createFromString"(arg0: $DeserializationContext$Type, arg1: string): any
public "createUsingDefault"(arg0: $DeserializationContext$Type): any
public "getDelegateType"(arg0: $DeserializationConfig$Type): $JavaType
public "getValueTypeDesc"(): string
get "valueClass"(): $Class<(any)>
get "defaultCreator"(): $AnnotatedWithParams
get "arrayDelegateCreator"(): $AnnotatedWithParams
get "withArgsCreator"(): $AnnotatedWithParams
get "delegateCreator"(): $AnnotatedWithParams
get "valueTypeDesc"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueInstantiator$Type = ($ValueInstantiator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueInstantiator_ = $ValueInstantiator$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$AbstractTypeResolver" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $AbstractTypeResolver {

constructor()

public "findTypeMapping"(arg0: $DeserializationConfig$Type, arg1: $JavaType$Type): $JavaType
public "resolveAbstractType"(arg0: $DeserializationConfig$Type, arg1: $BeanDescription$Type): $JavaType
/**
 * 
 * @deprecated
 */
public "resolveAbstractType"(arg0: $DeserializationConfig$Type, arg1: $JavaType$Type): $JavaType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTypeResolver$Type = ($AbstractTypeResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTypeResolver_ = $AbstractTypeResolver$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonParser" {
import {$NonBlockingInputFeeder, $NonBlockingInputFeeder$Type} from "packages/com/fasterxml/jackson/core/async/$NonBlockingInputFeeder"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$StreamReadCapability, $StreamReadCapability$Type} from "packages/com/fasterxml/jackson/core/$StreamReadCapability"
import {$JsonLocation, $JsonLocation$Type} from "packages/com/fasterxml/jackson/core/$JsonLocation"
import {$JsonStreamContext, $JsonStreamContext$Type} from "packages/com/fasterxml/jackson/core/$JsonStreamContext"
import {$FormatSchema, $FormatSchema$Type} from "packages/com/fasterxml/jackson/core/$FormatSchema"
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$RequestPayload, $RequestPayload$Type} from "packages/com/fasterxml/jackson/core/util/$RequestPayload"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$JsonParser$NumberType, $JsonParser$NumberType$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$NumberType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$StreamReadFeature, $StreamReadFeature$Type} from "packages/com/fasterxml/jackson/core/$StreamReadFeature"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$TypeReference, $TypeReference$Type} from "packages/com/fasterxml/jackson/core/type/$TypeReference"
import {$Versioned, $Versioned$Type} from "packages/com/fasterxml/jackson/core/$Versioned"
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$JacksonFeatureSet, $JacksonFeatureSet$Type} from "packages/com/fasterxml/jackson/core/util/$JacksonFeatureSet"
import {$TreeNode, $TreeNode$Type} from "packages/com/fasterxml/jackson/core/$TreeNode"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$JsonParser$Feature, $JsonParser$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$Feature"

export class $JsonParser implements $Closeable, $Versioned {


public "version"(): $Version
public "nextToken"(): $JsonToken
public "close"(): void
public "isNaN"(): boolean
public "getText"(arg0: $Writer$Type): integer
public "getText"(): string
public "enable"(arg0: $JsonParser$Feature$Type): $JsonParser
public "getTextLength"(): integer
public "isEnabled"(arg0: $StreamReadFeature$Type): boolean
public "isEnabled"(arg0: $JsonParser$Feature$Type): boolean
public "currentToken"(): $JsonToken
public "getSchema"(): $FormatSchema
public "setSchema"(arg0: $FormatSchema$Type): void
public "isClosed"(): boolean
public "configure"(arg0: $JsonParser$Feature$Type, arg1: boolean): $JsonParser
public "nextValue"(): $JsonToken
public "getObjectId"(): any
public "getBooleanValue"(): boolean
public "disable"(arg0: $JsonParser$Feature$Type): $JsonParser
public "currentName"(): string
public "currentValue"(): any
public "getNumberValue"(): number
public "getCodec"(): $ObjectCodec
public "getNumberType"(): $JsonParser$NumberType
public "getIntValue"(): integer
public "getByteValue"(): byte
public "getDoubleValue"(): double
public "getFloatValue"(): float
public "getTypeId"(): any
public "getCurrentToken"(): $JsonToken
public "getLongValue"(): long
public "assignCurrentValue"(arg0: any): void
public "getFormatFeatures"(): integer
public "setCurrentValue"(arg0: any): void
public "getCurrentValue"(): any
public "getFeatureMask"(): integer
public "getTokenLocation"(): $JsonLocation
/**
 * 
 * @deprecated
 */
public "setFeatureMask"(arg0: integer): $JsonParser
public "hasTextCharacters"(): boolean
public "getCurrentName"(): string
public "getBigIntegerValue"(): $BigInteger
public "getTextOffset"(): integer
public "getDecimalValue"(): $BigDecimal
public "getTextCharacters"(): (character)[]
public "getEmbeddedObject"(): any
public "canReadObjectId"(): boolean
public "hasToken"(arg0: $JsonToken$Type): boolean
public "canReadTypeId"(): boolean
public "getParsingContext"(): $JsonStreamContext
public "getCurrentLocation"(): $JsonLocation
public "getShortValue"(): short
public "nextFieldName"(): string
public "nextFieldName"(arg0: $SerializableString$Type): boolean
/**
 * 
 * @deprecated
 */
public "getCurrentTokenId"(): integer
public "hasCurrentToken"(): boolean
public "nextIntValue"(arg0: integer): integer
public "getBinaryValue"(): (byte)[]
public "getBinaryValue"(arg0: $Base64Variant$Type): (byte)[]
public "currentTokenId"(): integer
public "currentLocation"(): $JsonLocation
public "nextTextValue"(): string
public "getInputSource"(): any
public "readBinaryValue"(arg0: $OutputStream$Type): integer
public "readBinaryValue"(arg0: $Base64Variant$Type, arg1: $OutputStream$Type): integer
public "getValueAsInt"(): integer
public "getValueAsInt"(arg0: integer): integer
public "nextBooleanValue"(): boolean
public "nextLongValue"(arg0: long): long
public "finishToken"(): void
public "hasTokenId"(arg0: integer): boolean
public "releaseBuffered"(arg0: $Writer$Type): integer
public "releaseBuffered"(arg0: $OutputStream$Type): integer
public "readValueAsTree"<T extends $TreeNode>(): T
public "getValueAsDouble"(): double
public "getValueAsDouble"(arg0: double): double
public "getValueAsLong"(): long
public "getValueAsLong"(arg0: long): long
public "readValueAs"<T>(arg0: $TypeReference$Type<(any)>): T
public "readValueAs"<T>(arg0: $Class$Type<(T)>): T
public "getValueAsString"(arg0: string): string
public "getValueAsString"(): string
public "getValueAsBoolean"(): boolean
public "getValueAsBoolean"(arg0: boolean): boolean
public "readValuesAs"<T>(arg0: $TypeReference$Type<(T)>): $Iterator<(T)>
public "readValuesAs"<T>(arg0: $Class$Type<(T)>): $Iterator<(T)>
public "skipChildren"(): $JsonParser
public "setCodec"(arg0: $ObjectCodec$Type): void
public "canUseSchema"(arg0: $FormatSchema$Type): boolean
public "clearCurrentToken"(): void
public "canParseAsync"(): boolean
public "getReadCapabilities"(): $JacksonFeatureSet<($StreamReadCapability)>
public "overrideStdFeatures"(arg0: integer, arg1: integer): $JsonParser
public "overrideFormatFeatures"(arg0: integer, arg1: integer): $JsonParser
public "setRequestPayloadOnError"(arg0: (byte)[], arg1: string): void
public "setRequestPayloadOnError"(arg0: $RequestPayload$Type): void
public "setRequestPayloadOnError"(arg0: string): void
public "isExpectedStartArrayToken"(): boolean
public "getLastClearedToken"(): $JsonToken
public "overrideCurrentName"(arg0: string): void
public "isExpectedNumberIntToken"(): boolean
public "getNumberValueExact"(): number
public "isExpectedStartObjectToken"(): boolean
public "getNonBlockingInputFeeder"(): $NonBlockingInputFeeder
public "currentTokenLocation"(): $JsonLocation
public "requiresCustomCodec"(): boolean
get "naN"(): boolean
get "text"(): string
get "textLength"(): integer
get "schema"(): $FormatSchema
set "schema"(value: $FormatSchema$Type)
get "closed"(): boolean
get "objectId"(): any
get "booleanValue"(): boolean
get "numberValue"(): number
get "codec"(): $ObjectCodec
get "numberType"(): $JsonParser$NumberType
get "intValue"(): integer
get "byteValue"(): byte
get "doubleValue"(): double
get "floatValue"(): float
get "typeId"(): any
get "longValue"(): long
get "formatFeatures"(): integer
get "featureMask"(): integer
get "tokenLocation"(): $JsonLocation
set "featureMask"(value: integer)
get "bigIntegerValue"(): $BigInteger
get "textOffset"(): integer
get "decimalValue"(): $BigDecimal
get "textCharacters"(): (character)[]
get "embeddedObject"(): any
get "parsingContext"(): $JsonStreamContext
get "shortValue"(): short
get "binaryValue"(): (byte)[]
get "inputSource"(): any
get "valueAsInt"(): integer
get "valueAsDouble"(): double
get "valueAsLong"(): long
get "valueAsString"(): string
get "valueAsBoolean"(): boolean
set "codec"(value: $ObjectCodec$Type)
get "readCapabilities"(): $JacksonFeatureSet<($StreamReadCapability)>
set "requestPayloadOnError"(value: $RequestPayload$Type)
set "requestPayloadOnError"(value: string)
get "expectedStartArrayToken"(): boolean
get "lastClearedToken"(): $JsonToken
get "expectedNumberIntToken"(): boolean
get "numberValueExact"(): number
get "expectedStartObjectToken"(): boolean
get "nonBlockingInputFeeder"(): $NonBlockingInputFeeder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonParser$Type = ($JsonParser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonParser_ = $JsonParser$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$ValueInstantiators" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$ValueInstantiator, $ValueInstantiator$Type} from "packages/com/fasterxml/jackson/databind/deser/$ValueInstantiator"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"

export interface $ValueInstantiators {

 "findValueInstantiator"(arg0: $DeserializationConfig$Type, arg1: $BeanDescription$Type, arg2: $ValueInstantiator$Type): $ValueInstantiator

(arg0: $DeserializationConfig$Type, arg1: $BeanDescription$Type, arg2: $ValueInstantiator$Type): $ValueInstantiator
}

export namespace $ValueInstantiators {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueInstantiators$Type = ($ValueInstantiators);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueInstantiators_ = $ValueInstantiators$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$TreeNode" {
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$JsonParser$NumberType, $JsonParser$NumberType$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$NumberType"
import {$JsonPointer, $JsonPointer$Type} from "packages/com/fasterxml/jackson/core/$JsonPointer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $TreeNode {

 "get"(arg0: integer): $TreeNode
 "get"(arg0: string): $TreeNode
 "isArray"(): boolean
 "size"(): integer
 "at"(arg0: string): $TreeNode
 "at"(arg0: $JsonPointer$Type): $TreeNode
 "path"(arg0: integer): $TreeNode
 "path"(arg0: string): $TreeNode
 "fieldNames"(): $Iterator<(string)>
 "isObject"(): boolean
 "asToken"(): $JsonToken
 "traverse"(): $JsonParser
 "traverse"(arg0: $ObjectCodec$Type): $JsonParser
 "isContainerNode"(): boolean
 "isMissingNode"(): boolean
 "isValueNode"(): boolean
 "numberType"(): $JsonParser$NumberType
}

export namespace $TreeNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeNode$Type = ($TreeNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeNode_ = $TreeNode$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonNullFormatVisitor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $JsonNullFormatVisitor {

}

export namespace $JsonNullFormatVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNullFormatVisitor$Type = ($JsonNullFormatVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonNullFormatVisitor_ = $JsonNullFormatVisitor$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders" {
import {$ArrayBuilders$BooleanBuilder, $ArrayBuilders$BooleanBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$BooleanBuilder"
import {$ArrayBuilders$ByteBuilder, $ArrayBuilders$ByteBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$ByteBuilder"
import {$HashSet, $HashSet$Type} from "packages/java/util/$HashSet"
import {$ArrayBuilders$IntBuilder, $ArrayBuilders$IntBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$IntBuilder"
import {$ArrayBuilders$FloatBuilder, $ArrayBuilders$FloatBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$FloatBuilder"
import {$ArrayBuilders$ShortBuilder, $ArrayBuilders$ShortBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$ShortBuilder"
import {$ArrayBuilders$LongBuilder, $ArrayBuilders$LongBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$LongBuilder"
import {$ArrayBuilders$DoubleBuilder, $ArrayBuilders$DoubleBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$DoubleBuilder"

export class $ArrayBuilders {

constructor()

public "getLongBuilder"(): $ArrayBuilders$LongBuilder
public "getIntBuilder"(): $ArrayBuilders$IntBuilder
public "getBooleanBuilder"(): $ArrayBuilders$BooleanBuilder
public "getByteBuilder"(): $ArrayBuilders$ByteBuilder
public "getDoubleBuilder"(): $ArrayBuilders$DoubleBuilder
public "getFloatBuilder"(): $ArrayBuilders$FloatBuilder
public "getShortBuilder"(): $ArrayBuilders$ShortBuilder
public static "arrayToSet"<T>(arg0: (T)[]): $HashSet<(T)>
public static "getArrayComparator"(arg0: any): any
public static "insertInListNoDup"<T>(arg0: (T)[], arg1: T): (T)[]
get "longBuilder"(): $ArrayBuilders$LongBuilder
get "intBuilder"(): $ArrayBuilders$IntBuilder
get "booleanBuilder"(): $ArrayBuilders$BooleanBuilder
get "byteBuilder"(): $ArrayBuilders$ByteBuilder
get "doubleBuilder"(): $ArrayBuilders$DoubleBuilder
get "floatBuilder"(): $ArrayBuilders$FloatBuilder
get "shortBuilder"(): $ArrayBuilders$ShortBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayBuilders$Type = ($ArrayBuilders);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayBuilders_ = $ArrayBuilders$Type;
}}
declare module "packages/com/fasterxml/jackson/core/util/$RequestPayload" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $RequestPayload implements $Serializable {

constructor(arg0: (byte)[], arg1: string)
constructor(arg0: charseq)

public "toString"(): string
public "getRawPayload"(): any
get "rawPayload"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequestPayload$Type = ($RequestPayload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequestPayload_ = $RequestPayload$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonFormat$Features" {
import {$JsonFormat$Feature, $JsonFormat$Feature$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Feature"
import {$JsonFormat, $JsonFormat$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat"

export class $JsonFormat$Features {


public "get"(arg0: $JsonFormat$Feature$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "empty"(): $JsonFormat$Features
public "with"(...arg0: ($JsonFormat$Feature$Type)[]): $JsonFormat$Features
public static "construct"(arg0: ($JsonFormat$Feature$Type)[], arg1: ($JsonFormat$Feature$Type)[]): $JsonFormat$Features
public static "construct"(arg0: $JsonFormat$Type): $JsonFormat$Features
public "without"(...arg0: ($JsonFormat$Feature$Type)[]): $JsonFormat$Features
public "withOverrides"(arg0: $JsonFormat$Features$Type): $JsonFormat$Features
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFormat$Features$Type = ($JsonFormat$Features);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFormat$Features_ = $JsonFormat$Features$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$Base64Variant$PaddingReadBehaviour" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Base64Variant$PaddingReadBehaviour extends $Enum<($Base64Variant$PaddingReadBehaviour)> {
static readonly "PADDING_FORBIDDEN": $Base64Variant$PaddingReadBehaviour
static readonly "PADDING_REQUIRED": $Base64Variant$PaddingReadBehaviour
static readonly "PADDING_ALLOWED": $Base64Variant$PaddingReadBehaviour


public static "values"(): ($Base64Variant$PaddingReadBehaviour)[]
public static "valueOf"(arg0: string): $Base64Variant$PaddingReadBehaviour
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Base64Variant$PaddingReadBehaviour$Type = (("padding_required") | ("padding_allowed") | ("padding_forbidden")) | ($Base64Variant$PaddingReadBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Base64Variant$PaddingReadBehaviour_ = $Base64Variant$PaddingReadBehaviour$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$SerializableString" {
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export interface $SerializableString {

 "getValue"(): string
 "charLength"(): integer
 "asQuotedChars"(): (character)[]
 "asUnquotedUTF8"(): (byte)[]
 "appendQuotedUTF8"(arg0: (byte)[], arg1: integer): integer
 "putQuotedUTF8"(arg0: $ByteBuffer$Type): integer
 "appendUnquotedUTF8"(arg0: (byte)[], arg1: integer): integer
 "writeUnquotedUTF8"(arg0: $OutputStream$Type): integer
 "appendUnquoted"(arg0: (character)[], arg1: integer): integer
 "appendQuoted"(arg0: (character)[], arg1: integer): integer
 "asQuotedUTF8"(): (byte)[]
 "writeQuotedUTF8"(arg0: $OutputStream$Type): integer
 "putUnquotedUTF8"(arg0: $ByteBuffer$Type): integer
}

export namespace $SerializableString {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializableString$Type = ($SerializableString);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializableString_ = $SerializableString$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/annotation/$JsonPOJOBuilder" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $JsonPOJOBuilder extends $Annotation {

 "withPrefix"(): string
 "buildMethodName"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $JsonPOJOBuilder {
const DEFAULT_BUILD_METHOD: string
const DEFAULT_WITH_PREFIX: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonPOJOBuilder$Type = ($JsonPOJOBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonPOJOBuilder_ = $JsonPOJOBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/type/$TypeBase" {
import {$TypeBindings, $TypeBindings$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBindings"
import {$JsonSerializable, $JsonSerializable$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializable"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $TypeBase extends $JavaType implements $JsonSerializable {


public "getInterfaces"(): $List<($JavaType)>
public "getGenericSignature"(arg0: $StringBuilder$Type): $StringBuilder
public "serialize"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type): void
public "getSuperClass"(): $JavaType
public "getBindings"(): $TypeBindings
public "toCanonical"(): string
public "containedTypeCount"(): integer
/**
 * 
 * @deprecated
 */
public "containedTypeName"(arg0: integer): string
public "getErasedSignature"(arg0: $StringBuilder$Type): $StringBuilder
public "findTypeParameters"(arg0: $Class$Type<(any)>): ($JavaType)[]
public "findSuperType"(arg0: $Class$Type<(any)>): $JavaType
public "serializeWithType"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type, arg2: $TypeSerializer$Type): void
get "interfaces"(): $List<($JavaType)>
get "superClass"(): $JavaType
get "bindings"(): $TypeBindings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeBase$Type = ($TypeBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeBase_ = $TypeBase$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$ConfigFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConfigFeature {

 "getMask"(): integer
 "enabledByDefault"(): boolean
 "enabledIn"(arg0: integer): boolean
}

export namespace $ConfigFeature {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFeature$Type = ($ConfigFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigFeature_ = $ConfigFeature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$ConstructorDetector$SingleArgConstructor" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ConstructorDetector$SingleArgConstructor extends $Enum<($ConstructorDetector$SingleArgConstructor)> {
static readonly "DELEGATING": $ConstructorDetector$SingleArgConstructor
static readonly "PROPERTIES": $ConstructorDetector$SingleArgConstructor
static readonly "HEURISTIC": $ConstructorDetector$SingleArgConstructor
static readonly "REQUIRE_MODE": $ConstructorDetector$SingleArgConstructor


public static "values"(): ($ConstructorDetector$SingleArgConstructor)[]
public static "valueOf"(arg0: string): $ConstructorDetector$SingleArgConstructor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstructorDetector$SingleArgConstructor$Type = (("delegating") | ("heuristic") | ("require_mode") | ("properties")) | ($ConstructorDetector$SingleArgConstructor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstructorDetector$SingleArgConstructor_ = $ConstructorDetector$SingleArgConstructor$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsontype/$PolymorphicTypeValidator" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$PolymorphicTypeValidator$Validity, $PolymorphicTypeValidator$Validity$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$PolymorphicTypeValidator$Validity"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"

export class $PolymorphicTypeValidator implements $Serializable {

constructor()

public "validateBaseType"(arg0: $MapperConfig$Type<(any)>, arg1: $JavaType$Type): $PolymorphicTypeValidator$Validity
public "validateSubType"(arg0: $MapperConfig$Type<(any)>, arg1: $JavaType$Type, arg2: $JavaType$Type): $PolymorphicTypeValidator$Validity
public "validateSubClassName"(arg0: $MapperConfig$Type<(any)>, arg1: $JavaType$Type, arg2: string): $PolymorphicTypeValidator$Validity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PolymorphicTypeValidator$Type = ($PolymorphicTypeValidator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PolymorphicTypeValidator_ = $PolymorphicTypeValidator$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonToken" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonToken extends $Enum<($JsonToken)> {
static readonly "NOT_AVAILABLE": $JsonToken
static readonly "START_OBJECT": $JsonToken
static readonly "END_OBJECT": $JsonToken
static readonly "START_ARRAY": $JsonToken
static readonly "END_ARRAY": $JsonToken
static readonly "FIELD_NAME": $JsonToken
static readonly "VALUE_EMBEDDED_OBJECT": $JsonToken
static readonly "VALUE_STRING": $JsonToken
static readonly "VALUE_NUMBER_INT": $JsonToken
static readonly "VALUE_NUMBER_FLOAT": $JsonToken
static readonly "VALUE_TRUE": $JsonToken
static readonly "VALUE_FALSE": $JsonToken
static readonly "VALUE_NULL": $JsonToken


public static "values"(): ($JsonToken)[]
public static "valueOf"(arg0: string): $JsonToken
public "id"(): integer
public "isNumeric"(): boolean
public "asString"(): string
public "isBoolean"(): boolean
public "asByteArray"(): (byte)[]
public "asCharArray"(): (character)[]
public "isStructStart"(): boolean
public "isStructEnd"(): boolean
public "isScalarValue"(): boolean
get "numeric"(): boolean
get "boolean"(): boolean
get "structStart"(): boolean
get "structEnd"(): boolean
get "scalarValue"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonToken$Type = (("end_object") | ("start_object") | ("not_available") | ("end_array") | ("value_number_int") | ("start_array") | ("field_name") | ("value_true") | ("value_false") | ("value_embedded_object") | ("value_string") | ("value_number_float") | ("value_null")) | ($JsonToken);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonToken_ = $JsonToken$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$PrimitiveArrayBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PrimitiveArrayBuilder<T> {


public "resetAndStart"(): T
public "bufferedSize"(): integer
public "appendCompletedChunk"(arg0: T, arg1: integer): T
public "completeAndClearBuffer"(arg0: T, arg1: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveArrayBuilder$Type<T> = ($PrimitiveArrayBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimitiveArrayBuilder_<T> = $PrimitiveArrayBuilder$Type<(T)>;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/impl/$WritableObjectId" {
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$ObjectIdWriter, $ObjectIdWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/impl/$ObjectIdWriter"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$ObjectIdGenerator, $ObjectIdGenerator$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator"

export class $WritableObjectId {
readonly "generator": $ObjectIdGenerator<(any)>
 "id": any

constructor(arg0: $ObjectIdGenerator$Type<(any)>)

public "writeAsId"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type, arg2: $ObjectIdWriter$Type): boolean
public "writeAsField"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type, arg2: $ObjectIdWriter$Type): void
public "generateId"(arg0: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableObjectId$Type = ($WritableObjectId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritableObjectId_ = $WritableObjectId$Type;
}}
declare module "packages/com/fasterxml/jackson/core/base/$ParserMinimalBase" {
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$JsonStreamContext, $JsonStreamContext$Type} from "packages/com/fasterxml/jackson/core/$JsonStreamContext"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"

export class $ParserMinimalBase extends $JsonParser {


public "nextToken"(): $JsonToken
public "close"(): void
public "getText"(): string
public "getTextLength"(): integer
public "currentToken"(): $JsonToken
public "isClosed"(): boolean
public "nextValue"(): $JsonToken
public "getCurrentToken"(): $JsonToken
public "hasTextCharacters"(): boolean
public "getCurrentName"(): string
public "getTextOffset"(): integer
public "getTextCharacters"(): (character)[]
public "hasToken"(arg0: $JsonToken$Type): boolean
public "getParsingContext"(): $JsonStreamContext
/**
 * 
 * @deprecated
 */
public "getCurrentTokenId"(): integer
public "hasCurrentToken"(): boolean
public "getBinaryValue"(arg0: $Base64Variant$Type): (byte)[]
public "currentTokenId"(): integer
public "getValueAsInt"(arg0: integer): integer
public "getValueAsInt"(): integer
public "hasTokenId"(arg0: integer): boolean
public "getValueAsDouble"(arg0: double): double
public "getValueAsLong"(): long
public "getValueAsLong"(arg0: long): long
public "getValueAsString"(): string
public "getValueAsString"(arg0: string): string
public "getValueAsBoolean"(arg0: boolean): boolean
public "skipChildren"(): $JsonParser
public "clearCurrentToken"(): void
public "isExpectedStartArrayToken"(): boolean
public "getLastClearedToken"(): $JsonToken
public "overrideCurrentName"(arg0: string): void
public "isExpectedNumberIntToken"(): boolean
public "isExpectedStartObjectToken"(): boolean
get "text"(): string
get "textLength"(): integer
get "closed"(): boolean
get "currentName"(): string
get "textOffset"(): integer
get "textCharacters"(): (character)[]
get "parsingContext"(): $JsonStreamContext
get "valueAsInt"(): integer
get "valueAsLong"(): long
get "valueAsString"(): string
get "expectedStartArrayToken"(): boolean
get "lastClearedToken"(): $JsonToken
get "expectedNumberIntToken"(): boolean
get "expectedStartObjectToken"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParserMinimalBase$Type = ($ParserMinimalBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParserMinimalBase_ = $ParserMinimalBase$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonNumberFormatVisitor" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$JsonParser$NumberType, $JsonParser$NumberType$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$NumberType"
import {$JsonValueFormat, $JsonValueFormat$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonValueFormat"
import {$JsonValueFormatVisitor, $JsonValueFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonValueFormatVisitor"

export interface $JsonNumberFormatVisitor extends $JsonValueFormatVisitor {

 "numberType"(arg0: $JsonParser$NumberType$Type): void
 "format"(arg0: $JsonValueFormat$Type): void
 "enumTypes"(arg0: $Set$Type<(string)>): void
}

export namespace $JsonNumberFormatVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNumberFormatVisitor$Type = ($JsonNumberFormatVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonNumberFormatVisitor_ = $JsonNumberFormatVisitor$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/type/$SimpleType" {
import {$TypeBindings, $TypeBindings$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBindings"
import {$TypeBase, $TypeBase$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBase"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $SimpleType extends $TypeBase {


public "equals"(arg0: any): boolean
public "toString"(): string
public "getGenericSignature"(arg0: $StringBuilder$Type): $StringBuilder
/**
 * 
 * @deprecated
 */
public static "construct"(arg0: $Class$Type<(any)>): $SimpleType
public "refine"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type, arg2: $JavaType$Type, arg3: ($JavaType$Type)[]): $JavaType
public "withContentType"(arg0: $JavaType$Type): $JavaType
public "getErasedSignature"(arg0: $StringBuilder$Type): $StringBuilder
public static "constructUnsafe"(arg0: $Class$Type<(any)>): $SimpleType
public "hasContentType"(): boolean
public "isContainerType"(): boolean
public "withContentValueHandler"(arg0: any): $SimpleType
public "withContentTypeHandler"(arg0: any): $JavaType
get "containerType"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleType$Type = ($SimpleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleType_ = $SimpleType$Type;
}}
declare module "packages/com/fasterxml/jackson/core/util/$Separators" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $Separators implements $Serializable {

constructor(arg0: character, arg1: character, arg2: character)
constructor()

public "withObjectFieldValueSeparator"(arg0: character): $Separators
public "withObjectEntrySeparator"(arg0: character): $Separators
public "withArrayValueSeparator"(arg0: character): $Separators
public static "createDefaultInstance"(): $Separators
public "getObjectEntrySeparator"(): character
public "getObjectFieldValueSeparator"(): character
public "getArrayValueSeparator"(): character
get "objectEntrySeparator"(): character
get "objectFieldValueSeparator"(): character
get "arrayValueSeparator"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Separators$Type = ($Separators);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Separators_ = $Separators$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonIntegerFormatVisitor" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$JsonParser$NumberType, $JsonParser$NumberType$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$NumberType"
import {$JsonValueFormat, $JsonValueFormat$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonValueFormat"
import {$JsonValueFormatVisitor, $JsonValueFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonValueFormatVisitor"

export interface $JsonIntegerFormatVisitor extends $JsonValueFormatVisitor {

 "numberType"(arg0: $JsonParser$NumberType$Type): void
 "format"(arg0: $JsonValueFormat$Type): void
 "enumTypes"(arg0: $Set$Type<(string)>): void
}

export namespace $JsonIntegerFormatVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonIntegerFormatVisitor$Type = ($JsonIntegerFormatVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonIntegerFormatVisitor_ = $JsonIntegerFormatVisitor$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator$IdKey" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $ObjectIdGenerator$IdKey implements $Serializable {
readonly "type": $Class<(any)>
readonly "scope": $Class<(any)>
readonly "key": any

constructor(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>, arg2: any)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectIdGenerator$IdKey$Type = ($ObjectIdGenerator$IdKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectIdGenerator$IdKey_ = $ObjectIdGenerator$IdKey$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMethod" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$AnnotationMap, $AnnotationMap$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotationMap"
import {$TypeResolutionContext, $TypeResolutionContext$Type} from "packages/com/fasterxml/jackson/databind/introspect/$TypeResolutionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$AnnotatedWithParams, $AnnotatedWithParams$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedWithParams"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $AnnotatedMethod extends $AnnotatedWithParams implements $Serializable {

constructor(arg0: $TypeResolutionContext$Type, arg1: $Method$Type, arg2: $AnnotationMap$Type, arg3: ($AnnotationMap$Type)[])

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): integer
public "getValue"(arg0: any): any
public "getDeclaringClass"(): $Class<(any)>
public "setValue"(arg0: any, arg1: any): void
public "getType"(): $JavaType
public "getParameterCount"(): integer
/**
 * 
 * @deprecated
 */
public "getGenericParameterTypes"(): ($Type)[]
public "getRawType"(): $Class<(any)>
public "getFullName"(): string
public "call"(arg0: (any)[]): any
public "call"(): any
/**
 * 
 * @deprecated
 */
public "hasReturnType"(): boolean
public "getRawReturnType"(): $Class<(any)>
public "getParameterType"(arg0: integer): $JavaType
public "getRawParameterTypes"(): ($Class<(any)>)[]
/**
 * 
 * @deprecated
 */
public "getGenericParameterType"(arg0: integer): $Type
public "getRawParameterType"(arg0: integer): $Class<(any)>
public "getAnnotated"(): $Method
public "call1"(arg0: any): any
public "callOn"(arg0: any): any
public "callOnWith"(arg0: any, ...arg1: (any)[]): any
get "name"(): string
get "modifiers"(): integer
get "declaringClass"(): $Class<(any)>
get "type"(): $JavaType
get "parameterCount"(): integer
get "genericParameterTypes"(): ($Type)[]
get "rawType"(): $Class<(any)>
get "fullName"(): string
get "rawReturnType"(): $Class<(any)>
get "rawParameterTypes"(): ($Class<(any)>)[]
get "annotated"(): $Method
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedMethod$Type = ($AnnotatedMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotatedMethod_ = $AnnotatedMethod$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$BaseJsonNode" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$JsonParser$NumberType, $JsonParser$NumberType$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$NumberType"
import {$JsonNode$OverwriteMode, $JsonNode$OverwriteMode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode$OverwriteMode"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$JsonPointer, $JsonPointer$Type} from "packages/com/fasterxml/jackson/core/$JsonPointer"
import {$ArrayNode, $ArrayNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ArrayNode"
import {$ObjectNode, $ObjectNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ObjectNode"
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"

export class $BaseJsonNode extends $JsonNode implements $Serializable {


public "toString"(): string
public "hashCode"(): integer
public "serialize"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type): void
public "required"(arg0: integer): $JsonNode
public "required"(arg0: string): $JsonNode
public "asToken"(): $JsonToken
public "findPath"(arg0: string): $JsonNode
public "traverse"(arg0: $ObjectCodec$Type): $JsonParser
public "traverse"(): $JsonParser
public "serializeWithType"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type, arg2: $TypeSerializer$Type): void
public "withArray"(arg0: $JsonPointer$Type, arg1: $JsonNode$OverwriteMode$Type, arg2: boolean): $ArrayNode
public "toPrettyString"(): string
public "numberType"(): $JsonParser$NumberType
public "withObject"(arg0: $JsonPointer$Type, arg1: $JsonNode$OverwriteMode$Type, arg2: boolean): $ObjectNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseJsonNode$Type = ($BaseJsonNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseJsonNode_ = $BaseJsonNode$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonCreator$Mode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonCreator$Mode extends $Enum<($JsonCreator$Mode)> {
static readonly "DEFAULT": $JsonCreator$Mode
static readonly "DELEGATING": $JsonCreator$Mode
static readonly "PROPERTIES": $JsonCreator$Mode
static readonly "DISABLED": $JsonCreator$Mode


public static "values"(): ($JsonCreator$Mode)[]
public static "valueOf"(arg0: string): $JsonCreator$Mode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonCreator$Mode$Type = (("default") | ("delegating") | ("disabled") | ("properties")) | ($JsonCreator$Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonCreator$Mode_ = $JsonCreator$Mode$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonFormat$Shape" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonFormat$Shape extends $Enum<($JsonFormat$Shape)> {
static readonly "ANY": $JsonFormat$Shape
static readonly "NATURAL": $JsonFormat$Shape
static readonly "SCALAR": $JsonFormat$Shape
static readonly "ARRAY": $JsonFormat$Shape
static readonly "OBJECT": $JsonFormat$Shape
static readonly "NUMBER": $JsonFormat$Shape
static readonly "NUMBER_FLOAT": $JsonFormat$Shape
static readonly "NUMBER_INT": $JsonFormat$Shape
static readonly "STRING": $JsonFormat$Shape
static readonly "BOOLEAN": $JsonFormat$Shape
static readonly "BINARY": $JsonFormat$Shape


public static "values"(): ($JsonFormat$Shape)[]
public static "valueOf"(arg0: string): $JsonFormat$Shape
public "isNumeric"(): boolean
public "isStructured"(): boolean
get "numeric"(): boolean
get "structured"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFormat$Shape$Type = (("number") | ("scalar") | ("boolean") | ("natural") | ("string") | ("array") | ("binary") | ("number_float") | ("any") | ("number_int") | ("object")) | ($JsonFormat$Shape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFormat$Shape_ = $JsonFormat$Shape$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$TypeResolutionContext" {
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export interface $TypeResolutionContext {

 "resolveType"(arg0: $Type$Type): $JavaType

(arg0: $Type$Type): $JavaType
}

export namespace $TypeResolutionContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeResolutionContext$Type = ($TypeResolutionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeResolutionContext_ = $TypeResolutionContext$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$PropertyAccessor" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PropertyAccessor extends $Enum<($PropertyAccessor)> {
static readonly "GETTER": $PropertyAccessor
static readonly "SETTER": $PropertyAccessor
static readonly "CREATOR": $PropertyAccessor
static readonly "FIELD": $PropertyAccessor
static readonly "IS_GETTER": $PropertyAccessor
static readonly "NONE": $PropertyAccessor
static readonly "ALL": $PropertyAccessor


public static "values"(): ($PropertyAccessor)[]
public static "valueOf"(arg0: string): $PropertyAccessor
public "isGetterEnabled"(): boolean
public "fieldEnabled"(): boolean
public "creatorEnabled"(): boolean
public "setterEnabled"(): boolean
public "getterEnabled"(): boolean
get "terEnabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyAccessor$Type = (("all") | ("is_getter") | ("creator") | ("getter") | ("field") | ("none") | ("setter")) | ($PropertyAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyAccessor_ = $PropertyAccessor$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$ObjectBuffer" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ObjectBuffer {

constructor()

public "initialCapacity"(): integer
public "resetAndStart"(arg0: (any)[], arg1: integer): (any)[]
public "resetAndStart"(): (any)[]
public "bufferedSize"(): integer
public "appendCompletedChunk"(arg0: (any)[]): (any)[]
public "completeAndClearBuffer"(arg0: (any)[], arg1: integer): (any)[]
public "completeAndClearBuffer"<T>(arg0: (any)[], arg1: integer, arg2: $Class$Type<(T)>): (T)[]
public "completeAndClearBuffer"(arg0: (any)[], arg1: integer, arg2: $List$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectBuffer$Type = ($ObjectBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectBuffer_ = $ObjectBuffer$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$BeanDescription" {
import {$TypeBindings, $TypeBindings$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBindings"
import {$ObjectIdInfo, $ObjectIdInfo$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ObjectIdInfo"
import {$Converter, $Converter$Type} from "packages/com/fasterxml/jackson/databind/util/$Converter"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$JsonPOJOBuilder$Value, $JsonPOJOBuilder$Value$Type} from "packages/com/fasterxml/jackson/databind/annotation/$JsonPOJOBuilder$Value"
import {$AnnotatedAndMetadata, $AnnotatedAndMetadata$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedAndMetadata"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$Constructor, $Constructor$Type} from "packages/java/lang/reflect/$Constructor"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$AnnotatedConstructor, $AnnotatedConstructor$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedConstructor"
import {$BeanPropertyDefinition, $BeanPropertyDefinition$Type} from "packages/com/fasterxml/jackson/databind/introspect/$BeanPropertyDefinition"
import {$AnnotatedClass, $AnnotatedClass$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedClass"
import {$JsonCreator$Mode, $JsonCreator$Mode$Type} from "packages/com/fasterxml/jackson/annotation/$JsonCreator$Mode"
import {$AnnotatedMethod, $AnnotatedMethod$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMethod"
import {$Annotations, $Annotations$Type} from "packages/com/fasterxml/jackson/databind/util/$Annotations"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BeanDescription {


public "getConstructors"(): $List<($AnnotatedConstructor)>
public "getType"(): $JavaType
/**
 * 
 * @deprecated
 */
public "findFactoryMethod"(...arg0: ($Class$Type<(any)>)[]): $Method
public "findMethod"(arg0: string, arg1: ($Class$Type<(any)>)[]): $AnnotatedMethod
public "findDefaultConstructor"(): $AnnotatedConstructor
public "getBeanClass"(): $Class<(any)>
public "getClassInfo"(): $AnnotatedClass
/**
 * 
 * @deprecated
 */
public "findAnySetterField"(): $AnnotatedMember
/**
 * 
 * @deprecated
 */
public "findAnySetter"(): $AnnotatedMethod
public "instantiateBean"(arg0: boolean): any
/**
 * 
 * @deprecated
 */
public "resolveType"(arg0: $Type$Type): $JavaType
public "getFactoryMethods"(): $List<($AnnotatedMethod)>
public "findProperties"(): $List<($BeanPropertyDefinition)>
public "getObjectIdInfo"(): $ObjectIdInfo
public "findBackReferences"(): $List<($BeanPropertyDefinition)>
public "findDefaultViews"(): ($Class<(any)>)[]
public "findInjectables"(): $Map<(any), ($AnnotatedMember)>
public "findExpectedFormat"(arg0: $JsonFormat$Value$Type): $JsonFormat$Value
public "findAnyGetter"(): $AnnotatedMember
public "findPOJOBuilder"(): $Class<(any)>
public "getClassAnnotations"(): $Annotations
public "findJsonValueAccessor"(): $AnnotatedMember
public "findAnySetterAccessor"(): $AnnotatedMember
public "getIgnoredPropertyNames"(): $Set<(string)>
/**
 * 
 * @deprecated
 */
public "findJsonValueMethod"(): $AnnotatedMethod
public "findPOJOBuilderConfig"(): $JsonPOJOBuilder$Value
public "findSerializationConverter"(): $Converter<(any), (any)>
public "findJsonKeyAccessor"(): $AnnotatedMember
public "findPropertyInclusion"(arg0: $JsonInclude$Value$Type): $JsonInclude$Value
public "findDeserializationConverter"(): $Converter<(any), (any)>
public "hasKnownClassAnnotations"(): boolean
public "findClassDescription"(): string
/**
 * 
 * @deprecated
 */
public "findBackReferenceProperties"(): $Map<(string), ($AnnotatedMember)>
public "getConstructorsWithMode"(): $List<($AnnotatedAndMetadata<($AnnotatedConstructor), ($JsonCreator$Mode)>)>
public "getFactoryMethodsWithMode"(): $List<($AnnotatedAndMetadata<($AnnotatedMethod), ($JsonCreator$Mode)>)>
/**
 * 
 * @deprecated
 */
public "bindingsForBeanType"(): $TypeBindings
/**
 * 
 * @deprecated
 */
public "findSingleArgConstructor"(...arg0: ($Class$Type<(any)>)[]): $Constructor<(any)>
public "isNonStaticInnerClass"(): boolean
get "constructors"(): $List<($AnnotatedConstructor)>
get "type"(): $JavaType
get "beanClass"(): $Class<(any)>
get "classInfo"(): $AnnotatedClass
get "factoryMethods"(): $List<($AnnotatedMethod)>
get "objectIdInfo"(): $ObjectIdInfo
get "classAnnotations"(): $Annotations
get "ignoredPropertyNames"(): $Set<(string)>
get "constructorsWithMode"(): $List<($AnnotatedAndMetadata<($AnnotatedConstructor), ($JsonCreator$Mode)>)>
get "factoryMethodsWithMode"(): $List<($AnnotatedAndMetadata<($AnnotatedMethod), ($JsonCreator$Mode)>)>
get "nonStaticInnerClass"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeanDescription$Type = ($BeanDescription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeanDescription_ = $BeanDescription$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$MapperConfigBase" {
import {$DateFormat, $DateFormat$Type} from "packages/java/text/$DateFormat"
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$ContextAttributes, $ContextAttributes$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ContextAttributes"
import {$ClassIntrospector, $ClassIntrospector$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ClassIntrospector"
import {$ClassIntrospector$MixInResolver, $ClassIntrospector$MixInResolver$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ClassIntrospector$MixInResolver"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"
import {$TypeResolverBuilder, $TypeResolverBuilder$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeResolverBuilder"
import {$AccessorNamingStrategy$Provider, $AccessorNamingStrategy$Provider$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AccessorNamingStrategy$Provider"
import {$JsonIgnoreProperties$Value, $JsonIgnoreProperties$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonIgnoreProperties$Value"
import {$JsonIncludeProperties$Value, $JsonIncludeProperties$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonIncludeProperties$Value"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$AnnotatedClass, $AnnotatedClass$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedClass"
import {$HandlerInstantiator, $HandlerInstantiator$Type} from "packages/com/fasterxml/jackson/databind/cfg/$HandlerInstantiator"
import {$JsonSetter$Value, $JsonSetter$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonSetter$Value"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ConfigOverride, $ConfigOverride$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConfigOverride"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$PropertyNamingStrategy, $PropertyNamingStrategy$Type} from "packages/com/fasterxml/jackson/databind/$PropertyNamingStrategy"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$ConfigFeature, $ConfigFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConfigFeature"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$SubtypeResolver, $SubtypeResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$SubtypeResolver"
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$VisibilityChecker, $VisibilityChecker$Type} from "packages/com/fasterxml/jackson/databind/introspect/$VisibilityChecker"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$DatatypeFeature, $DatatypeFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeature"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MapperConfigBase<CFG extends $ConfigFeature, T extends $MapperConfigBase<(CFG), (T)>> extends $MapperConfig<(T)> implements $Serializable {


public "copy"(): $ClassIntrospector$MixInResolver
public "getAttributes"(): $ContextAttributes
public "with"(arg0: $TypeResolverBuilder$Type<(any)>): T
public "with"(arg0: $PropertyNamingStrategy$Type): T
public "with"(arg0: $HandlerInstantiator$Type): T
public "with"(arg0: $AccessorNamingStrategy$Provider$Type): T
public "with"(arg0: $TypeFactory$Type): T
public "with"(arg0: $ContextAttributes$Type): T
public "with"(arg0: $ClassIntrospector$Type): T
public "with"(arg0: $Base64Variant$Type): T
public "with"(arg0: $TimeZone$Type): T
public "with"(arg0: $Locale$Type): T
public "with"(arg0: $DateFormat$Type): T
public "with"(arg0: $SubtypeResolver$Type): T
public "with"(arg0: $AnnotationIntrospector$Type): T
public "with"(arg0: $DatatypeFeature$Type, arg1: boolean): T
public "with"(arg0: $DatatypeFeature$Type): T
/**
 * 
 * @deprecated
 */
public "getRootName"(): string
public "without"(arg0: $DatatypeFeature$Type): T
public "findConfigOverride"(arg0: $Class$Type<(any)>): $ConfigOverride
public "withoutAttribute"(arg0: any): T
public "withFeatures"(...arg0: ($DatatypeFeature$Type)[]): T
public "withRootName"(arg0: string): T
public "withRootName"(arg0: $PropertyName$Type): T
public "withAttributes"(arg0: $Map$Type<(any), (any)>): T
public "withoutFeatures"(...arg0: ($DatatypeFeature$Type)[]): T
public "withAttribute"(arg0: any, arg1: any): T
public "getConfigOverride"(arg0: $Class$Type<(any)>): $ConfigOverride
public "findMixInClassFor"(arg0: $Class$Type<(any)>): $Class<(any)>
public "mixInCount"(): integer
public "getSubtypeResolver"(): $SubtypeResolver
public "withView"(arg0: $Class$Type<(any)>): T
public "getActiveView"(): $Class<(any)>
public "getFullRootName"(): $PropertyName
public "findRootName"(arg0: $JavaType$Type): $PropertyName
public "findRootName"(arg0: $Class$Type<(any)>): $PropertyName
public "getDefaultPropertyIgnorals"(arg0: $Class$Type<(any)>, arg1: $AnnotatedClass$Type): $JsonIgnoreProperties$Value
public "getDefaultPropertyIgnorals"(arg0: $Class$Type<(any)>): $JsonIgnoreProperties$Value
public "getDefaultSetterInfo"(): $JsonSetter$Value
public "getDefaultPropertyInclusions"(arg0: $Class$Type<(any)>, arg1: $AnnotatedClass$Type): $JsonIncludeProperties$Value
public "getDefaultInclusion"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>): $JsonInclude$Value
public "withInsertedAnnotationIntrospector"(arg0: $AnnotationIntrospector$Type): T
public "withAppendedAnnotationIntrospector"(arg0: $AnnotationIntrospector$Type): T
public "getDefaultMergeable"(arg0: $Class$Type<(any)>): boolean
public "getDefaultMergeable"(): boolean
public "getDefaultPropertyInclusion"(): $JsonInclude$Value
public "getDefaultPropertyInclusion"(arg0: $Class$Type<(any)>): $JsonInclude$Value
public "getDefaultVisibilityChecker"(arg0: $Class$Type<(any)>, arg1: $AnnotatedClass$Type): $VisibilityChecker<(any)>
public "getDefaultVisibilityChecker"(): $VisibilityChecker<(any)>
public "getDefaultPropertyFormat"(arg0: $Class$Type<(any)>): $JsonFormat$Value
get "attributes"(): $ContextAttributes
get "rootName"(): string
get "subtypeResolver"(): $SubtypeResolver
get "activeView"(): $Class<(any)>
get "fullRootName"(): $PropertyName
get "defaultSetterInfo"(): $JsonSetter$Value
get "defaultMergeable"(): boolean
get "defaultPropertyInclusion"(): $JsonInclude$Value
get "defaultVisibilityChecker"(): $VisibilityChecker<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapperConfigBase$Type<CFG, T> = ($MapperConfigBase<(CFG), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapperConfigBase_<CFG, T> = $MapperConfigBase$Type<(CFG), (T)>;
}}
declare module "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ObjectIdGenerator$IdKey, $ObjectIdGenerator$IdKey$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator$IdKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $ObjectIdGenerator<T> implements $Serializable {

constructor()

public "key"(arg0: any): $ObjectIdGenerator$IdKey
public "getScope"(): $Class<(any)>
public "generateId"(arg0: any): T
public "forScope"(arg0: $Class$Type<(any)>): $ObjectIdGenerator<(T)>
public "canUseFor"(arg0: $ObjectIdGenerator$Type<(any)>): boolean
public "isValidReferencePropertyName"(arg0: string, arg1: any): boolean
public "maySerializeAsObject"(): boolean
public "newForSerialization"(arg0: any): $ObjectIdGenerator<(T)>
get "scope"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectIdGenerator$Type<T> = ($ObjectIdGenerator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectIdGenerator_<T> = $ObjectIdGenerator$Type<(T)>;
}}
declare module "packages/com/fasterxml/jackson/core/$FormatSchema" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FormatSchema {

 "getSchemaType"(): string

(): string
}

export namespace $FormatSchema {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormatSchema$Type = ($FormatSchema);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FormatSchema_ = $FormatSchema$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$CoercionInputShape" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CoercionInputShape extends $Enum<($CoercionInputShape)> {
static readonly "Array": $CoercionInputShape
static readonly "Object": $CoercionInputShape
static readonly "Integer": $CoercionInputShape
static readonly "Float": $CoercionInputShape
static readonly "Boolean": $CoercionInputShape
static readonly "String": $CoercionInputShape
static readonly "Binary": $CoercionInputShape
static readonly "EmptyArray": $CoercionInputShape
static readonly "EmptyObject": $CoercionInputShape
static readonly "EmptyString": $CoercionInputShape


public static "values"(): ($CoercionInputShape)[]
public static "valueOf"(arg0: string): $CoercionInputShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoercionInputShape$Type = (("emptystring") | ("boolean") | ("string") | ("array") | ("emptyarray") | ("binary") | ("emptyobject") | ("integer") | ("float") | ("object")) | ($CoercionInputShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoercionInputShape_ = $CoercionInputShape$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$PropertyName" {
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"

export class $PropertyName implements $Serializable {
static readonly "USE_DEFAULT": $PropertyName
static readonly "NO_NAME": $PropertyName

constructor(arg0: string)
constructor(arg0: string, arg1: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "getSimpleName"(): string
public static "construct"(arg0: string): $PropertyName
public static "construct"(arg0: string, arg1: string): $PropertyName
public "getNamespace"(): string
public "hasNamespace"(): boolean
public "withNamespace"(arg0: string): $PropertyName
public "hasSimpleName"(arg0: string): boolean
public "hasSimpleName"(): boolean
public "internSimpleName"(): $PropertyName
public "simpleAsEncoded"(arg0: $MapperConfig$Type<(any)>): $SerializableString
public "withSimpleName"(arg0: string): $PropertyName
get "empty"(): boolean
get "simpleName"(): string
get "namespace"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyName$Type = ($PropertyName);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyName_ = $PropertyName$Type;
}}
declare module "packages/com/fasterxml/jackson/core/type/$ResolvedType" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $ResolvedType {

constructor()

public "isInterface"(): boolean
public "isPrimitive"(): boolean
public "isFinal"(): boolean
public "isAbstract"(): boolean
public "isReferenceType"(): boolean
public "getContentType"(): $ResolvedType
public "isThrowable"(): boolean
public "getKeyType"(): $ResolvedType
public "containedType"(arg0: integer): $ResolvedType
public "toCanonical"(): string
public "hasGenericTypes"(): boolean
public "containedTypeCount"(): integer
/**
 * 
 * @deprecated
 */
public "getParameterSource"(): $Class<(any)>
public "containedTypeName"(arg0: integer): string
public "isConcrete"(): boolean
public "isEnumType"(): boolean
public "isMapLikeType"(): boolean
public "isArrayType"(): boolean
public "getReferencedType"(): $ResolvedType
public "getRawClass"(): $Class<(any)>
public "hasRawClass"(arg0: $Class$Type<(any)>): boolean
public "isContainerType"(): boolean
public "isCollectionLikeType"(): boolean
get "interface"(): boolean
get "primitive"(): boolean
get "final"(): boolean
get "abstract"(): boolean
get "referenceType"(): boolean
get "contentType"(): $ResolvedType
get "throwable"(): boolean
get "keyType"(): $ResolvedType
get "parameterSource"(): $Class<(any)>
get "concrete"(): boolean
get "enumType"(): boolean
get "mapLikeType"(): boolean
get "arrayType"(): boolean
get "referencedType"(): $ResolvedType
get "rawClass"(): $Class<(any)>
get "containerType"(): boolean
get "collectionLikeType"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResolvedType$Type = ($ResolvedType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResolvedType_ = $ResolvedType$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$PropertyFilter" {
import {$JsonObjectFormatVisitor, $JsonObjectFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonObjectFormatVisitor"
import {$ObjectNode, $ObjectNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ObjectNode"
import {$PropertyWriter, $PropertyWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/$PropertyWriter"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"

export interface $PropertyFilter {

 "serializeAsElement"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type, arg3: $PropertyWriter$Type): void
 "serializeAsField"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type, arg3: $PropertyWriter$Type): void
 "depositSchemaProperty"(arg0: $PropertyWriter$Type, arg1: $JsonObjectFormatVisitor$Type, arg2: $SerializerProvider$Type): void
/**
 * 
 * @deprecated
 */
 "depositSchemaProperty"(arg0: $PropertyWriter$Type, arg1: $ObjectNode$Type, arg2: $SerializerProvider$Type): void
}

export namespace $PropertyFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyFilter$Type = ($PropertyFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyFilter_ = $PropertyFilter$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$RawValue" {
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$JsonSerializable, $JsonSerializable$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializable"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"

export class $RawValue implements $JsonSerializable {

constructor(arg0: $JsonSerializable$Type)
constructor(arg0: $SerializableString$Type)
constructor(arg0: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "rawValue"(): any
public "serialize"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type): void
public "serialize"(arg0: $JsonGenerator$Type): void
public "serializeWithType"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type, arg2: $TypeSerializer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawValue$Type = ($RawValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawValue_ = $RawValue$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/impl/$ObjectIdReader" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$ObjectIdGenerator, $ObjectIdGenerator$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator"
import {$ObjectIdResolver, $ObjectIdResolver$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdResolver"
import {$SettableBeanProperty, $SettableBeanProperty$Type} from "packages/com/fasterxml/jackson/databind/deser/$SettableBeanProperty"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"

export class $ObjectIdReader implements $Serializable {
readonly "propertyName": $PropertyName
readonly "generator": $ObjectIdGenerator<(any)>
readonly "resolver": $ObjectIdResolver
readonly "idProperty": $SettableBeanProperty


public static "construct"(arg0: $JavaType$Type, arg1: $PropertyName$Type, arg2: $ObjectIdGenerator$Type<(any)>, arg3: $JsonDeserializer$Type<(any)>, arg4: $SettableBeanProperty$Type, arg5: $ObjectIdResolver$Type): $ObjectIdReader
public "getDeserializer"(): $JsonDeserializer<(any)>
public "isValidReferencePropertyName"(arg0: string, arg1: $JsonParser$Type): boolean
public "maySerializeAsObject"(): boolean
public "readObjectReference"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type): any
public "getIdType"(): $JavaType
get "deserializer"(): $JsonDeserializer<(any)>
get "idType"(): $JavaType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectIdReader$Type = ($ObjectIdReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectIdReader_ = $ObjectIdReader$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$Serializers" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$ArrayType, $ArrayType$Type} from "packages/com/fasterxml/jackson/databind/type/$ArrayType"
import {$SerializationConfig, $SerializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$SerializationConfig"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$ReferenceType, $ReferenceType$Type} from "packages/com/fasterxml/jackson/databind/type/$ReferenceType"
import {$MapType, $MapType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapType"
import {$CollectionLikeType, $CollectionLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionLikeType"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$CollectionType, $CollectionType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionType"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"
import {$MapLikeType, $MapLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapLikeType"

export interface $Serializers {

 "findSerializer"(arg0: $SerializationConfig$Type, arg1: $JavaType$Type, arg2: $BeanDescription$Type): $JsonSerializer<(any)>
 "findMapSerializer"(arg0: $SerializationConfig$Type, arg1: $MapType$Type, arg2: $BeanDescription$Type, arg3: $JsonSerializer$Type<(any)>, arg4: $TypeSerializer$Type, arg5: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
 "findCollectionSerializer"(arg0: $SerializationConfig$Type, arg1: $CollectionType$Type, arg2: $BeanDescription$Type, arg3: $TypeSerializer$Type, arg4: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
 "findArraySerializer"(arg0: $SerializationConfig$Type, arg1: $ArrayType$Type, arg2: $BeanDescription$Type, arg3: $TypeSerializer$Type, arg4: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
 "findMapLikeSerializer"(arg0: $SerializationConfig$Type, arg1: $MapLikeType$Type, arg2: $BeanDescription$Type, arg3: $JsonSerializer$Type<(any)>, arg4: $TypeSerializer$Type, arg5: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
 "findReferenceSerializer"(arg0: $SerializationConfig$Type, arg1: $ReferenceType$Type, arg2: $BeanDescription$Type, arg3: $TypeSerializer$Type, arg4: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
 "findCollectionLikeSerializer"(arg0: $SerializationConfig$Type, arg1: $CollectionLikeType$Type, arg2: $BeanDescription$Type, arg3: $TypeSerializer$Type, arg4: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
}

export namespace $Serializers {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializers$Type = ($Serializers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializers_ = $Serializers$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$ResolvableSerializer" {
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"

export interface $ResolvableSerializer {

 "resolve"(arg0: $SerializerProvider$Type): void

(arg0: $SerializerProvider$Type): void
}

export namespace $ResolvableSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResolvableSerializer$Type = ($ResolvableSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResolvableSerializer_ = $ResolvableSerializer$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$Annotated" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$AnnotatedElement, $AnnotatedElement$Type} from "packages/java/lang/reflect/$AnnotatedElement"

export class $Annotated {


/**
 * 
 * @deprecated
 */
public "annotations"(): $Iterable<($Annotation)>
public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "isPublic"(): boolean
public "getType"(): $JavaType
public "getRawType"(): $Class<(any)>
public "hasAnnotation"(arg0: $Class$Type<(any)>): boolean
public "hasOneOf"(arg0: ($Class$Type<(any)>)[]): boolean
public "getAnnotated"(): $AnnotatedElement
get "name"(): string
get "public"(): boolean
get "type"(): $JavaType
get "rawType"(): $Class<(any)>
get "annotated"(): $AnnotatedElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Annotated$Type = ($Annotated);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Annotated_ = $Annotated$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$MappingIterator" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JsonLocation, $JsonLocation$Type} from "packages/com/fasterxml/jackson/core/$JsonLocation"
import {$FormatSchema, $FormatSchema$Type} from "packages/com/fasterxml/jackson/core/$FormatSchema"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $MappingIterator<T> implements $Iterator<(T)>, $Closeable {


public "remove"(): void
public "hasNext"(): boolean
public "next"(): T
public "close"(): void
public static "emptyIterator"<T>(): $MappingIterator<(T)>
public "nextValue"(): T
public "getParser"(): $JsonParser
public "readAll"<C extends $Collection<(any)>>(arg0: C): C
public "readAll"<L extends $List<(any)>>(arg0: L): L
public "readAll"(): $List<(T)>
public "getCurrentLocation"(): $JsonLocation
public "hasNextValue"(): boolean
public "getParserSchema"(): $FormatSchema
public "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
get "parser"(): $JsonParser
get "currentLocation"(): $JsonLocation
get "parserSchema"(): $FormatSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MappingIterator$Type<T> = ($MappingIterator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MappingIterator_<T> = $MappingIterator$Type<(T)>;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonBooleanFormatVisitor" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$JsonValueFormat, $JsonValueFormat$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonValueFormat"
import {$JsonValueFormatVisitor, $JsonValueFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonValueFormatVisitor"

export interface $JsonBooleanFormatVisitor extends $JsonValueFormatVisitor {

 "format"(arg0: $JsonValueFormat$Type): void
 "enumTypes"(arg0: $Set$Type<(string)>): void
}

export namespace $JsonBooleanFormatVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonBooleanFormatVisitor$Type = ($JsonBooleanFormatVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonBooleanFormatVisitor_ = $JsonBooleanFormatVisitor$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$OptBoolean" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $OptBoolean extends $Enum<($OptBoolean)> {
static readonly "TRUE": $OptBoolean
static readonly "FALSE": $OptBoolean
static readonly "DEFAULT": $OptBoolean


public "asPrimitive"(): boolean
public static "equals"(arg0: boolean, arg1: boolean): boolean
public static "values"(): ($OptBoolean)[]
public static "valueOf"(arg0: string): $OptBoolean
public static "fromBoolean"(arg0: boolean): $OptBoolean
public "asBoolean"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptBoolean$Type = (("default") | ("true") | ("false")) | ($OptBoolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptBoolean_ = $OptBoolean$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$SettableBeanProperty" {
import {$JsonObjectFormatVisitor, $JsonObjectFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonObjectFormatVisitor"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$NullValueProvider, $NullValueProvider$Type} from "packages/com/fasterxml/jackson/databind/deser/$NullValueProvider"
import {$ObjectIdInfo, $ObjectIdInfo$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ObjectIdInfo"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$TypeDeserializer, $TypeDeserializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeDeserializer"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$ConcreteBeanPropertyBase, $ConcreteBeanPropertyBase$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ConcreteBeanPropertyBase"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $SettableBeanProperty extends $ConcreteBeanPropertyBase implements $Serializable {


public "getName"(): string
public "toString"(): string
public "getAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "set"(arg0: any, arg1: any): void
public "getType"(): $JavaType
public "getFullName"(): $PropertyName
public "deserialize"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type): any
public "getMember"(): $AnnotatedMember
public "withName"(arg0: $PropertyName$Type): $SettableBeanProperty
public "isInjectionOnly"(): boolean
public "deserializeAndSet"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type, arg2: any): void
public "assignIndex"(arg0: integer): void
public "hasViews"(): boolean
public "isIgnorable"(): boolean
public "getPropertyIndex"(): integer
public "markAsIgnorable"(): void
public "visibleInView"(arg0: $Class$Type<(any)>): boolean
public "withNullProvider"(arg0: $NullValueProvider$Type): $SettableBeanProperty
public "getCreatorIndex"(): integer
public "deserializeWith"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type, arg2: any): any
public "setAndReturn"(arg0: any, arg1: any): any
public "getWrapperName"(): $PropertyName
public "getObjectIdInfo"(): $ObjectIdInfo
public "setViews"(arg0: ($Class$Type<(any)>)[]): void
public "setObjectIdInfo"(arg0: $ObjectIdInfo$Type): void
public "withValueDeserializer"(arg0: $JsonDeserializer$Type<(any)>): $SettableBeanProperty
public "setManagedReferenceName"(arg0: string): void
public "getValueDeserializer"(): $JsonDeserializer<(any)>
public "withSimpleName"(arg0: string): $SettableBeanProperty
public "depositSchemaProperty"(arg0: $JsonObjectFormatVisitor$Type, arg1: $SerializerProvider$Type): void
public "getContextAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "getInjectableValueId"(): any
public "hasValueTypeDeserializer"(): boolean
public "getValueTypeDeserializer"(): $TypeDeserializer
public "hasValueDeserializer"(): boolean
public "getNullValueProvider"(): $NullValueProvider
public "deserializeSetAndReturn"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type, arg2: any): any
public "getManagedReferenceName"(): string
public "fixAccess"(arg0: $DeserializationConfig$Type): void
get "name"(): string
get "type"(): $JavaType
get "fullName"(): $PropertyName
get "member"(): $AnnotatedMember
get "injectionOnly"(): boolean
get "ignorable"(): boolean
get "propertyIndex"(): integer
get "creatorIndex"(): integer
get "wrapperName"(): $PropertyName
get "objectIdInfo"(): $ObjectIdInfo
set "views"(value: ($Class$Type<(any)>)[])
set "objectIdInfo"(value: $ObjectIdInfo$Type)
set "managedReferenceName"(value: string)
get "valueDeserializer"(): $JsonDeserializer<(any)>
get "injectableValueId"(): any
get "valueTypeDeserializer"(): $TypeDeserializer
get "nullValueProvider"(): $NullValueProvider
get "managedReferenceName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettableBeanProperty$Type = ($SettableBeanProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettableBeanProperty_ = $SettableBeanProperty$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedConstructor" {
import {$Member, $Member$Type} from "packages/java/lang/reflect/$Member"
import {$AnnotationMap, $AnnotationMap$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotationMap"
import {$TypeResolutionContext, $TypeResolutionContext$Type} from "packages/com/fasterxml/jackson/databind/introspect/$TypeResolutionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$AnnotatedWithParams, $AnnotatedWithParams$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedWithParams"
import {$Constructor, $Constructor$Type} from "packages/java/lang/reflect/$Constructor"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $AnnotatedConstructor extends $AnnotatedWithParams {

constructor(arg0: $TypeResolutionContext$Type, arg1: $Constructor$Type<(any)>, arg2: $AnnotationMap$Type, arg3: ($AnnotationMap$Type)[])

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): integer
public "getValue"(arg0: any): any
public "getDeclaringClass"(): $Class<(any)>
public "setValue"(arg0: any, arg1: any): void
public "getType"(): $JavaType
public "getParameterCount"(): integer
public "getRawType"(): $Class<(any)>
public "call"(arg0: (any)[]): any
public "call"(): any
public "getMember"(): $Member
public "getParameterType"(arg0: integer): $JavaType
/**
 * 
 * @deprecated
 */
public "getGenericParameterType"(arg0: integer): $Type
public "getRawParameterType"(arg0: integer): $Class<(any)>
public "getAnnotated"(): $Constructor<(any)>
public "call1"(arg0: any): any
get "name"(): string
get "modifiers"(): integer
get "declaringClass"(): $Class<(any)>
get "type"(): $JavaType
get "parameterCount"(): integer
get "rawType"(): $Class<(any)>
get "member"(): $Member
get "annotated"(): $Constructor<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedConstructor$Type = ($AnnotatedConstructor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotatedConstructor_ = $AnnotatedConstructor$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedParameter" {
import {$Member, $Member$Type} from "packages/java/lang/reflect/$Member"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$AnnotationMap, $AnnotationMap$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotationMap"
import {$TypeResolutionContext, $TypeResolutionContext$Type} from "packages/com/fasterxml/jackson/databind/introspect/$TypeResolutionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AnnotatedWithParams, $AnnotatedWithParams$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedWithParams"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$AnnotatedElement, $AnnotatedElement$Type} from "packages/java/lang/reflect/$AnnotatedElement"

export class $AnnotatedParameter extends $AnnotatedMember {

constructor(arg0: $AnnotatedWithParams$Type, arg1: $JavaType$Type, arg2: $TypeResolutionContext$Type, arg3: $AnnotationMap$Type, arg4: integer)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): integer
public "getValue"(arg0: any): any
public "getDeclaringClass"(): $Class<(any)>
public "setValue"(arg0: any, arg1: any): void
public "getType"(): $JavaType
public "getRawType"(): $Class<(any)>
public "getIndex"(): integer
public "getOwner"(): $AnnotatedWithParams
public "getMember"(): $Member
public "getParameterType"(): $Type
public "getAnnotated"(): $AnnotatedElement
get "name"(): string
get "modifiers"(): integer
get "declaringClass"(): $Class<(any)>
get "type"(): $JavaType
get "rawType"(): $Class<(any)>
get "index"(): integer
get "owner"(): $AnnotatedWithParams
get "member"(): $Member
get "parameterType"(): $Type
get "annotated"(): $AnnotatedElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedParameter$Type = ($AnnotatedParameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotatedParameter_ = $AnnotatedParameter$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonIgnoreProperties$Value" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JsonIgnoreProperties, $JsonIgnoreProperties$Type} from "packages/com/fasterxml/jackson/annotation/$JsonIgnoreProperties"
import {$JacksonAnnotationValue, $JacksonAnnotationValue$Type} from "packages/com/fasterxml/jackson/annotation/$JacksonAnnotationValue"

export class $JsonIgnoreProperties$Value implements $JacksonAnnotationValue<($JsonIgnoreProperties)>, $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"(arg0: $JsonIgnoreProperties$Type): $JsonIgnoreProperties$Value
public static "merge"(arg0: $JsonIgnoreProperties$Value$Type, arg1: $JsonIgnoreProperties$Value$Type): $JsonIgnoreProperties$Value
public static "empty"(): $JsonIgnoreProperties$Value
public static "construct"(arg0: $Set$Type<(string)>, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): $JsonIgnoreProperties$Value
public static "forIgnoreUnknown"(arg0: boolean): $JsonIgnoreProperties$Value
public "withIgnored"(...arg0: (string)[]): $JsonIgnoreProperties$Value
public "withIgnored"(arg0: $Set$Type<(string)>): $JsonIgnoreProperties$Value
public "withoutIgnored"(): $JsonIgnoreProperties$Value
public "withMerge"(): $JsonIgnoreProperties$Value
public "getAllowGetters"(): boolean
public "getMerge"(): boolean
public "withAllowSetters"(): $JsonIgnoreProperties$Value
public "withIgnoreUnknown"(): $JsonIgnoreProperties$Value
public "withAllowGetters"(): $JsonIgnoreProperties$Value
public "withoutMerge"(): $JsonIgnoreProperties$Value
public "getAllowSetters"(): boolean
public static "mergeAll"(...arg0: ($JsonIgnoreProperties$Value$Type)[]): $JsonIgnoreProperties$Value
public "getIgnored"(): $Set<(string)>
public "valueFor"(): $Class<($JsonIgnoreProperties)>
public "withoutAllowGetters"(): $JsonIgnoreProperties$Value
public "withoutAllowSetters"(): $JsonIgnoreProperties$Value
public "withoutIgnoreUnknown"(): $JsonIgnoreProperties$Value
public static "forIgnoredProperties"(arg0: $Set$Type<(string)>): $JsonIgnoreProperties$Value
public static "forIgnoredProperties"(...arg0: (string)[]): $JsonIgnoreProperties$Value
public "getIgnoreUnknown"(): boolean
public "withOverrides"(arg0: $JsonIgnoreProperties$Value$Type): $JsonIgnoreProperties$Value
public "findIgnoredForDeserialization"(): $Set<(string)>
public "findIgnoredForSerialization"(): $Set<(string)>
get "allowGetters"(): boolean
get "allowSetters"(): boolean
get "ignored"(): $Set<(string)>
get "ignoreUnknown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonIgnoreProperties$Value$Type = ($JsonIgnoreProperties$Value);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonIgnoreProperties$Value_ = $JsonIgnoreProperties$Value$Type;
}}
declare module "packages/com/fasterxml/jackson/core/io/$OutputDecorator" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$IOContext, $IOContext$Type} from "packages/com/fasterxml/jackson/core/io/$IOContext"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"

export class $OutputDecorator implements $Serializable {

constructor()

public "decorate"(arg0: $IOContext$Type, arg1: $OutputStream$Type): $OutputStream
public "decorate"(arg0: $IOContext$Type, arg1: $Writer$Type): $Writer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputDecorator$Type = ($OutputDecorator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutputDecorator_ = $OutputDecorator$Type;
}}
declare module "packages/com/fasterxml/jackson/core/util/$JacksonFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $JacksonFeature {

 "getMask"(): integer
 "enabledByDefault"(): boolean
 "enabledIn"(arg0: integer): boolean
}

export namespace $JacksonFeature {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JacksonFeature$Type = ($JacksonFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JacksonFeature_ = $JacksonFeature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$BeanSerializerModifier" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$ArrayType, $ArrayType$Type} from "packages/com/fasterxml/jackson/databind/type/$ArrayType"
import {$SerializationConfig, $SerializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$SerializationConfig"
import {$CollectionLikeType, $CollectionLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionLikeType"
import {$BeanPropertyWriter, $BeanPropertyWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/$BeanPropertyWriter"
import {$CollectionType, $CollectionType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionType"
import {$MapLikeType, $MapLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapLikeType"
import {$BeanSerializerBuilder, $BeanSerializerBuilder$Type} from "packages/com/fasterxml/jackson/databind/ser/$BeanSerializerBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapType, $MapType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapType"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"

export class $BeanSerializerModifier {

constructor()

public "updateBuilder"(arg0: $SerializationConfig$Type, arg1: $BeanDescription$Type, arg2: $BeanSerializerBuilder$Type): $BeanSerializerBuilder
public "modifySerializer"(arg0: $SerializationConfig$Type, arg1: $BeanDescription$Type, arg2: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
public "orderProperties"(arg0: $SerializationConfig$Type, arg1: $BeanDescription$Type, arg2: $List$Type<($BeanPropertyWriter$Type)>): $List<($BeanPropertyWriter)>
public "changeProperties"(arg0: $SerializationConfig$Type, arg1: $BeanDescription$Type, arg2: $List$Type<($BeanPropertyWriter$Type)>): $List<($BeanPropertyWriter)>
public "modifyEnumSerializer"(arg0: $SerializationConfig$Type, arg1: $JavaType$Type, arg2: $BeanDescription$Type, arg3: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
public "modifyKeySerializer"(arg0: $SerializationConfig$Type, arg1: $JavaType$Type, arg2: $BeanDescription$Type, arg3: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
public "modifyMapLikeSerializer"(arg0: $SerializationConfig$Type, arg1: $MapLikeType$Type, arg2: $BeanDescription$Type, arg3: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
public "modifyCollectionLikeSerializer"(arg0: $SerializationConfig$Type, arg1: $CollectionLikeType$Type, arg2: $BeanDescription$Type, arg3: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
public "modifyMapSerializer"(arg0: $SerializationConfig$Type, arg1: $MapType$Type, arg2: $BeanDescription$Type, arg3: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
public "modifyArraySerializer"(arg0: $SerializationConfig$Type, arg1: $ArrayType$Type, arg2: $BeanDescription$Type, arg3: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
public "modifyCollectionSerializer"(arg0: $SerializationConfig$Type, arg1: $CollectionType$Type, arg2: $BeanDescription$Type, arg3: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeanSerializerModifier$Type = ($BeanSerializerModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeanSerializerModifier_ = $BeanSerializerModifier$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonObjectFormatVisitor" {
import {$JsonFormatVisitable, $JsonFormatVisitable$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitable"
import {$JsonFormatVisitorWithSerializerProvider, $JsonFormatVisitorWithSerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWithSerializerProvider"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export interface $JsonObjectFormatVisitor extends $JsonFormatVisitorWithSerializerProvider {

 "property"(arg0: $BeanProperty$Type): void
 "property"(arg0: string, arg1: $JsonFormatVisitable$Type, arg2: $JavaType$Type): void
 "optionalProperty"(arg0: string, arg1: $JsonFormatVisitable$Type, arg2: $JavaType$Type): void
 "optionalProperty"(arg0: $BeanProperty$Type): void
 "getProvider"(): $SerializerProvider
 "setProvider"(arg0: $SerializerProvider$Type): void
}

export namespace $JsonObjectFormatVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonObjectFormatVisitor$Type = ($JsonObjectFormatVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonObjectFormatVisitor_ = $JsonObjectFormatVisitor$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonParser$Feature" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonParser$Feature extends $Enum<($JsonParser$Feature)> {
static readonly "AUTO_CLOSE_SOURCE": $JsonParser$Feature
static readonly "ALLOW_COMMENTS": $JsonParser$Feature
static readonly "ALLOW_YAML_COMMENTS": $JsonParser$Feature
static readonly "ALLOW_UNQUOTED_FIELD_NAMES": $JsonParser$Feature
static readonly "ALLOW_SINGLE_QUOTES": $JsonParser$Feature
/**
 * 
 * @deprecated
 */
static readonly "ALLOW_UNQUOTED_CONTROL_CHARS": $JsonParser$Feature
/**
 * 
 * @deprecated
 */
static readonly "ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER": $JsonParser$Feature
/**
 * 
 * @deprecated
 */
static readonly "ALLOW_NUMERIC_LEADING_ZEROS": $JsonParser$Feature
/**
 * 
 * @deprecated
 */
static readonly "ALLOW_LEADING_PLUS_SIGN_FOR_NUMBERS": $JsonParser$Feature
/**
 * 
 * @deprecated
 */
static readonly "ALLOW_LEADING_DECIMAL_POINT_FOR_NUMBERS": $JsonParser$Feature
/**
 * 
 * @deprecated
 */
static readonly "ALLOW_TRAILING_DECIMAL_POINT_FOR_NUMBERS": $JsonParser$Feature
/**
 * 
 * @deprecated
 */
static readonly "ALLOW_NON_NUMERIC_NUMBERS": $JsonParser$Feature
/**
 * 
 * @deprecated
 */
static readonly "ALLOW_MISSING_VALUES": $JsonParser$Feature
/**
 * 
 * @deprecated
 */
static readonly "ALLOW_TRAILING_COMMA": $JsonParser$Feature
static readonly "STRICT_DUPLICATE_DETECTION": $JsonParser$Feature
static readonly "IGNORE_UNDEFINED": $JsonParser$Feature
static readonly "INCLUDE_SOURCE_IN_LOCATION": $JsonParser$Feature
static readonly "USE_FAST_DOUBLE_PARSER": $JsonParser$Feature


public static "values"(): ($JsonParser$Feature)[]
public static "valueOf"(arg0: string): $JsonParser$Feature
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "enabledIn"(arg0: integer): boolean
public static "collectDefaults"(): integer
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonParser$Feature$Type = (("allow_unquoted_control_chars") | ("allow_trailing_comma") | ("allow_leading_decimal_point_for_numbers") | ("include_source_in_location") | ("allow_comments") | ("auto_close_source") | ("allow_trailing_decimal_point_for_numbers") | ("ignore_undefined") | ("use_fast_double_parser") | ("allow_single_quotes") | ("allow_yaml_comments") | ("allow_numeric_leading_zeros") | ("allow_non_numeric_numbers") | ("allow_unquoted_field_names") | ("strict_duplicate_detection") | ("allow_backslash_escaping_any_character") | ("allow_missing_values") | ("allow_leading_plus_sign_for_numbers")) | ($JsonParser$Feature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonParser$Feature_ = $JsonParser$Feature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/annotation/$JsonPOJOBuilder$Value" {
import {$JsonPOJOBuilder, $JsonPOJOBuilder$Type} from "packages/com/fasterxml/jackson/databind/annotation/$JsonPOJOBuilder"

export class $JsonPOJOBuilder$Value {
readonly "buildMethodName": string
readonly "withPrefix": string

constructor(arg0: $JsonPOJOBuilder$Type)
constructor(arg0: string, arg1: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonPOJOBuilder$Value$Type = ($JsonPOJOBuilder$Value);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonPOJOBuilder$Value_ = $JsonPOJOBuilder$Value$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$JsonSerializer" {
import {$JsonFormatVisitable, $JsonFormatVisitable$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitable"
import {$PropertyWriter, $PropertyWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/$PropertyWriter"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$NameTransformer, $NameTransformer$Type} from "packages/com/fasterxml/jackson/databind/util/$NameTransformer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$JsonFormatVisitorWrapper, $JsonFormatVisitorWrapper$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWrapper"

export class $JsonSerializer<T> implements $JsonFormatVisitable {

constructor()

public "isEmpty"(arg0: $SerializerProvider$Type, arg1: T): boolean
/**
 * 
 * @deprecated
 */
public "isEmpty"(arg0: T): boolean
public "properties"(): $Iterator<($PropertyWriter)>
public "serialize"(arg0: T, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "isUnwrappingSerializer"(): boolean
public "unwrappingSerializer"(arg0: $NameTransformer$Type): $JsonSerializer<(T)>
public "handledType"(): $Class<(T)>
public "usesObjectId"(): boolean
public "acceptJsonFormatVisitor"(arg0: $JsonFormatVisitorWrapper$Type, arg1: $JavaType$Type): void
public "serializeWithType"(arg0: T, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type, arg3: $TypeSerializer$Type): void
public "withFilterId"(arg0: any): $JsonSerializer<(any)>
public "replaceDelegatee"(arg0: $JsonSerializer$Type<(any)>): $JsonSerializer<(T)>
public "getDelegatee"(): $JsonSerializer<(any)>
get "delegatee"(): $JsonSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonSerializer$Type<T> = ($JsonSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonSerializer_<T> = $JsonSerializer$Type<(T)>;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$UnresolvedForwardReference" {
import {$JsonMappingException, $JsonMappingException$Type} from "packages/com/fasterxml/jackson/databind/$JsonMappingException"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UnresolvedId, $UnresolvedId$Type} from "packages/com/fasterxml/jackson/databind/deser/$UnresolvedId"
import {$JsonLocation, $JsonLocation$Type} from "packages/com/fasterxml/jackson/core/$JsonLocation"
import {$ReadableObjectId, $ReadableObjectId$Type} from "packages/com/fasterxml/jackson/databind/deser/impl/$ReadableObjectId"

export class $UnresolvedForwardReference extends $JsonMappingException {

constructor(arg0: $JsonParser$Type, arg1: string, arg2: $JsonLocation$Type, arg3: $ReadableObjectId$Type)
constructor(arg0: $JsonParser$Type, arg1: string)

public "getMessage"(): string
public "withStackTrace"(): $UnresolvedForwardReference
public "addUnresolvedId"(arg0: any, arg1: $Class$Type<(any)>, arg2: $JsonLocation$Type): void
public "getUnresolvedId"(): any
public "getRoid"(): $ReadableObjectId
public "getUnresolvedIds"(): $List<($UnresolvedId)>
get "message"(): string
get "unresolvedId"(): any
get "roid"(): $ReadableObjectId
get "unresolvedIds"(): $List<($UnresolvedId)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnresolvedForwardReference$Type = ($UnresolvedForwardReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnresolvedForwardReference_ = $UnresolvedForwardReference$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$JsonDeserializer" {
import {$LogicalType, $LogicalType$Type} from "packages/com/fasterxml/jackson/databind/type/$LogicalType"
import {$NullValueProvider, $NullValueProvider$Type} from "packages/com/fasterxml/jackson/databind/deser/$NullValueProvider"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$NameTransformer, $NameTransformer$Type} from "packages/com/fasterxml/jackson/databind/util/$NameTransformer"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$TypeDeserializer, $TypeDeserializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeDeserializer"
import {$ObjectIdReader, $ObjectIdReader$Type} from "packages/com/fasterxml/jackson/databind/deser/impl/$ObjectIdReader"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$AccessPattern, $AccessPattern$Type} from "packages/com/fasterxml/jackson/databind/util/$AccessPattern"
import {$SettableBeanProperty, $SettableBeanProperty$Type} from "packages/com/fasterxml/jackson/databind/deser/$SettableBeanProperty"

export class $JsonDeserializer<T> implements $NullValueProvider {

constructor()

public "deserialize"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type, arg2: T): T
public "deserialize"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type): T
public "getNullValue"(arg0: $DeserializationContext$Type): T
/**
 * 
 * @deprecated
 */
public "getNullValue"(): T
public "handledType"(): $Class<(any)>
public "logicalType"(): $LogicalType
public "getKnownPropertyNames"(): $Collection<(any)>
public "deserializeWithType"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type, arg2: $TypeDeserializer$Type): any
public "deserializeWithType"(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type, arg2: $TypeDeserializer$Type, arg3: T): any
public "unwrappingDeserializer"(arg0: $NameTransformer$Type): $JsonDeserializer<(T)>
public "getNullAccessPattern"(): $AccessPattern
public "getEmptyAccessPattern"(): $AccessPattern
public "replaceDelegatee"(arg0: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
public "getDelegatee"(): $JsonDeserializer<(any)>
public "findBackReference"(arg0: string): $SettableBeanProperty
public "getObjectIdReader"(): $ObjectIdReader
public "getAbsentValue"(arg0: $DeserializationContext$Type): any
public "isCachable"(): boolean
/**
 * 
 * @deprecated
 */
public "getEmptyValue"(): any
public "getEmptyValue"(arg0: $DeserializationContext$Type): any
public "supportsUpdate"(arg0: $DeserializationConfig$Type): boolean
get "nullValue"(): T
get "knownPropertyNames"(): $Collection<(any)>
get "nullAccessPattern"(): $AccessPattern
get "emptyAccessPattern"(): $AccessPattern
get "delegatee"(): $JsonDeserializer<(any)>
get "objectIdReader"(): $ObjectIdReader
get "cachable"(): boolean
get "emptyValue"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonDeserializer$Type<T> = ($JsonDeserializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonDeserializer_<T> = $JsonDeserializer$Type<(T)>;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/impl/$ObjectIdWriter" {
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$ObjectIdGenerator, $ObjectIdGenerator$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"

export class $ObjectIdWriter {
readonly "idType": $JavaType
readonly "propertyName": $SerializableString
readonly "generator": $ObjectIdGenerator<(any)>
readonly "serializer": $JsonSerializer<(any)>
readonly "alwaysAsId": boolean


public static "construct"(arg0: $JavaType$Type, arg1: $PropertyName$Type, arg2: $ObjectIdGenerator$Type<(any)>, arg3: boolean): $ObjectIdWriter
public "withSerializer"(arg0: $JsonSerializer$Type<(any)>): $ObjectIdWriter
public "withAlwaysAsId"(arg0: boolean): $ObjectIdWriter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectIdWriter$Type = ($ObjectIdWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectIdWriter_ = $ObjectIdWriter$Type;
}}
declare module "packages/com/fasterxml/jackson/core/type/$WritableTypeId" {
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$WritableTypeId$Inclusion, $WritableTypeId$Inclusion$Type} from "packages/com/fasterxml/jackson/core/type/$WritableTypeId$Inclusion"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $WritableTypeId {
 "forValue": any
 "forValueType": $Class<(any)>
 "id": any
 "asProperty": string
 "include": $WritableTypeId$Inclusion
 "valueShape": $JsonToken
 "wrapperWritten": boolean
 "extra": any

constructor(arg0: any, arg1: $JsonToken$Type, arg2: any)
constructor(arg0: any, arg1: $Class$Type<(any)>, arg2: $JsonToken$Type)
constructor(arg0: any, arg1: $JsonToken$Type)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableTypeId$Type = ($WritableTypeId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritableTypeId_ = $WritableTypeId$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$FloatBuilder" {
import {$PrimitiveArrayBuilder, $PrimitiveArrayBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$PrimitiveArrayBuilder"

export class $ArrayBuilders$FloatBuilder extends $PrimitiveArrayBuilder<((float)[])> {

constructor()

public "_constructArray"(arg0: integer): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayBuilders$FloatBuilder$Type = ($ArrayBuilders$FloatBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayBuilders$FloatBuilder_ = $ArrayBuilders$FloatBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/core/util/$BufferRecycler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BufferRecycler {
static readonly "BYTE_READ_IO_BUFFER": integer
static readonly "BYTE_WRITE_ENCODING_BUFFER": integer
static readonly "BYTE_WRITE_CONCAT_BUFFER": integer
static readonly "BYTE_BASE64_CODEC_BUFFER": integer
static readonly "CHAR_TOKEN_BUFFER": integer
static readonly "CHAR_CONCAT_BUFFER": integer
static readonly "CHAR_TEXT_BUFFER": integer
static readonly "CHAR_NAME_COPY_BUFFER": integer

constructor()

public "releaseByteBuffer"(arg0: integer, arg1: (byte)[]): void
public "allocByteBuffer"(arg0: integer): (byte)[]
public "allocByteBuffer"(arg0: integer, arg1: integer): (byte)[]
public "allocCharBuffer"(arg0: integer, arg1: integer): (character)[]
public "allocCharBuffer"(arg0: integer): (character)[]
public "releaseCharBuffer"(arg0: integer, arg1: (character)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferRecycler$Type = ($BufferRecycler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferRecycler_ = $BufferRecycler$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/type/$CollectionType" {
import {$TypeBindings, $TypeBindings$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBindings"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollectionLikeType, $CollectionLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionLikeType"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $CollectionType extends $CollectionLikeType {


public "toString"(): string
/**
 * 
 * @deprecated
 */
public static "construct"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type): $CollectionType
public static "construct"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type, arg2: $JavaType$Type, arg3: ($JavaType$Type)[], arg4: $JavaType$Type): $CollectionType
public "refine"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type, arg2: $JavaType$Type, arg3: ($JavaType$Type)[]): $JavaType
public "withStaticTyping"(): $CollectionType
public "withContentType"(arg0: $JavaType$Type): $JavaType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollectionType$Type = ($CollectionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CollectionType_ = $CollectionType$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$BeanDeserializerBuilder" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$SettableAnyProperty, $SettableAnyProperty$Type} from "packages/com/fasterxml/jackson/databind/deser/$SettableAnyProperty"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$JsonPOJOBuilder$Value, $JsonPOJOBuilder$Value$Type} from "packages/com/fasterxml/jackson/databind/annotation/$JsonPOJOBuilder$Value"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"
import {$ObjectIdReader, $ObjectIdReader$Type} from "packages/com/fasterxml/jackson/databind/deser/impl/$ObjectIdReader"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$ValueInstantiator, $ValueInstantiator$Type} from "packages/com/fasterxml/jackson/databind/deser/$ValueInstantiator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ValueInjector, $ValueInjector$Type} from "packages/com/fasterxml/jackson/databind/deser/impl/$ValueInjector"
import {$AbstractDeserializer, $AbstractDeserializer$Type} from "packages/com/fasterxml/jackson/databind/deser/$AbstractDeserializer"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$SettableBeanProperty, $SettableBeanProperty$Type} from "packages/com/fasterxml/jackson/databind/deser/$SettableBeanProperty"
import {$AnnotatedMethod, $AnnotatedMethod$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMethod"
import {$Annotations, $Annotations$Type} from "packages/com/fasterxml/jackson/databind/util/$Annotations"

export class $BeanDeserializerBuilder {

constructor(arg0: $BeanDescription$Type, arg1: $DeserializationContext$Type)

public "getProperties"(): $Iterator<($SettableBeanProperty)>
public "build"(): $JsonDeserializer<(any)>
public "addProperty"(arg0: $SettableBeanProperty$Type): void
public "hasProperty"(arg0: $PropertyName$Type): boolean
public "removeProperty"(arg0: $PropertyName$Type): $SettableBeanProperty
public "findProperty"(arg0: $PropertyName$Type): $SettableBeanProperty
public "getInjectables"(): $List<($ValueInjector)>
public "getAnySetter"(): $SettableAnyProperty
public "setAnySetter"(arg0: $SettableAnyProperty$Type): void
public "addIncludable"(arg0: string): void
public "hasIgnorable"(arg0: string): boolean
public "setPOJOBuilder"(arg0: $AnnotatedMethod$Type, arg1: $JsonPOJOBuilder$Value$Type): void
public "buildAbstract"(): $AbstractDeserializer
public "buildBuilderBased"(arg0: $JavaType$Type, arg1: string): $JsonDeserializer<(any)>
public "setObjectIdReader"(arg0: $ObjectIdReader$Type): void
public "addIgnorable"(arg0: string): void
public "addInjectable"(arg0: $PropertyName$Type, arg1: $JavaType$Type, arg2: $Annotations$Type, arg3: $AnnotatedMember$Type, arg4: any): void
public "addCreatorProperty"(arg0: $SettableBeanProperty$Type): void
public "addBackReferenceProperty"(arg0: string, arg1: $SettableBeanProperty$Type): void
public "setValueInstantiator"(arg0: $ValueInstantiator$Type): void
public "setIgnoreUnknownProperties"(arg0: boolean): void
public "getValueInstantiator"(): $ValueInstantiator
public "addOrReplaceProperty"(arg0: $SettableBeanProperty$Type, arg1: boolean): void
public "getBuilderConfig"(): $JsonPOJOBuilder$Value
public "getBuildMethod"(): $AnnotatedMethod
public "getObjectIdReader"(): $ObjectIdReader
get "properties"(): $Iterator<($SettableBeanProperty)>
get "injectables"(): $List<($ValueInjector)>
get "anySetter"(): $SettableAnyProperty
set "anySetter"(value: $SettableAnyProperty$Type)
set "objectIdReader"(value: $ObjectIdReader$Type)
set "valueInstantiator"(value: $ValueInstantiator$Type)
set "ignoreUnknownProperties"(value: boolean)
get "valueInstantiator"(): $ValueInstantiator
get "builderConfig"(): $JsonPOJOBuilder$Value
get "buildMethod"(): $AnnotatedMethod
get "objectIdReader"(): $ObjectIdReader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeanDeserializerBuilder$Type = ($BeanDeserializerBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeanDeserializerBuilder_ = $BeanDeserializerBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonArrayFormatVisitor" {
import {$JsonFormatVisitable, $JsonFormatVisitable$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitable"
import {$JsonFormatVisitorWithSerializerProvider, $JsonFormatVisitorWithSerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWithSerializerProvider"
import {$JsonFormatTypes, $JsonFormatTypes$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatTypes"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export interface $JsonArrayFormatVisitor extends $JsonFormatVisitorWithSerializerProvider {

 "itemsFormat"(arg0: $JsonFormatVisitable$Type, arg1: $JavaType$Type): void
 "itemsFormat"(arg0: $JsonFormatTypes$Type): void
 "getProvider"(): $SerializerProvider
 "setProvider"(arg0: $SerializerProvider$Type): void
}

export namespace $JsonArrayFormatVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonArrayFormatVisitor$Type = ($JsonArrayFormatVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonArrayFormatVisitor_ = $JsonArrayFormatVisitor$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/type/$TypeBindings" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $TypeBindings implements $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "size"(): integer
public "getTypeParameters"(): $List<($JavaType)>
public static "create"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type, arg2: $JavaType$Type): $TypeBindings
public static "create"(arg0: $List$Type<(string)>, arg1: $List$Type<($JavaType$Type)>): $TypeBindings
public static "create"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type): $TypeBindings
public static "create"(arg0: $Class$Type<(any)>, arg1: ($JavaType$Type)[]): $TypeBindings
public static "create"(arg0: $Class$Type<(any)>, arg1: $List$Type<($JavaType$Type)>): $TypeBindings
public static "emptyBindings"(): $TypeBindings
public "getBoundType"(arg0: integer): $JavaType
public "getBoundName"(arg0: integer): string
public static "createIfNeeded"(arg0: $Class$Type<(any)>, arg1: ($JavaType$Type)[]): $TypeBindings
public static "createIfNeeded"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type): $TypeBindings
public "hasUnbound"(arg0: string): boolean
public "asKey"(arg0: $Class$Type<(any)>): any
public "findBoundType"(arg0: string): $JavaType
public "withUnboundVariable"(arg0: string): $TypeBindings
get "empty"(): boolean
get "typeParameters"(): $List<($JavaType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeBindings$Type = ($TypeBindings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeBindings_ = $TypeBindings$Type;
}}
declare module "packages/com/fasterxml/jackson/core/json/$JsonWriteFeature" {
import {$JsonGenerator$Feature, $JsonGenerator$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator$Feature"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FormatFeature, $FormatFeature$Type} from "packages/com/fasterxml/jackson/core/$FormatFeature"

export class $JsonWriteFeature extends $Enum<($JsonWriteFeature)> implements $FormatFeature {
static readonly "QUOTE_FIELD_NAMES": $JsonWriteFeature
static readonly "WRITE_NAN_AS_STRINGS": $JsonWriteFeature
static readonly "WRITE_NUMBERS_AS_STRINGS": $JsonWriteFeature
static readonly "ESCAPE_NON_ASCII": $JsonWriteFeature
static readonly "WRITE_HEX_UPPER_CASE": $JsonWriteFeature


public static "values"(): ($JsonWriteFeature)[]
public static "valueOf"(arg0: string): $JsonWriteFeature
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "mappedFeature"(): $JsonGenerator$Feature
public "enabledIn"(arg0: integer): boolean
public static "collectDefaults"(): integer
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonWriteFeature$Type = (("write_nan_as_strings") | ("quote_field_names") | ("escape_non_ascii") | ("write_hex_upper_case") | ("write_numbers_as_strings")) | ($JsonWriteFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonWriteFeature_ = $JsonWriteFeature$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonTypeInfo$As" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonTypeInfo$As extends $Enum<($JsonTypeInfo$As)> {
static readonly "PROPERTY": $JsonTypeInfo$As
static readonly "WRAPPER_OBJECT": $JsonTypeInfo$As
static readonly "WRAPPER_ARRAY": $JsonTypeInfo$As
static readonly "EXTERNAL_PROPERTY": $JsonTypeInfo$As
static readonly "EXISTING_PROPERTY": $JsonTypeInfo$As


public static "values"(): ($JsonTypeInfo$As)[]
public static "valueOf"(arg0: string): $JsonTypeInfo$As
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonTypeInfo$As$Type = (("property") | ("wrapper_object") | ("external_property") | ("existing_property") | ("wrapper_array")) | ($JsonTypeInfo$As);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonTypeInfo$As_ = $JsonTypeInfo$As$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$LongBuilder" {
import {$PrimitiveArrayBuilder, $PrimitiveArrayBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$PrimitiveArrayBuilder"

export class $ArrayBuilders$LongBuilder extends $PrimitiveArrayBuilder<((long)[])> {

constructor()

public "_constructArray"(arg0: integer): (long)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayBuilders$LongBuilder$Type = ($ArrayBuilders$LongBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayBuilders$LongBuilder_ = $ArrayBuilders$LongBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonTypeInfo$Id" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonTypeInfo$Id extends $Enum<($JsonTypeInfo$Id)> {
static readonly "NONE": $JsonTypeInfo$Id
static readonly "CLASS": $JsonTypeInfo$Id
static readonly "MINIMAL_CLASS": $JsonTypeInfo$Id
static readonly "NAME": $JsonTypeInfo$Id
static readonly "DEDUCTION": $JsonTypeInfo$Id
static readonly "CUSTOM": $JsonTypeInfo$Id


public static "values"(): ($JsonTypeInfo$Id)[]
public static "valueOf"(arg0: string): $JsonTypeInfo$Id
public "getDefaultPropertyName"(): string
get "defaultPropertyName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonTypeInfo$Id$Type = (("deduction") | ("custom") | ("name") | ("minimal_class") | ("none") | ("class")) | ($JsonTypeInfo$Id);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonTypeInfo$Id_ = $JsonTypeInfo$Id$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$MapperFeature" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfigFeature, $ConfigFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConfigFeature"

export class $MapperFeature extends $Enum<($MapperFeature)> implements $ConfigFeature {
static readonly "USE_ANNOTATIONS": $MapperFeature
static readonly "USE_GETTERS_AS_SETTERS": $MapperFeature
static readonly "PROPAGATE_TRANSIENT_MARKER": $MapperFeature
static readonly "AUTO_DETECT_CREATORS": $MapperFeature
static readonly "AUTO_DETECT_FIELDS": $MapperFeature
static readonly "AUTO_DETECT_GETTERS": $MapperFeature
static readonly "AUTO_DETECT_IS_GETTERS": $MapperFeature
static readonly "AUTO_DETECT_SETTERS": $MapperFeature
static readonly "REQUIRE_SETTERS_FOR_GETTERS": $MapperFeature
static readonly "ALLOW_FINAL_FIELDS_AS_MUTATORS": $MapperFeature
static readonly "INFER_PROPERTY_MUTATORS": $MapperFeature
static readonly "INFER_CREATOR_FROM_CONSTRUCTOR_PROPERTIES": $MapperFeature
static readonly "ALLOW_VOID_VALUED_PROPERTIES": $MapperFeature
static readonly "CAN_OVERRIDE_ACCESS_MODIFIERS": $MapperFeature
static readonly "OVERRIDE_PUBLIC_ACCESS_MODIFIERS": $MapperFeature
static readonly "USE_STATIC_TYPING": $MapperFeature
static readonly "USE_BASE_TYPE_AS_DEFAULT_IMPL": $MapperFeature
static readonly "INFER_BUILDER_TYPE_BINDINGS": $MapperFeature
static readonly "DEFAULT_VIEW_INCLUSION": $MapperFeature
static readonly "SORT_PROPERTIES_ALPHABETICALLY": $MapperFeature
static readonly "SORT_CREATOR_PROPERTIES_FIRST": $MapperFeature
static readonly "ACCEPT_CASE_INSENSITIVE_PROPERTIES": $MapperFeature
static readonly "ACCEPT_CASE_INSENSITIVE_ENUMS": $MapperFeature
static readonly "ACCEPT_CASE_INSENSITIVE_VALUES": $MapperFeature
static readonly "USE_WRAPPER_NAME_AS_PROPERTY_NAME": $MapperFeature
static readonly "USE_STD_BEAN_NAMING": $MapperFeature
static readonly "ALLOW_EXPLICIT_PROPERTY_RENAMING": $MapperFeature
static readonly "ALLOW_IS_GETTERS_FOR_NON_BOOLEAN": $MapperFeature
static readonly "ALLOW_COERCION_OF_SCALARS": $MapperFeature
static readonly "IGNORE_DUPLICATE_MODULE_REGISTRATIONS": $MapperFeature
static readonly "IGNORE_MERGE_FOR_UNMERGEABLE": $MapperFeature
static readonly "BLOCK_UNSAFE_POLYMORPHIC_BASE_TYPES": $MapperFeature
static readonly "APPLY_DEFAULT_VALUES": $MapperFeature


public static "values"(): ($MapperFeature)[]
public static "valueOf"(arg0: string): $MapperFeature
/**
 * 
 * @deprecated
 */
public "getMask"(): integer
public "getLongMask"(): long
public "enabledByDefault"(): boolean
public "enabledIn"(arg0: long): boolean
/**
 * 
 * @deprecated
 */
public "enabledIn"(arg0: integer): boolean
public static "collectLongDefaults"(): long
get "mask"(): integer
get "longMask"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapperFeature$Type = (("auto_detect_fields") | ("infer_builder_type_bindings") | ("allow_is_getters_for_non_boolean") | ("sort_creator_properties_first") | ("auto_detect_getters") | ("use_static_typing") | ("block_unsafe_polymorphic_base_types") | ("require_setters_for_getters") | ("auto_detect_creators") | ("auto_detect_setters") | ("use_wrapper_name_as_property_name") | ("allow_final_fields_as_mutators") | ("allow_explicit_property_renaming") | ("propagate_transient_marker") | ("can_override_access_modifiers") | ("accept_case_insensitive_properties") | ("override_public_access_modifiers") | ("use_annotations") | ("allow_void_valued_properties") | ("apply_default_values") | ("use_base_type_as_default_impl") | ("ignore_merge_for_unmergeable") | ("allow_coercion_of_scalars") | ("infer_property_mutators") | ("default_view_inclusion") | ("sort_properties_alphabetically") | ("infer_creator_from_constructor_properties") | ("ignore_duplicate_module_registrations") | ("accept_case_insensitive_values") | ("auto_detect_is_getters") | ("accept_case_insensitive_enums") | ("use_getters_as_setters") | ("use_std_bean_naming")) | ($MapperFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapperFeature_ = $MapperFeature$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect$Value" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JsonAutoDetect, $JsonAutoDetect$Type} from "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect"
import {$PropertyAccessor, $PropertyAccessor$Type} from "packages/com/fasterxml/jackson/annotation/$PropertyAccessor"
import {$JacksonAnnotationValue, $JacksonAnnotationValue$Type} from "packages/com/fasterxml/jackson/annotation/$JacksonAnnotationValue"
import {$JsonAutoDetect$Visibility, $JsonAutoDetect$Visibility$Type} from "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect$Visibility"

export class $JsonAutoDetect$Value implements $JacksonAnnotationValue<($JsonAutoDetect)>, $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"(arg0: $JsonAutoDetect$Type): $JsonAutoDetect$Value
public static "merge"(arg0: $JsonAutoDetect$Value$Type, arg1: $JsonAutoDetect$Value$Type): $JsonAutoDetect$Value
public static "construct"(arg0: $PropertyAccessor$Type, arg1: $JsonAutoDetect$Visibility$Type): $JsonAutoDetect$Value
public static "construct"(arg0: $JsonAutoDetect$Visibility$Type, arg1: $JsonAutoDetect$Visibility$Type, arg2: $JsonAutoDetect$Visibility$Type, arg3: $JsonAutoDetect$Visibility$Type, arg4: $JsonAutoDetect$Visibility$Type): $JsonAutoDetect$Value
public "valueFor"(): $Class<($JsonAutoDetect)>
public "getFieldVisibility"(): $JsonAutoDetect$Visibility
public "withOverrides"(arg0: $JsonAutoDetect$Value$Type): $JsonAutoDetect$Value
public "getIsGetterVisibility"(): $JsonAutoDetect$Visibility
public "getSetterVisibility"(): $JsonAutoDetect$Visibility
public "getGetterVisibility"(): $JsonAutoDetect$Visibility
public "getCreatorVisibility"(): $JsonAutoDetect$Visibility
public "withSetterVisibility"(arg0: $JsonAutoDetect$Visibility$Type): $JsonAutoDetect$Value
public "withIsGetterVisibility"(arg0: $JsonAutoDetect$Visibility$Type): $JsonAutoDetect$Value
public "withFieldVisibility"(arg0: $JsonAutoDetect$Visibility$Type): $JsonAutoDetect$Value
public "withGetterVisibility"(arg0: $JsonAutoDetect$Visibility$Type): $JsonAutoDetect$Value
public "withCreatorVisibility"(arg0: $JsonAutoDetect$Visibility$Type): $JsonAutoDetect$Value
public static "defaultVisibility"(): $JsonAutoDetect$Value
public static "noOverrides"(): $JsonAutoDetect$Value
get "fieldVisibility"(): $JsonAutoDetect$Visibility
get "isGetterVisibility"(): $JsonAutoDetect$Visibility
get "setterVisibility"(): $JsonAutoDetect$Visibility
get "getterVisibility"(): $JsonAutoDetect$Visibility
get "creatorVisibility"(): $JsonAutoDetect$Visibility
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonAutoDetect$Value$Type = ($JsonAutoDetect$Value);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonAutoDetect$Value_ = $JsonAutoDetect$Value$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonProperty$Access" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonProperty$Access extends $Enum<($JsonProperty$Access)> {
static readonly "AUTO": $JsonProperty$Access
static readonly "READ_ONLY": $JsonProperty$Access
static readonly "WRITE_ONLY": $JsonProperty$Access
static readonly "READ_WRITE": $JsonProperty$Access


public static "values"(): ($JsonProperty$Access)[]
public static "valueOf"(arg0: string): $JsonProperty$Access
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonProperty$Access$Type = (("auto") | ("read_write") | ("read_only") | ("write_only")) | ($JsonProperty$Access);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonProperty$Access_ = $JsonProperty$Access$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$Converter" {
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export interface $Converter<IN, OUT> {

 "convert"(arg0: IN): OUT
 "getOutputType"(arg0: $TypeFactory$Type): $JavaType
 "getInputType"(arg0: $TypeFactory$Type): $JavaType
}

export namespace $Converter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Converter$Type<IN, OUT> = ($Converter<(IN), (OUT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Converter_<IN, OUT> = $Converter$Type<(IN), (OUT)>;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/std/$StdSerializer" {
import {$JsonFormatVisitable, $JsonFormatVisitable$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$JsonFormatVisitorWrapper, $JsonFormatVisitorWrapper$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWrapper"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$SchemaAware, $SchemaAware$Type} from "packages/com/fasterxml/jackson/databind/jsonschema/$SchemaAware"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"

export class $StdSerializer<T> extends $JsonSerializer<(T)> implements $JsonFormatVisitable, $SchemaAware, $Serializable {


public "getSchema"(arg0: $SerializerProvider$Type, arg1: $Type$Type): $JsonNode
public "getSchema"(arg0: $SerializerProvider$Type, arg1: $Type$Type, arg2: boolean): $JsonNode
public "serialize"(arg0: T, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "handledType"(): $Class<(T)>
public "acceptJsonFormatVisitor"(arg0: $JsonFormatVisitorWrapper$Type, arg1: $JavaType$Type): void
public "wrapAndThrow"(arg0: $SerializerProvider$Type, arg1: $Throwable$Type, arg2: any, arg3: string): void
public "wrapAndThrow"(arg0: $SerializerProvider$Type, arg1: $Throwable$Type, arg2: any, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StdSerializer$Type<T> = ($StdSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StdSerializer_<T> = $StdSerializer$Type<(T)>;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$DataFormatReaders$Match" {
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$ObjectReader, $ObjectReader$Type} from "packages/com/fasterxml/jackson/databind/$ObjectReader"
import {$MatchStrength, $MatchStrength$Type} from "packages/com/fasterxml/jackson/core/format/$MatchStrength"

export class $DataFormatReaders$Match {


public "getReader"(): $ObjectReader
public "getDataStream"(): $InputStream
public "hasMatch"(): boolean
public "createParserWithMatch"(): $JsonParser
public "getMatchedFormatName"(): string
public "getMatchStrength"(): $MatchStrength
get "reader"(): $ObjectReader
get "dataStream"(): $InputStream
get "matchedFormatName"(): string
get "matchStrength"(): $MatchStrength
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFormatReaders$Match$Type = ($DataFormatReaders$Match);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataFormatReaders$Match_ = $DataFormatReaders$Match$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedClass" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ClassIntrospector$MixInResolver, $ClassIntrospector$MixInResolver$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ClassIntrospector$MixInResolver"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$TypeResolutionContext, $TypeResolutionContext$Type} from "packages/com/fasterxml/jackson/databind/introspect/$TypeResolutionContext"
import {$AnnotatedField, $AnnotatedField$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedField"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$Annotated, $Annotated$Type} from "packages/com/fasterxml/jackson/databind/introspect/$Annotated"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$AnnotatedConstructor, $AnnotatedConstructor$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedConstructor"
import {$Annotations, $Annotations$Type} from "packages/com/fasterxml/jackson/databind/util/$Annotations"
import {$AnnotatedMethod, $AnnotatedMethod$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMethod"

export class $AnnotatedClass extends $Annotated implements $TypeResolutionContext {


/**
 * 
 * @deprecated
 */
public "annotations"(): $Iterable<($Annotation)>
public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): integer
public "getConstructors"(): $List<($AnnotatedConstructor)>
public "fields"(): $Iterable<($AnnotatedField)>
public "getAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "getAnnotations"(): $Annotations
public "getType"(): $JavaType
public "getRawType"(): $Class<(any)>
/**
 * 
 * @deprecated
 */
public static "construct"(arg0: $JavaType$Type, arg1: $MapperConfig$Type<(any)>, arg2: $ClassIntrospector$MixInResolver$Type): $AnnotatedClass
/**
 * 
 * @deprecated
 */
public static "construct"(arg0: $JavaType$Type, arg1: $MapperConfig$Type<(any)>): $AnnotatedClass
public "getDefaultConstructor"(): $AnnotatedConstructor
public "memberMethods"(): $Iterable<($AnnotatedMethod)>
public "findMethod"(arg0: string, arg1: ($Class$Type<(any)>)[]): $AnnotatedMethod
public "hasAnnotation"(arg0: $Class$Type<(any)>): boolean
public "hasAnnotations"(): boolean
public "getFieldCount"(): integer
public "resolveType"(arg0: $Type$Type): $JavaType
public "hasOneOf"(arg0: ($Class$Type<(any)>)[]): boolean
public "getFactoryMethods"(): $List<($AnnotatedMethod)>
public "getMemberMethodCount"(): integer
/**
 * 
 * @deprecated
 */
public static "constructWithoutSuperTypes"(arg0: $Class$Type<(any)>, arg1: $MapperConfig$Type<(any)>): $AnnotatedClass
/**
 * 
 * @deprecated
 */
public static "constructWithoutSuperTypes"(arg0: $Class$Type<(any)>, arg1: $MapperConfig$Type<(any)>, arg2: $ClassIntrospector$MixInResolver$Type): $AnnotatedClass
public "isNonStaticInnerClass"(): boolean
public "getAnnotated"(): $Class<(any)>
/**
 * 
 * @deprecated
 */
public "getStaticMethods"(): $List<($AnnotatedMethod)>
get "name"(): string
get "modifiers"(): integer
get "constructors"(): $List<($AnnotatedConstructor)>
get "type"(): $JavaType
get "rawType"(): $Class<(any)>
get "defaultConstructor"(): $AnnotatedConstructor
get "fieldCount"(): integer
get "factoryMethods"(): $List<($AnnotatedMethod)>
get "memberMethodCount"(): integer
get "nonStaticInnerClass"(): boolean
get "annotated"(): $Class<(any)>
get "staticMethods"(): $List<($AnnotatedMethod)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedClass$Type = ($AnnotatedClass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotatedClass_ = $AnnotatedClass$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonschema/$SchemaAware" {
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export interface $SchemaAware {

 "getSchema"(arg0: $SerializerProvider$Type, arg1: $Type$Type): $JsonNode
 "getSchema"(arg0: $SerializerProvider$Type, arg1: $Type$Type, arg2: boolean): $JsonNode
}

export namespace $SchemaAware {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchemaAware$Type = ($SchemaAware);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchemaAware_ = $SchemaAware$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$JsonNodeCreator" {
import {$ObjectNode, $ObjectNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ObjectNode"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$ValueNode, $ValueNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ValueNode"
import {$ArrayNode, $ArrayNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ArrayNode"
import {$RawValue, $RawValue$Type} from "packages/com/fasterxml/jackson/databind/util/$RawValue"

export interface $JsonNodeCreator {

 "textNode"(arg0: string): $ValueNode
 "binaryNode"(arg0: (byte)[], arg1: integer, arg2: integer): $ValueNode
 "binaryNode"(arg0: (byte)[]): $ValueNode
 "objectNode"(): $ObjectNode
 "nullNode"(): $ValueNode
 "arrayNode"(): $ArrayNode
 "arrayNode"(arg0: integer): $ArrayNode
 "numberNode"(arg0: double): $ValueNode
 "numberNode"(arg0: float): $ValueNode
 "numberNode"(arg0: float): $ValueNode
 "numberNode"(arg0: double): $ValueNode
 "numberNode"(arg0: $BigDecimal$Type): $ValueNode
 "numberNode"(arg0: integer): $ValueNode
 "numberNode"(arg0: short): $ValueNode
 "numberNode"(arg0: short): $ValueNode
 "numberNode"(arg0: byte): $ValueNode
 "numberNode"(arg0: byte): $ValueNode
 "numberNode"(arg0: long): $ValueNode
 "numberNode"(arg0: $BigInteger$Type): $ValueNode
 "numberNode"(arg0: long): $ValueNode
 "numberNode"(arg0: integer): $ValueNode
 "booleanNode"(arg0: boolean): $ValueNode
 "rawValueNode"(arg0: $RawValue$Type): $ValueNode
 "pojoNode"(arg0: any): $ValueNode
}

export namespace $JsonNodeCreator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNodeCreator$Type = ($JsonNodeCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonNodeCreator_ = $JsonNodeCreator$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$LinkedNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LinkedNode<T> {

constructor(arg0: T, arg1: $LinkedNode$Type<(T)>)

public "value"(): T
public "next"(): $LinkedNode<(T)>
public static "contains"<ST>(arg0: $LinkedNode$Type<(ST)>, arg1: ST): boolean
public "linkNext"(arg0: $LinkedNode$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedNode$Type<T> = ($LinkedNode<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkedNode_<T> = $LinkedNode$Type<(T)>;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$ContextualDeserializer" {
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"

export interface $ContextualDeserializer {

 "createContextual"(arg0: $DeserializationContext$Type, arg1: $BeanProperty$Type): $JsonDeserializer<(any)>

(arg0: $DeserializationContext$Type, arg1: $BeanProperty$Type): $JsonDeserializer<(any)>
}

export namespace $ContextualDeserializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextualDeserializer$Type = ($ContextualDeserializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextualDeserializer_ = $ContextualDeserializer$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$DataFormatReaders" {
import {$DataFormatReaders$Match, $DataFormatReaders$Match$Type} from "packages/com/fasterxml/jackson/databind/deser/$DataFormatReaders$Match"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$ObjectReader, $ObjectReader$Type} from "packages/com/fasterxml/jackson/databind/$ObjectReader"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$MatchStrength, $MatchStrength$Type} from "packages/com/fasterxml/jackson/core/format/$MatchStrength"

export class $DataFormatReaders {
static readonly "DEFAULT_MAX_INPUT_LOOKAHEAD": integer

constructor(arg0: $Collection$Type<($ObjectReader$Type)>)
constructor(...arg0: ($ObjectReader$Type)[])

public "toString"(): string
public "with"(arg0: $DeserializationConfig$Type): $DataFormatReaders
public "with"(arg0: ($ObjectReader$Type)[]): $DataFormatReaders
public "withType"(arg0: $JavaType$Type): $DataFormatReaders
public "findFormat"(arg0: $InputStream$Type): $DataFormatReaders$Match
public "findFormat"(arg0: (byte)[]): $DataFormatReaders$Match
public "findFormat"(arg0: (byte)[], arg1: integer, arg2: integer): $DataFormatReaders$Match
public "withMaxInputLookahead"(arg0: integer): $DataFormatReaders
public "withOptimalMatch"(arg0: $MatchStrength$Type): $DataFormatReaders
public "withMinimalMatch"(arg0: $MatchStrength$Type): $DataFormatReaders
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFormatReaders$Type = ($DataFormatReaders);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataFormatReaders_ = $DataFormatReaders$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$Nulls" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Nulls extends $Enum<($Nulls)> {
static readonly "SET": $Nulls
static readonly "SKIP": $Nulls
static readonly "FAIL": $Nulls
static readonly "AS_EMPTY": $Nulls
static readonly "DEFAULT": $Nulls


public static "values"(): ($Nulls)[]
public static "valueOf"(arg0: string): $Nulls
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Nulls$Type = (("fail") | ("default") | ("set") | ("skip") | ("as_empty")) | ($Nulls);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Nulls_ = $Nulls$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonStreamContext" {
import {$ContentReference, $ContentReference$Type} from "packages/com/fasterxml/jackson/core/io/$ContentReference"
import {$JsonLocation, $JsonLocation$Type} from "packages/com/fasterxml/jackson/core/$JsonLocation"
import {$JsonPointer, $JsonPointer$Type} from "packages/com/fasterxml/jackson/core/$JsonPointer"

export class $JsonStreamContext {
static readonly "TYPE_ROOT": integer
static readonly "TYPE_ARRAY": integer
static readonly "TYPE_OBJECT": integer


public "toString"(): string
public "getParent"(): $JsonStreamContext
public "inArray"(): boolean
public "typeDesc"(): string
public "inObject"(): boolean
public "getEntryCount"(): integer
public "setCurrentValue"(arg0: any): void
public "getCurrentValue"(): any
public "getCurrentName"(): string
public "inRoot"(): boolean
public "startLocation"(arg0: $ContentReference$Type): $JsonLocation
public "pathAsPointer"(arg0: boolean): $JsonPointer
public "pathAsPointer"(): $JsonPointer
public "getCurrentIndex"(): integer
public "hasCurrentName"(): boolean
public "hasCurrentIndex"(): boolean
/**
 * 
 * @deprecated
 */
public "getTypeDesc"(): string
/**
 * 
 * @deprecated
 */
public "getStartLocation"(arg0: any): $JsonLocation
public "hasPathSegment"(): boolean
get "parent"(): $JsonStreamContext
get "entryCount"(): integer
set "currentValue"(value: any)
get "currentValue"(): any
get "currentName"(): string
get "currentIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonStreamContext$Type = ($JsonStreamContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonStreamContext_ = $JsonStreamContext$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$SerializerFactory" {
import {$SerializationConfig, $SerializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$SerializationConfig"
import {$BeanSerializerModifier, $BeanSerializerModifier$Type} from "packages/com/fasterxml/jackson/databind/ser/$BeanSerializerModifier"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$Serializers, $Serializers$Type} from "packages/com/fasterxml/jackson/databind/ser/$Serializers"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"

export class $SerializerFactory {

constructor()

public "createSerializer"(arg0: $SerializerProvider$Type, arg1: $JavaType$Type): $JsonSerializer<(any)>
public "withAdditionalKeySerializers"(arg0: $Serializers$Type): $SerializerFactory
public "withSerializerModifier"(arg0: $BeanSerializerModifier$Type): $SerializerFactory
public "withAdditionalSerializers"(arg0: $Serializers$Type): $SerializerFactory
public "createKeySerializer"(arg0: $SerializerProvider$Type, arg1: $JavaType$Type, arg2: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
/**
 * 
 * @deprecated
 */
public "createKeySerializer"(arg0: $SerializationConfig$Type, arg1: $JavaType$Type, arg2: $JsonSerializer$Type<(any)>): $JsonSerializer<(any)>
public "createTypeSerializer"(arg0: $SerializationConfig$Type, arg1: $JavaType$Type): $TypeSerializer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializerFactory$Type = ($SerializerFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializerFactory_ = $SerializerFactory$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$DatabindException" {
import {$JsonProcessingException, $JsonProcessingException$Type} from "packages/com/fasterxml/jackson/core/$JsonProcessingException"

export class $DatabindException extends $JsonProcessingException {


public "prependPath"(arg0: any, arg1: integer): void
public "prependPath"(arg0: any, arg1: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DatabindException$Type = ($DatabindException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DatabindException_ = $DatabindException$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsontype/$PolymorphicTypeValidator$Validity" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PolymorphicTypeValidator$Validity extends $Enum<($PolymorphicTypeValidator$Validity)> {
static readonly "ALLOWED": $PolymorphicTypeValidator$Validity
static readonly "DENIED": $PolymorphicTypeValidator$Validity
static readonly "INDETERMINATE": $PolymorphicTypeValidator$Validity


public static "values"(): ($PolymorphicTypeValidator$Validity)[]
public static "valueOf"(arg0: string): $PolymorphicTypeValidator$Validity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PolymorphicTypeValidator$Validity$Type = (("allowed") | ("indeterminate") | ("denied")) | ($PolymorphicTypeValidator$Validity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PolymorphicTypeValidator$Validity_ = $PolymorphicTypeValidator$Validity$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonAnyFormatVisitor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $JsonAnyFormatVisitor {

}

export namespace $JsonAnyFormatVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonAnyFormatVisitor$Type = ($JsonAnyFormatVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonAnyFormatVisitor_ = $JsonAnyFormatVisitor$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$ArrayNode" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$JsonNodeFactory, $JsonNodeFactory$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeFactory"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$RawValue, $RawValue$Type} from "packages/com/fasterxml/jackson/databind/util/$RawValue"
import {$ContainerNode, $ContainerNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ContainerNode"
import {$ObjectNode, $ObjectNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ObjectNode"
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$JsonNodeType, $JsonNodeType$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeType"

export class $ArrayNode extends $ContainerNode<($ArrayNode)> implements $Serializable {

constructor(arg0: $JsonNodeFactory$Type, arg1: $List$Type<($JsonNode$Type)>)
constructor(arg0: $JsonNodeFactory$Type, arg1: integer)
constructor(arg0: $JsonNodeFactory$Type)

public "add"(arg0: long): $ArrayNode
public "add"(arg0: long): $ArrayNode
public "add"(arg0: integer): $ArrayNode
public "add"(arg0: float): $ArrayNode
public "add"(arg0: float): $ArrayNode
public "add"(arg0: $JsonNode$Type): $ArrayNode
public "add"(arg0: short): $ArrayNode
public "add"(arg0: short): $ArrayNode
public "add"(arg0: integer): $ArrayNode
public "add"(arg0: string): $ArrayNode
public "add"(arg0: boolean): $ArrayNode
public "add"(arg0: boolean): $ArrayNode
public "add"(arg0: (byte)[]): $ArrayNode
public "add"(arg0: double): $ArrayNode
public "add"(arg0: double): $ArrayNode
public "add"(arg0: $BigDecimal$Type): $ArrayNode
public "add"(arg0: $BigInteger$Type): $ArrayNode
public "remove"(arg0: integer): $JsonNode
public "get"(arg0: integer): $JsonNode
public "equals"(arg0: any): boolean
public "equals"(arg0: $Comparator$Type<($JsonNode$Type)>, arg1: $JsonNode$Type): boolean
public "hashCode"(): integer
public "isArray"(): boolean
public "insert"(arg0: integer, arg1: long): $ArrayNode
public "insert"(arg0: integer, arg1: long): $ArrayNode
public "insert"(arg0: integer, arg1: float): $ArrayNode
public "insert"(arg0: integer, arg1: float): $ArrayNode
public "insert"(arg0: integer, arg1: $BigDecimal$Type): $ArrayNode
public "insert"(arg0: integer, arg1: short): $ArrayNode
public "insert"(arg0: integer, arg1: short): $ArrayNode
public "insert"(arg0: integer, arg1: integer): $ArrayNode
public "insert"(arg0: integer, arg1: string): $ArrayNode
public "insert"(arg0: integer, arg1: boolean): $ArrayNode
public "insert"(arg0: integer, arg1: boolean): $ArrayNode
public "insert"(arg0: integer, arg1: (byte)[]): $ArrayNode
public "insert"(arg0: integer, arg1: double): $ArrayNode
public "insert"(arg0: integer, arg1: double): $ArrayNode
public "insert"(arg0: integer, arg1: integer): $ArrayNode
public "insert"(arg0: integer, arg1: $BigInteger$Type): $ArrayNode
public "insert"(arg0: integer, arg1: $JsonNode$Type): $ArrayNode
public "isEmpty"(): boolean
public "isEmpty"(arg0: $SerializerProvider$Type): boolean
public "size"(): integer
public "elements"(): $Iterator<($JsonNode)>
public "addAll"(arg0: $ArrayNode$Type): $ArrayNode
public "addAll"(arg0: $Collection$Type<(any)>): $ArrayNode
public "set"(arg0: integer, arg1: long): $ArrayNode
public "set"(arg0: integer, arg1: long): $ArrayNode
public "set"(arg0: integer, arg1: float): $ArrayNode
public "set"(arg0: integer, arg1: double): $ArrayNode
public "set"(arg0: integer, arg1: double): $ArrayNode
public "set"(arg0: integer, arg1: float): $ArrayNode
public "set"(arg0: integer, arg1: $JsonNode$Type): $JsonNode
public "set"(arg0: integer, arg1: short): $ArrayNode
public "set"(arg0: integer, arg1: short): $ArrayNode
public "set"(arg0: integer, arg1: integer): $ArrayNode
public "set"(arg0: integer, arg1: integer): $ArrayNode
public "set"(arg0: integer, arg1: boolean): $ArrayNode
public "set"(arg0: integer, arg1: (byte)[]): $ArrayNode
public "set"(arg0: integer, arg1: boolean): $ArrayNode
public "set"(arg0: integer, arg1: $BigDecimal$Type): $ArrayNode
public "set"(arg0: integer, arg1: $BigInteger$Type): $ArrayNode
public "set"(arg0: integer, arg1: string): $ArrayNode
public "path"(arg0: integer): $JsonNode
/**
 * 
 * @deprecated
 */
public "with"(arg0: string): $ObjectNode
public "findValue"(arg0: string): $JsonNode
public "getNodeType"(): $JsonNodeType
public "serialize"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type): void
public "deepCopy"(): $ArrayNode
public "required"(arg0: integer): $JsonNode
public "asToken"(): $JsonToken
public "insertRawValue"(arg0: integer, arg1: $RawValue$Type): $ArrayNode
public "addNull"(): $ArrayNode
public "addPOJO"(arg0: any): $ArrayNode
public "insertArray"(arg0: integer): $ArrayNode
public "insertObject"(arg0: integer): $ObjectNode
public "addRawValue"(arg0: $RawValue$Type): $ArrayNode
public "insertPOJO"(arg0: integer, arg1: any): $ArrayNode
public "insertNull"(arg0: integer): $ArrayNode
public "setPOJO"(arg0: integer, arg1: any): $ArrayNode
public "setNull"(arg0: integer): $ArrayNode
public "setRawValue"(arg0: integer, arg1: $RawValue$Type): $ArrayNode
public "addArray"(): $ArrayNode
public "addObject"(): $ObjectNode
public "serializeWithType"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type, arg2: $TypeSerializer$Type): void
public "findValuesAsText"(arg0: string, arg1: $List$Type<(string)>): $List<(string)>
public "findParents"(arg0: string, arg1: $List$Type<($JsonNode$Type)>): $List<($JsonNode)>
public "findValues"(arg0: string, arg1: $List$Type<($JsonNode$Type)>): $List<($JsonNode)>
get "array"(): boolean
get "empty"(): boolean
get "nodeType"(): $JsonNodeType
set "null"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayNode$Type = ($ArrayNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayNode_ = $ArrayNode$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/annotation/$JsonSerialize$Typing" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonSerialize$Typing extends $Enum<($JsonSerialize$Typing)> {
static readonly "DYNAMIC": $JsonSerialize$Typing
static readonly "STATIC": $JsonSerialize$Typing
static readonly "DEFAULT_TYPING": $JsonSerialize$Typing


public static "values"(): ($JsonSerialize$Typing)[]
public static "valueOf"(arg0: string): $JsonSerialize$Typing
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonSerialize$Typing$Type = (("static") | ("dynamic") | ("default_typing")) | ($JsonSerialize$Typing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonSerialize$Typing_ = $JsonSerialize$Typing$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$ObjectMapper" {
import {$SerializationConfig, $SerializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$SerializationConfig"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$JsonFactory$Feature, $JsonFactory$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory$Feature"
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$ContextAttributes, $ContextAttributes$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ContextAttributes"
import {$AtomicReference, $AtomicReference$Type} from "packages/java/util/concurrent/atomic/$AtomicReference"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$JsonTypeInfo$As, $JsonTypeInfo$As$Type} from "packages/com/fasterxml/jackson/annotation/$JsonTypeInfo$As"
import {$JsonFactory, $JsonFactory$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$SerializationFeature, $SerializationFeature$Type} from "packages/com/fasterxml/jackson/databind/$SerializationFeature"
import {$FilterProvider, $FilterProvider$Type} from "packages/com/fasterxml/jackson/databind/ser/$FilterProvider"
import {$TypeResolverBuilder, $TypeResolverBuilder$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeResolverBuilder"
import {$ObjectWriter, $ObjectWriter$Type} from "packages/com/fasterxml/jackson/databind/$ObjectWriter"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$ObjectMapper$DefaultTyping, $ObjectMapper$DefaultTyping$Type} from "packages/com/fasterxml/jackson/databind/$ObjectMapper$DefaultTyping"
import {$List, $List$Type} from "packages/java/util/$List"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$JsonEncoding, $JsonEncoding$Type} from "packages/com/fasterxml/jackson/core/$JsonEncoding"
import {$DeserializationFeature, $DeserializationFeature$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationFeature"
import {$JsonAutoDetect$Visibility, $JsonAutoDetect$Visibility$Type} from "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect$Visibility"
import {$MappingIterator, $MappingIterator$Type} from "packages/com/fasterxml/jackson/databind/$MappingIterator"
import {$JsonSetter$Value, $JsonSetter$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonSetter$Value"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$JsonNodeFactory, $JsonNodeFactory$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeFactory"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$SerializerFactory, $SerializerFactory$Type} from "packages/com/fasterxml/jackson/databind/ser/$SerializerFactory"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$Versioned, $Versioned$Type} from "packages/com/fasterxml/jackson/core/$Versioned"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$TreeNode, $TreeNode$Type} from "packages/com/fasterxml/jackson/core/$TreeNode"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$PropertyAccessor, $PropertyAccessor$Type} from "packages/com/fasterxml/jackson/annotation/$PropertyAccessor"
import {$CharacterEscapes, $CharacterEscapes$Type} from "packages/com/fasterxml/jackson/core/io/$CharacterEscapes"
import {$NamedType, $NamedType$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$NamedType"
import {$StreamWriteFeature, $StreamWriteFeature$Type} from "packages/com/fasterxml/jackson/core/$StreamWriteFeature"
import {$DataInput, $DataInput$Type} from "packages/java/io/$DataInput"
import {$LogicalType, $LogicalType$Type} from "packages/com/fasterxml/jackson/databind/type/$LogicalType"
import {$DateFormat, $DateFormat$Type} from "packages/java/text/$DateFormat"
import {$JsonGenerator$Feature, $JsonGenerator$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator$Feature"
import {$DeserializationProblemHandler, $DeserializationProblemHandler$Type} from "packages/com/fasterxml/jackson/databind/deser/$DeserializationProblemHandler"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$FormatSchema, $FormatSchema$Type} from "packages/com/fasterxml/jackson/core/$FormatSchema"
import {$ClassIntrospector$MixInResolver, $ClassIntrospector$MixInResolver$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ClassIntrospector$MixInResolver"
import {$MutableConfigOverride, $MutableConfigOverride$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MutableConfigOverride"
import {$DefaultSerializerProvider, $DefaultSerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/ser/$DefaultSerializerProvider"
import {$PrettyPrinter, $PrettyPrinter$Type} from "packages/com/fasterxml/jackson/core/$PrettyPrinter"
import {$JsonFormatVisitorWrapper, $JsonFormatVisitorWrapper$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWrapper"
import {$JsonInclude$Include, $JsonInclude$Include$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Include"
import {$InjectableValues, $InjectableValues$Type} from "packages/com/fasterxml/jackson/databind/$InjectableValues"
import {$File, $File$Type} from "packages/java/io/$File"
import {$AccessorNamingStrategy$Provider, $AccessorNamingStrategy$Provider$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AccessorNamingStrategy$Provider"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$ObjectReader, $ObjectReader$Type} from "packages/com/fasterxml/jackson/databind/$ObjectReader"
import {$JsonSchema, $JsonSchema$Type} from "packages/com/fasterxml/jackson/databind/jsonschema/$JsonSchema"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$MapperFeature, $MapperFeature$Type} from "packages/com/fasterxml/jackson/databind/$MapperFeature"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"
import {$HandlerInstantiator, $HandlerInstantiator$Type} from "packages/com/fasterxml/jackson/databind/cfg/$HandlerInstantiator"
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$PolymorphicTypeValidator, $PolymorphicTypeValidator$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$PolymorphicTypeValidator"
import {$ConstructorDetector, $ConstructorDetector$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConstructorDetector"
import {$Module, $Module$Type} from "packages/com/fasterxml/jackson/databind/$Module"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ClassLoader, $ClassLoader$Type} from "packages/java/lang/$ClassLoader"
import {$StreamReadFeature, $StreamReadFeature$Type} from "packages/com/fasterxml/jackson/core/$StreamReadFeature"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$PropertyNamingStrategy, $PropertyNamingStrategy$Type} from "packages/com/fasterxml/jackson/databind/$PropertyNamingStrategy"
import {$ArrayNode, $ArrayNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ArrayNode"
import {$MutableCoercionConfig, $MutableCoercionConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MutableCoercionConfig"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$JsonAutoDetect$Value, $JsonAutoDetect$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect$Value"
import {$TypeReference, $TypeReference$Type} from "packages/com/fasterxml/jackson/core/type/$TypeReference"
import {$DataOutput, $DataOutput$Type} from "packages/java/io/$DataOutput"
import {$SubtypeResolver, $SubtypeResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$SubtypeResolver"
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ResolvedType, $ResolvedType$Type} from "packages/com/fasterxml/jackson/core/type/$ResolvedType"
import {$VisibilityChecker, $VisibilityChecker$Type} from "packages/com/fasterxml/jackson/databind/introspect/$VisibilityChecker"
import {$DefaultDeserializationContext, $DefaultDeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/deser/$DefaultDeserializationContext"
import {$DatatypeFeature, $DatatypeFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeature"
import {$JsonParser$Feature, $JsonParser$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$Feature"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ObjectMapper extends $ObjectCodec implements $Versioned, $Serializable {

constructor(arg0: $JsonFactory$Type, arg1: $DefaultSerializerProvider$Type, arg2: $DefaultDeserializationContext$Type)
constructor(arg0: $JsonFactory$Type)
constructor()

public "version"(): $Version
public "getFactory"(): $JsonFactory
public "reader"(arg0: $InjectableValues$Type): $ObjectReader
public "reader"(arg0: $FormatSchema$Type): $ObjectReader
public "reader"(arg0: $JsonNodeFactory$Type): $ObjectReader
public "reader"(arg0: $DeserializationFeature$Type, ...arg1: ($DeserializationFeature$Type)[]): $ObjectReader
public "reader"(arg0: $DeserializationFeature$Type): $ObjectReader
public "reader"(): $ObjectReader
/**
 * 
 * @deprecated
 */
public "reader"(arg0: $TypeReference$Type<(any)>): $ObjectReader
/**
 * 
 * @deprecated
 */
public "reader"(arg0: $Class$Type<(any)>): $ObjectReader
/**
 * 
 * @deprecated
 */
public "reader"(arg0: $JavaType$Type): $ObjectReader
public "reader"(arg0: $ContextAttributes$Type): $ObjectReader
public "reader"(arg0: $Base64Variant$Type): $ObjectReader
public "writer"(arg0: $PrettyPrinter$Type): $ObjectWriter
public "writer"(arg0: $DateFormat$Type): $ObjectWriter
public "writer"(arg0: $FilterProvider$Type): $ObjectWriter
public "writer"(arg0: $SerializationFeature$Type, ...arg1: ($SerializationFeature$Type)[]): $ObjectWriter
public "writer"(arg0: $SerializationFeature$Type): $ObjectWriter
public "writer"(): $ObjectWriter
public "writer"(arg0: $ContextAttributes$Type): $ObjectWriter
public "writer"(arg0: $CharacterEscapes$Type): $ObjectWriter
public "writer"(arg0: $Base64Variant$Type): $ObjectWriter
public "writer"(arg0: $FormatSchema$Type): $ObjectWriter
public "copy"(): $ObjectMapper
public "copyWith"(arg0: $JsonFactory$Type): $ObjectMapper
public "setTimeZone"(arg0: $TimeZone$Type): $ObjectMapper
public "setLocale"(arg0: $Locale$Type): $ObjectMapper
public "enable"(arg0: $SerializationFeature$Type): $ObjectMapper
/**
 * 
 * @deprecated
 */
public "enable"(...arg0: ($MapperFeature$Type)[]): $ObjectMapper
public "enable"(arg0: $DeserializationFeature$Type, ...arg1: ($DeserializationFeature$Type)[]): $ObjectMapper
public "enable"(...arg0: ($JsonGenerator$Feature$Type)[]): $ObjectMapper
public "enable"(...arg0: ($JsonParser$Feature$Type)[]): $ObjectMapper
public "enable"(arg0: $DeserializationFeature$Type): $ObjectMapper
public "enable"(arg0: $SerializationFeature$Type, ...arg1: ($SerializationFeature$Type)[]): $ObjectMapper
public "addHandler"(arg0: $DeserializationProblemHandler$Type): $ObjectMapper
public "isEnabled"(arg0: $StreamWriteFeature$Type): boolean
public "isEnabled"(arg0: $StreamReadFeature$Type): boolean
public "isEnabled"(arg0: $DeserializationFeature$Type): boolean
public "isEnabled"(arg0: $JsonGenerator$Feature$Type): boolean
public "isEnabled"(arg0: $JsonParser$Feature$Type): boolean
public "isEnabled"(arg0: $JsonFactory$Feature$Type): boolean
public "isEnabled"(arg0: $MapperFeature$Type): boolean
public "isEnabled"(arg0: $SerializationFeature$Type): boolean
public "readValue"<T>(arg0: string, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $URL$Type, arg1: $TypeReference$Type<(T)>): T
public "readValue"<T>(arg0: $URL$Type, arg1: $JavaType$Type): T
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $TypeReference$Type<(T)>): T
public "readValue"<T>(arg0: string, arg1: $JavaType$Type): T
public "readValue"<T>(arg0: $Reader$Type, arg1: $TypeReference$Type<(T)>): T
public "readValue"<T>(arg0: string, arg1: $TypeReference$Type<(T)>): T
public "readValue"<T>(arg0: $File$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $JavaType$Type): T
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $ResolvedType$Type): T
public "readValue"<T>(arg0: $File$Type, arg1: $TypeReference$Type<(T)>): T
public "readValue"<T>(arg0: $File$Type, arg1: $JavaType$Type): T
public "readValue"<T>(arg0: $URL$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: (byte)[], arg1: integer, arg2: integer, arg3: $JavaType$Type): T
public "readValue"<T>(arg0: (byte)[], arg1: $JavaType$Type): T
public "readValue"<T>(arg0: (byte)[], arg1: integer, arg2: integer, arg3: $TypeReference$Type<(T)>): T
public "readValue"<T>(arg0: (byte)[], arg1: $TypeReference$Type<(T)>): T
public "readValue"<T>(arg0: $Reader$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $DataInput$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $DataInput$Type, arg1: $JavaType$Type): T
public "readValue"<T>(arg0: $InputStream$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $InputStream$Type, arg1: $TypeReference$Type<(T)>): T
public "readValue"<T>(arg0: $InputStream$Type, arg1: $JavaType$Type): T
public "readValue"<T>(arg0: $Reader$Type, arg1: $JavaType$Type): T
public "readValue"<T>(arg0: (byte)[], arg1: integer, arg2: integer, arg3: $Class$Type<(T)>): T
public "readValue"<T>(arg0: (byte)[], arg1: $Class$Type<(T)>): T
public "configure"(arg0: $DeserializationFeature$Type, arg1: boolean): $ObjectMapper
public "configure"(arg0: $JsonGenerator$Feature$Type, arg1: boolean): $ObjectMapper
public "configure"(arg0: $SerializationFeature$Type, arg1: boolean): $ObjectMapper
/**
 * 
 * @deprecated
 */
public "configure"(arg0: $MapperFeature$Type, arg1: boolean): $ObjectMapper
public "configure"(arg0: $JsonParser$Feature$Type, arg1: boolean): $ObjectMapper
public "configure"(arg0: $DatatypeFeature$Type, arg1: boolean): $ObjectMapper
public "disable"(...arg0: ($JsonGenerator$Feature$Type)[]): $ObjectMapper
public "disable"(arg0: $DeserializationFeature$Type, ...arg1: ($DeserializationFeature$Type)[]): $ObjectMapper
public "disable"(arg0: $DeserializationFeature$Type): $ObjectMapper
public "disable"(arg0: $SerializationFeature$Type): $ObjectMapper
public "disable"(arg0: $SerializationFeature$Type, ...arg1: ($SerializationFeature$Type)[]): $ObjectMapper
public "disable"(...arg0: ($JsonParser$Feature$Type)[]): $ObjectMapper
/**
 * 
 * @deprecated
 */
public "disable"(...arg0: ($MapperFeature$Type)[]): $ObjectMapper
/**
 * 
 * @deprecated
 */
public "setFilters"(arg0: $FilterProvider$Type): void
public "setDateFormat"(arg0: $DateFormat$Type): $ObjectMapper
public "writeValue"(arg0: $JsonGenerator$Type, arg1: any): void
public "writeValue"(arg0: $OutputStream$Type, arg1: any): void
public "writeValue"(arg0: $Writer$Type, arg1: any): void
public "writeValue"(arg0: $DataOutput$Type, arg1: any): void
public "writeValue"(arg0: $File$Type, arg1: any): void
public "canDeserialize"(arg0: $JavaType$Type): boolean
public "canDeserialize"(arg0: $JavaType$Type, arg1: $AtomicReference$Type<($Throwable$Type)>): boolean
public "updateValue"<T>(arg0: T, arg1: any): T
public "createParser"(arg0: (character)[]): $JsonParser
public "createParser"(arg0: (byte)[], arg1: integer, arg2: integer): $JsonParser
public "createParser"(arg0: string): $JsonParser
public "createParser"(arg0: $URL$Type): $JsonParser
public "createParser"(arg0: (character)[], arg1: integer, arg2: integer): $JsonParser
public "createParser"(arg0: $InputStream$Type): $JsonParser
public "createParser"(arg0: $Reader$Type): $JsonParser
public "createParser"(arg0: $File$Type): $JsonParser
public "createParser"(arg0: $DataInput$Type): $JsonParser
public "createParser"(arg0: (byte)[]): $JsonParser
public "setVisibility"(arg0: $PropertyAccessor$Type, arg1: $JsonAutoDetect$Visibility$Type): $ObjectMapper
public "setVisibility"(arg0: $VisibilityChecker$Type<(any)>): $ObjectMapper
public "setConfig"(arg0: $DeserializationConfig$Type): $ObjectMapper
public "setConfig"(arg0: $SerializationConfig$Type): $ObjectMapper
public "writeValueAsString"(arg0: any): string
public "readTree"(arg0: string): $JsonNode
public "readTree"(arg0: (byte)[], arg1: integer, arg2: integer): $JsonNode
public "readTree"(arg0: (byte)[]): $JsonNode
public "readTree"(arg0: $Reader$Type): $JsonNode
public "readTree"(arg0: $InputStream$Type): $JsonNode
public "readTree"(arg0: $File$Type): $JsonNode
public "readTree"(arg0: $URL$Type): $JsonNode
public "readTree"<T extends $TreeNode>(arg0: $JsonParser$Type): T
public "addMixIn"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>): $ObjectMapper
public "writeValueAsBytes"(arg0: any): (byte)[]
public "missingNode"(): $JsonNode
public "writeTree"(arg0: $JsonGenerator$Type, arg1: $TreeNode$Type): void
public "writeTree"(arg0: $JsonGenerator$Type, arg1: $JsonNode$Type): void
public "readValues"<T>(arg0: $JsonParser$Type, arg1: $Class$Type<(T)>): $MappingIterator<(T)>
public "readValues"<T>(arg0: $JsonParser$Type, arg1: $TypeReference$Type<(T)>): $MappingIterator<(T)>
public "readValues"<T>(arg0: $JsonParser$Type, arg1: $JavaType$Type): $MappingIterator<(T)>
public "nullNode"(): $JsonNode
public "registerModule"(arg0: $Module$Type): $ObjectMapper
public "createArrayNode"(): $ArrayNode
public "treeAsTokens"(arg0: $TreeNode$Type): $JsonParser
public "treeToValue"<T>(arg0: $TreeNode$Type, arg1: $Class$Type<(T)>): T
public "treeToValue"<T>(arg0: $TreeNode$Type, arg1: $JavaType$Type): T
public static "findModules"(): $List<($Module)>
public static "findModules"(arg0: $ClassLoader$Type): $List<($Module)>
public "registerModules"(arg0: $Iterable$Type<(any)>): $ObjectMapper
public "registerModules"(...arg0: ($Module$Type)[]): $ObjectMapper
public "createGenerator"(arg0: $File$Type, arg1: $JsonEncoding$Type): $JsonGenerator
public "createGenerator"(arg0: $Writer$Type): $JsonGenerator
public "createGenerator"(arg0: $OutputStream$Type, arg1: $JsonEncoding$Type): $JsonGenerator
public "createGenerator"(arg0: $DataOutput$Type): $JsonGenerator
public "createGenerator"(arg0: $OutputStream$Type): $JsonGenerator
public "findMixInClassFor"(arg0: $Class$Type<(any)>): $Class<(any)>
public "setSubtypeResolver"(arg0: $SubtypeResolver$Type): $ObjectMapper
public "mixInCount"(): integer
public "setMixInResolver"(arg0: $ClassIntrospector$MixInResolver$Type): $ObjectMapper
public "getSubtypeResolver"(): $SubtypeResolver
public "setMixIns"(arg0: $Map$Type<($Class$Type<(any)>), ($Class$Type<(any)>)>): $ObjectMapper
public "registerSubtypes"(...arg0: ($Class$Type<(any)>)[]): void
public "registerSubtypes"(arg0: $Collection$Type<($Class$Type<(any)>)>): void
public "registerSubtypes"(...arg0: ($NamedType$Type)[]): void
public "setDefaultTyping"(arg0: $TypeResolverBuilder$Type<(any)>): $ObjectMapper
public "setAccessorNaming"(arg0: $AccessorNamingStrategy$Provider$Type): $ObjectMapper
public "setDefaultLeniency"(arg0: boolean): $ObjectMapper
public "setFilterProvider"(arg0: $FilterProvider$Type): $ObjectMapper
public "coercionConfigFor"(arg0: $LogicalType$Type): $MutableCoercionConfig
public "coercionConfigFor"(arg0: $Class$Type<(any)>): $MutableCoercionConfig
public "getTypeFactory"(): $TypeFactory
public "setBase64Variant"(arg0: $Base64Variant$Type): $ObjectMapper
public "configOverride"(arg0: $Class$Type<(any)>): $MutableConfigOverride
public "setNodeFactory"(arg0: $JsonNodeFactory$Type): $ObjectMapper
public "getNodeFactory"(): $JsonNodeFactory
public "constructType"(arg0: $TypeReference$Type<(any)>): $JavaType
public "constructType"(arg0: $Type$Type): $JavaType
public "setTypeFactory"(arg0: $TypeFactory$Type): $ObjectMapper
public "tokenStreamFactory"(): $JsonFactory
public "getDateFormat"(): $DateFormat
public "canSerialize"(arg0: $Class$Type<(any)>): boolean
public "canSerialize"(arg0: $Class$Type<(any)>, arg1: $AtomicReference$Type<($Throwable$Type)>): boolean
public "valueToTree"<T extends $JsonNode>(arg0: any): T
public "writerWithView"(arg0: $Class$Type<(any)>): $ObjectWriter
public "convertValue"<T>(arg0: any, arg1: $TypeReference$Type<(T)>): T
public "convertValue"<T>(arg0: any, arg1: $JavaType$Type): T
public "convertValue"<T>(arg0: any, arg1: $Class$Type<(T)>): T
public "readerFor"(arg0: $TypeReference$Type<(any)>): $ObjectReader
public "readerFor"(arg0: $Class$Type<(any)>): $ObjectReader
public "readerFor"(arg0: $JavaType$Type): $ObjectReader
public "readerForUpdating"(arg0: any): $ObjectReader
public "readerWithView"(arg0: $Class$Type<(any)>): $ObjectReader
public "readerForArrayOf"(arg0: $Class$Type<(any)>): $ObjectReader
public "writerFor"(arg0: $Class$Type<(any)>): $ObjectWriter
public "writerFor"(arg0: $TypeReference$Type<(any)>): $ObjectWriter
public "writerFor"(arg0: $JavaType$Type): $ObjectWriter
/**
 * 
 * @deprecated
 */
public "writerWithType"(arg0: $TypeReference$Type<(any)>): $ObjectWriter
/**
 * 
 * @deprecated
 */
public "writerWithType"(arg0: $Class$Type<(any)>): $ObjectWriter
/**
 * 
 * @deprecated
 */
public "writerWithType"(arg0: $JavaType$Type): $ObjectWriter
public "readerForListOf"(arg0: $Class$Type<(any)>): $ObjectReader
public "readerForMapOf"(arg0: $Class$Type<(any)>): $ObjectReader
/**
 * 
 * @deprecated
 */
public "generateJsonSchema"(arg0: $Class$Type<(any)>): $JsonSchema
public "setSerializerFactory"(arg0: $SerializerFactory$Type): $ObjectMapper
public "getSerializerFactory"(): $SerializerFactory
public "getVisibilityChecker"(): $VisibilityChecker<(any)>
public "setSerializerProvider"(arg0: $DefaultSerializerProvider$Type): $ObjectMapper
public "createNonBlockingByteArrayParser"(): $JsonParser
public "getDeserializationConfig"(): $DeserializationConfig
public "getSerializerProvider"(): $SerializerProvider
public "getRegisteredModuleIds"(): $Set<(any)>
public "findAndRegisterModules"(): $ObjectMapper
public "getSerializationConfig"(): $SerializationConfig
public "getDeserializationContext"(): $DeserializationContext
public "setDefaultVisibility"(arg0: $JsonAutoDetect$Value$Type): $ObjectMapper
/**
 * 
 * @deprecated
 */
public "setVisibilityChecker"(arg0: $VisibilityChecker$Type<(any)>): void
public "setPolymorphicTypeValidator"(arg0: $PolymorphicTypeValidator$Type): $ObjectMapper
public "activateDefaultTyping"(arg0: $PolymorphicTypeValidator$Type, arg1: $ObjectMapper$DefaultTyping$Type, arg2: $JsonTypeInfo$As$Type): $ObjectMapper
public "activateDefaultTyping"(arg0: $PolymorphicTypeValidator$Type, arg1: $ObjectMapper$DefaultTyping$Type): $ObjectMapper
public "activateDefaultTyping"(arg0: $PolymorphicTypeValidator$Type): $ObjectMapper
public "setHandlerInstantiator"(arg0: $HandlerInstantiator$Type): any
public "setInjectableValues"(arg0: $InjectableValues$Type): $ObjectMapper
public "setDefaultPropertyInclusion"(arg0: $JsonInclude$Include$Type): $ObjectMapper
public "setDefaultPropertyInclusion"(arg0: $JsonInclude$Value$Type): $ObjectMapper
public "getPropertyNamingStrategy"(): $PropertyNamingStrategy
public "activateDefaultTypingAsProperty"(arg0: $PolymorphicTypeValidator$Type, arg1: $ObjectMapper$DefaultTyping$Type, arg2: string): $ObjectMapper
/**
 * 
 * @deprecated
 */
public "setPropertyInclusion"(arg0: $JsonInclude$Value$Type): $ObjectMapper
/**
 * 
 * @deprecated
 */
public "enableDefaultTyping"(): $ObjectMapper
/**
 * 
 * @deprecated
 */
public "enableDefaultTyping"(arg0: $ObjectMapper$DefaultTyping$Type): $ObjectMapper
/**
 * 
 * @deprecated
 */
public "enableDefaultTyping"(arg0: $ObjectMapper$DefaultTyping$Type, arg1: $JsonTypeInfo$As$Type): $ObjectMapper
public "setConstructorDetector"(arg0: $ConstructorDetector$Type): $ObjectMapper
/**
 * 
 * @deprecated
 */
public "addMixInAnnotations"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>): void
/**
 * 
 * @deprecated
 */
public "setMixInAnnotations"(arg0: $Map$Type<($Class$Type<(any)>), ($Class$Type<(any)>)>): void
public "setDefaultPrettyPrinter"(arg0: $PrettyPrinter$Type): $ObjectMapper
/**
 * 
 * @deprecated
 */
public "enableDefaultTypingAsProperty"(arg0: $ObjectMapper$DefaultTyping$Type, arg1: string): $ObjectMapper
public "setPropertyNamingStrategy"(arg0: $PropertyNamingStrategy$Type): $ObjectMapper
public "deactivateDefaultTyping"(): $ObjectMapper
public "setAnnotationIntrospectors"(arg0: $AnnotationIntrospector$Type, arg1: $AnnotationIntrospector$Type): $ObjectMapper
public "clearProblemHandlers"(): $ObjectMapper
public "getPolymorphicTypeValidator"(): $PolymorphicTypeValidator
public "setAnnotationIntrospector"(arg0: $AnnotationIntrospector$Type): $ObjectMapper
public "setDefaultSetterInfo"(arg0: $JsonSetter$Value$Type): $ObjectMapper
public "setSerializationInclusion"(arg0: $JsonInclude$Include$Type): $ObjectMapper
public "getInjectableValues"(): $InjectableValues
public "coercionConfigDefaults"(): $MutableCoercionConfig
public "setDefaultAttributes"(arg0: $ContextAttributes$Type): $ObjectMapper
/**
 * 
 * @deprecated
 */
public "disableDefaultTyping"(): $ObjectMapper
public "setDefaultMergeable"(arg0: boolean): $ObjectMapper
public "acceptJsonFormatVisitor"(arg0: $Class$Type<(any)>, arg1: $JsonFormatVisitorWrapper$Type): void
public "acceptJsonFormatVisitor"(arg0: $JavaType$Type, arg1: $JsonFormatVisitorWrapper$Type): void
public "writerWithDefaultPrettyPrinter"(): $ObjectWriter
public "getSerializerProviderInstance"(): $SerializerProvider
get "factory"(): $JsonFactory
set "timeZone"(value: $TimeZone$Type)
set "locale"(value: $Locale$Type)
set "filters"(value: $FilterProvider$Type)
set "dateFormat"(value: $DateFormat$Type)
set "visibility"(value: $VisibilityChecker$Type<(any)>)
set "config"(value: $DeserializationConfig$Type)
set "config"(value: $SerializationConfig$Type)
set "subtypeResolver"(value: $SubtypeResolver$Type)
set "mixInResolver"(value: $ClassIntrospector$MixInResolver$Type)
get "subtypeResolver"(): $SubtypeResolver
set "mixIns"(value: $Map$Type<($Class$Type<(any)>), ($Class$Type<(any)>)>)
set "defaultTyping"(value: $TypeResolverBuilder$Type<(any)>)
set "accessorNaming"(value: $AccessorNamingStrategy$Provider$Type)
set "defaultLeniency"(value: boolean)
set "filterProvider"(value: $FilterProvider$Type)
get "typeFactory"(): $TypeFactory
set "base64Variant"(value: $Base64Variant$Type)
set "nodeFactory"(value: $JsonNodeFactory$Type)
get "nodeFactory"(): $JsonNodeFactory
set "typeFactory"(value: $TypeFactory$Type)
get "dateFormat"(): $DateFormat
set "serializerFactory"(value: $SerializerFactory$Type)
get "serializerFactory"(): $SerializerFactory
get "visibilityChecker"(): $VisibilityChecker<(any)>
set "serializerProvider"(value: $DefaultSerializerProvider$Type)
get "deserializationConfig"(): $DeserializationConfig
get "serializerProvider"(): $SerializerProvider
get "registeredModuleIds"(): $Set<(any)>
get "serializationConfig"(): $SerializationConfig
get "deserializationContext"(): $DeserializationContext
set "defaultVisibility"(value: $JsonAutoDetect$Value$Type)
set "visibilityChecker"(value: $VisibilityChecker$Type<(any)>)
set "polymorphicTypeValidator"(value: $PolymorphicTypeValidator$Type)
set "handlerInstantiator"(value: $HandlerInstantiator$Type)
set "injectableValues"(value: $InjectableValues$Type)
set "defaultPropertyInclusion"(value: $JsonInclude$Include$Type)
set "defaultPropertyInclusion"(value: $JsonInclude$Value$Type)
get "propertyNamingStrategy"(): $PropertyNamingStrategy
set "propertyInclusion"(value: $JsonInclude$Value$Type)
set "constructorDetector"(value: $ConstructorDetector$Type)
set "mixInAnnotations"(value: $Map$Type<($Class$Type<(any)>), ($Class$Type<(any)>)>)
set "defaultPrettyPrinter"(value: $PrettyPrinter$Type)
set "propertyNamingStrategy"(value: $PropertyNamingStrategy$Type)
get "polymorphicTypeValidator"(): $PolymorphicTypeValidator
set "annotationIntrospector"(value: $AnnotationIntrospector$Type)
set "defaultSetterInfo"(value: $JsonSetter$Value$Type)
set "serializationInclusion"(value: $JsonInclude$Include$Type)
get "injectableValues"(): $InjectableValues
set "defaultAttributes"(value: $ContextAttributes$Type)
set "defaultMergeable"(value: boolean)
get "serializerProviderInstance"(): $SerializerProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectMapper$Type = ($ObjectMapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectMapper_ = $ObjectMapper$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonMapFormatVisitor" {
import {$JsonFormatVisitable, $JsonFormatVisitable$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitable"
import {$JsonFormatVisitorWithSerializerProvider, $JsonFormatVisitorWithSerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatVisitorWithSerializerProvider"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export interface $JsonMapFormatVisitor extends $JsonFormatVisitorWithSerializerProvider {

 "valueFormat"(arg0: $JsonFormatVisitable$Type, arg1: $JavaType$Type): void
 "keyFormat"(arg0: $JsonFormatVisitable$Type, arg1: $JavaType$Type): void
 "getProvider"(): $SerializerProvider
 "setProvider"(arg0: $SerializerProvider$Type): void
}

export namespace $JsonMapFormatVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonMapFormatVisitor$Type = ($JsonMapFormatVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonMapFormatVisitor_ = $JsonMapFormatVisitor$Type;
}}
declare module "packages/com/fasterxml/jackson/core/io/$IOContext" {
import {$ContentReference, $ContentReference$Type} from "packages/com/fasterxml/jackson/core/io/$ContentReference"
import {$JsonEncoding, $JsonEncoding$Type} from "packages/com/fasterxml/jackson/core/$JsonEncoding"
import {$BufferRecycler, $BufferRecycler$Type} from "packages/com/fasterxml/jackson/core/util/$BufferRecycler"
import {$TextBuffer, $TextBuffer$Type} from "packages/com/fasterxml/jackson/core/util/$TextBuffer"

export class $IOContext {

constructor(arg0: $BufferRecycler$Type, arg1: $ContentReference$Type, arg2: boolean)
/**
 * 
 * @deprecated
 */
constructor(arg0: $BufferRecycler$Type, arg1: any, arg2: boolean)

public "getEncoding"(): $JsonEncoding
public "setEncoding"(arg0: $JsonEncoding$Type): void
public "contentReference"(): $ContentReference
public "allocBase64Buffer"(): (byte)[]
public "allocBase64Buffer"(arg0: integer): (byte)[]
public "releaseTokenBuffer"(arg0: (character)[]): void
public "allocConcatBuffer"(): (character)[]
public "releaseReadIOBuffer"(arg0: (byte)[]): void
public "allocTokenBuffer"(arg0: integer): (character)[]
public "allocTokenBuffer"(): (character)[]
public "isResourceManaged"(): boolean
public "releaseNameCopyBuffer"(arg0: (character)[]): void
public "constructTextBuffer"(): $TextBuffer
public "allocNameCopyBuffer"(arg0: integer): (character)[]
public "allocWriteEncodingBuffer"(): (byte)[]
public "allocWriteEncodingBuffer"(arg0: integer): (byte)[]
public "releaseWriteEncodingBuffer"(arg0: (byte)[]): void
public "releaseBase64Buffer"(arg0: (byte)[]): void
public "releaseConcatBuffer"(arg0: (character)[]): void
public "withEncoding"(arg0: $JsonEncoding$Type): $IOContext
/**
 * 
 * @deprecated
 */
public "getSourceReference"(): any
public "allocReadIOBuffer"(): (byte)[]
public "allocReadIOBuffer"(arg0: integer): (byte)[]
get "encoding"(): $JsonEncoding
set "encoding"(value: $JsonEncoding$Type)
get "resourceManaged"(): boolean
get "sourceReference"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOContext$Type = ($IOContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOContext_ = $IOContext$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$BeanPropertyFilter" {
import {$ObjectNode, $ObjectNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ObjectNode"
import {$JsonObjectFormatVisitor, $JsonObjectFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonObjectFormatVisitor"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$BeanPropertyWriter, $BeanPropertyWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/$BeanPropertyWriter"

/**
 * 
 * @deprecated
 */
export interface $BeanPropertyFilter {

 "serializeAsField"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type, arg3: $BeanPropertyWriter$Type): void
/**
 * 
 * @deprecated
 */
 "depositSchemaProperty"(arg0: $BeanPropertyWriter$Type, arg1: $ObjectNode$Type, arg2: $SerializerProvider$Type): void
 "depositSchemaProperty"(arg0: $BeanPropertyWriter$Type, arg1: $JsonObjectFormatVisitor$Type, arg2: $SerializerProvider$Type): void
}

export namespace $BeanPropertyFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeanPropertyFilter$Type = ($BeanPropertyFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeanPropertyFilter_ = $BeanPropertyFilter$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonGenerator$Feature" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonGenerator$Feature extends $Enum<($JsonGenerator$Feature)> {
static readonly "AUTO_CLOSE_TARGET": $JsonGenerator$Feature
static readonly "AUTO_CLOSE_JSON_CONTENT": $JsonGenerator$Feature
static readonly "FLUSH_PASSED_TO_STREAM": $JsonGenerator$Feature
/**
 * 
 * @deprecated
 */
static readonly "QUOTE_FIELD_NAMES": $JsonGenerator$Feature
/**
 * 
 * @deprecated
 */
static readonly "QUOTE_NON_NUMERIC_NUMBERS": $JsonGenerator$Feature
/**
 * 
 * @deprecated
 */
static readonly "ESCAPE_NON_ASCII": $JsonGenerator$Feature
/**
 * 
 * @deprecated
 */
static readonly "WRITE_NUMBERS_AS_STRINGS": $JsonGenerator$Feature
static readonly "WRITE_BIGDECIMAL_AS_PLAIN": $JsonGenerator$Feature
static readonly "STRICT_DUPLICATE_DETECTION": $JsonGenerator$Feature
static readonly "IGNORE_UNKNOWN": $JsonGenerator$Feature
/**
 * 
 * @deprecated
 */
static readonly "USE_FAST_DOUBLE_WRITER": $JsonGenerator$Feature
/**
 * 
 * @deprecated
 */
static readonly "WRITE_HEX_UPPER_CASE": $JsonGenerator$Feature


public static "values"(): ($JsonGenerator$Feature)[]
public static "valueOf"(arg0: string): $JsonGenerator$Feature
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "enabledIn"(arg0: integer): boolean
public static "collectDefaults"(): integer
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonGenerator$Feature$Type = (("flush_passed_to_stream") | ("quote_non_numeric_numbers") | ("strict_duplicate_detection") | ("quote_field_names") | ("ignore_unknown") | ("use_fast_double_writer") | ("auto_close_json_content") | ("escape_non_ascii") | ("write_bigdecimal_as_plain") | ("write_hex_upper_case") | ("auto_close_target") | ("write_numbers_as_strings")) | ($JsonGenerator$Feature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonGenerator$Feature_ = $JsonGenerator$Feature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$Annotations" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $Annotations {

 "get"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
 "size"(): integer
 "has"(arg0: $Class$Type<(any)>): boolean
 "hasOneOf"(arg0: ($Class$Type<(any)>)[]): boolean
}

export namespace $Annotations {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Annotations$Type = ($Annotations);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Annotations_ = $Annotations$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$SerializationConfig" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$DateFormat, $DateFormat$Type} from "packages/java/text/$DateFormat"
import {$JsonGenerator$Feature, $JsonGenerator$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator$Feature"
import {$ConfigOverrides, $ConfigOverrides$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConfigOverrides"
import {$RootNameLookup, $RootNameLookup$Type} from "packages/com/fasterxml/jackson/databind/util/$RootNameLookup"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$JsonFactory, $JsonFactory$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory"
import {$SerializationFeature, $SerializationFeature$Type} from "packages/com/fasterxml/jackson/databind/$SerializationFeature"
import {$MapperConfigBase, $MapperConfigBase$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfigBase"
import {$PrettyPrinter, $PrettyPrinter$Type} from "packages/com/fasterxml/jackson/core/$PrettyPrinter"
import {$SubtypeResolver, $SubtypeResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$SubtypeResolver"
import {$FilterProvider, $FilterProvider$Type} from "packages/com/fasterxml/jackson/databind/ser/$FilterProvider"
import {$JsonInclude$Include, $JsonInclude$Include$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Include"
import {$SimpleMixInResolver, $SimpleMixInResolver$Type} from "packages/com/fasterxml/jackson/databind/introspect/$SimpleMixInResolver"
import {$BaseSettings, $BaseSettings$Type} from "packages/com/fasterxml/jackson/databind/cfg/$BaseSettings"
import {$FormatFeature, $FormatFeature$Type} from "packages/com/fasterxml/jackson/core/$FormatFeature"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$DatatypeFeature, $DatatypeFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeature"
import {$DatatypeFeatures, $DatatypeFeatures$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeatures"

export class $SerializationConfig extends $MapperConfigBase<($SerializationFeature), ($SerializationConfig)> implements $Serializable {

constructor(arg0: $BaseSettings$Type, arg1: $SubtypeResolver$Type, arg2: $SimpleMixInResolver$Type, arg3: $RootNameLookup$Type, arg4: $ConfigOverrides$Type, arg5: $DatatypeFeatures$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $BaseSettings$Type, arg1: $SubtypeResolver$Type, arg2: $SimpleMixInResolver$Type, arg3: $RootNameLookup$Type, arg4: $ConfigOverrides$Type)

public "initialize"(arg0: $JsonGenerator$Type): void
public "with"(arg0: $SerializationFeature$Type, ...arg1: ($SerializationFeature$Type)[]): $SerializationConfig
public "with"(arg0: $DateFormat$Type): $SerializationConfig
public "with"(arg0: $SerializationFeature$Type): $SerializationConfig
public "with"(arg0: $FormatFeature$Type): $SerializationConfig
public "with"(arg0: $JsonGenerator$Feature$Type): $SerializationConfig
public "isEnabled"(arg0: $JsonGenerator$Feature$Type, arg1: $JsonFactory$Type): boolean
public "isEnabled"(arg0: $DatatypeFeature$Type): boolean
public "isEnabled"(arg0: $SerializationFeature$Type): boolean
public "without"(arg0: $FormatFeature$Type): $SerializationConfig
public "without"(arg0: $SerializationFeature$Type): $SerializationConfig
public "without"(arg0: $SerializationFeature$Type, ...arg1: ($SerializationFeature$Type)[]): $SerializationConfig
public "without"(arg0: $JsonGenerator$Feature$Type): $SerializationConfig
public "withFeatures"(...arg0: ($SerializationFeature$Type)[]): $SerializationConfig
public "withFeatures"(...arg0: ($JsonGenerator$Feature$Type)[]): $SerializationConfig
public "withFeatures"(...arg0: ($FormatFeature$Type)[]): $SerializationConfig
public "withRootName"(arg0: $PropertyName$Type): $SerializationConfig
public "withoutFeatures"(...arg0: ($SerializationFeature$Type)[]): $SerializationConfig
public "withoutFeatures"(...arg0: ($JsonGenerator$Feature$Type)[]): $SerializationConfig
public "withoutFeatures"(...arg0: ($FormatFeature$Type)[]): $SerializationConfig
public "introspect"(arg0: $JavaType$Type): $BeanDescription
public "useRootWrapping"(): boolean
public "withFilters"(arg0: $FilterProvider$Type): $SerializationConfig
public "withView"(arg0: $Class$Type<(any)>): $SerializationConfig
public "getFilterProvider"(): $FilterProvider
public "getSerializationFeatures"(): integer
/**
 * 
 * @deprecated
 */
public "getSerializationInclusion"(): $JsonInclude$Include
/**
 * 
 * @deprecated
 */
public "withPropertyInclusion"(arg0: $JsonInclude$Value$Type): $SerializationConfig
public "hasSerializationFeatures"(arg0: integer): boolean
public "constructDefaultPrettyPrinter"(): $PrettyPrinter
public "withDefaultPrettyPrinter"(arg0: $PrettyPrinter$Type): $SerializationConfig
public "getDefaultPrettyPrinter"(): $PrettyPrinter
get "filterProvider"(): $FilterProvider
get "serializationFeatures"(): integer
get "serializationInclusion"(): $JsonInclude$Include
get "defaultPrettyPrinter"(): $PrettyPrinter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationConfig$Type = ($SerializationConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationConfig_ = $SerializationConfig$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonInclude$Include" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonInclude$Include extends $Enum<($JsonInclude$Include)> {
static readonly "ALWAYS": $JsonInclude$Include
static readonly "NON_NULL": $JsonInclude$Include
static readonly "NON_ABSENT": $JsonInclude$Include
static readonly "NON_EMPTY": $JsonInclude$Include
static readonly "NON_DEFAULT": $JsonInclude$Include
static readonly "CUSTOM": $JsonInclude$Include
static readonly "USE_DEFAULTS": $JsonInclude$Include


public static "values"(): ($JsonInclude$Include)[]
public static "valueOf"(arg0: string): $JsonInclude$Include
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonInclude$Include$Type = (("always") | ("non_null") | ("non_absent") | ("non_default") | ("custom") | ("use_defaults") | ("non_empty")) | ($JsonInclude$Include);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonInclude$Include_ = $JsonInclude$Include$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonIncludeProperties$Value" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JacksonAnnotationValue, $JacksonAnnotationValue$Type} from "packages/com/fasterxml/jackson/annotation/$JacksonAnnotationValue"
import {$JsonIncludeProperties, $JsonIncludeProperties$Type} from "packages/com/fasterxml/jackson/annotation/$JsonIncludeProperties"

export class $JsonIncludeProperties$Value implements $JacksonAnnotationValue<($JsonIncludeProperties)>, $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"(arg0: $JsonIncludeProperties$Type): $JsonIncludeProperties$Value
public static "all"(): $JsonIncludeProperties$Value
public "valueFor"(): $Class<($JsonIncludeProperties)>
public "getIncluded"(): $Set<(string)>
public "withOverrides"(arg0: $JsonIncludeProperties$Value$Type): $JsonIncludeProperties$Value
get "included"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonIncludeProperties$Value$Type = ($JsonIncludeProperties$Value);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonIncludeProperties$Value_ = $JsonIncludeProperties$Value$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Member, $Member$Type} from "packages/java/lang/reflect/$Member"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$AnnotationMap, $AnnotationMap$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotationMap"
import {$TypeResolutionContext, $TypeResolutionContext$Type} from "packages/com/fasterxml/jackson/databind/introspect/$TypeResolutionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Annotated, $Annotated$Type} from "packages/com/fasterxml/jackson/databind/introspect/$Annotated"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $AnnotatedMember extends $Annotated implements $Serializable {


/**
 * 
 * @deprecated
 */
public "annotations"(): $Iterable<($Annotation)>
public "getValue"(arg0: any): any
public "getDeclaringClass"(): $Class<(any)>
public "getAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "setValue"(arg0: any, arg1: any): void
public "getFullName"(): string
public "getMember"(): $Member
public "hasAnnotation"(arg0: $Class$Type<(any)>): boolean
public "hasOneOf"(arg0: ($Class$Type<(any)>)[]): boolean
public "withAnnotations"(arg0: $AnnotationMap$Type): $Annotated
public "getAllAnnotations"(): $AnnotationMap
public "fixAccess"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "getTypeContext"(): $TypeResolutionContext
get "declaringClass"(): $Class<(any)>
get "fullName"(): string
get "member"(): $Member
get "allAnnotations"(): $AnnotationMap
get "typeContext"(): $TypeResolutionContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedMember$Type = ($AnnotatedMember);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotatedMember_ = $AnnotatedMember$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/impl/$PropertyValueBuffer" {
import {$SettableAnyProperty, $SettableAnyProperty$Type} from "packages/com/fasterxml/jackson/databind/deser/$SettableAnyProperty"
import {$ObjectIdReader, $ObjectIdReader$Type} from "packages/com/fasterxml/jackson/databind/deser/impl/$ObjectIdReader"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$SettableBeanProperty, $SettableBeanProperty$Type} from "packages/com/fasterxml/jackson/databind/deser/$SettableBeanProperty"

export class $PropertyValueBuffer {

constructor(arg0: $JsonParser$Type, arg1: $DeserializationContext$Type, arg2: integer, arg3: $ObjectIdReader$Type)

public "getParameters"(arg0: ($SettableBeanProperty$Type)[]): (any)[]
public "getParameter"(arg0: $SettableBeanProperty$Type): any
public "isComplete"(): boolean
public "bufferMapProperty"(arg0: any, arg1: any): void
public "assignParameter"(arg0: $SettableBeanProperty$Type, arg1: any): boolean
public "bufferProperty"(arg0: $SettableBeanProperty$Type, arg1: any): void
public "readIdProperty"(arg0: string): boolean
public "bufferAnyProperty"(arg0: $SettableAnyProperty$Type, arg1: string, arg2: any): void
public "hasParameter"(arg0: $SettableBeanProperty$Type): boolean
public "handleIdValue"(arg0: $DeserializationContext$Type, arg1: any): any
get "complete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyValueBuffer$Type = ($PropertyValueBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyValueBuffer_ = $PropertyValueBuffer$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer" {
import {$WritableTypeId, $WritableTypeId$Type} from "packages/com/fasterxml/jackson/core/type/$WritableTypeId"
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$TypeIdResolver, $TypeIdResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeIdResolver"
import {$JsonTypeInfo$As, $JsonTypeInfo$As$Type} from "packages/com/fasterxml/jackson/annotation/$JsonTypeInfo$As"

export class $TypeSerializer {

constructor()

public "forProperty"(arg0: $BeanProperty$Type): $TypeSerializer
public "getPropertyName"(): string
public "typeId"(arg0: any, arg1: $JsonToken$Type, arg2: any): $WritableTypeId
public "typeId"(arg0: any, arg1: $Class$Type<(any)>, arg2: $JsonToken$Type): $WritableTypeId
public "typeId"(arg0: any, arg1: $JsonToken$Type): $WritableTypeId
/**
 * 
 * @deprecated
 */
public "writeTypeSuffixForScalar"(arg0: any, arg1: $JsonGenerator$Type): void
/**
 * 
 * @deprecated
 */
public "writeTypeSuffixForArray"(arg0: any, arg1: $JsonGenerator$Type): void
/**
 * 
 * @deprecated
 */
public "writeTypePrefixForArray"(arg0: any, arg1: $JsonGenerator$Type): void
/**
 * 
 * @deprecated
 */
public "writeTypePrefixForArray"(arg0: any, arg1: $JsonGenerator$Type, arg2: $Class$Type<(any)>): void
/**
 * 
 * @deprecated
 */
public "writeTypeSuffixForObject"(arg0: any, arg1: $JsonGenerator$Type): void
/**
 * 
 * @deprecated
 */
public "writeCustomTypePrefixForScalar"(arg0: any, arg1: $JsonGenerator$Type, arg2: string): void
/**
 * 
 * @deprecated
 */
public "writeCustomTypePrefixForArray"(arg0: any, arg1: $JsonGenerator$Type, arg2: string): void
/**
 * 
 * @deprecated
 */
public "writeCustomTypePrefixForObject"(arg0: any, arg1: $JsonGenerator$Type, arg2: string): void
/**
 * 
 * @deprecated
 */
public "writeCustomTypeSuffixForScalar"(arg0: any, arg1: $JsonGenerator$Type, arg2: string): void
/**
 * 
 * @deprecated
 */
public "writeCustomTypeSuffixForObject"(arg0: any, arg1: $JsonGenerator$Type, arg2: string): void
/**
 * 
 * @deprecated
 */
public "writeCustomTypeSuffixForArray"(arg0: any, arg1: $JsonGenerator$Type, arg2: string): void
public "writeTypeSuffix"(arg0: $JsonGenerator$Type, arg1: $WritableTypeId$Type): $WritableTypeId
public "writeTypePrefix"(arg0: $JsonGenerator$Type, arg1: $WritableTypeId$Type): $WritableTypeId
public "getTypeInclusion"(): $JsonTypeInfo$As
/**
 * 
 * @deprecated
 */
public "writeTypePrefixForScalar"(arg0: any, arg1: $JsonGenerator$Type, arg2: $Class$Type<(any)>): void
/**
 * 
 * @deprecated
 */
public "writeTypePrefixForScalar"(arg0: any, arg1: $JsonGenerator$Type): void
/**
 * 
 * @deprecated
 */
public "writeTypePrefixForObject"(arg0: any, arg1: $JsonGenerator$Type): void
/**
 * 
 * @deprecated
 */
public "writeTypePrefixForObject"(arg0: any, arg1: $JsonGenerator$Type, arg2: $Class$Type<(any)>): void
public "getTypeIdResolver"(): $TypeIdResolver
get "propertyName"(): string
get "typeInclusion"(): $JsonTypeInfo$As
get "typeIdResolver"(): $TypeIdResolver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeSerializer$Type = ($TypeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeSerializer_ = $TypeSerializer$Type;
}}
declare module "packages/com/fasterxml/jackson/core/io/$ContentReference" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"

export class $ContentReference implements $Serializable {
static readonly "DEFAULT_MAX_CONTENT_SNIPPET": integer


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "contentLength"(): integer
public static "construct"(arg0: boolean, arg1: any): $ContentReference
public static "construct"(arg0: boolean, arg1: any, arg2: integer, arg3: integer): $ContentReference
public static "unknown"(): $ContentReference
public "getRawContent"(): any
public static "rawReference"(arg0: boolean, arg1: any): $ContentReference
public static "rawReference"(arg0: any): $ContentReference
public "hasTextualContent"(): boolean
public "contentOffset"(): integer
public "buildSourceDescription"(): string
public "appendSourceDescription"(arg0: $StringBuilder$Type): $StringBuilder
get "rawContent"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentReference$Type = ($ContentReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentReference_ = $ContentReference$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$KeyDeserializers" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$KeyDeserializer, $KeyDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$KeyDeserializer"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export interface $KeyDeserializers {

 "findKeyDeserializer"(arg0: $JavaType$Type, arg1: $DeserializationConfig$Type, arg2: $BeanDescription$Type): $KeyDeserializer

(arg0: $JavaType$Type, arg1: $DeserializationConfig$Type, arg2: $BeanDescription$Type): $KeyDeserializer
}

export namespace $KeyDeserializers {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyDeserializers$Type = ($KeyDeserializers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyDeserializers_ = $KeyDeserializers$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedAndMetadata" {
import {$Annotated, $Annotated$Type} from "packages/com/fasterxml/jackson/databind/introspect/$Annotated"

export class $AnnotatedAndMetadata<A extends $Annotated, M> {
readonly "annotated": A
readonly "metadata": M

constructor(arg0: A, arg1: M)

public static "of"<A extends $Annotated, M>(arg0: A, arg1: M): $AnnotatedAndMetadata<(A), (M)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedAndMetadata$Type<A, M> = ($AnnotatedAndMetadata<(A), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotatedAndMetadata_<A, M> = $AnnotatedAndMetadata$Type<(A), (M)>;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/impl/$ReadableObjectId$Referring" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JsonLocation, $JsonLocation$Type} from "packages/com/fasterxml/jackson/core/$JsonLocation"
import {$UnresolvedForwardReference, $UnresolvedForwardReference$Type} from "packages/com/fasterxml/jackson/databind/deser/$UnresolvedForwardReference"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $ReadableObjectId$Referring {

constructor(arg0: $UnresolvedForwardReference$Type, arg1: $Class$Type<(any)>)
constructor(arg0: $UnresolvedForwardReference$Type, arg1: $JavaType$Type)

public "getLocation"(): $JsonLocation
public "hasId"(arg0: any): boolean
public "handleResolvedForwardReference"(arg0: any, arg1: any): void
public "getBeanType"(): $Class<(any)>
get "location"(): $JsonLocation
get "beanType"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadableObjectId$Referring$Type = ($ReadableObjectId$Referring);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReadableObjectId$Referring_ = $ReadableObjectId$Referring$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$ByteBuilder" {
import {$PrimitiveArrayBuilder, $PrimitiveArrayBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$PrimitiveArrayBuilder"

export class $ArrayBuilders$ByteBuilder extends $PrimitiveArrayBuilder<((byte)[])> {

constructor()

public "_constructArray"(arg0: integer): (byte)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayBuilders$ByteBuilder$Type = ($ArrayBuilders$ByteBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayBuilders$ByteBuilder_ = $ArrayBuilders$ByteBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$TextNode" {
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$ValueNode, $ValueNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ValueNode"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"
import {$JsonNodeType, $JsonNodeType$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeType"

export class $TextNode extends $ValueNode {

constructor(arg0: string)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "valueOf"(arg0: string): $TextNode
public "asInt"(arg0: integer): integer
public "getNodeType"(): $JsonNodeType
public "serialize"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type): void
public "asLong"(arg0: long): long
public "asDouble"(arg0: double): double
public "asToken"(): $JsonToken
public "asBoolean"(arg0: boolean): boolean
public "getBinaryValue"(arg0: $Base64Variant$Type): (byte)[]
public "textValue"(): string
public "binaryValue"(): (byte)[]
public "asText"(): string
public "asText"(arg0: string): string
get "nodeType"(): $JsonNodeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextNode$Type = ($TextNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextNode_ = $TextNode$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$PropertyMetadata$MergeInfo" {
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"

export class $PropertyMetadata$MergeInfo {
readonly "getter": $AnnotatedMember
readonly "fromDefaults": boolean


public static "createForDefaults"(arg0: $AnnotatedMember$Type): $PropertyMetadata$MergeInfo
public static "createForTypeOverride"(arg0: $AnnotatedMember$Type): $PropertyMetadata$MergeInfo
public static "createForPropertyOverride"(arg0: $AnnotatedMember$Type): $PropertyMetadata$MergeInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyMetadata$MergeInfo$Type = ($PropertyMetadata$MergeInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyMetadata$MergeInfo_ = $PropertyMetadata$MergeInfo$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonEncoding" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonEncoding extends $Enum<($JsonEncoding)> {
static readonly "UTF8": $JsonEncoding
static readonly "UTF16_BE": $JsonEncoding
static readonly "UTF16_LE": $JsonEncoding
static readonly "UTF32_BE": $JsonEncoding
static readonly "UTF32_LE": $JsonEncoding


public static "values"(): ($JsonEncoding)[]
public static "valueOf"(arg0: string): $JsonEncoding
public "bits"(): integer
public "isBigEndian"(): boolean
public "getJavaName"(): string
get "bigEndian"(): boolean
get "javaName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonEncoding$Type = (("utf16_be") | ("utf32_le") | ("utf8") | ("utf16_le") | ("utf32_be")) | ($JsonEncoding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonEncoding_ = $JsonEncoding$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$NullNode" {
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$ValueNode, $ValueNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ValueNode"
import {$JsonNodeType, $JsonNodeType$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeType"

export class $NullNode extends $ValueNode {
static readonly "instance": $NullNode


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "requireNonNull"(): $JsonNode
public static "getInstance"(): $NullNode
public "getNodeType"(): $JsonNodeType
public "serialize"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type): void
public "asToken"(): $JsonToken
public "asText"(arg0: string): string
public "asText"(): string
get "instance"(): $NullNode
get "nodeType"(): $JsonNodeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NullNode$Type = ($NullNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NullNode_ = $NullNode$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$DoubleBuilder" {
import {$PrimitiveArrayBuilder, $PrimitiveArrayBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$PrimitiveArrayBuilder"

export class $ArrayBuilders$DoubleBuilder extends $PrimitiveArrayBuilder<((double)[])> {

constructor()

public "_constructArray"(arg0: integer): (double)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayBuilders$DoubleBuilder$Type = ($ArrayBuilders$DoubleBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayBuilders$DoubleBuilder_ = $ArrayBuilders$DoubleBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector" {
import {$NamedType, $NamedType$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$NamedType"
import {$JsonPOJOBuilder$Value, $JsonPOJOBuilder$Value$Type} from "packages/com/fasterxml/jackson/databind/annotation/$JsonPOJOBuilder$Value"
import {$BeanPropertyWriter, $BeanPropertyWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/$BeanPropertyWriter"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"
import {$JsonSerialize$Typing, $JsonSerialize$Typing$Type} from "packages/com/fasterxml/jackson/databind/annotation/$JsonSerialize$Typing"
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$JsonInclude$Include, $JsonInclude$Include$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Include"
import {$TypeResolverBuilder, $TypeResolverBuilder$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeResolverBuilder"
import {$JacksonInject$Value, $JacksonInject$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JacksonInject$Value"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JsonIncludeProperties$Value, $JsonIncludeProperties$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonIncludeProperties$Value"
import {$JsonIgnoreProperties$Value, $JsonIgnoreProperties$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonIgnoreProperties$Value"
import {$AnnotatedClass, $AnnotatedClass$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedClass"
import {$AnnotatedMethod, $AnnotatedMethod$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMethod"
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$JsonSetter$Value, $JsonSetter$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonSetter$Value"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ObjectIdInfo, $ObjectIdInfo$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ObjectIdInfo"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$NameTransformer, $NameTransformer$Type} from "packages/com/fasterxml/jackson/databind/util/$NameTransformer"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$JsonProperty$Access, $JsonProperty$Access$Type} from "packages/com/fasterxml/jackson/annotation/$JsonProperty$Access"
import {$Versioned, $Versioned$Type} from "packages/com/fasterxml/jackson/core/$Versioned"
import {$AnnotationIntrospector$ReferenceProperty, $AnnotationIntrospector$ReferenceProperty$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector$ReferenceProperty"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$AnnotatedField, $AnnotatedField$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedField"
import {$VisibilityChecker, $VisibilityChecker$Type} from "packages/com/fasterxml/jackson/databind/introspect/$VisibilityChecker"
import {$Annotated, $Annotated$Type} from "packages/com/fasterxml/jackson/databind/introspect/$Annotated"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$JsonCreator$Mode, $JsonCreator$Mode$Type} from "packages/com/fasterxml/jackson/annotation/$JsonCreator$Mode"

export class $AnnotationIntrospector implements $Versioned, $Serializable {

constructor()

public "version"(): $Version
public static "pair"(arg0: $AnnotationIntrospector$Type, arg1: $AnnotationIntrospector$Type): $AnnotationIntrospector
public "findSerializationSortAlphabetically"(arg0: $Annotated$Type): boolean
public "findDeserializationContentConverter"(arg0: $AnnotatedMember$Type): any
/**
 * 
 * @deprecated
 */
public "findSerializationInclusionForContent"(arg0: $Annotated$Type, arg1: $JsonInclude$Include$Type): $JsonInclude$Include
public "findPropertyIndex"(arg0: $Annotated$Type): integer
public "findWrapperName"(arg0: $Annotated$Type): $PropertyName
public "hasRequiredMarker"(arg0: $AnnotatedMember$Type): boolean
public "findSetterInfo"(arg0: $Annotated$Type): $JsonSetter$Value
public "findTypeResolver"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedClass$Type, arg2: $JavaType$Type): $TypeResolverBuilder<(any)>
public "findDeserializer"(arg0: $Annotated$Type): any
public "isIgnorableType"(arg0: $AnnotatedClass$Type): boolean
public "findViews"(arg0: $Annotated$Type): ($Class<(any)>)[]
public "findObjectIdInfo"(arg0: $Annotated$Type): $ObjectIdInfo
public "findReferenceType"(arg0: $AnnotatedMember$Type): $AnnotationIntrospector$ReferenceProperty
public "findFilterId"(arg0: $Annotated$Type): any
public "findSerializer"(arg0: $Annotated$Type): any
public "isAnnotationBundle"(arg0: $Annotation$Type): boolean
public "allIntrospectors"(): $Collection<($AnnotationIntrospector)>
public "allIntrospectors"(arg0: $Collection$Type<($AnnotationIntrospector$Type)>): $Collection<($AnnotationIntrospector)>
public "isTypeId"(arg0: $AnnotatedMember$Type): boolean
public static "nopInstance"(): $AnnotationIntrospector
public "findNamingStrategy"(arg0: $AnnotatedClass$Type): any
public "findPropertyAccess"(arg0: $Annotated$Type): $JsonProperty$Access
public "findFormat"(arg0: $Annotated$Type): $JsonFormat$Value
public "findNullSerializer"(arg0: $Annotated$Type): any
public "hasAsValue"(arg0: $Annotated$Type): boolean
public "hasAnyGetter"(arg0: $Annotated$Type): boolean
public "hasAsKey"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type): boolean
public "hasIgnoreMarker"(arg0: $AnnotatedMember$Type): boolean
public "findRenameByField"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedField$Type, arg2: $PropertyName$Type): $PropertyName
/**
 * 
 * @deprecated
 */
public "findEnumValue"(arg0: $Enum$Type<(any)>): string
public "findMergeInfo"(arg0: $Annotated$Type): boolean
public "hasAnySetter"(arg0: $Annotated$Type): boolean
/**
 * 
 * @deprecated
 */
public "findCreatorBinding"(arg0: $Annotated$Type): $JsonCreator$Mode
public "findPOJOBuilder"(arg0: $AnnotatedClass$Type): $Class<(any)>
public "findEnumAliases"(arg0: $Class$Type<(any)>, arg1: ($Enum$Type<(any)>)[], arg2: ((string)[])[]): void
public "findEnumValues"(arg0: $Class$Type<(any)>, arg1: ($Enum$Type<(any)>)[], arg2: (string)[]): (string)[]
public "findSubtypes"(arg0: $Annotated$Type): $List<($NamedType)>
public "findTypeName"(arg0: $AnnotatedClass$Type): string
public "findKeySerializer"(arg0: $Annotated$Type): any
public "findRootName"(arg0: $AnnotatedClass$Type): $PropertyName
public "findInjectableValue"(arg0: $AnnotatedMember$Type): $JacksonInject$Value
public "findPropertyDescription"(arg0: $Annotated$Type): string
public "findImplicitPropertyName"(arg0: $AnnotatedMember$Type): string
public "findKeyDeserializer"(arg0: $Annotated$Type): any
public "findNameForDeserialization"(arg0: $Annotated$Type): $PropertyName
public "findCreatorAnnotation"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type): $JsonCreator$Mode
public "findUnwrappingNameTransformer"(arg0: $AnnotatedMember$Type): $NameTransformer
public "findPropertyDefaultValue"(arg0: $Annotated$Type): string
public "findPropertyTypeResolver"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedMember$Type, arg2: $JavaType$Type): $TypeResolverBuilder<(any)>
public "findContentDeserializer"(arg0: $Annotated$Type): any
public "findPropertyContentTypeResolver"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedMember$Type, arg2: $JavaType$Type): $TypeResolverBuilder<(any)>
public "refineDeserializationType"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type, arg2: $JavaType$Type): $JavaType
public "findPOJOBuilderConfig"(arg0: $AnnotatedClass$Type): $JsonPOJOBuilder$Value
public "findSerializationConverter"(arg0: $Annotated$Type): any
public "findContentSerializer"(arg0: $Annotated$Type): any
public "findSerializationTyping"(arg0: $Annotated$Type): $JsonSerialize$Typing
public "findPropertyInclusion"(arg0: $Annotated$Type): $JsonInclude$Value
public "findPropertyAliases"(arg0: $Annotated$Type): $List<($PropertyName)>
public "findDefaultEnumValue"(arg0: $Class$Type<($Enum$Type<(any)>)>): $Enum<(any)>
public "findPropertyInclusionByName"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type): $JsonIncludeProperties$Value
/**
 * 
 * @deprecated
 */
public "findSerializationContentType"(arg0: $Annotated$Type, arg1: $JavaType$Type): $Class<(any)>
public "findSerializationContentConverter"(arg0: $AnnotatedMember$Type): any
public "findNameForSerialization"(arg0: $Annotated$Type): $PropertyName
public "findAutoDetectVisibility"(arg0: $AnnotatedClass$Type, arg1: $VisibilityChecker$Type<(any)>): $VisibilityChecker<(any)>
public "refineSerializationType"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type, arg2: $JavaType$Type): $JavaType
public "findPropertyIgnoralByName"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type): $JsonIgnoreProperties$Value
/**
 * 
 * @deprecated
 */
public "findSerializationType"(arg0: $Annotated$Type): $Class<(any)>
public "findAndAddVirtualProperties"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedClass$Type, arg2: $List$Type<($BeanPropertyWriter$Type)>): void
/**
 * 
 * @deprecated
 */
public "findSerializationKeyType"(arg0: $Annotated$Type, arg1: $JavaType$Type): $Class<(any)>
/**
 * 
 * @deprecated
 */
public "hasAsValueAnnotation"(arg0: $AnnotatedMethod$Type): boolean
/**
 * 
 * @deprecated
 */
public "hasAnyGetterAnnotation"(arg0: $AnnotatedMethod$Type): boolean
public "findSerializationPropertyOrder"(arg0: $AnnotatedClass$Type): (string)[]
/**
 * 
 * @deprecated
 */
public "findInjectableValueId"(arg0: $AnnotatedMember$Type): any
public "findDeserializationConverter"(arg0: $Annotated$Type): any
/**
 * 
 * @deprecated
 */
public "findPropertyIgnorals"(arg0: $Annotated$Type): $JsonIgnoreProperties$Value
/**
 * 
 * @deprecated
 */
public "findDeserializationType"(arg0: $Annotated$Type, arg1: $JavaType$Type): $Class<(any)>
/**
 * 
 * @deprecated
 */
public "findDeserializationKeyType"(arg0: $Annotated$Type, arg1: $JavaType$Type): $Class<(any)>
/**
 * 
 * @deprecated
 */
public "findDeserializationContentType"(arg0: $Annotated$Type, arg1: $JavaType$Type): $Class<(any)>
/**
 * 
 * @deprecated
 */
public "hasAnySetterAnnotation"(arg0: $AnnotatedMethod$Type): boolean
/**
 * 
 * @deprecated
 */
public "findPropertiesToIgnore"(arg0: $Annotated$Type, arg1: boolean): (string)[]
public "findObjectReferenceInfo"(arg0: $Annotated$Type, arg1: $ObjectIdInfo$Type): $ObjectIdInfo
/**
 * 
 * @deprecated
 */
public "findSerializationInclusion"(arg0: $Annotated$Type, arg1: $JsonInclude$Include$Type): $JsonInclude$Include
public "findClassDescription"(arg0: $AnnotatedClass$Type): string
/**
 * 
 * @deprecated
 */
public "hasCreatorAnnotation"(arg0: $Annotated$Type): boolean
/**
 * 
 * @deprecated
 */
public "findIgnoreUnknownProperties"(arg0: $AnnotatedClass$Type): boolean
public "resolveSetterConflict"(arg0: $MapperConfig$Type<(any)>, arg1: $AnnotatedMethod$Type, arg2: $AnnotatedMethod$Type): $AnnotatedMethod
public "findValueInstantiator"(arg0: $AnnotatedClass$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotationIntrospector$Type = ($AnnotationIntrospector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotationIntrospector_ = $AnnotationIntrospector$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$ContainerNode" {
import {$JsonNodeCreator, $JsonNodeCreator$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeCreator"
import {$BinaryNode, $BinaryNode$Type} from "packages/com/fasterxml/jackson/databind/node/$BinaryNode"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$ValueNode, $ValueNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ValueNode"
import {$ArrayNode, $ArrayNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ArrayNode"
import {$BooleanNode, $BooleanNode$Type} from "packages/com/fasterxml/jackson/databind/node/$BooleanNode"
import {$RawValue, $RawValue$Type} from "packages/com/fasterxml/jackson/databind/util/$RawValue"
import {$ObjectNode, $ObjectNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ObjectNode"
import {$NullNode, $NullNode$Type} from "packages/com/fasterxml/jackson/databind/node/$NullNode"
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$BaseJsonNode, $BaseJsonNode$Type} from "packages/com/fasterxml/jackson/databind/node/$BaseJsonNode"

export class $ContainerNode<T extends $ContainerNode<(T)>> extends $BaseJsonNode implements $JsonNodeCreator {


public "get"(arg0: string): $JsonNode
public "get"(arg0: integer): $JsonNode
public "size"(): integer
public "removeAll"(): T
public "asToken"(): $JsonToken
public "binaryNode"(arg0: (byte)[]): $BinaryNode
public "objectNode"(): $ObjectNode
public "missingNode"(): $JsonNode
public "nullNode"(): $NullNode
public "arrayNode"(arg0: integer): $ArrayNode
public "arrayNode"(): $ArrayNode
public "asText"(): string
public "numberNode"(arg0: $BigInteger$Type): $ValueNode
public "numberNode"(arg0: $BigDecimal$Type): $ValueNode
public "numberNode"(arg0: float): $ValueNode
public "numberNode"(arg0: double): $ValueNode
public "numberNode"(arg0: long): $ValueNode
public "numberNode"(arg0: byte): $ValueNode
public "numberNode"(arg0: short): $ValueNode
public "numberNode"(arg0: integer): $ValueNode
public "booleanNode"(arg0: boolean): $BooleanNode
public "rawValueNode"(arg0: $RawValue$Type): $ValueNode
public "pojoNode"(arg0: any): $ValueNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerNode$Type<T> = ($ContainerNode<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerNode_<T> = $ContainerNode$Type<(T)>;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonGenerator" {
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$StreamWriteFeature, $StreamWriteFeature$Type} from "packages/com/fasterxml/jackson/core/$StreamWriteFeature"
import {$JsonGenerator$Feature, $JsonGenerator$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator$Feature"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$JsonStreamContext, $JsonStreamContext$Type} from "packages/com/fasterxml/jackson/core/$JsonStreamContext"
import {$FormatSchema, $FormatSchema$Type} from "packages/com/fasterxml/jackson/core/$FormatSchema"
import {$Flushable, $Flushable$Type} from "packages/java/io/$Flushable"
import {$PrettyPrinter, $PrettyPrinter$Type} from "packages/com/fasterxml/jackson/core/$PrettyPrinter"
import {$Versioned, $Versioned$Type} from "packages/com/fasterxml/jackson/core/$Versioned"
import {$WritableTypeId, $WritableTypeId$Type} from "packages/com/fasterxml/jackson/core/type/$WritableTypeId"
import {$JacksonFeatureSet, $JacksonFeatureSet$Type} from "packages/com/fasterxml/jackson/core/util/$JacksonFeatureSet"
import {$StreamWriteCapability, $StreamWriteCapability$Type} from "packages/com/fasterxml/jackson/core/$StreamWriteCapability"
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$TreeNode, $TreeNode$Type} from "packages/com/fasterxml/jackson/core/$TreeNode"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"
import {$CharacterEscapes, $CharacterEscapes$Type} from "packages/com/fasterxml/jackson/core/io/$CharacterEscapes"

export class $JsonGenerator implements $Closeable, $Flushable, $Versioned {


public "version"(): $Version
public "flush"(): void
public "writeObject"(arg0: any): void
public "close"(): void
public "writeBoolean"(arg0: boolean): void
public "writeString"(arg0: (character)[], arg1: integer, arg2: integer): void
public "writeString"(arg0: $SerializableString$Type): void
public "writeString"(arg0: string): void
public "writeString"(arg0: $Reader$Type, arg1: integer): void
public "enable"(arg0: $JsonGenerator$Feature$Type): $JsonGenerator
public "isEnabled"(arg0: $JsonGenerator$Feature$Type): boolean
public "isEnabled"(arg0: $StreamWriteFeature$Type): boolean
public "getSchema"(): $FormatSchema
public "setSchema"(arg0: $FormatSchema$Type): void
public "isClosed"(): boolean
public "configure"(arg0: $JsonGenerator$Feature$Type, arg1: boolean): $JsonGenerator
public "disable"(arg0: $JsonGenerator$Feature$Type): $JsonGenerator
public "currentValue"(): any
public "writeNull"(): void
public "writeArray"(arg0: (string)[], arg1: integer, arg2: integer): void
public "writeArray"(arg0: (double)[], arg1: integer, arg2: integer): void
public "writeArray"(arg0: (long)[], arg1: integer, arg2: integer): void
public "writeArray"(arg0: (integer)[], arg1: integer, arg2: integer): void
public "getCodec"(): $ObjectCodec
public "canWriteTypeId"(): boolean
public "getOutputBuffered"(): integer
public "assignCurrentValue"(arg0: any): void
public "getOutputTarget"(): any
public "getFormatFeatures"(): integer
public "getOutputContext"(): $JsonStreamContext
public "setCurrentValue"(arg0: any): void
public "getCurrentValue"(): any
public "getFeatureMask"(): integer
public "canOmitFields"(): boolean
public "canWriteObjectId"(): boolean
/**
 * 
 * @deprecated
 */
public "setFeatureMask"(arg0: integer): $JsonGenerator
public "writeTypeSuffix"(arg0: $WritableTypeId$Type): $WritableTypeId
public "writeNullField"(arg0: string): void
public "writeStringField"(arg0: string, arg1: string): void
public "writeBinaryField"(arg0: string, arg1: (byte)[]): void
public "writePOJOField"(arg0: string, arg1: any): void
public "writeTypePrefix"(arg0: $WritableTypeId$Type): $WritableTypeId
public "writeNumberField"(arg0: string, arg1: long): void
public "writeNumberField"(arg0: string, arg1: float): void
public "writeNumberField"(arg0: string, arg1: short): void
public "writeNumberField"(arg0: string, arg1: integer): void
public "writeNumberField"(arg0: string, arg1: $BigDecimal$Type): void
public "writeNumberField"(arg0: string, arg1: $BigInteger$Type): void
public "writeNumberField"(arg0: string, arg1: double): void
public "writeRaw"(arg0: character): void
public "writeRaw"(arg0: (character)[], arg1: integer, arg2: integer): void
public "writeRaw"(arg0: string): void
public "writeRaw"(arg0: $SerializableString$Type): void
public "writeRaw"(arg0: string, arg1: integer, arg2: integer): void
public "writeRawUTF8String"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "writeObjectRef"(arg0: any): void
public "writeEndArray"(): void
public "writeStartArray"(arg0: any, arg1: integer): void
public "writeStartArray"(arg0: any): void
/**
 * 
 * @deprecated
 */
public "writeStartArray"(arg0: integer): void
public "writeStartArray"(): void
public "writeFieldId"(arg0: long): void
public "writeRawValue"(arg0: (character)[], arg1: integer, arg2: integer): void
public "writeRawValue"(arg0: string, arg1: integer, arg2: integer): void
public "writeRawValue"(arg0: string): void
public "writeRawValue"(arg0: $SerializableString$Type): void
public "writeTypeId"(arg0: any): void
public "writeBinary"(arg0: $Base64Variant$Type, arg1: $InputStream$Type, arg2: integer): integer
public "writeBinary"(arg0: $InputStream$Type, arg1: integer): integer
public "writeBinary"(arg0: (byte)[]): void
public "writeBinary"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "writeBinary"(arg0: $Base64Variant$Type, arg1: (byte)[], arg2: integer, arg3: integer): void
public "writeObjectId"(arg0: any): void
public "writePOJO"(arg0: any): void
public "writeUTF8String"(arg0: (byte)[], arg1: integer, arg2: integer): void
public "writeBooleanField"(arg0: string, arg1: boolean): void
public "writeOmittedField"(arg0: string): void
public "writeObjectField"(arg0: string, arg1: any): void
public "copyCurrentEvent"(arg0: $JsonParser$Type): void
public "writeTree"(arg0: $TreeNode$Type): void
public "setCodec"(arg0: $ObjectCodec$Type): $JsonGenerator
public "getPrettyPrinter"(): $PrettyPrinter
public "setPrettyPrinter"(arg0: $PrettyPrinter$Type): $JsonGenerator
public "canUseSchema"(arg0: $FormatSchema$Type): boolean
public "writeFieldName"(arg0: $SerializableString$Type): void
public "writeFieldName"(arg0: string): void
public "writeNumber"(arg0: integer): void
public "writeNumber"(arg0: string): void
public "writeNumber"(arg0: short): void
public "writeNumber"(arg0: (character)[], arg1: integer, arg2: integer): void
public "writeNumber"(arg0: float): void
public "writeNumber"(arg0: double): void
public "writeNumber"(arg0: $BigInteger$Type): void
public "writeNumber"(arg0: $BigDecimal$Type): void
public "writeNumber"(arg0: long): void
public "writeStartObject"(arg0: any): void
public "writeStartObject"(): void
public "writeStartObject"(arg0: any, arg1: integer): void
public "writeEndObject"(): void
public "copyCurrentStructure"(arg0: $JsonParser$Type): void
public "writeObjectFieldStart"(arg0: string): void
public "overrideStdFeatures"(arg0: integer, arg1: integer): $JsonGenerator
public "useDefaultPrettyPrinter"(): $JsonGenerator
public "canWriteBinaryNatively"(): boolean
public "getWriteCapabilities"(): $JacksonFeatureSet<($StreamWriteCapability)>
public "writeEmbeddedObject"(arg0: any): void
public "writeArrayFieldStart"(arg0: string): void
public "overrideFormatFeatures"(arg0: integer, arg1: integer): $JsonGenerator
public "getHighestEscapedChar"(): integer
public "canWriteFormattedNumbers"(): boolean
public "setRootValueSeparator"(arg0: $SerializableString$Type): $JsonGenerator
public "setCharacterEscapes"(arg0: $CharacterEscapes$Type): $JsonGenerator
public "setHighestNonEscapedChar"(arg0: integer): $JsonGenerator
public "getCharacterEscapes"(): $CharacterEscapes
get "schema"(): $FormatSchema
set "schema"(value: $FormatSchema$Type)
get "closed"(): boolean
get "codec"(): $ObjectCodec
get "outputBuffered"(): integer
get "outputTarget"(): any
get "formatFeatures"(): integer
get "outputContext"(): $JsonStreamContext
get "featureMask"(): integer
set "featureMask"(value: integer)
set "codec"(value: $ObjectCodec$Type)
get "prettyPrinter"(): $PrettyPrinter
set "prettyPrinter"(value: $PrettyPrinter$Type)
get "writeCapabilities"(): $JacksonFeatureSet<($StreamWriteCapability)>
get "highestEscapedChar"(): integer
set "rootValueSeparator"(value: $SerializableString$Type)
set "characterEscapes"(value: $CharacterEscapes$Type)
set "highestNonEscapedChar"(value: integer)
get "characterEscapes"(): $CharacterEscapes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonGenerator$Type = ($JsonGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonGenerator_ = $JsonGenerator$Type;
}}
declare module "packages/com/fasterxml/jackson/core/io/$InputDecorator" {
import {$DataInput, $DataInput$Type} from "packages/java/io/$DataInput"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$IOContext, $IOContext$Type} from "packages/com/fasterxml/jackson/core/io/$IOContext"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"

export class $InputDecorator implements $Serializable {

constructor()

public "decorate"(arg0: $IOContext$Type, arg1: $Reader$Type): $Reader
public "decorate"(arg0: $IOContext$Type, arg1: $DataInput$Type): $DataInput
public "decorate"(arg0: $IOContext$Type, arg1: (byte)[], arg2: integer, arg3: integer): $InputStream
public "decorate"(arg0: $IOContext$Type, arg1: $InputStream$Type): $InputStream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputDecorator$Type = ($InputDecorator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputDecorator_ = $InputDecorator$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/ser/$BeanSerializer" {
import {$BeanSerializerBuilder, $BeanSerializerBuilder$Type} from "packages/com/fasterxml/jackson/databind/ser/$BeanSerializerBuilder"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$BeanSerializerBase, $BeanSerializerBase$Type} from "packages/com/fasterxml/jackson/databind/ser/std/$BeanSerializerBase"
import {$NameTransformer, $NameTransformer$Type} from "packages/com/fasterxml/jackson/databind/util/$NameTransformer"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$ObjectIdWriter, $ObjectIdWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/impl/$ObjectIdWriter"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$BeanPropertyWriter, $BeanPropertyWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/$BeanPropertyWriter"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"

export class $BeanSerializer extends $BeanSerializerBase {

constructor(arg0: $JavaType$Type, arg1: $BeanSerializerBuilder$Type, arg2: ($BeanPropertyWriter$Type)[], arg3: ($BeanPropertyWriter$Type)[])

public "toString"(): string
public "serialize"(arg0: any, arg1: $JsonGenerator$Type, arg2: $SerializerProvider$Type): void
public "withObjectIdWriter"(arg0: $ObjectIdWriter$Type): $BeanSerializerBase
public "unwrappingSerializer"(arg0: $NameTransformer$Type): $JsonSerializer<(any)>
public static "createDummy"(arg0: $JavaType$Type, arg1: $BeanSerializerBuilder$Type): $BeanSerializer
/**
 * 
 * @deprecated
 */
public static "createDummy"(arg0: $JavaType$Type): $BeanSerializer
public "withFilterId"(arg0: any): $BeanSerializerBase
public "getSchema"(arg0: $SerializerProvider$Type, arg1: $Type$Type, arg2: boolean): $JsonNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeanSerializer$Type = ($BeanSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeanSerializer_ = $BeanSerializer$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$DeserializationProblemHandler" {
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$ValueInstantiator, $ValueInstantiator$Type} from "packages/com/fasterxml/jackson/databind/deser/$ValueInstantiator"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$TypeIdResolver, $TypeIdResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeIdResolver"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"

export class $DeserializationProblemHandler {
static readonly "NOT_HANDLED": any

constructor()

public "handleWeirdKey"(arg0: $DeserializationContext$Type, arg1: $Class$Type<(any)>, arg2: string, arg3: string): any
public "handleUnexpectedToken"(arg0: $DeserializationContext$Type, arg1: $JavaType$Type, arg2: $JsonToken$Type, arg3: $JsonParser$Type, arg4: string): any
/**
 * 
 * @deprecated
 */
public "handleUnexpectedToken"(arg0: $DeserializationContext$Type, arg1: $Class$Type<(any)>, arg2: $JsonToken$Type, arg3: $JsonParser$Type, arg4: string): any
public "handleWeirdNativeValue"(arg0: $DeserializationContext$Type, arg1: $JavaType$Type, arg2: any, arg3: $JsonParser$Type): any
public "handleWeirdNumberValue"(arg0: $DeserializationContext$Type, arg1: $Class$Type<(any)>, arg2: number, arg3: string): any
public "handleUnknownTypeId"(arg0: $DeserializationContext$Type, arg1: $JavaType$Type, arg2: string, arg3: $TypeIdResolver$Type, arg4: string): $JavaType
public "handleWeirdStringValue"(arg0: $DeserializationContext$Type, arg1: $Class$Type<(any)>, arg2: string, arg3: string): any
/**
 * 
 * @deprecated
 */
public "handleMissingInstantiator"(arg0: $DeserializationContext$Type, arg1: $Class$Type<(any)>, arg2: $JsonParser$Type, arg3: string): any
public "handleMissingInstantiator"(arg0: $DeserializationContext$Type, arg1: $Class$Type<(any)>, arg2: $ValueInstantiator$Type, arg3: $JsonParser$Type, arg4: string): any
public "handleInstantiationProblem"(arg0: $DeserializationContext$Type, arg1: $Class$Type<(any)>, arg2: any, arg3: $Throwable$Type): any
public "handleMissingTypeId"(arg0: $DeserializationContext$Type, arg1: $JavaType$Type, arg2: $TypeIdResolver$Type, arg3: string): $JavaType
public "handleUnknownProperty"(arg0: $DeserializationContext$Type, arg1: $JsonParser$Type, arg2: $JsonDeserializer$Type<(any)>, arg3: any, arg4: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeserializationProblemHandler$Type = ($DeserializationProblemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeserializationProblemHandler_ = $DeserializationProblemHandler$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$JsonNode$OverwriteMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonNode$OverwriteMode extends $Enum<($JsonNode$OverwriteMode)> {
static readonly "NONE": $JsonNode$OverwriteMode
static readonly "NULLS": $JsonNode$OverwriteMode
static readonly "SCALARS": $JsonNode$OverwriteMode
static readonly "ALL": $JsonNode$OverwriteMode


public static "values"(): ($JsonNode$OverwriteMode)[]
public static "valueOf"(arg0: string): $JsonNode$OverwriteMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNode$OverwriteMode$Type = (("all") | ("scalars") | ("nulls") | ("none")) | ($JsonNode$OverwriteMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonNode$OverwriteMode_ = $JsonNode$OverwriteMode$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$BeanProperty" {
import {$JsonObjectFormatVisitor, $JsonObjectFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonObjectFormatVisitor"
import {$Named, $Named$Type} from "packages/com/fasterxml/jackson/databind/util/$Named"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$PropertyMetadata, $PropertyMetadata$Type} from "packages/com/fasterxml/jackson/databind/$PropertyMetadata"

export interface $BeanProperty extends $Named {

 "getName"(): string
 "getAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
 "getType"(): $JavaType
 "isVirtual"(): boolean
 "getFullName"(): $PropertyName
 "getMember"(): $AnnotatedMember
 "isRequired"(): boolean
 "getMetadata"(): $PropertyMetadata
 "getWrapperName"(): $PropertyName
 "findPropertyInclusion"(arg0: $MapperConfig$Type<(any)>, arg1: $Class$Type<(any)>): $JsonInclude$Value
 "findPropertyFormat"(arg0: $MapperConfig$Type<(any)>, arg1: $Class$Type<(any)>): $JsonFormat$Value
 "findAliases"(arg0: $MapperConfig$Type<(any)>): $List<($PropertyName)>
/**
 * 
 * @deprecated
 */
 "findFormatOverrides"(arg0: $AnnotationIntrospector$Type): $JsonFormat$Value
 "depositSchemaProperty"(arg0: $JsonObjectFormatVisitor$Type, arg1: $SerializerProvider$Type): void
 "getContextAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
}

export namespace $BeanProperty {
const EMPTY_FORMAT: $JsonFormat$Value
const EMPTY_INCLUDE: $JsonInclude$Value
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeanProperty$Type = ($BeanProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeanProperty_ = $BeanProperty$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$DeserializationContext" {
import {$DeserializerFactory, $DeserializerFactory$Type} from "packages/com/fasterxml/jackson/databind/deser/$DeserializerFactory"
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$LogicalType, $LogicalType$Type} from "packages/com/fasterxml/jackson/databind/type/$LogicalType"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$StreamReadCapability, $StreamReadCapability$Type} from "packages/com/fasterxml/jackson/core/$StreamReadCapability"
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$AtomicReference, $AtomicReference$Type} from "packages/java/util/concurrent/atomic/$AtomicReference"
import {$ObjectIdGenerator, $ObjectIdGenerator$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator"
import {$ObjectIdResolver, $ObjectIdResolver$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdResolver"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"
import {$CoercionInputShape, $CoercionInputShape$Type} from "packages/com/fasterxml/jackson/databind/cfg/$CoercionInputShape"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$ValueInstantiator, $ValueInstantiator$Type} from "packages/com/fasterxml/jackson/databind/deser/$ValueInstantiator"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"
import {$DeserializationFeature, $DeserializationFeature$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationFeature"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$MapperFeature, $MapperFeature$Type} from "packages/com/fasterxml/jackson/databind/$MapperFeature"
import {$CoercionAction, $CoercionAction$Type} from "packages/com/fasterxml/jackson/databind/cfg/$CoercionAction"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ObjectBuffer, $ObjectBuffer$Type} from "packages/com/fasterxml/jackson/databind/util/$ObjectBuffer"
import {$JsonNodeFactory, $JsonNodeFactory$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeFactory"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$TypeIdResolver, $TypeIdResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeIdResolver"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$Calendar, $Calendar$Type} from "packages/java/util/$Calendar"
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$ObjectIdReader, $ObjectIdReader$Type} from "packages/com/fasterxml/jackson/databind/deser/impl/$ObjectIdReader"
import {$JsonMappingException, $JsonMappingException$Type} from "packages/com/fasterxml/jackson/databind/$JsonMappingException"
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$DatabindContext, $DatabindContext$Type} from "packages/com/fasterxml/jackson/databind/$DatabindContext"
import {$ArrayBuilders, $ArrayBuilders$Type} from "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders"
import {$ReadableObjectId, $ReadableObjectId$Type} from "packages/com/fasterxml/jackson/databind/deser/impl/$ReadableObjectId"
import {$Annotated, $Annotated$Type} from "packages/com/fasterxml/jackson/databind/introspect/$Annotated"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$KeyDeserializer, $KeyDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$KeyDeserializer"
import {$DatatypeFeature, $DatatypeFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeature"
import {$BeanPropertyDefinition, $BeanPropertyDefinition$Type} from "packages/com/fasterxml/jackson/databind/introspect/$BeanPropertyDefinition"
import {$TokenBuffer, $TokenBuffer$Type} from "packages/com/fasterxml/jackson/databind/util/$TokenBuffer"

export class $DeserializationContext extends $DatabindContext implements $Serializable {


public "getFactory"(): $DeserializerFactory
public "findClass"(arg0: string): $Class<(any)>
public "getAttribute"(arg0: any): any
public "getTimeZone"(): $TimeZone
public "getLocale"(): $Locale
public "isEnabled"(arg0: $DeserializationFeature$Type): boolean
public "isEnabled"(arg0: $MapperFeature$Type): boolean
public "isEnabled"(arg0: $StreamReadCapability$Type): boolean
public "isEnabled"(arg0: $DatatypeFeature$Type): boolean
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $JavaType$Type): T
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $Class$Type<(T)>): T
public "getParser"(): $JsonParser
public "reportInputMismatch"<T>(arg0: $JsonDeserializer$Type<(any)>, arg1: string, ...arg2: (any)[]): T
public "reportInputMismatch"<T>(arg0: $Class$Type<(any)>, arg1: string, ...arg2: (any)[]): T
public "reportInputMismatch"<T>(arg0: $JavaType$Type, arg1: string, ...arg2: (any)[]): T
public "reportInputMismatch"<T>(arg0: $BeanProperty$Type, arg1: string, ...arg2: (any)[]): T
public "readTree"(arg0: $JsonParser$Type): $JsonNode
public "hasSomeOfFeatures"(arg0: integer): boolean
public "getBase64Variant"(): $Base64Variant
public "getContextualType"(): $JavaType
public "findCoercionAction"(arg0: $LogicalType$Type, arg1: $Class$Type<(any)>, arg2: $CoercionInputShape$Type): $CoercionAction
public "getArrayBuilders"(): $ArrayBuilders
public "constructCalendar"(arg0: $Date$Type): $Calendar
public "returnObjectBuffer"(arg0: $ObjectBuffer$Type): void
public "readPropertyValue"<T>(arg0: $JsonParser$Type, arg1: $BeanProperty$Type, arg2: $JavaType$Type): T
public "readPropertyValue"<T>(arg0: $JsonParser$Type, arg1: $BeanProperty$Type, arg2: $Class$Type<(T)>): T
public "leaseObjectBuffer"(): $ObjectBuffer
public "handleWeirdKey"(arg0: $Class$Type<(any)>, arg1: string, arg2: string, ...arg3: (any)[]): any
public "parseDate"(arg0: string): $Date
public "readTreeAsValue"<T>(arg0: $JsonNode$Type, arg1: $Class$Type<(T)>): T
public "readTreeAsValue"<T>(arg0: $JsonNode$Type, arg1: $JavaType$Type): T
public "reportBadCoercion"<T>(arg0: $JsonDeserializer$Type<(any)>, arg1: $Class$Type<(any)>, arg2: any, arg3: string, ...arg4: (any)[]): T
public "handleBadMerge"(arg0: $JsonDeserializer$Type<(any)>): void
public "weirdKeyException"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): $JsonMappingException
/**
 * 
 * @deprecated
 */
public "reportBadMerge"<T>(arg0: $JsonDeserializer$Type<(any)>): T
public "getTypeFactory"(): $TypeFactory
public "getNodeFactory"(): $JsonNodeFactory
public "constructType"(arg0: $Class$Type<(any)>): $JavaType
public "getActiveView"(): $Class<(any)>
public "findObjectId"(arg0: any, arg1: $ObjectIdGenerator$Type<(any)>, arg2: $ObjectIdResolver$Type): $ReadableObjectId
/**
 * 
 * @deprecated
 */
public "mappingException"(arg0: string, ...arg1: (any)[]): $JsonMappingException
/**
 * 
 * @deprecated
 */
public "mappingException"(arg0: $Class$Type<(any)>): $JsonMappingException
/**
 * 
 * @deprecated
 */
public "mappingException"(arg0: string): $JsonMappingException
/**
 * 
 * @deprecated
 */
public "mappingException"(arg0: $Class$Type<(any)>, arg1: $JsonToken$Type): $JsonMappingException
public "findInjectableValue"(arg0: any, arg1: $BeanProperty$Type, arg2: any): any
public "findKeyDeserializer"(arg0: $JavaType$Type, arg1: $BeanProperty$Type): $KeyDeserializer
public "keyDeserializerInstance"(arg0: $Annotated$Type, arg1: any): $KeyDeserializer
public "deserializerInstance"(arg0: $Annotated$Type, arg1: any): $JsonDeserializer<(any)>
public "weirdStringException"(arg0: string, arg1: $Class$Type<(any)>, arg2: string): $JsonMappingException
public "handleUnexpectedToken"(arg0: $Class$Type<(any)>, arg1: $JsonParser$Type): any
public "handleUnexpectedToken"(arg0: $Class$Type<(any)>, arg1: $JsonToken$Type, arg2: $JsonParser$Type, arg3: string, ...arg4: (any)[]): any
public "handleUnexpectedToken"(arg0: $JavaType$Type, arg1: $JsonParser$Type): any
public "handleUnexpectedToken"(arg0: $JavaType$Type, arg1: $JsonToken$Type, arg2: $JsonParser$Type, arg3: string, ...arg4: (any)[]): any
public "findCoercionFromBlankString"(arg0: $LogicalType$Type, arg1: $Class$Type<(any)>, arg2: $CoercionAction$Type): $CoercionAction
public "weirdNativeValueException"(arg0: any, arg1: $Class$Type<(any)>): $JsonMappingException
public "instantiationException"(arg0: $Class$Type<(any)>, arg1: string): $JsonMappingException
public "instantiationException"(arg0: $Class$Type<(any)>, arg1: $Throwable$Type): $JsonMappingException
public "handleWeirdNativeValue"(arg0: $JavaType$Type, arg1: any, arg2: $JsonParser$Type): any
public "reportPropertyInputMismatch"<T>(arg0: $Class$Type<(any)>, arg1: string, arg2: string, ...arg3: (any)[]): T
public "reportPropertyInputMismatch"<T>(arg0: $JavaType$Type, arg1: string, arg2: string, ...arg3: (any)[]): T
public "getDeserializationFeatures"(): integer
public "weirdNumberException"(arg0: number, arg1: $Class$Type<(any)>, arg2: string): $JsonMappingException
public "handleWeirdNumberValue"(arg0: $Class$Type<(any)>, arg1: number, arg2: string, ...arg3: (any)[]): any
public "handleUnknownTypeId"(arg0: $JavaType$Type, arg1: string, arg2: $TypeIdResolver$Type, arg3: string): $JavaType
public "handleWeirdStringValue"(arg0: $Class$Type<(any)>, arg1: string, arg2: string, ...arg3: (any)[]): any
public "wrongTokenException"(arg0: $JsonParser$Type, arg1: $JavaType$Type, arg2: $JsonToken$Type, arg3: string): $JsonMappingException
public "wrongTokenException"(arg0: $JsonParser$Type, arg1: $Class$Type<(any)>, arg2: $JsonToken$Type, arg3: string): $JsonMappingException
/**
 * 
 * @deprecated
 */
public "wrongTokenException"(arg0: $JsonParser$Type, arg1: $JsonToken$Type, arg2: string): $JsonMappingException
public "hasDeserializationFeatures"(arg0: integer): boolean
public "bufferForInputBuffering"(): $TokenBuffer
public "bufferForInputBuffering"(arg0: $JsonParser$Type): $TokenBuffer
public "handleMissingInstantiator"(arg0: $Class$Type<(any)>, arg1: $ValueInstantiator$Type, arg2: $JsonParser$Type, arg3: string, ...arg4: (any)[]): any
public "findNonContextualValueDeserializer"(arg0: $JavaType$Type): $JsonDeserializer<(any)>
/**
 * 
 * @deprecated
 */
public "reportUnknownProperty"(arg0: any, arg1: string, arg2: $JsonDeserializer$Type<(any)>): void
public "missingTypeIdException"(arg0: $JavaType$Type, arg1: string): $JsonMappingException
/**
 * 
 * @deprecated
 */
public "unknownTypeException"(arg0: $JavaType$Type, arg1: string, arg2: string): $JsonMappingException
public "bufferAsCopyOfValue"(arg0: $JsonParser$Type): $TokenBuffer
public "handleInstantiationProblem"(arg0: $Class$Type<(any)>, arg1: any, arg2: $Throwable$Type): any
public "reportUnresolvedObjectId"<T>(arg0: $ObjectIdReader$Type, arg1: any): T
public "handleMissingTypeId"(arg0: $JavaType$Type, arg1: $TypeIdResolver$Type, arg2: string): $JavaType
/**
 * 
 * @deprecated
 */
public "reportWrongTokenException"(arg0: $JsonParser$Type, arg1: $JsonToken$Type, arg2: string, ...arg3: (any)[]): void
public "reportWrongTokenException"(arg0: $JsonDeserializer$Type<(any)>, arg1: $JsonToken$Type, arg2: string, ...arg3: (any)[]): void
public "reportWrongTokenException"(arg0: $Class$Type<(any)>, arg1: $JsonToken$Type, arg2: string, ...arg3: (any)[]): void
public "reportWrongTokenException"(arg0: $JavaType$Type, arg1: $JsonToken$Type, arg2: string, ...arg3: (any)[]): void
public "findContextualValueDeserializer"(arg0: $JavaType$Type, arg1: $BeanProperty$Type): $JsonDeserializer<(any)>
public "handleUnknownProperty"(arg0: $JsonParser$Type, arg1: $JsonDeserializer$Type<(any)>, arg2: any, arg3: string): boolean
/**
 * 
 * @deprecated
 */
public "reportMappingException"(arg0: string, ...arg1: (any)[]): void
/**
 * 
 * @deprecated
 */
public "endOfInputException"(arg0: $Class$Type<(any)>): $JsonMappingException
/**
 * 
 * @deprecated
 */
public "reportMissingContent"(arg0: string, ...arg1: (any)[]): void
public "extractScalarFromObject"(arg0: $JsonParser$Type, arg1: $JsonDeserializer$Type<(any)>, arg2: $Class$Type<(any)>): string
public "handlePrimaryContextualization"(arg0: $JsonDeserializer$Type<(any)>, arg1: $BeanProperty$Type, arg2: $JavaType$Type): $JsonDeserializer<(any)>
public "handleSecondaryContextualization"(arg0: $JsonDeserializer$Type<(any)>, arg1: $BeanProperty$Type, arg2: $JavaType$Type): $JsonDeserializer<(any)>
public "reportBadPropertyDefinition"<T>(arg0: $BeanDescription$Type, arg1: $BeanPropertyDefinition$Type, arg2: string, ...arg3: (any)[]): T
public "reportBadTypeDefinition"<T>(arg0: $BeanDescription$Type, arg1: string, ...arg2: (any)[]): T
public "getAnnotationIntrospector"(): $AnnotationIntrospector
public "hasValueDeserializerFor"(arg0: $JavaType$Type, arg1: $AtomicReference$Type<($Throwable$Type)>): boolean
public "reportTrailingTokens"<T>(arg0: $Class$Type<(any)>, arg1: $JsonParser$Type, arg2: $JsonToken$Type): T
public "findRootValueDeserializer"(arg0: $JavaType$Type): $JsonDeserializer<(any)>
public "checkUnresolvedObjectId"(): void
public "canOverrideAccessModifiers"(): boolean
public "reportBadDefinition"<T>(arg0: $JavaType$Type, arg1: string): T
public "getDefaultPropertyFormat"(arg0: $Class$Type<(any)>): $JsonFormat$Value
public "invalidTypeIdException"(arg0: $JavaType$Type, arg1: string, arg2: string): $JsonMappingException
public "constructSpecializedType"(arg0: $JavaType$Type, arg1: $Class$Type<(any)>): $JavaType
get "factory"(): $DeserializerFactory
get "timeZone"(): $TimeZone
get "locale"(): $Locale
get "parser"(): $JsonParser
get "base64Variant"(): $Base64Variant
get "contextualType"(): $JavaType
get "arrayBuilders"(): $ArrayBuilders
get "typeFactory"(): $TypeFactory
get "nodeFactory"(): $JsonNodeFactory
get "activeView"(): $Class<(any)>
get "deserializationFeatures"(): integer
get "annotationIntrospector"(): $AnnotationIntrospector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeserializationContext$Type = ($DeserializationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeserializationContext_ = $DeserializationContext$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$ShortBuilder" {
import {$PrimitiveArrayBuilder, $PrimitiveArrayBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$PrimitiveArrayBuilder"

export class $ArrayBuilders$ShortBuilder extends $PrimitiveArrayBuilder<((short)[])> {

constructor()

public "_constructArray"(arg0: integer): (short)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayBuilders$ShortBuilder$Type = ($ArrayBuilders$ShortBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayBuilders$ShortBuilder_ = $ArrayBuilders$ShortBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/dataformat/cbor/$CBORParser" {
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$ByteQuadsCanonicalizer, $ByteQuadsCanonicalizer$Type} from "packages/com/fasterxml/jackson/core/sym/$ByteQuadsCanonicalizer"
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$StreamReadCapability, $StreamReadCapability$Type} from "packages/com/fasterxml/jackson/core/$StreamReadCapability"
import {$JsonParser$NumberType, $JsonParser$NumberType$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$NumberType"
import {$JsonLocation, $JsonLocation$Type} from "packages/com/fasterxml/jackson/core/$JsonLocation"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$IOContext, $IOContext$Type} from "packages/com/fasterxml/jackson/core/io/$IOContext"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$JacksonFeatureSet, $JacksonFeatureSet$Type} from "packages/com/fasterxml/jackson/core/util/$JacksonFeatureSet"
import {$ParserMinimalBase, $ParserMinimalBase$Type} from "packages/com/fasterxml/jackson/core/base/$ParserMinimalBase"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"

export class $CBORParser extends $ParserMinimalBase {

constructor(arg0: $IOContext$Type, arg1: integer, arg2: integer, arg3: $ObjectCodec$Type, arg4: $ByteQuadsCanonicalizer$Type, arg5: $InputStream$Type, arg6: (byte)[], arg7: integer, arg8: integer, arg9: boolean)

public "version"(): $Version
public "nextToken"(): $JsonToken
public "close"(): void
public "isNaN"(): boolean
public "getText"(arg0: $Writer$Type): integer
public "getText"(): string
public "getTextLength"(): integer
public "isClosed"(): boolean
public "getNumberValue"(): number
public "getCodec"(): $ObjectCodec
public "getNumberType"(): $JsonParser$NumberType
public "getIntValue"(): integer
public "getDoubleValue"(): double
public "getFloatValue"(): float
public "getLongValue"(): long
public "getCurrentTag"(): integer
public "_decodeSimpleValue"(arg0: integer, arg1: integer): $JsonToken
public "getFormatFeatures"(): integer
public "getTokenLocation"(): $JsonLocation
public "hasTextCharacters"(): boolean
public "getCurrentName"(): string
public "getBigIntegerValue"(): $BigInteger
public "getTextOffset"(): integer
public "getDecimalValue"(): $BigDecimal
public "getTextCharacters"(): (character)[]
public "getEmbeddedObject"(): any
public "getCurrentLocation"(): $JsonLocation
public "nextFieldName"(arg0: $SerializableString$Type): boolean
public "nextFieldName"(): string
public "nextIntValue"(arg0: integer): integer
public "getBinaryValue"(arg0: $Base64Variant$Type): (byte)[]
public "nextTextValue"(): string
public "getInputSource"(): any
public "readBinaryValue"(arg0: $Base64Variant$Type, arg1: $OutputStream$Type): integer
public "nextBooleanValue"(): boolean
public "nextLongValue"(arg0: long): long
public "finishToken"(): void
public "releaseBuffered"(arg0: $OutputStream$Type): integer
public "getValueAsString"(): string
public "getValueAsString"(arg0: string): string
public "setCodec"(arg0: $ObjectCodec$Type): void
public "getReadCapabilities"(): $JacksonFeatureSet<($StreamReadCapability)>
public "overrideCurrentName"(arg0: string): void
public "getNumberValueExact"(): number
get "naN"(): boolean
get "text"(): string
get "textLength"(): integer
get "closed"(): boolean
get "numberValue"(): number
get "codec"(): $ObjectCodec
get "numberType"(): $JsonParser$NumberType
get "intValue"(): integer
get "doubleValue"(): double
get "floatValue"(): float
get "longValue"(): long
get "currentTag"(): integer
get "formatFeatures"(): integer
get "tokenLocation"(): $JsonLocation
get "currentName"(): string
get "bigIntegerValue"(): $BigInteger
get "textOffset"(): integer
get "decimalValue"(): $BigDecimal
get "textCharacters"(): (character)[]
get "embeddedObject"(): any
get "currentLocation"(): $JsonLocation
get "inputSource"(): any
get "valueAsString"(): string
set "codec"(value: $ObjectCodec$Type)
get "readCapabilities"(): $JacksonFeatureSet<($StreamReadCapability)>
get "numberValueExact"(): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBORParser$Type = ($CBORParser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBORParser_ = $CBORParser$Type;
}}
declare module "packages/com/fasterxml/jackson/core/io/$SerializedString" {
import {$SerializableString, $SerializableString$Type} from "packages/com/fasterxml/jackson/core/$SerializableString"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $SerializedString implements $SerializableString, $Serializable {

constructor(arg0: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getValue"(): string
public "charLength"(): integer
public "asQuotedChars"(): (character)[]
public "asUnquotedUTF8"(): (byte)[]
public "appendQuotedUTF8"(arg0: (byte)[], arg1: integer): integer
public "putQuotedUTF8"(arg0: $ByteBuffer$Type): integer
public "appendUnquotedUTF8"(arg0: (byte)[], arg1: integer): integer
public "writeUnquotedUTF8"(arg0: $OutputStream$Type): integer
public "appendUnquoted"(arg0: (character)[], arg1: integer): integer
public "appendQuoted"(arg0: (character)[], arg1: integer): integer
public "asQuotedUTF8"(): (byte)[]
public "writeQuotedUTF8"(arg0: $OutputStream$Type): integer
public "putUnquotedUTF8"(arg0: $ByteBuffer$Type): integer
get "value"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializedString$Type = ($SerializedString);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializedString_ = $SerializedString$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$StreamReadCapability" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$JacksonFeature, $JacksonFeature$Type} from "packages/com/fasterxml/jackson/core/util/$JacksonFeature"

export class $StreamReadCapability extends $Enum<($StreamReadCapability)> implements $JacksonFeature {
static readonly "DUPLICATE_PROPERTIES": $StreamReadCapability
static readonly "SCALARS_AS_OBJECTS": $StreamReadCapability
static readonly "UNTYPED_SCALARS": $StreamReadCapability
static readonly "EXACT_FLOATS": $StreamReadCapability


public static "values"(): ($StreamReadCapability)[]
public static "valueOf"(arg0: string): $StreamReadCapability
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "enabledIn"(arg0: integer): boolean
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamReadCapability$Type = (("exact_floats") | ("untyped_scalars") | ("duplicate_properties") | ("scalars_as_objects")) | ($StreamReadCapability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StreamReadCapability_ = $StreamReadCapability$Type;
}}
declare module "packages/com/fasterxml/jackson/core/type/$TypeReference" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export class $TypeReference<T> implements $Comparable<($TypeReference<(T)>)> {


public "compareTo"(arg0: $TypeReference$Type<(T)>): integer
public "getType"(): $Type
get "type"(): $Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeReference$Type<T> = ($TypeReference<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeReference_<T> = $TypeReference$Type<(T)>;
}}
declare module "packages/com/fasterxml/jackson/dataformat/cbor/$CBORParser$Feature" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FormatFeature, $FormatFeature$Type} from "packages/com/fasterxml/jackson/core/$FormatFeature"

export class $CBORParser$Feature extends $Enum<($CBORParser$Feature)> implements $FormatFeature {


public static "values"(): ($CBORParser$Feature)[]
public static "valueOf"(arg0: string): $CBORParser$Feature
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "enabledIn"(arg0: integer): boolean
public static "collectDefaults"(): integer
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBORParser$Feature$Type = (never) | ($CBORParser$Feature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBORParser$Feature_ = $CBORParser$Feature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedField" {
import {$Member, $Member$Type} from "packages/java/lang/reflect/$Member"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$AnnotationMap, $AnnotationMap$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotationMap"
import {$TypeResolutionContext, $TypeResolutionContext$Type} from "packages/com/fasterxml/jackson/databind/introspect/$TypeResolutionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $AnnotatedField extends $AnnotatedMember implements $Serializable {

constructor(arg0: $TypeResolutionContext$Type, arg1: $Field$Type, arg2: $AnnotationMap$Type)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): integer
public "getValue"(arg0: any): any
public "getDeclaringClass"(): $Class<(any)>
public "setValue"(arg0: any, arg1: any): void
public "getType"(): $JavaType
public "getRawType"(): $Class<(any)>
public "isTransient"(): boolean
public "getMember"(): $Member
public "getAnnotationCount"(): integer
get "name"(): string
get "modifiers"(): integer
get "declaringClass"(): $Class<(any)>
get "type"(): $JavaType
get "rawType"(): $Class<(any)>
get "transient"(): boolean
get "member"(): $Member
get "annotationCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedField$Type = ($AnnotatedField);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotatedField_ = $AnnotatedField$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$RootNameLookup" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"

export class $RootNameLookup implements $Serializable {

constructor()

public "findRootName"(arg0: $JavaType$Type, arg1: $MapperConfig$Type<(any)>): $PropertyName
public "findRootName"(arg0: $Class$Type<(any)>, arg1: $MapperConfig$Type<(any)>): $PropertyName
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootNameLookup$Type = ($RootNameLookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RootNameLookup_ = $RootNameLookup$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$MapperBuilder" {
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$ContextAttributes, $ContextAttributes$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ContextAttributes"
import {$TokenStreamFactory, $TokenStreamFactory$Type} from "packages/com/fasterxml/jackson/core/$TokenStreamFactory"
import {$JsonTypeInfo$As, $JsonTypeInfo$As$Type} from "packages/com/fasterxml/jackson/annotation/$JsonTypeInfo$As"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$SerializationFeature, $SerializationFeature$Type} from "packages/com/fasterxml/jackson/databind/$SerializationFeature"
import {$TypeResolverBuilder, $TypeResolverBuilder$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeResolverBuilder"
import {$FilterProvider, $FilterProvider$Type} from "packages/com/fasterxml/jackson/databind/ser/$FilterProvider"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ObjectMapper$DefaultTyping, $ObjectMapper$DefaultTyping$Type} from "packages/com/fasterxml/jackson/databind/$ObjectMapper$DefaultTyping"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DeserializationFeature, $DeserializationFeature$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationFeature"
import {$JsonAutoDetect$Visibility, $JsonAutoDetect$Visibility$Type} from "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect$Visibility"
import {$JsonSetter$Value, $JsonSetter$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonSetter$Value"
import {$JsonNodeFactory, $JsonNodeFactory$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeFactory"
import {$SerializerFactory, $SerializerFactory$Type} from "packages/com/fasterxml/jackson/databind/ser/$SerializerFactory"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$PropertyAccessor, $PropertyAccessor$Type} from "packages/com/fasterxml/jackson/annotation/$PropertyAccessor"
import {$NamedType, $NamedType$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$NamedType"
import {$StreamWriteFeature, $StreamWriteFeature$Type} from "packages/com/fasterxml/jackson/core/$StreamWriteFeature"
import {$LogicalType, $LogicalType$Type} from "packages/com/fasterxml/jackson/databind/type/$LogicalType"
import {$JsonGenerator$Feature, $JsonGenerator$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator$Feature"
import {$DateFormat, $DateFormat$Type} from "packages/java/text/$DateFormat"
import {$DeserializationProblemHandler, $DeserializationProblemHandler$Type} from "packages/com/fasterxml/jackson/databind/deser/$DeserializationProblemHandler"
import {$MutableConfigOverride, $MutableConfigOverride$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MutableConfigOverride"
import {$PrettyPrinter, $PrettyPrinter$Type} from "packages/com/fasterxml/jackson/core/$PrettyPrinter"
import {$JsonInclude$Include, $JsonInclude$Include$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Include"
import {$InjectableValues, $InjectableValues$Type} from "packages/com/fasterxml/jackson/databind/$InjectableValues"
import {$AccessorNamingStrategy$Provider, $AccessorNamingStrategy$Provider$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AccessorNamingStrategy$Provider"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$MapperFeature, $MapperFeature$Type} from "packages/com/fasterxml/jackson/databind/$MapperFeature"
import {$HandlerInstantiator, $HandlerInstantiator$Type} from "packages/com/fasterxml/jackson/databind/cfg/$HandlerInstantiator"
import {$ObjectMapper, $ObjectMapper$Type} from "packages/com/fasterxml/jackson/databind/$ObjectMapper"
import {$PolymorphicTypeValidator, $PolymorphicTypeValidator$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$PolymorphicTypeValidator"
import {$ConstructorDetector, $ConstructorDetector$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConstructorDetector"
import {$Module, $Module$Type} from "packages/com/fasterxml/jackson/databind/$Module"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ClassLoader, $ClassLoader$Type} from "packages/java/lang/$ClassLoader"
import {$StreamReadFeature, $StreamReadFeature$Type} from "packages/com/fasterxml/jackson/core/$StreamReadFeature"
import {$PropertyNamingStrategy, $PropertyNamingStrategy$Type} from "packages/com/fasterxml/jackson/databind/$PropertyNamingStrategy"
import {$MutableCoercionConfig, $MutableCoercionConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MutableCoercionConfig"
import {$SubtypeResolver, $SubtypeResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$SubtypeResolver"
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$VisibilityChecker, $VisibilityChecker$Type} from "packages/com/fasterxml/jackson/databind/introspect/$VisibilityChecker"
import {$DatatypeFeature, $DatatypeFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeature"
import {$JsonParser$Feature, $JsonParser$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$Feature"

export class $MapperBuilder<M extends $ObjectMapper, B extends $MapperBuilder<(M), (B)>> {


public "build"(): M
public "addModules"(arg0: $Iterable$Type<(any)>): B
public "addModules"(...arg0: ($Module$Type)[]): B
public "defaultTimeZone"(arg0: $TimeZone$Type): B
public "defaultLocale"(arg0: $Locale$Type): B
public "enable"(...arg0: ($StreamWriteFeature$Type)[]): B
public "enable"(...arg0: ($SerializationFeature$Type)[]): B
public "enable"(...arg0: ($DeserializationFeature$Type)[]): B
public "enable"(...arg0: ($DatatypeFeature$Type)[]): B
public "enable"(...arg0: ($JsonGenerator$Feature$Type)[]): B
public "enable"(...arg0: ($JsonParser$Feature$Type)[]): B
public "enable"(...arg0: ($StreamReadFeature$Type)[]): B
public "enable"(...arg0: ($MapperFeature$Type)[]): B
public "addHandler"(arg0: $DeserializationProblemHandler$Type): B
public "isEnabled"(arg0: $DeserializationFeature$Type): boolean
public "isEnabled"(arg0: $JsonParser$Feature$Type): boolean
public "isEnabled"(arg0: $MapperFeature$Type): boolean
public "isEnabled"(arg0: $SerializationFeature$Type): boolean
public "isEnabled"(arg0: $JsonGenerator$Feature$Type): boolean
public "configure"(arg0: $JsonGenerator$Feature$Type, arg1: boolean): B
public "configure"(arg0: $StreamWriteFeature$Type, arg1: boolean): B
public "configure"(arg0: $StreamReadFeature$Type, arg1: boolean): B
public "configure"(arg0: $MapperFeature$Type, arg1: boolean): B
public "configure"(arg0: $SerializationFeature$Type, arg1: boolean): B
public "configure"(arg0: $DeserializationFeature$Type, arg1: boolean): B
public "configure"(arg0: $DatatypeFeature$Type, arg1: boolean): B
public "configure"(arg0: $JsonParser$Feature$Type, arg1: boolean): B
public "disable"(...arg0: ($JsonGenerator$Feature$Type)[]): B
public "disable"(...arg0: ($SerializationFeature$Type)[]): B
public "disable"(...arg0: ($JsonParser$Feature$Type)[]): B
public "disable"(...arg0: ($MapperFeature$Type)[]): B
public "disable"(...arg0: ($StreamReadFeature$Type)[]): B
public "disable"(...arg0: ($DatatypeFeature$Type)[]): B
public "disable"(...arg0: ($StreamWriteFeature$Type)[]): B
public "disable"(...arg0: ($DeserializationFeature$Type)[]): B
public "visibility"(arg0: $VisibilityChecker$Type<(any)>): B
public "visibility"(arg0: $PropertyAccessor$Type, arg1: $JsonAutoDetect$Visibility$Type): B
public "accessorNaming"(arg0: $AccessorNamingStrategy$Provider$Type): B
public "serializerFactory"(arg0: $SerializerFactory$Type): B
public "typeFactory"(arg0: $TypeFactory$Type): B
public "addModule"(arg0: $Module$Type): B
public "addMixIn"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>): B
public static "findModules"(): $List<($Module)>
public static "findModules"(arg0: $ClassLoader$Type): $List<($Module)>
public "injectableValues"(arg0: $InjectableValues$Type): B
public "registerSubtypes"(...arg0: ($Class$Type<(any)>)[]): B
public "registerSubtypes"(arg0: $Collection$Type<($Class$Type<(any)>)>): B
public "registerSubtypes"(...arg0: ($NamedType$Type)[]): B
public "setDefaultTyping"(arg0: $TypeResolverBuilder$Type<(any)>): B
public "filterProvider"(arg0: $FilterProvider$Type): B
public "nodeFactory"(arg0: $JsonNodeFactory$Type): B
public "streamFactory"(): $TokenStreamFactory
public "annotationIntrospector"(arg0: $AnnotationIntrospector$Type): B
public "activateDefaultTyping"(arg0: $PolymorphicTypeValidator$Type, arg1: $ObjectMapper$DefaultTyping$Type): B
public "activateDefaultTyping"(arg0: $PolymorphicTypeValidator$Type, arg1: $ObjectMapper$DefaultTyping$Type, arg2: $JsonTypeInfo$As$Type): B
public "activateDefaultTyping"(arg0: $PolymorphicTypeValidator$Type): B
public "activateDefaultTypingAsProperty"(arg0: $PolymorphicTypeValidator$Type, arg1: $ObjectMapper$DefaultTyping$Type, arg2: string): B
public "deactivateDefaultTyping"(): B
public "clearProblemHandlers"(): B
public "defaultAttributes"(arg0: $ContextAttributes$Type): B
public "withConfigOverride"(arg0: $Class$Type<(any)>, arg1: $Consumer$Type<($MutableConfigOverride$Type)>): B
public "findAndAddModules"(): B
public "subtypeResolver"(arg0: $SubtypeResolver$Type): B
public "withCoercionConfig"(arg0: $LogicalType$Type, arg1: $Consumer$Type<($MutableCoercionConfig$Type)>): B
public "withCoercionConfig"(arg0: $Class$Type<(any)>, arg1: $Consumer$Type<($MutableCoercionConfig$Type)>): B
public "defaultDateFormat"(arg0: $DateFormat$Type): B
public "defaultMergeable"(arg0: boolean): B
public "defaultLeniency"(arg0: boolean): B
public "removeMixIn"(arg0: $Class$Type<(any)>): B
public "defaultSetterInfo"(arg0: $JsonSetter$Value$Type): B
public "defaultBase64Variant"(arg0: $Base64Variant$Type): B
public "withCoercionConfigDefaults"(arg0: $Consumer$Type<($MutableCoercionConfig$Type)>): B
public "handlerInstantiator"(arg0: $HandlerInstantiator$Type): B
public "propertyNamingStrategy"(arg0: $PropertyNamingStrategy$Type): B
public "defaultPrettyPrinter"(arg0: $PrettyPrinter$Type): B
public "constructorDetector"(arg0: $ConstructorDetector$Type): B
public "polymorphicTypeValidator"(arg0: $PolymorphicTypeValidator$Type): B
public "defaultPropertyInclusion"(arg0: $JsonInclude$Value$Type): B
public "serializationInclusion"(arg0: $JsonInclude$Include$Type): B
set "defaultTyping"(value: $TypeResolverBuilder$Type<(any)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapperBuilder$Type<M, B> = ($MapperBuilder<(M), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapperBuilder_<M, B> = $MapperBuilder$Type<(M), (B)>;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonFactory$Feature" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$JacksonFeature, $JacksonFeature$Type} from "packages/com/fasterxml/jackson/core/util/$JacksonFeature"

export class $JsonFactory$Feature extends $Enum<($JsonFactory$Feature)> implements $JacksonFeature {
static readonly "INTERN_FIELD_NAMES": $JsonFactory$Feature
static readonly "CANONICALIZE_FIELD_NAMES": $JsonFactory$Feature
static readonly "FAIL_ON_SYMBOL_HASH_OVERFLOW": $JsonFactory$Feature
static readonly "USE_THREAD_LOCAL_FOR_BUFFER_RECYCLING": $JsonFactory$Feature


public static "values"(): ($JsonFactory$Feature)[]
public static "valueOf"(arg0: string): $JsonFactory$Feature
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "enabledIn"(arg0: integer): boolean
public static "collectDefaults"(): integer
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFactory$Feature$Type = (("intern_field_names") | ("fail_on_symbol_hash_overflow") | ("canonicalize_field_names") | ("use_thread_local_for_buffer_recycling")) | ($JsonFactory$Feature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFactory$Feature_ = $JsonFactory$Feature$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$ObjectNode" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$JsonNodeFactory, $JsonNodeFactory$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeFactory"
import {$TypeSerializer, $TypeSerializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeSerializer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$ArrayNode, $ArrayNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ArrayNode"
import {$RawValue, $RawValue$Type} from "packages/com/fasterxml/jackson/databind/util/$RawValue"
import {$ContainerNode, $ContainerNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ContainerNode"
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$JsonNodeType, $JsonNodeType$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeType"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $ObjectNode extends $ContainerNode<($ObjectNode)> implements $Serializable {

constructor(arg0: $JsonNodeFactory$Type)
constructor(arg0: $JsonNodeFactory$Type, arg1: $Map$Type<(string), ($JsonNode$Type)>)

public "remove"(arg0: string): $JsonNode
public "remove"(arg0: $Collection$Type<(string)>): $ObjectNode
public "get"(arg0: string): $JsonNode
public "get"(arg0: integer): $JsonNode
public "put"(arg0: string, arg1: boolean): $ObjectNode
public "put"(arg0: string, arg1: float): $ObjectNode
public "put"(arg0: string, arg1: float): $ObjectNode
public "put"(arg0: string, arg1: $BigInteger$Type): $ObjectNode
public "put"(arg0: string, arg1: $BigDecimal$Type): $ObjectNode
public "put"(arg0: string, arg1: string): $ObjectNode
public "put"(arg0: string, arg1: double): $ObjectNode
public "put"(arg0: string, arg1: double): $ObjectNode
public "put"(arg0: string, arg1: integer): $ObjectNode
public "put"(arg0: string, arg1: integer): $ObjectNode
public "put"(arg0: string, arg1: short): $ObjectNode
public "put"(arg0: string, arg1: short): $ObjectNode
/**
 * 
 * @deprecated
 */
public "put"(arg0: string, arg1: $JsonNode$Type): $JsonNode
public "put"(arg0: string, arg1: long): $ObjectNode
public "put"(arg0: string, arg1: boolean): $ObjectNode
public "put"(arg0: string, arg1: (byte)[]): $ObjectNode
public "put"(arg0: string, arg1: long): $ObjectNode
public "equals"(arg0: any): boolean
public "equals"(arg0: $Comparator$Type<($JsonNode$Type)>, arg1: $JsonNode$Type): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "isEmpty"(arg0: $SerializerProvider$Type): boolean
public "replace"(arg0: string, arg1: $JsonNode$Type): $JsonNode
public "size"(): integer
public "elements"(): $Iterator<($JsonNode)>
/**
 * 
 * @deprecated
 */
public "putAll"(arg0: $Map$Type<(string), (any)>): $JsonNode
/**
 * 
 * @deprecated
 */
public "putAll"(arg0: $ObjectNode$Type): $JsonNode
public "fields"(): $Iterator<($Map$Entry<(string), ($JsonNode)>)>
public "putIfAbsent"(arg0: string, arg1: $JsonNode$Type): $JsonNode
public "set"<T extends $JsonNode>(arg0: string, arg1: $JsonNode$Type): T
public "putObject"(arg0: string): $ObjectNode
public "path"(arg0: integer): $JsonNode
public "path"(arg0: string): $JsonNode
public "fieldNames"(): $Iterator<(string)>
public "setAll"<T extends $JsonNode>(arg0: $Map$Type<(string), (any)>): T
public "setAll"<T extends $JsonNode>(arg0: $ObjectNode$Type): T
public "putArray"(arg0: string): $ArrayNode
/**
 * 
 * @deprecated
 */
public "with"(arg0: string): $ObjectNode
public "findValue"(arg0: string): $JsonNode
public "getNodeType"(): $JsonNodeType
public "putNull"(arg0: string): $ObjectNode
public "without"<T extends $JsonNode>(arg0: string): T
public "without"<T extends $JsonNode>(arg0: $Collection$Type<(string)>): T
public "serialize"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type): void
public "deepCopy"(): $ObjectNode
public "isObject"(): boolean
public "required"(arg0: string): $JsonNode
public "asToken"(): $JsonToken
public "retain"(...arg0: (string)[]): $ObjectNode
public "retain"(arg0: $Collection$Type<(string)>): $ObjectNode
public "serializeWithType"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type, arg2: $TypeSerializer$Type): void
public "findParent"(arg0: string): $ObjectNode
public "findValuesAsText"(arg0: string, arg1: $List$Type<(string)>): $List<(string)>
public "findParents"(arg0: string, arg1: $List$Type<($JsonNode$Type)>): $List<($JsonNode)>
public "findValues"(arg0: string, arg1: $List$Type<($JsonNode$Type)>): $List<($JsonNode)>
public "putRawValue"(arg0: string, arg1: $RawValue$Type): $ObjectNode
public "putPOJO"(arg0: string, arg1: any): $ObjectNode
get "empty"(): boolean
set "all"(value: $Map$Type<(string), (any)>)
set "all"(value: $ObjectNode$Type)
get "nodeType"(): $JsonNodeType
get "object"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectNode$Type = ($ObjectNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectNode_ = $ObjectNode$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$StreamWriteFeature" {
import {$JsonGenerator$Feature, $JsonGenerator$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator$Feature"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$JacksonFeature, $JacksonFeature$Type} from "packages/com/fasterxml/jackson/core/util/$JacksonFeature"

export class $StreamWriteFeature extends $Enum<($StreamWriteFeature)> implements $JacksonFeature {
static readonly "AUTO_CLOSE_TARGET": $StreamWriteFeature
static readonly "AUTO_CLOSE_CONTENT": $StreamWriteFeature
static readonly "FLUSH_PASSED_TO_STREAM": $StreamWriteFeature
static readonly "WRITE_BIGDECIMAL_AS_PLAIN": $StreamWriteFeature
static readonly "STRICT_DUPLICATE_DETECTION": $StreamWriteFeature
static readonly "IGNORE_UNKNOWN": $StreamWriteFeature
static readonly "USE_FAST_DOUBLE_WRITER": $StreamWriteFeature


public static "values"(): ($StreamWriteFeature)[]
public static "valueOf"(arg0: string): $StreamWriteFeature
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "mappedFeature"(): $JsonGenerator$Feature
public "enabledIn"(arg0: integer): boolean
public static "collectDefaults"(): integer
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamWriteFeature$Type = (("flush_passed_to_stream") | ("strict_duplicate_detection") | ("ignore_unknown") | ("use_fast_double_writer") | ("write_bigdecimal_as_plain") | ("auto_close_target") | ("auto_close_content")) | ($StreamWriteFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StreamWriteFeature_ = $StreamWriteFeature$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$ObjectIdResolver" {
import {$ObjectIdGenerator$IdKey, $ObjectIdGenerator$IdKey$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator$IdKey"

export interface $ObjectIdResolver {

 "bindItem"(arg0: $ObjectIdGenerator$IdKey$Type, arg1: any): void
 "resolveId"(arg0: $ObjectIdGenerator$IdKey$Type): any
 "canUseFor"(arg0: $ObjectIdResolver$Type): boolean
 "newForDeserialization"(arg0: any): $ObjectIdResolver
}

export namespace $ObjectIdResolver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectIdResolver$Type = ($ObjectIdResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectIdResolver_ = $ObjectIdResolver$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/node/$BooleanNode" {
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$ValueNode, $ValueNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ValueNode"
import {$JsonNodeType, $JsonNodeType$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeType"

export class $BooleanNode extends $ValueNode {
static readonly "TRUE": $BooleanNode
static readonly "FALSE": $BooleanNode


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "booleanValue"(): boolean
public static "valueOf"(arg0: boolean): $BooleanNode
public "asInt"(arg0: integer): integer
public "getNodeType"(): $JsonNodeType
public "serialize"(arg0: $JsonGenerator$Type, arg1: $SerializerProvider$Type): void
public "asLong"(arg0: long): long
public "asDouble"(arg0: double): double
public "asToken"(): $JsonToken
public "asBoolean"(): boolean
public "asBoolean"(arg0: boolean): boolean
public "asText"(): string
public static "getFalse"(): $BooleanNode
public static "getTrue"(): $BooleanNode
get "nodeType"(): $JsonNodeType
get "false"(): $BooleanNode
get "true"(): $BooleanNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanNode$Type = ($BooleanNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanNode_ = $BooleanNode$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$AnnotationMap" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Annotations, $Annotations$Type} from "packages/com/fasterxml/jackson/databind/util/$Annotations"

export class $AnnotationMap implements $Annotations {

constructor()

public "annotations"(): $Iterable<($Annotation)>
public "add"(arg0: $Annotation$Type): boolean
public "get"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "toString"(): string
public "size"(): integer
public static "of"(arg0: $Class$Type<(any)>, arg1: $Annotation$Type): $AnnotationMap
public static "merge"(arg0: $AnnotationMap$Type, arg1: $AnnotationMap$Type): $AnnotationMap
public "has"(arg0: $Class$Type<(any)>): boolean
public "addIfNotPresent"(arg0: $Annotation$Type): boolean
public "hasOneOf"(arg0: ($Class$Type<(any)>)[]): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotationMap$Type = ($AnnotationMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotationMap_ = $AnnotationMap$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/$Deserializers" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$ArrayType, $ArrayType$Type} from "packages/com/fasterxml/jackson/databind/type/$ArrayType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollectionLikeType, $CollectionLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionLikeType"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$TypeDeserializer, $TypeDeserializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeDeserializer"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"
import {$CollectionType, $CollectionType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionType"
import {$MapLikeType, $MapLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapLikeType"
import {$ReferenceType, $ReferenceType$Type} from "packages/com/fasterxml/jackson/databind/type/$ReferenceType"
import {$MapType, $MapType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapType"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$KeyDeserializer, $KeyDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$KeyDeserializer"

export interface $Deserializers {

 "hasDeserializerFor"(arg0: $DeserializationConfig$Type, arg1: $Class$Type<(any)>): boolean
 "findTreeNodeDeserializer"(arg0: $Class$Type<(any)>, arg1: $DeserializationConfig$Type, arg2: $BeanDescription$Type): $JsonDeserializer<(any)>
 "findArrayDeserializer"(arg0: $ArrayType$Type, arg1: $DeserializationConfig$Type, arg2: $BeanDescription$Type, arg3: $TypeDeserializer$Type, arg4: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
 "findCollectionLikeDeserializer"(arg0: $CollectionLikeType$Type, arg1: $DeserializationConfig$Type, arg2: $BeanDescription$Type, arg3: $TypeDeserializer$Type, arg4: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
 "findReferenceDeserializer"(arg0: $ReferenceType$Type, arg1: $DeserializationConfig$Type, arg2: $BeanDescription$Type, arg3: $TypeDeserializer$Type, arg4: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
 "findBeanDeserializer"(arg0: $JavaType$Type, arg1: $DeserializationConfig$Type, arg2: $BeanDescription$Type): $JsonDeserializer<(any)>
 "findMapDeserializer"(arg0: $MapType$Type, arg1: $DeserializationConfig$Type, arg2: $BeanDescription$Type, arg3: $KeyDeserializer$Type, arg4: $TypeDeserializer$Type, arg5: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
 "findCollectionDeserializer"(arg0: $CollectionType$Type, arg1: $DeserializationConfig$Type, arg2: $BeanDescription$Type, arg3: $TypeDeserializer$Type, arg4: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
 "findMapLikeDeserializer"(arg0: $MapLikeType$Type, arg1: $DeserializationConfig$Type, arg2: $BeanDescription$Type, arg3: $KeyDeserializer$Type, arg4: $TypeDeserializer$Type, arg5: $JsonDeserializer$Type<(any)>): $JsonDeserializer<(any)>
 "findEnumDeserializer"(arg0: $Class$Type<(any)>, arg1: $DeserializationConfig$Type, arg2: $BeanDescription$Type): $JsonDeserializer<(any)>
}

export namespace $Deserializers {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializers$Type = ($Deserializers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deserializers_ = $Deserializers$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$StreamWriteCapability" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$JacksonFeature, $JacksonFeature$Type} from "packages/com/fasterxml/jackson/core/util/$JacksonFeature"

export class $StreamWriteCapability extends $Enum<($StreamWriteCapability)> implements $JacksonFeature {
static readonly "CAN_WRITE_BINARY_NATIVELY": $StreamWriteCapability
static readonly "CAN_WRITE_FORMATTED_NUMBERS": $StreamWriteCapability


public static "values"(): ($StreamWriteCapability)[]
public static "valueOf"(arg0: string): $StreamWriteCapability
public "getMask"(): integer
public "enabledByDefault"(): boolean
public "enabledIn"(arg0: integer): boolean
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamWriteCapability$Type = (("can_write_binary_natively") | ("can_write_formatted_numbers")) | ($StreamWriteCapability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StreamWriteCapability_ = $StreamWriteCapability$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsontype/$NamedType" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $NamedType implements $Serializable {

constructor(arg0: $Class$Type<(any)>, arg1: string)
constructor(arg0: $Class$Type<(any)>)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "setName"(arg0: string): void
public "getType"(): $Class<(any)>
public "hasName"(): boolean
get "name"(): string
set "name"(value: string)
get "type"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedType$Type = ($NamedType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedType_ = $NamedType$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$HandlerInstantiator" {
import {$SerializationConfig, $SerializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$SerializationConfig"
import {$Converter, $Converter$Type} from "packages/com/fasterxml/jackson/databind/util/$Converter"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PropertyNamingStrategy, $PropertyNamingStrategy$Type} from "packages/com/fasterxml/jackson/databind/$PropertyNamingStrategy"
import {$TypeIdResolver, $TypeIdResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeIdResolver"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$ObjectIdGenerator, $ObjectIdGenerator$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdGenerator"
import {$ObjectIdResolver, $ObjectIdResolver$Type} from "packages/com/fasterxml/jackson/annotation/$ObjectIdResolver"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonDeserializer"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"
import {$TypeResolverBuilder, $TypeResolverBuilder$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeResolverBuilder"
import {$ValueInstantiator, $ValueInstantiator$Type} from "packages/com/fasterxml/jackson/databind/deser/$ValueInstantiator"
import {$VirtualBeanPropertyWriter, $VirtualBeanPropertyWriter$Type} from "packages/com/fasterxml/jackson/databind/ser/$VirtualBeanPropertyWriter"
import {$Annotated, $Annotated$Type} from "packages/com/fasterxml/jackson/databind/introspect/$Annotated"
import {$KeyDeserializer, $KeyDeserializer$Type} from "packages/com/fasterxml/jackson/databind/$KeyDeserializer"
import {$BeanPropertyDefinition, $BeanPropertyDefinition$Type} from "packages/com/fasterxml/jackson/databind/introspect/$BeanPropertyDefinition"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializer"

export class $HandlerInstantiator {

constructor()

public "namingStrategyInstance"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type, arg2: $Class$Type<(any)>): $PropertyNamingStrategy
public "converterInstance"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type, arg2: $Class$Type<(any)>): $Converter<(any), (any)>
public "serializerInstance"(arg0: $SerializationConfig$Type, arg1: $Annotated$Type, arg2: $Class$Type<(any)>): $JsonSerializer<(any)>
public "valueInstantiatorInstance"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type, arg2: $Class$Type<(any)>): $ValueInstantiator
public "keyDeserializerInstance"(arg0: $DeserializationConfig$Type, arg1: $Annotated$Type, arg2: $Class$Type<(any)>): $KeyDeserializer
public "deserializerInstance"(arg0: $DeserializationConfig$Type, arg1: $Annotated$Type, arg2: $Class$Type<(any)>): $JsonDeserializer<(any)>
public "typeResolverBuilderInstance"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type, arg2: $Class$Type<(any)>): $TypeResolverBuilder<(any)>
public "virtualPropertyWriterInstance"(arg0: $MapperConfig$Type<(any)>, arg1: $Class$Type<(any)>): $VirtualBeanPropertyWriter
public "typeIdResolverInstance"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type, arg2: $Class$Type<(any)>): $TypeIdResolver
public "includeFilterInstance"(arg0: $SerializationConfig$Type, arg1: $BeanPropertyDefinition$Type, arg2: $Class$Type<(any)>): any
public "objectIdGeneratorInstance"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type, arg2: $Class$Type<(any)>): $ObjectIdGenerator<(any)>
public "resolverIdGeneratorInstance"(arg0: $MapperConfig$Type<(any)>, arg1: $Annotated$Type, arg2: $Class$Type<(any)>): $ObjectIdResolver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandlerInstantiator$Type = ($HandlerInstantiator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandlerInstantiator_ = $HandlerInstantiator$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$ConstructorDetector" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ConstructorDetector$SingleArgConstructor, $ConstructorDetector$SingleArgConstructor$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConstructorDetector$SingleArgConstructor"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $ConstructorDetector implements $Serializable {
static readonly "DEFAULT": $ConstructorDetector
static readonly "USE_PROPERTIES_BASED": $ConstructorDetector
static readonly "USE_DELEGATING": $ConstructorDetector
static readonly "EXPLICIT_ONLY": $ConstructorDetector


public "singleArgMode"(): $ConstructorDetector$SingleArgConstructor
public "shouldIntrospectorImplicitConstructors"(arg0: $Class$Type<(any)>): boolean
public "singleArgCreatorDefaultsToDelegating"(): boolean
public "singleArgCreatorDefaultsToProperties"(): boolean
public "requireCtorAnnotation"(): boolean
public "allowJDKTypeConstructors"(): boolean
public "withRequireAnnotation"(arg0: boolean): $ConstructorDetector
public "withAllowJDKTypeConstructors"(arg0: boolean): $ConstructorDetector
public "withSingleArgMode"(arg0: $ConstructorDetector$SingleArgConstructor$Type): $ConstructorDetector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstructorDetector$Type = ($ConstructorDetector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstructorDetector_ = $ConstructorDetector$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$DeserializationConfig" {
import {$BeanDescription, $BeanDescription$Type} from "packages/com/fasterxml/jackson/databind/$BeanDescription"
import {$LogicalType, $LogicalType$Type} from "packages/com/fasterxml/jackson/databind/type/$LogicalType"
import {$DeserializationProblemHandler, $DeserializationProblemHandler$Type} from "packages/com/fasterxml/jackson/databind/deser/$DeserializationProblemHandler"
import {$TypeDeserializer, $TypeDeserializer$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$TypeDeserializer"
import {$FormatSchema, $FormatSchema$Type} from "packages/com/fasterxml/jackson/core/$FormatSchema"
import {$JsonFactory, $JsonFactory$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory"
import {$MapperConfigBase, $MapperConfigBase$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfigBase"
import {$CoercionConfigs, $CoercionConfigs$Type} from "packages/com/fasterxml/jackson/databind/cfg/$CoercionConfigs"
import {$CoercionInputShape, $CoercionInputShape$Type} from "packages/com/fasterxml/jackson/databind/cfg/$CoercionInputShape"
import {$LinkedNode, $LinkedNode$Type} from "packages/com/fasterxml/jackson/databind/util/$LinkedNode"
import {$SimpleMixInResolver, $SimpleMixInResolver$Type} from "packages/com/fasterxml/jackson/databind/introspect/$SimpleMixInResolver"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$BaseSettings, $BaseSettings$Type} from "packages/com/fasterxml/jackson/databind/cfg/$BaseSettings"
import {$FormatFeature, $FormatFeature$Type} from "packages/com/fasterxml/jackson/core/$FormatFeature"
import {$DeserializationFeature, $DeserializationFeature$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationFeature"
import {$CoercionAction, $CoercionAction$Type} from "packages/com/fasterxml/jackson/databind/cfg/$CoercionAction"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ConstructorDetector, $ConstructorDetector$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConstructorDetector"
import {$ConfigOverrides, $ConfigOverrides$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ConfigOverrides"
import {$JsonNodeFactory, $JsonNodeFactory$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeFactory"
import {$RootNameLookup, $RootNameLookup$Type} from "packages/com/fasterxml/jackson/databind/util/$RootNameLookup"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SubtypeResolver, $SubtypeResolver$Type} from "packages/com/fasterxml/jackson/databind/jsontype/$SubtypeResolver"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$DatatypeFeature, $DatatypeFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeature"
import {$JsonParser$Feature, $JsonParser$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$Feature"
import {$DatatypeFeatures, $DatatypeFeatures$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeatures"

export class $DeserializationConfig extends $MapperConfigBase<($DeserializationFeature), ($DeserializationConfig)> implements $Serializable {

constructor(arg0: $BaseSettings$Type, arg1: $SubtypeResolver$Type, arg2: $SimpleMixInResolver$Type, arg3: $RootNameLookup$Type, arg4: $ConfigOverrides$Type, arg5: $CoercionConfigs$Type, arg6: $DatatypeFeatures$Type)

public "initialize"(arg0: $JsonParser$Type): $JsonParser
public "initialize"(arg0: $JsonParser$Type, arg1: $FormatSchema$Type): $JsonParser
public "with"(arg0: $JsonParser$Feature$Type): $DeserializationConfig
public "with"(arg0: $DeserializationFeature$Type, ...arg1: ($DeserializationFeature$Type)[]): $DeserializationConfig
public "with"(arg0: $DeserializationFeature$Type): $DeserializationConfig
public "with"(arg0: $FormatFeature$Type): $DeserializationConfig
public "with"(arg0: $JsonNodeFactory$Type): $DeserializationConfig
public "with"(arg0: $ConstructorDetector$Type): $DeserializationConfig
public "isEnabled"(arg0: $DatatypeFeature$Type): boolean
public "isEnabled"(arg0: $JsonParser$Feature$Type, arg1: $JsonFactory$Type): boolean
public "isEnabled"(arg0: $DeserializationFeature$Type): boolean
public "without"(arg0: $DeserializationFeature$Type): $DeserializationConfig
public "without"(arg0: $DeserializationFeature$Type, ...arg1: ($DeserializationFeature$Type)[]): $DeserializationConfig
public "without"(arg0: $FormatFeature$Type): $DeserializationConfig
public "without"(arg0: $JsonParser$Feature$Type): $DeserializationConfig
public "getConstructorDetector"(): $ConstructorDetector
public "withFeatures"(...arg0: ($FormatFeature$Type)[]): $DeserializationConfig
public "withFeatures"(...arg0: ($DeserializationFeature$Type)[]): $DeserializationConfig
public "withFeatures"(...arg0: ($JsonParser$Feature$Type)[]): $DeserializationConfig
public "withoutFeatures"(...arg0: ($FormatFeature$Type)[]): $DeserializationConfig
public "withoutFeatures"(...arg0: ($JsonParser$Feature$Type)[]): $DeserializationConfig
public "withoutFeatures"(...arg0: ($DeserializationFeature$Type)[]): $DeserializationConfig
public "requiresFullValue"(): boolean
public "introspect"(arg0: $JavaType$Type): $BeanDescription
public "hasSomeOfFeatures"(arg0: integer): boolean
public "findCoercionAction"(arg0: $LogicalType$Type, arg1: $Class$Type<(any)>, arg2: $CoercionInputShape$Type): $CoercionAction
public "getProblemHandlers"(): $LinkedNode<($DeserializationProblemHandler)>
public "useRootWrapping"(): boolean
public "getNodeFactory"(): $JsonNodeFactory
public "withHandler"(arg0: $DeserializationProblemHandler$Type): $DeserializationConfig
public "withView"(arg0: $Class$Type<(any)>): $DeserializationConfig
public "introspectForCreation"(arg0: $JavaType$Type): $BeanDescription
public "introspectForBuilder"(arg0: $JavaType$Type, arg1: $BeanDescription$Type): $BeanDescription
/**
 * 
 * @deprecated
 */
public "introspectForBuilder"(arg0: $JavaType$Type): $BeanDescription
public "findCoercionFromBlankString"(arg0: $LogicalType$Type, arg1: $Class$Type<(any)>, arg2: $CoercionAction$Type): $CoercionAction
public "getDeserializationFeatures"(): integer
public "hasDeserializationFeatures"(arg0: integer): boolean
public "findTypeDeserializer"(arg0: $JavaType$Type): $TypeDeserializer
public "withNoProblemHandlers"(): $DeserializationConfig
get "constructorDetector"(): $ConstructorDetector
get "problemHandlers"(): $LinkedNode<($DeserializationProblemHandler)>
get "nodeFactory"(): $JsonNodeFactory
get "deserializationFeatures"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeserializationConfig$Type = ($DeserializationConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeserializationConfig_ = $DeserializationConfig$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonSetter" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Nulls, $Nulls$Type} from "packages/com/fasterxml/jackson/annotation/$Nulls"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $JsonSetter extends $Annotation {

 "value"(): string
 "nulls"(): $Nulls
 "contentNulls"(): $Nulls
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $JsonSetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonSetter$Type = ($JsonSetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonSetter_ = $JsonSetter$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/cfg/$ConfigOverride" {
import {$JsonSetter$Value, $JsonSetter$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonSetter$Value"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$JsonIgnoreProperties$Value, $JsonIgnoreProperties$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonIgnoreProperties$Value"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JsonAutoDetect$Value, $JsonAutoDetect$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonAutoDetect$Value"

export class $ConfigOverride {


public static "empty"(): $ConfigOverride
public "getFormat"(): $JsonFormat$Value
public "getVisibility"(): $JsonAutoDetect$Value
public "getInclude"(): $JsonInclude$Value
public "getMergeable"(): boolean
public "getIgnorals"(): $JsonIgnoreProperties$Value
public "getSetterInfo"(): $JsonSetter$Value
public "getIsIgnoredType"(): boolean
public "getIncludeAsProperty"(): $JsonInclude$Value
get "format"(): $JsonFormat$Value
get "visibility"(): $JsonAutoDetect$Value
get "include"(): $JsonInclude$Value
get "mergeable"(): boolean
get "ignorals"(): $JsonIgnoreProperties$Value
get "setterInfo"(): $JsonSetter$Value
get "isIgnoredType"(): boolean
get "includeAsProperty"(): $JsonInclude$Value
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigOverride$Type = ($ConfigOverride);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigOverride_ = $ConfigOverride$Type;
}}
declare module "packages/com/fasterxml/jackson/dataformat/cbor/databind/$CBORMapper$Builder" {
import {$CBORGenerator$Feature, $CBORGenerator$Feature$Type} from "packages/com/fasterxml/jackson/dataformat/cbor/$CBORGenerator$Feature"
import {$MapperBuilder, $MapperBuilder$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperBuilder"
import {$CBORMapper, $CBORMapper$Type} from "packages/com/fasterxml/jackson/dataformat/cbor/databind/$CBORMapper"

export class $CBORMapper$Builder extends $MapperBuilder<($CBORMapper), ($CBORMapper$Builder)> {

constructor(arg0: $CBORMapper$Type)

public "enable"(...arg0: ($CBORGenerator$Feature$Type)[]): $CBORMapper$Builder
public "configure"(arg0: $CBORGenerator$Feature$Type, arg1: boolean): $CBORMapper$Builder
public "disable"(...arg0: ($CBORGenerator$Feature$Type)[]): $CBORMapper$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CBORMapper$Builder$Type = ($CBORMapper$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CBORMapper$Builder_ = $CBORMapper$Builder$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$ArrayBuilders$BooleanBuilder" {
import {$PrimitiveArrayBuilder, $PrimitiveArrayBuilder$Type} from "packages/com/fasterxml/jackson/databind/util/$PrimitiveArrayBuilder"

export class $ArrayBuilders$BooleanBuilder extends $PrimitiveArrayBuilder<((boolean)[])> {

constructor()

public "_constructArray"(arg0: integer): (boolean)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayBuilders$BooleanBuilder$Type = ($ArrayBuilders$BooleanBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayBuilders$BooleanBuilder_ = $ArrayBuilders$BooleanBuilder$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/deser/impl/$ValueInjector" {
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$BeanProperty$Std, $BeanProperty$Std$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty$Std"
import {$Annotations, $Annotations$Type} from "packages/com/fasterxml/jackson/databind/util/$Annotations"

export class $ValueInjector extends $BeanProperty$Std {

constructor(arg0: $PropertyName$Type, arg1: $JavaType$Type, arg2: $AnnotatedMember$Type, arg3: any)
/**
 * 
 * @deprecated
 */
constructor(arg0: $PropertyName$Type, arg1: $JavaType$Type, arg2: $Annotations$Type, arg3: $AnnotatedMember$Type, arg4: any)

public "findValue"(arg0: $DeserializationContext$Type, arg1: any): any
public "inject"(arg0: $DeserializationContext$Type, arg1: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueInjector$Type = ($ValueInjector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueInjector_ = $ValueInjector$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$InjectableValues" {
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"

export class $InjectableValues {

constructor()

public "findInjectableValue"(arg0: any, arg1: $DeserializationContext$Type, arg2: $BeanProperty$Type, arg3: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectableValues$Type = ($InjectableValues);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectableValues_ = $InjectableValues$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value" {
import {$JsonFormat$Feature, $JsonFormat$Feature$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Feature"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$JsonFormat, $JsonFormat$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat"
import {$JsonFormat$Features, $JsonFormat$Features$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Features"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$JacksonAnnotationValue, $JacksonAnnotationValue$Type} from "packages/com/fasterxml/jackson/annotation/$JacksonAnnotationValue"
import {$JsonFormat$Shape, $JsonFormat$Shape$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Shape"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $JsonFormat$Value implements $JacksonAnnotationValue<($JsonFormat)>, $Serializable {

constructor(arg0: string, arg1: $JsonFormat$Shape$Type, arg2: $Locale$Type, arg3: string, arg4: $TimeZone$Type, arg5: $JsonFormat$Features$Type, arg6: boolean)
/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: $JsonFormat$Shape$Type, arg2: $Locale$Type, arg3: string, arg4: $TimeZone$Type, arg5: $JsonFormat$Features$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: $JsonFormat$Shape$Type, arg2: string, arg3: string, arg4: $JsonFormat$Features$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: $JsonFormat$Shape$Type, arg2: $Locale$Type, arg3: $TimeZone$Type, arg4: $JsonFormat$Features$Type)
constructor()
constructor(arg0: $JsonFormat$Type)
constructor(arg0: string, arg1: $JsonFormat$Shape$Type, arg2: string, arg3: string, arg4: $JsonFormat$Features$Type, arg5: boolean)
constructor(arg0: string, arg1: $JsonFormat$Shape$Type, arg2: $Locale$Type, arg3: $TimeZone$Type, arg4: $JsonFormat$Features$Type, arg5: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"(arg0: $JsonFormat$Type): $JsonFormat$Value
public static "merge"(arg0: $JsonFormat$Value$Type, arg1: $JsonFormat$Value$Type): $JsonFormat$Value
public static "empty"(): $JsonFormat$Value
public "getTimeZone"(): $TimeZone
public "isLenient"(): boolean
public "getLocale"(): $Locale
public "withLocale"(arg0: $Locale$Type): $JsonFormat$Value
public "getShape"(): $JsonFormat$Shape
public "getFeature"(arg0: $JsonFormat$Feature$Type): boolean
public "getPattern"(): string
public "withPattern"(arg0: string): $JsonFormat$Value
public static "mergeAll"(...arg0: ($JsonFormat$Value$Type)[]): $JsonFormat$Value
public "getFeatures"(): $JsonFormat$Features
public "withTimeZone"(arg0: $TimeZone$Type): $JsonFormat$Value
public "withLenient"(arg0: boolean): $JsonFormat$Value
public "valueFor"(): $Class<($JsonFormat)>
public "hasLenient"(): boolean
public static "forLeniency"(arg0: boolean): $JsonFormat$Value
public "getLenient"(): boolean
public static "forPattern"(arg0: string): $JsonFormat$Value
public static "forShape"(arg0: $JsonFormat$Shape$Type): $JsonFormat$Value
public "withShape"(arg0: $JsonFormat$Shape$Type): $JsonFormat$Value
public "withFeature"(arg0: $JsonFormat$Feature$Type): $JsonFormat$Value
public "withoutFeature"(arg0: $JsonFormat$Feature$Type): $JsonFormat$Value
public "hasPattern"(): boolean
public "hasLocale"(): boolean
public "timeZoneAsString"(): string
public "hasShape"(): boolean
public "hasTimeZone"(): boolean
public "withOverrides"(arg0: $JsonFormat$Value$Type): $JsonFormat$Value
get "timeZone"(): $TimeZone
get "lenient"(): boolean
get "locale"(): $Locale
get "shape"(): $JsonFormat$Shape
get "pattern"(): string
get "features"(): $JsonFormat$Features
get "lenient"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFormat$Value$Type = ($JsonFormat$Value);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFormat$Value_ = $JsonFormat$Value$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/introspect/$SimpleMixInResolver" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ClassIntrospector$MixInResolver, $ClassIntrospector$MixInResolver$Type} from "packages/com/fasterxml/jackson/databind/introspect/$ClassIntrospector$MixInResolver"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SimpleMixInResolver implements $ClassIntrospector$MixInResolver, $Serializable {

constructor(arg0: $ClassIntrospector$MixInResolver$Type)

public "localSize"(): integer
public "hasMixIns"(): boolean
public "findMixInClassFor"(arg0: $Class$Type<(any)>): $Class<(any)>
public "withOverrides"(arg0: $ClassIntrospector$MixInResolver$Type): $SimpleMixInResolver
public "addLocalDefinition"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>): void
public "withoutLocalDefinitions"(): $SimpleMixInResolver
public "setLocalDefinitions"(arg0: $Map$Type<($Class$Type<(any)>), ($Class$Type<(any)>)>): void
set "localDefinitions"(value: $Map$Type<($Class$Type<(any)>), ($Class$Type<(any)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMixInResolver$Type = ($SimpleMixInResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleMixInResolver_ = $SimpleMixInResolver$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$JsonInclude$Include, $JsonInclude$Include$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Include"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JacksonAnnotationValue, $JacksonAnnotationValue$Type} from "packages/com/fasterxml/jackson/annotation/$JacksonAnnotationValue"
import {$JsonInclude, $JsonInclude$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude"

export class $JsonInclude$Value implements $JacksonAnnotationValue<($JsonInclude)>, $Serializable {

constructor(arg0: $JsonInclude$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"(arg0: $JsonInclude$Type): $JsonInclude$Value
public static "merge"(arg0: $JsonInclude$Value$Type, arg1: $JsonInclude$Value$Type): $JsonInclude$Value
public static "empty"(): $JsonInclude$Value
public static "construct"(arg0: $JsonInclude$Include$Type, arg1: $JsonInclude$Include$Type, arg2: $Class$Type<(any)>, arg3: $Class$Type<(any)>): $JsonInclude$Value
public static "construct"(arg0: $JsonInclude$Include$Type, arg1: $JsonInclude$Include$Type): $JsonInclude$Value
public static "mergeAll"(...arg0: ($JsonInclude$Value$Type)[]): $JsonInclude$Value
public "withValueInclusion"(arg0: $JsonInclude$Include$Type): $JsonInclude$Value
public "valueFor"(): $Class<($JsonInclude)>
public "getValueFilter"(): $Class<(any)>
public "withValueFilter"(arg0: $Class$Type<(any)>): $JsonInclude$Value
public "getContentFilter"(): $Class<(any)>
public "withContentFilter"(arg0: $Class$Type<(any)>): $JsonInclude$Value
public "getValueInclusion"(): $JsonInclude$Include
public "withOverrides"(arg0: $JsonInclude$Value$Type): $JsonInclude$Value
public "withContentInclusion"(arg0: $JsonInclude$Include$Type): $JsonInclude$Value
public "getContentInclusion"(): $JsonInclude$Include
get "valueFilter"(): $Class<(any)>
get "contentFilter"(): $Class<(any)>
get "valueInclusion"(): $JsonInclude$Include
get "contentInclusion"(): $JsonInclude$Include
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonInclude$Value$Type = ($JsonInclude$Value);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonInclude$Value_ = $JsonInclude$Value$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonLocation" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ContentReference, $ContentReference$Type} from "packages/com/fasterxml/jackson/core/io/$ContentReference"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"

export class $JsonLocation implements $Serializable {
/**
 * 
 * @deprecated
 */
static readonly "MAX_CONTENT_SNIPPET": integer
static readonly "NA": $JsonLocation

/**
 * 
 * @deprecated
 */
constructor(arg0: any, arg1: long, arg2: long, arg3: integer, arg4: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: any, arg1: long, arg2: integer, arg3: integer)
constructor(arg0: $ContentReference$Type, arg1: long, arg2: long, arg3: integer, arg4: integer)
constructor(arg0: $ContentReference$Type, arg1: long, arg2: integer, arg3: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLineNr"(): integer
public "contentReference"(): $ContentReference
public "sourceDescription"(): string
public "appendOffsetDescription"(arg0: $StringBuilder$Type): $StringBuilder
public "offsetDescription"(): string
/**
 * 
 * @deprecated
 */
public "getSourceRef"(): any
public "getByteOffset"(): long
public "getColumnNr"(): integer
public "getCharOffset"(): long
get "lineNr"(): integer
get "sourceRef"(): any
get "byteOffset"(): long
get "columnNr"(): integer
get "charOffset"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonLocation$Type = ($JsonLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonLocation_ = $JsonLocation$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$Version" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $Version implements $Comparable<($Version)>, $Serializable {

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Version$Type): integer
public "getMajorVersion"(): integer
public "getMinorVersion"(): integer
public "getGroupId"(): string
public "getArtifactId"(): string
public "isSnapshot"(): boolean
public "isUnknownVersion"(): boolean
public "getPatchLevel"(): integer
public "toFullString"(): string
/**
 * 
 * @deprecated
 */
public "isUknownVersion"(): boolean
public static "unknownVersion"(): $Version
get "majorVersion"(): integer
get "minorVersion"(): integer
get "groupId"(): string
get "artifactId"(): string
get "snapshot"(): boolean
get "patchLevel"(): integer
get "uknownVersion"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Version$Type = ($Version);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Version_ = $Version$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/type/$TypeFactory" {
import {$TypeBindings, $TypeBindings$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBindings"
import {$ArrayType, $ArrayType$Type} from "packages/com/fasterxml/jackson/databind/type/$ArrayType"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$TypeModifier, $TypeModifier$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeModifier"
import {$ClassLoader, $ClassLoader$Type} from "packages/java/lang/$ClassLoader"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LookupCache, $LookupCache$Type} from "packages/com/fasterxml/jackson/databind/util/$LookupCache"
import {$CollectionLikeType, $CollectionLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionLikeType"
import {$TypeReference, $TypeReference$Type} from "packages/com/fasterxml/jackson/core/type/$TypeReference"
import {$CollectionType, $CollectionType$Type} from "packages/com/fasterxml/jackson/databind/type/$CollectionType"
import {$MapLikeType, $MapLikeType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapLikeType"
import {$LRUMap, $LRUMap$Type} from "packages/com/fasterxml/jackson/databind/util/$LRUMap"
import {$MapType, $MapType$Type} from "packages/com/fasterxml/jackson/databind/type/$MapType"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $TypeFactory implements $Serializable {


public "getClassLoader"(): $ClassLoader
public "findClass"(arg0: string): $Class<(any)>
public "clearCache"(): void
public static "rawClass"(arg0: $Type$Type): $Class<(any)>
public static "defaultInstance"(): $TypeFactory
public "findTypeParameters"(arg0: $JavaType$Type, arg1: $Class$Type<(any)>): ($JavaType)[]
/**
 * 
 * @deprecated
 */
public "findTypeParameters"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>): ($JavaType)[]
/**
 * 
 * @deprecated
 */
public "findTypeParameters"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>, arg2: $TypeBindings$Type): ($JavaType)[]
/**
 * 
 * @deprecated
 */
public "constructType"(arg0: $Type$Type, arg1: $JavaType$Type): $JavaType
/**
 * 
 * @deprecated
 */
public "constructType"(arg0: $Type$Type, arg1: $TypeBindings$Type): $JavaType
/**
 * 
 * @deprecated
 */
public "constructType"(arg0: $Type$Type, arg1: $Class$Type<(any)>): $JavaType
public "constructType"(arg0: $Type$Type): $JavaType
public "constructType"(arg0: $TypeReference$Type<(any)>): $JavaType
public "constructMapType"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type, arg2: $JavaType$Type): $MapType
public "constructMapType"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>, arg2: $Class$Type<(any)>): $MapType
public "constructArrayType"(arg0: $JavaType$Type): $ArrayType
public "constructArrayType"(arg0: $Class$Type<(any)>): $ArrayType
public static "unknownType"(): $JavaType
public "constructParametricType"(arg0: $Class$Type<(any)>, ...arg1: ($JavaType$Type)[]): $JavaType
public "constructParametricType"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type): $JavaType
public "constructParametricType"(arg0: $Class$Type<(any)>, ...arg1: ($Class$Type<(any)>)[]): $JavaType
public "constructGeneralizedType"(arg0: $JavaType$Type, arg1: $Class$Type<(any)>): $JavaType
public "withModifier"(arg0: $TypeModifier$Type): $TypeFactory
public "withClassLoader"(arg0: $ClassLoader$Type): $TypeFactory
public "withCache"(arg0: $LookupCache$Type<(any), ($JavaType$Type)>): $TypeFactory
/**
 * 
 * @deprecated
 */
public "withCache"(arg0: $LRUMap$Type<(any), ($JavaType$Type)>): $TypeFactory
public "moreSpecificType"(arg0: $JavaType$Type, arg1: $JavaType$Type): $JavaType
public "constructRawCollectionLikeType"(arg0: $Class$Type<(any)>): $CollectionLikeType
public "constructMapLikeType"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>, arg2: $Class$Type<(any)>): $MapLikeType
public "constructMapLikeType"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type, arg2: $JavaType$Type): $MapLikeType
/**
 * 
 * @deprecated
 */
public "uncheckedSimpleType"(arg0: $Class$Type<(any)>): $JavaType
public "constructCollectionLikeType"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>): $CollectionLikeType
public "constructCollectionLikeType"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type): $CollectionLikeType
public "constructReferenceType"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type): $JavaType
/**
 * 
 * @deprecated
 */
public "constructParametrizedType"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>, ...arg2: ($JavaType$Type)[]): $JavaType
/**
 * 
 * @deprecated
 */
public "constructParametrizedType"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>, ...arg2: ($Class$Type<(any)>)[]): $JavaType
public "constructRawMapType"(arg0: $Class$Type<(any)>): $MapType
public "constructRawMapLikeType"(arg0: $Class$Type<(any)>): $MapLikeType
public "constructSimpleType"(arg0: $Class$Type<(any)>, arg1: ($JavaType$Type)[]): $JavaType
/**
 * 
 * @deprecated
 */
public "constructSimpleType"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>, arg2: ($JavaType$Type)[]): $JavaType
public "constructRawCollectionType"(arg0: $Class$Type<(any)>): $CollectionType
public "constructCollectionType"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type): $CollectionType
public "constructCollectionType"(arg0: $Class$Type<(any)>, arg1: $Class$Type<(any)>): $CollectionType
public "constructSpecializedType"(arg0: $JavaType$Type, arg1: $Class$Type<(any)>): $JavaType
public "constructSpecializedType"(arg0: $JavaType$Type, arg1: $Class$Type<(any)>, arg2: boolean): $JavaType
public "constructFromCanonical"(arg0: string): $JavaType
public "resolveMemberType"(arg0: $Type$Type, arg1: $TypeBindings$Type): $JavaType
get "classLoader"(): $ClassLoader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeFactory$Type = ($TypeFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeFactory_ = $TypeFactory$Type;
}}
declare module "packages/com/fasterxml/jackson/core/format/$InputAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InputAccessor {

 "reset"(): void
 "nextByte"(): byte
 "hasMoreBytes"(): boolean
}

export namespace $InputAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputAccessor$Type = ($InputAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputAccessor_ = $InputAccessor$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonschema/$JsonSchema" {
import {$ObjectNode, $ObjectNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ObjectNode"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"

/**
 * 
 * @deprecated
 */
export class $JsonSchema {

constructor(arg0: $ObjectNode$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSchemaNode"(): $ObjectNode
public static "getDefaultSchemaNode"(): $JsonNode
get "schemaNode"(): $ObjectNode
get "defaultSchemaNode"(): $JsonNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonSchema$Type = ($JsonSchema);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonSchema_ = $JsonSchema$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$ObjectMapper$DefaultTyping" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ObjectMapper$DefaultTyping extends $Enum<($ObjectMapper$DefaultTyping)> {
static readonly "JAVA_LANG_OBJECT": $ObjectMapper$DefaultTyping
static readonly "OBJECT_AND_NON_CONCRETE": $ObjectMapper$DefaultTyping
static readonly "NON_CONCRETE_AND_ARRAYS": $ObjectMapper$DefaultTyping
static readonly "NON_FINAL": $ObjectMapper$DefaultTyping
static readonly "EVERYTHING": $ObjectMapper$DefaultTyping


public static "values"(): ($ObjectMapper$DefaultTyping)[]
public static "valueOf"(arg0: string): $ObjectMapper$DefaultTyping
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectMapper$DefaultTyping$Type = (("non_concrete_and_arrays") | ("java_lang_object") | ("non_final") | ("everything") | ("object_and_non_concrete")) | ($ObjectMapper$DefaultTyping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectMapper$DefaultTyping_ = $ObjectMapper$DefaultTyping$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$JsonMappingException" {
import {$JsonLocation, $JsonLocation$Type} from "packages/com/fasterxml/jackson/core/$JsonLocation"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationContext"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$IOException, $IOException$Type} from "packages/java/io/$IOException"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$DatabindException, $DatabindException$Type} from "packages/com/fasterxml/jackson/databind/$DatabindException"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$JsonMappingException$Reference, $JsonMappingException$Reference$Type} from "packages/com/fasterxml/jackson/databind/$JsonMappingException$Reference"

export class $JsonMappingException extends $DatabindException {

/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: $JsonLocation$Type, arg2: $Throwable$Type)
constructor(arg0: $Closeable$Type, arg1: string)
constructor(arg0: $Closeable$Type, arg1: string, arg2: $Throwable$Type)
constructor(arg0: $Closeable$Type, arg1: string, arg2: $JsonLocation$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: string)
/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: $Throwable$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: $JsonLocation$Type)

public "toString"(): string
public static "from"(arg0: $DeserializationContext$Type, arg1: string, arg2: $Throwable$Type): $JsonMappingException
public static "from"(arg0: $DeserializationContext$Type, arg1: string): $JsonMappingException
public static "from"(arg0: $SerializerProvider$Type, arg1: string): $JsonMappingException
public static "from"(arg0: $SerializerProvider$Type, arg1: string, arg2: $Throwable$Type): $JsonMappingException
public static "from"(arg0: $JsonParser$Type, arg1: string): $JsonMappingException
public static "from"(arg0: $JsonParser$Type, arg1: string, arg2: $Throwable$Type): $JsonMappingException
public static "from"(arg0: $JsonGenerator$Type, arg1: string): $JsonMappingException
public static "from"(arg0: $JsonGenerator$Type, arg1: string, arg2: $Throwable$Type): $JsonMappingException
public "getMessage"(): string
public "getLocalizedMessage"(): string
public "getPath"(): $List<($JsonMappingException$Reference)>
public "getProcessor"(): any
public static "wrapWithPath"(arg0: $Throwable$Type, arg1: $JsonMappingException$Reference$Type): $JsonMappingException
public static "wrapWithPath"(arg0: $Throwable$Type, arg1: any, arg2: integer): $JsonMappingException
public static "wrapWithPath"(arg0: $Throwable$Type, arg1: any, arg2: string): $JsonMappingException
public "getPathReference"(arg0: $StringBuilder$Type): $StringBuilder
public "getPathReference"(): string
public "prependPath"(arg0: any, arg1: string): void
public "prependPath"(arg0: $JsonMappingException$Reference$Type): void
public "prependPath"(arg0: any, arg1: integer): void
public static "fromUnexpectedIOE"(arg0: $IOException$Type): $JsonMappingException
public "withCause"(arg0: $Throwable$Type): $JsonMappingException
get "message"(): string
get "localizedMessage"(): string
get "path"(): $List<($JsonMappingException$Reference)>
get "processor"(): any
get "pathReference"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonMappingException$Type = ($JsonMappingException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonMappingException_ = $JsonMappingException$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JacksonAnnotationValue" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $JacksonAnnotationValue<A extends $Annotation> {

 "valueFor"(): $Class<(A)>

(): $Class<(A)>
}

export namespace $JacksonAnnotationValue {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JacksonAnnotationValue$Type<A> = ($JacksonAnnotationValue<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JacksonAnnotationValue_<A> = $JacksonAnnotationValue$Type<(A)>;
}}
declare module "packages/com/fasterxml/jackson/databind/$BeanProperty$Std" {
import {$JsonObjectFormatVisitor, $JsonObjectFormatVisitor$Type} from "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonObjectFormatVisitor"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AnnotationIntrospector, $AnnotationIntrospector$Type} from "packages/com/fasterxml/jackson/databind/$AnnotationIntrospector"
import {$SerializerProvider, $SerializerProvider$Type} from "packages/com/fasterxml/jackson/databind/$SerializerProvider"
import {$BeanProperty, $BeanProperty$Type} from "packages/com/fasterxml/jackson/databind/$BeanProperty"
import {$JsonFormat$Value, $JsonFormat$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonFormat$Value"
import {$MapperConfig, $MapperConfig$Type} from "packages/com/fasterxml/jackson/databind/cfg/$MapperConfig"
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$AnnotatedMember, $AnnotatedMember$Type} from "packages/com/fasterxml/jackson/databind/introspect/$AnnotatedMember"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JsonInclude$Value, $JsonInclude$Value$Type} from "packages/com/fasterxml/jackson/annotation/$JsonInclude$Value"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$PropertyMetadata, $PropertyMetadata$Type} from "packages/com/fasterxml/jackson/databind/$PropertyMetadata"
import {$Annotations, $Annotations$Type} from "packages/com/fasterxml/jackson/databind/util/$Annotations"

export class $BeanProperty$Std implements $BeanProperty, $Serializable {

constructor(arg0: $PropertyName$Type, arg1: $JavaType$Type, arg2: $PropertyName$Type, arg3: $AnnotatedMember$Type, arg4: $PropertyMetadata$Type)
constructor(arg0: $BeanProperty$Std$Type, arg1: $JavaType$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $PropertyName$Type, arg1: $JavaType$Type, arg2: $PropertyName$Type, arg3: $Annotations$Type, arg4: $AnnotatedMember$Type, arg5: $PropertyMetadata$Type)

public "getName"(): string
public "getAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "getType"(): $JavaType
public "isVirtual"(): boolean
public "getFullName"(): $PropertyName
public "getMember"(): $AnnotatedMember
public "isRequired"(): boolean
public "getMetadata"(): $PropertyMetadata
public "withType"(arg0: $JavaType$Type): $BeanProperty$Std
public "getWrapperName"(): $PropertyName
public "findPropertyInclusion"(arg0: $MapperConfig$Type<(any)>, arg1: $Class$Type<(any)>): $JsonInclude$Value
public "findPropertyFormat"(arg0: $MapperConfig$Type<(any)>, arg1: $Class$Type<(any)>): $JsonFormat$Value
public "findAliases"(arg0: $MapperConfig$Type<(any)>): $List<($PropertyName)>
/**
 * 
 * @deprecated
 */
public "findFormatOverrides"(arg0: $AnnotationIntrospector$Type): $JsonFormat$Value
public "depositSchemaProperty"(arg0: $JsonObjectFormatVisitor$Type, arg1: $SerializerProvider$Type): void
public "getContextAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
get "name"(): string
get "type"(): $JavaType
get "virtual"(): boolean
get "fullName"(): $PropertyName
get "member"(): $AnnotatedMember
get "required"(): boolean
get "metadata"(): $PropertyMetadata
get "wrapperName"(): $PropertyName
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeanProperty$Std$Type = ($BeanProperty$Std);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeanProperty$Std_ = $BeanProperty$Std$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/jsonFormatVisitors/$JsonFormatTypes" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonFormatTypes extends $Enum<($JsonFormatTypes)> {
static readonly "STRING": $JsonFormatTypes
static readonly "NUMBER": $JsonFormatTypes
static readonly "INTEGER": $JsonFormatTypes
static readonly "BOOLEAN": $JsonFormatTypes
static readonly "OBJECT": $JsonFormatTypes
static readonly "ARRAY": $JsonFormatTypes
static readonly "NULL": $JsonFormatTypes
static readonly "ANY": $JsonFormatTypes


public "value"(): string
public static "values"(): ($JsonFormatTypes)[]
public static "valueOf"(arg0: string): $JsonFormatTypes
public static "forValue"(arg0: string): $JsonFormatTypes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFormatTypes$Type = (("number") | ("boolean") | ("string") | ("null") | ("array") | ("integer") | ("any") | ("object")) | ($JsonFormatTypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFormatTypes_ = $JsonFormatTypes$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$Named" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Named {

 "getName"(): string

(): string
}

export namespace $Named {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Named$Type = ($Named);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Named_ = $Named$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JacksonException" {
import {$JsonLocation, $JsonLocation$Type} from "packages/com/fasterxml/jackson/core/$JsonLocation"
import {$IOException, $IOException$Type} from "packages/java/io/$IOException"

export class $JacksonException extends $IOException {


public "getLocation"(): $JsonLocation
public "getOriginalMessage"(): string
public "getProcessor"(): any
get "location"(): $JsonLocation
get "originalMessage"(): string
get "processor"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JacksonException$Type = ($JacksonException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JacksonException_ = $JacksonException$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/type/$CollectionLikeType" {
import {$TypeBindings, $TypeBindings$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBindings"
import {$TypeBase, $TypeBase$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeBase"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"

export class $CollectionLikeType extends $TypeBase {


public "equals"(arg0: any): boolean
public "toString"(): string
public "getGenericSignature"(arg0: $StringBuilder$Type): $StringBuilder
public static "construct"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type, arg2: $JavaType$Type, arg3: ($JavaType$Type)[], arg4: $JavaType$Type): $CollectionLikeType
/**
 * 
 * @deprecated
 */
public static "construct"(arg0: $Class$Type<(any)>, arg1: $JavaType$Type): $CollectionLikeType
public "refine"(arg0: $Class$Type<(any)>, arg1: $TypeBindings$Type, arg2: $JavaType$Type, arg3: ($JavaType$Type)[]): $JavaType
public "withStaticTyping"(): $CollectionLikeType
public "withContentType"(arg0: $JavaType$Type): $JavaType
public "withHandlersFrom"(arg0: $JavaType$Type): $JavaType
public "withValueHandler"(arg0: any): $CollectionLikeType
public "hasHandlers"(): boolean
public "getErasedSignature"(arg0: $StringBuilder$Type): $StringBuilder
public static "upgradeFrom"(arg0: $JavaType$Type, arg1: $JavaType$Type): $CollectionLikeType
public "withTypeHandler"(arg0: any): $CollectionLikeType
public "isContainerType"(): boolean
public "withContentTypeHandler"(arg0: any): $CollectionLikeType
public "isCollectionLikeType"(): boolean
public "getContentTypeHandler"(): any
public "getContentValueHandler"(): any
/**
 * 
 * @deprecated
 */
public "isTrueCollectionType"(): boolean
get "containerType"(): boolean
get "collectionLikeType"(): boolean
get "contentTypeHandler"(): any
get "contentValueHandler"(): any
get "trueCollectionType"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollectionLikeType$Type = ($CollectionLikeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CollectionLikeType_ = $CollectionLikeType$Type;
}}
declare module "packages/com/fasterxml/jackson/annotation/$JsonIncludeProperties" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $JsonIncludeProperties extends $Annotation {

 "value"(): (string)[]
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $JsonIncludeProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonIncludeProperties$Type = ($JsonIncludeProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonIncludeProperties_ = $JsonIncludeProperties$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$PropertyMetadata" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Nulls, $Nulls$Type} from "packages/com/fasterxml/jackson/annotation/$Nulls"
import {$PropertyMetadata$MergeInfo, $PropertyMetadata$MergeInfo$Type} from "packages/com/fasterxml/jackson/databind/$PropertyMetadata$MergeInfo"

export class $PropertyMetadata implements $Serializable {
static readonly "STD_REQUIRED": $PropertyMetadata
static readonly "STD_OPTIONAL": $PropertyMetadata
static readonly "STD_REQUIRED_OR_OPTIONAL": $PropertyMetadata


public "getDefaultValue"(): string
public "getIndex"(): integer
/**
 * 
 * @deprecated
 */
public static "construct"(arg0: boolean, arg1: string, arg2: integer, arg3: string): $PropertyMetadata
public static "construct"(arg0: boolean, arg1: string, arg2: integer, arg3: string): $PropertyMetadata
public "getDescription"(): string
public "hasDefaultValue"(): boolean
public "isRequired"(): boolean
public "withIndex"(arg0: integer): $PropertyMetadata
public "withDefaultValue"(arg0: string): $PropertyMetadata
public "hasIndex"(): boolean
public "withDescription"(arg0: string): $PropertyMetadata
public "getContentNulls"(): $Nulls
public "getValueNulls"(): $Nulls
public "withMergeInfo"(arg0: $PropertyMetadata$MergeInfo$Type): $PropertyMetadata
public "withNulls"(arg0: $Nulls$Type, arg1: $Nulls$Type): $PropertyMetadata
public "getMergeInfo"(): $PropertyMetadata$MergeInfo
public "getRequired"(): boolean
public "withRequired"(arg0: boolean): $PropertyMetadata
get "defaultValue"(): string
get "index"(): integer
get "description"(): string
get "required"(): boolean
get "contentNulls"(): $Nulls
get "valueNulls"(): $Nulls
get "mergeInfo"(): $PropertyMetadata$MergeInfo
get "required"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyMetadata$Type = ($PropertyMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyMetadata_ = $PropertyMetadata$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$JsonPointer" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$JsonStreamContext, $JsonStreamContext$Type} from "packages/com/fasterxml/jackson/core/$JsonStreamContext"

export class $JsonPointer implements $Serializable {
static readonly "SEPARATOR": character


public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "append"(arg0: $JsonPointer$Type): $JsonPointer
public "hashCode"(): integer
public static "valueOf"(arg0: string): $JsonPointer
public "matches"(): boolean
public static "compile"(arg0: string): $JsonPointer
public "last"(): $JsonPointer
public static "empty"(): $JsonPointer
public "tail"(): $JsonPointer
public "head"(): $JsonPointer
public "matchElement"(arg0: integer): $JsonPointer
public "getMatchingIndex"(): integer
public "getMatchingProperty"(): string
public static "forPath"(arg0: $JsonStreamContext$Type, arg1: boolean): $JsonPointer
public "mayMatchElement"(): boolean
public "matchProperty"(arg0: string): $JsonPointer
public "mayMatchProperty"(): boolean
public "matchesElement"(arg0: integer): boolean
public "matchesProperty"(arg0: string): boolean
public "appendIndex"(arg0: integer): $JsonPointer
public "appendProperty"(arg0: string): $JsonPointer
get "matchingIndex"(): integer
get "matchingProperty"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonPointer$Type = ($JsonPointer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonPointer_ = $JsonPointer$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$JsonNode" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$JsonParser$NumberType, $JsonParser$NumberType$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$NumberType"
import {$JsonNode$OverwriteMode, $JsonNode$OverwriteMode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode$OverwriteMode"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$JsonPointer, $JsonPointer$Type} from "packages/com/fasterxml/jackson/core/$JsonPointer"
import {$ArrayNode, $ArrayNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ArrayNode"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$JsonSerializable$Base, $JsonSerializable$Base$Type} from "packages/com/fasterxml/jackson/databind/$JsonSerializable$Base"
import {$ObjectNode, $ObjectNode$Type} from "packages/com/fasterxml/jackson/databind/node/$ObjectNode"
import {$JsonToken, $JsonToken$Type} from "packages/com/fasterxml/jackson/core/$JsonToken"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TreeNode, $TreeNode$Type} from "packages/com/fasterxml/jackson/core/$TreeNode"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$JsonNodeType, $JsonNodeType$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeType"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $JsonNode extends $JsonSerializable$Base implements $TreeNode, $Iterable<($JsonNode)> {


public "get"(arg0: integer): $JsonNode
public "get"(arg0: string): $JsonNode
public "equals"(arg0: $Comparator$Type<($JsonNode$Type)>, arg1: $JsonNode$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "isArray"(): boolean
public "booleanValue"(): boolean
public "shortValue"(): short
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "requireNonNull"<T extends $JsonNode>(): T
public "isEmpty"(): boolean
public "size"(): integer
public "iterator"(): $Iterator<($JsonNode)>
public "elements"(): $Iterator<($JsonNode)>
public "fields"(): $Iterator<($Map$Entry<(string), ($JsonNode)>)>
public "at"(arg0: string): $JsonNode
public "at"(arg0: $JsonPointer$Type): $JsonNode
public "isNull"(): boolean
public "fieldNames"(): $Iterator<(string)>
public "asInt"(arg0: integer): integer
public "asInt"(): integer
public "bigIntegerValue"(): $BigInteger
/**
 * 
 * @deprecated
 */
public "with"<T extends $JsonNode>(arg0: string): T
public "isFloat"(): boolean
public "has"(arg0: string): boolean
public "has"(arg0: integer): boolean
public "numberValue"(): number
public "findValue"(arg0: string): $JsonNode
public "getNodeType"(): $JsonNodeType
public "isNumber"(): boolean
public "asLong"(): long
public "asLong"(arg0: long): long
public "deepCopy"<T extends $JsonNode>(): T
public "isBoolean"(): boolean
public "asDouble"(arg0: double): double
public "asDouble"(): double
public "isObject"(): boolean
public "required"(arg0: string): $JsonNode
public "required"(arg0: integer): $JsonNode
public "isDouble"(): boolean
public "isLong"(): boolean
public "isInt"(): boolean
public "isShort"(): boolean
public "require"<T extends $JsonNode>(): T
public "findPath"(arg0: string): $JsonNode
public "asBoolean"(arg0: boolean): boolean
public "asBoolean"(): boolean
public "isFloatingPointNumber"(): boolean
public "canConvertToExactIntegral"(): boolean
public "findParent"(arg0: string): $JsonNode
public "textValue"(): string
public "binaryValue"(): (byte)[]
public "requiredAt"(arg0: $JsonPointer$Type): $JsonNode
public "requiredAt"(arg0: string): $JsonNode
public "isContainerNode"(): boolean
public "hasNonNull"(arg0: integer): boolean
public "hasNonNull"(arg0: string): boolean
public "decimalValue"(): $BigDecimal
public "isTextual"(): boolean
public "findValuesAsText"(arg0: string, arg1: $List$Type<(string)>): $List<(string)>
public "findValuesAsText"(arg0: string): $List<(string)>
public "canConvertToInt"(): boolean
public "isMissingNode"(): boolean
public "isIntegralNumber"(): boolean
public "isPojo"(): boolean
public "isBinary"(): boolean
public "asText"(): string
public "asText"(arg0: string): string
public "findParents"(arg0: string): $List<($JsonNode)>
public "findParents"(arg0: string, arg1: $List$Type<($JsonNode$Type)>): $List<($JsonNode)>
public "canConvertToLong"(): boolean
public "isBigDecimal"(): boolean
public "isBigInteger"(): boolean
public "isValueNode"(): boolean
public "findValues"(arg0: string, arg1: $List$Type<($JsonNode$Type)>): $List<($JsonNode)>
public "findValues"(arg0: string): $List<($JsonNode)>
public "withArray"(arg0: string, arg1: $JsonNode$OverwriteMode$Type, arg2: boolean): $ArrayNode
public "withArray"(arg0: $JsonPointer$Type, arg1: $JsonNode$OverwriteMode$Type, arg2: boolean): $ArrayNode
public "withArray"(arg0: $JsonPointer$Type): $ArrayNode
public "withArray"<T extends $JsonNode>(arg0: string): T
public "toPrettyString"(): string
public "withObject"(arg0: string, arg1: $JsonNode$OverwriteMode$Type, arg2: boolean): $ObjectNode
public "withObject"(arg0: $JsonPointer$Type): $ObjectNode
public "withObject"(arg0: string): $ObjectNode
public "withObject"(arg0: $JsonPointer$Type, arg1: $JsonNode$OverwriteMode$Type, arg2: boolean): $ObjectNode
public "asToken"(): $JsonToken
public "traverse"(): $JsonParser
public "traverse"(arg0: $ObjectCodec$Type): $JsonParser
public "numberType"(): $JsonParser$NumberType
public "spliterator"(): $Spliterator<($JsonNode)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$JsonNode>;
get "array"(): boolean
get "empty"(): boolean
get "null"(): boolean
get "float"(): boolean
get "nodeType"(): $JsonNodeType
get "number"(): boolean
get "boolean"(): boolean
get "object"(): boolean
get "double"(): boolean
get "long"(): boolean
get "int"(): boolean
get "short"(): boolean
get "floatingPointNumber"(): boolean
get "containerNode"(): boolean
get "textual"(): boolean
get "missingNode"(): boolean
get "integralNumber"(): boolean
get "pojo"(): boolean
get "binary"(): boolean
get "bigDecimal"(): boolean
get "bigInteger"(): boolean
get "valueNode"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNode$Type = ($JsonNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonNode_ = $JsonNode$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/util/$NameTransformer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $NameTransformer {
static readonly "NOP": $NameTransformer


public "transform"(arg0: string): string
public "reverse"(arg0: string): string
public static "simpleTransformer"(arg0: string, arg1: string): $NameTransformer
public static "chainedTransformer"(arg0: $NameTransformer$Type, arg1: $NameTransformer$Type): $NameTransformer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameTransformer$Type = ($NameTransformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NameTransformer_ = $NameTransformer$Type;
}}
declare module "packages/com/fasterxml/jackson/core/util/$TextBuffer" {
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$BufferRecycler, $BufferRecycler$Type} from "packages/com/fasterxml/jackson/core/util/$BufferRecycler"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"

export class $TextBuffer {

constructor(arg0: $BufferRecycler$Type)

public "toString"(): string
public "append"(arg0: string, arg1: integer, arg2: integer): void
public "append"(arg0: (character)[], arg1: integer, arg2: integer): void
public "append"(arg0: character): void
public "size"(): integer
public "contentsAsLong"(arg0: boolean): long
public "getTextBuffer"(): (character)[]
public "contentsToWriter"(arg0: $Writer$Type): integer
public "resetWithShared"(arg0: (character)[], arg1: integer, arg2: integer): void
public "resetWithCopy"(arg0: string, arg1: integer, arg2: integer): void
public "resetWithCopy"(arg0: (character)[], arg1: integer, arg2: integer): void
public "setCurrentLength"(arg0: integer): void
public "contentsAsArray"(): (character)[]
/**
 * 
 * @deprecated
 */
public "contentsAsFloat"(): float
public "contentsAsFloat"(arg0: boolean): float
public "resetWithEmpty"(): void
public "getTextOffset"(): integer
public "contentsAsString"(): string
public "releaseBuffers"(): void
public static "fromInitial"(arg0: (character)[]): $TextBuffer
public "getCurrentSegment"(): (character)[]
public "finishCurrentSegment"(): (character)[]
public "resetWithString"(arg0: string): void
public "contentsAsInt"(arg0: boolean): integer
public "hasTextAsCharacters"(): boolean
public "emptyAndGetCurrentSegment"(): (character)[]
public "getCurrentSegmentSize"(): integer
public "expandCurrentSegment"(arg0: integer): (character)[]
public "expandCurrentSegment"(): (character)[]
public "setCurrentAndReturn"(arg0: integer): string
public "getBufferWithoutReset"(): (character)[]
public "contentsAsDouble"(arg0: boolean): double
/**
 * 
 * @deprecated
 */
public "contentsAsDouble"(): double
public "resetWith"(arg0: character): void
public "ensureNotShared"(): void
public "contentsAsDecimal"(): $BigDecimal
get "textBuffer"(): (character)[]
set "currentLength"(value: integer)
get "textOffset"(): integer
get "currentSegment"(): (character)[]
get "currentSegmentSize"(): integer
set "currentAndReturn"(value: integer)
get "bufferWithoutReset"(): (character)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextBuffer$Type = ($TextBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextBuffer_ = $TextBuffer$Type;
}}
declare module "packages/com/fasterxml/jackson/databind/$ObjectReader" {
import {$DataInput, $DataInput$Type} from "packages/java/io/$DataInput"
import {$ObjectCodec, $ObjectCodec$Type} from "packages/com/fasterxml/jackson/core/$ObjectCodec"
import {$DeserializationProblemHandler, $DeserializationProblemHandler$Type} from "packages/com/fasterxml/jackson/databind/deser/$DeserializationProblemHandler"
import {$ContextAttributes, $ContextAttributes$Type} from "packages/com/fasterxml/jackson/databind/cfg/$ContextAttributes"
import {$JsonGenerator, $JsonGenerator$Type} from "packages/com/fasterxml/jackson/core/$JsonGenerator"
import {$DeserializationConfig, $DeserializationConfig$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationConfig"
import {$JsonPointer, $JsonPointer$Type} from "packages/com/fasterxml/jackson/core/$JsonPointer"
import {$JsonFactory, $JsonFactory$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory"
import {$FormatSchema, $FormatSchema$Type} from "packages/com/fasterxml/jackson/core/$FormatSchema"
import {$InjectableValues, $InjectableValues$Type} from "packages/com/fasterxml/jackson/databind/$InjectableValues"
import {$JsonParser, $JsonParser$Type} from "packages/com/fasterxml/jackson/core/$JsonParser"
import {$File, $File$Type} from "packages/java/io/$File"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$FormatFeature, $FormatFeature$Type} from "packages/com/fasterxml/jackson/core/$FormatFeature"
import {$Base64Variant, $Base64Variant$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$DeserializationFeature, $DeserializationFeature$Type} from "packages/com/fasterxml/jackson/databind/$DeserializationFeature"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$MapperFeature, $MapperFeature$Type} from "packages/com/fasterxml/jackson/databind/$MapperFeature"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"
import {$MappingIterator, $MappingIterator$Type} from "packages/com/fasterxml/jackson/databind/$MappingIterator"
import {$Version, $Version$Type} from "packages/com/fasterxml/jackson/core/$Version"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$JsonNodeFactory, $JsonNodeFactory$Type} from "packages/com/fasterxml/jackson/databind/node/$JsonNodeFactory"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PropertyName, $PropertyName$Type} from "packages/com/fasterxml/jackson/databind/$PropertyName"
import {$StreamReadFeature, $StreamReadFeature$Type} from "packages/com/fasterxml/jackson/core/$StreamReadFeature"
import {$TypeReference, $TypeReference$Type} from "packages/com/fasterxml/jackson/core/type/$TypeReference"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$Versioned, $Versioned$Type} from "packages/com/fasterxml/jackson/core/$Versioned"
import {$TreeNode, $TreeNode$Type} from "packages/com/fasterxml/jackson/core/$TreeNode"
import {$TypeFactory, $TypeFactory$Type} from "packages/com/fasterxml/jackson/databind/type/$TypeFactory"
import {$JsonNode, $JsonNode$Type} from "packages/com/fasterxml/jackson/databind/$JsonNode"
import {$ResolvedType, $ResolvedType$Type} from "packages/com/fasterxml/jackson/core/type/$ResolvedType"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$DataFormatReaders, $DataFormatReaders$Type} from "packages/com/fasterxml/jackson/databind/deser/$DataFormatReaders"
import {$JavaType, $JavaType$Type} from "packages/com/fasterxml/jackson/databind/$JavaType"
import {$DatatypeFeature, $DatatypeFeature$Type} from "packages/com/fasterxml/jackson/databind/cfg/$DatatypeFeature"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$JsonParser$Feature, $JsonParser$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonParser$Feature"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ObjectReader extends $ObjectCodec implements $Versioned, $Serializable {


public "version"(): $Version
public "getFactory"(): $JsonFactory
public "at"(arg0: string): $ObjectReader
public "at"(arg0: $JsonPointer$Type): $ObjectReader
public "getAttributes"(): $ContextAttributes
public "with"(arg0: $InjectableValues$Type): $ObjectReader
public "with"(arg0: $DeserializationConfig$Type): $ObjectReader
public "with"(arg0: $JsonParser$Feature$Type): $ObjectReader
public "with"(arg0: $StreamReadFeature$Type): $ObjectReader
public "with"(arg0: $FormatFeature$Type): $ObjectReader
public "with"(arg0: $Locale$Type): $ObjectReader
public "with"(arg0: $TimeZone$Type): $ObjectReader
public "with"(arg0: $Base64Variant$Type): $ObjectReader
public "with"(arg0: $ContextAttributes$Type): $ObjectReader
public "with"(arg0: $FormatSchema$Type): $ObjectReader
public "with"(arg0: $JsonFactory$Type): $ObjectReader
public "with"(arg0: $JsonNodeFactory$Type): $ObjectReader
public "with"(arg0: $DatatypeFeature$Type): $ObjectReader
public "with"(arg0: $DeserializationFeature$Type): $ObjectReader
public "with"(arg0: $DeserializationFeature$Type, ...arg1: ($DeserializationFeature$Type)[]): $ObjectReader
public "isEnabled"(arg0: $MapperFeature$Type): boolean
public "isEnabled"(arg0: $DeserializationFeature$Type): boolean
public "isEnabled"(arg0: $JsonParser$Feature$Type): boolean
public "isEnabled"(arg0: $DatatypeFeature$Type): boolean
public "isEnabled"(arg0: $StreamReadFeature$Type): boolean
public "forType"(arg0: $TypeReference$Type<(any)>): $ObjectReader
public "forType"(arg0: $JavaType$Type): $ObjectReader
public "forType"(arg0: $Class$Type<(any)>): $ObjectReader
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $JavaType$Type): T
public "readValue"<T>(arg0: $DataInput$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $InputStream$Type): T
public "readValue"<T>(arg0: $InputStream$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $JsonNode$Type): T
public "readValue"<T>(arg0: $JsonParser$Type): T
public "readValue"<T>(arg0: $JsonNode$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $DataInput$Type): T
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $ResolvedType$Type): T
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $TypeReference$Type<(T)>): T
public "readValue"<T>(arg0: $JsonParser$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $URL$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: (byte)[], arg1: integer, arg2: integer): T
public "readValue"<T>(arg0: (byte)[]): T
public "readValue"<T>(arg0: string, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $File$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $File$Type): T
public "readValue"<T>(arg0: (byte)[], arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: (byte)[], arg1: integer, arg2: integer, arg3: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $Reader$Type, arg1: $Class$Type<(T)>): T
public "readValue"<T>(arg0: $URL$Type): T
public "readValue"<T>(arg0: $Reader$Type): T
public "readValue"<T>(arg0: string): T
public "without"(arg0: $DatatypeFeature$Type): $ObjectReader
public "without"(arg0: $StreamReadFeature$Type): $ObjectReader
public "without"(arg0: $FormatFeature$Type): $ObjectReader
public "without"(arg0: $DeserializationFeature$Type): $ObjectReader
public "without"(arg0: $JsonParser$Feature$Type): $ObjectReader
public "without"(arg0: $DeserializationFeature$Type, ...arg1: ($DeserializationFeature$Type)[]): $ObjectReader
public "writeValue"(arg0: $JsonGenerator$Type, arg1: any): void
public "getConfig"(): $DeserializationConfig
public "createParser"(arg0: $URL$Type): $JsonParser
public "createParser"(arg0: $File$Type): $JsonParser
public "createParser"(arg0: $Reader$Type): $JsonParser
public "createParser"(arg0: $InputStream$Type): $JsonParser
public "createParser"(arg0: $DataInput$Type): $JsonParser
public "createParser"(arg0: (character)[], arg1: integer, arg2: integer): $JsonParser
public "createParser"(arg0: (character)[]): $JsonParser
public "createParser"(arg0: string): $JsonParser
public "createParser"(arg0: (byte)[], arg1: integer, arg2: integer): $JsonParser
public "createParser"(arg0: (byte)[]): $JsonParser
public "getValueType"(): $JavaType
/**
 * 
 * @deprecated
 */
public "withType"(arg0: $JavaType$Type): $ObjectReader
/**
 * 
 * @deprecated
 */
public "withType"(arg0: $TypeReference$Type<(any)>): $ObjectReader
/**
 * 
 * @deprecated
 */
public "withType"(arg0: $Type$Type): $ObjectReader
/**
 * 
 * @deprecated
 */
public "withType"(arg0: $Class$Type<(any)>): $ObjectReader
public "withoutAttribute"(arg0: any): $ObjectReader
public "withFeatures"(...arg0: ($DatatypeFeature$Type)[]): $ObjectReader
public "withFeatures"(...arg0: ($DeserializationFeature$Type)[]): $ObjectReader
public "withFeatures"(...arg0: ($JsonParser$Feature$Type)[]): $ObjectReader
public "withFeatures"(...arg0: ($FormatFeature$Type)[]): $ObjectReader
public "withRootName"(arg0: $PropertyName$Type): $ObjectReader
public "withRootName"(arg0: string): $ObjectReader
public "withAttributes"(arg0: $Map$Type<(any), (any)>): $ObjectReader
public "withoutFeatures"(...arg0: ($JsonParser$Feature$Type)[]): $ObjectReader
public "withoutFeatures"(...arg0: ($DatatypeFeature$Type)[]): $ObjectReader
public "withoutFeatures"(...arg0: ($FormatFeature$Type)[]): $ObjectReader
public "withoutFeatures"(...arg0: ($DeserializationFeature$Type)[]): $ObjectReader
public "withAttribute"(arg0: any, arg1: any): $ObjectReader
public "readTree"(arg0: $DataInput$Type): $JsonNode
public "readTree"(arg0: string): $JsonNode
public "readTree"(arg0: $Reader$Type): $JsonNode
public "readTree"(arg0: $InputStream$Type): $JsonNode
public "readTree"(arg0: (byte)[], arg1: integer, arg2: integer): $JsonNode
public "readTree"(arg0: (byte)[]): $JsonNode
public "readTree"<T extends $TreeNode>(arg0: $JsonParser$Type): T
public "writeTree"(arg0: $JsonGenerator$Type, arg1: $TreeNode$Type): void
public "readValues"<T>(arg0: $File$Type): $MappingIterator<(T)>
public "readValues"<T>(arg0: $URL$Type): $MappingIterator<(T)>
public "readValues"<T>(arg0: $DataInput$Type): $MappingIterator<(T)>
public "readValues"<T>(arg0: $Reader$Type): $MappingIterator<(T)>
public "readValues"<T>(arg0: (byte)[], arg1: integer, arg2: integer): $MappingIterator<(T)>
public "readValues"<T>(arg0: string): $MappingIterator<(T)>
public "readValues"<T>(arg0: (byte)[]): $MappingIterator<(T)>
public "readValues"<T>(arg0: $InputStream$Type): $MappingIterator<(T)>
public "readValues"<T>(arg0: $JsonParser$Type): $MappingIterator<(T)>
public "readValues"<T>(arg0: $JsonParser$Type, arg1: $JavaType$Type): $Iterator<(T)>
public "readValues"<T>(arg0: $JsonParser$Type, arg1: $ResolvedType$Type): $Iterator<(T)>
public "readValues"<T>(arg0: $JsonParser$Type, arg1: $TypeReference$Type<(T)>): $Iterator<(T)>
public "readValues"<T>(arg0: $JsonParser$Type, arg1: $Class$Type<(T)>): $Iterator<(T)>
public "nullNode"(): $JsonNode
public "createArrayNode"(): $JsonNode
public "treeAsTokens"(arg0: $TreeNode$Type): $JsonParser
public "treeToValue"<T>(arg0: $TreeNode$Type, arg1: $JavaType$Type): T
public "treeToValue"<T>(arg0: $TreeNode$Type, arg1: $Class$Type<(T)>): T
public "getTypeFactory"(): $TypeFactory
public "withHandler"(arg0: $DeserializationProblemHandler$Type): $ObjectReader
public "withView"(arg0: $Class$Type<(any)>): $ObjectReader
public "withValueToUpdate"(arg0: any): $ObjectReader
public "withoutRootName"(): $ObjectReader
public "createNonBlockingByteArrayParser"(): $JsonParser
public "getInjectableValues"(): $InjectableValues
public "withFormatDetection"(arg0: $DataFormatReaders$Type): $ObjectReader
public "withFormatDetection"(...arg0: ($ObjectReader$Type)[]): $ObjectReader
get "factory"(): $JsonFactory
get "attributes"(): $ContextAttributes
get "config"(): $DeserializationConfig
get "valueType"(): $JavaType
get "typeFactory"(): $TypeFactory
get "injectableValues"(): $InjectableValues
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectReader$Type = ($ObjectReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectReader_ = $ObjectReader$Type;
}}
declare module "packages/com/fasterxml/jackson/core/$TSFBuilder" {
import {$StreamWriteFeature, $StreamWriteFeature$Type} from "packages/com/fasterxml/jackson/core/$StreamWriteFeature"
import {$JsonFactory$Feature, $JsonFactory$Feature$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory$Feature"
import {$StreamReadFeature, $StreamReadFeature$Type} from "packages/com/fasterxml/jackson/core/$StreamReadFeature"
import {$JsonFactory, $JsonFactory$Type} from "packages/com/fasterxml/jackson/core/$JsonFactory"
import {$InputDecorator, $InputDecorator$Type} from "packages/com/fasterxml/jackson/core/io/$InputDecorator"
import {$JsonWriteFeature, $JsonWriteFeature$Type} from "packages/com/fasterxml/jackson/core/json/$JsonWriteFeature"
import {$JsonReadFeature, $JsonReadFeature$Type} from "packages/com/fasterxml/jackson/core/json/$JsonReadFeature"
import {$OutputDecorator, $OutputDecorator$Type} from "packages/com/fasterxml/jackson/core/io/$OutputDecorator"

export class $TSFBuilder<F extends $JsonFactory, B extends $TSFBuilder<(F), (B)>> {


public "build"(): F
public "enable"(arg0: $StreamReadFeature$Type, ...arg1: ($StreamReadFeature$Type)[]): B
public "enable"(arg0: $StreamReadFeature$Type): B
public "enable"(arg0: $StreamWriteFeature$Type): B
public "enable"(arg0: $JsonReadFeature$Type): B
public "enable"(arg0: $StreamWriteFeature$Type, ...arg1: ($StreamWriteFeature$Type)[]): B
public "enable"(arg0: $JsonReadFeature$Type, ...arg1: ($JsonReadFeature$Type)[]): B
public "enable"(arg0: $JsonWriteFeature$Type, ...arg1: ($JsonWriteFeature$Type)[]): B
public "enable"(arg0: $JsonFactory$Feature$Type): B
public "enable"(arg0: $JsonWriteFeature$Type): B
public "configure"(arg0: $JsonReadFeature$Type, arg1: boolean): B
public "configure"(arg0: $JsonWriteFeature$Type, arg1: boolean): B
public "configure"(arg0: $StreamWriteFeature$Type, arg1: boolean): B
public "configure"(arg0: $JsonFactory$Feature$Type, arg1: boolean): B
public "configure"(arg0: $StreamReadFeature$Type, arg1: boolean): B
public "disable"(arg0: $JsonReadFeature$Type): B
public "disable"(arg0: $JsonReadFeature$Type, ...arg1: ($JsonReadFeature$Type)[]): B
public "disable"(arg0: $JsonFactory$Feature$Type): B
public "disable"(arg0: $JsonWriteFeature$Type): B
public "disable"(arg0: $JsonWriteFeature$Type, ...arg1: ($JsonWriteFeature$Type)[]): B
public "disable"(arg0: $StreamWriteFeature$Type): B
public "disable"(arg0: $StreamWriteFeature$Type, ...arg1: ($StreamWriteFeature$Type)[]): B
public "disable"(arg0: $StreamReadFeature$Type): B
public "disable"(arg0: $StreamReadFeature$Type, ...arg1: ($StreamReadFeature$Type)[]): B
public "streamReadFeatures"(): integer
public "outputDecorator"(): $OutputDecorator
public "outputDecorator"(arg0: $OutputDecorator$Type): B
public "inputDecorator"(): $InputDecorator
public "inputDecorator"(arg0: $InputDecorator$Type): B
public "factoryFeaturesMask"(): integer
public "streamWriteFeatures"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSFBuilder$Type<F, B> = ($TSFBuilder<(F), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSFBuilder_<F, B> = $TSFBuilder$Type<(F), (B)>;
}}
declare module "packages/com/fasterxml/jackson/core/$Base64Variant" {
import {$Base64Variant$PaddingReadBehaviour, $Base64Variant$PaddingReadBehaviour$Type} from "packages/com/fasterxml/jackson/core/$Base64Variant$PaddingReadBehaviour"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$ByteArrayBuilder, $ByteArrayBuilder$Type} from "packages/com/fasterxml/jackson/core/util/$ByteArrayBuilder"

export class $Base64Variant implements $Serializable {
static readonly "BASE64_VALUE_INVALID": integer
static readonly "BASE64_VALUE_PADDING": integer

constructor(arg0: string, arg1: string, arg2: boolean, arg3: character, arg4: integer)
constructor(arg0: $Base64Variant$Type, arg1: string, arg2: integer)
constructor(arg0: $Base64Variant$Type, arg1: string, arg2: boolean, arg3: character, arg4: integer)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "decode"(arg0: string): (byte)[]
public "decode"(arg0: string, arg1: $ByteArrayBuilder$Type): void
public "encode"(arg0: (byte)[], arg1: boolean, arg2: string): string
public "encode"(arg0: (byte)[]): string
public "encode"(arg0: (byte)[], arg1: boolean): string
public "usesPadding"(): boolean
public "decodeBase64Char"(arg0: integer): integer
public "decodeBase64Char"(arg0: character): integer
public "decodeBase64Byte"(arg0: byte): integer
public "getMaxLineLength"(): integer
public "encodeBase64Chunk"(arg0: integer, arg1: (byte)[], arg2: integer): integer
public "encodeBase64Chunk"(arg0: $StringBuilder$Type, arg1: integer): void
public "encodeBase64Chunk"(arg0: integer, arg1: (character)[], arg2: integer): integer
public "withReadPadding"(arg0: $Base64Variant$PaddingReadBehaviour$Type): $Base64Variant
public "usesPaddingChar"(arg0: integer): boolean
public "usesPaddingChar"(arg0: character): boolean
public "getPaddingChar"(): character
public "getPaddingByte"(): byte
public "withPaddingAllowed"(): $Base64Variant
public "withWritePadding"(arg0: boolean): $Base64Variant
public "encodeBase64BitsAsChar"(arg0: integer): character
public "paddingReadBehaviour"(): $Base64Variant$PaddingReadBehaviour
public "encodeBase64Partial"(arg0: integer, arg1: integer, arg2: (byte)[], arg3: integer): integer
public "encodeBase64Partial"(arg0: integer, arg1: integer, arg2: (character)[], arg3: integer): integer
public "encodeBase64Partial"(arg0: $StringBuilder$Type, arg1: integer, arg2: integer): void
public "encodeBase64BitsAsByte"(arg0: integer): byte
public "acceptsPaddingOnRead"(): boolean
public "withPaddingForbidden"(): $Base64Variant
public "requiresPaddingOnRead"(): boolean
public "missingPaddingMessage"(): string
public "withPaddingRequired"(): $Base64Variant
get "name"(): string
get "maxLineLength"(): integer
get "paddingChar"(): character
get "paddingByte"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Base64Variant$Type = ($Base64Variant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Base64Variant_ = $Base64Variant$Type;
}}
