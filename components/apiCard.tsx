import { FaGithubAlt } from "react-icons/fa";

interface ApiCardT {
  name: string;
  description: string;
  visibility: string;
  created_at: string;
  html_url: string;
}

export default function ApiCard(props: ApiCardT) {
  //   split the description into an array of words
  const desArr = `${props.description}`.split(" ");
  const newArr = [];
  // Loop through the areay and push the first 3 words intp the newArr then join
  for (let i = 0; i <= 2; i++) {
    newArr.push(desArr[i]);
  }
  const newDes = newArr.join(" ");
  return (
    <div className="glass card api-card mb-5 mr-4 hover:translate-y-2 ease-in duration-200">
      <h2 className="text-center text-xl mb-1">{props.name}</h2>
      <ul className="text-[.8rem]">
        <li className="mb-2">Description: {newDes}...</li>
        <li className="mb-1">Visibility: {props.visibility}</li>
        <li className="">Created At: {props.created_at}</li>
      </ul>
      <div className="flex mt-3">
        <a href={props.html_url} className="ml-auto mr-2" target="_blank">
          <FaGithubAlt className="hover:text-[var(--color-primary)] hover:scale-125 ease-in-out duration-500" />
        </a>
      </div>
    </div>
  );
}
