"use client";

export default function Menu() {
  const menus = [
    {
      title: "カット",
      desc: "似合わせカット",
      price: "¥4,500",
    },
    {
      title: "カラー",
      desc: "透明感カラー",
      price: "¥6,000〜",
    },
    {
      title: "パーマ",
      desc: "やわらかい質感",
      price: "¥8,000〜",
    },
    {
      title: "トリートメント",
      desc: "髪質改善ケア",
      price: "¥3,000〜",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-2xl font-bold text-center text-[#3f342e] mb-10">
        MENU
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto px-4">
        {menus.map((item, i) => (
          <div
            key={i}
            className="p-6 border border-[#e5e0da] rounded-xl"
          >
            <h3 className="text-lg font-semibold text-[#3f342e]">
              {item.title}
            </h3>
            <p className="text-sm text-[#8b7d74] mt-1">{item.desc}</p>
            <p className="mt-3 font-bold text-[#3f342e]">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}