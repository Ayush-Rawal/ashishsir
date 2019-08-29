import React from 'react'
import Head from "../Head"
import Header from "../Header"
import typography from "../../../config/typography"
import config from "../../../config"

export default function Layout(props) {
    const theme = config.theme
    return (
        <React.Fragment>
            <Head />
            <Header />
            <main>
                {props.children}
            </main>
            <style jsx global>{`
                body {
                    background: ${theme.background};
                }
                main {
                    margin: ${typography.rhythm(2)} auto;
                    padding: 0 ${typography.rhythm(2)};
                }
                a[href^="/"] {
                flex: 1;
                margin: ${typography.rhythm()};
                color: ${theme.primary};
                text-shadow: none
            }
            `}</style>
        </React.Fragment>
    )
}