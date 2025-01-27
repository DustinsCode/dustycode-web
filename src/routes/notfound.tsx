import { NavLink } from "react-router";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center mt-[50dvh] mb-[38dvh]">
            <h1>{"404 :("}</h1>
            <p>
                {"I'm not sure what you were trying to find. "}

                <NavLink to={"/"} className="hover:text-blue-600">
                    Return home?
                </NavLink>
            </p>
        </div>
    );
}
