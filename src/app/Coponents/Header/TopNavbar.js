import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchAllCategories } from "../../Features/Category/CategorySlice";

function TopNavbar() {
  const { categories } = useSelector((state) => state.categories);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <NavLink to={"/"} className={"navbar-brand"}>
          Ardo Market
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/"} className="nav-link">
              Beranda
            </NavLink>
            <NavDropdown title="Kategori" id="basic-nav-dropdown">
              {categories &&
                categories.map((c, index) => {
                  return (
                    <Link
                      to={`/category/${c}`}
                      className="text-capitalize dropdown-item"
                      key={index}
                    >
                      {c}
                    </Link>
                  );
                })}
            </NavDropdown>
            <NavLink to={"/products"} className="nav-link">
              Produk
            </NavLink>
            <NavLink to={"/contact"} className="nav-link">
              Kontak
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
