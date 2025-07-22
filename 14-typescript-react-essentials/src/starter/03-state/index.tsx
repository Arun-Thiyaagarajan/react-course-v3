import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: "https://reactjs.org",
    text: "react docs",
  },
  {
    id: 2,
    url: "https://reactrouter.com",
    text: "react router docs",
  },
  {
    id: 3,
    url: "https://reacttraining.com",
    // remove text property to see the error
    text: "react training",
  },
];

function Component() {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);
  
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button className="btn btn-center"
        onClick={() => {
          setText('shakeAndBake')
          setNumber(9)
          setList([text, number.toString(), '8', ...list])
          setLinks([...links, {id: 4, url: "https://random.com", text: "Random"}])
        }
      }>
        Click Me
      </button>
    </div>
  );
}
export default Component;
