export default function About() {
  return (
    <div className="min-[1060px]:absolute min-[1060px]:top-[50%] min-[1060px]:left-[50%] min-[1060px]:translate-y-[-50%] min-[1060px]:translate-x-[-50%] my-9 mx-auto glass w-[80%] min-[1060px]:w-auto p-[2rem] sm:p-[3rem] shadow-custom text-white">
      <h2 className="sm:text-4xl text-3xl text-center grad">About Me</h2>
      <p className="mb-4 mt-4">
      Mobile App Developer with 2+ years of experience crafting user-centric mobile applications. Adept at both independent and collaborative development, I have a proven track record of delivering innovative solutions across various domains, including FinTech. I thrive on tackling complex challenges and take pride in designing intuitive and engaging user experiences.
      </p>

      <p className="my-4">
        So if you're looking for a reliable, communicative, and passionate
        Mobile Engineer, <span className={`text-gold`}>I'm your guy!</span>
      </p>
    </div>
  );
}
