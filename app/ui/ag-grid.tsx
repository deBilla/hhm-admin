"use client";

import {
  AllCommunityModule,
  CellValueChangedEvent,
  ColDef,
  ModuleRegistry,
  RowSelectionOptions,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useRef } from "react";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

export default function AgGrid<T>({
  colDefs,
  rowData,
  handleCellValueEdit,
  handleRowDelete,
}: {
  colDefs: ColDef[];
  rowData: T[];
  handleCellValueEdit: (event: CellValueChangedEvent) => void;
  handleRowDelete: (data: T) => Promise<boolean>;
}) {
  const gridRef = useRef<AgGridReact>(null);
  const rowSelection = useMemo(() => {
    return {
      mode: "multiRow",
    };
  }, []);

  const onRemoveSelected = useCallback(async () => {
    const selectedRowData = gridRef.current!.api.getSelectedRows();
    const isDeleted = await handleRowDelete(selectedRowData as T);

    if (isDeleted)
      gridRef.current!.api.applyTransaction({ remove: selectedRowData });
  }, [handleRowDelete]);

  return (
    <div>
      <button
        className="bg-red-500 hover:bg-red-600 mb-2 text-white py-2 px-4 text-sm font-medium rounded-lg shadow-md transition duration-200 ease-in-out"
        onClick={onRemoveSelected}
      >
        Remove Selected
      </button>
      <AgGridReact
        ref={gridRef}
        rowSelection={rowSelection as RowSelectionOptions}
        rowData={rowData}
        columnDefs={colDefs}
        domLayout="autoHeight"
        pagination={true}
        onCellValueChanged={handleCellValueEdit}
      />
    </div>
  );
}
