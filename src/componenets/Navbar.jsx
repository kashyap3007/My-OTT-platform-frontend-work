import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Section/Profile";

function Navbar(props) {
  const navigate = useNavigate();
  function logout() {
    navigate("/");
    window.location.reload();
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ background: "#100134", padding: "0%" }}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img
              alt="img"
              src="../style/images/logo.svg"
              className="w-100 h-100"
            />
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/home"
                >
                  <div className="my-3">
                    <b>Home</b>
                  </div>
                </Link>
              </li>
              <div className="my-3">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Movies</b>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="/">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Comedy
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Thriller
                      </Link>
                    </li>
                  </ul>
                </li>
              </div>
              <div className="my-3">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Web-series</b>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="/">
                        Crime
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Sci-fi
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Horror
                      </Link>
                    </li>
                  </ul>
                </li>
              </div>
              <div className="my-3">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Spotrts</b>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="/">
                        Cricket
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Football
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Basketball
                      </Link>
                    </li>
                  </ul>
                </li>
              </div>
              <li className="nav-item">
                <Link className="nav-link disabled text-light">
                  <button type="button" className="btn btn-warning my-2">
                    <strong>Disney+</strong>
                  </button>
                </Link>
              </li>
            </ul>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              {/* <Link
                to="/login"
                className="btn btn-outline-danger"
                type="button"
                data-bs-toggle="button"
              >Login</Link> */}
              {props.username !== "" ? (
                <>
                  <Link
                    to="#"
                    onClick={logout}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Logout
                  </Link>{" "}
                  <Profile username={props.username} />
                </>
              ) : (
                <>
                  <Link to="/" type="button" className="btn btn-outline-danger">
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
