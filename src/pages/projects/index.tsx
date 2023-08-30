import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-6xl font-bold text-gray-900">Projects</h1>
      <p className="text-2xl font-medium text-gray-900">
        This is the projects page
      </p>
      <Link href="/projects/sublimeEvents" className="text-gray-900">
        <button>Sublime Events</button>
      </Link>
      <Link href="/projects/tmt" className="text-gray-900">
        <button>TMT</button>
      </Link>
    </div>
  );
}
