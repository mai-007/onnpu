import Button from "@/components/Button"
import styles from '@/styles/card.module.scss'
import Link from "next/link";

export default function Card({ image, title, alt, link }) {

  return (
    <button className={styles.card}>
      <Link href={link}>
        <img src={image} alt={alt} />
        <h3 className={styles.title}>
          {title}
        </h3>
      </Link>
    </button>
  );
}
