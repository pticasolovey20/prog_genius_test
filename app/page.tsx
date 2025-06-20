import EmotionCardModal from "@/components/EmotionCardModal";
import EmotionCardsBoard from "@/components/EmotionCardsBoard";

const HomePage = () => {
  return (
    <main className="min-h-[100dvh] h-full max-w-screen-xl w-full mx-auto p-4">
      <EmotionCardModal />
      <EmotionCardsBoard />
    </main>
  );
};

export default HomePage;
