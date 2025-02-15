import Image from "next/image";
import {
  DeleteMedicalHelperButton,
  UpdateMedicalHelperButton,
} from "./medical-helpers/buttons";

type TableProps<T> = {
  data: T[];
  columns: { [key: string]: string };
  imageColumns?: string[];
  mobileCardView?: boolean;
};

export default function Table<T extends { uuid: string }>({
  data,
  columns,
  imageColumns = [],
  mobileCardView = true,
}: TableProps<T>) {
  const columnKeys = Object.keys(columns);

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
                {columnKeys.slice(0, 2).map((key: string) => (
                  <div key={key}>
                    {imageColumns.includes(key) ? (
                      <Image
                        src={item[key as keyof T] as string}
                        className="rounded-full"
                        alt="Profile"
                        width={100}
                        height={100}
                      />
                    ) : (
                      <p className="text-sm">
                        {item[key as keyof T] as string}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              {columnKeys.length > 2 && (
                <div className="flex items-center justify-between pb-4 overflow-hidden">
                  {columnKeys.slice(2, 4).map((key) => (
                    <div key={key}>
                      {imageColumns.includes(key) ? (
                        <Image
                          src={item[key as keyof T] as string}
                          className="rounded-full"
                          alt="Profile"
                          width={100}
                          height={100}
                        />
                      ) : (
                        <p className="text-sm">
                          {item[key as keyof T] as string}
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
      <table className="hidden min-w-full rounded-md text-gray-900 md:table">
        <thead className="bg-gray-50 text-left text-sm font-normal">
          <tr>
            {columnKeys.map((key) => (
              <th key={key} className="px-4 py-5 font-medium">
                {columns[key]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-900">
          {data.map((item: T, index) => (
            <tr key={index}>
              {columnKeys.map((key) => (
                <td key={key} className="bg-white px-4 py-5 text-sm">
                  {imageColumns.includes(key) ? (
                    <Image
                      src={item[key as keyof T] as string}
                      className="rounded-full"
                      alt="Profile"
                      width={70}
                      height={70}
                    />
                  ) : (
                    <p>{item[key as keyof T] as string}</p>
                  )}
                </td>
              ))}
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                  <UpdateMedicalHelperButton id={item.uuid} />
                  <DeleteMedicalHelperButton id={item.uuid} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
