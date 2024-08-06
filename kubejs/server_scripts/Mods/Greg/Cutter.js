ServerEvents.recipes(event => {
	event.recipes.gtceu.cutter('kubejs:cutting_netherite_block_water')
		.duration(1600)
		.itemInputs('minecraft:netherite_block')
        .inputFluids(Fluid.of('minecraft:water', 60))
		.itemOutputs('9x kubejs:netherite_plate')
		.EUt(30)

        event.recipes.gtceu.cutter('kubejs:cutting_netherite_block_distilled_water')
		.duration(1200)
		.itemInputs('minecraft:netherite_block')
        .inputFluids(Fluid.of('gtceu:distilled_water', 40))
		.itemOutputs('9x kubejs:netherite_plate')
		.EUt(30)

        event.recipes.gtceu.cutter('kubejs:cutting_netherite_block_lubricant')
		.duration(800)
		.itemInputs('minecraft:netherite_block')
        .inputFluids(Fluid.of('gtceu:lubricant', 20))
		.itemOutputs('9x kubejs:netherite_plate')
		.EUt(30)
})
