import { ReactNode } from "react";

export const BaseContainer = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-6xl my-0 mx-auto">{children}</div>;
};
