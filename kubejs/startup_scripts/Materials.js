//priority: 1
const $BloomProperty = Java.loadClass("com.gbth.gbthcore.gtceu.material.BloomProperty");
const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')


GTCEuStartupEvents.registry("gtceu:material", (event) => {
  //Add materials
  event.create('alpha_alumina')
    .color(0xFFFFFF)
    .secondaryColor(0xF0F0F0)
    .dust()
    .iconSet(GTMaterialIconSet.DULL)
    .components('2x aluminum', '3x oxygen')
  
  event.create('gamma_alumina')
    .color(0xFFFFFF)
    .secondaryColor(0xF0F0F0)
    .dust()
    .iconSet(GTMaterialIconSet.DULL)
    .components('2x aluminum', '3x oxygen')

  event.create('cryolite')
    .color(0xfffae6)
    .secondaryColor(0xfff2e6)
    .gem()
    .components('1x sodium', '3x aluminum', '6x fluorine')
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
      .temperature(1012+273)
      .density(3.032)
      .luminosity(15)
      .color(0xffdd99)
      .viscosity(0.0275)
      )

  //Modify materials
  GTMaterials.Polyethylene.addFlags(GTMaterialFlags.GENERATE_ROTOR)
  GTMaterials.Wood.addFlags(GTMaterialFlags.GENERATE_RING)
  GTMaterials.WroughtIron.addFlags(GTMaterialFlags.GENERATE_ROTOR)
  GTMaterials.Obsidian.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW)
  GTMaterials.CertusQuartz.addFlags(GTMaterialFlags.GENERATE_LENS)

  GTMaterials.get("andesite_alloy").addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION)
  GTMaterials.get("andesite_alloy").setProperty(GBTHCorePropertyKeys.BLOOM, new $BloomProperty())
  GTMaterials.Iron.setProperty(GBTHCorePropertyKeys.BLOOM, new $BloomProperty())
  GTMaterials.Redstone.setProperty(GBTHCorePropertyKeys.BLOOM, new $BloomProperty())
  // change
  // Add stone hammer for hammering blooms
  GTMaterials.Stone.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(0, 3, 64, 1)
      .addTypes([GTToolType.HARD_HAMMER,GTToolType.FILE])
      .build())
})