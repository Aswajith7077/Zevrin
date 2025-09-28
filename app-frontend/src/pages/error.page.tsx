import { Button } from "@/components/ui/shadcn-base/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="flex flex-row h-screen justify-center">
      <div className="flex flex-col gap-5 w-1/2 h-full border items-start justify-center p-[10%]">
        <h1 className="text-6xl font-bold text-center">{"404 Error"}</h1>
        <p className="text-left ">
          {
            "It seems that the page you are looking for does not exists or has been removed. Don't worry, let's get you back on track!"
          }
        </p>
        <Link to="/stats">
          <Button className="">
            Back to Home <ArrowUpRight size={20} />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-10 w-1/2"></div>
    </section>
  );
};

export default ErrorPage;
