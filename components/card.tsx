import { FaGithubAlt } from "react-icons/fa";
import { GoEye } from "react-icons/go";

interface CardT {
  name: string;
  link: string;
  isPrivate: boolean;
  isLive: boolean;
  img: string;
  gitlink: string;
}

export default function Card(props: CardT) {
  return (
    <div className="card flex mb-5 mr-4 justify-between hover:translate-y-2 ease-in duration-200">
      <div>
        <img src={props.img} alt={props.name} />
        <div className="flex mt-3">
          <a
            href={props.link}
            className="hover:scale-110 ease-in-out duration-500"
          >
            {props.name}
          </a>
          <div className="ml-auto">
            {props.isPrivate ? null : (
              <a href={props.gitlink} target="_blank" className="mr-2">
                <FaGithubAlt className="hover:text-[var(--color-primary)] hover:scale-125 ease-in-out duration-500" />
              </a>
            )}
            {props.isLive ? (
              <a href={props.link} target="_blank">
                <GoEye className="hover:text-[var(--color-primary)] hover:scale-125 ease-in-out duration-500" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
