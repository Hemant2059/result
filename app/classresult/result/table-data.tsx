import React from "react";
import calculateSGPA from "./sgpa-cal";

const TableComponent = (result: any) => {
  const datas = result.result;
  if (!datas) return <div>No data</div>;

  return (
    <div>
      <div className="flex items-center justify-center py-2 font-bold text-xl">
        <h1>Acedemic Results</h1>
      </div>
      {datas.map((d: any, index: number) => (
        <div key={index}>
          {d.map((data: any, i: number) => (
            <div
              key={i}
              className="m-2 text-[30%] sm:text-[45%] md:text-[60%] lg:text-[100%]"
            >
              <table className="w-[100%] my-2 border-2 border-primary rounded">
                <tbody>
                  <tr className="w-max border-b-2 border-primary bg-primary/30">
                    <th className="border-primary border-2">NAME</th>
                    <th className="border-primary border-2 ">Roll_No</th>
                    <th className="border-primary border-2">COLLEGE_CODE</th>
                    <th className="border-primary border-2">FATHER_NAME</th>
                  </tr>
                  <tr className="">
                    <th className="border-primary border-2">
                      {data.Details.NAME}
                    </th>
                    <th className="border-primary border-2 ">
                      {data.Details.Roll_No}
                    </th>
                    <th className="border-primary border-2 ">
                      {data.Details.COLLEGE_CODE}
                    </th>
                    <th className="border-primary border-2 ">
                      {data.Details.FATHER_NAME}
                    </th>
                  </tr>
                </tbody>
              </table>
              {Object.keys(data.Results).map(
                (key) =>
                  key != "Total" && (
                    <div key={key}>
                      <table className="border-primary border-2 w-[100%] rounded-t">
                        <tbody>
                          <tr>
                            <th className="bg-primary/20">{key} Results</th>
                          </tr>
                        </tbody>
                      </table>
                      <table className=" w-full border-primary border-2">
                        <tbody className="">
                          <tr className="w-max bg-primary/20 border-b-2 border-primary">
                            <th className="dark:border-white px-1">
                              SUBJECT_CODE
                            </th>
                            <th className="dark:border-white px-1">
                              SUBJECT_NAME
                            </th>
                            <th className="dark:border-white px-1">INTERNAL</th>
                            <th className="dark:border-white px-1">EXTERNAL</th>
                            <th className="dark:border-white px-1">TOTAL</th>
                            <th className="dark:border-white px-1">GRADE</th>
                            <th className="dark:border-white px-1">CREDITS</th>
                          </tr>
                          {Object.keys(data.Results[key]).map(
                            (subCode) =>
                              subCode !== "total" &&
                              subCode !== "credits" &&
                              subCode !== "CGPA" && (
                                <tr key={subCode}>
                                  <th className="dark:border-white">
                                    {subCode}
                                  </th>
                                  <th className="dark:border-white">
                                    {data.Results[key][subCode].subject_name}
                                  </th>
                                  <th className="dark:border-white">
                                    {
                                      data.Results[key][subCode]
                                        .subject_internal
                                    }
                                  </th>
                                  <th className="dark:border-white">
                                    {
                                      data.Results[key][subCode]
                                        .subject_external
                                    }
                                  </th>
                                  <th className="dark:border-white">
                                    {data.Results[key][subCode].subject_total}
                                  </th>
                                  <th className="dark:border-white ">
                                    {data.Results[key][subCode].subject_grade}
                                  </th>
                                  <th className="dark:border-white">
                                    {data.Results[key][subCode].subject_credits}
                                  </th>
                                </tr>
                              )
                          )}
                        </tbody>
                      </table>
                      <table className="dark:border-white rounded-b w-full border-2 border-primary">
                        <tbody>
                          <tr>
                            <th className="dark:border-white w-[75%]">SGPA</th>
                            <th className="dark:border-white w-[25%]">
                              {calculateSGPA(
                                data.Results[key],
                                data.Details.Roll_No
                              )}
                            </th>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                    </div>
                  )
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableComponent;
