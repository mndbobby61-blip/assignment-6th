const NavBar = ({ carts }) => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <img className="w-10 bg-white" src="public/DigiTools.png" />
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-4 px-1 text-lg">
          <li>
            <a>Products</a>
            </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

       <div className="navbar-end gap-5 items-center">

        {/* Cart Icon + Count */}
        <div className="relative">
          <img className="w-8" src="/shopping-cart.png" alt="" />

          {/* COUNT BADGE */}
          {
            carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {carts.length}
              </span>
            )
          }
        </div>

      <div className="navbar-end gap-5">
        <a>Login</a>
        <a className="btn bg-blue-700 rounded-full text-white">Get Started</a>
      </div>
      </div>
    </div>
  );
};

export default NavBar;