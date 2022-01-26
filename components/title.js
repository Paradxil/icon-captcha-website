import styles from '../styles/title.module.css'

export default function Title() {
    return (
        <h1 className={`${styles.title} ${styles.highlight}`}>
            icon-captcha
        </h1>
    )
}