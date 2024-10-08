import Link from "next/link";
import { mock } from "node:test";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/XqDbyjH42STQJKCj70SI2hVFp6b3DiISr94QdPcnvwZUjCtz",
  "https://utfs.io/f/XqDbyjH42STQkIRdmosVEgQM6PqUAw5Ny3lWSFi018jxmJRr",
  "https://utfs.io/f/XqDbyjH42STQGfRSj53WcvBE4x3MHfdRqP0ZsJFlOYuiTSzb",
  "https://utfs.io/f/XqDbyjH42STQQhvESFiPP4fD3YwsU0vO7juMnEh9ZrcqVIWl",
  "https://utfs.io/f/XqDbyjH42STQCkEcVrKtjcgRsMSUhy5Qm2ezdvpVFbA7BK4L",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.id} className="w-1/2 p-4">
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-1/2 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
