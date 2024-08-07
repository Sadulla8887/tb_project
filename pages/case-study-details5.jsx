import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Cta from '../components/Cta';
import Div from '../components/Div';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';

export default function CaseStudyDetails() {
  return (
    <>
      <Head>
        <title>Case Study Details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Оғир"
          bgSrc="https://images.wallpaperscraft.ru/image/single/zheleznaia_doroga_relsy_rassvet_1217626_1920x1080.jpg"
          pageLinkText="Case Study Details"
        />
        {/* <Spacing lg="120" md="80" /> */}
        <Div className="container">
          <Spacing lg="90" md="45" />
          <p className="cs-m0">
          2024-йил 01-апрел куни поезд тузувчи Маҳамадалиев Абдулла Ҳаким ўғли соат 11-17лар атрофида тепалик (Горка)дан вагонларни узиш пайтида авлоулагич узилмай қолган. Вагонлар орасидаги автоулагич узилмагач меҳнат мухофазаси қоидаларини қўпол равишда бузиб ҳаракатланаётган вагонлар орасига кириб ўнг оёғини релс устига қўйиб чап оёғи билан автоулагични тепган. Ўнг оёқ панжа қисмидан жароҳат олган. 
          </p>
        </Div>
        <Div className="container">
          {/* <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          /> */}
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
