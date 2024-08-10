//priority: 1
GTCEuStartupEvents.registry("gtceu:material", (event) => {
    const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
    const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
    event.create('gamma_alumina')
        .components('aluminium_oxide')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    
    event.create('red_mud')
        .color(0xD27474)
        .components('ssodalite', 'cancrinite', 'goethite', 'hematite', 'silicon_dioxide', 'tricalcium_aluminate_hydrate', 'silicon_dioxide', 'titanium_dioxide', 'perovskite', 'muscovite', 'calcium_carbonate', 'gibbsite', 'kaolinite')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    
    event.create('hot_bayer_solution_with_impurities')
        .color(0xD27474)
        .components('sodium_hydroxide', 'sodium_aluminate', 'sodium_metasilicate', 'water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
          .temperature(175+273)
          .color(0x9c2802)
          )
})