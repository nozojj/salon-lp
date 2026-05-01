"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4">
      <Image
        src="/images/hero/hero.jpg"
        alt="サロン内観"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-4xl text-center text-white">
        <p className="text-sm tracking-[0.3em] mb-4">SALON LUMIÈRE</p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          あなたらしい美しさを、
          <br />
          引き出す。
        </h1>

        <p className="mt-6 text-base md:text-lg">
          落ち着いた空間で、理想のスタイルへ。
        </p>

        <Button
          asChild
          className="mt-8 rounded-full bg-[#8b7d74] px-8 py-3 text-white hover:opacity-80 transition"
        >
          <Link href="/reservation">予約する</Link>
        </Button>
      </div>
    </section>
  );
}
