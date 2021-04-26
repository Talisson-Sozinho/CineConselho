import { FaDiscord, FaInstagram } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Footer(){
  return(
    <footer className={styles.footer}>
      <div className={styles.contentContainer}>
        <div className={styles.social}>
          <a href="https://www.instagram.com/cineconselho/" target="_blank">
            <FaInstagram color={"#fff"}/>
          </a>
          <a href="https://discord.gg/vqNyHbnS9K" target="_blank">
            <FaDiscord color={"#7289da"}/>
          </a>
        </div>
        <p>2021</p>
      </div>
    </footer>
  )
}