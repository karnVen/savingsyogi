import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const initialData = [
  { symbol: "Bitcoin", price: 43521.00, change: 2.34 },
  { symbol: "Apple", price: 189.45, change: 1.23 },
  { symbol: "Google", price: 141.80, change: -0.45 },
  { symbol: "Microsoft", price: 378.91, change: 0.67 },
  { symbol: "Tesla", price: 248.50, change: -1.50 },
  { symbol: "Amazon", price: 155.34, change: 1.89 },
  { symbol: "NVIDIA", price: 495.22, change: 3.45 },
  { symbol: "Meta", price: 358.30, change: 0.90 },
  { symbol: "NIFTY 50", price: 21750.50, change: 0.85 },
  { symbol: "RELIANCE", price: 2580.45, change: 1.20 },
  { symbol: "TCS", price: 3890.10, change: -0.45 },
  { symbol: "HDFCBANK", price: 1645.30, change: 0.15 },
  { symbol: "TATAMOTORS", price: 810.60, change: 2.34 },
  { symbol: "INFY", price: 1540.25, change: -1.12 },
  { symbol: "SBIN", price: 635.80, change: 1.05 },
  { symbol: "ZOMATO", price: 145.20, change: 3.45 },
];

const MarketTicker = () => {
  const [data, setData] = useState(initialData);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => ({
          ...item,
          change: Number((item.change + (Math.random() - 0.5) * 0.5).toFixed(2)),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const duplicatedData = [...data, ...data];

  return (
    <div className="w-full overflow-hidden bg-secondary/50 backdrop-blur-sm border-b border-border py-2">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedData.map((item, i) => (
          <div
            key={`${item.symbol}-${i}`}
            className="flex items-center gap-3 px-4"
          >
            <span className="font-mono font-semibold text-foreground">
              {item.symbol}
            </span>
            <span className="font-mono text-muted-foreground">${item.price}</span>
            <span
              className={`flex items-center gap-1 font-mono text-sm ${
                item.change >= 0 ? "text-primary" : "text-destructive"
              }`}
            >
              {item.change >= 0 ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {item.change >= 0 ? "+" : ""}
              {item.change}%
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarketTicker;
