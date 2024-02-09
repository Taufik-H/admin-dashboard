import BlockChart from "@/components/molecules/block-cart";
import LineChart from "@/components/molecules/line-chart";
import Activity from "@/components/organisms/activity";
import InfoCard from "@/components/organisms/info-card";

export default function Home() {
  return (
    <main className="p-10 flex gap-5 flex-col lg:flex-row ">
      <div className="w-full flex flex-col gap-5 lg:h-[90vh]">
        <InfoCard />

        <LineChart />
      </div>
      <div className="">
        <BlockChart />
        <Activity />
      </div>
    </main>
  );
}
