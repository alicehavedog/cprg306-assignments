"use client"; // Add this at the top

import Link from "next/link";
import StudentInfo from "../student-info";

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo />
    </main>
  );
}
