import { Suspense } from "react";
import { fetchStockAssets } from "@/lib/adobe-stock";
import { StockGrid } from "@/components/stock-grid";
import { Loader } from "@/components/loader";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const assets = await fetchStockAssets();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Adobe Stock Portfolio</h1>
        <p className="text-muted-foreground">
          Browse through our collection of high-quality stock photos
        </p>
      </div>
      
      <Suspense fallback={<Loader />}>
        {assets.length > 0 ? (
          <StockGrid assets={assets} />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No images found. Please check your Adobe Stock API configuration.</p>
          </div>
        )}
      </Suspense>
    </main>
  );
}