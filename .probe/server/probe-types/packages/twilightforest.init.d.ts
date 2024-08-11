declare module "packages/twilightforest/init/custom/$DwarfRabbitVariant" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $DwarfRabbitVariant extends $Record {
static readonly "DWARF_RABBIT_TYPE_KEY": $ResourceKey<($Registry<($DwarfRabbitVariant)>)>
static readonly "DWARF_RABBITS": $DeferredRegister<($DwarfRabbitVariant)>
static readonly "DWARF_RABBIT_REGISTRY": $Supplier<($IForgeRegistry<($DwarfRabbitVariant)>)>
static readonly "BROWN": $RegistryObject<($DwarfRabbitVariant)>
static readonly "DUTCH": $RegistryObject<($DwarfRabbitVariant)>
static readonly "WHITE": $RegistryObject<($DwarfRabbitVariant)>

constructor(texture: $ResourceLocation$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "getVariant"(arg0: string): $Optional<($DwarfRabbitVariant)>
public "texture"(): $ResourceLocation
public static "getRandomVariant"(arg0: $RandomSource$Type): $DwarfRabbitVariant
public static "getVariantId"(arg0: $DwarfRabbitVariant$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DwarfRabbitVariant$Type = ($DwarfRabbitVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DwarfRabbitVariant_ = $DwarfRabbitVariant$Type;
}}
declare module "packages/twilightforest/init/$TFLandmark" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$StructureTemplateManager, $StructureTemplateManager$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import {$ChunkGenerator, $ChunkGenerator$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$StructurePiece, $StructurePiece$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructurePiece"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $TFLandmark {
static readonly "NOTHING": $TFLandmark
static readonly "SMALL_HILL": $TFLandmark
static readonly "MEDIUM_HILL": $TFLandmark
static readonly "LARGE_HILL": $TFLandmark
static readonly "HEDGE_MAZE": $TFLandmark
static readonly "QUEST_GROVE": $TFLandmark
static readonly "NAGA_COURTYARD": $TFLandmark
static readonly "LICH_TOWER": $TFLandmark
static readonly "HYDRA_LAIR": $TFLandmark
static readonly "LABYRINTH": $TFLandmark
static readonly "DARK_TOWER": $TFLandmark
static readonly "KNIGHT_STRONGHOLD": $TFLandmark
static readonly "YETI_CAVE": $TFLandmark
static readonly "ICE_TOWER": $TFLandmark
static readonly "TROLL_CAVE": $TFLandmark
static readonly "FINAL_CASTLE": $TFLandmark
static readonly "MUSHROOM_TOWER": $TFLandmark
static readonly "QUEST_ISLAND": $TFLandmark
readonly "size": integer
readonly "name": string
readonly "isStructureEnabled": boolean
readonly "requiresTerraforming": boolean
static readonly "CODEC": $Codec<($TFLandmark)>


public static "getComponentToAddBoundingBox"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: $Direction$Type, arg10: boolean): $BoundingBox
/**
 * 
 * @deprecated
 */
public "provideFirstPiece"(arg0: $StructureTemplateManager$Type, arg1: $ChunkGenerator$Type, arg2: $RandomSource$Type, arg3: integer, arg4: integer, arg5: integer): $StructurePiece
/**
 * 
 * @deprecated
 */
public static "getMaxSearchSize"(): integer
get "maxSearchSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TFLandmark$Type = ($TFLandmark);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TFLandmark_ = $TFLandmark$Type;
}}
declare module "packages/twilightforest/init/custom/$TinyBirdVariant" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $TinyBirdVariant extends $Record {
static readonly "TINY_BIRD_TYPE_KEY": $ResourceKey<($Registry<($TinyBirdVariant)>)>
static readonly "TINY_BIRDS": $DeferredRegister<($TinyBirdVariant)>
static readonly "TINY_BIRD_REGISTRY": $Supplier<($IForgeRegistry<($TinyBirdVariant)>)>
static readonly "BLUE": $RegistryObject<($TinyBirdVariant)>
static readonly "BROWN": $RegistryObject<($TinyBirdVariant)>
static readonly "GOLD": $RegistryObject<($TinyBirdVariant)>
static readonly "RED": $RegistryObject<($TinyBirdVariant)>

constructor(texture: $ResourceLocation$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "getVariant"(arg0: string): $Optional<($TinyBirdVariant)>
public "texture"(): $ResourceLocation
public static "getRandomVariant"(arg0: $RandomSource$Type): $TinyBirdVariant
public static "getVariantId"(arg0: $TinyBirdVariant$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TinyBirdVariant$Type = ($TinyBirdVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TinyBirdVariant_ = $TinyBirdVariant$Type;
}}
