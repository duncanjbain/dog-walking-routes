import Link from 'next/link';
import NavLink from './NavLink';

const NavBar = () => {
  return (
    <header className="my-2 md:my-4 flex flex-col items-center lg:flex-row lg:justify-between">
      <h1 className="font-extrabold text-xl lg:text-3xl text-green-800">
        <Link href="/">Dog Walking Routes</Link>
      </h1>
      <nav className="my-2 md:my-0">
        <ul className="flex items-center">
          <NavLink href="/about">Home</NavLink>
          <NavLink href="/projects">Dog Walks</NavLink>
          <NavLink href="/uses">About</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
