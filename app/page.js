import Link from "next/link";
export default function Page(){
  return(
    <div>
      <h1>Hello World</h1>
      <nav>
      <Link href="/week-2">week-2</Link>
      <br/>
      <Link href="/week-3">week-3</Link>
    </nav>
    </div>
  );
};