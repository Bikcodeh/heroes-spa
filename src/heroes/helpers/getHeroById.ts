import { Hero } from './../interfaces/index';

import { heroes } from '../data/heroes';

export const getHeroById = (id: string): Hero | undefined => heroes.find(hero => hero.id === id);