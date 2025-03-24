import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Project Card */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group hover:scale-105 transition-all bg-center bg-cover overflow-hidden "
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" ,height:"288px" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
          {description.length > 100 && (
            <button
              className="text-[#E1E1E1] ml-2 underline hover:text-white"
              onClick={toggleModal}
            >
              Read More
            </button>
          )}
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#181818] bg-opacity-80">
          <div className="bg-[#282828] text-white rounded-xl p-6 w-11/12 md:w-2/3 lg:w-1/2">
            {/* Modal Content */}
            <div
              className="h-64 md:h-96 rounded-t-xl mb-4"
              style={{
                background: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <h5 className="text-2xl font-semibold mb-4">{title}</h5>
            <p className="text-[#ADB7BE] mb-6">{description}</p>
            <div className="flex space-x-4 mb-6">
              <Link
                href={gitUrl}
                target="_blank"
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                <span className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-2 rounded-md opacity-0 group-hover/link:opacity-100 transition-opacity duration-300">
                  GitHub Link
                </span>
              </Link>
              <Link
                href={previewUrl}
                target="_blank"
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                <span className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-2 rounded-md opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 ">
                  Deployed Link
                </span>
              </Link>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-[#ADB7BE] hover:bg-white text-[#181818] py-2 px-4 rounded"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
