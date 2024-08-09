//priority: 8
GTCEuStartupEvents.registry("gtceu:material", (event) => {
    const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
    const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')

    // Compounds
        
    event.create('sodium_oxide')
        .components('2x sodium', '1x oxygen')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('sodium_aluminate')
        .components('1x sodium', '1x aluminate')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    
    event.create('sodium_metasilicate')
        .components('2x sodium', '1x metasilicate')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    
    
    event.create('sodium_hexafluoroaluminate')
        .components('3x sodium', '1x hexafluoroaluminate')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('sodium_sulfate')
        .components('2x sodium', '1x sulfate')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    
    event.create('potassium_oxide')
        .components('2x potassium', '1x oxygen')
        .color(0xF9EBB4)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('potassium_fluoride')
        .components('1x potassium', '1x fluorine')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('calcium_titanate')
        .components('1x calcium', '1x titanium', '3x oxygen')
        .color(0xB16A34)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    
    event.create('calcium_oxide')
        .components('1x calcium', '1x oxygen')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('aluminium_oxide')
        .components('2x aluminium', '3x oxygen')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .gem()
        .flags(GTMaterialFlags.CRYSTALLIZABLE)
    
    event.create('aluminium_hydroxide')
        .components('1x aluminium', '3x hydroxide')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('aluminium_oxide_hydroxide')
        .components('1x aluminium', '1x oxygen', '1x hydroxide')
        .color(0xE0E0E0)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('titanium_dioxide')
        .components('1x titanium', '2x oxygen')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()

    event.create('ferric_oxide_hydroxide')
        .components('1x iron', '1x oxygen', '1x hydroxide')
        .color(0xC23F28)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    })