import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import emotionCardStore from "@/stores/EmotionStore";
import { EmotionFormFields } from "@/types/emotionTypes";
import { EmotionFormSchema } from "@/schemas/EmotionFormSchema";

import { Form, FormItem, FormField, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import EmotionSelect from "@/components/form/EmotionSelect";

interface EmotionFormProps {
  onClose: () => void;
}

const EmotionForm = ({ onClose }: EmotionFormProps) => {
  const emotionForm = useForm<EmotionFormFields>({
    mode: "onTouched",
    resolver: zodResolver(EmotionFormSchema),
  });

  const { handleSubmit, control } = emotionForm;

  const onSubmit = (formData: EmotionFormFields) => {
    emotionCardStore.addEmotionCard(formData);
    onClose();
  };

  return (
    <Form {...emotionForm}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6 p-4 md:p-0 md:px-2 mt-4 overflow-y-auto">
        <FormField
          control={control}
          name="emotion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

              <FormControl>
                <EmotionSelect value={field.value} onChange={field.onChange} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>

              <FormControl>
                <Textarea {...field} placeholder="Type your comment" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button size="lg" type="submit">
          Add Emotion
        </Button>
      </form>
    </Form>
  );
};

export default EmotionForm;
