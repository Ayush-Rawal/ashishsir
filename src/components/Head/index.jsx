import React from 'react'
import _Head from 'next/head'
import {TypographyStyle, GoogleFont} from "react-typography"
import config from '../../../config'
import typography from "../../../config/typography"

export default function Head (props) {
    return (
        <_Head>
            <title key="title">{props.title || config.site.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <TypographyStyle typography={typography} />
            <GoogleFont typography={typography} />
            <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet" /> 
        </_Head>
    )
}
