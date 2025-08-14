"use client";
import { colorGradients, specialOffers } from "@/helper/constants";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
function AddCard({
  offer,
  index,
}: {
  offer: { heading: string; description: string; cta: string };
  index: number;
}) {
  const randomColor = colorGradients[index % colorGradients.length];
  return (
    <div
      className={`border border-gray-200 flex flex-col justify-end p-4 pt-24 min-w-[300px] rounded-lg text-white bg-gradient-to-br ${randomColor}`}
    >
      <h3 className="font-bold">{offer.heading}</h3>
      <p>{offer.description}</p>
      <button className="mt-2 bg-[#F1F1F1]/10 text-white py-1 px-4 rounded flex item-center gap-4 w-max">
        {offer.cta}
        <ExternalLink />
      </button>
    </div>
  );
}

export default function AdsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3;
  const totalCards = specialOffers.length;

  const offersLooped = [...specialOffers, ...specialOffers];

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const offset = -currentIndex * (100 / cardsPerView);

  return (
    <div className="relative p-4 rounded-xl border border-gray-200 space-y-4 bg-white">
      <div className="flex items-center justify-between">
        <h2 className="text-lg">Special Offers</h2>
        <div className="flex gap-4">
          <button
            className="border border-gray-300 p-2 rounded-lg hover:bg-gray-100 cursor-pointer hover:scale-105 transition-transform"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            className="border border-gray-300 p-2 rounded-lg hover:bg-gray-100 cursor-pointer hover:scale-105 transition-transform"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: `${offset}%` }}
          transition={{ type: "tween", duration: 0.5 }}
          onAnimationComplete={() => {
            if (currentIndex >= totalCards) {
              setCurrentIndex(currentIndex - totalCards);
            } else if (currentIndex < 0) {
              setCurrentIndex(currentIndex + totalCards);
            }
          }}
        >
          {offersLooped.map((offer, index) => (
            <AddCard key={index} offer={offer} index={index % totalCards} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
