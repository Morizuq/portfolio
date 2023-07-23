import { courgette } from "../page";

export default function About() {
  return (
    <div className="min-[1060px]:absolute min-[1060px]:top-[50%] min-[1060px]:left-[50%] min-[1060px]:translate-y-[-50%] min-[1060px]:translate-x-[-50%] my-9 mx-auto glass w-[80%] min-[1060px]:w-auto p-[2rem] sm:p-[3rem] shadow-custom text-white">
      <h2 className="sm:text-4xl text-3xl text-center grad">About Me</h2>
      <p className="mb-4 mt-4">
        Hi, I am <span className="text-gold">Morizuq</span>, a Full Stack
        Developer with a strong skillset in{" "}
        <span className={courgette.className}>MERN Stack</span>,{" "}
        <span className={courgette.className}>Dart</span>,{" "}
        <span className={courgette.className}>Flutter</span>,{" "}
        <span className={courgette.className}>Golang</span>,{" "}
        <span className={courgette.className}>Nest.js</span>, and{" "}
        <span className={courgette.className}>Linux</span>. Communication is one
        of my strongest assets, which allows me to work seamlessly with my team
        members and clients. I'm always eager to learn new things, and my fast
        learning skills enable me to quickly adapt to new technologies and
        environments.
      </p>

      <p>
        As a Full Stack Developer, I'm always up for a challenge. I enjoy
        solving complex problems and coming up with innovative solutions to make
        our projects stand out. My willingness to learn and improve my skills
        allows me to take on even the toughest of projects with confidence.
      </p>

      <p className="my-4">
        So if you're looking for a reliable, communicative, and passionate
        Full Stack developer, <span className={`text-gold`}>I'm your guy!</span>
      </p>
    </div>
  );
}
