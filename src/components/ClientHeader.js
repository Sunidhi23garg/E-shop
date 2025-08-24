// components/ClientHeader.js
"use client";
import { useSearchParams } from "next/navigation";
import Header from "./Header";

export default function ClientHeader() {
  const searchParams = useSearchParams();
  return <Header />;
}