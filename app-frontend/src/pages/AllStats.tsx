import TransactionsTable from "@/components/data-grid/stripped";
import TransactionStats from "@/components/line-chart-2";
import CreditStats from "@/components/line-chart-7";
import StatisticCard1 from "@/components/statistic-card-1";
import { Card } from "@/components/ui/card";
import { ProgressCircle } from "@/components/ui/progress";

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
      {/* <Card className="p-8"> */}
      <div className="p-5">
        <TransactionsTable />
      </div>
      {/* </Card> */}
    </section>
  );
};

export default AllStats;
