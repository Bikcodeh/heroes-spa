import { Hero } from './../interfaces/index';
import { heroes } from '../data/heroes';

export const getHeroByName = (name: string = ''): Hero[] => {
    name = name.toLocaleLowerCase().trim();
    if (name.length === 0) return [];
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name))
}