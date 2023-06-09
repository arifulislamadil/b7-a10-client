import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../authProvider/AuthProvider";
import "./header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.photoURL);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [profile, setProfile] = useState(false);
  const handleProfileClick = () => {
    setProfile(!profile);
  };
  return (
    <div className="container mx-auto px-4">
      <div className="container navbar mx-auto px-4 bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <div className="btn btn-ghost normal-case text-xl">
              <img
                style={{ width: "50px", height: "50px", marginRight: "5px" }}
                src="https://cdn.iconscout.com/icon/free/png-256/free-master-chef-3442460-2875721.png"
                alt=""
              />
              MasterChefs
            </div>
          </Link>
        </div>
        <div className="hidden md:inline">
          <ul>
            <li>
            <NavLink
                    to='/'
                    className={({ isActive , isPending, }) =>
                      isActive
                        ? "active btn btn-ghost normal-case text-xl border-indigo-500 mr-2"
                        
                        : "btn btn-ghost normal-case text-xl bg-slate-300 mr-2"
                    }
                  >
                   Home
                  </NavLink>
              <NavLink
                    to='/about'
                    className={({ isActive , isPending, }) =>
                      isActive
                        ? "active btn btn-ghost normal-case text-xl border-indigo-500 mr-2"
                        
                        : "btn btn-ghost normal-case text-xl bg-slate-300 mr-2"
                    }
                  >
                   About
                  </NavLink>
             
              <NavLink
                    to='/chefs'
                    className={({ isActive , isPending, }) =>
                      isActive
                        ? "active btn btn-ghost normal-case text-xl border-indigo-500 mr-2"
                        
                        : "btn btn-ghost normal-case text-xl bg-slate-300 mr-2"
                    }
                  >
                   Chefs
                  </NavLink>
              <NavLink
                    to='/blogs'
                    className={({ isActive , isPending, }) =>
                      isActive
                        ? "active btn btn-ghost normal-case text-xl border-indigo-500 mr-2"
                        
                        : "btn btn-ghost normal-case text-xl bg-slate-300 mr-2"
                    }
                  >
                   Blogs
                  </NavLink>
              <NavLink
                    to='/Contact'
                    className={({ isActive , isPending, }) =>
                      isActive
                        ? "active btn btn-ghost normal-case text-xl border-indigo-500 mr-2"
                        
                        : "btn btn-ghost normal-case text-xl bg-slate-300 mr-2"
                    }
                  >
                   Contact
                  </NavLink>
             
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 inline sm:hidden card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body ">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip={user ? `{${user?.email}}`: ""}
              >
                <div className="w-10 rounded-full ">
                  <img src={user?.photoURL} />
                </div>
              </label>
            

            <ul
              onClick={handleProfileClick}
              tabIndex={0}
              className="inline sm:hidden menu menu-compact dropdown-content mt-5 p-2 shadow bg-white-400 rounded-box w-52"
            >
              <li>
                <Link
                  onClick={!profile}
                  className="btn btn-ghost normal-case text-xl"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  onClick={!profile}
                  className="btn btn-ghost normal-case text-xl "
                  to="/about"
                >
                  About
                </Link>
                <Link
                  onClick={!profile}
                  className="btn btn-ghost normal-case text-xl  "
                  to="/chefs"
                >
                  Chefs
                </Link>
              
                
               
                <Link
                  onClick={!profile}
                  className="btn btn-ghost normal-case text-xl  "
                  to="/blogs"
                >
                  Blogs
                </Link>
                <Link
                  onClick={!profile}
                  className="btn btn-ghost normal-case text-xl  "
                  to="/contact"
                >
                  Contact
                </Link>
                {user ? (
                  <Link
                    onClick={handleLogout}
                    className="btn btn-ghost bg-red-500 normal-case text-xl  "
                    to="/"
                  >
                    Logout
                  </Link>
                ) : (
                  <Link className="btn btn-secondary " to="/login">
                    login
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {user ? (
            <Link
              onClick={handleLogout}
              className="btn btn-ghost bg-red-500 normal-case text-xl md:inline hidden"
              to="/"
            >
              Logout
            </Link>
          ) : (
            <Link className="btn btn-secondary " to="/login">
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
