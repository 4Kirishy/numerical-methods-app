import ruslan from "../assets/images/authors/ruslan.jfif";
import andrew from "../assets/images/authors/andrew.jfif";
import kyrylo from "../assets/images/authors/kyrylo.jfif";

import { AuthorsList } from "../components/authors/AuthorsList";
import { BasePageLayout as AuthorsPageLayout } from "../components/UI/BasePageLayout";

export const Authors = () => {
  const authors = [
    {
      firstName: "Andreii",
      lastName: "Znaiko",
      photoPath: andrew,
    },
    {
      firstName: "Kyrylo",
      lastName: "Teplynskyi",
      photoPath: kyrylo,
    },
    {
      firstName: "Ruslan",
      lastName: "Morozov",
      photoPath: ruslan,
    },
  ];

  return (
    <AuthorsPageLayout title="authors">
      <AuthorsList authors={authors} />
    </AuthorsPageLayout>
  );
};
