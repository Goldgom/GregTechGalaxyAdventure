declare module "packages/oshi/util/tuples/$Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Pair<A, B> {

constructor(arg0: A, arg1: B)

public "getA"(): A
public "getB"(): B
get "a"(): A
get "b"(): B
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<A, B> = ($Pair<(A), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<A, B> = $Pair$Type<(A), (B)>;
}}
