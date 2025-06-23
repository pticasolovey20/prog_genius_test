"use client";

import dynamic from "next/dynamic";
import { observer } from "mobx-react-lite";
import { useEffect, useMemo, useCallback } from "react";

import EmotionStore from "@/stores/EmotionStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import {
  useSensors,
  useSensor,
  PointerSensor,
  TouchSensor,
  DragEndEvent,
  DndContext,
  closestCorners,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";

import EmotionCard from "@/components/emotion/EmotionCard";

const EmptyBoard = dynamic(() => import("@/components/board/EmptyBoard"), { ssr: false });
const SortableContainer = dynamic(() => import("@/components/sortable/SortableContainer"), { ssr: false });
const SwipeableContainer = dynamic(() => import("@/components/swipeable/SwipeableContainer"), { ssr: false });

const EmotionBoard = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 8,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 200,
      tolerance: 8,
    },
  });

  const sensors = useSensors(pointerSensor, touchSensor);

  useEffect(() => {
    EmotionStore.getFromLocalStorage();
  }, []);

  const { emotions } = EmotionStore;

  const emotionCardIds = useMemo(() => {
    return emotions.map((emotion) => emotion.id);
  }, [emotions]);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (!over) return;

      if (active.id !== over.id) {
        const oldIndex = emotions.findIndex((emotion) => emotion.id === active.id);

        const newIndex = emotions.findIndex((emotion) => emotion.id === over.id);

        if (oldIndex === -1 || newIndex === -1) return;

        const newOrder = arrayMove(emotions, oldIndex, newIndex);
        EmotionStore.setEmotions(newOrder);
      }
    },

    [emotions]
  );

  const handleCardDelete = useCallback((id: string) => {
    EmotionStore.removeEmotion(id);
  }, []);

  if (emotions.length === 0) {
    return <EmptyBoard content="Oops! No emotion cards found. Add your first emotion card" />;
  }

  return isMobile ? (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
      <SortableContext items={emotionCardIds} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-4 w-full flex-1 overflow-hidden">
          {emotions.map((emotion) => (
            <SortableContainer key={emotion.id} id={emotion.id}>
              <SwipeableContainer id={emotion.id} onDelete={handleCardDelete}>
                <EmotionCard emotion={emotion} showDeleteButton={false} onDelete={handleCardDelete} />
              </SwipeableContainer>
            </SortableContainer>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {emotions.map((emotion) => (
        <EmotionCard key={emotion.id} emotion={emotion} onDelete={handleCardDelete} />
      ))}
    </div>
  );
};

export default observer(EmotionBoard);
