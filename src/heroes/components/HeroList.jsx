import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import PropTypes from 'prop-types';


export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
    <ul>
        {
            heroes.map(heroe => <li key={heroe.id}>{heroe.superhero}</li>)
        }
    </ul>
    </>
  )
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
}
