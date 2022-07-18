import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import siteMetadata from '@generated/site-metadata';


export default function Index(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main>
        
        <div className="hero shadow--lw bg-[url('/img/index/cheers.webp')] h-20">
          <div className="container">
            <h1 className="hero__title">交流分享前端开发技术~</h1>
            <p className="hero__subtitle">点击上面的链接看看吧~</p>
            <img src="img/index/cheers.webp" alt="干杯" className='block w-80 h-80' />
            <div>
              <button className="button button--secondary button--outline button--lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
