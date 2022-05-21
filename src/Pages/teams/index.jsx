/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import teamPic1 from "../../images/anoush.jpeg"
import teamPic2 from "../../images/WhatsApp Image 2022-04-30 at 1.21.35 AM.jpeg"
import teamPic3 from "../../images/yammna.jpeg"
import teamPic4 from "../../images/hasnain.jpeg"
import teamPic5 from "../../images/areeba.jpeg"
import teamPic6 from "../../images/bhawaludin.jpeg"
import teamPic7 from "../../images/mubashir.jpeg"
export const Teams = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our <span className="text-teal-500">Executive Team</span></h1>

            {/* <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
            </p> */}

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                <div className="shadow-2xl px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div className="flex flex-col sm:-mx-4 sm:flex-row">
                        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={teamPic1} alt="" />

                        <div className="mt-4 sm:mx-4 sm:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Anoosha Ali Mirza</h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Team Leader</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                    Hi! I am an undergrad microbiologist to be from JUW currently in my 3rd year. I love having abilities that I can use at all levels of practice and in a variety of situations, and I want to devote a portion of my time in helping others. I hope to make a difference in people's lives through this programme.
                        </p>

                    <div className="flex mt-4 -mx-2">

                        <a href="https://www.facebook.com/profile.php?id=100013020062996" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                            aria-label="Facebook">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                </path>
                            </svg>
                        </a>


                    </div>
                </div>

                <div className="shadow-2xl px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div className="flex flex-col sm:-mx-4 sm:flex-row">
                        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={teamPic5} alt="" />

                        <div className="mt-4 sm:mx-4 sm:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Areeba Ayub</h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Assistant leader</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                    Hi, I am an undergraduate Computer Engineer from NED UNIVERSITY. My long-term ambition is to work as a software developer in the IT sector of my country. My goal for this organisation is to build a platform where deserving students can learn the skills they need to succeed in their professional careers.
                        </p>

                    <div className="flex mt-4 -mx-2">

                        <a href="https://www.facebook.com/imareeba29" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                            aria-label="Facebook">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                </path>
                            </svg>
                        </a>


                    </div>
                </div>

                <div className="shadow-2xl px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div className="flex flex-col sm:-mx-4 sm:flex-row">
                        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={teamPic2} alt="" />

                        <div className="mt-4 sm:mx-4 sm:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Qamaruzaman</h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Team Member</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Hi there, This is me Qamauzaman.
                        Studying BE in Electronic domain from Dawood UET tenure (2019-2023).I believe good things take time, and things happen inflow. Hopefully, I will put  my 110% effort and leave the result on ALLAH ALMIGHTY.</p>

                    <div className="flex mt-4 -mx-2">

                        <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                            aria-label="Facebook">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                </path>
                            </svg>
                        </a>


                    </div>
                </div>

                <div className="shadow-2xl px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div className="flex flex-col sm:-mx-4 sm:flex-row">
                        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={teamPic3} alt="" />

                        <div className="mt-4 sm:mx-4 sm:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Yamna Raheel</h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Team Member</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Currently Doing Bachelor in Computer Science, I am a kind, loving, cheerful and perseverant person. I like to do creative things, i like to try challenging things, love traveling & nature things, like to explore new opportunities or experiences.</p>

                    <div className="flex mt-4 -mx-2">

                        <a href="https://www.facebook.com/amberien.raheel" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                            aria-label="Facebook">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                </path>
                            </svg>
                        </a>


                    </div>
                </div>

                <div className="shadow-2xl px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div className="flex flex-col sm:-mx-4 sm:flex-row">
                        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={teamPic4} alt="" />

                        <div className="mt-4 sm:mx-4 sm:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Hasnain Saeed</h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Team Member</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                        Software developer to be,I've worked with professional teams globally and developed large-scale applications like Management Systems, Point of Sales, E-commerce applications, etc.</p>

                    <div className="flex mt-4 -mx-2">

                        <a href="https://www.facebook.com/hasnainsaeed97" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                            aria-label="Facebook">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                </path>
                            </svg>
                        </a>


                    </div>
                </div>

                <div className="shadow-2xl px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div className="flex flex-col sm:-mx-4 sm:flex-row">
                        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={teamPic6} alt="" />

                        <div className="mt-4 sm:mx-4 sm:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Bahawal Din</h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Team Member</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                    Hi, I am an undergraduate student of BBA from Sindh University, Jamshoro. My life goal is to work for the humanity and Eco systems. My objective is to make students capable enough to develop necessary soft skills, which can help them to grow further. I envision to take this organisation to new heights.
                    </p>

                    <div className="flex mt-4 -mx-2">

                        <a href="https://www.facebook.com/profile.php?id=100045608954757" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                            aria-label="Facebook">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                </path>
                            </svg>
                        </a>


                    </div>
                </div>


                <div className="shadow-2xl px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div className="flex flex-col sm:-mx-4 sm:flex-row">
                        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={teamPic7} alt="" />

                        <div className="mt-4 sm:mx-4 sm:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Muhammad Mubashir</h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Team Member</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                    Hi, I am an undergrad Mechanical Engineering student from NED UNIVERSITY currently in fourth year. My goal for future is to excel in my field and work for the welfare of society. For me the Soft Skills Studio is a platform where I would utilize my abilities and skills for the nourishment of youth of this country.
                    </p>

                    <div className="flex mt-4 -mx-2">

                        <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                            aria-label="Facebook">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                </path>
                            </svg>
                        </a>


                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
