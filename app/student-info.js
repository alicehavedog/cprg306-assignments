import { Main } from "next/document";
import Link from "next/link";

export default function StudentInfo(){
    return(
        <main>
        <h1>Tzu-Yun, Huang</h1>
        <li>
            <p>Alice's repository : <Link href="https://github.com/alicehavedog">Click</Link></p>
        </li>
        </main>
    );
};