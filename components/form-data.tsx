"use client";
import { redirect, useRouter } from "next/navigation";
import React from "react";
// components/FormComponent.js
import { useState } from "react";

const FormComponent = () => {
  const router = useRouter();
  const [htno, setHtno] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Redirect to the result page with query parameter
    router.push(`/academicresult/result?htno=${encodeURIComponent(htno)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hall Ticket Number:
        <input
          type="text"
          value={htno}
          onChange={(e) => setHtno(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
