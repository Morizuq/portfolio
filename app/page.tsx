import { Courgette } from "next/font/google";

export const courgette = Courgette({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${courgette.className} ms-5 me-4 mt-60`}>
      <p className="text-gold  mb-2">Hello! I am</p>
      <h1 className="text-4xl sm:text-5xl mb-6">Morizuq Shoneye</h1>
      <h3 className="text-1xl sm:text-2xl text-gold mb-2">
        Fullstack Developer
      </h3>
      <ul className="flex sm:flex-row sm:space-x-2 space-x-0 flex-col text-light text-space">
        <li>Software Engineer</li>
        <li>Back End Developer</li>
        <li>Programmer</li>
      </ul>

      <a
        className="mt-5 btn hover:cursor-pointer hover:translate-y-1 ease-in duration-100 shadow-custom"
        href="/Morizuq-Shoneye-CV.pdf"
        download
      >
        Get My CV
      </a>
    </div>
  );
}
