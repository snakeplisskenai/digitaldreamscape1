import { StockCard } from "@/components/stock-card";
import type { StockAsset } from "@/types/stock";

interface StockGridProps {
  assets: StockAsset[];
}

export function StockGrid({ assets }: StockGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {assets.map((asset) => (
        <StockCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}