import EmotionCardModal from "@/components/EmotionCardModal";
import EmotionCardsBoard from "@/components/EmotionCardsBoard";

const HomePage = () => {
  const emotionCards = Array.from({ length: 20 }).map((_, index) => ({
    id: crypto.randomUUID(),
    emotion: `Emotion ${index + 1}`,
    comment: `Comment ${index + 1}`,
  }));

  return (
    <main className="min-h-[100dvh] h-full max-w-screen-xl w-full mx-auto p-4">
      <EmotionCardModal />
      <EmotionCardsBoard emotionCards={emotionCards} />
    </main>
  );
};

export default HomePage;
