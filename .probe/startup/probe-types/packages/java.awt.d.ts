declare module "packages/java/awt/image/$SampleModel" {
import {$DataBuffer, $DataBuffer$Type} from "packages/java/awt/image/$DataBuffer"

export class $SampleModel {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "getNumBands"(): integer
public "getSampleSize"(arg0: integer): integer
public "getSampleSize"(): (integer)[]
public "getDataType"(): integer
public "getHeight"(): integer
public "getWidth"(): integer
public "createCompatibleSampleModel"(arg0: integer, arg1: integer): $SampleModel
public "getPixel"(arg0: integer, arg1: integer, arg2: (double)[], arg3: $DataBuffer$Type): (double)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (float)[], arg3: $DataBuffer$Type): (float)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (integer)[], arg3: $DataBuffer$Type): (integer)[]
public "setPixel"(arg0: integer, arg1: integer, arg2: (integer)[], arg3: $DataBuffer$Type): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (float)[], arg3: $DataBuffer$Type): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (double)[], arg3: $DataBuffer$Type): void
public "createDataBuffer"(): $DataBuffer
public "createSubsetSampleModel"(arg0: (integer)[]): $SampleModel
public "setDataElements"(arg0: integer, arg1: integer, arg2: any, arg3: $DataBuffer$Type): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any, arg5: $DataBuffer$Type): void
public "getDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any, arg5: $DataBuffer$Type): any
public "getDataElements"(arg0: integer, arg1: integer, arg2: any, arg3: $DataBuffer$Type): any
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: $DataBuffer$Type): (integer)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[], arg5: $DataBuffer$Type): (double)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[], arg5: $DataBuffer$Type): (float)[]
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[], arg5: $DataBuffer$Type): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[], arg5: $DataBuffer$Type): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: $DataBuffer$Type): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $DataBuffer$Type): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: float, arg4: $DataBuffer$Type): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: double, arg4: $DataBuffer$Type): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[], arg6: $DataBuffer$Type): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $DataBuffer$Type): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[], arg6: $DataBuffer$Type): void
public "getNumDataElements"(): integer
public "getTransferType"(): integer
public "getSample"(arg0: integer, arg1: integer, arg2: integer, arg3: $DataBuffer$Type): integer
public "getSampleFloat"(arg0: integer, arg1: integer, arg2: integer, arg3: $DataBuffer$Type): float
public "getSampleDouble"(arg0: integer, arg1: integer, arg2: integer, arg3: $DataBuffer$Type): double
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $DataBuffer$Type): (integer)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[], arg6: $DataBuffer$Type): (double)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[], arg6: $DataBuffer$Type): (float)[]
get "numBands"(): integer
get "sampleSize"(): (integer)[]
get "dataType"(): integer
get "height"(): integer
get "width"(): integer
get "numDataElements"(): integer
get "transferType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SampleModel$Type = ($SampleModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SampleModel_ = $SampleModel$Type;
}}
declare module "packages/java/awt/geom/$Point2D" {
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

export class $Point2D implements $Cloneable {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public static "distance"(arg0: double, arg1: double, arg2: double, arg3: double): double
public "distance"(arg0: $Point2D$Type): double
public "distance"(arg0: double, arg1: double): double
public "getY"(): double
public "setLocation"(arg0: double, arg1: double): void
public "setLocation"(arg0: $Point2D$Type): void
public "getX"(): double
public "distanceSq"(arg0: double, arg1: double): double
public "distanceSq"(arg0: $Point2D$Type): double
public static "distanceSq"(arg0: double, arg1: double, arg2: double, arg3: double): double
get "y"(): double
set "location"(value: $Point2D$Type)
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Point2D$Type = ($Point2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Point2D_ = $Point2D$Type;
}}
declare module "packages/java/awt/$RenderingHints$Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RenderingHints$Key {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isCompatibleValue"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderingHints$Key$Type = ($RenderingHints$Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderingHints$Key_ = $RenderingHints$Key$Type;
}}
declare module "packages/java/awt/image/$WritableRaster" {
import {$Raster, $Raster$Type} from "packages/java/awt/image/$Raster"

export class $WritableRaster extends $Raster {


public "createWritableChild"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: (integer)[]): $WritableRaster
public "setRect"(arg0: integer, arg1: integer, arg2: $Raster$Type): void
public "setRect"(arg0: $Raster$Type): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (float)[]): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (double)[]): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (integer)[]): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: any): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: $Raster$Type): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[]): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[]): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[]): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: float): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: double): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[]): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[]): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[]): void
public "getWritableParent"(): $WritableRaster
public "createWritableTranslatedChild"(arg0: integer, arg1: integer): $WritableRaster
set "rect"(value: $Raster$Type)
get "writableParent"(): $WritableRaster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableRaster$Type = ($WritableRaster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritableRaster_ = $WritableRaster$Type;
}}
declare module "packages/java/awt/$Point" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $Point extends $Point2D implements $Serializable {
 "x": integer
 "y": integer

constructor(arg0: integer, arg1: integer)
constructor(arg0: $Point$Type)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "getLocation"(): $Point
public "move"(arg0: integer, arg1: integer): void
public "getY"(): double
public "setLocation"(arg0: $Point$Type): void
public "setLocation"(arg0: double, arg1: double): void
public "setLocation"(arg0: integer, arg1: integer): void
public "translate"(arg0: integer, arg1: integer): void
public "getX"(): double
get "location"(): $Point
get "y"(): double
set "location"(value: $Point$Type)
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Point$Type = ($Point);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Point_ = $Point$Type;
}}
declare module "packages/java/awt/geom/$AffineTransform" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"

export class $AffineTransform implements $Cloneable, $Serializable {
static readonly "TYPE_IDENTITY": integer
static readonly "TYPE_TRANSLATION": integer
static readonly "TYPE_UNIFORM_SCALE": integer
static readonly "TYPE_GENERAL_SCALE": integer
static readonly "TYPE_MASK_SCALE": integer
static readonly "TYPE_FLIP": integer
static readonly "TYPE_QUADRANT_ROTATION": integer
static readonly "TYPE_GENERAL_ROTATION": integer
static readonly "TYPE_MASK_ROTATION": integer
static readonly "TYPE_GENERAL_TRANSFORM": integer

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float)
constructor(arg0: (float)[])
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)
constructor(arg0: (double)[])
constructor()
constructor(arg0: $AffineTransform$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public "scale"(arg0: double, arg1: double): void
public "transform"(arg0: (float)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "transform"(arg0: (double)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "transform"(arg0: $Point2D$Type, arg1: $Point2D$Type): $Point2D
public "transform"(arg0: (float)[], arg1: integer, arg2: (float)[], arg3: integer, arg4: integer): void
public "transform"(arg0: ($Point2D$Type)[], arg1: integer, arg2: ($Point2D$Type)[], arg3: integer, arg4: integer): void
public "transform"(arg0: (double)[], arg1: integer, arg2: (float)[], arg3: integer, arg4: integer): void
public "getType"(): integer
public "isIdentity"(): boolean
public "rotate"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "rotate"(arg0: double, arg1: double): void
public "rotate"(arg0: double, arg1: double, arg2: double): void
public "rotate"(arg0: double): void
public "invert"(): void
public "concatenate"(arg0: $AffineTransform$Type): void
public "preConcatenate"(arg0: $AffineTransform$Type): void
public "setTransform"(arg0: $AffineTransform$Type): void
public "setTransform"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
public "setToTranslation"(arg0: double, arg1: double): void
public "setToRotation"(arg0: double, arg1: double, arg2: double): void
public "setToRotation"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setToRotation"(arg0: double, arg1: double): void
public "setToRotation"(arg0: double): void
public "setToQuadrantRotation"(arg0: integer, arg1: double, arg2: double): void
public "setToQuadrantRotation"(arg0: integer): void
public "setToScale"(arg0: double, arg1: double): void
public "setToShear"(arg0: double, arg1: double): void
public "translate"(arg0: double, arg1: double): void
public "getDeterminant"(): double
public "getShearX"(): double
public "getShearY"(): double
public static "getTranslateInstance"(arg0: double, arg1: double): $AffineTransform
public "getScaleX"(): double
public "getScaleY"(): double
public "getMatrix"(arg0: (double)[]): void
public static "getRotateInstance"(arg0: double, arg1: double): $AffineTransform
public static "getRotateInstance"(arg0: double, arg1: double, arg2: double): $AffineTransform
public static "getRotateInstance"(arg0: double, arg1: double, arg2: double, arg3: double): $AffineTransform
public static "getRotateInstance"(arg0: double): $AffineTransform
public static "getQuadrantRotateInstance"(arg0: integer, arg1: double, arg2: double): $AffineTransform
public static "getQuadrantRotateInstance"(arg0: integer): $AffineTransform
public static "getScaleInstance"(arg0: double, arg1: double): $AffineTransform
public static "getShearInstance"(arg0: double, arg1: double): $AffineTransform
public "quadrantRotate"(arg0: integer, arg1: double, arg2: double): void
public "quadrantRotate"(arg0: integer): void
public "setToIdentity"(): void
public "inverseTransform"(arg0: $Point2D$Type, arg1: $Point2D$Type): $Point2D
public "inverseTransform"(arg0: (double)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "createTransformedShape"(arg0: $Shape$Type): $Shape
public "getTranslateX"(): double
public "getTranslateY"(): double
public "deltaTransform"(arg0: (double)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "deltaTransform"(arg0: $Point2D$Type, arg1: $Point2D$Type): $Point2D
public "createInverse"(): $AffineTransform
public "shear"(arg0: double, arg1: double): void
get "type"(): integer
get "identity"(): boolean
set "toRotation"(value: double)
set "toQuadrantRotation"(value: integer)
get "determinant"(): double
get "shearX"(): double
get "shearY"(): double
get "scaleX"(): double
get "scaleY"(): double
get "translateX"(): double
get "translateY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AffineTransform$Type = ($AffineTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AffineTransform_ = $AffineTransform$Type;
}}
declare module "packages/java/awt/$Shape" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$PathIterator, $PathIterator$Type} from "packages/java/awt/geom/$PathIterator"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export interface $Shape {

 "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "contains"(arg0: double, arg1: double): boolean
 "contains"(arg0: $Rectangle2D$Type): boolean
 "contains"(arg0: $Point2D$Type): boolean
 "getBounds"(): $Rectangle
 "intersects"(arg0: $Rectangle2D$Type): boolean
 "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "getBounds2D"(): $Rectangle2D
 "getPathIterator"(arg0: $AffineTransform$Type, arg1: double): $PathIterator
 "getPathIterator"(arg0: $AffineTransform$Type): $PathIterator
}

export namespace $Shape {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shape$Type = ($Shape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Shape_ = $Shape$Type;
}}
declare module "packages/java/awt/geom/$Rectangle2D" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Line2D, $Line2D$Type} from "packages/java/awt/geom/$Line2D"
import {$RectangularShape, $RectangularShape$Type} from "packages/java/awt/geom/$RectangularShape"
import {$PathIterator, $PathIterator$Type} from "packages/java/awt/geom/$PathIterator"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $Rectangle2D extends $RectangularShape {
static readonly "OUT_LEFT": integer
static readonly "OUT_TOP": integer
static readonly "OUT_RIGHT": integer
static readonly "OUT_BOTTOM": integer


public "add"(arg0: double, arg1: double): void
public "add"(arg0: $Point2D$Type): void
public "add"(arg0: $Rectangle2D$Type): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public static "union"(arg0: $Rectangle2D$Type, arg1: $Rectangle2D$Type, arg2: $Rectangle2D$Type): void
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public static "intersect"(arg0: $Rectangle2D$Type, arg1: $Rectangle2D$Type, arg2: $Rectangle2D$Type): void
public "setRect"(arg0: $Rectangle2D$Type): void
public "setRect"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "getBounds2D"(): $Rectangle2D
public "outcode"(arg0: double, arg1: double): integer
public "outcode"(arg0: $Point2D$Type): integer
public "createIntersection"(arg0: $Rectangle2D$Type): $Rectangle2D
public "createUnion"(arg0: $Rectangle2D$Type): $Rectangle2D
public "getPathIterator"(arg0: $AffineTransform$Type): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$Type, arg1: double): $PathIterator
public "intersectsLine"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "intersectsLine"(arg0: $Line2D$Type): boolean
public "setFrame"(arg0: double, arg1: double, arg2: double, arg3: double): void
set "rect"(value: $Rectangle2D$Type)
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle2D$Type = ($Rectangle2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rectangle2D_ = $Rectangle2D$Type;
}}
declare module "packages/java/awt/$RenderingHints" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$RenderingHints$Key, $RenderingHints$Key$Type} from "packages/java/awt/$RenderingHints$Key"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $RenderingHints implements $Map<(any), (any)>, $Cloneable {
static readonly "KEY_ANTIALIASING": $RenderingHints$Key
static readonly "VALUE_ANTIALIAS_ON": any
static readonly "VALUE_ANTIALIAS_OFF": any
static readonly "VALUE_ANTIALIAS_DEFAULT": any
static readonly "KEY_RENDERING": $RenderingHints$Key
static readonly "VALUE_RENDER_SPEED": any
static readonly "VALUE_RENDER_QUALITY": any
static readonly "VALUE_RENDER_DEFAULT": any
static readonly "KEY_DITHERING": $RenderingHints$Key
static readonly "VALUE_DITHER_DISABLE": any
static readonly "VALUE_DITHER_ENABLE": any
static readonly "VALUE_DITHER_DEFAULT": any
static readonly "KEY_TEXT_ANTIALIASING": $RenderingHints$Key
static readonly "VALUE_TEXT_ANTIALIAS_ON": any
static readonly "VALUE_TEXT_ANTIALIAS_OFF": any
static readonly "VALUE_TEXT_ANTIALIAS_DEFAULT": any
static readonly "VALUE_TEXT_ANTIALIAS_GASP": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_HRGB": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_HBGR": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_VRGB": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_VBGR": any
static readonly "KEY_TEXT_LCD_CONTRAST": $RenderingHints$Key
static readonly "KEY_FRACTIONALMETRICS": $RenderingHints$Key
static readonly "VALUE_FRACTIONALMETRICS_OFF": any
static readonly "VALUE_FRACTIONALMETRICS_ON": any
static readonly "VALUE_FRACTIONALMETRICS_DEFAULT": any
static readonly "KEY_INTERPOLATION": $RenderingHints$Key
static readonly "VALUE_INTERPOLATION_NEAREST_NEIGHBOR": any
static readonly "VALUE_INTERPOLATION_BILINEAR": any
static readonly "VALUE_INTERPOLATION_BICUBIC": any
static readonly "KEY_ALPHA_INTERPOLATION": $RenderingHints$Key
static readonly "VALUE_ALPHA_INTERPOLATION_SPEED": any
static readonly "VALUE_ALPHA_INTERPOLATION_QUALITY": any
static readonly "VALUE_ALPHA_INTERPOLATION_DEFAULT": any
static readonly "KEY_COLOR_RENDERING": $RenderingHints$Key
static readonly "VALUE_COLOR_RENDER_SPEED": any
static readonly "VALUE_COLOR_RENDER_QUALITY": any
static readonly "VALUE_COLOR_RENDER_DEFAULT": any
static readonly "KEY_STROKE_CONTROL": $RenderingHints$Key
static readonly "VALUE_STROKE_DEFAULT": any
static readonly "VALUE_STROKE_NORMALIZE": any
static readonly "VALUE_STROKE_PURE": any
static readonly "KEY_RESOLUTION_VARIANT": $RenderingHints$Key
static readonly "VALUE_RESOLUTION_VARIANT_DEFAULT": any
static readonly "VALUE_RESOLUTION_VARIANT_BASE": any
static readonly "VALUE_RESOLUTION_VARIANT_SIZE_FIT": any
static readonly "VALUE_RESOLUTION_VARIANT_DPI_FIT": any

constructor(arg0: $Map$Type<($RenderingHints$Key$Type), (any)>)
constructor(arg0: $RenderingHints$Key$Type, arg1: any)

public "add"(arg0: $RenderingHints$Type): void
public "remove"(arg0: any): any
public "get"(arg0: any): any
public "put"(arg0: any, arg1: any): any
public "equals"(arg0: any): boolean
public "toString"(): string
public "values"(): $Collection<(any)>
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(any), (any)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(any)>
public "containsValue"(arg0: any): boolean
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(any), (any)>
public "replace"(arg0: any, arg1: any): any
public "replace"(arg0: any, arg1: any, arg2: any): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): $Map<(any), (any)>
public static "of"<K, V>(): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any, arg16: any, arg17: any, arg18: any, arg19: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any, arg16: any, arg17: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any): $Map<(any), (any)>
public "merge"(arg0: any, arg1: any, arg2: $BiFunction$Type<(any), (any), (any)>): any
public "putIfAbsent"(arg0: any, arg1: any): any
public "compute"(arg0: any, arg1: $BiFunction$Type<(any), (any), (any)>): any
public static "entry"<K, V>(arg0: any, arg1: any): $Map$Entry<(any), (any)>
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: any, arg1: $Function$Type<(any), (any)>): any
public "getOrDefault"(arg0: any, arg1: any): any
public "computeIfPresent"(arg0: any, arg1: $BiFunction$Type<(any), (any), (any)>): any
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(any), (any)>
[index: string | number]: any
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderingHints$Type = ($RenderingHints);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderingHints_ = $RenderingHints$Type;
}}
declare module "packages/java/awt/image/$Raster" {
import {$WritableRaster, $WritableRaster$Type} from "packages/java/awt/image/$WritableRaster"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$SampleModel, $SampleModel$Type} from "packages/java/awt/image/$SampleModel"
import {$DataBuffer, $DataBuffer$Type} from "packages/java/awt/image/$DataBuffer"

export class $Raster {


public "getBounds"(): $Rectangle
public "getParent"(): $Raster
public "getSampleModel"(): $SampleModel
public "getNumBands"(): integer
public "getHeight"(): integer
public "getWidth"(): integer
public "getMinX"(): integer
public "getMinY"(): integer
public static "createWritableRaster"(arg0: $SampleModel$Type, arg1: $DataBuffer$Type, arg2: $Point$Type): $WritableRaster
public static "createWritableRaster"(arg0: $SampleModel$Type, arg1: $Point$Type): $WritableRaster
public static "createPackedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: (integer)[], arg4: $Point$Type): $WritableRaster
public static "createPackedRaster"(arg0: $DataBuffer$Type, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: $Point$Type): $WritableRaster
public static "createPackedRaster"(arg0: $DataBuffer$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $Point$Type): $WritableRaster
public static "createPackedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Point$Type): $WritableRaster
public static "createInterleavedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $Point$Type): $WritableRaster
public static "createInterleavedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Point$Type): $WritableRaster
public static "createInterleavedRaster"(arg0: $DataBuffer$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $Point$Type): $WritableRaster
public static "createRaster"(arg0: $SampleModel$Type, arg1: $DataBuffer$Type, arg2: $Point$Type): $Raster
public "getPixel"(arg0: integer, arg1: integer, arg2: (integer)[]): (integer)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (double)[]): (double)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (float)[]): (float)[]
public "getDataBuffer"(): $DataBuffer
public "getDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any): any
public "getDataElements"(arg0: integer, arg1: integer, arg2: any): any
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[]): (double)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[]): (float)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[]): (integer)[]
public static "createBandedRaster"(arg0: $DataBuffer$Type, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: (integer)[], arg6: $Point$Type): $WritableRaster
public static "createBandedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Point$Type): $WritableRaster
public static "createBandedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: (integer)[], arg6: $Point$Type): $WritableRaster
public "getNumDataElements"(): integer
public "createCompatibleWritableRaster"(arg0: $Rectangle$Type): $WritableRaster
public "createCompatibleWritableRaster"(): $WritableRaster
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer): $WritableRaster
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $WritableRaster
public "createChild"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: (integer)[]): $Raster
public "getTransferType"(): integer
public "getSample"(arg0: integer, arg1: integer, arg2: integer): integer
public "getSampleFloat"(arg0: integer, arg1: integer, arg2: integer): float
public "getSampleDouble"(arg0: integer, arg1: integer, arg2: integer): double
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[]): (integer)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[]): (double)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[]): (float)[]
public "getSampleModelTranslateX"(): integer
public "getSampleModelTranslateY"(): integer
public "createTranslatedChild"(arg0: integer, arg1: integer): $Raster
get "bounds"(): $Rectangle
get "parent"(): $Raster
get "sampleModel"(): $SampleModel
get "numBands"(): integer
get "height"(): integer
get "width"(): integer
get "minX"(): integer
get "minY"(): integer
get "dataBuffer"(): $DataBuffer
get "numDataElements"(): integer
get "transferType"(): integer
get "sampleModelTranslateX"(): integer
get "sampleModelTranslateY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Raster$Type = ($Raster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Raster_ = $Raster$Type;
}}
declare module "packages/java/awt/$Dimension" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Dimension2D, $Dimension2D$Type} from "packages/java/awt/geom/$Dimension2D"

export class $Dimension extends $Dimension2D implements $Serializable {
 "width": integer
 "height": integer

constructor(arg0: $Dimension$Type)
constructor()
constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSize"(): $Dimension
public "setSize"(arg0: $Dimension$Type): void
public "setSize"(arg0: double, arg1: double): void
public "setSize"(arg0: integer, arg1: integer): void
public "getHeight"(): double
public "getWidth"(): double
get "size"(): $Dimension
set "size"(value: $Dimension$Type)
get "height"(): double
get "width"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dimension$Type = ($Dimension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dimension_ = $Dimension$Type;
}}
declare module "packages/java/awt/image/$DataBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataBuffer {
static readonly "TYPE_BYTE": integer
static readonly "TYPE_USHORT": integer
static readonly "TYPE_SHORT": integer
static readonly "TYPE_INT": integer
static readonly "TYPE_FLOAT": integer
static readonly "TYPE_DOUBLE": integer
static readonly "TYPE_UNDEFINED": integer


public "getSize"(): integer
public "getOffset"(): integer
public "getOffsets"(): (integer)[]
public "getDataType"(): integer
public "getElem"(arg0: integer, arg1: integer): integer
public "getElem"(arg0: integer): integer
public "setElem"(arg0: integer, arg1: integer, arg2: integer): void
public "setElem"(arg0: integer, arg1: integer): void
public static "getDataTypeSize"(arg0: integer): integer
public "getNumBanks"(): integer
public "getElemFloat"(arg0: integer): float
public "getElemFloat"(arg0: integer, arg1: integer): float
public "setElemFloat"(arg0: integer, arg1: integer, arg2: float): void
public "setElemFloat"(arg0: integer, arg1: float): void
public "getElemDouble"(arg0: integer, arg1: integer): double
public "getElemDouble"(arg0: integer): double
public "setElemDouble"(arg0: integer, arg1: double): void
public "setElemDouble"(arg0: integer, arg1: integer, arg2: double): void
get "size"(): integer
get "offset"(): integer
get "offsets"(): (integer)[]
get "dataType"(): integer
get "numBanks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataBuffer$Type = ($DataBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataBuffer_ = $DataBuffer$Type;
}}
declare module "packages/java/awt/geom/$Line2D" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$PathIterator, $PathIterator$Type} from "packages/java/awt/geom/$PathIterator"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $Line2D implements $Shape, $Cloneable {


public "clone"(): any
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: $Point2D$Type): boolean
public "contains"(arg0: $Rectangle2D$Type): boolean
public "contains"(arg0: double, arg1: double): boolean
public "getBounds"(): $Rectangle
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "intersects"(arg0: $Rectangle2D$Type): boolean
public "setLine"(arg0: $Point2D$Type, arg1: $Point2D$Type): void
public "setLine"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setLine"(arg0: $Line2D$Type): void
public "getPathIterator"(arg0: $AffineTransform$Type, arg1: double): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$Type): $PathIterator
public "getX1"(): double
public "getY1"(): double
public "getX2"(): double
public "getY2"(): double
public "intersectsLine"(arg0: $Line2D$Type): boolean
public "intersectsLine"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public static "relativeCCW"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): integer
public "relativeCCW"(arg0: double, arg1: double): integer
public "relativeCCW"(arg0: $Point2D$Type): integer
public static "linesIntersect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): boolean
public "ptSegDistSq"(arg0: double, arg1: double): double
public static "ptSegDistSq"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptSegDistSq"(arg0: $Point2D$Type): double
public "ptSegDist"(arg0: $Point2D$Type): double
public "ptSegDist"(arg0: double, arg1: double): double
public static "ptSegDist"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptLineDistSq"(arg0: double, arg1: double): double
public "ptLineDistSq"(arg0: $Point2D$Type): double
public static "ptLineDistSq"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptLineDist"(arg0: $Point2D$Type): double
public static "ptLineDist"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptLineDist"(arg0: double, arg1: double): double
public "getP1"(): $Point2D
public "getP2"(): $Point2D
public "getBounds2D"(): $Rectangle2D
get "bounds"(): $Rectangle
set "line"(value: $Line2D$Type)
get "x1"(): double
get "y1"(): double
get "x2"(): double
get "y2"(): double
get "p1"(): $Point2D
get "p2"(): $Point2D
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Line2D$Type = ($Line2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Line2D_ = $Line2D$Type;
}}
declare module "packages/java/awt/$PaintContext" {
import {$Raster, $Raster$Type} from "packages/java/awt/image/$Raster"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"

export interface $PaintContext {

 "dispose"(): void
 "getColorModel"(): $ColorModel
 "getRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Raster
}

export namespace $PaintContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintContext$Type = ($PaintContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintContext_ = $PaintContext$Type;
}}
declare module "packages/java/awt/$Color" {
import {$RenderingHints, $RenderingHints$Type} from "packages/java/awt/$RenderingHints"
import {$ColorSpace, $ColorSpace$Type} from "packages/java/awt/color/$ColorSpace"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$Paint, $Paint$Type} from "packages/java/awt/$Paint"
import {$PaintContext, $PaintContext$Type} from "packages/java/awt/$PaintContext"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $Color implements $Paint, $Serializable {
static readonly "white": $Color
static readonly "WHITE": $Color
static readonly "lightGray": $Color
static readonly "LIGHT_GRAY": $Color
static readonly "gray": $Color
static readonly "GRAY": $Color
static readonly "darkGray": $Color
static readonly "DARK_GRAY": $Color
static readonly "black": $Color
static readonly "BLACK": $Color
static readonly "red": $Color
static readonly "RED": $Color
static readonly "pink": $Color
static readonly "PINK": $Color
static readonly "orange": $Color
static readonly "ORANGE": $Color
static readonly "yellow": $Color
static readonly "YELLOW": $Color
static readonly "green": $Color
static readonly "GREEN": $Color
static readonly "magenta": $Color
static readonly "MAGENTA": $Color
static readonly "cyan": $Color
static readonly "CYAN": $Color
static readonly "blue": $Color
static readonly "BLUE": $Color

constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: integer)
constructor(arg0: integer, arg1: boolean)
constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: $ColorSpace$Type, arg1: (float)[], arg2: float)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(arg0: string): $Color
public "getColorSpace"(): $ColorSpace
public "createContext"(arg0: $ColorModel$Type, arg1: $Rectangle$Type, arg2: $Rectangle2D$Type, arg3: $AffineTransform$Type, arg4: $RenderingHints$Type): $PaintContext
public static "getColor"(arg0: string, arg1: $Color$Type): $Color
public static "getColor"(arg0: string, arg1: integer): $Color
public static "getColor"(arg0: string): $Color
public "getComponents"(arg0: $ColorSpace$Type, arg1: (float)[]): (float)[]
public "getComponents"(arg0: (float)[]): (float)[]
public "getRGB"(): integer
public "getAlpha"(): integer
public "brighter"(): $Color
public "darker"(): $Color
public static "HSBtoRGB"(arg0: float, arg1: float, arg2: float): integer
public "getRGBComponents"(arg0: (float)[]): (float)[]
public "getRGBColorComponents"(arg0: (float)[]): (float)[]
public static "RGBtoHSB"(arg0: integer, arg1: integer, arg2: integer, arg3: (float)[]): (float)[]
public static "getHSBColor"(arg0: float, arg1: float, arg2: float): $Color
public "getColorComponents"(arg0: $ColorSpace$Type, arg1: (float)[]): (float)[]
public "getColorComponents"(arg0: (float)[]): (float)[]
public "getRed"(): integer
public "getGreen"(): integer
public "getBlue"(): integer
public "getTransparency"(): integer
get "colorSpace"(): $ColorSpace
get "rGB"(): integer
get "alpha"(): integer
get "red"(): integer
get "green"(): integer
get "blue"(): integer
get "transparency"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$Type = ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$Type;
}}
declare module "packages/java/awt/geom/$PathIterator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PathIterator {

 "next"(): void
 "isDone"(): boolean
 "currentSegment"(arg0: (float)[]): integer
 "currentSegment"(arg0: (double)[]): integer
 "getWindingRule"(): integer
}

export namespace $PathIterator {
const WIND_EVEN_ODD: integer
const WIND_NON_ZERO: integer
const SEG_MOVETO: integer
const SEG_LINETO: integer
const SEG_QUADTO: integer
const SEG_CUBICTO: integer
const SEG_CLOSE: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathIterator$Type = ($PathIterator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PathIterator_ = $PathIterator$Type;
}}
declare module "packages/java/awt/$Transparency" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Transparency {

 "getTransparency"(): integer

(): integer
}

export namespace $Transparency {
const OPAQUE: integer
const BITMASK: integer
const TRANSLUCENT: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transparency$Type = ($Transparency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transparency_ = $Transparency$Type;
}}
declare module "packages/java/awt/image/$ColorModel" {
import {$WritableRaster, $WritableRaster$Type} from "packages/java/awt/image/$WritableRaster"
import {$ColorSpace, $ColorSpace$Type} from "packages/java/awt/color/$ColorSpace"
import {$Raster, $Raster$Type} from "packages/java/awt/image/$Raster"
import {$SampleModel, $SampleModel$Type} from "packages/java/awt/image/$SampleModel"
import {$Transparency, $Transparency$Type} from "packages/java/awt/$Transparency"

export class $ColorModel implements $Transparency {

constructor(arg0: integer)

/**
 * 
 * @deprecated
 */
public "finalize"(): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getComponentSize"(): (integer)[]
public "getComponentSize"(arg0: integer): integer
public "hasAlpha"(): boolean
public "getNumComponents"(): integer
public "getColorSpace"(): $ColorSpace
public "getComponents"(arg0: any, arg1: (integer)[], arg2: integer): (integer)[]
public "getComponents"(arg0: integer, arg1: (integer)[], arg2: integer): (integer)[]
public "getRGB"(arg0: integer): integer
public "getRGB"(arg0: any): integer
public "getAlpha"(arg0: integer): integer
public "getAlpha"(arg0: any): integer
public "isCompatibleSampleModel"(arg0: $SampleModel$Type): boolean
public "createCompatibleSampleModel"(arg0: integer, arg1: integer): $SampleModel
public "isAlphaPremultiplied"(): boolean
public "getDataElements"(arg0: (integer)[], arg1: integer, arg2: any): any
public "getDataElements"(arg0: integer, arg1: any): any
public "getDataElements"(arg0: (float)[], arg1: integer, arg2: any): any
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer): $WritableRaster
public "getTransferType"(): integer
public "getRed"(arg0: integer): integer
public "getRed"(arg0: any): integer
public "getGreen"(arg0: integer): integer
public "getGreen"(arg0: any): integer
public "getBlue"(arg0: any): integer
public "getBlue"(arg0: integer): integer
public "getUnnormalizedComponents"(arg0: (float)[], arg1: integer, arg2: (integer)[], arg3: integer): (integer)[]
public "getDataElement"(arg0: (integer)[], arg1: integer): integer
public "getDataElement"(arg0: (float)[], arg1: integer): integer
public "getNormalizedComponents"(arg0: (integer)[], arg1: integer, arg2: (float)[], arg3: integer): (float)[]
public "getNormalizedComponents"(arg0: any, arg1: (float)[], arg2: integer): (float)[]
public static "getRGBdefault"(): $ColorModel
public "getPixelSize"(): integer
public "getTransparency"(): integer
public "getNumColorComponents"(): integer
public "coerceData"(arg0: $WritableRaster$Type, arg1: boolean): $ColorModel
public "isCompatibleRaster"(arg0: $Raster$Type): boolean
public "getAlphaRaster"(arg0: $WritableRaster$Type): $WritableRaster
get "componentSize"(): (integer)[]
get "numComponents"(): integer
get "colorSpace"(): $ColorSpace
get "alphaPremultiplied"(): boolean
get "transferType"(): integer
get "rGBdefault"(): $ColorModel
get "pixelSize"(): integer
get "transparency"(): integer
get "numColorComponents"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorModel$Type = ($ColorModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorModel_ = $ColorModel$Type;
}}
declare module "packages/java/awt/geom/$RectangularShape" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Dimension2D, $Dimension2D$Type} from "packages/java/awt/geom/$Dimension2D"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$PathIterator, $PathIterator$Type} from "packages/java/awt/geom/$PathIterator"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $RectangularShape implements $Shape, $Cloneable {


public "clone"(): any
public "isEmpty"(): boolean
public "contains"(arg0: $Point2D$Type): boolean
public "contains"(arg0: $Rectangle2D$Type): boolean
public "getBounds"(): $Rectangle
public "getY"(): double
public "intersects"(arg0: $Rectangle2D$Type): boolean
public "getHeight"(): double
public "getWidth"(): double
public "getX"(): double
public "getMinX"(): double
public "getMinY"(): double
public "getPathIterator"(arg0: $AffineTransform$Type, arg1: double): $PathIterator
public "getMaxX"(): double
public "getMaxY"(): double
public "setFrame"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setFrame"(arg0: $Rectangle2D$Type): void
public "setFrame"(arg0: $Point2D$Type, arg1: $Dimension2D$Type): void
public "setFrameFromDiagonal"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setFrameFromDiagonal"(arg0: $Point2D$Type, arg1: $Point2D$Type): void
public "setFrameFromCenter"(arg0: $Point2D$Type, arg1: $Point2D$Type): void
public "setFrameFromCenter"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "getCenterX"(): double
public "getCenterY"(): double
public "getFrame"(): $Rectangle2D
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: double, arg1: double): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "getBounds2D"(): $Rectangle2D
public "getPathIterator"(arg0: $AffineTransform$Type): $PathIterator
get "empty"(): boolean
get "bounds"(): $Rectangle
get "y"(): double
get "height"(): double
get "width"(): double
get "x"(): double
get "minX"(): double
get "minY"(): double
get "maxX"(): double
get "maxY"(): double
set "frame"(value: $Rectangle2D$Type)
get "centerX"(): double
get "centerY"(): double
get "frame"(): $Rectangle2D
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RectangularShape$Type = ($RectangularShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RectangularShape_ = $RectangularShape$Type;
}}
declare module "packages/java/awt/geom/$Dimension2D" {
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

export class $Dimension2D implements $Cloneable {


public "clone"(): any
public "setSize"(arg0: double, arg1: double): void
public "setSize"(arg0: $Dimension2D$Type): void
public "getHeight"(): double
public "getWidth"(): double
set "size"(value: $Dimension2D$Type)
get "height"(): double
get "width"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dimension2D$Type = ($Dimension2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dimension2D_ = $Dimension2D$Type;
}}
declare module "packages/java/awt/color/$ColorSpace" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $ColorSpace implements $Serializable {
static readonly "TYPE_XYZ": integer
static readonly "TYPE_Lab": integer
static readonly "TYPE_Luv": integer
static readonly "TYPE_YCbCr": integer
static readonly "TYPE_Yxy": integer
static readonly "TYPE_RGB": integer
static readonly "TYPE_GRAY": integer
static readonly "TYPE_HSV": integer
static readonly "TYPE_HLS": integer
static readonly "TYPE_CMYK": integer
static readonly "TYPE_CMY": integer
static readonly "TYPE_2CLR": integer
static readonly "TYPE_3CLR": integer
static readonly "TYPE_4CLR": integer
static readonly "TYPE_5CLR": integer
static readonly "TYPE_6CLR": integer
static readonly "TYPE_7CLR": integer
static readonly "TYPE_8CLR": integer
static readonly "TYPE_9CLR": integer
static readonly "TYPE_ACLR": integer
static readonly "TYPE_BCLR": integer
static readonly "TYPE_CCLR": integer
static readonly "TYPE_DCLR": integer
static readonly "TYPE_ECLR": integer
static readonly "TYPE_FCLR": integer
static readonly "CS_sRGB": integer
static readonly "CS_LINEAR_RGB": integer
static readonly "CS_CIEXYZ": integer
static readonly "CS_PYCC": integer
static readonly "CS_GRAY": integer


public "getName"(arg0: integer): string
public static "getInstance"(arg0: integer): $ColorSpace
public "getType"(): integer
public "getMinValue"(arg0: integer): float
public "getMaxValue"(arg0: integer): float
public "getNumComponents"(): integer
public "isCS_sRGB"(): boolean
public "toRGB"(arg0: (float)[]): (float)[]
public "fromRGB"(arg0: (float)[]): (float)[]
public "toCIEXYZ"(arg0: (float)[]): (float)[]
public "fromCIEXYZ"(arg0: (float)[]): (float)[]
get "type"(): integer
get "numComponents"(): integer
get "cS_sRGB"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorSpace$Type = ($ColorSpace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorSpace_ = $ColorSpace$Type;
}}
declare module "packages/java/awt/$Rectangle" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Point, $Point$Type} from "packages/java/awt/$Point"
import {$PathIterator, $PathIterator$Type} from "packages/java/awt/geom/$PathIterator"
import {$Dimension, $Dimension$Type} from "packages/java/awt/$Dimension"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export class $Rectangle extends $Rectangle2D implements $Shape, $Serializable {
 "x": integer
 "y": integer
 "width": integer
 "height": integer
static readonly "OUT_LEFT": integer
static readonly "OUT_TOP": integer
static readonly "OUT_RIGHT": integer
static readonly "OUT_BOTTOM": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer)
constructor(arg0: $Dimension$Type)
constructor(arg0: $Point$Type)
constructor(arg0: $Rectangle$Type)
constructor()
constructor(arg0: $Point$Type, arg1: $Dimension$Type)

public "add"(arg0: $Rectangle$Type): void
public "add"(arg0: $Point$Type): void
public "add"(arg0: integer, arg1: integer): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "isEmpty"(): boolean
public "contains"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "contains"(arg0: $Rectangle$Type): boolean
public "contains"(arg0: $Point$Type): boolean
public "contains"(arg0: integer, arg1: integer): boolean
public "getBounds"(): $Rectangle
public "getLocation"(): $Point
public "getSize"(): $Dimension
public "grow"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "resize"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "move"(arg0: integer, arg1: integer): void
public "setSize"(arg0: integer, arg1: integer): void
public "setSize"(arg0: $Dimension$Type): void
public "union"(arg0: $Rectangle$Type): $Rectangle
public "getY"(): double
public "intersection"(arg0: $Rectangle$Type): $Rectangle
public "intersects"(arg0: $Rectangle$Type): boolean
public "setLocation"(arg0: $Point$Type): void
public "setLocation"(arg0: integer, arg1: integer): void
public "translate"(arg0: integer, arg1: integer): void
public "setBounds"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setBounds"(arg0: $Rectangle$Type): void
public "getHeight"(): double
public "getWidth"(): double
public "getX"(): double
public "setRect"(arg0: double, arg1: double, arg2: double, arg3: double): void
/**
 * 
 * @deprecated
 */
public "reshape"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
/**
 * 
 * @deprecated
 */
public "inside"(arg0: integer, arg1: integer): boolean
public "getBounds2D"(): $Rectangle2D
public "outcode"(arg0: double, arg1: double): integer
public "createIntersection"(arg0: $Rectangle2D$Type): $Rectangle2D
public "createUnion"(arg0: $Rectangle2D$Type): $Rectangle2D
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: $Rectangle2D$Type): boolean
public "contains"(arg0: $Point2D$Type): boolean
public "intersects"(arg0: $Rectangle2D$Type): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "getPathIterator"(arg0: $AffineTransform$Type, arg1: double): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$Type): $PathIterator
get "empty"(): boolean
get "bounds"(): $Rectangle
get "location"(): $Point
get "size"(): $Dimension
set "size"(value: $Dimension$Type)
get "y"(): double
set "location"(value: $Point$Type)
set "bounds"(value: $Rectangle$Type)
get "height"(): double
get "width"(): double
get "x"(): double
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle$Type = ($Rectangle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rectangle_ = $Rectangle$Type;
}}
declare module "packages/java/awt/$Paint" {
import {$RenderingHints, $RenderingHints$Type} from "packages/java/awt/$RenderingHints"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$ColorModel, $ColorModel$Type} from "packages/java/awt/image/$ColorModel"
import {$Transparency, $Transparency$Type} from "packages/java/awt/$Transparency"
import {$Rectangle2D, $Rectangle2D$Type} from "packages/java/awt/geom/$Rectangle2D"
import {$PaintContext, $PaintContext$Type} from "packages/java/awt/$PaintContext"
import {$AffineTransform, $AffineTransform$Type} from "packages/java/awt/geom/$AffineTransform"

export interface $Paint extends $Transparency {

 "createContext"(arg0: $ColorModel$Type, arg1: $Rectangle$Type, arg2: $Rectangle2D$Type, arg3: $AffineTransform$Type, arg4: $RenderingHints$Type): $PaintContext
 "getTransparency"(): integer
}

export namespace $Paint {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Paint$Type = ($Paint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Paint_ = $Paint$Type;
}}
