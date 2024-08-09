// priority: 0

//// Enums ////

global.Quality = {
	UltraLow: 'ultra_low_quality',
	Low: 'low_quality',
	Medium: 'medium_quality',
	High: 'high_quality',
}

//// Mods ////

global.Greate = {
	MachineTiers: [
		'andesite_alloy',
		'steel',
		'aluminium',
		'stainless_steel',
		'titanium',
		'tungsten_steel',
		'rhodium_plated_palladium',
		'naquadah_alloy',
		'darmstadtium',
		'neutronium'
	],
	BeltTiers: [
		'rubber',
		'silicone_rubber',
		'polyethylene',
		'polytetrafluoroethylene',
		'polybenzimidazole'
	]
}

global.AE2 = {
	CellSizes: ['1k', '4k', '16k', '64k', '256k'],
	SpatialCellSizes: [2, 16, 128],
	WaferMaterialQualities: {
		'silicon': global.Quality.UltraLow,
		'phosphorus': global.Quality.Low,
		'naquadah': global.Quality.Medium,
		'neutronium': global.Quality.High,
	}
}

global.Minecraft = {
	Dyes: ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
}

//Solution Object
// global.Solution = {
// 	name, 
// 	components, 
// 	temperature: 25+273, 
// 	color, 
// 	density: 1.0, 
// 	viscosity: 0.00894, 
// 	luminosity: -1,
// 	iconSet: GTMaterialIconSet.FLUID, 
// 	flags: [GTMaterialFlags.DISABLE_DECOMPOSITION],
// 	register: function() {
// 		GTCEuStartupEvents.registry("gtceu:material", (event) => {
// 			const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
// 			const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
// 			event.create(this.name)
// 				.components(this.components)
// 				.iconSet(this.iconSet)
// 				['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder()
// 					.temperature(this.temperature)
// 					.color(this.color)
// 					.density(this.density)
// 					.viscosity(this.viscosity)
// 					.luminosity(this.luminosity)
// 				)
// 				.flags(this.flags)
// 		})
// 	}
// }