import React from "react";
import { items } from "../data/projects";
import Link from "next/link";

const ProjectLinks = () => {
  return (
    <div>
      {" "}
      <h3 className="text-4xl font-semibold">Projects</h3>
      <div
        className="mt-4 lg:mt-6 text-xl flex flex-col gap-3
       underline  "
      >
        {items.map((item) => (
          <Link href={item.link} key={item.id}>
            <p
              className="hover:scale-110  transition duration-500
             ease-in-out"
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectLinks;
