ServerEvents.recipes(event => {
    // 删除所有以 'tacz:' 开头的物品的配方
    event.remove({id: /tacz:.*/});
});