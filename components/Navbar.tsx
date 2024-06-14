import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand m-2" href="/dashboard">
        Home
      </Link>
      <Link className="nav-item nav-link m-2" href="/signup">
        Sign up
      </Link>
      <Link className="nav-item nav-link m-2" href="/signin">
        Sign in
      </Link>
    </nav>
  );
};

export default Navbar;
