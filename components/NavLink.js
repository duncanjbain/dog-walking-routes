import Link from 'next/link';
import Anchor from './Anchor';

const NavLink = ({ children, href }) => {
  return (
    <li className="md:mr-4">
      <Link href={href} passHref>
        <Anchor className="text-xl md:text-2xl font-semibold text-green-800 rounded-lg hover:text-yellow-600 border-b-4 border-transparent p-1 md:p-2 transition hover:bg-yellow-100 hover:">
          {children}
        </Anchor>
      </Link>
    </li>
  );
};

export default NavLink;