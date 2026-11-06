import OverViewsCard from "./OverViewsCard";

const overviewsData = [
  {
    id: 1,
    title: "Page Views",
    social: "facebook",
    count: "87",
    statsTo: "up",
    statsPercent: "3",
  },
  {
    id: 2,
    title: "Likes",
    social: "facebook",
    count: "52",
    statsTo: "down",
    statsPercent: "2",
  },
  {
    id: 3,
    title: "Likes",
    social: "instagram",
    count: "5462",
    statsTo: "up",
    statsPercent: "2257",
  },
  {
    id: 4,
    title: "Profile Views",
    social: "instagram",
    count: "52k",
    statsTo: "up",
    statsPercent: "1375",
  },
  {
    id: 5,
    title: "Retweets",
    social: "twitter",
    count: "117",
    statsTo: "up",
    statsPercent: "303",
  },
  {
    id: 6,
    title: "Likes",
    social: "twitter",
    count: "507",
    statsTo: "up",
    statsPercent: "553",
  },
  {
    id: 7,
    title: "Likes",
    social: "youtube",
    count: "107",
    statsTo: "down",
    statsPercent: "19",
  },
  {
    id: 8,
    title: "Total Views",
    social: "youtube",
    count: "1407",
    statsTo: "down",
    statsPercent: "12",
  },
];

export default function SectionSecond() {
  return (
    <section>
      <div className="px-[24px] pb-[40px] w-full max-w-[1158px] mx-auto grid gap-[24px]">
        <h2 className="font-[700] text-[24px] text-[#63687D] dark:text-white">
          Overview - Today
        </h2>

        <div className="grid gap-[16px] sm:grid-cols-2 xl:grid-cols-4">
          {overviewsData.map((element) => (
            <OverViewsCard
              key={element.id}
              title={element.title}
              social={element.social}
              count={element.count}
              statsTo={element.statsTo}
              statsPercent={element.statsPercent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
