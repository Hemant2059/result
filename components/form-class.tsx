"use client";
import { useRouter } from "next/navigation";
import React from "react";
// components/FormComponent.js
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import colleges from "@/lib/college";
import branches from "@/lib/branch";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  college: z.string({
    required_error: "Please select college",
  }),
  degree: z.enum(["A", "R"]),
  year: z.string({
    required_error: "Please select year",
  }),
  course: z.string({
    required_error: "Please select course",
  }),
  semester: z.string({
    required_error: "Please select semester",
  }),
});

const FormComponentClass = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    // Redirect to the result page with query parameter
    const fd = data.year + data.college + data.degree + data.course;

    router.push(
      `/classresult/result?htno=${encodeURIComponent(
        fd
      )}&sem=${encodeURIComponent(data.semester)}`
    );
  };

  return (
    <Card>
      <CardContent className="p-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="college"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select College" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(colleges).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="degree"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Degree" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="A">B.Tech</SelectItem>
                      <SelectItem value="R">B.Pharmacy</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="18">2018-2022</SelectItem>
                      <SelectItem value="19">2019-2023</SelectItem>
                      <SelectItem value="20">2020-2024</SelectItem>
                      <SelectItem value="21">2021-2025</SelectItem>
                      <SelectItem value="22">2022-2026</SelectItem>
                      <SelectItem value="23">2023-2027</SelectItem>
                      <SelectItem value="24">2024-2028</SelectItem>
                      <SelectItem value="25">2025-2029</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Course" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(branches).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="semester"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Semester" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-1">I year I semester</SelectItem>
                      <SelectItem value="1-2">I year II semester</SelectItem>
                      <SelectItem value="2-1">II year I semester</SelectItem>
                      <SelectItem value="2-2">II year II semester</SelectItem>
                      <SelectItem value="3-1">III year I semester</SelectItem>
                      <SelectItem value="3-2">III year II semester</SelectItem>
                      <SelectItem value="4-1">IV year I semester</SelectItem>
                      <SelectItem value="4-2">IV year II semester</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-lg"
              >
                Submit
              </button>
            </div>
            <h1 className="absolute -bottom-10 right-0 text-[12px] font-bold">
              by Bishal Pathak &#128420;
            </h1>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-center"></CardFooter>
    </Card>
  );
};

export default FormComponentClass;
