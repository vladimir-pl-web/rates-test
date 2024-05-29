"use client";
import { useTranslations } from "next-intl";
import ErrorContent from "@/src/pageComponents/errorContent/errorContent";
import { useEffect } from "react";

export default function Error({ error }: IError) {
  const t = useTranslations("Errors");

  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorContent
      path={"/"}
      btnText={t("back_to_main")}
      errorMessage={`${error.message}. ${t("try_again")}`}
    />
  );
}
