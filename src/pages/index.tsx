import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Index(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        <div className="hero shadow--lw bg-[url('/img/index/cheers.webp')] h-20">
          <div className="container">
            <h1 className="hero__title">Bond 的在线笔记本</h1>
            <div>
              <iframe
                width="1200"
                height="675"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <br />
            <p className="hero__subtitle">吹牛 QQ 群: 343243212</p>
            <p className="hero__subtitle">Vue 交流 QQ 群: 709382641</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
