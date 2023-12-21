import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext, AuthContextType } from "../../auth/context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark p-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="navbar-nav me-auto ">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/dc"
            >
              DC
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/search"
            >
              Search
            </NavLink>
          </div>
          <ul className="navbar-nav me-aut d-flex justify-content-end">
            <li className="nav-item">
              <span className="nav-link text-primary">
                {user?.name}
              </span>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary" onClick={onLogout} data-testid="button-logout">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
