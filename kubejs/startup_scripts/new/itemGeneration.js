StartupEvents.registry("item", (event) => {
    const ammoIds = [
        "tacz:45acp",
        "lradd:nail",
        "tacz:68x51fury",
        "tacz:9mm",
        "lradd:arrow",
        "tacz:338",
        "tacz:308",
        "tacz:357mag",
        "tacz:46x30",
        "tacz:50bmg",
        "tacz:12g",
        "tacz:30_06",
        "tacz:50ae",
        "lradd:2mm_ec",
        "tacz:magnum_r",
        "tacz:rpg_rocket",
        "lradd:fusion_cell",
        "tacz:762x25",
        "tacz:556x45",
        "tacz:58x42",
        "lradd:flintlock_bullet",
        "lradd:m993",
        "tacz:762x39",
        "tacz:762x54",
    ];

    ammoIds.forEach((ammoId) => {
        event
            .create(`inc_tacz_ammo_${ammoId}`, "create:sequenced_assembly")
            .displayName(
                `Incompleted ${ammoId.toUpperCase().replace(/_/g, " ")} Ammo`
            );
        event
            .create(`proc_tacz_ammo_${ammoId}`)
            .displayName(`Processed ${ammoId.toUpperCase().replace(/_/g, " ")} Ammo`);
        event
            .create(`model_tacz_ammo_${ammoId}`)
            .displayName(` ${ammoId.toUpperCase().replace(/_/g, " ")} Ammo Model`);
    });
    const gunIds = [
        "deagle",
        "cz75",
        "p250",
        "glock_17",
        "deagle_golden",
        "malorian",
        "gauss_rifle",
        "m200",
        "nitro_505",
        "m95",
        "ai_awp",
        "axmc",
        "sa58",
        "bam4",
        "sg553",
        "mk47",
        "qbz191_em",
        "acr",
        "txc",
        "mcx",
        "xm8",
        "rfb",
        "aug",
        "sks_tactical",
        "ak47",
        "m4a1",
        "m16a1",
        "scar_h",
        "db_short",
        "db_long",
        "mag7",
        "aa12",
        "ump45",
        "nailgun",
        "p90",
        "uzi",
        "hk_mp5a5",
        "vector45",
        "pp19",
        "rpg7",
        "m202",
        "ultimax100",
        "mg42",
        "m249",
        "rpk",
    ];
    gunIds.forEach((gunId) => {
        event.create(`inc_tacz_gun:${gunId}`, "create:sequenced_assembly")
        .displayName(
            `Incompleted ${gunId.toUpperCase().replace(/_/g, " ")} gun`
        );
        event
            .create(`proc_tacz_gun:${gunId}`)
            .displayName(`Processed ${gunId.toUpperCase().replace(/_/g, " ")} gun`);
        event
            .create(`model_tacz_gun:${gunId}`)
            .displayName(` ${gunId.toUpperCase().replace(/_/g, " ")} gun Model`);
    });
});
