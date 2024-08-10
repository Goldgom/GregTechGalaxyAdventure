//priority: 6
GTCEuStartupEvents.registry("gtceu:material", (event) => {
    const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
    const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
    
    event.create('muscovite')
    .components('2x potassium_fluoride', '3x aluminium_oxide', '6x silicon_dioxide', '1x water')
    .color(0xD9D3BB)
    .iconSet(GTMaterialIconSet.BRIGHT)
    .gem()
    .ore()
    
    event.create('cancrinite')
    .components('6x sodium', '2x calcium', '2x carbonate', '2x water', '6x sodium', '2x calcium', '1x aluminosilicate_cage', '2x water')
    .color(0xF7BA45)
    .secondaryColor(0x606B8A)
    .iconSet(GTMaterialIconSet.BRIGHT)
    .ore()

    event.create('boehmite')
    .components('aluminium_oxide_hydroxide')
    .color(0xD1CA95)
    .iconSet(GTMaterialIconSet.BRIGHT)
    .ore()

    event.create('gibbsite')
    .components('aluminium_hydroxide')
    .color(0x7F8C65)
    .secondaryColor(0xDDE3CD)
    .iconSet(GTMaterialIconSet.BRIGHT)
    .ore()

    event.create('ssodalite')
        .components('3x sodium_oxide', '3x aluminium_oxide', '6x silicon_dioxide', '1x sodium_sulfate')
        .color(0x1E2F4F)
        .secondaryColor(0xEDE9D0)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .ore()

    event.create('perovskite')
        .components('calcium_titanate')
        .color(0x516161)
        .secondaryColor(0xC1A98D)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .ore()


})