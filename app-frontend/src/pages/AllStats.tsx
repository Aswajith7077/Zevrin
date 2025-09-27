import TransactionsTable from "@/components/data-grid/light";
import TransactionStats from "@/components/line-chart-2";
import CreditStats from "@/components/line-chart-7";
import StatisticCard1 from "@/components/statistic-card-1";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressCircle } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownNarrowWide, ArrowDownWideNarrow } from "lucide-react";
import { useId, useState } from "react";

type AllStatsFilterTabType = "All Stats" | "Trades" | "Deals";

const AllStatsFilter = () => {
  const id = useId();
  const [filterTab, setFilterTab] =
    useState<AllStatsFilterTabType>("All Stats");

  return (
    <section className="flex flex-row justify-between">
      <div className="flex flex-row gap-3">
        <Button
          variant={filterTab === "All Stats" ? "primary" : "ghost"}
          className={`text-base py-5 px-7 rounded-full }`}
          onClick={() => setFilterTab("All Stats")}
        >
          All Stats
        </Button>
        <Button
          variant={filterTab === "Trades" ? "primary" : "ghost"}
          className="text-base py-5 px-7 rounded-full"
          onClick={() => setFilterTab("Trades")}
        >
          Trades
        </Button>
        <Button
          variant={filterTab === "Deals" ? "primary" : "ghost"}
          className="text-base py-5 px-7 rounded-full"
          onClick={() => setFilterTab("Deals")}
        >
          Deals
        </Button>
      </div>
      <div className="flex flex-row gap-3">
        <Select defaultValue="1">
          <SelectTrigger
            id={id}
            className="bg-accent border-transparent shadow-none md:min-w-[200px]"
          >
            <SelectValue placeholder="Select Column" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">
              <div className="flex flex-row gap-3 items-center">
                <span>Id</span>
              </div>
            </SelectItem>
            <SelectItem value="2">
              <div className="flex flex-row gap-3 items-center">
                <span>Transaction Name</span>
              </div>
            </SelectItem>
            <SelectItem value="3">
              <div className="flex flex-row gap-3 items-center">
                <span>Trader</span>
              </div>
            </SelectItem>
            <SelectItem value="4">
              <div className="flex flex-row gap-3 items-center">
                <span>Dealer</span>
              </div>
            </SelectItem>
            <SelectItem value="5">
              <div className="flex flex-row gap-3 items-center">
                <span>Status</span>
              </div>
            </SelectItem>
            <SelectItem value="6">
              <div className="flex flex-row gap-3 items-center">
                <span>Worth</span>
              </div>
            </SelectItem>
            <SelectItem value="7">
              <div className="flex flex-row gap-3 items-center">
                <span>Signed Date</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="1">
          <SelectTrigger
            id={id}
            className="bg-accent border-transparent shadow-none "
          >
            <SelectValue placeholder="Select Sorting Order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">
              <div className="flex flex-row gap-3">
                <ArrowDownNarrowWide /> <span>Ascending</span>
              </div>
            </SelectItem>
            <SelectItem value="2">
              <div className="flex flex-row gap-3">
                <ArrowDownWideNarrow /> <span>Descending</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};

const AllStats = () => {
  return (
    <section className="flex flex-col gap-5 p-5">
      <div className="flex flex-col md:flex-row gap-5 ">
        <Card className="flex gap-4 w-full md:w-3/5 p-7 rounded-2xl bg-gradient-to-r from-background to-emerald-200">
          <h3 className="text-lg font-semibold">Welcome back, aswajiths</h3>
          <p className="text-2xl font-semibold">
            {"Let’s create something remarkable."}
          </p>
        </Card>
        <Card className="w-full md:w-2/5 p-5 rounded-2xl">
          <ProgressCircle
            value={58}
            size={60}
            strokeWidth={6}
            className="text-rose-500"
            indicatorClassName="text-fuchsia-500"
          >
            <div className="text-center">
              <div className="text-base font-bold">{Math.round(58)}%</div>
            </div>
          </ProgressCircle>
        </Card>
      </div>
      <StatisticCard1 />
      <div className="flex flex-row gap-5">
        <CreditStats />
        <TransactionStats />
      </div>
      <div className="flex flex-col py-5 gap-5 ">
        <AllStatsFilter />
        <TransactionsTable />
      </div>
    </section>
  );
};

export default AllStats;
