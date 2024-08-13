//priority: 1
GTCEuStartupEvents.registry("gtceu:material", (event) => {
    const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
    const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')

    //Flash Tank
    event.create('25c_steam')
        .components('water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.GAS, new GTFluidBuilder()
          .temperature(25+273)
          )
    
    event.create('50c_steam')
        .components('water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.GAS, new GTFluidBuilder()
          .temperature(50+273)
          )

    event.create('75c_steam')
        .components('water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.GAS, new GTFluidBuilder()
          .temperature(75+273)
          )

    //Lime Slaker
    event.create('lime_slurry')
        .components('calcium_hydroxide', 'water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
          .temperature(75+273)
          .color(0xF0F0F0)
          )          

    //Aluminium Line
    event.create('gamma_alumina')
        .components('aluminium_oxide')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    
    event.create('aluminium_slurry')
        .components('bauxite', 'sodium_hydroxide_solution', 'water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
          .temperature(25+273)
          .color(0x945242)
          )

    event.create('uniform_bauxite_slurry')
        .components('bauxite', 'sodium_hydroxide', 'water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
          .temperature(50+273)
          .color(0x945242)
          )

    event.create('sweet_bauxite_slurry')
        .components('bauxite', 'calcium_sulfate', 'sodium_hydroxide', 'water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
          .temperature(75+273)
          .color(0x945242)
          )
    
    event.create('bauxite_slurry')
        .components('bauxite', 'sodium_hydroxide', 'water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
          .temperature(25+273)
          .color(0x945242)
          )

    event.create('wet_red_mud')
        .color(0xD27474)
        .components('ssodalite', 'cancrinite', 'goethite', 'hematite', 'silicon_dioxide', 'tricalcium_aluminate_hydrate', 'silicon_dioxide', 'titanium_dioxide', 'perovskite', 'muscovite', 'calcium_carbonate', 'gibbsite', 'kaolinite', 'water')
        .iconSet(GTMaterialIconSet.DULL)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
          .temperature(25+273)
          .color(0x945242)
          )
    
    event.create('hot_bayer_solution_with_precipitates')
        .color(0xD27474)
        .components('sodium_hydroxide', 'sodium_aluminate', 'sodium_metasilicate', 'water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
          .temperature(175+273)
          .color(0x9c2802)
          )
})