//priority: 7
GTCEuStartupEvents.registry("gtceu:material", (event) => {
    const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
    const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
    
    //Complexes
    event.create('tricalcium_aluminate_hydrate')
        .components('3x calcium_oxide', '1x aluminium_oxide', '6x water')
        .color(0xFFF9D7)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    
    event.create('kaolinite')
        .components('1x aluminium_oxide', '2x silicon_dioxide', '2x water')
        .color(0xE6E6E6)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
})