import FormComponent from "@/components/form-data";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-sky-500">
      <div className=" flex flex-col md:flex-row gap-4 items-center justify-between">
        <Link href="/academicresult">
          <Card className="h-52 w-60 flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-xxl font-bold text-center">
                Academic Result
              </CardTitle>
              <CardDescription>Check your result here</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/classresult">
          <Card className="h-52 w-60 flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-xxl font-bold text-center">
                Class Result
              </CardTitle>
              <CardDescription>Check your class result here</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Home;
