"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Events.module.css";
import masjidAnNoor from "../../../public/images/masjid-an-noor.jpg";

export function Events() {
  return (
    <Section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Rangkaian Acara</h2>
        <div className={styles.divider}></div>
      </div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      className={styles.card}
    >
        <div className={styles.dateContainer}>
           <p className={styles.bigDate}>Sabtu<br />7 Februari 2026</p>
        </div>
        
        <div className={styles.eventGrid}>
           <div className={styles.eventItem}>
              <h3 className={styles.eventTitle}>Akad Nikah</h3>
              <div className={styles.timeWrapper}>
                <Clock className={styles.icon} />
                <p className={styles.time}>09.00 - 11.00 WIB</p>
              </div>
              <div className={styles.liveStreamInfo}>
                <Instagram className={styles.instagramIcon} />
                <p className={styles.liveStreamText}>akan disiarkan live di akun instagram <a href="https://instagram.com/auliannefr" target="_blank" rel="noopener noreferrer" className={styles.instagramHandle}>@auliannefr</a> & <a href="https://instagram.com/asadomu" target="_blank" rel="noopener noreferrer" className={styles.instagramHandle}>@asadomu</a></p>
              </div>
           </div>
        </div>
      
    </motion.div>
    </Section>
  );
}
