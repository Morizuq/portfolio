import Card from "@/components/card";

const cardObj = [
  {
    name: "FiatPlug",
    link: "https://play.google.com/store/apps/details?id=com.eachblock.fiatplug",
    img: "/fiatplug-1.jpg",
    gitlink: "",
    isPrivate: true,
    isLive: true,
  },
  {
    name: "Regimen",
    link: "",
    img: "/regimen-2.jpg",
    gitlink: "",
    isPrivate: true,
    isLive: false,
  },
  {
    name: "Artisan",
    link: "",
    img: "/artisan-1.jpg",
    gitlink: "",
    isPrivate: true,
    isLive: false,
  },
];

export default function Projects() {
  return (
    <>
      <h1 className="text-center sm:text-4xl text-3xl grad uppercase">
        Projects
      </h1>
      <div className="p-8 flex flex-row flex-wrap justify-around">
        {cardObj.map((el) => (
          <Card {...el} />
        ))}
      </div>
    </>
  );
}
