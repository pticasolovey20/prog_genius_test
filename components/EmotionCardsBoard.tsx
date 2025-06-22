"use client";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useMemo, useCallback } from "react";
import { observer } from "mobx-react-lite";

import {
  useSensors,
  useSensor,
  PointerSensor,
  TouchSensor,
  DragEndEvent,
  DndContext,
  closestCorners,
} from "@dnd-kit/core";

import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import emotionCardStore from "@/stores/EmotionCardStore";

import EmotionCard from "@/components/card/EmotionCard";
import SortableContainer from "@/components/sortable/SortableContainer";
import SwipeableContainer from "@/components/swipeable/SwipeableContainer";

const EmotionCardsBoard = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const pointerSensor = useSensor(PointerSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(pointerSensor, touchSensor);

  const { emotionCards } = emotionCardStore;

  useEffect(() => {
    emotionCardStore.getFromLocalStorage();
  }, []);

  const emotionCardIds = useMemo(() => {
    return emotionCards.map((card) => card.id);
  }, [emotionCards]);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (!over) return;

      if (active.id !== over.id) {
        const oldIndex = emotionCards.findIndex(
          (card) => card.id === active.id
        );

        const newIndex = emotionCards.findIndex((card) => card.id === over.id);

        if (oldIndex === -1 || newIndex === -1) return;

        const newOrder = arrayMove(emotionCards, oldIndex, newIndex);
        emotionCardStore.setEmotionCards(newOrder);
      }
    },
    [emotionCards]
  );

  const handleCardDelete = useCallback((id: string) => {
    emotionCardStore.removeEmotionCard(id);
  }, []);

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
    >
      <SortableContext
        items={emotionCardIds}
        strategy={verticalListSortingStrategy}
      >
        <div
          className={cn(
            "flex-1 w-full mt-4 overflow-hidden",
            isMobile
              ? "flex flex-col gap-4"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          )}
        >
          {emotionCards.map((emotionCard) => {
            return isMobile ? (
              <SortableContainer key={emotionCard.id} id={emotionCard.id}>
                <SwipeableContainer
                  id={emotionCard.id}
                  onDelete={handleCardDelete}
                >
                  <EmotionCard
                    emotionCard={emotionCard}
                    showDeleteButton={!isMobile}
                    onDelete={handleCardDelete}
                  />
                </SwipeableContainer>
              </SortableContainer>
            ) : (
              <EmotionCard
                emotionCard={emotionCard}
                onDelete={handleCardDelete}
              />
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default observer(EmotionCardsBoard);
