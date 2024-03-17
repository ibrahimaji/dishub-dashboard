"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  tahun: number;
  program: string;
  kegiatan: string;
  subKegiatan: string;
  indikator: string;
  targetAnggaran: number;
  targetKinerja: number;
  anggaranTrib1?: number;
  anggaranTrib2?: number;
  anggaranTrib3?: number;
  anggaranTrib4?: number;
  kinerjaTrib1?: number;
  kinerjaTrib2?: number;
  kinerjaTrib3?: number;
  kinerjaTrib4?: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "tahun",
    header: "Tahun",
  },
  {
    accessorKey: "program",
    header: "Program",
  },
  {
    accessorKey: "kegiatan",
    header: "Kegiatan",
  },
  {
    accessorKey: "indikator",
    header: "Indikator",
  },
  {
    accessorKey: "targetAnggaran",
    header: "Anggaran",
  },
  {
    accessorKey: "targetKinerja",
    header: "Kinerja",
  },
  {
    accessorKey: "anggaranTrib1",
    header: "Trib 1",
  },
  {
    accessorKey: "anggaranTrib2",
    header: "Trib 2",
  },
  {
    accessorKey: "anggaranTrib3",
    header: "Trib 3",
  },
  {
    accessorKey: "anggaranTrib4",
    header: "Trib 4",
  },
  {
    accessorKey: "anggaranTrib1",
    header: "Trib 1",
  },
  {
    accessorKey: "anggaranTrib2",
    header: "Trib 2",
  },
  {
    accessorKey: "anggaranTrib3",
    header: "Trib 3",
  },
  {
    accessorKey: "anggaranTrib4",
    header: "Trib 4",
  },
];
