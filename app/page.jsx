import Link from "next/link";
import Card from "@/components/Card"
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>ONNPU</h1>
      <section className={styles.container}>
        <Card
          link={'./question/Fclef'}
          title={'へ音記号'}
          image={'Fclef/Fclef.svg'}
          alt={'へ音記号の音階クイズをスタートする'}
        />
        <Card
          link={'./question/Gclef'}
          title={'ト音記号'}
          image={'Gclef/Gclef.svg'}
          alt={'ト音記号の音階クイズをスタートする'}
        />
      </section>
    </main>
  );
}
