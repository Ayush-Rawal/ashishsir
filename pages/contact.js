import React from "react";
import Layout from "../src/components/Layout";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout>
      <h1 >Contact</h1>
      <p>Send an email to <a href="mailto:ashish@iiitkota.ac.in">ashish [at] iiitkota.ac.in</a> or use the form below.</p>
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <div className="parent">
          <label>Your Name:</label> <input type="text" name="name" />
          <label>Your Email:</label> <input type="email" name="email" />
          <label>Message:</label> <textarea style={{flex:4}} name="message" />
      </div>
        <p className="button">
          <button type="submit">Send</button>
        </p>
				<p style={{visibility: "hidden"}}>
					<label>Don’t fill this out if you're human: <input name="bot-field" /></label>
				</p>
      </form>
      <style jsx>{`
      .parent { 
        display: grid; 
        grid-template-columns: 1fr 2fr; 
        grid-template-rows: repeat(2, 1fr) 3fr; 
        grid-column-gap: 8px;
        grid-row-gap: 16px; 
        }
			form {
				margin: 10%;
      }
			.button {
				display: flex;
				justify-content: center;
        align-items: center;
        margin: 2em;
			}
			`}</style>
    </Layout>
  );
}
