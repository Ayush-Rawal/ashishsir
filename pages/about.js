import React from "react"
import config from "../config"
import Link from "next/link"
import Layout from "../src/components/Layout"
import typography from "../config/typography"

export default function About () {
    return (
        <Layout>
                <article>
                    <img src={config.author.image.url} alt={config.author.name} />
                    {config.author.about ?
                        (Array.isArray(config.author.about) ? 
                                config.author.about.map(el => (<p>{el}</p>))
                            : 
                                <p>{config.author.about}</p>
                        )
                    : 
                        <p>About {config.author.name}</p>}
                </article>
                <article>
                    <h2>Research Interests</h2>
                    <ul>
                        <li>Hardware Security</li>
                        <li>Network-on-Chip</li>
                        <li>Power</li>
                        <li>Thermal and Reliability-Aware Design</li>
                    </ul>
                </article>
								<article>
									<h2>Publications</h2>
									<ul>
										<li><Link href="http://scholar.google.com/scholar?cluster=2782710463511356593&hl=en&oi=scholarr" >HiPER-NIRGAM: A TOOL CHAIN BASED FRAMEWORK FOR MODELING THERMAL-AWARE RELIABILITY ESTIMATION IN 2D MESH NoCs</Link></li>
										<li><Link href="https://ieeexplore.ieee.org/abstract/document/7208063/" >A framework for thermal aware reliability estimation in 2d noc</Link></li>
										<li><Link href="https://ieeexplore.ieee.org/abstract/document/8293938/" >A Power, Thermal and Reliability-Aware Network-on-Chip</Link></li>
										<li><Link href="https://ieeexplore.ieee.org/abstract/document/8064897/" >Reducing fifo buffer power using architectural alternatives at rtl</Link></li>
										<li><Link href="https://link.springer.com/chapter/10.1007/978-981-13-5950-7_40">3D LBDR: Logic-Based Distributed Routing for 3D NoC</Link></li>
										<li><Link href="https://dl.acm.org/citation.cfm?id=2768180" >Improved route selection approaches using q-learning framework for 2d nocs</Link></li>

										<Link href="https://scholar.google.co.in/citations?user=LKcRYn8AAAAJ&hl=en">
                        <a><b>See all Publications on Google Scholars Profile</b></a>
                    </Link>
									</ul>
								</article>
            <style jsx>{`
                img {
                    float: right;
                    border-radius: 50%;
                    margin: auto ${typography.rhythm()};
                    height: ${typography.rhythm(4)};
                    width: ${typography.rhythm(4)};
                }
            `}</style>
        </Layout>
    )
}