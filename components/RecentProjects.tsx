"use client";

import { FaMousePointer, FaSearch, FaClock, FaBrain } from "react-icons/fa";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const projectIcons = [
  FaMousePointer, // One-Click Unsubscribe Automation
  FaSearch,       // Smart Newsletter Detection
  FaClock,        // Clean Inbox in Minutes
  FaBrain         // AI-Powered Email Management
];

const RecentProjects = () => {
  return (
    <div className="py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
        Experience the genius of{" "}
        <span className="bg-white px-2 py-1 rounded text-black italic" style={{ fontFamily: 'Times New Roman, serif' }}>
          Intelligent System
        </span>
      </h1>
      <p className="text-center text-gray-400 text-sm max-w-xl mx-auto mb-8">
        Forward unwanted newsletters to unsub@unsubhero.com and watch the magic happen.
        Powerful email management built for modern inbox cleanup.
      </p>
      <div className="flex flex-wrap items-center justify-center p-4 gap-6">
        {projects.map((item, index) => {
          const IconComponent = projectIcons[index];
          return (
            <div
              className="lg:min-h-[28rem] h-[22rem] flex items-center justify-center sm:w-80 w-full max-w-sm"
              key={item.id}
            >
              <PinContainer
                title={item.title}
                href={item.link}
              >
                <div className="relative flex items-center justify-center sm:w-80 w-full overflow-hidden h-[16vh] lg:h-[24vh] mb-6">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <IconComponent className="text-white text-2xl" />
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="font-bold text-lg md:text-xl text-base line-clamp-1 text-center mb-2">
                  {item.title}
                </h1>

                <p
                  className="text-sm text-center"
                  style={{
                    color: "#BEC1DD",
                  }}
                >
                  {item.des}
                </p>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;