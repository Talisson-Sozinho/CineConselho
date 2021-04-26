import { FaFacebook } from "react-icons/fa"
import styles from "./styles.module.scss"

export function LoginButton(){
  return (
    <button className={styles.signInButton} type="button">
      <FaFacebook color=" #1877f3"/>
      sign in with Facebook
    </button>
  );
}