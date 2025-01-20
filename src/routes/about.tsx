import { motion } from "motion/react";
import { useNavigate } from "react-router";

export default function About() {
    const navigate = useNavigate();

    return (
        <div className="flex w-dvw md:justify-center">
            <div className="flex flex-col gap-3 mx-5 w-full md:w-96 md:items-center">
                <div className="flex justify-center">
                    <img
                        src="src/assets/images/marby-and-i.jpg"
                        className="size-40 rounded-full"
                    />
                </div>
                <h1 className="text-2xl ">Me!</h1>

                <section className="bg-pinkish/50 rounded-lg p-2 divide-solid md:w-full">
                    <motion.img
                        className="h-9 -mt-8 ml-auto right-0 hover:cursor-pointer relative"
                        whileHover={{
                            scale: 2,
                            transition: {
                                repeat: Infinity,
                                duration: 0.5,
                                repeatType: "mirror",
                                ease: "easeInOut"
                            }
                        }}
                        onClick={() => {
                            navigate("/marby");
                        }}
                        src="src/assets/marby_icon.png"
                    />
                    <h2 className="text-xl">Fun Facts!</h2>
                    <ul className="list-disc pl-3">
                        <li>Musician</li>
                        <li>Snowboarder</li>
                        <li>Hiker</li>
                        <li>Video game enjoyer</li>
                        <li>
                            <span className="flex gap-3">Cat dad</span>
                        </li>
                    </ul>
                </section>
                <section className="bg-orangeish/50 rounded-lg p-2 md:w-full">
                    <h2 className="text-xl">Bio</h2>
                    <div className="pl-14 -indent-14">
                        <span className="font-bold mr-4">1996</span>
                        Born in Phoenix, AZ
                    </div>
                    <div className="pl-14 -indent-14">
                        <span className="font-bold mr-4">2000</span>
                        Moved to Michigan
                    </div>
                    <div className="pl-14 -indent-14">
                        <span className="font-bold mr-4">2019</span>
                        Completed Bachelor's Degree in Computer Science at Grand
                        Valley State University
                    </div>
                    <div className="pl-14 -indent-14">
                        <span className="font-bold mr-4">2019</span>
                        Worked at Ford Motor Company as a full stack software
                        engineer
                    </div>
                    <div className="pl-14 -indent-14">
                        <span className="font-bold mr-4">2023</span>
                        Working at Zenimax Online Studios as a full stack
                        software engineer
                    </div>
                </section>
            </div>
        </div>
    );
}
