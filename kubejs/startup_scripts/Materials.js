//priority: 1
const $BloomProperty = Java.loadClass("com.gbth.gbthcore.gtceu.material.BloomProperty");

GTCEuStartupEvents.registry("gtceu:material", (event) => {
  const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
  const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')

  // //Solution Object
  // var Solution = {
  //   name, 
  //   components, 
  //   temperature: 25+273, 
  //   color, 
  //   density: 1.0, 
  //   viscosity: 0.00894, 
  //   luminosity: -1,
  //   iconSet: GTMaterialIconSet.FLUID, 
  //   flags: [GTMaterialFlags.DISABLE_DECOMPOSITION],
  //   register: function() {
  //     event.create(this.name)
  //     .components(this.components)
  //     .iconSet(this.iconSet)
  //     ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
  //       .temperature(this.temperature)
  //       .color(this.color)
  //       .density(this.density)
  //       .viscosity(this.viscosity)
  //       .luminosity(this.luminosity)
  //       )
  //       .flags(this.flags)
  //   }
  // }


  //Add materials
  event.create('alpha_alumina')
    .color(0xFFFFFF)
    .secondaryColor(0xF0F0F0)
    .dust()
    .gem()
    .iconSet(GTMaterialIconSet.BRIGHT)
    .components('2x aluminium', '3x oxygen')
    .flags(GTMaterialFlags.CRYSTALLIZABLE)
  
  event.create('gamma_alumina')
    .color(0xFFFFFF)
    .secondaryColor(0xF0F0F0)
    .dust()
    .iconSet(GTMaterialIconSet.BRIGHT)
    .components('2x aluminium', '3x oxygen')
  
  event.create('aluminium_hydroxide')
    .color(0xFFFFFF)
    .secondaryColor(0xF0F0F0)
    .dust()
    .iconSet(GTMaterialIconSet.BRIGHT)
    .components('3x hydrogen', '1x aluminium', '3x oxygen')

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

  event.create('sodium_aluminate')
    .components('1x sodium', '1x aluminium', '2x oxygen')
    .dust()

  event.create('sodium_metasilicate')
    .components('2x sodium', '1x silicon', '3x oxygen')
    .dust()


  event.create('sodium_hydroxide_solution')
    .components('sodium_hydroxide', 'water')
    .iconSet(GTMaterialIconSet.FLUID)
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
      .temperature(25+273)
      .color(0x66b3ff)
      )

  event.create('hot_bayer_solution')
    .color(0x66b3ff)
    .components('sodium_hydroxide', 'sodium_aluminate', 'water', 'sodium_metasilicate')
    .iconSet(GTMaterialIconSet.FLUID)
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
      .temperature(175+273)
      .color(0x66b3ff)
      )
  
  event.create('supersaturated_bayer_solution')
    .color(0x66b3ff)
    .components('sodium_hydroxide', 'sodium_aluminate', 'water', 'sodium_metasilicate')
    .iconSet(GTMaterialIconSet.FLUID)
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
      .temperature(175+273)
      .color(0x66b3ff)
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