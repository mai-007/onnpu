import { BiCaretRight } from "react-icons/bi";
import styles from '@/styles/button.module.scss';

export default function Button({ link, type, buttonText }) {
  let additionalClass = styles.button; // デフォルトのクラス

  // type が 'tab' の場合、styles.tab を additionalClass に追加
  // type が 'icon' の場合、styles.icon を additionalClass に追加
  if (type === 'tab') {
    additionalClass += ` ${styles.tab}`;
  } else if (type === 'icon') {
    additionalClass += ` ${styles.icon}`;
    // type が 'icon' の場合、BiCaretRight を表示
    return (
      <a href={link} className={additionalClass}>
        {buttonText}
        <BiCaretRight />
      </a>
    );
  }

  // type が 'tab' または 'icon' でない場合
  return (
    <a href={link} className={additionalClass}>
      {buttonText}
    </a>
  );
}
