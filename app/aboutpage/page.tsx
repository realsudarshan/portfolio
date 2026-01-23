"use client"
import React from 'react';
import AboutBox from '../../components/aboutbox';

const About = () => {
    const showResume = async () => {
        window?.open('/resume.pdf', '_blank');
    }

    return (
        <section className="flex flex-col gap-5 justify-between items-center py-12 px-4">
            <div>
                <h2 className="text-3xl font-bold mb-8">About Me</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-5xl w-full">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <img
                        src="/sudarshan.jpg"
                        alt="my img"
                        className="rounded-full w-[200px] h-[200px] object-cover shadow-lg"
                    />
                </div>

                {/* About Content Card */}
                <div className="relative p-8 bg-white dark:bg-gray-800 shadow-xl rounded-2xl w-full
                                before:content-[''] before:absolute before:hidden lg:before:block
                                before:top-[20%] before:-left-3 before:border-t-[10px] before:border-t-transparent 
                                before:border-b-[10px] before:border-b-transparent 
                                before:border-right-[15px] before:border-r-white dark:before:border-r-gray-800">
                    
                    {/* Mobile Arrow (Top) */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-bottom-[10px] border-b-white dark:border-b-gray-800 lg:hidden"></div>

                    <div className="text-justify">
                        <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            Hello! I'm Sudarshan, and I'm based in Kathmandu, Nepal. I am currently studying at National College of Engineering at Lalitpur, Nepal.<br /><br />
                            Reflecting on my journey so far, I can honestly say it's been a beautiful ride and I hope to grow even further as Software Engineer. My current focus these days
                            is on expanding my portfolio by building more projects that I can add on here, as well as being a great team player at my current role.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>

                        <ul className="grid grid-cols-2 gap-y-2 mb-6">
                            {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Postgres SQL', 'NextJS'].map((skill) => (
                                <li key={skill} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green-500">
                                    {skill}
                                </li>
                            ))}
                        </ul>

                        <button 
                            onClick={showResume}
                            className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium py-2.5 px-6 rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </div>

            {/* AboutBox Stats Section */}
            <div className="w-full mt-16">
                <AboutBox />
            </div>
        </section>
    );
}

export default About;