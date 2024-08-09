//priority: 9
GTCEuStartupEvents.registry("gtceu:material", (event) => {
    const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
    const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')

    // Groups
    event.create('hydroxide')
        .components('1x hydrogen', '1x oxygen')
        .plasma()

    event.create('aluminate')
        .components('1x aluminium', '2x oxygen')
        .plasma()
    
    event.create('metasilicate')
        .components('1x silicon', '3x oxygen')
        .plasma()
    event.create('orthosilicate')
        .components('1x silicon', '4x oxygen')
        .plasma()
    
    event.create('hexafluoroaluminate')
        .components('1x aluminium', '6x fluorine')
        .plasma()

    event.create('sulfate')
        .components('1x sulfur', '4x oxygen')
        .plasma()
    event.create('sulfite')
        .components('1x sulfur', '3x oxygen')
        .plasma()
    
    event.create('carbonate')
        .components('1x carbon', '3x oxygen')
        .plasma()
    
    event.create('phosphate')
        .components('1x phosphorus', '4x oxygen')
        .plasma()

    event.create('aluminosilicate_cage')
        .components('6x aluminium', '6x silicon', '24x oxygen')
        .plasma()
})