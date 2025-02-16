"use client";
import { MedicalHelper } from "@/app/lib/definitions";
import AgGrid from "../ag-grid";
import { columnBuilder } from "../util";
import { putMedicalHelper } from "@/app/dashboard/medical-helpers/data";
import { CellValueChangedEvent, ColDef } from "ag-grid-community";
import { redirect } from "next/navigation";
import { confirmAlert } from "react-confirm-alert";
import { showConfirmDialog } from "../confirm-dialog";
import Table from "../table";

export default function MedicalHelpers({
  medicalHelpers,
  query,
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
