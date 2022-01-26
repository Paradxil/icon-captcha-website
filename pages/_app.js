import '../node_modules/open-color/open-color.css';
import '../node_modules/open-props/open-props.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(
        <Component {...pageProps} />
    )
}

export default MyApp