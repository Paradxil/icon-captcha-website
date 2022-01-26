import Head from 'next/head'
import PageLayout from '../components/pageLayout'
import ReactMarkdown from 'react-markdown'

const markdown = `
## Our Goal
Our goal was to create an easy to use captcha for use with contact forms and other low risk applications. 
This captcha was not designed to be extremely secure, but rather as a simple way to block spam form submissions.

## Use Cases
This captcha is easy for the end user to complete and easy for developers to implement. 
Only a few lines of code are needed to add the captcha to a form and verify the captcha once submit.

Like most captchas, this captcha is not meant to be the primary security measure for an application. 

The primary use case is to block spam submissions on contact us forms and similar applications.
`;

export default function Introduction() {
    return (
        <>
            <Head>
                <script src="https://iconcaptcha.com/captcha/api.js" async defer></script>
                <title>Icon Captcha | Introduction</title>
                <meta name="description" content="Icon captcha aims to be an easy to use captcha service for forms." />
            </Head>
            <ReactMarkdown children={markdown}/>
        </>
    )
}

Introduction.getLayout = (page) => {
    return (
        <PageLayout current='introduction'>
            {page}
        </PageLayout>
    )
}
