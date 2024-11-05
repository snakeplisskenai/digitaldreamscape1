"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { StockAsset } from "@/types/stock";

interface StockCardProps {
  asset: StockAsset;
}

export function StockCard({ asset }: StockCardProps) {
  const stockUrl = `https://stock.adobe.com/images/${asset.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/${asset.id}`;

  return (
    <Card className="overflow-hidden group">
      <div className="relative aspect-video bg-muted">
        <Image
          src={asset.thumbnailUrl}
          alt={asset.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-sm line-clamp-2 mb-2">{asset.title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground">{asset.category}</span>
        </div>
        <Button asChild size="sm" className="w-full">
          <a
            href={stockUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            View on Adobe Stock
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </Card>
  );
}