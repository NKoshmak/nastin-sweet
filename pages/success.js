/** @format */

import { useRouter } from "next/router";
import styles from "../styles/success.module.css";
import TextButton from "@/components/TextButton/TextButton";

export default function SuccessPage() {
  const router = useRouter();
  const telegramLink = router.query.link;

  return (
    <div className={styles.successPage}>
      <div className={styles.content}>
        <h1>Дякую за покупку!</h1>
        <p>
          Натисніть нижче, щоб приєднатись до приватного Telegram-каналу з
          уроками
        </p>

        {telegramLink && (
          <TextButton href={telegramLink}>Перейти до Telegram</TextButton>
        )}
      </div>
    </div>
  );
}
