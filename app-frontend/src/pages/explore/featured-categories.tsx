import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/shadcn-base/card";
import type {
  CategoryButtonsPropType,
  CategoryType,
} from "@/types/explore-deals.type";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/shadcn-base/skeleton";
import { useFeaturedCategoriesQuery } from "@/hooks/queries/explore-deals/explore-deals.query";

const CategoryButtons = ({
  state,
  setState,
  data,
}: CategoryButtonsPropType) => {
  return (
    <div className="flex flex-row w-fit items-center gap-5">
      {data &&
        data.map((value, key) => {
          return (
            <Button
              variant={key === state ? "secondary" : "ghost"}
              key={key}
              onClick={() => setState(key)}
              className="cursor-pointer"
            >
              {value.title}
            </Button>
          );
        })}
    </div>
  );
};

const SubCategoryCard = ({ title, image, redirect_url }: CategoryType) => {
  return (
    <Link to={redirect_url} className="w-full">
      <Card
        className="relative h-90 w-full round-lg overflow-hidden drop-shadow-[0_0_1px_rgba(0,0,0,0.8)] bg-cover bg-center flex flex-col justify-end p-4"
        style={{ backgroundImage: `url(${image.image_url})` }}
      >
        <h1 className="text-white text-xl font-semibold drop-shadow">
          {title}
        </h1>
      </Card>
    </Link>
  );
};

const FeaturedCategories = () => {
  const [current, setCurrent] = useState<number>(0);

  const { data, isLoading, isError } = useFeaturedCategoriesQuery({
    refetchOnWindowFocus: false,
  });

  return isLoading ? (
    <div className="flex flex-col my-10 justify-center mx-2">
      <div className="flex flex-row justify-between items-center">
        <Skeleton className="h-10 w-72" />
        <div className="flex flex-row w-fit items-center gap-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton className="w-20 h-10" key={index} />
          ))}
        </div>
      </div>
      <section className="flex flex-row mt-10 h-[30vh] gap-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton className="w-1/5 h-full" key={index} />
        ))}
      </section>
    </div>
  ) : (
    !isError && (
      <div className="flex flex-col mt-10 justify-center ">
        <div className="flex flex-row justify-between">
          <h1 className="font-semibold text-4xl ">Featured Categories</h1>
          <CategoryButtons state={current} setState={setCurrent} data={data} />
        </div>
        <section className="flex flex-row mt-10 gap-5">
          {data &&
            data[current].sub_categories.map((category, key) => {
              return (
                <SubCategoryCard
                  key={key}
                  image={category.image}
                  redirect_url={category.redirect_url}
                  title={category.title}
                />
              );
            })}
        </section>
      </div>
    )
  );
};

export default FeaturedCategories;
