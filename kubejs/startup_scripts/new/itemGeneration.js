StartupEvents.registry('item', event => {
    const ammoIds = [
        'tacz:45acp', 'lradd:nail', 'tacz:68x51fury', 'tacz:9mm', 'lradd:arrow', 
        'tacz:338', 'tacz:308', 'tacz:357mag', 'tacz:46x30', 'tacz:50bmg', 
        'tacz:12g', 'tacz:30_06', 'tacz:50ae', 'lradd:2mm_ec', 'tacz:magnum_r', 
        'tacz:rpg_rocket', 'lradd:fusion_cell', 'tacz:762x25', 'tacz:556x45', 
        'tacz:58x42', 'lradd:flintlock_bullet', 'lradd:m993', 'tacz:762x39', 'tacz:762x54'
    ];

    ammoIds.forEach(ammoId => {
        event.create(`inc_tacz_ammo_${ammoId}`, 'create:sequenced_assembly')
            .displayName(`Incompleted ${ammoId.toUpperCase().replace(/_/g, ' ')} Ammo`);
        event.create(`proc_tacz_ammo_${ammoId}`)
            .displayName(`Processed ${ammoId.toUpperCase().replace(/_/g, ' ')} Ammo`);
        event.create(`model_tacz_ammo_${ammoId}`)
            .displayName(` ${ammoId.toUpperCase().replace(/_/g, ' ')} Ammo Model`);
    });
});