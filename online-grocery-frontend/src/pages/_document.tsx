import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {


    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }



    render() {
        return (
            <Html>
                <Head>
                    <meta charSet='UTF-8' />
                    <meta name="title" content="Online Grocery" />
                    <meta name="description" content="Online Grocery - Ultimate eCommerce Template" />
                    <meta name="keywords" content="HTML5 Template" />
                </Head>
                <body className="antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument