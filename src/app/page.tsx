import { featureItems } from "@mocks/featured";
import { products } from "@mocks/products";
import { Banner } from "@src/features/home/Banner";
import { FeaturedProducts } from "@src/features/home/FeaturedProducts";
import { TopCategories } from "@src/features/home/TopCategories";


export default function Home() {
  return (
    <main >
      <Banner />
      <TopCategories categories={featureItems.topCategories} />
      <FeaturedProducts
        title={"Best Deals For You"}
        products={featureItems.bestDeals}
      />

      <FeaturedProducts
        title={"Most Selling Products"}
        products={featureItems.mostSellingProducts}
      />

      <FeaturedProducts
        title={"Trending Products"}
        products={featureItems.trendingProducts}
      />
    </main>
  )
}
