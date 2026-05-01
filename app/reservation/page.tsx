
import ReservationForm from "@/components/ReservationForm";

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] py-20 px-4">
      <div className="max-w-xl mx-auto text-center mb-10">
        <p className="text-sm tracking-[0.3em] text-[#8b7d74] mb-3">
          RESERVATION
        </p>
        <h1 className="text-3xl font-bold text-[#3f342e]">ご予約</h1>
        <p className="mt-3 text-[#6f625a]">
          以下のフォームよりご予約ください
        </p>
      </div>

      <ReservationForm />
    </main>
  );
}