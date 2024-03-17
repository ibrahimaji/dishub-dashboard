import { RealisasiAnggaran } from "@/components/charts/RealisasiAnggaran";
import { RealisasiKinerja } from "@/components/charts/RealisasiKinerja";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserAuth } from "@/lib/auth/utils";
import Link from "next/link";

export default async function Home() {
  const userAuth = await getUserAuth();
  return (
    <main className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Realisasi Anggaran</CardTitle>
        </CardHeader>
        <CardContent>
          <RealisasiAnggaran />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Realisasi Kinerja</CardTitle>
        </CardHeader>
        <CardContent>
          <RealisasiKinerja />
        </CardContent>
      </Card>
    </main>
  );
}
