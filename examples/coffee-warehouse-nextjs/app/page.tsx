"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/drawer");
  }, []);
  return (
    <main>{''}</main>
  );
}
