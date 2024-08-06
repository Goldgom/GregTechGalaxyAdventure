//priority: 1
const $BloomProperty = Java.loadClass("com.gbth.gbthcore.gtceu.material.BloomProperty");

GTCEuStartupEvents.registry("gtceu:material", (event) => {
  GTMaterials.Polyethylene.addFlags(GTMaterialFlags.GENERATE_ROTOR)
  GTMaterials.Wood.addFlags(GTMaterialFlags.GENERATE_RING)
  GTMaterials.WroughtIron.addFlags(GTMaterialFlags.GENERATE_ROTOR)
  GTMaterials.Obsidian.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW)
  GTMaterials.CertusQuartz.addFlags(GTMaterialFlags.GENERATE_LENS)

  GTMaterials.get("andesite_alloy").addFlags(GTMaterialFlags.DISABLE_DECOMPOSITION)
  GTMaterials.get("andesite_alloy").setProperty(GBTHCorePropertyKeys.BLOOM, new $BloomProperty())
  GTMaterials.Iron.setProperty(GBTHCorePropertyKeys.BLOOM, new $BloomProperty())
  GTMaterials.Redstone.setProperty(GBTHCorePropertyKeys.BLOOM, new $BloomProperty())

  // Add stone hammer for hammering blooms
  GTMaterials.Stone.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(0, 3, 64, 1)
      .addTypes([GTToolType.HARD_HAMMER,GTToolType.MINING_HAMMER,GTToolType.SAW,GTToolType.FILE])
      .build())
})