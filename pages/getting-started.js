import Head from 'next/head'
import PageLayout from '../components/pageLayout'
import ReactMarkdown from 'react-markdown'

const markdown = `
## Getting Started
You can host Icon Captcha yourself or use our hosted service at iconcaptcha.com. Click here for instructions on hosting Icon Captcha.

The following instructions explain how to set up Icon Captcha using iconcaptcha.com

##### Step 1: Link to the front end api
To get started add the following link to your \`head\` tag.

\`\`\`
< script src = "https://iconcaptcha.com/captcha/api.js" async defer ></script >
\`\`\`

##### Step 2: Add the captcha to your form
Add the following \`div\` tag to your form. Make sure the tag is inside a \`form\` to have the captcha id be included with the form submission.

\`\`\`
< div class="icon-captcha" ></div >
\`\`\`
The script included in step one will automatically add the captcha to this tag on page load.

If the captcha does not load automatically in your environment you may need to load the captcha manually. This can happen when you are using a framework, such as VueJS or MarkoJS, that modifies the DOM. Either of these functions will populate "icon-captcha" \`div\`.
\`\`\`
window.loadCaptcha();
loadCaptcha();
\`\`\`
##### Step 3: Obtain the captcha id
Upon successful completion of a captcha, the unique captcha id is stored in a form input. 
You can access the captcha id via the \`captchaid\` POST parameter upon form submission.

Client side you can also use one of the following functions to obtain the captcha id:
\`\`\`
window.getCaptchaID();
getCaptchaID();
\`\`\`

##### Step 4: Verify the captcha server side
Captchas must be verified within 3 minutes of creation and can only be verified once. After verification the captcha is removed from the database. If verification fails the user must submit a new captcha.

To verify a captcha make a post request to \`https://iconcaptcha.com/captcha/verify\` with the captcha id.
`;

export default function Introduction() {
    return (
        <>
            <Head>
                <script src="https://iconcaptcha.com/captcha/api.js" async defer></script>
                <title>Icon Captcha | Getting Started</title>
                <meta name="description" content="Using icon captcha is easy for developers and users." />
            </Head>
            <ReactMarkdown>
                {markdown}
            </ReactMarkdown>
        </>
    )
}

Introduction.getLayout = (page) => {
    return (
        <PageLayout current='getting-started'>
            {page}
        </PageLayout>
    )
}
