import MonsterWeaknesses from 'mhw-gear-wishlist/data/monster-weaknesses';
import MonsterIcons from 'mhw-gear-wishlist/data/monster-icons';
import anyUndefinedOrNull from '../junk-drawer/anyUndefinedOrNull';

// array of monster objects with all known data {name, key, image: imagePath, Fire: 3, Water: 0, Thunder: 2, ... }
export const MonsterData = MonsterIcons.map(({name, image}) => ({
    name,
    image,
    key: name.split(' ').join('-'),
    ...MonsterWeaknesses[name],
}));

// const WeaknessesForMonsterByName = searchName => {
//     const monsterName = Object.keys(MonsterWeaknesses).find(monsterName => searchName === monsterName);
//     return monsterName
//         ? {
//             name: monsterName,
//             key: monsterName.split(' ').join('-'),
//             ...MonsterWeaknesses[monsterName],
//         } : {
//             error: "monster name not found"
//         };
// };

export const sortByField = field => (monsterA, monsterB) => {
    if (!field) field = 'name';
    const [ A_COMES_FIRST, ARE_EQUAL, B_COMES_FIRST ] = [ -1, 0, 1 ];
    const [ monsterAProperty, monsterBProperty ] = [ monsterB[field], monsterA[field] ];
    if (anyUndefinedOrNull(monsterA, monsterB) || monsterA[field] === monsterB[field]) return ARE_EQUAL;
    if(monsterA[field] > monsterB[field]) return A_COMES_FIRST;
    if(monsterA[field] < monsterB[field]) return 1;
}

export const getAllSortedMonsterData = (sortField = 'name') => {
    const sortByFunc = sortByField(sortField);
    return MonsterData.sort(sortByFunc);
};
