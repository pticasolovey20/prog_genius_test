import { ReactNode } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

interface SortableContainerProps {
  id: string;
  children: ReactNode;
}

const SortableContainer = ({ id, children }: SortableContainerProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.9 : 1,
    cursor: isDragging ? "grabbing" : "grab",
    touchAction: "manipulation",
    zIndex: isDragging ? 1000 : "auto",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

export default SortableContainer;
