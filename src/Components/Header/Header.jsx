import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/header/logo.svg'
// import Button from "../Button/Button";
import { IoSearch } from 'react-icons/io5'
import { IoCloseCircle } from 'react-icons/io5'

// Define the Header component
const Header = () => (
  // Create the header element
  <header className="mx-auto max-w-[90rem]">
    <section className="mx-[3.125rem] flex h-20 items-center justify-between md:mx-[6.25rem]">
      {/*  ------ Create the navigation element ------  */}
      <nav className="">
        {/*  ------ Create the unordered list element ------  */}
        <ul className="flex items-center gap-x-8">
          {/*  ------ Map the array of objects to the list items ------  */}
          {[
            { label: 'Home', path: '/' },
            { label: 'About', path: '/about' },
            { label: 'Services', path: '/services' },
            { label: 'Blogs', path: '/blog' },
            { label: 'SignIn', path: '/signin' },
          ].map(({ label, path }) => (
            // Create the list item
            <li key={label}>
              {/*  ------ Create the NavLink component ------  */}
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-base font-medium leading-[normal] text-[color:var(--Text-Colour-2,#2B2B2B)] duration-100 [font-family:Poppins] ${isActive ? 'underline' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <section className="flex items-center gap-x-2">
        <img src={logo} alt="" />
        <h1 className="header-logo-text">Rezilla</h1>
      </section>
      <section className="">
        {/* <Button>
          <span className="">Add Listing</span>
        </Button> */}
        <form>
          <section className="flex h-9 items-center rounded-[10px] bg-[rgba(238,238,254,0.6)] p-2">
            <IoSearch className="inline-block h-7 w-7 text-[color:var(--Label-Colors-LC-L-Secondary,rgba(60,60,67,0.60))]" />
            <input
              type="text"
              placeholder="Search"
              className="text-[1.0625rem] font-normal leading-[22px] tracking-[-0.0255rem] text-[color:var(--Label-Colors-LC-L-Secondary,rgba(60,60,67,0.60))] [font-family:Poppins]"
            />
            <IoCloseCircle className="inline-block h-7 w-7 text-[color:var(--Label-Colors-LC-L-Secondary,rgba(60,60,67,0.60))]" />
          </section>
        </form>
      </section>
    </section>
  </header>
)

// Export the Header component
export default Header
