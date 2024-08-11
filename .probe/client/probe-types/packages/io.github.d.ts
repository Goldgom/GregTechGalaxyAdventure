declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$IClipContxt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IClipContxt {

 "checkSeeThrough"(): void

(): void
}

export namespace $IClipContxt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClipContxt$Type = ($IClipContxt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClipContxt_ = $IClipContxt$Type;
}}
declare module "packages/io/github/xiewuzhiying/vs_addition/mixin/vs_clockwork/flap_bearing/$FlapBearingBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FlapBearingBlockEntityAccessor {

 "getBearingAngle"(): float

(): float
}

export namespace $FlapBearingBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlapBearingBlockEntityAccessor$Type = ($FlapBearingBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlapBearingBlockEntityAccessor_ = $FlapBearingBlockEntityAccessor$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixinhelper/$PoseStackExt" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"

export interface $PoseStackExt {

 "pushPose"(arg0: $PoseStack$Pose$Type): void

(stack: $PoseStack$Type, pose: $PoseStack$Pose$Type): void
}

export namespace $PoseStackExt {
function pushPose(stack: $PoseStack$Type, pose: $PoseStack$Pose$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackExt$Type = ($PoseStackExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStackExt_ = $PoseStackExt$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixin/$ModelPartAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelPartAccessor {

 "getChildren"(): $Map<(string), ($ModelPart)>
 "getCubes"(): $List<($ModelPart$Cube)>
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$Type = ($ModelPartAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartAccessor_ = $ModelPartAccessor$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$INodeBreakable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INodeBreakable {

 "canBreakBlocks"(): boolean
 "canClimbLadder"(): boolean
 "setCanClimbLadder"(arg0: boolean): void
 "setCanBreakBlocks"(arg0: boolean): void
}

export namespace $INodeBreakable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INodeBreakable$Type = ($INodeBreakable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INodeBreakable_ = $INodeBreakable$Type;
}}
declare module "packages/io/github/xiewuzhiying/vs_addition/compats/create/behaviour/psi/$IPSIBehavior" {
import {$PortableStorageInterfaceBlockEntity, $PortableStorageInterfaceBlockEntity$Type} from "packages/com/simibubi/create/content/contraptions/actors/psi/$PortableStorageInterfaceBlockEntity"
import {$IPSIBehavior$WorkigMode, $IPSIBehavior$WorkigMode$Type} from "packages/io/github/xiewuzhiying/vs_addition/compats/create/behaviour/psi/$IPSIBehavior$WorkigMode"
import {$ScrollOptionBehaviour, $ScrollOptionBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue/$ScrollOptionBehaviour"

export interface $IPSIBehavior {

 "vs_addition$getWorkingMode"(): $ScrollOptionBehaviour<($IPSIBehavior$WorkigMode)>
 "vs_addition$stopTransferring"(): void
 "vs_addition$getConnectedPI"(): $PortableStorageInterfaceBlockEntity
 "vs_addition$canTransfer"(): boolean
 "vs_addition$startTransferringTo"(pi: $PortableStorageInterfaceBlockEntity$Type, distance: float): void
}

export namespace $IPSIBehavior {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPSIBehavior$Type = ($IPSIBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPSIBehavior_ = $IPSIBehavior$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/utils/$EntityFlags$FlagType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EntityFlags$FlagType extends $Enum<($EntityFlags$FlagType)> {
static readonly "UNDEF": $EntityFlags$FlagType
static readonly "TRUE": $EntityFlags$FlagType
static readonly "FALSE": $EntityFlags$FlagType


public static "values"(): ($EntityFlags$FlagType)[]
public static "valueOf"(name: string): $EntityFlags$FlagType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFlags$FlagType$Type = (("undef") | ("true") | ("false")) | ($EntityFlags$FlagType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFlags$FlagType_ = $EntityFlags$FlagType$Type;
}}
declare module "packages/io/github/xiewuzhiying/vs_addition/compats/create/behaviour/psi/$IPSIBehavior$WorkigMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$INamedIconOptions, $INamedIconOptions$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue/$INamedIconOptions"
import {$AllIcons, $AllIcons$Type} from "packages/com/simibubi/create/foundation/gui/$AllIcons"

export class $IPSIBehavior$WorkigMode extends $Enum<($IPSIBehavior$WorkigMode)> implements $INamedIconOptions {
static readonly "ORIGINAL": $IPSIBehavior$WorkigMode
static readonly "WITH_SHIP": $IPSIBehavior$WorkigMode


public static "values"(): ($IPSIBehavior$WorkigMode)[]
public static "valueOf"(name: string): $IPSIBehavior$WorkigMode
public "getTranslationKey"(): string
public "getIcon"(): $AllIcons
get "translationKey"(): string
get "icon"(): $AllIcons
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPSIBehavior$WorkigMode$Type = (("original") | ("with_ship")) | ($IPSIBehavior$WorkigMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPSIBehavior$WorkigMode_ = $IPSIBehavior$WorkigMode$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixin/$LivingEntityRendererAccessor" {
import {$RenderLayer, $RenderLayer$Type} from "packages/net/minecraft/client/renderer/entity/layers/$RenderLayer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<(T)>> {

 "getLayers"(): $List<($RenderLayer<(T), (M)>)>

(): $List<($RenderLayer<(T), (M)>)>
}

export namespace $LivingEntityRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererAccessor$Type<T, M> = ($LivingEntityRendererAccessor<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityRendererAccessor_<T, M> = $LivingEntityRendererAccessor$Type<(T), (M)>;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixinhelper/$OffHandStrength" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $OffHandStrength {

 "getOffhandStrengthScale"(arg0: float): float

(arg0: float): float
}

export namespace $OffHandStrength {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffHandStrength$Type = ($OffHandStrength);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffHandStrength_ = $OffHandStrength$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$IGoalModifier" {
import {$Goal, $Goal$Type} from "packages/net/minecraft/world/entity/ai/goal/$Goal"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IGoalModifier {

 "modifyGoal"<T extends $Goal>(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void

(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void
}

export namespace $IGoalModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGoalModifier$Type = ($IGoalModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGoalModifier_ = $IGoalModifier$Type;
}}
declare module "packages/io/github/xiewuzhiying/vs_addition/mixin/createbigcannons/$AbstractAutocannonBreechBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractAutocannonBreechBlockEntityAccessor {

 "setFiringCooldown"(arg0: integer): void
 "setAnimateTicks"(arg0: integer): void
 "getFireRate"(): integer
}

export namespace $AbstractAutocannonBreechBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAutocannonBreechBlockEntityAccessor$Type = ($AbstractAutocannonBreechBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAutocannonBreechBlockEntityAccessor_ = $AbstractAutocannonBreechBlockEntityAccessor$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$ISpawnReason" {
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"

export interface $ISpawnReason {

 "getSpawnReason"(): $MobSpawnType

(): $MobSpawnType
}

export namespace $ISpawnReason {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpawnReason$Type = ($ISpawnReason);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpawnReason_ = $ISpawnReason$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$ITNTThrowable" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ITNTThrowable {

 "shootFromEntity"(arg0: $Entity$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void

(arg0: $Entity$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
}

export namespace $ITNTThrowable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITNTThrowable$Type = ($ITNTThrowable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITNTThrowable_ = $ITNTThrowable$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$LivingSensingExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingSensingExt {

 "doExtendedLOSCheck"(): void

(): void
}

export namespace $LivingSensingExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingSensingExt$Type = ($LivingSensingExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingSensingExt_ = $LivingSensingExt$Type;
}}
declare module "packages/io/github/xiewuzhiying/vs_addition/mixin/createbigcannons/$CannonMountBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CannonMountBlockEntityAccessor {

 "GetMaxDepress"(): float
 "getCannonPitch"(): float
 "GetMaxElevate"(): float
 "getCannonYaw"(): float
 "Assemble"(): void
}

export namespace $CannonMountBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonMountBlockEntityAccessor$Type = ($CannonMountBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonMountBlockEntityAccessor_ = $CannonMountBlockEntityAccessor$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/utils/$EntityFlags" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityFlags$FlagType, $EntityFlags$FlagType$Type} from "packages/io/github/flemmli97/improvedmobs/utils/$EntityFlags$FlagType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityFlags {
static readonly "TAG_ID": string
static readonly "SERVER_ENTITY_TAG_ID": string
 "ladderClimber": boolean
 "modifyArmor": boolean
 "modifyHeldItems": boolean
 "modifyAttributes": boolean
 "enchantGear": boolean
 "isThrownEntity": boolean
 "isVariedSize": boolean
 "canBreakBlocks": $EntityFlags$FlagType
 "canFly": $EntityFlags$FlagType
 "magicRes": float
 "projMult": float
 "explosionMult": float
 "serverSideEntityID": $ResourceLocation

constructor()

public static "get"(entity: $Entity$Type): $EntityFlags
public "load"(nbt: $CompoundTag$Type): void
public "save"(): $CompoundTag
public "disableShield"(): void
public "isShieldDisabled"(): boolean
get "shieldDisabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFlags$Type = ($EntityFlags);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFlags_ = $EntityFlags$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixin/$ScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"

export interface $ScreenAccessor {

 "addRenderableWidgetTo"<T extends ($GuiEventListener) & ($Renderable)>(arg0: T): T

(arg0: T): T
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$Type = ($ScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$SensingExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SensingExt {

 "doLineOfSightExt"(): void

(): void
}

export namespace $SensingExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SensingExt$Type = ($SensingExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SensingExt_ = $SensingExt$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixinhelper/$ILastHand" {
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export interface $ILastHand {

 "lastSwungHand"(): $InteractionHand
 "setLastSwungHand"(arg0: $InteractionHand$Type): void
}

export namespace $ILastHand {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILastHand$Type = ($ILastHand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILastHand_ = $ILastHand$Type;
}}
declare module "packages/io/github/xiewuzhiying/vs_addition/mixin/minecraft/$EntityAccessor" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $EntityAccessor {

 "getLevel"(): $Level
 "getRandom"(): $RandomSource
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$Type;
}}
declare module "packages/io/github/xiewuzhiying/vs_addition/mixin/minecraft/$HitResultAccessor" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $HitResultAccessor {

 "setLocation"(arg0: $Vec3$Type): void

(arg0: $Vec3$Type): void
}

export namespace $HitResultAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HitResultAccessor$Type = ($HitResultAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HitResultAccessor_ = $HitResultAccessor$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixin/$MobEntityMixin" {
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $MobEntityMixin {

 "setDeathLootTable"(arg0: $ResourceLocation$Type): void
 "getTrueNavigator"(): $PathNavigation
}

export namespace $MobEntityMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEntityMixin$Type = ($MobEntityMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEntityMixin_ = $MobEntityMixin$Type;
}}
declare module "packages/io/github/flemmli97/tenshilib/mixin/$EntityRenderDispatcherAccessor" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $EntityRenderDispatcherAccessor {

 "getRenderers"(): $Map<($EntityType<(any)>), ($EntityRenderer<(any)>)>

(): $Map<($EntityType<(any)>), ($EntityRenderer<(any)>)>
}

export namespace $EntityRenderDispatcherAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderDispatcherAccessor$Type = ($EntityRenderDispatcherAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRenderDispatcherAccessor_ = $EntityRenderDispatcherAccessor$Type;
}}
declare module "packages/io/github/xiewuzhiying/vs_addition/compats/create/behaviour/deployer/$IDeployerBehavior$WorkigMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$INamedIconOptions, $INamedIconOptions$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue/$INamedIconOptions"
import {$AllIcons, $AllIcons$Type} from "packages/com/simibubi/create/foundation/gui/$AllIcons"

export class $IDeployerBehavior$WorkigMode extends $Enum<($IDeployerBehavior$WorkigMode)> implements $INamedIconOptions {
static readonly "ORIGINAL": $IDeployerBehavior$WorkigMode
static readonly "WITH_SHIP": $IDeployerBehavior$WorkigMode


public static "values"(): ($IDeployerBehavior$WorkigMode)[]
public static "valueOf"(name: string): $IDeployerBehavior$WorkigMode
public "getTranslationKey"(): string
public "getIcon"(): $AllIcons
get "translationKey"(): string
get "icon"(): $AllIcons
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDeployerBehavior$WorkigMode$Type = (("original") | ("with_ship")) | ($IDeployerBehavior$WorkigMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDeployerBehavior$WorkigMode_ = $IDeployerBehavior$WorkigMode$Type;
}}
declare module "packages/io/github/xiewuzhiying/vs_addition/compats/create/behaviour/deployer/$IDeployerBehavior" {
import {$IDeployerBehavior$WorkigMode, $IDeployerBehavior$WorkigMode$Type} from "packages/io/github/xiewuzhiying/vs_addition/compats/create/behaviour/deployer/$IDeployerBehavior$WorkigMode"
import {$ScrollOptionBehaviour, $ScrollOptionBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue/$ScrollOptionBehaviour"

export interface $IDeployerBehavior {

 "vs_addition$getWorkingMode"(): $ScrollOptionBehaviour<($IDeployerBehavior$WorkigMode)>
}

export namespace $IDeployerBehavior {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDeployerBehavior$Type = ($IDeployerBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDeployerBehavior_ = $IDeployerBehavior$Type;
}}
declare module "packages/io/github/flemmli97/improvedmobs/mixinhelper/$IEntityData" {
import {$EntityFlags, $EntityFlags$Type} from "packages/io/github/flemmli97/improvedmobs/utils/$EntityFlags"

export interface $IEntityData {

 "getFlags"(): $EntityFlags

(): $EntityFlags
}

export namespace $IEntityData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityData$Type = ($IEntityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityData_ = $IEntityData$Type;
}}
