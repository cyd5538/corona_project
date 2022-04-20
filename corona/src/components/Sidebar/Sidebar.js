import { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { MdOutlineCoronavirus } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { GiLoveInjection, GiWorld } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "국내코로나", icon: <MdOutlineCoronavirus />, path: "/Korea" },
    { title: "지역별코로나", icon: <GoLocation />, path: "/location" },
    { title: "전세계코로나", icon: <GiWorld />, path: "/world" },
    { title: "백신현황", icon: <GiLoveInjection />, path: "/vaccine" },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 w-72 h-screen p-5 pt-8 bg-gradient-to-r from-blue-300 to-cyan-300   relative`}
      >
        <BsArrowLeftCircle
          className={`text-4xl absolute cursor-pointer -right-3 text-white top-3 w-7 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="ml-2 mt-2 flex gap-x-4 items-center ">
          <Link to="">
            {!open ? (
              <AiOutlineHome className="text-3xl font-bold text-white" />
            ) : (
              <h1
                className={`text-white origin-left font-medium text-4xl duration-300 ${
                  !open && "scale-0"
                }`}
              >
                Corona
              </h1>
            )}
          </Link>
        </div>
        <ul className="pt-6 mt-7">
          {Menus.map((menu, index) => (
            <li
              path={menu.path}
              key={index}
              className={`mb-3 text-gray-300 text-sm flex items-center gap-x-4  cursor-pointer p-2 hover:bg-light-white rounded-md`}
            >
              <Link className="flex" to={menu.path}>
                <div className="text-3xl font-bold text-white">{menu.icon}</div>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 font-bold text-2xl text-white ml-3  `}
                >
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
