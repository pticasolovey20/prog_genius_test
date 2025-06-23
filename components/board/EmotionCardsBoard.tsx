"use client";

import dynamic from "next/dynamic";
import { observer } from "mobx-react-lite";
import { useEffect, useMemo, useCallback } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import emotionCardStore from "@/stores/EmotionCardStore";

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

import EmotionCard from "@/components/card/EmotionCard";

const EmptyBoard = dynamic(() => import("@/components/board/EmptyBoard"), { ssr: false });
const SortableContainer = dynamic(() => import("@/components/sortable/SortableContainer"), { ssr: false });
const SwipeableContainer = dynamic(() => import("@/components/swipeable/SwipeableContainer"), { ssr: false });

const EmotionCardsBoard = () => {
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
        const oldIndex = emotionCards.findIndex((card) => card.id === active.id);

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

  if (emotionCards.length === 0) {
    return <EmptyBoard />;
  }

  return isMobile ? (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
      <SortableContext items={emotionCardIds} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-4 w-full flex-1 overflow-hidden">
          {emotionCards.map((card) => (
            <SortableContainer key={card.id} id={card.id}>
              <SwipeableContainer id={card.id} onDelete={handleCardDelete}>
                <EmotionCard emotionCard={card} showDeleteButton={false} onDelete={handleCardDelete} />
              </SwipeableContainer>
            </SortableContainer>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {emotionCards.map((card) => (
        <EmotionCard key={card.id} emotionCard={card} onDelete={handleCardDelete} />
      ))}
    </div>
  );
};

export default observer(EmotionCardsBoard);
