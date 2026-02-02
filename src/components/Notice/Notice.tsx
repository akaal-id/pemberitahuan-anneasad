"use client";

import { Section } from "@/components/ui/Section";
import styles from "./Notice.module.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import aaIcon from "../../../public/icon/aa-icon.png";

export function Notice() {
  return (
    <Section className={styles.section}>
      <div className={styles.card}>
         <div className={styles.logoContainer}>
            <Image 
              src={aaIcon}
              alt="Aulianne & Asad" 
              width={300} 
              height={300}
              className={styles.logoImage}
              priority
            />
          </div>
          <div className={styles.cover} />
        
        <h2 className={styles.header}>Pemberitahuan</h2>
        <div className={styles.textWrapper}>
        <p className={styles.text}>
        Dengan segala kerendahan hati, kami menyampaikan permohonan maaf apabila Bapak/Ibu/Saudara/i belum dapat kami undang pada acara ini. <br/> <br/> Hal tersebut dikarenakan keterbatasan tempat dan kondisi yang tidak memungkinkan kami untuk mengundang seluruh kerabat dan sahabat.
        </p>
        <p className={cn(styles.text, styles.italic)}>
        Kami mohon pengertian atas hal ini. Doa dan dukungan dari Bapak/Ibu/Saudara/i tetap sangat berarti bagi kami.
        </p>
        </div>
        <p className={styles.closing}>
        Terima kasih atas pengertian dan kebesaran hati Anda.
        </p>
      </div>
    </Section>
  );
}
