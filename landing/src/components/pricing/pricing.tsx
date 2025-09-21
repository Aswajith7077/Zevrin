"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import React from "react";
import { Switch } from "../ui/switch";

const PricingContents = {
  Monthly: {
    traders: [
      {
        title: "Free",
        description:
          "For traders exploring Zevrin with limited tools and dealer access.",
        price: "$0",
        url: "#",
        isPopular: false,
        benefits: [
          "Trade Limit: $1,500",
          "Access to Basic Dealers",
          "Lite AI Trade Suggestions",
          "Credit Score Tracking (no boosts)",
          "Basic Analytics Dashboard",
          "Email & Chat Support",
          "Workflow Integrations (Basic: Gmail, Calendar)",
        ],
      },
      {
        title: "Pro",
        description:
          "For active traders who want higher trade limits, better AI, and stronger dealer access.",
        url: "#",
        price: "$39",
        isPopular: true,
        benefits: [
          "Trade Limit: $100,000",
          "Access to Pro & Tier-3 Dealers",
          "Advanced AI Trade Suggestions & Risk Analyzer",
          "1.5x Credit Score Boosts",
          "Community Forum Access",
          "Developer Tools",
          "Workflow Integrations (Zoom, Teams, Slack, Discord, Notion)",
          "AI Document Summarizer for contracts & deal rules",
          "Statistical Insights (Profit, Growth, Transaction Reports)",
        ],
      },
      {
        title: "Premium",
        description:
          "For elite traders with unlimited trade access, legendary dealer connections, and full AI support.",
        url: "#",
        price: "$99",
        isPopular: false,
        benefits: [
          "Unlimited Trade Limit (above $100,000)",
          "Access to All Dealers (Including Legendary)",
          "Premium AI Suite: Predictive Insights, Matchmaking, Negotiation Assistant",
          "2x - 5x Credit Score Boosts",
          "Exclusive Rewards: Cashback, Travel Perks, Amazon Vouchers",
          "Priority 24/7 Support",
          "Workflow AI Companion (Smart Scheduling & Notifications)",
          "Full Social Media & App Integrations",
        ],
      },
    ],
    dealers: [
      {
        title: "Basic",
        description:
          "For new dealers starting out, showcasing products with limited reach.",
        url: "#",
        price: "$0",
        isPopular: false,
        benefits: [
          "Upload Products (Basic Gallery)",
          "Visible to Basic Traders Only",
          "AI Product Listings (Text-based optimization)",
          "Standard Dealer Profile",
          "Community Access",
        ],
      },
      {
        title: "Platinum",
        description:
          "For growing dealers who want better visibility and AI tools for product showcasing.",
        url: "#",
        price: "$49",
        isPopular: true,
        benefits: [
          "Expanded Product Catalog",
          "Visible to Pro Traders & Tier-3 Networks",
          "AI Product Visuals (Basic templates)",
          "AI Dealer Profile Optimizer",
          "Trade Limit Support: Up to $100,000 per trade",
          "Workflow Integrations (Slack, Notion, Gmail)",
          "Transaction Analytics Dashboard",
        ],
      },
      {
        title: "Enterprise",
        description:
          "For premium dealers aiming for global exposure, brand-quality visuals, and legendary trader access.",
        url: "#",
        price: "$149",
        isPopular: false,
        benefits: [
          "Unlimited Product Listings",
          "Visible to All Traders (Including Legendary)",
          "Premium AI Visuals (veo3/nano banana for product showcase)",
          "AI Catalog Builder (Auto brochures & branded materials)",
          "Global Dealer Search Optimization",
          "Trade Limit Support: Above $100,000 per trade",
          "Full Workflow Integrations & Smart Notifications",
          "Priority Dealer Support",
        ],
      },
    ],
  },
  Yearly: {
    traders: [
      {
        title: "Free",
        description:
          "For traders exploring Zevrin with limited tools and dealer access.",
        url: "#",
        price: "$0",
        isPopular: false,
        benefits: [
          "Trade Limit: $1,500",
          "Access to Basic Dealers",
          "Lite AI Trade Suggestions",
          "Credit Score Tracking (no boosts)",
          "Basic Analytics Dashboard",
          "Email & Chat Support",
          "Workflow Integrations (Basic: Gmail, Calendar)",
        ],
      },
      {
        title: "Pro",
        description:
          "For active traders who want higher trade limits, better AI, and stronger dealer access.",
        url: "#",
        price: "$399",
        isPopular: true,
        benefits: [
          "Trade Limit: $100,000",
          "Access to Pro & Tier-3 Dealers",
          "Advanced AI Trade Suggestions & Risk Analyzer",
          "1.5x Credit Score Boosts",
          "Community Forum Access",
          "Developer Tools",
          "Workflow Integrations (Zoom, Teams, Slack, Discord, Notion)",
          "AI Document Summarizer for contracts & deal rules",
          "Statistical Insights (Profit, Growth, Transaction Reports)",
        ],
      },
      {
        title: "Premium",
        description:
          "For elite traders with unlimited trade access, legendary dealer connections, and full AI support.",
        url: "#",
        price: "$1299",
        isPopular: false,
        benefits: [
          "Unlimited Trade Limit (above $100,000)",
          "Access to All Dealers (Including Legendary)",
          "Premium AI Suite: Predictive Insights, Matchmaking, Negotiation Assistant",
          "2x - 5x Credit Score Boosts",
          "Exclusive Rewards: Cashback, Travel Perks, Amazon Vouchers",
          "Priority 24/7 Support",
          "Workflow AI Companion (Smart Scheduling & Notifications)",
          "Full Social Media & App Integrations",
        ],
      },
    ],
    dealers: [
      {
        title: "Basic",
        description:
          "For new dealers starting out, showcasing products with limited reach.",
        url: "#",
        price: "$0",
        isPopular: false,
        benefits: [
          "Upload Products (Basic Gallery)",
          "Visible to Basic Traders Only",
          "AI Product Listings (Text-based optimization)",
          "Standard Dealer Profile",
          "Community Access",
        ],
      },
      {
        title: "Platinum",
        description:
          "For growing dealers who want better visibility and AI tools for product showcasing.",
        url: "#",
        price: "$49",
        isPopular: true,
        benefits: [
          "Expanded Product Catalog",
          "Visible to Pro Traders & Tier-3 Networks",
          "AI Product Visuals (Basic templates)",
          "AI Dealer Profile Optimizer",
          "Trade Limit Support: Up to $100,000 per trade",
          "Workflow Integrations (Slack, Notion, Gmail)",
          "Transaction Analytics Dashboard",
        ],
      },
      {
        title: "Enterprise",
        description:
          "For premium dealers aiming for global exposure, brand-quality visuals, and legendary trader access.",
        url: "#",
        price: "Custom",
        isPopular: true,
        benefits: [
          "Unlimited Product Listings",
          "Visible to All Traders (Including Legendary)",
          "Premium AI Visuals (veo3/nano banana for product showcase)",
          "AI Catalog Builder (Auto brochures & branded materials)",
          "Global Dealer Search Optimization",
          "Trade Limit Support: Above $100,000 per trade",
          "Full Workflow Integrations & Smart Notifications",
          "Priority Dealer Support",
        ],
      },
    ],
  },
};

interface MonthlyPricingProps {
  isDealer: boolean;
}

interface YearlyPricingProps {
  isDealer: boolean;
}

const getPricingStyle = (title: string) => {
  return title === "Platinum" || title === "Pro"
    ? "border-[2px] border-cyan-500 shadow-[0_0_20px_2px_rgba(14,211,233,0.5)]"
    : title === "Enterprise" || title === "Premium"
      ? "border-amber-400 border-4 shadow-[0_0_25px_4px_rgba(251,191,36,0.6)]"
      : "";
};

const MonthlyPricing = ({ isDealer }: MonthlyPricingProps) => {
  return (
    <TabsContent value="tab-1" className="flex flex-row gap-10 w-full">
      {PricingContents.Monthly[isDealer ? "dealers" : "traders"].map(
        (plan, plan_index: number) => (
          <Card
            key={plan_index}
            className={`rounded-3xl w-1/3 bg-gradient-to-bl from-slate-900 to-slate-950 ${getPricingStyle(
              plan.title,
            )}`}
          >
            <CardHeader>
              <CardTitle className="font-lg">{plan.title}</CardTitle>
              <span className="my-3 block text-5xl font-bold">
                {plan.price}
              </span>
              <CardDescription className="text-sm">{`Per month`}</CardDescription>
              <CardDescription className="text-gray-200 mt-5">
                {plan.description}
              </CardDescription>
              <Button asChild variant="default" className="mt-4 w-full">
                <Link href={plan.url}>Get Started</Link>
              </Button>
            </CardHeader>

            <CardContent className="my-5 space-y-10">
              <div className="relative flex items-center">
                <div className="flex-grow border-t border-dashed" />
                <span className="mx-3 text-sm font-medium text-gray-400">
                  Features
                </span>
                <div className="flex-grow border-t border-dashed" />
              </div>

              <ul className="list-outside space-y-3 text-sm">
                {plan.benefits.map((benefit, benefit_index: number) => (
                  <li key={benefit_index} className="flex items-start gap-2">
                    <ArrowRight className="size-6 w-[10%] text-emerald-700" />
                    <div className="w-[90%]">{benefit}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ),
      )}
    </TabsContent>
  );
};

const YearlyPricing = ({ isDealer }: YearlyPricingProps) => {
  return (
    <TabsContent value="tab-2" className="flex flex-row gap-10 w-full">
      {PricingContents.Yearly[isDealer ? "dealers" : "traders"].map(
        (plan, plan_index: number) => (
          <Card
            key={plan_index}
            className={`rounded-3xl w-1/3 bg-gradient-to-bl from-slate-900 to-slate-950 ${getPricingStyle(
              plan.title,
            )}`}
          >
            <CardHeader>
              <CardTitle className="font-lg">{plan.title}</CardTitle>
              <span className="my-3 block text-5xl font-bold">
                {plan.price}
              </span>
              <CardDescription className="text-sm">{`Per year`}</CardDescription>
              <CardDescription className="text-gray-200 mt-5">
                {plan.description}
              </CardDescription>
              <Button asChild variant="default" className="mt-4 w-full">
                <Link href={plan.url}>Get Started</Link>
              </Button>
            </CardHeader>

            <CardContent className="my-5 space-y-10">
              <div className="relative flex items-center">
                <div className="flex-grow border-t border-dashed" />
                <span className="mx-3 text-sm font-medium text-gray-400">
                  Features
                </span>
                <div className="flex-grow border-t border-dashed" />
              </div>

              <ul className="list-outside space-y-3 text-sm">
                {plan.benefits.map((benefit, benefit_index: number) => (
                  <li key={benefit_index} className="flex items-start gap-2">
                    <ArrowRight className="size-6 w-[10%] text-emerald-700" />
                    <div className="w-[90%]">{benefit}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ),
      )}
    </TabsContent>
  );
};

export default function Pricing() {
  const id = React.useId();
  const [isDealer, setIsDealer] = React.useState(false);

  return (
    <section className="py-10 md:py-32 pb-20">
      <div className="mx-auto max-w-[75vw] px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Pricing that Scales with You
          </h1>
          <p>
            Gemini is evolving to be more than just the models. It supports an
            entire to the APIs and platforms helping developers and businesses
            innovate.
          </p>
          <div className="flex flex-row items-center gap-4">
            <span
              id={`${id}-off`}
              className="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-bold"
              aria-controls={id}
              onClick={() => setIsDealer(false)}
            >
              Traders
            </span>
            <Switch
              id={id}
              checked={isDealer}
              onCheckedChange={setIsDealer}
              aria-labelledby={`${id}-off ${id}-on`}
            />
            <span
              id={`${id}-on`}
              className="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
              onClick={() => setIsDealer(true)}
            >
              Dealers
            </span>
          </div>
        </div>
        <div className="flex flex-col py-10 gap-10">
          <Tabs
            defaultValue="tab-1"
            className="flex flex-col gap-5 max-w-[75vw] mx-auto"
          >
            <TabsList className="bg-transparent gap-2">
              <TabsTrigger
                value="tab-1"
                className="bg-none px-8 py-3  data-[state=active]:bg-slate-900 data-[state=active]:shadow-none"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="bg-none  px-8 py-3 data-[state=active]:bg-slate-900 data-[state=active]:shadow-none"
              >
                Yearly
              </TabsTrigger>
            </TabsList>
            <MonthlyPricing isDealer={isDealer} />
            <YearlyPricing isDealer={isDealer} />
          </Tabs>
        </div>
      </div>
    </section>
  );
}
