declare module "packages/com/aizistral/nochatreports/common/core/$ServerDataExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerDataExtension {

 "setPreventsChatReports"(arg0: boolean): void
 "preventsChatReports"(): boolean
}

export namespace $ServerDataExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerDataExtension$Type = ($ServerDataExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerDataExtension_ = $ServerDataExtension$Type;
}}
