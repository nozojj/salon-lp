"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter } from "next/navigation";

export default function ReservationForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    menu: "",
  });

  const timeOptions = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.date || !form.time || !form.menu) {
      toast.error("未入力の項目があります");
      return;
    }

    toast.success("予約リクエストを受け付けました");

    setTimeout(() => {
      router.push("/thanks");
    }, 1000);

    setForm({
      name: "",
      email: "",
      date: "",
      time: "",
      menu: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm space-y-6"
    >
      <div>
        <Label className="text-sm text-[#8b7d74]">お名前</Label>
        <Input
          type="text"
          className="w-full mt-1 p-3 border rounded-lg"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div>
        <Label className="text-sm text-[#8b7d74]">メール</Label>
        <Input
          type="email"
          className="w-full mt-1 p-3 border rounded-lg"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <div>
        <Label className="text-sm text-[#8b7d74]">日付</Label>
        <Input
          type="date"
          className="w-full mt-1 p-3 border rounded-lg"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
      </div>

      <div>
        <Label className="text-sm text-[#8b7d74]">時間</Label>

        <Select
          value={form.time}
          onValueChange={(value) => setForm({ ...form, time: value })}
        >
          <SelectTrigger className="w-full mt-1">
            <SelectValue placeholder="時間を選択してください" />
          </SelectTrigger>

          <SelectContent>
            {timeOptions.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm text-[#8b7d74]">メニュー</Label>
        <Select
          value={form.menu}
          onValueChange={(value) => setForm({ ...form, menu: value })}
        >
          <SelectTrigger className="w-full mt-1">
            <SelectValue placeholder="選択してください" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="cut">カット</SelectItem>
            <SelectItem value="color">カラー</SelectItem>
            <SelectItem value="perm">パーマ</SelectItem>
            <SelectItem value="treatment">トリートメント</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <button
        type="submit"
        className="w-full bg-[#8b7d74] text-white py-3 rounded-full hover:opacity-80 transition"
      >
        この内容で予約する
      </button>
    </form>
  );
}
