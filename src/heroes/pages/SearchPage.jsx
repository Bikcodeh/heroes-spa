import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../components/HeroCard";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from '../helpers/getHeroByName';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = "" } = queryString.parse(location.search);
  const { searchText, onInputChange } = useForm({ searchText: q });
  const heroes = getHeroByName(q);

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">Not hero found with {q}</div>
          {
            heroes.map(hero => (<HeroCard  key={hero.id} {...hero} />))
          }
        </div>
      </div>
    </>
  );
};
