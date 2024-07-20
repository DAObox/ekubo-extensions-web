import TextWriter from "./components/TextWriter";
import { Input } from "./components/ui/input";

async function getContributors(repoName: string, page = 1) {
  let request = await fetch(
    `https://api.github.com/repos/${repoName}/contributors?per_page=100&page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  let contributorsList = await request.json();
  return contributorsList;
}

async function getAllContributors(repoName: string) {
  let contributors: { avatar_url: string }[] = [];
  let page = 1;

  while (true) {
    const list = await getContributors(repoName, page);
    if (list.length === 0) {
      break;
    }
    contributors = contributors.concat(list);
    page++;
  }

  return contributors;
}

export default async function Home() {
  const contributors = await getAllContributors("dojoengine/dojo");

  const profileImages = contributors.map(
    (contributor) => contributor.avatar_url,
  );

  return (
    <div className="bg-[#131216]/95 w-full min-h-screen pt-40 flex flex-col items-center">
      <div className="max-w-3xl px-5 space-y-5">
        <h2 className="text-[#41127E] text-center text-5xl sm:text-6xl font-extrabold">
          <TextWriter words={["Ekubo Community Extensions"]} />
        </h2>
        <p className="text-lg text-center text-white">A community curated collection of open-source extensions for Ekubo protocol.</p>
        <div>
          <Input placeholder="Search for extensions" className="bg-transparent focus-visible:ring-0 focus-visible:border-none" />
        </div>
      </div>
    </div>
  );
}
