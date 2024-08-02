import SearchInput from "./components/SearchInput";
import TextWriter from "./components/TextWriter";
import Footer from "./components/Footer";
import HomePaths from "./components/HomePaths";
import Contributors from "./components/Contributors";

// async function getContributors(repoName: string, page = 1) {
//   let request = await fetch(
//     `https://api.github.com/repos/${repoName}/contributors?per_page=100&page=${page}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     },
//   );

//   let contributorsList = await request.json();
//   return contributorsList;
// }

// async function getAllContributors(repoName: string) {
//   let contributors: { avatar_url: string }[] = [];
//   let page = 1;

//   while (true) {
//     const list = await getContributors(repoName, page);
//     if (list.length === 0) {
//       break;
//     }
//     contributors = contributors.concat(list);
//     page++;
//   }

//   return contributors;
// }

export default async function Home() {
  // const contributors = await getAllContributors("dojoengine/dojo");

  // const profileImages = contributors.map(
  //   (contributor) => contributor.avatar_url,
  // );

  // const imageLoader = ({ src, width, quality }: { src: string, width: string, quality: number }) => {
  //   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  // }

  return (
    <div className="bg-[#131216]/95 w-full min-h-screen pt-40 flex flex-col items-center space-y-5 sm:space-y-10 px-5">
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
      <div className="grid flex-1 gap-x-3.5 gap-y-2 md:gap-4 max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {
          Array.from({ length: 9 }).map((_, i) => <Contributors key={i} />)
        }
      </div>
      <Footer />
    </div>
  );
}
