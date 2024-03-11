import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>ONNPU</h1>
      <button>
        <Link href={'./scale'}>
          音階テスト
        </Link>
      </button>
    </main>
  );
}
