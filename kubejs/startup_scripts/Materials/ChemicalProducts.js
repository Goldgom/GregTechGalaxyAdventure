//priority: 999
GTCEuStartupEvents.registry("gtceu:material", (event) => {
    event.create('gamma_alumina')
        .components('aluminium_oxide')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
    
    event.create('red_mud')
        .components('aluminium_hydroxide', 'sodium_aluminate', 'sodium_metasilicate')
        .iconSet(GTMaterialIconSet.BRIGHT)
        .dust()
})