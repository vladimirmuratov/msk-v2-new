import {Banner} from '@/components/Banner'
import {CardsBlock} from '@/components/CardsBlock'
import {AboutBlock} from '@/components/AboutBlock'
import {WhyWeBlock} from '@/components/WhyWeBlock'
import {WeRespondBlock} from '@/components/WeRespondBlock'
import {WhatWeOfferBlock} from '@/components/WhatWeOfferBlock'
import {DirectionsOfHospitalizationBlock} from '@/components/DirectionsOfHospitalizationBlock'
import {BaseAccordion} from '@/components/base/Accordion/BaseAccordion'
import {PartnersBlock} from '@/components/PartnersBlock'
import {faq, services, text1} from '@/config'
import {TextBlock} from '@/components/TextBlock'
import {ContactsBlock} from '@/components/ContactsBlock'
import {FormAction} from '@/components/FormAction'

export default function Home() {
    return (
        <main style={{position: 'relative'}}>
            <Banner/>
            <CardsBlock/>
            <AboutBlock/>
            <WhyWeBlock/>
            <WeRespondBlock/>
            {/*<WhatWeOfferBlock/>*/}
            <DirectionsOfHospitalizationBlock/>
            <BaseAccordion id='faq' title='Частые вопросы' items={faq}/>
            <PartnersBlock/>
            <BaseAccordion id='service' title='Услуги' items={services}/>
            <TextBlock text={text1}/>
            <ContactsBlock/>
            <FormAction/>
        </main>
    )
}
