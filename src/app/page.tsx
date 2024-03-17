import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-3xl md:text-6xl font-semibold text-white drop-shadow-md",
            font.className,
          )}
        >
          📈 Sistem Monitoring dan Evaluasi
        </h1>
        <p className="text-white text-xl md:text-3xl">
          Kinerja dan Anggaran Dishub Kab. Pasuruan
        </p>
        <div>
          <Button asChild size="lg" variant="secondary">
            <Link className="text-black" href="/sign-in">
              Masuk
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
