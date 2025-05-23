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
          title="Гуруҳи (оғир ва енгил ҳолат) автоҳалокат"
          bgSrc="https://images.wallpaperscraft.ru/image/single/zheleznaia_doroga_relsy_rassvet_1217626_1920x1080.jpg"
          pageLinkText="Case Study Details"
        />
        {/* <Spacing lg="120" md="80" /> */}
        <Div className="container">
          <Spacing lg="90" md="45" />
          <p className="cs-m0">
          27.02.2025й куни соаг 08-20 ларда "Қўнғрот МТУ" филиалга қарашли ПМС-279нинг дизел маторли платформа (МПД) машинисти Даулетбаев Каримжан Аллашукурович (Қораколпоғистон Рес. Қўнғирот тум. 09.12.1979й туғилган, 3 нафар фарзанди бор, маълумоти ўрта, иш стажи 2010 й) билан оқибати ўрта оғир бахтсиз ҳодиса содир бўлган. 
27.02.2025й куни соат 08-20 ларда ПМС-279нинг МПД машинисти К.А.Даулетбаев Койбакли-Караузяк бекатлари оралиғининг 636 км.да оғир турдаги техникалар ёрдамида темир йўл изини эгри қисмини тўғрилаш мақсадида темир йўл изини ётқизиш ишлари ташкиллашлирилган. Махсус платформа вагонга юкланган темир йўл панжараларини МПД ёрдамида тортиш мақсадида ишчилар томонидан МПД лебёдкаси тросини тортиш вақтида лебёдкадаги трос қисилиб қолади ва К.А.Даулетбасв лебёдкани тўхтатмасдан қўли билан тросни ажратиш вақтида лебёдкадаги трос билан шестерня орасида Чап қўлининг 2,3 ва 4 бармоқлари қисилиб қолган. К.А.Даулетбаевга 1-чи ёрдам кўрсатилиб Нукус шахар тез тиббий ёрдам бўлимига олиб борилган. Шифокорлар томонидан К.А.Даулегбаевни Чап қўлининг ўрта бармоғи очиқ синиши, 2 ва 4 бармоқларнинг ёпик синиши ташхиси қўйилган.


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
