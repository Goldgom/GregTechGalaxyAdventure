//priority: 1000
GTCEuStartupEvents.registry("gtceu:material", (event) => {
    // Groups
    event.create('hydroxide')
        .components('1x hydrogen', '1x oxygen')

    event.create('aluminate')
        .components('1x aluminium', '2x oxygen')
    
    event.create('metasilicate')
        .components('1x silicon', '3x oxygen')
    
    event.create('hexafluoroaluminate')
        .components('1x aluminium', '6x fluorine')

    event,create('sulfate')
        .components('1x sulfur', '4x oxygen')
    event.create('sulfite')
        .components('1x sulfur', '3x oxygen')
    
    event.create('carbonate')
        .components('1x carbon', '3x oxygen')
    
    event.create('phosphate')
        .components('1x phosphorus', '4x oxygen')

    // Compounds
    event.create('ferric_oxide')
        .components('2x iron', '3x oxygen')
        .color(0xC80815)
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
        .dust()
        .gem()
        .flags(GTMaterialFlags.CRYSTALLIZABLE)
    
    event.create('sodium_hexafluoroaluminate')
        .components('3x sodium', '1x hexafluoroaluminate')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
})