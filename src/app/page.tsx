import Image from "next/image";
import SearchInput from "./components/SearchInput";
import TextWriter from "./components/TextWriter";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import Link from "next/link";
import Footer from "./components/Footer";
import HomePaths from "./components/HomePaths";

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

  const imageLoader = ({ src, width, quality }: { src: string, width: string, quality: number }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className="bg-[#131216]/95 w-full min-h-screen pt-40 flex flex-col items-center space-y-5 sm:space-y-10">
      <div className="max-w-3xl px-5 space-y-5">
        <h2 className="text-[#41127E] text-center text-5xl sm:text-6xl font-extrabold">
          <TextWriter words={["Ekubo Community Extensions"]} />
        </h2>
        <p className="text-lg text-center text-white">A community curated collection of open-source extensions for Ekubo protocol.</p>
        <SearchInput />
      </div>
      <div className="w-full max-w-6xl">
        <HomePaths />
      </div>
      <div className="grid flex-1 gap-4 max-w-7xl sm:grid-cols-3">
        {
          Array.from({ length: 9 }).map((_, i) => <Link href="/" key={i}>
            <Card className="min-h-72 w-96 p-2.5 flex flex-col justify-between hover:border-[#41127E]">
              <div />
              <div className="space-y-1.5">
                <Image
                  loading="eager"
                  src={"/profile.png"}
                  width={50}
                  height={50}
                  alt="profile"
                  className="pb-1 rounded-full"
                  unoptimized={true}
                />
                <h2 className="text-2xl text-white">Victor Omorogbe</h2>
                <p className="text-lg text-white">A community curated collection of open-source extensions for Ekubo protocol.</p>
                <div className="flex flex-wrap">
                  <Button className="h-8 text-white bg-red-700 hover:bg-red-700 mr-1.5 mb-1.5">ETHCC Hackathon</Button>
                  <Button className="h-8 text-white bg-yellow-700 hover:bg-yellow-700 mr-1.5 mb-1.5">Sepolia Testnet</Button>
                  <Button className="h-8 text-white bg-green-700 hover:bg-green-700 mr-1.5 mb-1.5">Tool</Button>
                </div>
              </div>
            </Card>
          </Link>)
        }
      </div>
      <Footer />
    </div>
  );
}
