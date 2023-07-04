import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menuLink = (
    <>
      <li><NavLink to='/' >HOME</NavLink></li>
      <li><NavLink to='/projects' >PROJECTS</NavLink></li>
      <li><NavLink to='/aboutme' >ABOUT</NavLink></li>
      <li><NavLink to='/contact' >CONTACT ME</NavLink></li>
    </>
  );

  return (
    <div>

      <div className="navbar  px-5 z-10 fixed bg-black bg-opacity-30 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              
              className="menu menu-sm  dropdown-content mt-3 p-2 shadow text-white rounded-box w-52"
            >
              {menuLink}
            </ul>
          </div>
        <div className="flex-1">
          <a className="btn btn-ghost  normal-case text-xl">
            <button className="btn btn-circle btn-primary text-4xl text-white"><Link to='/'>S</Link></button>
            {/* <button className="w-full ">SUJAN AHAMMAD</button> */}
          </a>
        </div>
        </div>
        <div className="navbar-end">
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal px-1">{menuLink}</ul>
        </div>
        </div>
        {/* <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/photo-1541260894924-7ff059b93d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52 text-white"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
