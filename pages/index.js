import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import componentStyles from '../styles/helpers.module.css';
import { ChevronRight } from 'react-feather'
import HomeLayout from '../components/homeLayout'
import Title from '../components/title';

export default function Home() {
    return (
        <>
            <Head>
                <title>Icon Captcha</title>
                <meta name="description" content="Easy to use low security form captcha." />
            </Head>
            <div className={styles.hero}>
                <Title/>
            </div>

            <p className={styles.description}>
                Easy to use low security captcha.
            </p>

            <div className={componentStyles.grid}>
                <a href='https://github.com/Paradxil/icon-captcha'>
                    <div className={componentStyles.button}>
                        <p>github</p>
                        <ChevronRight/>
                    </div>
                </a>
                <Link href={'/introduction'}>
                    <div className={componentStyles.button}>
                        <p>documentation</p>
                        <ChevronRight />
                    </div>
                </Link>
            </div>
        </>
    )
}

Home.getLayout = (page) => {
    return (
        <HomeLayout>
            {page}
        </HomeLayout>
    )
}