import Head from "next/head"
import styles from '../styles/layout.module.css';
import componentStyles from '../styles/helpers.module.css';
import Footer from "./footer";

export default function HomeLayout({ children }) {
    return (
        <div className={componentStyles.container}>
            <Head>
                <meta name="theme-color" content="#d0ebff"></meta>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&family=Source+Sans+Pro:wght@200;900&display=swap" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}