"use client";
import { Callout } from "@tremor/react";
import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import React from "react";

type Props = {
  message: string;
  warning?: boolean;
};

function CalloutCard({ message, warning }: Props) {
  return (
    <Callout
      className="mt-4"
      title={message}
      icon={warning ? ExclamationIcon : CheckCircleIcon}
      color={warning ? "rose" : "teal"}
    />
  );
}

export default CalloutCard;
