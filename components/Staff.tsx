import Image from "next/image";

export default function Staff() {
  const staffs = [
    {
      name: "Yuri",
      role: "Stylist",
      desc: "ナチュラルで扱いやすいスタイルが得意です。",
      img: "/images/staff/yuri.jpg",
    },
    {
      name: "Mika",
      role: "Colorist",
      desc: "透明感カラーや柔らかい色味をご提案します。",
      img: "/images/staff/mika.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <p className="text-sm tracking-[0.3em] text-[#8b7d74] text-center mb-4">
        STAFF
      </p>

      <h2 className="text-2xl font-bold text-center text-[#3f342e] mb-10">
        スタッフ
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto px-4">
        {staffs.map((staff) => (
          <div
            key={staff.name}
            className="rounded-2xl border border-[#e5e0da] p-6 text-center hover:shadow-md transition"
          >
            <div className="mx-auto mb-4 h-24 w-24 rounded-full overflow-hidden">
              <Image
                src={staff.img}
                alt={staff.name}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-[#8b7d74]">{staff.role}</p>

            <h3 className="mt-1 text-xl font-semibold text-[#3f342e]">
              {staff.name}
            </h3>

            <p className="mt-3 text-sm text-[#6f625a] leading-relaxed">
              {staff.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}