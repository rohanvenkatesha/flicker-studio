import moods from "@/data/moods.json";
import Link from "next/link";

export default function MoodSection() {
  return (
    <section className="px-6 py-10">
      <h2 className="mb-4 text-xl font-semibold">
        How are you feeling today?
      </h2>

      <div className="flex flex-wrap gap-3">
        {moods.map((mood) => (
          <Link
            key={mood}
            href={`/browse?mood=${encodeURIComponent(mood)}`}
            className="rounded-full bg-gray-800 px-5 py-2 text-sm hover:bg-gray-700 transition"
          >
            {mood}
          </Link>
        ))}
      </div>
    </section>
  );
}
