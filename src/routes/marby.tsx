import clsx from "clsx";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

type Photo = {
    src: string;
    alt: string;
    ratio: string;
};

export default function Marby() {
    const photos = [
        {
            src: "marby_1.jpg",
            alt: "Marby the cat in my lap with her tongue out",
            ratio: "9/16"
        },
        {
            src: "marby_2.png",
            alt: "Marby the cat standing up looking like she's dancing",
            ratio: "9/16"
        },
        {
            src: "marby_3.jpg",
            alt: "Marby the cat sitting with her tongue out a tiny bit",
            ratio: "16/9"
        },
        {
            src: "marby_4.jpg",
            alt: "Marby the cat looking majestic in the sunlight",
            ratio: "16/9"
        },
        {
            src: "marby_5.jpg",
            alt: "Marby the cat from directly above",
            ratio: "1/1"
        },
        {
            src: "marby_6.jpg",
            alt: "Marby the cat with her paws on someone's knee rubbing her head in their hand",
            ratio: "9/16"
        },
        {
            src: "marby_7.jpg",
            alt: "Marby the cat looking concerned while I am behind her with my mouth wide open",
            ratio: "1/1"
        },
        {
            src: "marby_8.jpg",
            alt: "Marby the cat close up with a sparkle in her eye and her tooth sticking out",
            ratio: "1/1"
        },
        {
            src: "marby_9.jpg",
            alt: "Marby the cat close up sniffing the camera and it's blurry",
            ratio: "16/9"
        }
    ];

    const [numCols, setNumCols] = useState(3);

    useEffect(() => {
        setNumCols(
            window.innerWidth >= 768 ? 3 : window.innerWidth >= 640 ? 2 : 1
        );
        const handleResize = () => {
            setNumCols(
                window.innerWidth >= 768 ? 3 : window.innerWidth >= 640 ? 2 : 1
            );
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function getCols() {
        let cols: Photo[][] = [];

        for (let i = 0; i < photos.length; i++) {
            if (!cols[i % numCols]) {
                cols.push([]);
            }
            cols[i % numCols].push(photos[i]);
        }

        return cols;
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <header className="md:text-2xl text-lg text-center">
                <h1>
                    Uh oh! You friggin dummy, you just got Marby'd!
                </h1>
                <nav>
                    <NavLink className='text-blue-900 hover:underline' to={'/'}>Return to safety?</NavLink>
                </nav>
            </header>
            <div className="flex gap-4 md:w-2/3 md:mx-0 mx-4">
                {getCols().map((col, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col basis-full gap-4"
                        >
                            {col.map((photo, index) => (
                                <div
                                    key={index}
                                    className={`aspect-${photo.ratio} overflow-hidden rounded-lg`}
                                >
                                    <img
                                        src={`src/assets/images/${photo.src}`}
                                        alt={photo.alt}
                                        className={clsx(
                                            photo.src === "marby_2.png"
                                                ? "animate-scale-x-back-forth"
                                                : "",
                                            "object-cover w-full h-full"
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
