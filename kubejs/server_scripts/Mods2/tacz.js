ServerEvents.recipes(event => {
    // 删除所有以 'tacz:' 开头的物品的配方
    event.remove({ id: /tacz:.*/ });

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
        { id: 'model_tacz_ammo_lradd:flintlock_bullet', displayName: ' LRADD:FLINTLOCK_BULLET Ammo Model' },
        { id: 'model_tacz_ammo_lradd:m993', displayName: ' LRADD:M993 Ammo Model' },
        { id: 'model_tacz_ammo_tacz:762x39', displayName: ' TACZ:762X39 Ammo Model' },
        { id: 'model_tacz_ammo_tacz:762x54', displayName: ' TACZ:762X54 Ammo Model' }
    ];
    // 根据现实每个子弹的特点和生产流程为每个子弹生成配方

    event.recipes.gtceu.forming_press(AmmoModel[0].id + "_builder")
        .duration(40)
        .EUt(16)
        .itemOutputs('8x ' + ProcessedAmmo[0].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[0].id);

    event.recipes.gtceu.forming_press(AmmoModel[1].id + "_builder")
        .duration(200)
        .EUt(24)
        .itemOutputs('4x ' + ProcessedAmmo[1].id)
        .itemInputs(['gtceu:iron_plate'])
        .notConsumable(AmmoModel[1].id);

    event.recipes.gtceu.forming_press(AmmoModel[2].id + "_builder")
        .duration(100)
        .EUt(64)
        .itemOutputs('4x ' + ProcessedAmmo[2].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[2].id);

    event.recipes.gtceu.forming_press(AmmoModel[3].id + "_builder")
        .duration(40)
        .EUt(16)
        .itemOutputs('10x ' + ProcessedAmmo[3].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[3].id);

    event.recipes.gtceu.forming_press(AmmoModel[4].id + "_builder")
        .duration(160)
        .EUt(24)
        .itemOutputs('4x ' + ProcessedAmmo[4].id)
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
        .itemOutputs('4x ' + ProcessedAmmo[6].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[6].id);

    event.recipes.gtceu.forming_press(AmmoModel[7].id + "_builder")
        .duration(60)
        .EUt(20)
        .itemOutputs('8x ' + ProcessedAmmo[7].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[7].id);

    event.recipes.gtceu.forming_press(AmmoModel[8].id + "_builder")
        .duration(40)
        .EUt(26)
        .itemOutputs('8x ' + ProcessedAmmo[8].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[8].id);

    event.recipes.gtceu.forming_press(AmmoModel[9].id + "_builder")
        .duration(40)
        .EUt(42)
        .itemOutputs('3x ' + ProcessedAmmo[9].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[9].id);

    event.recipes.gtceu.forming_press(AmmoModel[10].id + "_builder")
        .duration(20)
        .EUt(16)
        .itemOutputs('4x ' + ProcessedAmmo[10].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[10].id);

    event.recipes.gtceu.forming_press(AmmoModel[11].id + "_builder")
        .duration(200)
        .EUt(32)
        .itemOutputs('6x ' + ProcessedAmmo[11].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[11].id);

    event.recipes.gtceu.forming_press(AmmoModel[12].id + "_builder")
        .duration(160)
        .EUt(64)
        .itemOutputs('2x ' + ProcessedAmmo[12].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[12].id);

    event.recipes.gtceu.forming_press(AmmoModel[13].id + "_builder")
        .duration(20)
        .EUt(48)
        .itemOutputs('3x ' + ProcessedAmmo[13].id)
        .itemInputs(['#forge:ingots/magnetic_steel'])
        .notConsumable(AmmoModel[13].id);

    event.recipes.gtceu.forming_press(AmmoModel[14].id + "_builder")
        .duration(180)
        .EUt(42)
        .itemOutputs('3x ' + ProcessedAmmo[14].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[14].id);

    event.recipes.gtceu.forming_press(AmmoModel[15].id + "_builder")
        .duration(300)
        .EUt(128)
        .itemOutputs(ProcessedAmmo[15].id)
        .itemInputs(['gtceu:steel_plate', 'gtceu:steel_plate'])
        .notConsumable(AmmoModel[15].id);

    event.recipes.gtceu.forming_press(AmmoModel[16].id + "_builder")
        .duration(1200)
        .EUt(5096)
        .itemOutputs(ProcessedAmmo[16].id)
        .itemInputs(['#forge:double_plates/battery_alloy', '#forge:double_plates/battery_alloy', '#forge:double_plates/lead', '#forge:double_plates/lead'])
        .notConsumable(AmmoModel[16].id);

    event.recipes.gtceu.forming_press(AmmoModel[17].id + "_builder")
        .duration(100)
        .EUt(32)
        .itemOutputs('4x ' + ProcessedAmmo[17].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[17].id);

    event.recipes.gtceu.forming_press(AmmoModel[18].id + "_builder")
        .duration(140)
        .EUt(32)
        .itemOutputs('6x ' + ProcessedAmmo[18].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[18].id);

    event.recipes.gtceu.forming_press(AmmoModel[19].id + "_builder")
        .duration(160)
        .EUt(32)
        .itemOutputs('5x ' + ProcessedAmmo[19].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[19].id);

    event.recipes.gtceu.forming_press(AmmoModel[20].id + "_builder")
        .duration(60)
        .EUt(8)
        .itemOutputs('16x ' + ProcessedAmmo[20].id)
        .itemInputs(['gtceu:lead_plate'])
        .notConsumable(AmmoModel[20].id);

    event.recipes.gtceu.forming_press(AmmoModel[21].id + "_builder")
        .duration(400)
        .EUt(80)
        .itemOutputs('2x ' + ProcessedAmmo[21].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[21].id);

    event.recipes.gtceu.forming_press(AmmoModel[22].id + "_builder")
        .duration(220)
        .EUt(32)
        .itemOutputs('4x ' + ProcessedAmmo[22].id)
        .itemInputs(['gtceu:brass_plate'])
        .notConsumable(AmmoModel[22].id);

    event.recipes.gtceu.forming_press(AmmoModel[23].id + "_builder")
        .duration(240)
        .EUt(32)
        .itemOutputs('4x ' + ProcessedAmmo[23].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--注液（盐水）
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:salt_water', 50)]),
            // 参与机器--注液（生物质）
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:fermented_biomass', 50)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:feathers']),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:feathers']),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:feathers']),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:feathers']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
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
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(3)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, 'gtceu:small_gunpowder_dust']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(2)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(2)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/steel']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(3)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(2)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, 'ad_astra:steel_engine']),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, 'ad_astra:steel_tank']),
            // 参与机器--注液
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:ethanol', 200)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, 'createbigcannons:packed_gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(4)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, 'gtceu:steel_plate']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--注液
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:hydrogen', 5000)]),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(3)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/brass']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
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
            event.recipes.create.filling(incompletedAmmo[0].id, [incompletedAmmo[0].id, Fluid.of('gtceu:steam', 100)]),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:small_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:tiny_dusts/gunpowder']),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(1),
            // 参与机器--机械手
            event.recipes.createDeploying(incompletedAmmo[0].id, [incompletedAmmo[0].id, '#forge:nuggets/copper']),
            // 参与机器--切石机
            event.recipes.create.cutting(incompletedAmmo[0].id, incompletedAmmo[0].id),
            // 参与机器--压片
            event.recipes.greate.pressing(incompletedAmmo[0].id, incompletedAmmo[0].id)
                .recipeTier(1)
                .circuitNumber(0),
        ]
    )
        .transitionalItem(incompletedAmmo[23].id)
        .loops(1);



    //增加枪械模板配方

    for (let i = 0; i < 24; i++) {
        event.recipes.greate.pressing('gtceu:empty_mold', AmmoModel[i].id)
            .recipeTier(2)
            .circuitNumber(i);
    }

    const guns = [
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:7,GunFireMode:"SEMI",GunId:"tacz:deagle",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:16,GunFireMode:"AUTO",GunId:"tacz:cz75",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:13,GunFireMode:"SEMI",GunId:"lradd:p250",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:17,GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:9,GunFireMode:"SEMI",GunId:"tacz:deagle_golden",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:10,GunFireMode:"SEMI",GunId:"lradd:malorian",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"SEMI",GunId:"lradd:gauss_rifle",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:10,GunFireMode:"SEMI",GunId:"lradd:m200",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"lradd:nitro_505",HasBulletInBarrel:1b}'),
        'tacz:gun_smith_table',
        Item.of('patchouli:guide_book', '{"patchouli:book":"health_and_disease:manual"}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"tacz:m95",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"tacz:ai_awp",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:8,GunFireMode:"SEMI",GunId:"lradd:axmc",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"AUTO",GunId:"lradd:sa58",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"SEMI",GunId:"lradd:bam4",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"lradd:sg553",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"lradd:mk47",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"lradd:qbz191_em",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"lradd:acr",HasBulletInBarrel:1b}'),
        'tacz:gun_smith_table',
        Item.of('patchouli:guide_book', '{"patchouli:book":"health_and_disease:manual"}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:100,GunFireMode:"SEMI",GunId:"lradd:txc",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"lradd:mcx",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"lradd:xm8",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"AUTO",GunId:"lradd:rfb",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"lradd:aug",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:10,GunFireMode:"SEMI",GunId:"tacz:sks_tactical",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:ak47",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:m4a1",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"AUTO",GunId:"tacz:m16a1",HasBulletInBarrel:1b}'),
        'tacz:gun_smith_table',
        Item.of('patchouli:guide_book', '{"patchouli:book":"health_and_disease:manual"}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"SEMI",GunId:"tacz:scar_h",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:2,GunFireMode:"BURST",GunId:"tacz:db_short",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:2,GunFireMode:"SEMI",GunId:"tacz:db_long",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"lradd:mag7",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:8,GunFireMode:"SEMI",GunId:"tacz:aa12",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:25,GunFireMode:"AUTO",GunId:"tacz:ump45",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"lradd:nailgun",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:50,GunFireMode:"AUTO",GunId:"lradd:p90",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"AUTO",GunId:"tacz:uzi",HasBulletInBarrel:1b}'),
        'tacz:gun_smith_table',
        Item.of('patchouli:guide_book', '{"patchouli:book":"health_and_disease:manual"}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:hk_mp5a5",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:19,GunFireMode:"AUTO",GunId:"tacz:vector45",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:64,GunFireMode:"AUTO",GunId:"lradd:pp19",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"tacz:rpg7",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:4,GunFireMode:"SEMI",GunId:"lradd:m202",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"SEMI",GunId:"lradd:ultimax100",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:150,GunFireMode:"AUTO",GunId:"lradd:mg42",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:75,GunFireMode:"AUTO",GunId:"tacz:m249",HasBulletInBarrel:1b}'),
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:40,GunFireMode:"AUTO",GunId:"tacz:rpk",HasBulletInBarrel:1b}'),
        'tacz:gun_smith_table',
        Item.of('patchouli:guide_book', '{"patchouli:book":"health_and_disease:manual"}')
    ];
    const processedGuns = [
        { id: "proc_tacz_gun:deagle", displayName: "Processed DEAGLE gun" },
        { id: "proc_tacz_gun:cz75", displayName: "Processed CZ75 gun" },
        { id: "proc_tacz_gun:p250", displayName: "Processed P250 gun" },
        { id: "proc_tacz_gun:glock_17", displayName: "Processed GLOCK 17 gun" },
        { id: "proc_tacz_gun:deagle_golden", displayName: "Processed DEAGLE GOLDEN gun" },
        { id: "proc_tacz_gun:malorian", displayName: "Processed MALORIAN gun" },
        { id: "proc_tacz_gun:gauss_rifle", displayName: "Processed GAUSS RIFLE gun" },
        { id: "proc_tacz_gun:m200", displayName: "Processed M200 gun" },
        { id: "proc_tacz_gun:nitro_505", displayName: "Processed NITRO 505 gun" },
        { id: "proc_tacz_gun:m95", displayName: "Processed M95 gun" },
        { id: "proc_tacz_gun:ai_awp", displayName: "Processed AI AWP gun" },
        { id: "proc_tacz_gun:axmc", displayName: "Processed AXMC gun" },
        { id: "proc_tacz_gun:sa58", displayName: "Processed SA58 gun" },
        { id: "proc_tacz_gun:bam4", displayName: "Processed BAM4 gun" },
        { id: "proc_tacz_gun:sg553", displayName: "Processed SG553 gun" },
        { id: "proc_tacz_gun:mk47", displayName: "Processed MK47 gun" },
        { id: "proc_tacz_gun:qbz191_em", displayName: "Processed QBZ191 EM gun" },
        { id: "proc_tacz_gun:acr", displayName: "Processed ACR gun" },
        { id: "proc_tacz_gun:txc", displayName: "Processed TXC gun" },
        { id: "proc_tacz_gun:mcx", displayName: "Processed MCX gun" },
        { id: "proc_tacz_gun:xm8", displayName: "Processed XM8 gun" },
        { id: "proc_tacz_gun:rfb", displayName: "Processed RFB gun" },
        { id: "proc_tacz_gun:aug", displayName: "Processed AUG gun" },
        { id: "proc_tacz_gun:sks_tactical", displayName: "Processed SKS TACTICAL gun" },
        { id: "proc_tacz_gun:ak47", displayName: "Processed AK47 gun" },
        { id: "proc_tacz_gun:m4a1", displayName: "Processed M4A1 gun" },
        { id: "proc_tacz_gun:m16a1", displayName: "Processed M16A1 gun" },
        { id: "proc_tacz_gun:scar_h", displayName: "Processed SCAR H gun" },
        { id: "proc_tacz_gun:db_short", displayName: "Processed DB SHORT gun" },
        { id: "proc_tacz_gun:db_long", displayName: "Processed DB LONG gun" },
        { id: "proc_tacz_gun:mag7", displayName: "Processed MAG7 gun" },
        { id: "proc_tacz_gun:aa12", displayName: "Processed AA12 gun" },
        { id: "proc_tacz_gun:ump45", displayName: "Processed UMP45 gun" },
        { id: "proc_tacz_gun:nailgun", displayName: "Processed NAILGUN gun" },
        { id: "proc_tacz_gun:p90", displayName: "Processed P90 gun" },
        { id: "proc_tacz_gun:uzi", displayName: "Processed UZI gun" },
        { id: "proc_tacz_gun:hk_mp5a5", displayName: "Processed HK MP5A5 gun" },
        { id: "proc_tacz_gun:vector45", displayName: "Processed VECTOR45 gun" },
        { id: "proc_tacz_gun:pp19", displayName: "Processed PP19 gun" },
        { id: "proc_tacz_gun:rpg7", displayName: "Processed RPG7 gun" },
        { id: "proc_tacz_gun:m202", displayName: "Processed M202 gun" },
        { id: "proc_tacz_gun:ultimax100", displayName: "Processed ULTIMAX100 gun" },
        { id: "proc_tacz_gun:mg42", displayName: "Processed MG42 gun" },
        { id: "proc_tacz_gun:m249", displayName: "Processed M249 gun" },
        { id: "proc_tacz_gun:rpk", displayName: "Processed RPK gun" }
    ];

    const modelGuns = [
        { id: "model_tacz_gun:deagle", displayName: "DEAGLE gun Model", number: 1, material: 'gtceu:double_steel_plate', recipeTier: 4 },
        { id: "model_tacz_gun:cz75", displayName: "CZ75 gun Model", number: 2, material: 'gtceu:double_stainless_steel_plate', recipeTier: 3 },
        { id: "model_tacz_gun:p250", displayName: "P250 gun Model", number: 3, material: 'gtceu:double_steel_plate', recipeTier: 3 },
        { id: "model_tacz_gun:glock_17", displayName: "GLOCK 17 gun Model", number: 4, material: 'gtceu:double_stainless_steel_plate', recipeTier: 3 },
        { id: "model_tacz_gun:deagle_golden", displayName: "DEAGLE GOLDEN gun Model", number: 5, material: 'gtceu:double_damascus_steel_plate', recipeTier: 6 },
        { id: "model_tacz_gun:malorian", displayName: "MALORIAN gun Model", number: 6, material: 'gtceu:double_tungsten_steel_plate', recipeTier: 7 },
        { id: "model_tacz_gun:gauss_rifle", displayName: "GAUSS RIFLE gun Model", number: 7, material: 'gtceu:double_vanadium_steel_plate', recipeTier: 8 },
        { id: "model_tacz_gun:m200", displayName: "M200 gun Model", number: 8, material: 'gtceu:double_maraging_steel_300_plate', recipeTier: 6 },
        { id: "model_tacz_gun:nitro_505", displayName: "NITRO 505 gun Model", number: 9, material: 'gtceu:double_red_steel_plate', recipeTier: 5 },
        { id: "model_tacz_gun:m95", displayName: "M95 gun Model", number: 10, material: 'gtceu:double_blue_steel_plate', recipeTier: 5 },
        { id: "model_tacz_gun:ai_awp", displayName: "AI AWP gun Model", number: 11, material: 'gtceu:double_black_steel_plate', recipeTier: 6 },
        { id: "model_tacz_gun:axmc", displayName: "AXMC gun Model", number: 12, material: 'gtceu:double_hssg_plate', recipeTier: 6 },
        { id: "model_tacz_gun:sa58", displayName: "SA58 gun Model", number: 13, material: 'gtceu:double_hsse_plate', recipeTier: 5 },
        { id: "model_tacz_gun:bam4", displayName: "BAM4 gun Model", number: 14, material: 'gtceu:double_hsss_plate', recipeTier: 4 },
        { id: "model_tacz_gun:sg553", displayName: "SG553 gun Model", number: 15, material: 'gtceu:double_hsla_steel_plate', recipeTier: 5 },
        { id: "model_tacz_gun:mk47", displayName: "MK47 gun Model", number: 16, material: 'gtceu:double_watertight_steel_plate', recipeTier: 5 },
        { id: "model_tacz_gun:qbz191_em", displayName: "QBZ191 EM gun Model", number: 17, material: 'gtceu:double_invar_plate', recipeTier: 4 },
        { id: "model_tacz_gun:acr", displayName: "ACR gun Model", number: 18, material: 'gtceu:double_maraging_steel_300_plate', recipeTier: 6 },
        { id: "model_tacz_gun:txc", displayName: "TXC gun Model", number: 19, material: 'gtceu:double_stainless_steel_plate', recipeTier: 4 },
        { id: "model_tacz_gun:mcx", displayName: "MCX gun Model", number: 20, material: 'gtceu:double_steel_plate', recipeTier: 4 },
        { id: "model_tacz_gun:xm8", displayName: "XM8 gun Model", number: 21, material: 'gtceu:double_damascus_steel_plate', recipeTier: 5 },
        { id: "model_tacz_gun:rfb", displayName: "RFB gun Model", number: 22, material: 'gtceu:double_tungsten_steel_plate', recipeTier: 5 },
        { id: "model_tacz_gun:aug", displayName: "AUG gun Model", number: 23, material: 'gtceu:double_vanadium_steel_plate', recipeTier: 5 },
        { id: "model_tacz_gun:sks_tactical", displayName: "SKS TACTICAL gun Model", number: 24, material: 'gtceu:double_red_steel_plate', recipeTier: 4 },
        { id: "model_tacz_gun:ak47", displayName: "AK47 gun Model", number: 25, material: 'gtceu:double_blue_steel_plate', recipeTier: 4 },
        { id: "model_tacz_gun:m4a1", displayName: "M4A1 gun Model", number: 26, material: 'gtceu:double_black_steel_plate', recipeTier: 5 },
        { id: "model_tacz_gun:m16a1", displayName: "M16A1 gun Model", number: 27, material: 'gtceu:double_hssg_plate', recipeTier: 5 },
        { id: "model_tacz_gun:scar_h", displayName: "SCAR H gun Model", number: 28, material: 'gtceu:double_hsse_plate', recipeTier: 6 },
        { id: "model_tacz_gun:db_short", displayName: "DB SHORT gun Model", number: 29, material: 'gtceu:double_hsss_plate', recipeTier: 4 },
        { id: "model_tacz_gun:db_long", displayName: "DB LONG gun Model", number: 30, material: 'gtceu:double_hsla_steel_plate', recipeTier: 4 },
        { id: "model_tacz_gun:mag7", displayName: "MAG7 gun Model", number: 31, material: 'gtceu:double_watertight_steel_plate', recipeTier: 4 },
        { id: "model_tacz_gun:aa12", displayName: "AA12 gun Model", number: 32, material: 'gtceu:double_invar_plate', recipeTier: 5 },
        { id: "model_tacz_gun:ump45", displayName: "UMP45 gun Model", number: 33, material: 'gtceu:double_maraging_steel_300_plate', recipeTier: 4 },
        { id: "model_tacz_gun:nailgun", displayName: "NAILGUN gun Model", number: 34, material: 'gtceu:double_stainless_steel_plate', recipeTier: 3 },
        { id: "model_tacz_gun:p90", displayName: "P90 gun Model", number: 35, material: 'gtceu:double_steel_plate', recipeTier: 4 },
        { id: "model_tacz_gun:uzi", displayName: "UZI gun Model", number: 36, material: 'gtceu:double_damascus_steel_plate', recipeTier: 4 },
        { id: "model_tacz_gun:hk_mp5a5", displayName: "HK MP5A5 gun Model", number: 37, material: 'gtceu:double_tungsten_steel_plate', recipeTier: 5 },
        { id: "model_tacz_gun:vector45", displayName: "VECTOR45 gun Model", number: 38, material: 'gtceu:double_vanadium_steel_plate', recipeTier: 5 },
        { id: "model_tacz_gun:pp19", displayName: "PP19 gun Model", number: 39, material: 'gtceu:double_red_steel_plate', recipeTier: 4 },
        { id: "model_tacz_gun:rpg7", displayName: "RPG7 gun Model", number: 40, material: 'gtceu:double_blue_steel_plate', recipeTier: 6 },
        { id: "model_tacz_gun:m202", displayName: "M202 gun Model", number: 41, material: 'gtceu:double_black_steel_plate', recipeTier: 6 },
        { id: "model_tacz_gun:ultimax100", displayName: "ULTIMAX100 gun Model", number: 42, material: 'gtceu:double_hssg_plate', recipeTier: 6 },
        { id: "model_tacz_gun:mg42", displayName: "MG42 gun Model", number: 43, material: 'gtceu:double_hsse_plate', recipeTier: 6 },
        { id: "model_tacz_gun:m249", displayName: "M249 gun Model", number: 44, material: 'gtceu:double_hsss_plate', recipeTier: 6 },
        { id: "model_tacz_gun:rpk", displayName: "RPK gun Model", number: 45, material: 'gtceu:double_hsla_steel_plate', recipeTier: 5 }
    ];

    const materialRecipeMap = {};

    modelGuns.forEach(gun => {
        const key = `${gun.material}-${gun.recipeTier}`;
        if (!materialRecipeMap[key]) {
            materialRecipeMap[key] = 0;
        } else {
            materialRecipeMap[key]++;
        }
        gun.circuitNumber = materialRecipeMap[key];
    });
    

    for (let i = 0; i < modelGuns.length; i++) {
        event.recipes.greate.pressing(modelGuns[i].material, modelGuns[i].id)
            .recipeTier(modelGuns[i].recipeTier)
            .circuitNumber(0);
    }


});

