import React from 'react'
import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document'

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="utf-8" />
                </Head>
                <body className="bg-portfolioGrey-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
