declare module "packages/doggytalents/client/entity/model/dog/$DogModel" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Accessory, $Accessory$Type} from "packages/doggytalents/api/registry/$Accessory"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Dog, $Dog$Type} from "packages/doggytalents/common/entity/$Dog"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AccessoryInstance, $AccessoryInstance$Type} from "packages/doggytalents/api/registry/$AccessoryInstance"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"

export class $DogModel extends $EntityModel<($Dog)> {
static readonly "MANE_LYING_OFF": (float)[]
static readonly "MANE_SITTING_OFF": (float)[]
static readonly "TAIL_LYING_OFF": (float)[]
static readonly "TAIL_SITTING_OFF": (float)[]
static readonly "DEFAULT_ROOT_PIVOT": $Vector3f
 "head": $ModelPart
 "realHead": $ModelPart
 "body": $ModelPart
 "mane": $ModelPart
 "legBackRight": $ModelPart
 "legBackLeft": $ModelPart
 "legFrontRight": $ModelPart
 "legFrontLeft": $ModelPart
 "tail": $ModelPart
 "realTail": $ModelPart
 "root": $ModelPart
 "earLeft": $Optional<($ModelPart)>
 "earRight": $Optional<($ModelPart)>
 "attackTime": float
 "riding": boolean
 "young": boolean
readonly "renderType": $Function<($ResourceLocation), ($RenderType)>

constructor(arg0: $ModelPart$Type)
constructor(arg0: $ModelPart$Type, arg1: $Function$Type<($ResourceLocation$Type), ($RenderType$Type)>)

public "copyFrom"(arg0: $DogModel$Type): void
public "prepareMobModel"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float): void
public "copyPropertiesTo"(arg0: $EntityModel$Type<($Dog$Type)>): void
public "setUpStandPose"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float): void
public "setupFaintPose"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float): void
public "resetAllPose"(): void
public "setUpSitPose"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float): void
public "setupDrownPose"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float): void
public "resetPart"(arg0: $ModelPart$Type, arg1: $Dog$Type): void
public "adjustAnimatedPart"(arg0: $ModelPart$Type, arg1: $Dog$Type): void
public "setupLyingPose2"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float): void
public "setupRestPose"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float): void
public "setupFaintPose2"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float): void
public "setupFlyPose"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float): void
public "setWetShade"(arg0: float): void
public "hasDefaultScale"(): boolean
public "armorShouldRender"(arg0: $Dog$Type): boolean
public "getDefaultScale"(): float
public "scaleBabyDog"(): boolean
public "incapShouldRender"(arg0: $Dog$Type): boolean
public "resetWetShade"(): void
public "warnAccessory"(arg0: $Dog$Type, arg1: $Accessory$Type): boolean
public "setVisible"(arg0: boolean): void
public "searchForPartWithName"(arg0: string): $Optional<($ModelPart)>
public "translateShakingDog"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float): void
public "hasAdditonalRendering"(): boolean
public "acessoryShouldRender"(arg0: $Dog$Type, arg1: $AccessoryInstance$Type): boolean
public "translateBeggingDog"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float): void
public "doAdditonalRendering"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: $PoseStack$Type, arg4: $MultiBufferSource$Type, arg5: integer): void
public "animateStandWalking"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float): void
public "useDefaultModelForAccessories"(): boolean
public "getCustomRootPivotPoint"(): $Vector3f
public static "createBodyLayer"(): $LayerDefinition
public "renderToBuffer"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float): void
public "tickClient"(): boolean
public "doTickClient"(arg0: $Dog$Type): void
public "setupAnim"(arg0: $Dog$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
set "wetShade"(value: float)
get "defaultScale"(): float
set "visible"(value: boolean)
get "customRootPivotPoint"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogModel$Type = ($DogModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogModel_ = $DogModel$Type;
}}
declare module "packages/doggytalents/client/entity/skin/$DogSkin" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DogModelRegistry$DogModelHolder, $DogModelRegistry$DogModelHolder$Type} from "packages/doggytalents/client/entity/model/$DogModelRegistry$DogModelHolder"

export class $DogSkin {
static readonly "CLASSICAL": $DogSkin
static readonly "MISSING": $DogSkin
static readonly "MYSTERY": $DogSkin

constructor(arg0: $ResourceLocation$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $DogModelRegistry$DogModelHolder$Type)

public "getName"(): string
public "setName"(arg0: string): $DogSkin
public "getPath"(): $ResourceLocation
public "getDesc"(): string
public "setDesc"(arg0: string): void
public "getTail"(): byte
public "getTags"(): string
public "setEar"(arg0: byte): void
public "setMystery"(arg0: boolean): void
public "setAuthor"(arg0: string): void
public "setBasedOn"(arg0: string): void
public "mystery"(): boolean
public "getEar"(): byte
public "setTail"(arg0: byte): void
public "getPack"(): string
public "setTags"(arg0: string): void
public "getCustomModel"(): $DogModelRegistry$DogModelHolder
public "useCustomModel"(): boolean
public "getAuthor"(): string
public "getBasedOn"(): string
public "hasExtraInfo"(): boolean
public "setPack"(arg0: string): void
get "name"(): string
set "name"(value: string)
get "path"(): $ResourceLocation
get "desc"(): string
set "desc"(value: string)
get "tail"(): byte
get "tags"(): string
set "ear"(value: byte)
set "author"(value: string)
set "basedOn"(value: string)
get "ear"(): byte
set "tail"(value: byte)
get "pack"(): string
set "tags"(value: string)
get "customModel"(): $DogModelRegistry$DogModelHolder
get "author"(): string
get "basedOn"(): string
set "pack"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogSkin$Type = ($DogSkin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogSkin_ = $DogSkin$Type;
}}
declare module "packages/doggytalents/client/entity/model/$DogModelRegistry$DogModelHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$EntityRendererProvider$Context, $EntityRendererProvider$Context$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider$Context"
import {$DogModel, $DogModel$Type} from "packages/doggytalents/client/entity/model/dog/$DogModel"

export class $DogModelRegistry$DogModelHolder {

constructor(arg0: $Function$Type<($EntityRendererProvider$Context$Type), ($DogModel$Type)>)

public "getValue"(): $DogModel
public "resolve"(arg0: $EntityRendererProvider$Context$Type): void
get "value"(): $DogModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogModelRegistry$DogModelHolder$Type = ($DogModelRegistry$DogModelHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogModelRegistry$DogModelHolder_ = $DogModelRegistry$DogModelHolder$Type;
}}
