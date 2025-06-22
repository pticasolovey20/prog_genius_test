import * as zod from "zod";

export const EmotionFormSchema = zod.object({
  emotion: zod.string({ required_error: "Required field" }),

  comment: zod
    .string({ required_error: "Required field" })
    .max(50, { message: "Maximum length is 50" })
    .refine((value) => value.trim() === "" || value.trim().length >= 2, {
      message: "Minimum length is 2",
    }),
});
