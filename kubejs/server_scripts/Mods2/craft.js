ServerEvents.recipes(event => {
    event.remove({id: 'create:shaped/mechanical_crafter'})

    event.shaped('create:mechanical_crafter',
    [
        'HS ',
        'LC ',
        '   '
    ],
    {
        H: '#forge:tools/hammers',
        C: 'minecraft:crafting_table',
        L: '#forge:leather',
        S: '#minecraft:wooden_slabs',

    }
)

})

