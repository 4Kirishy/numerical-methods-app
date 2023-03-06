import { BaseContainer } from "../UI/BaseContainer";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="py-8 border-b-4 border-text-main">
      <BaseContainer>
        <nav className="flex justify-between items-center">
          <Link to="/" className="uppercase text-2xl font-black">
            numerical methods
          </Link>
          <ul className="flex items-center gap-12">
            <li>
              <Link to="/" className="uppercase text-2xl">
                home
              </Link>
            </li>
            <li>
              <Link to="/authors" className="uppercase text-2xl">
                authors
              </Link>
            </li>
          </ul>
        </nav>
      </BaseContainer>
    </header>
  );
};
