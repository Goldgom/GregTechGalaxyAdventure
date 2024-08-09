ServerEvents.recipes(event => {
    // 删除所有以 'tacz:' 开头的物品的配方
    event.remove({id: /tacz:.*/});

    const ammoTypes = [
        Item.of('tacz:ammo', '{AmmoId:"tacz:45acp"}'), 
        Item.of('tacz:ammo', '{AmmoId:"lradd:nail"}'),
        Item.of('tacz:ammo', '{AmmoId:"tacz:68x51fury"}'), 
        Item.of('tacz:ammo', '{AmmoId:"tacz:9mm"}'),
        Item.of('tacz:ammo', '{AmmoId:"lradd:arrow"}'), 
        Item.of('tacz:ammo', '{AmmoId:"tacz:338"}'), 
        Item.of('tacz:ammo', '{AmmoId:"tacz:308"}'), 
        Item.of('tacz:ammo', '{AmmoId:"tacz:357mag"}'), 
        Item.of('tacz:ammo', '{AmmoId:"tacz:46x30"}'),
        Item.of('tacz:ammo', '{AmmoId:"tacz:50bmg"}'), 
        Item.of('tacz:ammo', '{AmmoId:"tacz:12g"}'), 
        Item.of('tacz:ammo', '{AmmoId:"tacz:30_06"}'),
        Item.of('tacz:ammo', '{AmmoId:"tacz:50ae"}'), 
        Item.of('tacz:ammo', '{AmmoId:"lradd:2mm_ec"}'),
        Item.of('tacz:ammo', '{AmmoId:"tacz:magnum_r"}'), 
        Item.of('tacz:ammo', '{AmmoId:"tacz:rpg_rocket"}'), 
        Item.of('tacz:ammo', '{AmmoId:"lradd:fusion_cell"}'),
        Item.of('tacz:ammo', '{AmmoId:"tacz:762x25"}'),
        Item.of('tacz:ammo', '{AmmoId:"tacz:556x45"}'),
        Item.of('tacz:ammo', '{AmmoId:"tacz:58x42"}'), 
        Item.of('tacz:ammo', '{AmmoId:"lradd:flintlock_bullet"}'), 
        Item.of('tacz:ammo', '{AmmoId:"lradd:m993"}'), 
        Item.of('tacz:ammo', '{AmmoId:"tacz:762x39"}'),
        Item.of('tacz:ammo', '{AmmoId:"tacz:762x54"}')
    ];
    const incompletedAmmo = [
        { id: 'inc_tacz_ammo_tacz:45acp', displayName: 'Incompleted TACZ:45ACP Ammo' },
        { id: 'inc_tacz_ammo_lradd:nail', displayName: 'Incompleted LRADD:NAIL Ammo' },
        { id: 'inc_tacz_ammo_tacz:68x51fury', displayName: 'Incompleted TACZ:68X51FURY Ammo' },
        { id: 'inc_tacz_ammo_tacz:9mm', displayName: 'Incompleted TACZ:9MM Ammo' },
        { id: 'inc_tacz_ammo_lradd:arrow', displayName: 'Incompleted LRADD:ARROW Ammo' },
        { id: 'inc_tacz_ammo_tacz:338', displayName: 'Incompleted TACZ:338 Ammo' },
        { id: 'inc_tacz_ammo_tacz:308', displayName: 'Incompleted TACZ:308 Ammo' },
        { id: 'inc_tacz_ammo_tacz:357mag', displayName: 'Incompleted TACZ:357MAG Ammo' },
        { id: 'inc_tacz_ammo_tacz:46x30', displayName: 'Incompleted TACZ:46X30 Ammo' },
        { id: 'inc_tacz_ammo_tacz:50bmg', displayName: 'Incompleted TACZ:50BMG Ammo' },
        { id: 'inc_tacz_ammo_tacz:12g', displayName: 'Incompleted TACZ:12G Ammo' },
        { id: 'inc_tacz_ammo_tacz:30_06', displayName: 'Incompleted TACZ:30_06 Ammo' },
        { id: 'inc_tacz_ammo_tacz:50ae', displayName: 'Incompleted TACZ:50AE Ammo' },
        { id: 'inc_tacz_ammo_lradd:2mm_ec', displayName: 'Incompleted LRADD:2MM_EC Ammo' },
        { id: 'inc_tacz_ammo_tacz:magnum_r', displayName: 'Incompleted TACZ:MAGNUM_R Ammo' },
        { id: 'inc_tacz_ammo_tacz:rpg_rocket', displayName: 'Incompleted TACZ:RPG_ROCKET Ammo' },
        { id: 'inc_tacz_ammo_lradd:fusion_cell', displayName: 'Incompleted LRADD:FUSION_CELL Ammo' },
        { id: 'inc_tacz_ammo_tacz:762x25', displayName: 'Incompleted TACZ:762X25 Ammo' },
        { id: 'inc_tacz_ammo_tacz:556x45', displayName: 'Incompleted TACZ:556X45 Ammo' },
        { id: 'inc_tacz_ammo_tacz:58x42', displayName: 'Incompleted TACZ:58X42 Ammo' },
        { id: 'inc_tacz_ammo_lradd:flintlock_bullet', displayName: 'Incompleted LRADD:FLINTLOCK_BULLET Ammo' },
        { id: 'inc_tacz_ammo_lradd:m993', displayName: 'Incompleted LRADD:M993 Ammo' },
        { id: 'inc_tacz_ammo_tacz:762x39', displayName: 'Incompleted TACZ:762X39 Ammo' },
        { id: 'inc_tacz_ammo_tacz:762x54', displayName: 'Incompleted TACZ:762X54 Ammo' }
    ];
    const ProcessedAmmo = [
        { id: 'proc_tacz_ammo_tacz:45acp', displayName: 'Processed TACZ:45ACP Ammo' },
        { id: 'proc_tacz_ammo_lradd:nail', displayName: 'Processed LRADD:NAIL Ammo' },
        { id: 'proc_tacz_ammo_tacz:68x51fury', displayName: 'Processed TACZ:68X51FURY Ammo' },
        { id: 'proc_tacz_ammo_tacz:9mm', displayName: 'Processed TACZ:9MM Ammo' },
        { id: 'proc_tacz_ammo_lradd:arrow', displayName: 'Processed LRADD:ARROW Ammo' },
        { id: 'proc_tacz_ammo_tacz:338', displayName: 'Processed TACZ:338 Ammo' },
        { id: 'proc_tacz_ammo_tacz:308', displayName: 'Processed TACZ:308 Ammo' },
        { id: 'proc_tacz_ammo_tacz:357mag', displayName: 'Processed TACZ:357MAG Ammo' },
        { id: 'proc_tacz_ammo_tacz:46x30', displayName: 'Processed TACZ:46X30 Ammo' },
        { id: 'proc_tacz_ammo_tacz:50bmg', displayName: 'Processed TACZ:50BMG Ammo' },
        { id: 'proc_tacz_ammo_tacz:12g', displayName: 'Processed TACZ:12G Ammo' },
        { id: 'proc_tacz_ammo_tacz:30_06', displayName: 'Processed TACZ:30_06 Ammo' },
        { id: 'proc_tacz_ammo_tacz:50ae', displayName: 'Processed TACZ:50AE Ammo' },
        { id: 'proc_tacz_ammo_lradd:2mm_ec', displayName: 'Processed LRADD:2MM_EC Ammo' },
        { id: 'proc_tacz_ammo_tacz:magnum_r', displayName: 'Processed TACZ:MAGNUM_R Ammo' },
        { id: 'proc_tacz_ammo_tacz:rpg_rocket', displayName: 'Processed TACZ:RPG_ROCKET Ammo' },
        { id: 'proc_tacz_ammo_lradd:fusion_cell', displayName: 'Processed LRADD:FUSION_CELL Ammo' },
        { id: 'proc_tacz_ammo_tacz:762x25', displayName: 'Processed TACZ:762X25 Ammo' },
        { id: 'proc_tacz_ammo_tacz:556x45', displayName: 'Processed TACZ:556X45 Ammo' },
        { id: 'proc_tacz_ammo_tacz:58x42', displayName: 'Processed TACZ:58X42 Ammo' },
        { id: 'proc_tacz_ammo_lradd:flintlock_bullet', displayName: 'Processed LRADD:FLINTLOCK_BULLET Ammo' },
        { id: 'proc_tacz_ammo_lradd:m993', displayName: 'Processed LRADD:M993 Ammo' },
        { id: 'proc_tacz_ammo_tacz:762x39', displayName: 'Processed TACZ:762X39 Ammo' },
        { id: 'proc_tacz_ammo_tacz:762x54', displayName: 'Processed TACZ:762X54 Ammo' }
    ];
    const AmmoModel = [
        { id: 'model_tacz_ammo_tacz:45acp', displayName: ' TACZ:45ACP Ammo Model' },
        { id: 'model_tacz_ammo_lradd:nail', displayName: ' LRADD:NAIL Ammo Model' },
        { id: 'model_tacz_ammo_tacz:68x51fury', displayName: ' TACZ:68X51FURY Ammo Model' },
        { id: 'model_tacz_ammo_tacz:9mm', displayName: ' TACZ:9MM Ammo Model' },
        { id: 'model_tacz_ammo_lradd:arrow', displayName: ' LRADD:ARROW Ammo Model' },
        { id: 'model_tacz_ammo_tacz:338', displayName: ' TACZ:338 Ammo Model' },
        { id: 'model_tacz_ammo_tacz:308', displayName: ' TACZ:308 Ammo Model' },
        { id: 'model_tacz_ammo_tacz:357mag', displayName: ' TACZ:357MAG Ammo Model' },
        { id: 'model_tacz_ammo_tacz:46x30', displayName: ' TACZ:46X30 Ammo Model' },
        { id: 'model_tacz_ammo_tacz:50bmg', displayName: ' TACZ:50BMG Ammo Model' },
        { id: 'model_tacz_ammo_tacz:12g', displayName: ' TACZ:12G Ammo Model' },
        { id: 'model_tacz_ammo_tacz:30_06', displayName: ' TACZ:30_06 Ammo Model' },
        { id: 'model_tacz_ammo_tacz:50ae', displayName: ' TACZ:50AE Ammo Model' },
        { id: 'model_tacz_ammo_lradd:2mm_ec', displayName: ' LRADD:2MM_EC Ammo Model' },
        { id: 'model_tacz_ammo_tacz:magnum_r', displayName: ' TACZ:MAGNUM_R Ammo Model' },
        { id: 'model_tacz_ammo_tacz:rpg_rocket', displayName: ' TACZ:RPG_ROCKET Ammo Model' },
        { id: 'model_tacz_ammo_lradd:fusion_cell', displayName: ' LRADD:FUSION_CELL Ammo Model' },
        { id: 'model_tacz_ammo_tacz:762x25', displayName: ' TACZ:762X25 Ammo Model' },
        { id: 'model_tacz_ammo_tacz:556x45', displayName: ' TACZ:556X45 Ammo Model' },
        { id: 'model_tacz_ammo_tacz:58x42', displayName: ' TACZ:58X42 Ammo Model' },
        { id: 'model_tacz_ammo_lradd:', displayName: ' LRADD:FLINTLOCK_BULLET Ammo Model' },
        { id: 'model_tacz_ammo_lradd:m993', displayName: ' LRADD:M993 Ammo Model' },
        { id: 'model_tacz_ammo_tacz:762x39', displayName: ' TACZ:762X39 Ammo Model' },
        { id: 'model_tacz_ammo_tacz:762x54', displayName: ' TACZ:762X54 Ammo Model' }
    ];
    // 根据现实每个子弹的特点和生产流程为每个子弹生成配方

event.recipes.gtceu.forming_press(AmmoModel[0].id + "_builder")
    .duration(40)
    .EUt(16)
    .itemOutputs('8x '+ProcessedAmmo[0].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[0].id);

event.recipes.gtceu.forming_press(AmmoModel[1].id + "_builder")
    .duration(200)
    .EUt(24)
    .itemOutputs('4x '+ProcessedAmmo[1].id)
    .itemInputs(['gtceu:iron_plate'])
    .notConsumable(AmmoModel[1].id);

event.recipes.gtceu.forming_press(AmmoModel[2].id + "_builder")
    .duration(100)
    .EUt(64)
    .itemOutputs('4x '+ProcessedAmmo[2].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[2].id);

event.recipes.gtceu.forming_press(AmmoModel[3].id + "_builder")
    .duration(40)
    .EUt(16)
    .itemOutputs('10x '+ProcessedAmmo[3].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[3].id);

event.recipes.gtceu.forming_press(AmmoModel[4].id + "_builder")
    .duration(160)
    .EUt(24)
    .itemOutputs('4x '+ProcessedAmmo[4].id)
    .itemInputs(['gtceu:steel_plate'])
    .notConsumable(AmmoModel[4].id);

event.recipes.gtceu.forming_press(AmmoModel[5].id + "_builder")
    .duration(400)
    .EUt(512)
    .itemOutputs(ProcessedAmmo[5].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[5].id);

event.recipes.gtceu.forming_press(AmmoModel[6].id + "_builder")
    .duration(100)
    .EUt(32)
    .itemOutputs('4x '+ProcessedAmmo[6].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[6].id);

event.recipes.gtceu.forming_press(AmmoModel[7].id + "_builder")
    .duration(60)
    .EUt(20)
    .itemOutputs('8x '+ProcessedAmmo[7].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[7].id);

event.recipes.gtceu.forming_press(AmmoModel[8].id + "_builder")
    .duration(40)
    .EUt(26)
    .itemOutputs('8x '+ProcessedAmmo[8].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[8].id);

event.recipes.gtceu.forming_press(AmmoModel[9].id + "_builder")
    .duration(40)
    .EUt(42)
    .itemOutputs('3x '+ProcessedAmmo[9].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[9].id);

event.recipes.gtceu.forming_press(AmmoModel[10].id + "_builder")
    .duration(20)
    .EUt(16)
    .itemOutputs('4x '+ProcessedAmmo[10].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[10].id);

event.recipes.gtceu.forming_press(AmmoModel[11].id + "_builder")
    .duration(200)
    .EUt(32)
    .itemOutputs('6x '+ProcessedAmmo[11].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[11].id);

event.recipes.gtceu.forming_press(AmmoModel[12].id + "_builder")
    .duration(160)
    .EUt(64)
    .itemOutputs('2x '+ProcessedAmmo[12].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[12].id);

event.recipes.gtceu.forming_press(AmmoModel[13].id + "_builder")
    .duration(20)
    .EUt(48)
    .itemOutputs('3x '+ProcessedAmmo[13].id)
    .itemInputs(['#forge:ingots/magnetic_steel'])
    .notConsumable(AmmoModel[13].id);

event.recipes.gtceu.forming_press(AmmoModel[14].id + "_builder")
    .duration(180)
    .EUt(42)
    .itemOutputs('3x '+ProcessedAmmo[14].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[14].id);

event.recipes.gtceu.forming_press(AmmoModel[15].id + "_builder")
    .duration(300)
    .EUt(128)
    .itemOutputs(ProcessedAmmo[15].id)
    .itemInputs(['gtceu:steel_plate','gtceu:steel_plate'])
    .notConsumable(AmmoModel[15].id);

event.recipes.gtceu.forming_press(AmmoModel[16].id + "_builder")
    .duration(1200)
    .EUt(5096)
    .itemOutputs(ProcessedAmmo[16].id)
    .itemInputs(['#forge:double_plates/battery_alloy','#forge:double_plates/battery_alloy','#forge:double_plates/lead','#forge:double_plates/lead'])
    .notConsumable(AmmoModel[16].id);

event.recipes.gtceu.forming_press(AmmoModel[17].id + "_builder")
    .duration(100)
    .EUt(32)
    .itemOutputs('4x '+ProcessedAmmo[17].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[17].id);

event.recipes.gtceu.forming_press(AmmoModel[18].id + "_builder")
    .duration(140)
    .EUt(32)
    .itemOutputs('6x '+ProcessedAmmo[18].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[18].id);

event.recipes.gtceu.forming_press(AmmoModel[19].id + "_builder")
    .duration(160)
    .EUt(32)
    .itemOutputs('5x '+ProcessedAmmo[19].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[19].id);

event.recipes.gtceu.forming_press(AmmoModel[20].id + "_builder")
    .duration(60)
    .EUt(8)
    .itemOutputs('16x '+ProcessedAmmo[20].id)
    .itemInputs(['gtceu:lead_plate'])
    .notConsumable(AmmoModel[20].id);

event.recipes.gtceu.forming_press(AmmoModel[21].id + "_builder")
    .duration(400)
    .EUt(80)
    .itemOutputs('2x '+ProcessedAmmo[21].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[21].id);

event.recipes.gtceu.forming_press(AmmoModel[22].id + "_builder")
    .duration(220)
    .EUt(32)
    .itemOutputs('4x '+ProcessedAmmo[22].id)
    .itemInputs(['gtceu:brass_plate'])
    .notConsumable(AmmoModel[22].id);

event.recipes.gtceu.forming_press(AmmoModel[23].id + "_builder")
    .duration(240)
    .EUt(32)
    .itemOutputs('4x '+ProcessedAmmo[23].id)
    .itemInputs(['#forge:plates/copper'])
    .notConsumable(AmmoModel[23].id);




event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[0]
    ],
    // 输入物品
    ProcessedAmmo[0].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(0)
        .circuitNumber(2),
    ]
)
.transitionalItem(incompletedAmmo[0].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[1]
    ],
    // 输入物品
    ProcessedAmmo[1].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--注液（盐水）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:salt_water', 50)]),
        // 参与机器--注液（生物质）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:fermented_biomass', 50)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:feathers']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:feathers']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:feathers']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:feathers']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[1].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[2]
    ],
    // 输入物品
    ProcessedAmmo[2].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[2].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[3]
    ],
    // 输入物品
    ProcessedAmmo[3].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[3].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[4]
    ],
    // 输入物品
    ProcessedAmmo[4].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:feathers']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:feathers']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:feathers']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:feathers']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[4].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[5]
    ],
    // 输入物品
    ProcessedAmmo[5].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(3)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id,'gtceu:small_gunpowder_dust']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(2)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[5].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[6]
    ],
    // 输入物品
    ProcessedAmmo[6].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[6].id)
.loops(1);


event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[7]
    ],
    // 输入物品
    ProcessedAmmo[7].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[7].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[8]
    ],
    // 输入物品
    ProcessedAmmo[8].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[8].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[9]
    ],
    // 输入物品
    ProcessedAmmo[9].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(2)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[9].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[10]
    ],
    // 输入物品
    ProcessedAmmo[10].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/steel']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/steel']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/steel']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/steel']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/steel']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/steel']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/steel']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/steel']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(2)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/steel']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[10].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[11]
    ],
    // 输入物品
    ProcessedAmmo[11].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[11].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[12]
    ],
    // 输入物品
    ProcessedAmmo[12].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id,'#forge:gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(3)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(2)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[12].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[13]
    ],
    // 输入物品
    ProcessedAmmo[13].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(2)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[13].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[14]
    ],
    // 输入物品
    ProcessedAmmo[14].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(2)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[14].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[15]
    ],
    // 输入物品
    ProcessedAmmo[15].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id,'ad_astra:steel_engine']),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id,'ad_astra:steel_tank']),
        // 参与机器--注液
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:ethanol', 200)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id,'createbigcannons:packed_gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(4)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id,'gtceu:steel_plate']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(3)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[15].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[16]
    ],
    // 输入物品
    ProcessedAmmo[16].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--注液
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:hydrogen', 5000)]),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(3)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[16].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[17]
    ],
    // 输入物品
    ProcessedAmmo[17].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[17].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[18]
    ],
    // 输入物品
    ProcessedAmmo[18].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[18].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[19]
    ],
    // 输入物品
    ProcessedAmmo[19].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[19].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[20]
    ],
    // 输入物品
    ProcessedAmmo[20].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[20].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[21]
    ],
    // 输入物品
    ProcessedAmmo[21].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id,'#forge:gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(3)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(2)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[21].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[22]
    ],
    // 输入物品
    ProcessedAmmo[22].id,
    // 参与机器--按顺序加工
    [  
        // 参与机器--注液（蒸汽清洗）
        event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(1),
        // 参与机器--机械手
        event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
        // 参与机器--切石机
        event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
        // 参与机器--压片
        event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
        .recipeTier(1)
        .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[22].id)
.loops(1);

event.recipes.createSequencedAssembly(
    // 输出物品及概率
    [
        ammoTypes[23]
    ],
    // 输入物品
    ProcessedAmmo[23].id,
    // 参与机器--按顺序加工
    [  
            // 参与机器--注液（蒸汽清洗）
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id,Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
            .recipeTier(1)
            .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
            .recipeTier(1)
            .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/copper']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id,incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id,incompletedAmmo[0].id)
            .recipeTier(1)
            .circuitNumber(0),
    ]
)
.transitionalItem(incompletedAmmo[23].id)
.loops(1);

    });