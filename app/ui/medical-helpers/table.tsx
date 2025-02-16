"use client";
import { MedicalHelper } from "@/app/lib/definitions";
import Table from "../table";

export default function MedicalHelpers({
  medicalHelpers,
}: {
  medicalHelpers: MedicalHelper[];
  query: string;
}) {
  return (
    <Table
      data={medicalHelpers}
      imageColumns={[]}
    />
  );
}
