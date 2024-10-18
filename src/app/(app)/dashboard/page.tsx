import { Button } from "@/components/ui/button";
import { getUserAuth } from "@/lib/auth/utils";
import Link from "next/link";

export default async function Home() {
  const userAuth = await getUserAuth();
  return (
    <main className="space-y-6">
      <div className="w-full h-screen relative">
        <iframe
          src="https://lookerstudio.google.com/embed/reporting/e8e133f2-7f47-4001-8264-a9a1822b3b6d/page/Nl2FE"
          className="w-full h-screen relative"
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
      </div>
    </main>
  );
}
