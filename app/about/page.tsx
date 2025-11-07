import React from "react";
import Link from "next/link";


export default async function About() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay")
    }, 1000)
  })

  // throw new Error("Not today")
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Link to Home</Link>
    </div>
  );
}
