import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Grant Pitt Resume</title>
        <meta name="description" content="Grant Pitt Resume (2022)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={`max-w-2xl mx-auto px-4 py-16 print:pt-8 print:pb-0 ${inter.variable} font-sans text-stone-800`}
      >
        <header className="flex justify-between flex-wrap">
          <h1 className="font-bold text-4xl">
            Grant Pitt
          </h1>
          <div className="flex flex-col gap-1">
            <a
              href="https://www.grantpitt.com"
              className="text-blue-500 font-medium ml-auto"
            >
              grantpitt.com
            </a>
            <a
              href="mailto:grantpitt0@gmail.com"
              className="text-blue-500 font-medium ml-auto"
            >
              grantpitt0@gmail.com
            </a>
            <a
              href="https://github.com/grantpitt"
              className="text-blue-500 font-medium ml-auto"
            >
              github.com/grantpitt
            </a>
            <a
              href="https://www.linkedin.com/in/grant-pitt/"
              className="text-blue-500 font-medium ml-auto"
            >
              linkedin.com/in/grant-pitt
            </a>
          </div>
        </header>

        <h2>Education</h2>
        <h3>Bachelor of Science in Applied Math</h3>
        <p className="where">
          <span className="company">Brigham Young University</span> - (August
          2019 - April 2023)
        </p>
        <ul>
          <li>GPA: 3.7/4.0</li>
          <li>
            Relevant Coursework: Machine Learning, Data Structures, Algorithms,
            Linear Algebra, Calculus, Probability, Statistics, Discrete Math
          </li>
        </ul>

        <h2>Work Experience</h2>
        <h3>Machine Learning Engineer</h3>
        <p className="where">
          <span className="company">Digital Room</span> - (April 2021 - Present)
        </p>
        <ul>
          <li>
            Developed and deployed a semantic search engine for millions of
            customer images, enabling trend analysis and targeted marketing
            strategies.
          </li>
          <li>
            Implemented real-time inference for live insights on customer
            demographics and behavior.
          </li>
        </ul>

        <h3>Software Engineer</h3>
        <p className="where">
          <span className="company">Perception Control and Cognition Lab</span>{" "}
          - (April 2022 - Present)
        </p>
        <ul>
          <li>
            Developed an interactive visualization of a text-to-image machine
            learning model that has been utilized by hundreds of students at
            Brigham Young University.
          </li>
          <li>
            Created a program to automatically align sensor data, enabling daily
            interactive software experiences.
          </li>
        </ul>

        <h3>Software Engineer Intern</h3>
        <p className="where">
          <span className="company">Brevity</span> - (April 2021 - July 2021)
        </p>
        <ul>
          <li>
            Oversaw the development of several components using React for a
            no-code platform, including a rich-text editor and video player.
          </li>
          <li>Implemented testing using Jest for continuous integration.</li>
        </ul>

        <h2>Skills</h2>
        <ul>
          <li>
            <span className="font-medium">Data Science:</span> Python, Pandas,
            Numpy, Sklearn, Huggingface, Pytorch, AWS, SQL, model analysis,
            statitics
          </li>
          <li>
            <span className="font-medium">Web Programming:</span> JavaScript,
            TypeScript, Node, Express, React, Vue, Svelte, Git
          </li>
        </ul>
      </main>
    </>
  );
}
