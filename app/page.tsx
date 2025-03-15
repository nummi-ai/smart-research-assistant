"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold">Smart Research Assistant</h1>
      <p className="mt-4 text-lg text-gray-600">Upload PDFs and let AI summarize & analyze.</p>

      {/* File Upload */}
      <div className="mt-6">
        <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Upload PDF
        </label>
        {file && <p className="mt-2 text-gray-500">{file.name}</p>}
      </div>
    </main>
  );
}
