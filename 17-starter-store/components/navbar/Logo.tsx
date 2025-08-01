import Link from "next/link";
import { Button } from "../ui/button";
import { AiOutlineProduct } from "react-icons/ai";

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <AiOutlineProduct className="w-6 h-6" />
      </Link>
    </Button>
  );
}
export default Logo;
