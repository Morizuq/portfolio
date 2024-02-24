import { courgette } from "../page";

export default function About() {
  return (
    <div className="min-[1060px]:absolute min-[1060px]:top-[50%] min-[1060px]:left-[50%] min-[1060px]:translate-y-[-50%] min-[1060px]:translate-x-[-50%] my-9 mx-auto glass w-[80%] min-[1060px]:w-auto p-[2rem] sm:p-[3rem] shadow-custom text-white">
      <h2 className="sm:text-4xl text-3xl text-center grad">About Me</h2>
      <p className="mb-4 mt-4">
        With 2+ years in mobile software, I am a coding virtuso. Whether flying
        solo or in a team, I’ve shaped everything from simple to fin-tech apps.
        Challenges excite me, and my forte lies in creating captivating,
        user-friendly experiences.
      </p>

      {/* <p>
        I am always up for a challenge. I enjoy solving complex problems and
        coming up with innovative solutions to make our projects stand out. My
        willingness to learn and improve my skills allows me to take on even the
        toughest of projects with confidence.
      </p> */}

      <p className="my-4">
        So if you're looking for a reliable, communicative, and passionate
        Mobile Engineer, <span className={`text-gold`}>I'm your guy!</span>
      </p>
    </div>
  );
}
