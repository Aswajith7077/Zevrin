import type { ListProductsResponseType } from "@/types/explore-deals.type";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/shadcn-base/skeleton";
import RetryCard from "@/components/retry-card";
import { useDealsQuery } from "@/hooks/queries/explore-deals/explore-deals.query";

type ProductCardPropType = {
  content: ListProductsResponseType;
};

export const ProductCard = ({ content }: ProductCardPropType) => {
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => {
        navigate("/home/products_view");
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="flex flex-col rounded-2xl border   justify-between"
    >
      <div className="w-full rounded-t-2xl p-10 bg-white">
        <img src={content.IMAGES} alt={content.BRAND} className="w-50 h-50" />
      </div>
      <h1 className="font-semibold px-5 pt-5">{content.BRAND}</h1>
      <h2 className="text-sm px-5 py-3">{content.NAME.slice(0, 70)}</h2>
      <div className="flex flex-row justify-between p-5">
        <h1 className="bg-[#e6007655] border-rose-700 border rounded-full px-5 py-2 w-fit text-sm">
          {content.STOCK === 0 ? "Out of Stock" : "InStock"}
        </h1>
        <h2 className="bg-clip-text text-xl  bg-gradient-to-br from-blue-500 to-cyan-300 ">
          {content.FINAL_PRICE + " " + content.CURRENCY}
        </h2>
      </div>
    </motion.div>
  );
};

const CardSkeleton = () => (
  <div className="flex flex-col rounded-2xl">
    <Skeleton className="rounded-2xl rounded-b-none w-full h-48" />
    <div className="p-5 space-y-3">
      <Skeleton className="w-2/3 h-4" />
      <Skeleton className="w-full h-4" />
      <Skeleton className="w-full h-4" />
      <div className="flex flex-row justify-between pt-2">
        <Skeleton className=" w-1/3 h-8" />
        <Skeleton className="w-1/4 h-8" />
      </div>
    </div>
  </div>
);

const PopularItems = () => {
  const { data, isLoading, isError, isRefetching, refetch } = useDealsQuery({
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col mx-2 mt-10">
        <Skeleton className="h-10 w-72" />
        <div className="grid grid-cols-4 gap-5 mt-10">
          {Array.from({ length: 12 }).map((_, key) => (
            <CardSkeleton key={key} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-10">
      {!isError && (
        <h1 className="font-semibold text-3xl mb-10">Popular Items</h1>
      )}
      <div className="grid grid-cols-4 gap-5">
        {isError ? (
          <RetryCard handleRetry={() => refetch()} isRetrying={isRefetching} />
        ) : data && data.length > 0 ? (
          data.map((value, key) => <ProductCard key={key} content={value} />)
        ) : (
          <div className="col-span-4 flex items-center justify-center h-64">
            <p>No popular items found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularItems;
