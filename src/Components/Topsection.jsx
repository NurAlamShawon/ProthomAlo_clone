import React, { useEffect, useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from "react-router";

const Topsection = () => {
  const [top, settop] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("/Top.json");
      const data = await res.json();
      settop(data);
    };

    fetchdata();
  }, []);

  return (
    <div className="max-w-7xl mx-auto xl:pt-6 pt-3 xl:pb-6 pb-5">
      <div className="flex items-center justify-between xl:px-0 px-4">
        <Link to="/">
          <div>
            <img
              src="https://i.postimg.cc/CdyDCGvD/image.png"
              alt=""
              className="xl:w-66  w-42 cursor-pointer"
            />
          </div>
        </Link>

        <div className="hidden xl:block">
          <div className="max-w-[812px] grid xl:grid-cols-3 gap-3">
            {top.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center p-1 ${
                  index < 2 ? "border-r border-gray-300" : ""
                }`}
              >
                <div className="w-16 h-16 overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt="thumbnail"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="ml-2">
                  <p className="text-sm text-black font-light line-clamp-2 overflow-hidden hover:text-blue-700">
                    <span className="align-start">
                      <FaRegPlayCircle className="inline text-red-600 text-sm mr-1" />
                    </span>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            enable-background="new 0 0 32 32"
            xml:space="preserve"
            class="DSRqc"
            className="size-6 mr-3"
          >
            <path
              fill-opacity="0.68"
              d="M25.2,27.067L17.733,19.6c-0.667,0.533-1.433,0.956-2.3,1.267c-0.867,0.311-1.789,0.467-2.767,0.467
c-2.422,0-4.472-0.839-6.15-2.517C4.839,17.139,4,15.089,4,12.667c0-2.422,0.839-4.472,2.517-6.15C8.194,4.839,10.244,4,12.667,4
c2.422,0,4.472,0.839,6.15,2.517c1.678,1.678,2.517,3.728,2.517,6.15c0,0.978-0.156,1.9-0.467,2.767
c-0.311,0.867-0.733,1.633-1.267,2.3l7.5,7.5c0.244,0.245,0.367,0.545,0.367,0.9c0,0.356-0.133,0.667-0.4,0.933
c-0.244,0.244-0.556,0.367-0.933,0.367C25.756,27.433,25.444,27.311,25.2,27.067z M12.667,18.667c1.667,0,3.083-0.583,4.25-1.75
c1.167-1.167,1.75-2.583,1.75-4.25c0-1.667-0.583-3.083-1.75-4.25c-1.167-1.167-2.583-1.75-4.25-1.75
c-1.667,0-3.083,0.583-4.25,1.75C7.25,9.583,6.667,11,6.667,12.667c0,1.667,0.583,3.083,1.75,4.25
C9.583,18.083,11,18.667,12.667,18.667z"
            ></path>
          </svg>
          <div className="flex items-center pl-4 border-l-1 border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              class="_8lu3j"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
              xml:space="preserve"
              className="size-6 mr-2"
            >
              <path
                fill-opacity="0.68"
                d="M12,12c0.904,0,1.788-0.264,2.54-0.758c0.752-0.494,1.338-1.197,1.684-2.019 c0.346-0.822,0.437-1.727,0.26-2.6c-0.176-0.873-0.612-1.675-1.251-2.304c-0.639-0.629-1.454-1.058-2.34-1.232 c-0.887-0.174-1.806-0.085-2.641,0.256C9.416,3.683,8.702,4.26,8.199,5C7.697,5.74,7.429,6.61,7.429,7.5 c0,0.591,0.118,1.176,0.348,1.722c0.23,0.546,0.566,1.042,0.991,1.46c0.425,0.418,0.928,0.749,1.483,0.976 C10.805,11.884,11.4,12,12,12z M15.2,13.125h-0.596c-0.816,0.37-1.705,0.562-2.603,0.562c-0.899,0-1.787-0.192-2.604-0.562H8.8 c-1.273,0-2.494,0.498-3.394,1.384C4.506,15.395,4,16.597,4,17.85v1.463c0,0.448,0.181,0.877,0.502,1.193 C4.824,20.822,5.26,21,5.714,21h12.571c0.455,0,0.891-0.178,1.212-0.494C19.819,20.189,20,19.76,20,19.312V17.85 c0-1.253-0.506-2.455-1.406-3.341C17.694,13.623,16.473,13.125,15.2,13.125z"
              ></path>
            </svg>
            <span classname="pl-10">Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topsection;
