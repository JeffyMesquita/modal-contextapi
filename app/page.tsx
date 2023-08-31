import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link className="text-neutral-700" href="/about" prefetch>
        About
      </Link>
    </main>
  );
}
