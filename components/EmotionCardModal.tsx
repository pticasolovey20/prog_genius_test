"use client";

import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import AddEmotionButton from "@/components/AddEmotionButton";

const EmotionCardModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <AddEmotionButton />
        </DialogTrigger>

        <DialogContent className="min-w-[600px] max-h-[calc(100dvh-50px)] flex flex-col">
          <DialogHeader className="gap-0 !text-center">
            <DialogTitle className="text-lg lg:text-xl">
              Add emotion
            </DialogTitle>

            <DialogDescription className="text-base lg:text-lg">
              Manage your emotion here
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <AddEmotionButton />
      </DrawerTrigger>

      <DrawerContent className="max-h-[calc(100dvh-50px)] !h-auto">
        <DrawerHeader className="gap-0 !text-center">
          <DrawerTitle className="text-lg">Add emotion</DrawerTitle>

          <DrawerDescription className="text-base">
            Manage your emotion here
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default EmotionCardModal;
