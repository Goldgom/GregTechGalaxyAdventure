declare module "packages/therealeststu/dtbop/item/$MapleSeed" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Seed, $Seed$Type} from "packages/com/ferreusveritas/dynamictrees/item/$Seed"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MapleSeed extends $Seed {
static readonly "FORCE_PLANT_KEY": string
static readonly "LIFESPAN_KEY": string
static readonly "CODE_KEY": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(arg0: $Species$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapleSeed$Type = ($MapleSeed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapleSeed_ = $MapleSeed$Type;
}}
