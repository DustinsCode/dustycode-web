import { z } from "zod";

export const contactFormSchema = z.object({
    user_name: z.string().min(1, "How will I know who is sending me a message without your name, friend?"),
    user_email: z.string().email("I need a valid email address to get back to you!"),
    message: z.string().min(2, "At least say Hi or something!")
});

export type ContactForm = z.infer<typeof contactFormSchema>;
