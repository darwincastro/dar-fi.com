import * as React from 'react';
import { Link } from 'gatsby';
import Logo from '../static/logo.png';
export default function Nav() {
  return (
    <nav>
      <div className="mx-auto flex max-w-6xl items-center justify-between p-6">
        <div>
          <Link to="/" className="block">
            <img src={Logo} alt="Dar-fi" className="w-[164px]" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-10">
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
