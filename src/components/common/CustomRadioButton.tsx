"use client";

import { useState } from "react";

export default function CustomRadioButton({
  text,
  handleClick,
}: {
  text: string;
  handleClick?: (isChecked: boolean) => void;
}) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div>
      <label
        htmlFor="checkboxLabel"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabel"
            className="sr-only"
            onClick={() => {
              if (handleClick) {
                handleClick(!isChecked);
              }
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
              isChecked && "bg-blue-500 border-4"
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                isChecked && "!bg-primary"
              }`}
            >
              {" "}
            </span>
          </div>
        </div>
        <p className="text-black">{text}</p>
      </label>
    </div>
  );
}
