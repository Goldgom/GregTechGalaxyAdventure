declare module "packages/com/supermartijn642/core/item/$ItemRarity" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export class $ItemRarity extends $Enum<($ItemRarity)> {
static readonly "COMMON": $ItemRarity
static readonly "UNCOMMON": $ItemRarity
static readonly "RARE": $ItemRarity
static readonly "EPIC": $ItemRarity


public static "values"(): ($ItemRarity)[]
public static "valueOf"(name: string): $ItemRarity
/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $Rarity
get "underlying"(): $Rarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRarity$Type = (("uncommon") | ("common") | ("rare") | ("epic")) | ($ItemRarity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRarity_ = $ItemRarity$Type;
}}
declare module "packages/com/supermartijn642/core/gui/$BaseContainer" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$BaseContainerType, $BaseContainerType$Type} from "packages/com/supermartijn642/core/gui/$BaseContainerType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ContainerSynchronizer, $ContainerSynchronizer$Type} from "packages/net/minecraft/world/inventory/$ContainerSynchronizer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export class $BaseContainer extends $AbstractContainerMenu {
readonly "player": $Player
readonly "level": $Level
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "remoteCarried": $ItemStack
 "stateId": integer
 "menuType": $MenuType<(any)>
 "containerId": integer
 "quickcraftType": integer
 "quickcraftStatus": integer
readonly "quickcraftSlots": $Set<($Slot)>
readonly "containerListeners": $List<($ContainerListener)>
 "synchronizer": $ContainerSynchronizer
 "suppressRemoteUpdates": boolean

constructor(type: $BaseContainerType$Type<(any)>, player: $Player$Type)

public "setContainerId"(id: integer): void
public "stillValid"(playerIn: $Player$Type): boolean
public "getContainerType"(): $BaseContainerType<(any)>
set "containerId"(value: integer)
get "containerType"(): $BaseContainerType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainer$Type = ($BaseContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseContainer_ = $BaseContainer$Type;
}}
declare module "packages/com/supermartijn642/core/data/condition/$ResourceConditionSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IConditionSerializer, $IConditionSerializer$Type} from "packages/net/minecraftforge/common/crafting/conditions/$IConditionSerializer"
import {$ResourceCondition, $ResourceCondition$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceCondition"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ResourceConditionSerializer<T extends $ResourceCondition> {

 "deserialize"(json: $JsonObject$Type): T
 "serialize"(json: $JsonObject$Type, condition: T): void
}

export namespace $ResourceConditionSerializer {
function createForgeConditionSerializer(identifier: $ResourceLocation$Type, serializer: $ResourceConditionSerializer$Type<(any)>): $IConditionSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConditionSerializer$Type<T> = ($ResourceConditionSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConditionSerializer_<T> = $ResourceConditionSerializer$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/block/$BaseBlockEntityType" {
import {$ShulkerBoxBlockEntity, $ShulkerBoxBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ShulkerBoxBlockEntity"
import {$BeehiveBlockEntity, $BeehiveBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BeehiveBlockEntity"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ComparatorBlockEntity, $ComparatorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ComparatorBlockEntity"
import {$DropperBlockEntity, $DropperBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DropperBlockEntity"
import {$BrewingStandBlockEntity, $BrewingStandBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BrewingStandBlockEntity"
import {$DaylightDetectorBlockEntity, $DaylightDetectorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DaylightDetectorBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$HangingSignBlockEntity, $HangingSignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$HangingSignBlockEntity"
import {$SignBlockEntity, $SignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SignBlockEntity"
import {$JukeboxBlockEntity, $JukeboxBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$JukeboxBlockEntity"
import {$SculkShriekerBlockEntity, $SculkShriekerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkShriekerBlockEntity"
import {$EnchantmentTableBlockEntity, $EnchantmentTableBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$EnchantmentTableBlockEntity"
import {$CalibratedSculkSensorBlockEntity, $CalibratedSculkSensorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CalibratedSculkSensorBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ChiseledBookShelfBlockEntity, $ChiseledBookShelfBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ChiseledBookShelfBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BrushableBlockEntity, $BrushableBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BrushableBlockEntity"
import {$FurnaceBlockEntity, $FurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$FurnaceBlockEntity"
import {$DispenserBlockEntity, $DispenserBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DispenserBlockEntity"
import {$EnderChestBlockEntity, $EnderChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$EnderChestBlockEntity"
import {$SculkSensorBlockEntity, $SculkSensorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkSensorBlockEntity"
import {$BarrelBlockEntity, $BarrelBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BarrelBlockEntity"
import {$ChestBlockEntity, $ChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ChestBlockEntity"
import {$BannerBlockEntity, $BannerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BannerBlockEntity"
import {$TheEndGatewayBlockEntity, $TheEndGatewayBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TheEndGatewayBlockEntity"
import {$CommandBlockEntity, $CommandBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity"
import {$BellBlockEntity, $BellBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BellBlockEntity"
import {$TrappedChestBlockEntity, $TrappedChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TrappedChestBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SmokerBlockEntity, $SmokerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SmokerBlockEntity"
import {$BlastFurnaceBlockEntity, $BlastFurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlastFurnaceBlockEntity"
import {$DecoratedPotBlockEntity, $DecoratedPotBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity"
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$HopperBlockEntity, $HopperBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$HopperBlockEntity"
import {$TheEndPortalBlockEntity, $TheEndPortalBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TheEndPortalBlockEntity"
import {$BeaconBlockEntity, $BeaconBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StructureBlockEntity, $StructureBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity"
import {$SpawnerBlockEntity, $SpawnerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SpawnerBlockEntity"
import {$JigsawBlockEntity, $JigsawBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity"
import {$ConduitBlockEntity, $ConduitBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ConduitBlockEntity"
import {$BedBlockEntity, $BedBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BedBlockEntity"
import {$SculkCatalystBlockEntity, $SculkCatalystBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkCatalystBlockEntity"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/supermartijn642/core/block/$BaseBlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SkullBlockEntity, $SkullBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SkullBlockEntity"
import {$LecternBlockEntity, $LecternBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$LecternBlockEntity"
import {$CampfireBlockEntity, $CampfireBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CampfireBlockEntity"

export class $BaseBlockEntityType<T extends $BlockEntity> extends $BlockEntityType<(T)> {
static readonly "FURNACE": $BlockEntityType<($FurnaceBlockEntity)>
static readonly "CHEST": $BlockEntityType<($ChestBlockEntity)>
static readonly "TRAPPED_CHEST": $BlockEntityType<($TrappedChestBlockEntity)>
static readonly "ENDER_CHEST": $BlockEntityType<($EnderChestBlockEntity)>
static readonly "JUKEBOX": $BlockEntityType<($JukeboxBlockEntity)>
static readonly "DISPENSER": $BlockEntityType<($DispenserBlockEntity)>
static readonly "DROPPER": $BlockEntityType<($DropperBlockEntity)>
static readonly "SIGN": $BlockEntityType<($SignBlockEntity)>
static readonly "HANGING_SIGN": $BlockEntityType<($HangingSignBlockEntity)>
static readonly "MOB_SPAWNER": $BlockEntityType<($SpawnerBlockEntity)>
static readonly "PISTON": $BlockEntityType<($PistonMovingBlockEntity)>
static readonly "BREWING_STAND": $BlockEntityType<($BrewingStandBlockEntity)>
static readonly "ENCHANTING_TABLE": $BlockEntityType<($EnchantmentTableBlockEntity)>
static readonly "END_PORTAL": $BlockEntityType<($TheEndPortalBlockEntity)>
static readonly "BEACON": $BlockEntityType<($BeaconBlockEntity)>
static readonly "SKULL": $BlockEntityType<($SkullBlockEntity)>
static readonly "DAYLIGHT_DETECTOR": $BlockEntityType<($DaylightDetectorBlockEntity)>
static readonly "HOPPER": $BlockEntityType<($HopperBlockEntity)>
static readonly "COMPARATOR": $BlockEntityType<($ComparatorBlockEntity)>
static readonly "BANNER": $BlockEntityType<($BannerBlockEntity)>
static readonly "STRUCTURE_BLOCK": $BlockEntityType<($StructureBlockEntity)>
static readonly "END_GATEWAY": $BlockEntityType<($TheEndGatewayBlockEntity)>
static readonly "COMMAND_BLOCK": $BlockEntityType<($CommandBlockEntity)>
static readonly "SHULKER_BOX": $BlockEntityType<($ShulkerBoxBlockEntity)>
static readonly "BED": $BlockEntityType<($BedBlockEntity)>
static readonly "CONDUIT": $BlockEntityType<($ConduitBlockEntity)>
static readonly "BARREL": $BlockEntityType<($BarrelBlockEntity)>
static readonly "SMOKER": $BlockEntityType<($SmokerBlockEntity)>
static readonly "BLAST_FURNACE": $BlockEntityType<($BlastFurnaceBlockEntity)>
static readonly "LECTERN": $BlockEntityType<($LecternBlockEntity)>
static readonly "BELL": $BlockEntityType<($BellBlockEntity)>
static readonly "JIGSAW": $BlockEntityType<($JigsawBlockEntity)>
static readonly "CAMPFIRE": $BlockEntityType<($CampfireBlockEntity)>
static readonly "BEEHIVE": $BlockEntityType<($BeehiveBlockEntity)>
static readonly "SCULK_SENSOR": $BlockEntityType<($SculkSensorBlockEntity)>
static readonly "CALIBRATED_SCULK_SENSOR": $BlockEntityType<($CalibratedSculkSensorBlockEntity)>
static readonly "SCULK_CATALYST": $BlockEntityType<($SculkCatalystBlockEntity)>
static readonly "SCULK_SHRIEKER": $BlockEntityType<($SculkShriekerBlockEntity)>
static readonly "CHISELED_BOOKSHELF": $BlockEntityType<($ChiseledBookShelfBlockEntity)>
static readonly "BRUSHABLE_BLOCK": $BlockEntityType<($BrushableBlockEntity)>
static readonly "DECORATED_POT": $BlockEntityType<($DecoratedPotBlockEntity)>
 "validBlocks": $Set<($Block)>


public static "create"<T extends $BaseBlockEntity>(entitySupplier: $BiFunction$Type<($BlockPos$Type), ($BlockState$Type), (T)>, ...validBlocks: ($Block$Type)[]): $BaseBlockEntityType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntityType$Type<T> = ($BaseBlockEntityType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntityType_<T> = $BaseBlockEntityType$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/gui/$BaseContainerType" {
import {$LecternMenu, $LecternMenu$Type} from "packages/net/minecraft/world/inventory/$LecternMenu"
import {$DispenserMenu, $DispenserMenu$Type} from "packages/net/minecraft/world/inventory/$DispenserMenu"
import {$SmithingMenu, $SmithingMenu$Type} from "packages/net/minecraft/world/inventory/$SmithingMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IContainerFactory, $IContainerFactory$Type} from "packages/net/minecraftforge/network/$IContainerFactory"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$GrindstoneMenu, $GrindstoneMenu$Type} from "packages/net/minecraft/world/inventory/$GrindstoneMenu"
import {$LoomMenu, $LoomMenu$Type} from "packages/net/minecraft/world/inventory/$LoomMenu"
import {$MerchantMenu, $MerchantMenu$Type} from "packages/net/minecraft/world/inventory/$MerchantMenu"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BeaconMenu, $BeaconMenu$Type} from "packages/net/minecraft/world/inventory/$BeaconMenu"
import {$StonecutterMenu, $StonecutterMenu$Type} from "packages/net/minecraft/world/inventory/$StonecutterMenu"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ChestMenu, $ChestMenu$Type} from "packages/net/minecraft/world/inventory/$ChestMenu"
import {$SmokerMenu, $SmokerMenu$Type} from "packages/net/minecraft/world/inventory/$SmokerMenu"
import {$FurnaceMenu, $FurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$FurnaceMenu"
import {$AnvilMenu, $AnvilMenu$Type} from "packages/net/minecraft/world/inventory/$AnvilMenu"
import {$CraftingMenu, $CraftingMenu$Type} from "packages/net/minecraft/world/inventory/$CraftingMenu"
import {$CartographyTableMenu, $CartographyTableMenu$Type} from "packages/net/minecraft/world/inventory/$CartographyTableMenu"
import {$BaseContainer, $BaseContainer$Type} from "packages/com/supermartijn642/core/gui/$BaseContainer"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ShulkerBoxMenu, $ShulkerBoxMenu$Type} from "packages/net/minecraft/world/inventory/$ShulkerBoxMenu"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$HopperMenu, $HopperMenu$Type} from "packages/net/minecraft/world/inventory/$HopperMenu"
import {$BrewingStandMenu, $BrewingStandMenu$Type} from "packages/net/minecraft/world/inventory/$BrewingStandMenu"
import {$BlastFurnaceMenu, $BlastFurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$BlastFurnaceMenu"

export class $BaseContainerType<T extends $BaseContainer> extends $MenuType<(T)> {
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>


public static "create"<T extends $BaseContainer>(containerSerializer: $BiConsumer$Type<(T), ($FriendlyByteBuf$Type)>, containerDeserializer: $BiFunction$Type<($Player$Type), ($FriendlyByteBuf$Type), (T)>): $BaseContainerType<(T)>
public "writeContainer"(container: T, buffer: $FriendlyByteBuf$Type): void
public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainerType$Type<T> = ($BaseContainerType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseContainerType_<T> = $BaseContainerType$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/block/$BaseBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BaseBlockEntity extends $BlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(tileEntityTypeIn: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "load"(nbt: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "handleUpdateTag"(tag: $CompoundTag$Type): void
public "onDataPacket"(net: $Connection$Type, pkt: $ClientboundBlockEntityDataPacket$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "dataChanged"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntity$Type = ($BaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntity_ = $BaseBlockEntity$Type;
}}
declare module "packages/com/supermartijn642/trashcans/$TrashCanBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityHoldingBlock, $EntityHoldingBlock$Type} from "packages/com/supermartijn642/core/block/$EntityHoldingBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BaseBlockEntityType, $BaseBlockEntityType$Type} from "packages/com/supermartijn642/core/block/$BaseBlockEntityType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TrashCanContainer, $TrashCanContainer$Type} from "packages/com/supermartijn642/trashcans/screen/$TrashCanContainer"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/supermartijn642/core/block/$BaseBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TrashCanBlock extends $BaseBlock implements $EntityHoldingBlock, $SimpleWaterloggedBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $Supplier$Type<($BaseBlockEntityType$Type<(any)>)>, arg1: $BiFunction$Type<($Player$Type), ($BlockPos$Type), ($TrashCanContainer$Type)>)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "createNewBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, entityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrashCanBlock$Type = ($TrashCanBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrashCanBlock_ = $TrashCanBlock$Type;
}}
declare module "packages/com/supermartijn642/trashcans/screen/$TrashCanContainer" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$BaseContainerType, $BaseContainerType$Type} from "packages/com/supermartijn642/core/gui/$BaseContainerType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ContainerSynchronizer, $ContainerSynchronizer$Type} from "packages/net/minecraft/world/inventory/$ContainerSynchronizer"
import {$BlockEntityBaseContainer, $BlockEntityBaseContainer$Type} from "packages/com/supermartijn642/core/gui/$BlockEntityBaseContainer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TrashCanBlockEntity, $TrashCanBlockEntity$Type} from "packages/com/supermartijn642/trashcans/$TrashCanBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TrashCanContainer extends $BlockEntityBaseContainer<($TrashCanBlockEntity)> {
readonly "width": integer
readonly "height": integer
readonly "player": $Player
readonly "level": $Level
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "remoteCarried": $ItemStack
 "stateId": integer
 "menuType": $MenuType<(any)>
 "containerId": integer
 "quickcraftType": integer
 "quickcraftStatus": integer
readonly "quickcraftSlots": $Set<($Slot)>
readonly "containerListeners": $List<($ContainerListener)>
 "synchronizer": $ContainerSynchronizer
 "suppressRemoteUpdates": boolean

constructor(arg0: $BaseContainerType$Type<(any)>, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer)

public "getBlockEntity"(): $TrashCanBlockEntity
public "getBlockEntityPos"(): $BlockPos
get "blockEntity"(): $TrashCanBlockEntity
get "blockEntityPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrashCanContainer$Type = ($TrashCanContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrashCanContainer_ = $TrashCanContainer$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseBlockItem$ItemUseResult" {
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $BaseBlockItem$ItemUseResult {


public static "fail"(stack: $ItemStack$Type): $BaseBlockItem$ItemUseResult
public static "pass"(stack: $ItemStack$Type): $BaseBlockItem$ItemUseResult
public static "success"(stack: $ItemStack$Type): $BaseBlockItem$ItemUseResult
public static "consume"(stack: $ItemStack$Type): $BaseBlockItem$ItemUseResult
/**
 * 
 * @deprecated
 */
public static "fromUnderlying"(underlying: $InteractionResultHolder$Type<($ItemStack$Type)>): $BaseBlockItem$ItemUseResult
/**
 * 
 * @deprecated
 */
public "toUnderlying"(isClientSide: boolean): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$ItemUseResult$Type = ($BaseBlockItem$ItemUseResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem$ItemUseResult_ = $BaseBlockItem$ItemUseResult$Type;
}}
declare module "packages/com/supermartijn642/core/data/recipe/$ConditionalRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ResourceCondition, $ResourceCondition$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceCondition"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ICondition, $ICondition$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition"

export class $ConditionalRecipeSerializer implements $RecipeSerializer<($Recipe<(any)>)> {
static readonly "INSTANCE": $ConditionalRecipeSerializer


public "fromJson"(location: $ResourceLocation$Type, json: $JsonObject$Type, context: $ICondition$IContext$Type): $Recipe<(any)>
public static "wrapRecipe"(recipe: $JsonObject$Type, conditions: $Collection$Type<($ResourceCondition$Type)>): $JsonObject
public static "wrapRecipeWithForgeConditions"(recipe: $JsonObject$Type, conditions: $Collection$Type<($ICondition$Type)>): $JsonObject
public "fromNetwork"(resourceLocation: $ResourceLocation$Type, friendlyByteBuf: $FriendlyByteBuf$Type): $Recipe<(any)>
public "fromJson"(location: $ResourceLocation$Type, json: $JsonObject$Type): $Recipe<(any)>
public "toNetwork"(friendlyByteBuf: $FriendlyByteBuf$Type, recipe: $Recipe$Type<(any)>): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalRecipeSerializer$Type = ($ConditionalRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionalRecipeSerializer_ = $ConditionalRecipeSerializer$Type;
}}
declare module "packages/com/supermartijn642/core/mixin/$BlockPropertiesAccessor" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $BlockPropertiesAccessor {

 "getLootTableSupplier"(): $Supplier<($ResourceLocation)>
 "setLootTableSupplier"(supplier: $Supplier$Type<($ResourceLocation$Type)>): void
}

export namespace $BlockPropertiesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPropertiesAccessor$Type = ($BlockPropertiesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPropertiesAccessor_ = $BlockPropertiesAccessor$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseBlockItem$InteractionFeedback" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export class $BaseBlockItem$InteractionFeedback extends $Enum<($BaseBlockItem$InteractionFeedback)> {
static readonly "PASS": $BaseBlockItem$InteractionFeedback
static readonly "CONSUME": $BaseBlockItem$InteractionFeedback
static readonly "SUCCESS": $BaseBlockItem$InteractionFeedback


public static "values"(): ($BaseBlockItem$InteractionFeedback)[]
public static "valueOf"(name: string): $BaseBlockItem$InteractionFeedback
/**
 * 
 * @deprecated
 */
public static "fromUnderlying"(interactionResult: $InteractionResult$Type): $BaseBlockItem$InteractionFeedback
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$InteractionFeedback$Type = (("pass") | ("success") | ("consume")) | ($BaseBlockItem$InteractionFeedback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem$InteractionFeedback_ = $BaseBlockItem$InteractionFeedback$Type;
}}
declare module "packages/com/supermartijn642/core/block/$BlockProperties" {
import {$TriPredicate, $TriPredicate$Type} from "packages/net/minecraftforge/common/util/$TriPredicate"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockProperties {

constructor()

public static "copy"(block: $Block$Type): $BlockProperties
public static "create"(): $BlockProperties
public "mapColor"(color: $MapColor$Type): $BlockProperties
public "mapColor"(colorFunction: $Function$Type<($BlockState$Type), ($MapColor$Type)>): $BlockProperties
public "randomTicks"(): $BlockProperties
public "noLootTable"(): $BlockProperties
public "isSuffocating"(isSuffocating: boolean): $BlockProperties
public "isSuffocating"(isSuffocating: $TriPredicate$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type)>): $BlockProperties
public "lootTableFrom"(block: $Supplier$Type<($Block$Type)>): $BlockProperties
public "dynamicShape"(): $BlockProperties
public "friction"(friction: float): $BlockProperties
public "jumpFactor"(factor: float): $BlockProperties
public "speedFactor"(factor: float): $BlockProperties
public "lightLevel"(stateLightFunction: $ToIntFunction$Type<($BlockState$Type)>): $BlockProperties
public "lightLevel"(light: integer): $BlockProperties
public "sound"(soundTypeIn: $SoundType$Type): $BlockProperties
public "air"(): $BlockProperties
public "requiresCorrectTool"(): $BlockProperties
/**
 * 
 * @deprecated
 */
public "toUnderlying"(): $BlockBehaviour$Properties
public "destroyTime"(destroyTime: float): $BlockProperties
public "noCollision"(): $BlockProperties
public "explosionResistance"(resistance: float): $BlockProperties
public "lootTable"(lootTable: $ResourceLocation$Type): $BlockProperties
public "noOcclusion"(): $BlockProperties
public "isRedstoneConductor"(isRedstoneConductor: boolean): $BlockProperties
public "isRedstoneConductor"(isRedstoneConductor: $TriPredicate$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type)>): $BlockProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockProperties$Type = ($BlockProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockProperties_ = $BlockProperties$Type;
}}
declare module "packages/com/supermartijn642/trashcans/filter/$ItemFilter" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemFilter {

constructor()

public "matches"(arg0: any): boolean
public "write"(): $CompoundTag
public "getId"(): string
public "isValid"(): boolean
public "getRepresentingItem"(): $ItemStack
get "id"(): string
get "valid"(): boolean
get "representingItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$Type = ($ItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilter_ = $ItemFilter$Type;
}}
declare module "packages/com/supermartijn642/core/block/$TickableBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TickableBlockEntity {

 "update"(): void

(): void
}

export namespace $TickableBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableBlockEntity$Type = ($TickableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickableBlockEntity_ = $TickableBlockEntity$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BaseBlockItem$InteractionFeedback, $BaseBlockItem$InteractionFeedback$Type} from "packages/com/supermartijn642/core/item/$BaseBlockItem$InteractionFeedback"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BaseBlockItem$ItemUseResult, $BaseBlockItem$ItemUseResult$Type} from "packages/com/supermartijn642/core/item/$BaseBlockItem$ItemUseResult"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemProperties, $ItemProperties$Type} from "packages/com/supermartijn642/core/item/$ItemProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(block: $Block$Type, properties: $Item$Properties$Type)
constructor(block: $Block$Type, properties: $ItemProperties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, information: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "interact"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type): $BaseBlockItem$ItemUseResult
public "initializeClient"(consumer: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, target: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slot: integer, isSelected: boolean): void
public "onItemUseFirst"(stack: $ItemStack$Type, context: $UseOnContext$Type): $InteractionResult
public "isInCreativeGroup"(tab: $CreativeModeTab$Type): boolean
public "interactWithBlockFirst"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, hitPos: $BlockPos$Type, hitSide: $Direction$Type, hitLocation: $Vec3$Type): $BaseBlockItem$InteractionFeedback
public "interactWithBlock"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, hitPos: $BlockPos$Type, hitSide: $Direction$Type, hitLocation: $Vec3$Type): $BaseBlockItem$InteractionFeedback
public "interactWithEntity"(stack: $ItemStack$Type, target: $LivingEntity$Type, player: $Player$Type, hand: $InteractionHand$Type): $BaseBlockItem$InteractionFeedback
public "inventoryUpdate"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, itemSlot: integer, isSelected: boolean): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$Type = ($BaseBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem_ = $BaseBlockItem$Type;
}}
declare module "packages/com/supermartijn642/core/data/condition/$ResourceCondition" {
import {$ResourceConditionSerializer, $ResourceConditionSerializer$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceConditionSerializer"
import {$ResourceConditionContext, $ResourceConditionContext$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceConditionContext"
import {$ICondition, $ICondition$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition"

export interface $ResourceCondition {

 "test"(context: $ResourceConditionContext$Type): boolean
 "or"(alternative: $ResourceCondition$Type): $ResourceCondition
 "negate"(): $ResourceCondition
 "and"(condition: $ResourceCondition$Type): $ResourceCondition
 "getSerializer"(): $ResourceConditionSerializer<(any)>
}

export namespace $ResourceCondition {
function createForgeCondition(condition: $ResourceCondition$Type): $ICondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceCondition$Type = ($ResourceCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceCondition_ = $ResourceCondition$Type;
}}
declare module "packages/com/supermartijn642/core/block/$BaseBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockProperties, $BlockProperties$Type} from "packages/com/supermartijn642/core/block/$BlockProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $BaseBlock extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(saveTileData: boolean, properties: $BlockBehaviour$Properties$Type)
constructor(saveTileData: boolean, properties: $BlockProperties$Type)

public "getDescriptionId"(): string
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, information: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hitResult: $BlockHitResult$Type): $InteractionResult
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "asItem"(): $Item
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlock$Type = ($BaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlock_ = $BaseBlock$Type;
}}
declare module "packages/com/supermartijn642/core/gui/$BlockEntityBaseContainer" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$BaseContainerType, $BaseContainerType$Type} from "packages/com/supermartijn642/core/gui/$BaseContainerType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ContainerSynchronizer, $ContainerSynchronizer$Type} from "packages/net/minecraft/world/inventory/$ContainerSynchronizer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ObjectBaseContainer, $ObjectBaseContainer$Type} from "packages/com/supermartijn642/core/gui/$ObjectBaseContainer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockEntityBaseContainer<T extends $BlockEntity> extends $ObjectBaseContainer<(T)> {
readonly "player": $Player
readonly "level": $Level
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "remoteCarried": $ItemStack
 "stateId": integer
 "menuType": $MenuType<(any)>
 "containerId": integer
 "quickcraftType": integer
 "quickcraftStatus": integer
readonly "quickcraftSlots": $Set<($Slot)>
readonly "containerListeners": $List<($ContainerListener)>
 "synchronizer": $ContainerSynchronizer
 "suppressRemoteUpdates": boolean

constructor(type: $BaseContainerType$Type<(any)>, player: $Player$Type, blockEntityLevel: $Level$Type, blockEntityPos: $BlockPos$Type)
constructor(type: $BaseContainerType$Type<(any)>, player: $Player$Type, blockEntityPos: $BlockPos$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBaseContainer$Type<T> = ($BlockEntityBaseContainer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityBaseContainer_<T> = $BlockEntityBaseContainer$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/gui/$ObjectBaseContainer" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$BaseContainerType, $BaseContainerType$Type} from "packages/com/supermartijn642/core/gui/$BaseContainerType"
import {$BaseContainer, $BaseContainer$Type} from "packages/com/supermartijn642/core/gui/$BaseContainer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ContainerSynchronizer, $ContainerSynchronizer$Type} from "packages/net/minecraft/world/inventory/$ContainerSynchronizer"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ObjectBaseContainer<T> extends $BaseContainer {
readonly "player": $Player
readonly "level": $Level
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "remoteCarried": $ItemStack
 "stateId": integer
 "menuType": $MenuType<(any)>
 "containerId": integer
 "quickcraftType": integer
 "quickcraftStatus": integer
readonly "quickcraftSlots": $Set<($Slot)>
readonly "containerListeners": $List<($ContainerListener)>
 "synchronizer": $ContainerSynchronizer
 "suppressRemoteUpdates": boolean

constructor(type: $BaseContainerType$Type<(any)>, player: $Player$Type, alwaysRenewObject: boolean)
constructor(type: $BaseContainerType$Type<(any)>, player: $Player$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectBaseContainer$Type<T> = ($ObjectBaseContainer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectBaseContainer_<T> = $ObjectBaseContainer$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/item/$ItemProperties" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$ItemRarity, $ItemRarity$Type} from "packages/com/supermartijn642/core/item/$ItemRarity"

export class $ItemProperties {


public "group"(group: $CreativeModeTab$Type): $ItemProperties
public static "create"(): $ItemProperties
public "maxStackSize"(maxStackSize: integer): $ItemProperties
public "rarity"(rarity: $Rarity$Type): $ItemProperties
public "rarity"(rarity: $ItemRarity$Type): $ItemProperties
public "durability"(durability: integer): $ItemProperties
public "food"(foodProperties: $FoodProperties$Type): $ItemProperties
public "fireResistant"(): $ItemProperties
/**
 * 
 * @deprecated
 */
public "toUnderlying"(): $Item$Properties
public "craftRemainder"(item: $Item$Type): $ItemProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemProperties$Type = ($ItemProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemProperties_ = $ItemProperties$Type;
}}
declare module "packages/com/supermartijn642/trashcans/$TrashCanBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TickableBlockEntity, $TickableBlockEntity$Type} from "packages/com/supermartijn642/core/block/$TickableBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ItemFilter, $ItemFilter$Type} from "packages/com/supermartijn642/trashcans/filter/$ItemFilter"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/supermartijn642/core/block/$BaseBlockEntity"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TrashCanBlockEntity extends $BaseBlockEntity implements $TickableBlockEntity {
static readonly "DEFAULT_ENERGY_LIMIT": integer
static readonly "MAX_ENERGY_LIMIT": integer
static readonly "MIN_ENERGY_LIMIT": integer
readonly "ITEM_HANDLER": $IItemHandler
readonly "FLUID_HANDLER": $IFluidHandler
readonly "LIQUID_ITEM_HANDLER": $IItemHandler
readonly "ENERGY_STORAGE": $IEnergyStorage
readonly "ENERGY_ITEM_HANDLER": $IItemHandler
readonly "items": boolean
readonly "itemFilter": $ArrayList<($ItemStack)>
 "itemFilterWhitelist": boolean
readonly "liquids": boolean
readonly "liquidFilter": $ArrayList<($ItemFilter)>
 "liquidFilterWhitelist": boolean
 "liquidItem": $ItemStack
readonly "energy": boolean
 "energyLimit": integer
 "useEnergyLimit": boolean
 "energyItem": $ItemStack
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean, arg4: boolean, arg5: boolean)

public "update"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrashCanBlockEntity$Type = ($TrashCanBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrashCanBlockEntity_ = $TrashCanBlockEntity$Type;
}}
declare module "packages/com/supermartijn642/core/block/$EntityHoldingBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $EntityHoldingBlock extends $EntityBlock {

 "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, entityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
 "createNewBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener

(level: $Level$Type, state: $BlockState$Type, entityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}

export namespace $EntityHoldingBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityHoldingBlock$Type = ($EntityHoldingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityHoldingBlock_ = $EntityHoldingBlock$Type;
}}
declare module "packages/com/supermartijn642/core/data/condition/$ResourceConditionContext" {
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"

export class $ResourceConditionContext {


/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $ICondition$IContext
get "underlying"(): $ICondition$IContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConditionContext$Type = ($ResourceConditionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConditionContext_ = $ResourceConditionContext$Type;
}}
