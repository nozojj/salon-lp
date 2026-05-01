import Image from "next/image";

export default function StyleGallery() {
  const styles = [
    { name: "ナチュラルボブ", img: "/images/style/bob.jpg" },
    { name: "透明感カラー", img: "/images/style/color.jpg" },
    { name: "ゆるふわロング", img: "/images/style/long.jpg" },
    { name: "ショートスタイル", img: "/images/style/short.jpg" },
  ];

  return (
    <section className="py-20 bg-[#f8f5f0]">
      <h2 className="text-2xl font-bold text-center text-[#3f342e] mb-10">
        STYLE GALLERY
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {styles.map((style, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden bg-white shadow-sm"
          >
            <Image
              src={style.img}
              alt={style.name}
              width={300}
              height={200}
              className="w-full hover:scale-105 transition duration-300 h-[180px] object-cover"
            />

            <p className="text-center py-3 text-[#8b7d74]">
              {style.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}