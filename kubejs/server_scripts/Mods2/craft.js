ServerEvents.recipes(event => {
    event.remove({id: 'minecraft:wooden_pickaxe'})
    event.remove({id: 'create:shaped/mechanical_crafter'})

    event.shaped('create:mechanical_crafter',
    [
        'HW ',
        'LC ',
        '   '
    ],
    {
        H: '#forge:tools/hammers',
        C: 'minecraft:crafting_table',
        L: '#forge:leather',
        S: '#minecraft:wooden_slabs',
        W: 'create:cogwheel'
    }
)

})


ServerEvents.blockLootTables(event => {
    event.addBlock(Blocks.STONE, loot => {
        loot.addPool(pool => {
            pool.addItem('projectvibrantjourneys:rocks');
            pool.addItem('projectvibrantjourneys:rocks');
            pool.addItem('projectvibrantjourneys:rocks')
            .randomChance(0.75);            
            pool.addItem('projectvibrantjourneys:rocks')
            .randomChance(0.5);                
            pool.addItem('projectvibrantjourneys:rocks')
            .randomChance(0.25);            
            pool.addItem('projectvibrantjourneys:rocks')
            .randomChance(0.125);
        });
    });
});