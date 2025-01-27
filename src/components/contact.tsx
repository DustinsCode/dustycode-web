import emailjs from "@emailjs/browser";
import { FieldApi, useForm } from "@tanstack/react-form";
import { contactFormSchema } from "../types/contact";

export default function Contact() {
    const form = useForm({
        defaultValues: {
            user_name: "",
            user_email: "",
            message: ""
        },
        onSubmit: async ({ value }) => {
            console.log(value);
            await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE_KEY,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                value,
                {
                    publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY
                }
            );
        },
        validators: {
            onChange: contactFormSchema
        }
    });

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-4 mx-5 w-full md:w-1/2 md:items-center">
                <h1 className="text-2xl text-left w-full">Contact</h1>
                <div className="bg-pinkish/50 rounded-lg p-2 divide-solid md:w-full">
                    <h1 className="text-xl text-left">Want to get in touch?</h1>
                    <p>
                        Need a website, web app, or just want to send me a kind
                        message? Here's where you can find me, or fill out the
                        form below!
                    </p>
                    <ul className="ml-4 my-4">
                        <li>
                            <a href="mailto:dustin@dustycode.dev">
                                <span className="flex gap-4 items-center">
                                    <img
                                        src="/mail.svg"
                                        alt="mail icon"
                                        className="size-4"
                                    />
                                    dustin@dustycode.dev
                                </span>
                            </a>
                        </li>
                        <li>
                            <span className="flex gap-4 items-center">
                                <a href="https://github.com/DustinsCode">
                                    <span className="flex gap-4 items-center">
                                        <img
                                            src="/github.svg"
                                            className="size-4"
                                            alt="github logo"
                                        />
                                        DustinsCode
                                    </span>
                                </a>
                                <span className="text-xs hidden 2xl:block">
                                    (if you happen to own the dustycode
                                    username, I'd be more than grateful to take
                                    it off of your hands)
                                </span>
                            </span>
                        </li>
                        <li className="flex gap-4 items-center">
                            <a href="https://bsky.app/profile/dustycode.dev">
                                <span className="flex gap-4 items-center">
                                    <img
                                        src="/bluesky.svg"
                                        className="size-4"
                                        alt="bluesky logo"
                                    />
                                    @dustycode.dev
                                </span>
                            </a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <a
                                href="https://www.linkedin.com/in/dustycode/"
                                target="_blank"
                            >
                                <span className="flex gap-4 items-center">
                                    <img
                                        src="/linkedin.svg"
                                        className="size-4"
                                        alt="linkedin logo"
                                    />
                                    in/dustycode
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bg-orangeish/50 rounded-lg p-4 divide-solid md:w-full">
                    <form
                        className="flex flex-col gap-1"
                        onSubmit={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            form.handleSubmit();
                        }}
                    >
                        <form.Field
                            name="user_name"
                            children={(field) => (
                                <>
                                    <label htmlFor={field.name}>Name:</label>
                                    <input
                                        placeholder="Atticus Finch"
                                        className="bg-white/30 rounded-lg p-1 placeholder:text-slate-500/90"
                                        id="name"
                                        name={field.name}
                                        value={field.state.value}
                                        onChange={(e) =>
                                            field.handleChange(e.target.value)
                                        }
                                        onBlur={field.handleBlur}
                                        type="text"
                                        required
                                        aria-required="true"
                                    />
                                    <FieldInfo field={field} />
                                </>
                            )}
                        />
                        <form.Field
                            name="user_email"
                            children={(field) => (
                                <>
                                    <label htmlFor={field.name}>Email:</label>
                                    <input
                                        placeholder="mockingbird@gmail.com"
                                        className="bg-white/30 rounded-lg p-1 placeholder:text-slate-500/90"
                                        id="email"
                                        name={field.name}
                                        value={field.state.value}
                                        onChange={(e) =>
                                            field.handleChange(e.target.value)
                                        }
                                        onBlur={field.handleBlur}
                                        type="email"
                                        required
                                        aria-required
                                    />
                                    <FieldInfo field={field} />
                                </>
                            )}
                        />

                        <form.Field
                            name="message"
                            children={(field) => (
                                <>
                                    <label htmlFor={field.name}>Message:</label>
                                    <textarea
                                        id="message"
                                        name={field.name}
                                        value={field.state.value}
                                        onChange={(e) =>
                                            field.handleChange(e.target.value)
                                        }
                                        onBlur={field.handleBlur}
                                        required
                                        aria-required
                                        className="bg-white/30 rounded-lg p-1 placeholder:text-slate-500/90 h-40"
                                    />
                                    <FieldInfo field={field} />
                                </>
                            )}
                        />
                        <form.Subscribe
                            selector={(state) => [
                                state.canSubmit,
                                state.isSubmitting,
                                state.isSubmitted
                            ]}
                            children={([
                                canSubmit,
                                isSubmitting,
                                isSubmitted
                            ]) => (
                                <button
                                    type="submit"
                                    disabled={!canSubmit || isSubmitted}
                                    className="p-3 rounded-sm bg-muted-green w-fit ml-auto"
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : isSubmitted
                                        ? "Sent!"
                                        : "Send!"}
                                </button>
                            )}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
    return (
        <>
            {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <em className="text-red-600">
                    {field.state.meta.errors.join(", ")}
                </em>
            ) : null}
        </>
    );
}
