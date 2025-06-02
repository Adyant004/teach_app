import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/Cta'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id="123" name="ABC" topic="ABSTOPc" subject="ABCSub" duration={23} color="#ffda54"
        />
        <CompanionCard 
          id="456" name="ABC" topic="ABSTOPc" subject="ABCSub" duration={23} color="#ffda54"
        />
        <CompanionCard 
          id="789" name="ABC" topic="ABSTOPc" subject="ABCSub" duration={23} color="#ffda54"
        />
      </section>

      <section className='home-section'>
        <CompanionList title='AGDC' companions={recentSessions} classNames='w-2/3 max-lg:w-full' />
        <Cta />
      </section>
    </main>
  )
}

export default Page