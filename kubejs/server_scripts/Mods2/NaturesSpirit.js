ServerEvents.recipes(event => {
    event.remove({id: 'natures_spirit:coconut_half_from_coconut'})
    event.shapeless('2x natures_spirit:coconut_half', ['natures_spirit:coconut', '#forge:tools/hammers'])
})