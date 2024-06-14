import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="m-2">Fitness training app</h1>
      <p className="m-2">Monitor your exercise</p>
      <Link href={"/signup"} className="btn btn-primary m-2">
        Get started
      </Link>
    </div>
  );
}
