import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwhUF2Nhc6YZauvzJUFBvV8CNHJa1ldSHQQ_MdU3b-_yQXFQ77"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Sandeep is a passionate React developer focused on building modern, responsive, and user-friendly web applications.
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Sandeep is a dedicated Full-Stack Web Developer specializing in the MERN stack, with a strong interest in creating smooth user experiences and efficient backend systems. He enjoys turning ideas into real-world projects that are both functional and visually appealing.
                        </p>
                        <p className="mt-4 text-gray-600">
                            With a continuous learning mindset, Sandeep works on improving his skills in React, JavaScript, and modern web technologies to build scalable and impactful digital solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}