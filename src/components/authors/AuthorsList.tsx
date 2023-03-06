import { tAuthor } from "../types";
import { AuthorItem } from "./AuthorItem";

export const AuthorsList = ({ authors }: { authors: tAuthor[] }) => {
  return (
    <ul className="flex justify-between">
      {authors.map((author) => (
        <AuthorItem
          firstName={author.firstName}
          lastName={author.lastName}
          photoPath={author.photoPath}
        />
      ))}
    </ul>
  );
};
