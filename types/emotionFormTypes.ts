import * as zod from "zod";

import { EmotionFormSchema } from "@/schemas/EmotionFormSchema";

export type EmotionFormFields = zod.infer<typeof EmotionFormSchema>;
