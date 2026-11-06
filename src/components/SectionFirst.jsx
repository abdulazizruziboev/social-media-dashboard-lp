import TopFollowersCard from "./TopFollowersCard";
const topFollowersData = [
  {
    id: 1,
    accentColor: "#178FF5",
    social: "facebook",
    username: "@nathanf",
    subscribers: "1987",
    subscribersText: "followers",
    statsTo: "up",
    statsNum: "12",
  },
  {
    id: 2,
    accentColor: "#1CA0F2",
    social: "twitter",
    username: "@nathanf",
    subscribers: "1044",
    subscribersText: "followers",
    statsTo: "up",
    statsNum: "99",
  },
  {
    id: 3,
    accentColor: "linear-gradient(90deg, #FDC468, #DF4996)",
    social: "instagram",
    username: "@realnathanf",
    subscribers: "11k",
    subscribersText: "followers",
    statsTo: "up",
    statsNum: "1099",
  },
  {
    id: 4,
    accentColor: "#C4032A",
    social: "youtube",
    username: "Nathan F.",
    subscribers: "8239",
    subscribersText: "subscribers",
    statsTo: "down",
    statsNum: "144",
  },
];

export default function SectionFirst() {
  return (
    <section>
      <div className="px-[24px] py-[40px] w-full max-w-[1158px] mx-auto grid gap-[24px] sm:grid-cols-2 xl:grid-cols-4">
        {topFollowersData.map((element) => (
          <TopFollowersCard
            key={element.id}
            accentColor={element.accentColor}
            username={element.username}
            social={element.social}
            subscribers={element.subscribers}
            subscribersText={element.subscribersText}
            statsTo={element.statsTo}
            statsNum={element.statsNum}
          />
        ))}
      </div>
    </section>
  );
}
