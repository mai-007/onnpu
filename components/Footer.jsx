import styles from "@styles/footer.module.scss"

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <span className={styles.logo}>MEE.</span>
      <small className={styles.copy}>
        copyright&copy;MEE.
      </small>
    </footer>
  )
}
