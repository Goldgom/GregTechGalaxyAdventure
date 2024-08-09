ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor('bayer_process_bubbling')
        .inputFluids(
            Fluid.of('gtceu:hot_bayer_solution', 1000),
            Fluid.of('gtceu:carbon_dioxide', 12000)
        )
        .outputFluids(
            Fluid.of('gtceu:supersaturated_bayer_solution', 1000),
            Fluid.of('gtceu:carbon_dioxide', 10000)
        )
        .itemOutputs('2x gtceu:aluminium_hydroxide_small_dust')
        .duration(300)
        .EUt(10)
})