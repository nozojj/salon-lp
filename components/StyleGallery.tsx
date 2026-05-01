export default function StyleGallery() {
  const styles = [
    "ナチュラルボブ",
    "透明感カラー",
    "ゆるふわロング",
    "ショートスタイル",
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
            className="h-56 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#8b7d74]"
          >
            {style}
          </div>
        ))}
      </div>
    </section>
  );
}