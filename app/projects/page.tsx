"use client";
import ApiCard from "@/components/apiCard";
import Card from "@/components/card";
import { useEffect, useState } from "react";

const cardObj = [
  {
    name: "Natours",
    link: "https://adventurous-pleat-foal.cyclic.app",
    img: "/natback1.png",
    gitlink: "https://github.com/Morizuq/Natours",
  },
  {
    name: "Natours-CSS",
    link: "https://css-nat.netlify.app",
    img: "/natours.png",
    gitlink: "https://github.com/Morizuq/Natours-css",
  },
  {
    name: "Nexter",
    link: "https://css-nat.netlify.app",
    img: "/nexter1.png",
    gitlink: "https://github.com/Morizuq/Nexter-css",
  },
  {
    name: "Trillio",
    link: "https://trillio-css.netlify.app",
    img: "/trillio.png",
    gitlink: "https://github.com/Morizuq/Trillo-css",
  },
];

export default function Projects() {
  const [repos, setRepos] = useState<any[]>([]);

  const fetchRepos = async () => {
    try {
      const data = await fetch(`https://api.github.com/users/Morizuq/repos`);
      const res = await data.json();
      setRepos(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const list = repos.slice(0, 4)
  return (
    <>
    <h1 className="text-center sm:text-4xl text-3xl grad uppercase">Projects</h1>
      <div className="p-8 flex flex-row flex-wrap justify-around">
        {cardObj.map((el) => (
          <Card {...el} />
        ))}
      </div>

      <h1 className="text-center uppercase">Github Repos</h1>
      <div className="p-8 flex flex-row flex-wrap justify-around">
        {list.map((el) => (
          <ApiCard {...el} />
        ))}
      </div>
    </>
  );
}
