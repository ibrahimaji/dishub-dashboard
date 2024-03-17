import { DataTable } from "@/components/ui/data-table";
import { Payment, columns } from "./columns";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      tahun: 2024,
      program: "Penyelenggaraan LLAJ",
      kegiatan: "Penyediaan Angkutan Umum",
      subKegiatan: "Penyediaan Angkutan Umum",
      indikator: "Tersedianya Angkutan",
      targetAnggaran: 100000000,
      targetKinerja: 100,
      anggaranTrib1: 25000000,
      kinerjaTrib1: 25,
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
