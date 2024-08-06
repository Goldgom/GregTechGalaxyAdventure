ItemEvents.modification(event => {
    event.modify('minecraft:wooden_pickaxe', item => {
        item.tier = {
            level: -1, // 设置挖掘等级为 -1，使其不能挖掘任何东西
            uses: 59,
            speed: 2.0,
            attackDamageBonus: 0.0,
            enchantmentValue: 15,
            repairIngredient: '#minecraft:planks'
        }
    })
})
