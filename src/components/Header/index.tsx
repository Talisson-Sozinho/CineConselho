import { LoginButton } from "../LoginButton";
import Link from "next/link"
import styles from "./styles.module.scss"

import {useRouter} from "next/router"

export function Header(){

  const { asPath } = useRouter();

  return(
    <header className={styles.headerContainer}>
      <div className={styles.contentContainer}>
        <nav> 
          <Link href="/">
            <a className={ asPath == "/" ? styles.active : "" } >
              <img src= "/indexColor.svg" alt="index icon"/>
              <p>Conselho</p>
            </a>
          </Link>

          <Link href="/ticketOff">
            <a className={ asPath === "/ticketOff" ? styles.active : "" }>
              <img src="/ticketColor.svg" alt="ticket off icon"/>
              <p>Bilheteria</p>
            </a>
          </Link>

          <Link href="/ranking" >
            <a className={ asPath === "/ranking" ? styles.active : "" }>
              <img src="/rankingColor.svg" alt="ranking icon"/>
              <p>Ranking</p>
            </a>
          </Link>

          <Link href="/inventory">
            <a className={ asPath === "/inventory" ? styles.active : "" }>
              <img src="/inventoryColor.svg" alt="inventory icon"/>
              <p>Inventário</p>
            </a>
          </Link>

        </nav>
       <LoginButton />
      </div>
    </header>
  );
}