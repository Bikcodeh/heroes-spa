import { FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../components/HeroCard";
import { FormType, useForm } from "../../hooks/useForm";
import { getHeroByName } from "../helpers/getHeroByName";

interface SearchTextState extends FormType {
  searchText: string;
}

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search) as { q?: string };
  const { searchText, onInputChange } = useForm<SearchTextState>({
    searchText: q
  });
  const heroes = getHeroByName(q);
  const showError = q.trim().length > 0 && heroes.length === 0;
  const showSearch = q.trim().length === 0;

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <form onSubmit={onSearchSubmit} name="form-search">
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
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{
              display: showSearch ? "" : "none",
            }}
            data-testid="alert-search"
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{
              display: showError ? "" : "none",
            }}
            data-testid="alert-error"
          >
            Not hero found with {q}
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
