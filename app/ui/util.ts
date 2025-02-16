import { ColDef } from "ag-grid-community";

export function columnBuilder<T>(
  data: T[],
  excludefilterColumns: string[] = [],
  excludeColumns: string[] = []
): ColDef[] {
  return Object.keys(data[0] as Object)
    .filter((col) => !excludeColumns.includes(col))
    .map((column) => {
      return !excludefilterColumns.includes(column)
        ? { field: column, headerName: formatLabel(column), filter: true, editable: true }
        : { field: column, headerName: formatLabel(column) };
    }) as ColDef[];
}

function formatLabel(key: string): string {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
