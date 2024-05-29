import { CustomButton } from "@/src/components/button/button";
import { TypographyH1 } from "@/src/components/typography/typography";
import styles from "./main.module.scss";
import Link from "next/link";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { locales } from "@/src/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Currencies");

  return (
    <main className={styles.main} title={"title"}>
      <div className={styles.container}>
        <TypographyH1>{t("list")}</TypographyH1>
        <Link href="/currencies">
          <CustomButton>{t("get_crypto")}</CustomButton>
        </Link>
      </div>
    </main>
  );
}
