import Link from "next/link";
import { Button } from "./ui/button";

export default function ShopInfo() {
  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-sm tracking-[0.3em] text-[#8b7d74] mb-4">
          SHOP INFO
        </p>

        <h2 className="text-2xl font-bold text-[#3f342e] mb-6">店舗情報</h2>

        <div className="text-[#6f625a] space-y-2 mb-8">
          <p>Salon Lumière</p>
          <p>東京都〇〇区〇〇1-2-3</p>
          <p>営業時間：10:00〜20:00</p>
          <p>定休日：火曜日</p>

          <Button
            asChild
            className="rounded-full bg-[#8b7d74] px-8 py-6 text-white hover:opacity-80"
          >
            <Link href="/reservation">ご予約はこちら</Link>
          </Button>

          <p className="mt-6 text-xs text-gray-400">
            ※本サイトはポートフォリオ用に制作した架空の店舗です
          </p>
        </div>
      </div>
    </section>
  );
}
