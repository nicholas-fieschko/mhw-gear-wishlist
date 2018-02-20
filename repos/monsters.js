import MonsterData from 'mhw-gear-wishlist/data/monster-loot';

export getAllMonsterDataWithKey() {
    return MonsterData.map(monster => ({
        ...monster,
        
    }))
}