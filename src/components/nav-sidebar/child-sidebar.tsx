// Next Imports
import Link from "next/link";

// React Imports
import React from "react";

type ChildMenusProps = {
  menuItems: Array<{ title: string; children?: Array<any> }>;
};


const ChildMenus: React.FC<ChildMenusProps> = ({ menuItems }) => {
  console.log("menu items", menuItems);
  return (
    <div className="h-[100vh] flex h-5/6 w-72 flex-col w-[250px] bg-white">
      <ul className="mt-12 flex flex-col">
        {menuItems &&
          menuItems.map((menuItem, index) => (
            <li key={index} className="relative transition">
              {menuItem.children ? (
                <React.Fragment>
                  <input
                    className="peer hidden"
                    type="checkbox"
                    id={`menu-${index}`}
                  />
                  <div className="relative m-2 flex items-center rounded-xl border-gray-300 bg-gray-50 pl-5 text-sm text-gray-500">
                    <span className="mr-5 flex w-5 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                    {menuItem.title}
                    <label
                      htmlFor={`menu-${index}`}
                      className="absolute inset-0 h-full w-full cursor-pointer"
                    ></label>
                  </div>
                  <ul className="duration-400 peer-checked:max-h-96 m-2 flex max-h-0 flex-col overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300">
                    {menuItem.children.map((child, childIndex) => (
                      <Link
                        href={child.path ? child.path : "/"}
                        data-tooltip-id={child.title}
                        data-tooltip-content={child.title}
                      >
                        <li
                          key={childIndex}
                          className="m-2 flex cursor-pointer rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-white"
                        >
                          <span className="mr-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </span>
                          {child.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </React.Fragment>
              ) : (
                <div className="relative m-2 flex cursor-pointer items-center rounded-xl py-3 pl-5 text-sm text-gray-500 hover:bg-gray-50">
                  <span className="mr-5 flex w-5 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <Link href={`/accounts${menuItem.path}`}>
                    {menuItem.title}
                  </Link>
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ChildMenus;
