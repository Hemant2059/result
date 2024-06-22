import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import calculateSGPA from "./sgpa-cal";

const TableComponent = (result: any) => {
  const data = result.result;

  if (!data) return <div>No data</div>;

  return (
    <div className="p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">HallTicket</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Father Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              {data.Details.Roll_No}
            </TableCell>
            <TableCell>{data.Details.NAME}</TableCell>
            <TableCell>{data.Details.FATHER_NAME}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {Object.keys(data.Results).map((key) => (
        <Table className="mt-5" key={key}>
          <TableCaption className="text-2xl font-bold">
            SGPA :{calculateSGPA(data.Results[key])}
          </TableCaption>
          <TableHeader>
            <TableRow className="text-2xl font-bold text-right">{key}</TableRow>
            <TableRow>
              <TableHead>SUB_Code</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>INTERNAL</TableHead>
              <TableHead>EXTERNAL</TableHead>
              <TableHead>TOTAL</TableHead>
              <TableHead>GRADE</TableHead>
              <TableHead>CREDITS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.keys(data.Results[key]).map((subCode) => (
              <TableRow key={subCode}>
                <TableCell>{subCode}</TableCell>
                <TableCell>{data.Results[key][subCode].subject_name}</TableCell>
                <TableCell>
                  {data.Results[key][subCode].subject_internal}
                </TableCell>
                <TableCell>
                  {data.Results[key][subCode].subject_external}
                </TableCell>
                <TableCell>
                  {data.Results[key][subCode].subject_total}
                </TableCell>
                <TableCell>
                  {data.Results[key][subCode].subject_grade}
                </TableCell>
                <TableCell>
                  {data.Results[key][subCode].subject_credits}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ))}
    </div>
  );
};

export default TableComponent;
