import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import PropTypes from 'prop-types';
import { HeroCard } from './HeroCard';

interface Props {
  publisher: string;
}

export const HeroList = ({ publisher }: Props) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
    <div className="row rows-cols-sm-1 rows-cols-xs-1 row-cols-md-2 rows-cols-lg-3 g-3">
        {
            heroes.map(heroe => <HeroCard key={heroe.id} hero={heroe} />) 
        }
    </div>
    </>
  )
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
}
