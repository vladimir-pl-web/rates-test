"use client";
import ErrorContent from "@/src/pageComponents/errorContent/errorContent";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Error({ error }: IError) {
  const t = useTranslations("Errors");

  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorContent
      path={"/currencies"}
      btnText={t("back_to_list")}
      errorMessage={`${error.message}. ${t("try_again")}`}
    />
  );
}
