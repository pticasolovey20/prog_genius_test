"use client";

import { useState } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerTitle,
  DrawerHeader,
  DrawerTrigger,
  DrawerContent,
  DrawerDescription,
} from "@/components/ui/drawer";

import EmotionForm from "@/components/form/EmotionForm";
import AddEmotionButton from "@/components/AddEmotionButton";

const EmotionModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleToggleOpen = (value: boolean) => setIsOpen(value);
  const handleClose = () => setIsOpen(false);

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={handleToggleOpen}>
        <DialogTrigger asChild>
          <AddEmotionButton classNames="mb-4" />
        </DialogTrigger>

        <DialogContent className="min-w-[600px] max-h-[calc(100dvh-50px)] flex flex-col">
          <DialogHeader className="gap-0 !text-center">
            <DialogTitle className="text-lg lg:text-xl">Emotion Form</DialogTitle>

            <DialogDescription className="text-base lg:text-lg">Manage your emotion here</DialogDescription>
          </DialogHeader>

          <EmotionForm onClose={handleClose} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={handleToggleOpen}>
      <DrawerTrigger asChild>
        <AddEmotionButton classNames="mb-4" />
      </DrawerTrigger>

      <DrawerContent className="max-h-[calc(100dvh-50px)] !h-auto">
        <DrawerHeader className="gap-0 !text-center">
          <DrawerTitle className="text-lg">Emotion Form</DrawerTitle>

          <DrawerDescription className="text-base">Manage your emotion here</DrawerDescription>
        </DrawerHeader>

        <EmotionForm onClose={handleClose} />
      </DrawerContent>
    </Drawer>
  );
};

export default EmotionModal;
