export default function Contact() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-4 mx-5 w-full md:w-1/2 md:items-center">
                <h1 className="text-2xl text-left w-full">Contact</h1>
                <div className="bg-pinkish/50 rounded-lg p-2 divide-solid md:w-full">
                    <h1 className="text-xl text-center">
                        Want to get in touch?
                    </h1>
                    <p>
                        Need a website, web app, or just want to send me a kind
                        message? <br />
                    </p>
                    <br />
                    <ul>
                        <li>
                            {/* TODO: add mail icon */}
                            <a href="mailto:dustin@dustycode.dev">
                                dustin@dustycode.dev
                            </a>
                        </li>
                        <li>
                            {/* TODO: add github icon */}
                            <a href="https://github.com/DustinsCode">
                                DustinsCode
                            </a>
                        </li>
                        <li>
                            {/* TODO: add bsky icon */}
                            <a href="https://bsky.app/profile/dustycode.dev">
                                @dustycode.dev
                            </a>
                        </li>
                        <li>
                            {/* TODO: add linkedin icon */}
                            <a
                                href="https://www.linkedin.com/in/dustycode/"
                                target="_blank"
                            >
                                in/dustycode
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bg-orangeish/50 rounded-lg p-4 divide-solid md:w-full">
                    <form className="flex flex-col gap-1">
                        <label htmlFor="name">Name:</label>
                        <input
                            placeholder="Atticus Finch"
                            className="bg-white/30 rounded-lg p-1 placeholder:text-slate-500/90"
                            id="name"
                            name="name"
                            type="text"
                            required
                            aria-required="true"
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            placeholder="mockingbird@gmail.com"
                            className="bg-white/30 rounded-lg p-1 placeholder:text-slate-500/90"
                            id="email"
                            name="email"
                            type="email"
                            required
                            aria-required
                        />

                        <label htmlFor="message">Message:</label>
                        <textarea className="bg-white/30 rounded-lg p-1 placeholder:text-slate-500/90 h-40" />
                    </form>
                </div>
            </div>
        </div>
    );
}
