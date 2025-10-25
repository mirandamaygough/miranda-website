'use client';

import Image from "next/image";
import { Typewriter } from 'nextjs-simple-typewriter'
import { useState } from "react";
import {RxTriangleDown, RxTriangleRight} from 'react-icons/rx';
import {FaLinkedin, FaGithub, FaDownload} from 'react-icons/fa';

export default function Home() {
  const [aboutMeOpen, setAboutMeOpen] = useState(true)
  const [experienceOpen, setExperienceOpen] = useState(false)
  const [skillsOpen, setSkillsOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)

  return (
    <div className="relative font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 gap-8 sm:gap-16 lg:p-20 bg-black">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-50 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full blur-3xl z-0"></div>
        <main className="relative flex flex-col gap-[16px] sm:gap-[32px] row-start-2 items-center sm:items-start z-10 w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[66.67%]">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="w-32 h-32 sm:w-40 sm:h-40 relative overflow-hidden rounded-full">
            <Image
              src="/miranda.jpg"
              alt="Miranda Gough"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <span className={`text-4xl sm:text-6xl text-bold text-center sm:text-left`}>
              <Typewriter
                words={['miranda gough']}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={400}
                deleteSpeed={50}
                delaySpeed={5000}
              />
            </span>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/miranda-gough" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-3xl sm:text-4xl text-purple-500 hover:text-purple-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/mirandamaygough" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-3xl sm:text-4xl text-purple-500 hover:text-purple-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="/miranda-cv.pdf"
                download
                className="text-3xl sm:text-3xl text-purple-500 hover:text-purple-400 transition-colors"
                aria-label="Download CV"
              >
                <FaDownload />
              </a>
            </div>
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl sm:text-left border-b-2 border-pink-500 pb-2 cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
        onClick={() => setAboutMeOpen(!aboutMeOpen)}
        >
        <span className="text-3xl sm:text-4xl">{aboutMeOpen ? <RxTriangleDown /> : <RxTriangleRight />}</span>
          about me:
        </h2>
        {aboutMeOpen && (
          <>
        <ul className="list-disc list-outside text-lg sm:text-2xl pl-6">
          <li className="text-lg sm:text-2xl mt-2">Final year BSc Computer Science undergraduate predicted first class honours @ University of Leeds</li>
          <li className="text-lg sm:text-2xl">Data science/machine learning engineering and software engineering internships @ <a className="text-pink-500 underline" href="https://www.pwc.co.uk" target="_blank" rel="noopener noreferrer">PwC UK</a></li>
          <li className="text-lg sm:text-2xl">President @ <a className="text-pink-500 underline" href="https://www.luucompsoc.co.uk" target="_blank" rel="noopener noreferrer">Leeds Computing Society</a> and co-founder of <a className="text-pink-500 underline" href="https://www.leedshack.com" target="_blank" rel="noopener noreferrer">LeedsHack</a></li>
          <li className="text-lg sm:text-2xl">Looking for opportunities to work as a software engineer, data scientist or technical analyst</li>
          <li className="text-lg sm:text-2xl">Passionate about inclusion in technology and interested in potential real-world applications of computer science to issues such as the gender data gap and climate crisis</li>
        </ul>
        </>
        )}

        <h2 
          className="text-3xl sm:text-4xl sm:text-left border-b-2 border-purple-500 pb-2 cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
          onClick={() => setExperienceOpen(!experienceOpen)}
        >
        <span className="text-3xl sm:text-4xl">{experienceOpen ? <RxTriangleDown /> : <RxTriangleRight />}</span>
          previous work:
        </h2>
        {experienceOpen && (
          <>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl flex flex-col sm:flex-row items-start sm:items-center mb-2 gap-2 sm:gap-0">
              <div className="mr-0 sm:mr-4 flex items-center justify-center w-20 h-12 sm:w-24 sm:h-16 flex-shrink-0">
                <div className="bg-white rounded-lg px-2 py-2 flex items-center justify-center">
                  <Image
                    src="/pwc-logo.png"
                    alt="PwC Logo"
                    width={65}
                    height={33}
                  />
                </div>
              </div>
              <span>PwC UK</span>
            </h3>
            
            <div className="ml-0 sm:ml-[112px] mb-4">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Intern - Data Scientist and Machine Learning Engineer in the AI Research team (Jun 2024 - Aug 2025)</h4>
              <p className="mb-2 text-lg sm:text-xl">As part of the Technology Degree Apprenticeship programme, I spent a year in the AI Research team investigating how the latest developments in academia and industry could be applied to real-world situations faced by PwC and its clients. I became a strong advocate for responsible and informed deployment of AI products and the consideration of data protection, ethics, and security. Some highlights include:</p>
              <ul className="list-disc list-outside text-lg sm:text-xl pl-6">
                <li>Built a robust Python library for safety assessments of models based on SOTA domain research and implemented reusable pipelines reducing the time taken for testing from 1 week to 10 minutes.</li>
                <li>Developed machine learning pipelines for secure LLM fine-tuning allowing old classified documents to be repurposed as training data for customised internal chatbots with higher utility and more relevant output.</li>
                <li>Implemented testing identifying critical vulnerabilities in chatbot applications built for clients, liaising with the development team to apply fixes before deployment.</li>
                <li>Created an interactive AI safety testing demo application that brought in new clients.</li>
                <li>Ran a hackathon for the cyber security team identifying weaknesses and mitigations in AI applications where I volunteered to present and run workshops for 40+ attendees.</li>
              </ul>
            </div>

            <div className="ml-0 sm:ml-[112px]">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Intern - Software Engineer in the Data & Automation team (Jun 2023 - Aug 2023)</h4>
              <p className="mb-2 text-lg sm:text-xl">As part of the Technology Degree Apprenticeship programme, I spent 10 weeks in the Data & Automation team developing automations for common manual tasks in the form of macros and web applications, allowing non-technical employees to streamline their workflow.</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl flex flex-col sm:flex-row items-start sm:items-center mb-2 gap-2 sm:gap-0">
              <div className="mr-0 sm:mr-4 rounded-lg p-1 flex items-center justify-center w-20 h-12 sm:w-24 sm:h-16 flex-shrink-0">
                <Image
                  src="/compsoc-logo.svg"
                  alt="Leeds Computing Society Logo"
                  width={60}
                  height={60}
                />
              </div>
              <span>Leeds Computing Society</span>
            </h3>
            
            <div className="ml-0 sm:ml-[112px] mb-4">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">President (Jun 2025 - Present)</h4>
              <p className="mb-2 text-lg sm:text-xl">I am currently president of the student computer science society at the University of Leeds, where I lead a 10-person committee and manage our partnerships with the School of Computer Science and local businesses. I've also organised industry speakers, skills workshops, CTFs, and social events, increasing student satisfaction and providing career development opportunities to 250+ members.</p>
            </div>

            <div className="ml-0 sm:ml-[112px]">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Equality, Diversity and Inclusion Secretary (Jun 2023 - Jun 2025)</h4>
              <p className="mb-2 text-lg sm:text-xl">I was previously Equality, Diversity and Inclusion secretary for two years. I focused on making the society more inclusive and accessible to female and non-binary members and creating a supportive community through free career and networking events. To increase the society's visibility and professionalism and allow us to get more external partnerships, I developed a new website using Next.js and TypeScript.</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl flex flex-col sm:flex-row items-start sm:items-center mb-2 gap-2 sm:gap-0">
              <div className="mr-0 sm:mr-4 rounded-lg p-1 flex items-center justify-center w-20 h-12 sm:w-24 sm:h-16 flex-shrink-0">
                <Image
                  src="/leedshack-logo.png"
                  alt="LeedsHack Logo"
                  width={70}
                  height={50}
                />
              </div>
              <span>LeedsHack</span>
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold mb-2 ml-0 sm:ml-[112px]">Co-founder and Experience Lead (Jun 2024 - Present)</h4>
            <p className="mb-2 text-lg sm:text-xl ml-0 sm:ml-[112px]">I co-founded LeedsHack, the student hackathon at the University of Leeds, running our first event in February 2025 and currently organising our second in February 2026. I liaised with sponsors to help secure £9.5k in funding and coordinated all sponsor-led challenges on the day of the event, as well as successfully managing ticketing, scheduling, communications, and welfare for 85 participants.</p>
          </div>
          
        </>
        )}

          <h2 className="text-3xl sm:text-4xl sm:text-left border-b-2 border-indigo-500 pb-2 cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
            onClick={() => setSkillsOpen(!skillsOpen)}>
          <span className="text-3xl sm:text-4xl">{skillsOpen ? <RxTriangleDown /> : <RxTriangleRight />}</span>
            skills:
          </h2>
        {skillsOpen && (
          <>
          <div className="mb-2">
            <h3 className="text-xl sm:text-2xl mb-2">
              Programming languages
            </h3>
            <p className="text-lg sm:text-xl">Python, C, C++, Java, JavaScript, TypeScript, SQL</p>
          </div>
          <div className="mb-2">
            <h3 className="text-xl sm:text-2xl mb-2">
              Technologies
            </h3>
            <p className="text-lg sm:text-xl">Git, GitHub, Docker, Poetry, Linux, Azure, GCP, Databricks, React, Next.js, Tailwind CSS, Flask, SQLite, LangChain, PyTorch, MLFlow, Streamlit, NumPy, Pandas, Scikit-learn, NLP</p>
          </div>
          <div className="mb-2">
            <h3 className="text-xl sm:text-2xl mb-2">
              Other achievements
            </h3>
            <p className="text-lg sm:text-xl">B2 level in Spanish, 3rd placed Leeds team at UKIEPC 2025, Microsoft Office Specialist certification</p>
          </div>
          </>
        )}
      
        <h2 className="text-3xl sm:text-4xl sm:text-left border-b-2 border-blue-500 pb-2 cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
        onClick={() => setProjectsOpen(!projectsOpen)}>
        <span className="text-3xl sm:text-4xl">{projectsOpen ? <RxTriangleDown /> : <RxTriangleRight />}</span>
          projects:
        </h2>
        {projectsOpen && (
          <>
          <div className="mb-2">
          <ul className="list-disc list-outside text-lg sm:text-2xl pl-6">
            <li className="text-lg sm:text-xl mt-2">Online game for navigating the UK public transport system using React, Flask, GeoPy and the Google Maps API</li>
            <li className="text-lg sm:text-xl mt-2"><a className="underline" href="https://github.com/mirandamaygough/xv6-shell" target="_blank" rel="noopener noreferrer">Shell for the xv6 operating system written entirely from scratch in C</a></li>
            <li className="text-lg sm:text-xl mt-2"><a className="underline" href="https://github.com/mirandamaygough/wikipedia-bias-classifier" target="_blank" rel="noopener noreferrer">Sentiment analysis pipeline to detect bias in multilingual Wikipedia articles using Python and NLTK</a></li>
            <li className="text-lg sm:text-xl mt-2"><a className="underline" href="https://github.com/mirandamaygough/exercise-data-visualiser" target="_blank" rel="noopener noreferrer">Web application for visualising and sharing exercise data as GPX files using React, Flask and SQLite</a></li>
            <li className="text-lg sm:text-xl mt-2"><a className="underline" href="https://github.com/mirandamaygough/differential-equation-solver-comparison" target="_blank" rel="noopener noreferrer">Comparison of various solver algorithms for predator-prey differential equations using Python, NumPy, Matplotlib, Pandas and SciPy</a></li>
            <li className="text-lg sm:text-xl mt-2">Research report into the effectiveness of machine translation for under-resourced language pairs.</li>
          </ul>
          </div>
        </>
        )}
      </main>
    </div>
  );
}