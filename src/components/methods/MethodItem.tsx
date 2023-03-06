import { Link } from "react-router-dom";
import { tMethod } from "../types";

export const MethodItem = ({ title, path }: tMethod) => {
  return (
    <li className="mb-5">
      <Link
        to={path}
        className="block uppercase font-semibold text-2xl p-8 border-4 border-text-main hover:shadow-custom"
      >
        {title}
      </Link>
    </li>
  );
};
