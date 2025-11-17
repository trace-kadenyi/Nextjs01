import Posts from "./components/Posts";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="my-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitspace-nowrap">
          I&apos;m <span className="font-bold">Tracey</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
