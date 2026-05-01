export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#f8f5f0] px-4">
      <div className="max-w-4xl text-center">
        <p className="text-sm tracking-[0.3em] text-[#8b7d74] mb-4">
          SALON LUMIÈRE
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-[#3f342e] leading-tight">
          あなたらしい美しさを、
          <br />
          引き出す。
        </h1>

        <p className="mt-6 text-[#6f625a] text-base md:text-lg">
          落ち着いた空間で、理想のスタイルへ。
        </p>

        <button className="mt-8 rounded-full bg-[#8b7d74] px-8 py-3 text-white hover:opacity-80 transition">
          予約する
        </button>
      </div>
    </section>
  );
}