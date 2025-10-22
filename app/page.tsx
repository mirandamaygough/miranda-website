import { Domine } from "next/font/google";
import Image from "next/image";

const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-domine",
});

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className={`${domine.className} text-6xl text-center sm:text-left`}>
          Miranda Gough
        </h1>
        <h2 className="text-3xl text-center sm:text-left">
          tl;dr:
        </h2>
        <ul className="list-disc list-inside text-2xl">
          <li className="text-2xl mt-2">Final year BSc Computer Science undergraduate @ University of Leeds</li>
          <li className="text-2xl">Data science and software engineering internships @ PwC</li>
          <li className="text-2xl">President @ Leeds Computing Society and co-founder of LeedsHack</li>
          <li className="text-2xl">Looking for opportunities to work as a software engineer, data scientist or technical analyst</li>
        </ul>

        <h2 className="text-3xl text-center sm:text-left">
          Experience
        </h2>
          <h3 className="text-2xl flex justify-between items-center">
            <div className="mr-4 bg-white rounded-lg p-2 flex items-center justify-center">
              <Image
                src="/pwc-logo.png"
                alt="PwC Logo"
                width={80}
                height={60}
              />
            </div>
            <span>Intern - Data Scientist in the AI Research team @ PwC UK (Jun 2024 - Aug 2025)</span>
          </h3>
          <h3 className="text-2xl flex justify-between items-center">
            <div className="mr-4 bg-white rounded-lg p-2 flex items-center justify-center">
              <Image
                src="/pwc-logo.png"
                alt="PwC Logo"
                width={80}
                height={60}
              />
            </div>
            <span>Intern - Software Engineer in the Data & Automation team @ PwC UK (Jun 2023 - Aug 2023)</span>
          </h3>
          <h3 className="text-2xl flex justify-between items-center">
            <div className="mr-4 bg-white rounded-lg flex items-center justify-center">
              <Image
                src="/compsoc-logo.svg"
                alt="Leeds Computing Society Logo"
                width={60}
                height={60}
              />
            </div>
            <span>President @ Leeds Computing Society (Jun 2025 - Present)</span>
          </h3>
          <h3 className="text-2xl flex justify-between items-center">
            <div className="mr-4 bg-white rounded-lg flex items-center justify-center">
              <Image
                src="/compsoc-logo.svg"
                alt="Leeds Computing Society Logo"
                width={60}
                height={60}
              />
            </div>
            <span>Equality, Diversity and Inclusion Secretary @ Leeds Computing Society (Jun 2023 - Jun 2025)</span>
          </h3>
          <h3 className="text-2xl flex justify-between items-center">
            <div className="mr-4 bg-white rounded-lg flex items-center justify-center">
              <Image
                src="/leedshack-logo.png"
                alt="LeedsHack Logo"
                width={80}
                height={60}
              />
            </div>
            <span>Co-founder and Experience Lead @ LeedsHack (Jun 2023 - Jun 2025)</span>
          </h3>
      </main>
    </div>
  );
}
