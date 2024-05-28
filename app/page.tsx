
import { CustomButton } from "@/components/button/button";
import { TypographyH1 } from "@/components/typography/typography";
import styles from "./main.module.scss"
import Link from "next/link";

export default async function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <TypographyH1>
        Currencies list
       </TypographyH1>
       <Link href="/currencies">
          <CustomButton>
           Get Crypto Currencies
          </CustomButton>
       </Link>
  
      </div>
    </main>
  );
}
