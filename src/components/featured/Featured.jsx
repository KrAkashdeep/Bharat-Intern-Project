import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Publish your passions...</b> Create a unique and beautiful blog
        easily.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/travel.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Wanderlust Chronicles: Embarking on a Journey of a Lifetime{" "}
          </h1>
          <p className={styles.postDesc}>
            Welcome to Wanderlust Chronicles your passport to an exhilarating
            world of exploration, adventure, and cultural discovery. Travel is
            not just a hobby; its a transformative experience that enriches our
            lives. Join us as we embark on a virtual journey to mesmerizing
            destinations, unravel hidden gems, and share tips for the ultimate
            travel experience.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
