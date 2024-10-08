LootJS.modifiers(event => {
	function addStrawCuttingLoot(blockID, chance) {
		event.addBlockLootModifier(blockID)
			.matchMainHand("#forge:tools/knives")
			.playerAction(p => p.damageHeldItem())
			.randomChance(chance)
			.addLoot('farmersdelight:straw')
	}

	addStrawCuttingLoot('minecraft:grass', 0.5)
	addStrawCuttingLoot('minecraft:tall_grass', 1)

	event.addBlockLootModifier('minecraft:campfire').removeLoot('minecraft:charcoal').addLoot("2x minecraft:stick")
	
	event.addLootTableModifier(/(.*)/)
	.replaceLoot('sophisticatedbackpacks:iron_backpack', 'sophisticatedbackpacks:backpack')
	.replaceLoot('sophisticatedbackpacks:gold_backpack', 'sophisticatedbackpacks:backpack')
	.replaceLoot('sophisticatedbackpacks:copper_backpack', 'sophisticatedbackpacks:backpack')
	.removeLoot('gtceu:steel_ingot')
})

ServerEvents.chestLootTables(event => {
	event.addChest('gbth:logs', t => {
		t.addPool(p => {
			p.rolls = 1
			p.addItem('minecraft:oak_log', 3)
			p.addItem('minecraft:birch_log', 3)
			p.addItem('minecraft:spruce_log', 3)
			p.addItem('minecraft:acacia_log', 3)
			p.addItem('minecraft:cherry_log', 3)
			p.addItem('minecraft:jungle_log', 3)
			p.addItem('minecraft:dark_oak_log', 3)
			p.addItem('minecraft:mangrove_log', 3)
			p.addItem('gtceu:rubber_log', 3)
		})
	})

	event.addChest('gbth:saplings', t => {
		t.addPool(p => {
			p.rolls = 1
			p.addItem('minecraft:oak_sapling', 3)
			p.addItem('minecraft:birch_sapling', 3)
			p.addItem('minecraft:spruce_sapling', 3)
			p.addItem('minecraft:acacia_sapling', 3)
			p.addItem('minecraft:cherry_sapling', 3)
			p.addItem('minecraft:jungle_sapling', 3)
			p.addItem('minecraft:dark_oak_sapling', 3)
			p.addItem('minecraft:mangrove_propagule', 3)
			p.addItem('gtceu:rubber_sapling', 3)
		})
	})



	event.addChest('gbth:common_food', t => {
		t.addPool(p => {
			p.rolls = 1
			p.addItem('minecraft:beef', 4, [1, 4])
			p.addItem('minecraft:porkchop', 4, [1, 4])
			p.addItem('minecraft:cod', 4, [1, 4])
			p.addItem('minecraft:cooked_beef', 1, [1, 2])
			p.addItem('minecraft:cooked_porkchop', 1, [1, 2])
			p.addItem('minecraft:cooked_chicken', 1, [1, 2])
			p.addItem('minecraft:chicken', 4, [1, 4])
			p.addItem('minecraft:bread', 2, [1, 8])
			p.addItem('minecraft:rotten_flesh', 6, [1, 4])
			p.addItem('minecraft:sweet_berries', 4, [1, 4])
			p.addItem('minecraft:cookie', 4, [1, 4])
			p.addItem('minecraft:cooked_cod', 2, [1, 2])
			p.addItem('minecraft:salmon', 4, [1, 4])
			p.addItem('minecraft:cooked_salmon', 2, [1, 2])
			p.addItem('minecraft:potato', 4, [1, 4])
			p.addItem('minecraft:baked_potato', 2, [1, 2])
			p.addItem('minecraft:carrot', 4, [1, 4])
			p.addItem('farmersdelight:onion', 3, [1, 2])
			p.addItem('farmersdelight:tomato', 3, [1, 2])
		})
	})

	event.addChest('gbth:dirt_age', t => {
		t.addPool(p => {
			p.rolls = 1
			p.addLootTable('gbth:chests/saplings').weight(8).count([1, 4])
			p.addLootTable('gbth:chests/logs').weight(8).count([1, 4])
			p.addItem('minecraft:dirt', 4, [1, 8])
			p.addItem('minecraft:cobblestone', 4, [1, 8])
			p.addItem('minecraft:string', 2, [1, 4])
			p.addItem('minecraft:bone', 2, [1, 4])
			p.addItem('minecraft:coal', 2, [1, 4])
			p.addItem('minecraft:stick', 3, [1, 8])
			p.addItem('minecraft:wheat_seeds', 5, [1, 8])
		})
	})

	event.addChest('gbth:ulv_age', t => {
		t.addPool(p => {
			p.rolls = 1
			p.addItem('minecraft:bricks', 5, [1, 8])
			p.addItem('gtceu:coke_gem', 2, [1, 4])
			p.addItem('minecraft:diamond', 1, 1)
			p.addItem('minecraft:emerald', 1, 1)
			p.addItem('minecraft:redstone', 2, [1, 8])
			p.addItem('minecraft:lapis_lazuli', 2, [1, 8])
			p.addItem('gtceu:sticky_resin', 2, [1, 4])
			p.addItem('gtceu:resin_circuit_board', 2, [1, 8])
			p.addItem('gtceu:resin_circuit_board', 2, [1, 4])
			p.addItem('gtceu:resistor', 2, [1, 4])
			p.addItem('gtceu:glass_tube', 2, [1, 8])
			p.addItem('gtceu:vacuum_tube', 1, [1, 2])
			p.addItem('gtceu:basic_electronic_circuit', 1, 1)
			p.addItem('gtceu:steel_ingot', 2, [1, 4])
			p.addItem('gtceu:bronze_ingot', 3, [1, 4])
			p.addItem('minecraft:copper_ingot', 3, [1, 8])
			p.addItem('gtceu:tin_ingot', 3, [1, 8])
			p.addItem('gtceu:wrought_iron_ingot', 3, [1, 8])
			p.addItem('minecraft:iron_ingot', 2, [1, 4])
			p.addItem('gtceu:rubber_ingot', 3, [1, 8])
			p.addItem('gtceu:andesite_alloy_ingot', 2, [1, 4])
			p.addItem('create:andesite_casing', 2, [1, 2])
			p.addItem('greate:andesite_alloy_shaft', 2, [1, 4])
			p.addItem('greate:andesite_alloy_cogwheel', 2, [1, 4])
			p.addItem('greate:large_andesite_alloy_cogwheel', 2, [1, 4])
		})
	})

	event.addChest('gbth:tasty_foods', t => {
		t.addPool(p => {
			p.rolls = 1
			p.addItem('farmersdelight:apple_cider', 1, [1, 4])
			p.addItem('farmersdelight:apple_pie', 1, [1, 4])
			p.addItem('farmersdelight:bacon_and_eggs', 1, [1, 4])
			p.addItem('farmersdelight:bacon_sandwich', 1, [1, 4])
			p.addItem('farmersdelight:barbecue_stick', 1, [1, 4])
			p.addItem('farmersdelight:baked_cod_stew', 1, [1, 4])
			p.addItem('farmersdelight:beef_stew', 1, [1, 4])
			p.addItem('farmersdelight:bone_broth', 1, [1, 4])
			p.addItem('farmersdelight:cabbage_rolls', 1, [1, 4])
			p.addItem('farmersdelight:chicken_sandwich', 1, [1, 4])
			p.addItem('farmersdelight:chicken_soup', 1, [1, 4])
			p.addItem('farmersdelight:chocolate_pie', 1, [1, 4])
			p.addItem('farmersdelight:cooked_rice', 1, [1, 4])
			p.addItem('farmersdelight:dog_food', 1, [1, 4])
			p.addItem('farmersdelight:dumplings', 1, [1, 4])
			p.addItem('farmersdelight:egg_sandwich', 1, [1, 4])
			p.addItem('farmersdelight:fish_stew', 1, [1, 4])
			p.addItem('farmersdelight:fried_rice', 1, [1, 4])
			p.addItem('farmersdelight:fruit_salad', 1, [1, 4])
			p.addItem('farmersdelight:glow_berry_custard', 1, [1, 4])
			p.addItem('farmersdelight:grilled_salmon', 1, [1, 4])
			p.addItem('farmersdelight:hamburger', 1, [1, 4])
			p.addItem('farmersdelight:honey_glazed_ham', 1, [1, 4])
			p.addItem('farmersdelight:horse_feed', 1, [1, 4])
			p.addItem('farmersdelight:hot_cocoa', 1, [1, 4])
			p.addItem('farmersdelight:melon_juice', 1, [1, 4])
			p.addItem('farmersdelight:mixed_salad', 1, [1, 4])
			p.addItem('farmersdelight:mushroom_rice', 1, [1, 4])
			p.addItem('farmersdelight:mutton_wrap', 1, [1, 4])
			p.addItem('farmersdelight:nether_salad', 1, [1, 4])
			p.addItem('farmersdelight:noodle_soup', 1, [1, 4])
			p.addItem('farmersdelight:pasta_with_meatballs', 1, [1, 4])
			p.addItem('farmersdelight:pasta_with_mutton_chop', 1, [1, 4])
			p.addItem('farmersdelight:pumpkin_soup', 1, [1, 4])
			p.addItem('farmersdelight:ratatouille', 1, [1, 4])
			p.addItem('farmersdelight:roast_chicken', 1, [1, 4])
			p.addItem('farmersdelight:roasted_mutton_chops', 1, [1, 4])
			p.addItem('farmersdelight:shepherds_pie', 1, [1, 4])
			p.addItem('farmersdelight:squid_ink_pasta', 1, [1, 4])
			p.addItem('farmersdelight:steak_and_potatoes', 1, [1, 4])
			p.addItem('farmersdelight:stuffed_potato', 1, [1, 4])
			p.addItem('farmersdelight:stuffed_pumpkin', 1, [1, 4])
			p.addItem('farmersdelight:sweet_berry_cheesecake', 1, [1, 4])
			p.addItem('farmersdelight:vegetable_noodles', 1, [1, 4])
			p.addItem('farmersdelight:vegetable_soup', 1, [1, 4])
			p.addItem('minecraft:beetroot_soup', 1, [1, 4])
			p.addItem('minecraft:mushroom_stew', 1, [1, 4])
			p.addItem('minecraft:rabbit_stew', 1, [1, 4])
		})
	})
})