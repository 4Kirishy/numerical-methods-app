import { MethodItem } from "./MethodItem";
import { tMethod } from "../types";

export const Methods = ({ methods }: { methods: tMethod[] }) => {
  return (
    <ul>
      {methods.map((method) => (
        <MethodItem title={method.title} path={method.path} key={method.path} />
      ))}
    </ul>
  );
};
