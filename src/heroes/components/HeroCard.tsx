import { Link, useLocation } from "react-router-dom";
import { Hero } from "../interfaces";

interface CharactersByHeroProps {
  alter_ego: string;
  characters: string;
}

const CharactersByHero = ({ alter_ego, characters }: CharactersByHeroProps) => {
  if (characters.includes(alter_ego)) return (<p className="text-truncate">{characters}</p>);
  return <p className="card-text"> {alter_ego}</p>
}

interface Props {
  hero: Hero;
}

export const HeroCard = ({ hero }: Props) => {
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;
  const location = useLocation();
  const heroImageUrl = `assets/heroes/${id}.jpg`;
  return (
    <div className={`${location.pathname === '/search' ? 'col' : 'col-xs-12 col-md-6 col-sm-12 col-lg-4'} animate__animated animate__fadeIn`}>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} style={{ height: '100%' }} data-testid="image-hero" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <CharactersByHero characters={characters} alter_ego={alter_ego} />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
