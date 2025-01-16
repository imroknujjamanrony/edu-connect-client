const Navbar = () => {
  const isLoggedIn = true; // Replace with your actual logic for checking login status
  const userName = "John Doe"; // Replace with actual user's name
  const userImage =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"; // Replace with user's profile picture

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        {/* Website Logo and Name */}
        <a className="btn btn-ghost text-xl">EduConnect</a>
      </div>
      <div className="flex-none">
        {/* Navbar Items */}
        <div className="flex space-x-4">
          <a className="btn btn-ghost">Home</a>
          <a className="btn btn-ghost">All Classes</a>
          <a className="btn btn-ghost">Teach on EduConnect</a>
        </div>

        {/* Login/Sign Out button and Profile dropdown */}
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User Profile" src={userImage} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  {userName}
                  {/* You can add a badge for notifications if needed */}
                </a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <a className="btn btn-ghost">Sign In</a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
