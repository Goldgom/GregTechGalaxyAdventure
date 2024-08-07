ServerEvents.recipes(event => {
  event.remove({id: 'gtceu:shaped/file_stone'})
  event.remove({id: 'gtceu:shaped/saw_stone'})
  event.remove({id: 'gtceu:shaped/mining_hammer_stone'})

  

  bloomeryRecipe('minecraft:iron_ingot', 300, 'minecraft:iron_ingot', ['gtceu:wrought_iron_ingot', '#forge:gems/coke'])

  function bloomeryRecipe(id, duration, output, input) {
    event.recipes.gbthcore.bloomery(id)
        .duration(duration)
        .itemInputs(input)
        .itemOutputs(output)
  }  

})

