import HeroContainer from "@/components/HeroContainer";
import LatestUpdates from "@/components/LatestUpdates";

export const metadata = {
  title: "QuCIS - Quantum Computing and Information Systems Lab",
  description: "Explore the frontiers of quantum computation, quantum error correction, and quantum networks with Dr. Ankur Raina and the QuCIS team.",
  openGraph: {
    title: "QuCIS - Quantum Information Research Lab",
    description: "Pioneering the future of Quantum Information Research.",
    url: "https://qucis.in",
    siteName: "QuCIS",
  }
};

export default function Home() {
  return (
    <>
      <main>
        {/* FIRST SECTION: Welcome & Mission */}
        <HeroContainer />

        {/* SECOND SECTION: Latest Lab Updates */}
        <LatestUpdates />
      </main>
    </>
  );
}
