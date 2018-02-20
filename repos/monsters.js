import MonsterData from 'mhw-gear-wishlist/data/monster-icons';

export const getAllMonsterDataWithKey = () => MonsterData.map(monster =>
    ({
        ...monster,
        key: monster.name.split(' ').join('-'),
    })   
);
