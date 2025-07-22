import { type PropsWithChildren } from "react";

// type ComponentProps = {
//   name: string;
//   id: number;
//   children?: React.ReactNode; // Optional children prop
// };

type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Component(props: ComponentProps) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>ID: {props.id}</h1>
      {props.children}
    </div>
  );
}
export default Component;
