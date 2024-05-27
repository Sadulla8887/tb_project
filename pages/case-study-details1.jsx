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
          title="Ўрта бўғин раҳбарлари-нинг ўз вазифасига масъулиятсиз-лиги ва технологик жараён талаблари риоя этмаслик"
          bgSrc="https://images.wallpaperscraft.ru/image/single/zheleznaia_doroga_relsy_rassvet_1217626_1920x1080.jpg"
          pageLinkText="Case Study Details"
        />
        {/* <Spacing lg="120" md="80" /> */}
        <Div className="container">
          <Spacing lg="90" md="45" />
          <p className="cs-m0">
          2024 йил 05-март куни ЭЧК-20 Темирйўлобод контакт тармоғи бўлими ишчи-ходимлари томонидан Чодак-Кон бекатлар оралиғи 62км пк2 дан пк7 гача ВМТ-1139 дрезинаси ва изоляцияланган кўчма минора (ИКМ) №20/4 ёрдамида контакт тармоғи симини тарқатиш (раскатка к/провод) ишларини бажариш учун ЭЧК-20 катта электромеханиги Ж. Собиров томонидан  5-кв. гуруҳ электромеханиги Ж.А. Ғаниевга  10-сонли наряд – ижозатнома берилган бўлиб, бригада таркибида 9 нафар ишчи-ходим бўлган. Ишлар энергодиспетчернинг №410 сонли буйруғи билан соат 12-16 да бошланган. Соат 13-30 лар атрофида контакт тармоғида иш олиб бораётган бригада таркибидаги меҳнат муҳофазаси бўйича 3-малакавий гуруҳга эга бўлган ЭЧК-20 электромонтёри Шомамутов Нодиржон Нарзиддинович (1989 йил 21 феврал куни Наманган вилояти, Поп тумани Чодак қишлоғида туғилган, маълумоти ўрта- махсус, оилали, 3 нафар фарзанди бор, темир йўлдаги иш стажи 2021 йилдан)  изоляцияланган қўчма минорадан оёғи тойиб кетиши натижасида ўнг оёғи шикастланиб  оқибати ўрта оғир бахтсиз ходиса содир бўлган. 
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