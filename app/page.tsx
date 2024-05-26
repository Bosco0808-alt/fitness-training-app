import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.center}>
      <h1>Fitness training app</h1>
      <Link href={"/signup"} className="btn btn-primary">
        Get started
      </Link>
    </div>
  );
}
