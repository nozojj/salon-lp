import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f8f5f0] px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-[#3f342e] mb-4">
          ご予約ありがとうございます
        </h1>

        <p className="text-[#6f625a] mb-6">
          予約リクエストを受け付けました。
          <br />
          担当よりご連絡いたします。
        </p>

        <Link
          href="/"
          className="inline-block rounded-full bg-[#8b7d74] px-6 py-3 text-white hover:opacity-80 transition"
        >
          トップへ戻る
        </Link>
      </div>
    </main>
  );
}
