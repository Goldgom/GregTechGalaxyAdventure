//priority: 6
GTCEuStartupEvents.registry("gtceu:material", (event) => {
    const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
    const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
    // Solutions
    event.create('sodium_hydroxide_solution')
        .components('sodium_hydroxide', 'water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
        .temperature(25+273)
        .color(0x66b3ff)
        )
    
    event.create('hot_bayer_solution')
        .color(0x66b3ff)
        .components('sodium_hydroxide', 'sodium_aluminate', 'sodium_metasilicate', 'water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
          .temperature(175+273)
          .color(0x66b3ff)
          )
})