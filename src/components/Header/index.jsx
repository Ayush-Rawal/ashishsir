import React from "react"
import Navbar from "../Navbar"
import config from "../../../config"
import Link from "next/link"
import typography from "../../../config/typography"

export default function Header (props) {
    const theme = config.theme
    return (
        <header>
            <section className="logo">
            {config.author.image.wantImage && (
            <Link href="/" prefetch>
                 <img src={config.author.image.url} alt={config.author.name} />
            </Link>
            )}
            <Link href="/" prefetch>
                <a>{config.author.name}</a>
            </Link>
            </section>
            <Navbar />
            <style jsx>{`
                header {
                    height: ${typography.rhythm(2.26)};
                }
                .logo a {
                    font-size: ${typography.rhythm(1.16)};
                    color: ${theme.secondary};
                }
            `}</style>
            <style jsx>{`
                header {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    box-shadow: ${theme.muted} 1px 1px 2px;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }
                section {
                    flex: 1;
                    max-height: 100%;
                    margin: auto;
                }
                Navbar {
                    flex: 2;
                    max-height: 100%;
                }
                a {
                    margin: auto;
                    margin-left: 1em;
                    text-decoration: none;
                    text-shadow: none;
                    background-image: none;
                }
                @media screen and (max-width: 600px) {
                    header {
                        flex-flow: column;
                    }
                }
            `}</style>
        </header>
    )
}