// import "./App.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import navbar from "./navbar";

function App() {
  return (
    <div>
      <div className="App">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Shop List
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Shot Detail
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Cart
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Checkout
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Pages
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Our Menu
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Book Now
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        404 Page
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Blog
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Blog Right
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Blog Left
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Blog Detail
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button class="btn btn-outline-success" type="submit">
                  <img src="../assets/search.svg" alt="none" />
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
