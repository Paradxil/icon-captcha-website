import Head from "next/head"
import styles from '../styles/layout.module.css'
import componentStyles from '../styles/helpers.module.css';
import navStyles from '../styles/nav.module.css';
import Title from "./title";
import Link from "next/link";
import Footer from "./footer";
import { ChevronRight, Menu, ChevronLeft } from "react-feather";
import { useState } from "react";

export default function PageLayout({ children, current }) {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className={componentStyles.container}>
            <Head>
                <meta name="theme-color" content="#d0ebff"></meta>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&family=Source+Sans+Pro:wght@200;900&display=swap" rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <nav className={navStyles.nav}>
                <Link href='/'>
                    <div className={componentStyles.button}>
                        <Title />
                    </div>
                </Link>
                <div className={navStyles.toggle} onClick={()=>{setShowSidebar(!showSidebar)}}>
                    <Menu/>
                </div>
            </nav>
            <main className={styles.wrapper}>
                <div className={`${styles.sidebar} ${showSidebar ? styles.visible : ''}`} onClick={() => { setShowSidebar(!showSidebar) }}>
                    <nav className={navStyles.sidebar}>
                        <Link href='/'>
                            <div className={componentStyles.button}>
                                <Title />
                            </div>
                        </Link>
                        <div className={navStyles.toggle} onClick={() => { setShowSidebar(!showSidebar) }}>
                            <ChevronLeft />
                        </div>
                    </nav>
                    <Link href='/introduction'>
                        <div className={`${componentStyles.button} ${current==='introduction'?componentStyles.active:''}`}>
                            Introduction
                            <ChevronRight />
                        </div>
                    </Link>
                    <Link href='/getting-started'>
                        <div className={`${componentStyles.button} ${current === 'getting-started' ? componentStyles.active : ''}`}>
                            Getting Started
                            <ChevronRight />
                        </div>
                    </Link>
                    <Link href='/demo'>
                        <div className={`${componentStyles.button} ${current === 'demo' ? componentStyles.active : ''}`}>
                            Demo
                            <ChevronRight />
                        </div>
                    </Link>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
            <Footer/>
        </div>
    )
}