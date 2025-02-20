import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/register">Signup</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
