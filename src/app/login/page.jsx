"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          <Image
            className={styles.img}
            src="/google.png"
            alt="google"
            width={30}
            height={30}
          />
          Google
        </div>
        <div className={styles.socialButton}>
          <Image
            className={styles.img}
            src="/github.png"
            alt="github"
            width={30}
            height={30}
          />
          Github
        </div>
        <div className={styles.socialButton}>
          <Image
            className={styles.img}
            src="/facebook.png"
            alt="facebook"
            width={30}
            height={30}
          />
          Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
