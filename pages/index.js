import React from 'react'
import config from "../config"
import Layout from "../src/components/Layout"
import typography from "../config/typography"

export default function Home () {
    return (
        <Layout>
            <div className="author__container" >
                <img className={"author__image"} src={config.author.image.url} alt={config.author.name} />
                <article>
                    <h1>
                    {config.author.name}
                    </h1>
                    <h2 className="author__elevatorPitch">{config.author.elevatorPitch}</h2>
                </article>
            </div>
            <style jsx>{`
                img {
					height: 30%;
					width: 30%;
                }
                .author__container {
                    position: fixed;
                    bottom: 5%;
                    width: calc(100% - 2 * ${typography.rhythm(2)});
                    height: 100%;
                    clip-path: polygon(0 39%, 100% 19%, 100% 82%, 0 100%);
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    align-items: center;
                    background-color: #FBAB7E;
										background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
										display: flex;
										flex-flow: row-reverse nowrap;
										justify-content: space-between;
										align-items: center;
                }
                article {
					margin: ${typography.rhythm(7)} auto;
				}
                .author__elevatorPitch {
                    font-family: 'Just Another Hand', cursive;
                    font-weight: normal;
                }

                @media screen and (max-width: 600px) {
                    .author__container {
                        flex-flow: column wrap; 
                    }
                    img {
                        display: none;
                    }
                    article {
                        margin: auto;
                    }
                }
            `}</style>
        </Layout>
    )
}