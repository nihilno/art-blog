"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function GoBack({ label }: { label: string }) {
  const { back, push } = useRouter();

  function handleBack() {
    if (window.history.length > 1) {
      back();
    } else {
      push("/");
    }
  }

  return (
    <div className="mt-8 flex items-center justify-between">
      <button
        type="button"
        onClick={handleBack}
        className="group flex w-fit items-center gap-2 font-bold uppercase"
      >
        <ArrowLeft className="size-5 transition group-hover:-translate-x-4" />
        <span className="tracking-wider group-hover:underline">Go back</span>
        &nbsp;
      </button>
      <h3 className="text-2xl font-bold tracking-wide">{label}</h3>
    </div>
  );
}

export default GoBack;
