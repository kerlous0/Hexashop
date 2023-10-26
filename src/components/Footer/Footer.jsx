import Image from "next/image";
import styles from "./footer.module.css"
import { social_media } from "./data";


export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Hexashop. All rights reserved.</div>
      <div className={styles.social}>
        {social_media.map(social => <Image key={social.id} src={`/images/icons/${social.media}.png`} width={20} height={20} className={styles.icon} alt={`Hexashop ${social.media} link`} />
        )}
      </div>
    </div>
  )
}
