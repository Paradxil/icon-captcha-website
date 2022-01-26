import Head from 'next/head'
import { useEffect } from 'react'
import PageLayout from '../components/pageLayout'

export default function Demo() {
    useEffect(() => {
        loadCaptcha();
    }, [])

    return (
        <>
            <Head>
                <script src="https://iconcaptcha.com/captcha/api.js" async defer></script>
                <title>Icon Captcha | Demo</title>
                <meta name="description" content="Icon captcha demo, configurable and easy to use captcha for forms." />
            </Head>
            <div className="icon-captcha"></div>
        </>
    )
}

Demo.getLayout = (page) => {
    return (
        <PageLayout current='demo'>
            {page}
        </PageLayout>
    )
}
