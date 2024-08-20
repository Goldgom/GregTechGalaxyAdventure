//priority: 1
GTCEuStartupEvents.registry("gtceu:material", (event) => {
    const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
    const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')

    //Flash Tank
    function createFluidTemperatureVariants(name, type, components, color, mintemp, maxtemp, step) {
        for (let i = mintemp; i <= maxtemp; i += step) {
            event.create(`${i}c_${name}`)
                .components(components)
                .iconSet(GTMaterialIconSet.FLUID)
                ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](type, new GTFluidBuilder()
                    .color(color)
                    .temperature(i+273)
                )
        }
    }
    createFluidTemperatureVariants({
        name: "low_pressure_steam",
        type: GTFluidStorageKeys.GAS,
        components: ['water'],
        color: 0xFFFFFF,
        mintemp: 25,
        maxtemp: 250,
        step: 25
    })

    //Lime Slaker
    createFluidTemperatureVariants({
        name: "lime_slurry",
        type: GTFluidStorageKeys.LIQUID,
        components: ['calcium_hydroxide', 'water'],
        color: 0xF0F0F0,
        mintemp: 50,
        maxtemp: 100,
        step: 25
    })

    //Precipitator
    createFluidTemperatureVariants({
        name: "aluminium_precipitate_slurry",
        type: GTFluidStorageKeys.LIQUID,
        components: ['aluminium_hydroxide', 'water'],
        color: 0x66b3ff,
        mintemp: 25,
        maxtemp: 75,
        step: 25
    })

    //Aluminium Line
    let slurries = ['bauxite_slurry', 'uniform_bauxite_slurry', 'sweet_bauxite_slurry']

    event.create('gamma_alumina')
        .components('aluminium_oxide')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    createFluidTemperatureVariants({
        name: "uniform_bauxite_slurry",
        type: GTFluidStorageKeys.LIQUID,
        components: ['bauxite', 'sodium_hydroxide', 'water'],
        color: 0x945242,
        mintemp: 25,
        maxtemp: 75,
        step: 25
    })

    createFluidTemperatureVariants({
        name: "sweet_bauxite_slurry",
        type: GTFluidStorageKeys.LIQUID,
        components: ['bauxite', 'calcium_sulfate', 'sodium_hydroxide', 'water'],
        color: 0x945242,
        mintemp: 25,
        maxtemp: 75,
        step: 25
    })
    
    createFluidTemperatureVariants({
        name: "bauxite_slurry",
        type: GTFluidStorageKeys.LIQUID,
        components: ['bauxite', 'sodium_hydroxide', 'water'],
        color: 0x945242,
        mintemp: 25,
        maxtemp: 75,
        step: 25
    })

    createFluidTemperatureVariants({
        name: "spent_bayer_liquor",
        type: GTFluidStorageKeys.LIQUID,
        components: ['sodium_hydroxide', 'sodium_aluminate', 'sodium_metasilicate', 'water'],   
        color: 0x66b3ff,
        mintemp: 25,
        maxtemp: 75,
        step: 25
    })

    event.create('red_mud')
        .color(0xD27474)
        .components('ssodalite', 'cancrinite', 'goethite', 'hematite', 'silicon_dioxide', 'tricalcium_aluminate_hydrate', 'silicon_dioxide', 'titanium_dioxide', 'perovskite', 'muscovite', 'calcium_carbonate', 'gibbsite', 'kaolinite', 'water')
        .iconSet(GTMaterialIconSet.DULL)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
          .temperature(25+273)
          .color(0x945242)
          )
        .dust()

    event.create('alumina_precipitate_mixture')
        .components('aluminium_hydroxide')
        .iconSet(GTMaterialIconSet.DULL)
        .dust()
    
    event.create('hot_bayer_solution_with_precipitates')
        .color(0xD27474)
        .components('sodium_hydroxide', 'sodium_aluminate', 'sodium_metasilicate', 'water')
        .iconSet(GTMaterialIconSet.FLUID)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
          .temperature(175+273)
          .color(0x9c2802)
          )
})