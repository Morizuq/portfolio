import { Courgette } from "next/font/google";

const courgette = Courgette({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${courgette.className} ms-5 me-4 mt-[45%]  lg:mt-[25%]`}>
      <p className="text-gold  mb-2">Hello! I am</p>
      <h1 className="text-4xl sm:text-5xl mb-6">Morizuq Shoneye</h1>
      <h3 className="text-1xl sm:text-2xl text-gold mb-2">
        Mobile Engineer
      </h3>
      <ul className="flex sm:flex-row sm:space-x-2 space-x-0 flex-col text-light text-space">
        <li>Flutter</li>
        <li>Kotlin</li>
        <li>Node.js</li>
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
