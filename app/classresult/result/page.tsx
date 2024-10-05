import React from "react";
import TableComponent from "./table-data";
import { Button } from "@/components/ui/button";
import ButtonPrint from "./button-print";
import { generateHTnos } from "@/lib/generateht";
import { splitHt } from "@/lib/splitht";

type Result = any;

interface ResultPageProps {
  searchParams: {
    htno: string;
    sem: string;
  };
}

const ResultPage: React.FC<ResultPageProps> = async ({ searchParams }) => {
  const htno = searchParams.htno;
  const semester = searchParams.sem;

  const htnos = generateHTnos(htno, semester);
  const htnosChunks: string[] = splitHt(htnos);

  const fetchResults = async (
    htnosChunks: string[]
  ): Promise<(Result | null)[]> => {
    const fetchPromises = htnosChunks.map(async (htnoChunk: string) => {
      try {
        const res = await fetch(
          `https://jntuhresults.up.railway.app/api/classresult?semester=${semester}&htnos=${htnoChunk}`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        return await res.json();
      } catch (error) {
        console.error(`Failed to fetch results for chunk ${htnoChunk}:`, error);
        return null; // Handle error appropriately
      }
    });

    return Promise.all(fetchPromises);
  };

  const results: (Result | null)[] = await fetchResults(htnosChunks);
  // console.log(results);

  // Uncomment and use the TableComponent if you need to display results
  return (
    <div className="py-5">
      <div>
        {/* Pass the results to the TableComponent */}
        <TableComponent result={results} />
      </div>
      <div className="flex items-center justify-center">
        <ButtonPrint />
      </div>
    </div>
  );
};

export default ResultPage;
