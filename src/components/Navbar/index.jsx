import React from 'react'
import Link from "next/link"
import config from "../../../config"

export default function Navbar (props) {
    return (
        <nav className="nav__container" >
            <Link prefetch href="/">
                <a>Home</a>
            </Link>
            <Link prefetch href="/about">
                <a>About</a>
            </Link>
            {config.links && config.links.internal && config.links.internal.map(link => (
            <Link key={link.name} prefetch href={link.link || ""}>
                <a>{link.name}</a>
            </Link>
            ))}
            <Link prefetch href="/contact">
                <a>Contact</a>
            </Link>
            <style jsx>{`
            .nav__container {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                align-items: center;
                max-width: 66vw;
                max-height: 100%;
            }
            @media screen and (max-width: 600px) {
                .nav__container {
                    
                }
                a {
                    margin: auto 0.4em;
                }
            }
            `}</style>
        </nav>
    )
}