import { emotionOptions } from "@/constants/emotion";

import {
  Select,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

interface EmotionSelectProps {
  value: string;
  onChange: () => void;
}

const EmotionSelect = ({ value, onChange }: EmotionSelectProps) => {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger>
        <SelectValue placeholder="Select your emotion" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {emotionOptions.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default EmotionSelect;
