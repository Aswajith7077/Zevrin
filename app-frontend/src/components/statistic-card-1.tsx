import { Badge } from "@/components/ui/shadcn-base/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn-base/card";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: 122380,
    delta: 15.1,
    lastMonth: 105922,
    positive: true,
    prefix: "",
    suffix: "",
  },
  {
    title: "Order Created",
    value: 1902380,
    delta: -2.0,
    lastMonth: 2002098,
    positive: false,
    prefix: "",
    suffix: "",
  },
  {
    title: "Organic Sales",
    value: 98100000,
    delta: 0.4,
    lastMonth: 97800000,
    positive: true,
    prefix: "$",
    suffix: "M",
    format: (v: number) => `$${(v / 1_000_000).toFixed(1)}M`,
    lastFormat: (v: number) => `$${(v / 1_000_000).toFixed(1)}M`,
  },
  {
    title: "Active Users",
    value: 48210,
    delta: 3.7,
    lastMonth: 46480,
    positive: true,
    prefix: "",
    suffix: "",
  },
];

function formatNumber(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return n.toLocaleString();
  return n.toString();
}

export default function StatisticCard1() {
  return (
    <div className="grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat, index) => (
        <Card key={index} className="p-1">
          <CardHeader className="border-0">
            <CardTitle className="text-muted-foreground text-base font-bold">
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-medium text-foreground tracking-tight">
                {stat.format
                  ? stat.format(stat.value)
                  : stat.prefix + formatNumber(stat.value) + stat.suffix}
              </span>
              <Badge
                variant={stat.positive ? "success" : "destructive"}
                appearance="light"
              >
                {stat.delta > 0 ? <ArrowUpRight /> : <ArrowDownRight />}
                {stat.delta}%
              </Badge>
            </div>
            <div className="text-xs text-muted-foreground mt-2 border-t pt-2.5">
              Vs last month:{" "}
              <span className="font-medium text-foreground">
                {stat.lastFormat
                  ? stat.lastFormat(stat.lastMonth)
                  : stat.prefix + formatNumber(stat.lastMonth) + stat.suffix}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
