import { NavLink } from "react-router-dom";
import logo from "../../assets/images/header/logo.svg";
import Button from "../Button/Button";

// Define the Header component
const Header = () => (
  // Create the header element
  <header className="mx-auto h-20 max-w-[90rem]">
    <section className="mx-[3.125rem] flex items-center justify-between md:mx-[6.25rem]">
      {/*  ------ Create the navigation element ------  */}
      <nav className="">
        {/*  ------ Create the unordered list element ------  */}
        <ul className="flex items-center gap-x-4">
          {/*  ------ Map the array of objects to the list items ------  */}
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Services", path: "/services" },
            { label: "Blogs", path: "/blog" },
          ].map(({ label, path }) => (
            // Create the list item
            <li key={label}>
              {/*  ------ Create the NavLink component ------  */}
              <NavLink to={path} className="nav-link">
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <section className="flex items-center">
        <img src={logo} alt="" />
        <h1 className="header-logo-text">Rezilla</h1>
      </section>
      <section className="">
        <Button>
          <span className="">Add Listing</span>
        </Button>
      </section>
    </section>
  </header>
);

// Export the Header component
export default Header;
