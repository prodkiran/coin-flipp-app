import { useState } from "react";
import { Button } from "@/components/ui/button";

const CoinFlip = () => {
  const [result, setResult] = useState<"heads" | "tails" | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = () => {
    setIsFlipping(true);
    setResult(null);
    
    // Simulate coin flip after animation
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? "heads" : "tails";
      setResult(outcome);
      setIsFlipping(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-12 max-w-md">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
          COIN FLIP
        </h1>
        
        {/* Coin */}
        <div className="flex justify-center">
          <div 
            className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-foreground bg-background flex items-center justify-center text-2xl md:text-3xl font-bold transition-all duration-300 ${
              isFlipping ? "animate-flip" : ""
            } ${result ? "scale-110" : ""}`}
          >
            {isFlipping ? "COIN" : result ? (result === "heads" ? "H" : "T") : "?"}
          </div>
        </div>
        
        {/* Result */}
        <div className="h-16 flex items-center justify-center">
          {result && !isFlipping && (
            <p className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider animate-pulse-subtle">
              {result}
            </p>
          )}
        </div>
        
        {/* Flip Button */}
        <Button
          onClick={flipCoin}
          disabled={isFlipping}
          size="lg"
          className="w-full py-6 text-xl font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105 disabled:scale-100"
        >
          {isFlipping ? "FLIPPING..." : "FLIP COIN"}
        </Button>
      </div>
    </div>
  );
};

export default CoinFlip;