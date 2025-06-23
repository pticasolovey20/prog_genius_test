import { Routes } from "@/constants/routes";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackHomeButton = () => {
  return (
    <Link href={Routes.HOME}>
      <Button size="icon" variant="ghost" aria-label="Back to home link button">
        <ArrowLeft className="!h-5 !w-5" />
      </Button>
    </Link>
  );
};

export default BackHomeButton;
