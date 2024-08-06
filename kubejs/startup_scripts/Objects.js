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