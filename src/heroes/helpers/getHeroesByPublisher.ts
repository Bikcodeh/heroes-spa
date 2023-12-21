import { Hero } from './../interfaces/index';
import { heroes } from '../data/heroes';

const validPublishers = ['DC Comics', 'Marvel Comics']

export const getHeroesByPublisher = (publisher: string): Hero[] => {
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
};
