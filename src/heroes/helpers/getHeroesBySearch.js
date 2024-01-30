import { heroes } from '../data/heroes';

export const getHeroesBySearch = ( query ) => {
    query = query.toLocaleLowerCase().trim();
    
    if (query.length === 0) return [];
    
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( query ));
}