import Link from "next/link";
export default function Page(){
  return(
    <div>
      <h1>Hello World</h1>
      <nav>
      <Link href="/week-2">week-2</Link>
      <br/>
      <Link href="/week-3">week-3</Link>
      <br/>
      <Link href="/week-4">week-4</Link>
      <br/>
      <Link href="/week-5">week-5</Link>
      <br/>
      <Link href="/week-6">week-6</Link>
    </nav>
    </div>
  );
};