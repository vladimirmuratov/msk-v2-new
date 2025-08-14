'use client';

import { Banner } from '@/components/Banner';
import { CardsBlock } from '@/components/CardsBlock';
import { AboutBlock } from '@/components/AboutBlock';
import { WhyWeBlock } from '@/components/WhyWeBlock';
import { WeRespondBlock } from '@/components/WeRespondBlock';
// import {WhatWeOfferBlock} from '@/components/WhatWeOfferBlock'
import { DirectionsOfHospitalizationBlock } from '@/components/DirectionsOfHospitalizationBlock';
import { BaseAccordion } from '@/components/base/Accordion/BaseAccordion';
import { PartnersBlock } from '@/components/PartnersBlock';
import { faq, services, text1 } from '@/config';
import { TextBlock } from '@/components/TextBlock';
import { ContactsBlock } from '@/components/ContactsBlock';
import { FormAction } from '@/components/FormAction';
import { VideoBanner } from '@/components/VideoBanner';
import { useEffect, useState } from 'react';
// import { Loader } from '@/components/loader/Loader/Loader';
import { Loader2 } from '@/components/loader/Loader2/Loader2';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Home() {
  const [isMobile, setMobile] = useState(undefined);

  useEffect(() => {
    const os = navigator.userAgentData.platform;

    if (os === 'Android' || os === 'iOS') {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <main style={{ position: 'relative' }}>
      {typeof isMobile === 'boolean' ? (
        <>
          {isMobile ? <Banner /> : <VideoBanner />}
          <CardsBlock />
          <BaseCallBlock text='Ответим на любые вопросы по госпитализации и лечению. Звоните!'/>
          <AboutBlock />
          <WhyWeBlock />
          <WeRespondBlock />
          {/*<WhatWeOfferBlock/>*/}
          <DirectionsOfHospitalizationBlock />
          <BaseCallBlock text='Остались вопросы? Звоните!'/>
          <BaseAccordion id="faq" title="Частые вопросы" items={faq} />
          <PartnersBlock />
          <BaseAccordion id="service" title="Услуги" items={services} />
          <TextBlock text={text1} />
          <BaseCallBlock/>
          <ContactsBlock />
          <FormAction />
        </>
      ) : (
        <Loader2 />
      )}
    </main>
  );
}
