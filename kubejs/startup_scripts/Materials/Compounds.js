//priority: 2
GTCEuStartupEvents.registry("gtceu:material", (event) => {
    const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
    const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
    // Groups
    event.create('hydroxide')
        .components('1x hydrogen', '1x oxygen')

    event.create('aluminate')
        .components('1x aluminium', '2x oxygen')
    
    event.create('metasilicate')
        .components('1x silicon', '3x oxygen')
    
    event.create('hexafluoroaluminate')
        .components('1x aluminium', '6x fluorine')

    event.create('sulfate')
        .components('1x sulfur', '4x oxygen')
    event.create('sulfite')
        .components('1x sulfur', '3x oxygen')
    
    event.create('carbonate')
        .components('1x carbon', '3x oxygen')
    
    event.create('phosphate')
        .components('1x phosphorus', '4x oxygen')

    // Compounds
    event.create('hematite')
        .components('2x iron', '3x oxygen')
        .color(0xC80815)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    
    event.create('boehmite')
        .components('1x aluminium', '1x oxygen', '1x hydroxide')
        .color(0xE0E0E0)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    
    event.create('silica')
        .components('1x silicon', '2x oxygen')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('titanium_dioxide')
        .components('1x titanium', '2x oxygen')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('perovskite')
        .components('1x calcium', '1x titanium', '3x oxygen')
        .color(0xB16A34)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .gem()
        .flags(GTMaterialFlags.CRYSTALLIZABLE)

    event.create('potassium_oxide')
        .components('2x potassium', '1x oxygen')
        .color(0xF9EBB4)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('potassium_flouride')
        .components('1x potassium', '1x fluorine')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
        
    event.create('sodium_aluminate')
        .components('1x sodium', '1x aluminate')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('sodium_metasilicate')
        .components('2x sodium', '1x silicate')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('aluminium_hydroxide')
        .components('1x aluminium', '3x hydroxide')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    
    event.create('aluminium_oxide')
        .components('2x aluminium', '3x oxygen')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .gem()
        .flags(GTMaterialFlags.CRYSTALLIZABLE)
    
    event.create('sodium_hexafluoroaluminate')
        .components('3x sodium', '1x hexafluoroaluminate')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    //Relatively complex compounds
    // event.create('tricalcium_aluminate')
    //     .components('3x quicklime', '1x aluminium_oxide', '6x water')
    //     .color(0xFFF9D7)
    //     .iconSet(GTMaterialIconSet.BRIGHT)
    //     .dust()

    event.create('muscovite')
        .components('2x potassium_flouride', '3x aluminium_oxide', '6x silica', '1x water')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .gem()
            
})