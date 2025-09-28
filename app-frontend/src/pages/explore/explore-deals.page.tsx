import Banner from "@/pages/explore/banners";
import FeaturedCategories from "@/pages/explore/featured-categories";
import AdCards from "@/pages/explore/ad-cards";
import { ScrollArea } from "@/components/ui/scroll-area";
import PopularItems from "@/pages/explore/popular-items";

const ExploreDealsPage = () => {
  return (
    <ScrollArea className="flex-grow overflow-auto p-5">
      <div className="flex justify-between items-center flex-row gap-4 mx-2 mb-7">
        <div className="flex flex-row gap-4 items-start justify-center">
          <p className="text-3xl">{`Welcome`}</p>
          <p className="font-bold text-3xl">{"Aswajith"}</p>
        </div>
      </div>
      <Banner />
      <FeaturedCategories />
      <AdCards />
      <PopularItems />
    </ScrollArea>
  );
};

export default ExploreDealsPage;
