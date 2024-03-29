import Link from 'next/link';
import NavLink from './NavLink';

const NavBar = () => {
  return (
    <header className="my-2 md:my-4 flex flex-col items-center lg:flex-row lg:justify-between">
      <h1 className="font-extrabold text-xl lg:text-3xl text-green-800">
        <Link href="/">Dog Walking Routes</Link>
      </h1>
      <nav className="my-2 md:my-0">
        <ul className="flex items-center space-x-3">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/walks">Dog Walks</NavLink>
          <NavLink href="/about">About</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
