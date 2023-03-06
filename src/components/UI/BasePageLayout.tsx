import { ReactNode } from "react";
import { BaseContainer } from "./BaseContainer";

export const BasePageLayout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className="mt-16">
      <BaseContainer>
        <h2 className="text-4xl uppercase font-semibold mb-10">{title}</h2>
        {children}
      </BaseContainer>
    </section>
  );
};
