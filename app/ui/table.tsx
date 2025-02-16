import Image from "next/image";
import {
  DeleteMedicalHelperButton,
  UpdateMedicalHelperButton,
} from "./medical-helpers/buttons";
import AgGrid from "./ag-grid";
import { columnBuilder } from "./util";
import { CellValueChangedEvent, ColDef } from "ag-grid-community";
import { putMedicalHelper } from "../dashboard/medical-helpers/data";
import { redirect } from "next/navigation";
import { showConfirmDialog } from "./confirm-dialog";

type TableProps<T> = {
  data: T[];
  imageColumns?: string[];
  mobileCardView?: boolean;
};

export default function Table<T extends { uuid: string }>({
  data,
  imageColumns = ["profile_photo_url"],
  mobileCardView = true,
}: TableProps<T>) {
  const columns: ColDef[] = columnBuilder(data);

  const handleCellEdit = async (event: CellValueChangedEvent) => {
    console.log(event);
    const data = event.data;
    await putMedicalHelper(data.uuid, data);
    redirect("/dashboard/medical-helpers");
  };

  const handleRowDelete = async (data: T): Promise<boolean> => {
    return new Promise((resolve) => {
      showConfirmDialog(
        "Confirm Deletion",
        "Are you sure you want to delete this item? This action cannot be undone.",
        () => {
          console.log(data);
          resolve(true);
        },
        () => {
          resolve(false);
        }
      );
    });
  };

  return (
    <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
      {/* Mobile Card View */}
      {mobileCardView && (
        <div className="md:hidden">
          {data.map((item: T, index) => (
            <div
              key={index}
              className="mb-2 w-full rounded-md bg-white p-4 shadow"
            >
              <div className="flex items-center justify-between  pb-4 overflow-hidden">
                {columns.slice(0, 2).map((column: ColDef) => (
                  <div key={column.field}>
                    {imageColumns.includes(column.field as string) ? (
                      <Image
                        src={item[column.field as keyof T] as string}
                        className="rounded-full"
                        alt="Profile"
                        width={100}
                        height={100}
                      />
                    ) : (
                      <p className="text-sm">
                        {item[column.field as keyof T] as string}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              {columns.length > 2 && (
                <div className="flex items-center justify-between pb-4 overflow-hidden">
                  {columns.slice(2, 4).map((column: ColDef) => (
                    <div key={column.field}>
                      {imageColumns.includes(column.field as string) ? (
                        <Image
                          src={item[column.field as keyof T] as string}
                          className="rounded-full"
                          alt="Profile"
                          width={100}
                          height={100}
                        />
                      ) : (
                        <p className="text-sm">
                          {item[column.field as keyof T] as string}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-between border-b pb-4 overflow-hidden">
                <UpdateMedicalHelperButton id={item.uuid} />
                <DeleteMedicalHelperButton id={item.uuid} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Desktop Table View */}
      <div className="hidden min-w-full rounded-md text-gray-900 md:table">
        <AgGrid
          colDefs={columnBuilder(data)}
          rowData={data}
          handleCellValueEdit={handleCellEdit}
          handleRowDelete={handleRowDelete}
        />
      </div>
    </div>
  );
}
