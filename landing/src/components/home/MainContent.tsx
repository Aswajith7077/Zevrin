import TextType from "@/components/animations/TextType";
import { Button } from "@/components/ui/button";

const MainContent = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-7xl text-center font-bold mb-4 ">
        Manage credit, trade
      </h1>
      <div className="flex flex-row">
        <h1 className="text-7xl text-left font-bold mb-4 mr-2">goods</h1>
        <TextType
          text={[" easily.", " at all in one place."]}
          typingSpeed={90}
          pauseDuration={2500}
          showCursor={true}
          cursorCharacter="|"
          className="text-7xl text-center font-bold mb-4 "
        />
      </div>
      <p className="text-md py-10 text-center w-[60%]">
        {
          "An online platform to buy or sell everyday goods, manage your credit score, and receive AI-driven recommendations. Features include payment history tracking and connections with top dealers ."
        }
      </p>
      <Button className="text-[15px] py-5 px-8 rounded-full font-semibold cursor-pointer">
        Get Started
      </Button>
    </div>
  );
};

export default MainContent;
