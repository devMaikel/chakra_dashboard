import { Column } from "react-table";
import tableDataCheck from "./tableDataCheck.json";

export const columnsDataCheck = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];
export const columnsDataComplex = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
];

export type ColumnData = Column[];

export type TableData = Column<{
  name: (string | boolean)[];
  date: string;
  progress: number;
  quantity?: number;
  status?: string;
  artworks?: string;
  rating?: number;
}>;

export type TableProps = {
  columnsData: ColumnData;
  tableData: TableData[];
};

export type PexTableProps = {
  title: String;
  subTitle: String;
  columns: String[];
  lines: TableLine[];
}

export type TableLine = {
  cell1: String;
  cell2: String;
  cell3: String;
}
