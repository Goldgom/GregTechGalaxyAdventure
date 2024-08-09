//priority: 1
const $BloomProperty = Java.loadClass("com.gbth.gbthcore.gtceu.material.BloomProperty");

GTCEuStartupEvents.registry("gtceu:material", (event) => {
  const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
  const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')

//Cryolite  
  event.create('cryolite')
    .components('1x sodium', '3x aluminium', '6x fluorine')
    .iconSet(GTMaterialIconSet.DULL)
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
      .temperature(1012+273)
      .density(3.032)
      .luminosity(15)
      .color(0xffdd99)
      .viscosity(0.0275)
      )
      .flags(GTMaterialFlags.DISABLE_DECOMPOSITION,
        GTMaterialFlags.DISABLE_ALLOY_PROPERTY,
        GTMaterialFlags.DISABLE_ALLOY_BLAST,
        GTMaterialFlags.CRYSTALLIZABLE,
        GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES
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

  function newSolution(name, components, variants) {
    variants.array.forEach(variant => {
      event.create(variant.name + '_' + name)
      .components(components)
      .iconSet(GTMaterialIconSet.FLUID)
      ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
        .temperature(variant.temperature)
        .color(variant.color)
        )
    });
    
  }
})