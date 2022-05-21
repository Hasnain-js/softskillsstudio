/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import heropic from "../../images/casual-life-3d-young-man-sitting-at-green-desk-and-raising-his-hand.png";
import aboutUs from "../../images/business-3d-colleagues-standing.png";

export const Home = () => {
  return (
    <>
      <div className="mx-auto px-4 py-16 bg-white dark:bg-gray-800">
        <div className="items-center justify-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
                We are not a teacher, but an awakener
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Teaching kids to count is fine, but teaching them what counts is
                best.
              </p>
              <p className="mt-2 mb-6 text-gray-600 dark:text-gray-400 font-bold">
                The best from amongst you is he who benefits the rest of mankind
                <br />
                <span className="font-light text-sm">- Muhammad (SAW)</span>
              </p>
              <Link
                to={"/blog"}
                className="w-full px-3 py-2 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-teal-600 rounded-md lg:w-auto hover:bg-teal-500 focus:outline-none focus:bg-teal-600 py-2.5"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/5">
            <img
              className="w-full h-full lg:max-w-2xl"
              src={heropic}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800">
        <div className=" container px-6 py-8 mx-auto">
          <div className="items-center lg:flex">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Organization's Goal
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md text-justify">
              Our organization's goal is to help youngsters develop soft skills, gain confidence before entering the workforce, and be sufficiently motivated to become amazing individuals in the future. We are willing to go to various organizations and schools and conduct activity based learning to help them develop communication, teamwork, problem solving, and other soft skills.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-end">
                <div className="max-w-lg">
                  <img
                    className="object-cover object-center w-full "
                    src={aboutUs}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
