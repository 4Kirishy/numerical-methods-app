import { tAuthor } from "../types";

export const AuthorItem = ({ firstName, lastName, photoPath }: tAuthor) => {
  return (
    <li className="max-w-xs text-center">
      <div className="mb-4">
        <img src={photoPath} alt="author-img" />
      </div>
      <h4 className="text-2xl font-semibold">
        {firstName} {lastName}
      </h4>
    </li>
  );
};
