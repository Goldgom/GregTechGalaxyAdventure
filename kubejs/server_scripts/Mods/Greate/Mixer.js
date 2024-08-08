ServerEvents.recipes(event => {
    event.recipes.greate.mixing('minecraft:turtle_helmet', [
		'kubejs:unf_turtle_helmet',
		Fluid.of('create:potion', 576, {Bottle:'REGULAR', Potion:'minecraft:water_breathing'})
	]).heated()
	event.recipes.greate.mixing(Fluid.of('gtceu:sodium_hydroxide_solution', 1000), [
		'2x gtceu:sodium_hydroxide_dust',
		Fluid.of('minecraft:water', 1000)
	])
	event.recipes.greate.mixing(Fluid.of('gtceu:hot_bayer_solution', 1000), [
		'2x gtceu:bauxite_dust',
		Fluid.of('gtceu:sodium_hydroxide_solution', 1000)
	]).heated().duration(2000)
})