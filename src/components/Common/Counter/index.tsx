'use client';
import { useTranslations } from 'next-intl';
import CountUp from './CountUp';

import { Testimonial } from '@/types/testimonial';
  
  
  
  const Counter = (props:any) => {
    const { pageTraslation } = props;
    const t = useTranslations(`${pageTraslation}.counter_section`);

  return (
    <section className='counter-section relative overflow-hidden pb-17.5 pt-17.5 lg:pb-22.5 xl:pb-27.5'>
      <div className='absolute left-1/2 top-0 h-px w-full max-w-[1170px] -translate-x-1/2 bg-gradient-to-r from-[#D7D7D7]/0 via-[#D7D7D7] to-[#D7D7D7]/0 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800'></div>

      <div className='mx-auto w-full  px-4 sm:px-8 xl:px-0'>
        <h2 className='mb-12.5 text-center font-satoshi text-heading-5 font-bold -tracking-[1.2px] text-black dark:text-white'>
          {t('title')}
        </h2>

        <div className='flex flex-col items-center justify-center gap-7.5 sm:flex-row lg:gap-12.5 xl:gap-17.5'>
          <div className='w-[250px] text-center '>
            <h3 className='mb-2.5 font-satoshi text-heading-4 font-bold -tracking-[1.6px] text-primary lg:text-heading-2 xl:text-[55px] xl:leading-[1.05]'>
              <CountUp targetNumber={1000} />
              <span className='-ml-3'>+</span>
            </h3>
            <p className='text-lg font-medium -tracking-[0.2px]'>
              
              {t('type_one')}
            </p>
          </div>

          {/* <!-- divider --> */}
          <div className='h-px w-20 bg-stroke dark:bg-stroke-dark sm:h-20 sm:w-px'></div>

          <div className='w-[250px] text-center'>
            <h3 className='mb-2.5 font-satoshi text-heading-4 font-bold -tracking-[1.6px] text-primary lg:text-heading-2 xl:text-[55px] xl:leading-[1.05]'>
              <CountUp targetNumber={1260} />
              <span className='-ml-3'>+</span>
            </h3>
            <p className='text-lg font-medium -tracking-[0.2px]'>
              {t('type_two')}
              
            </p>
          </div>

          {/* <!-- divider --> */}
          <div className='h-px w-20 bg-stroke dark:bg-stroke-dark sm:h-20 sm:w-px'></div>

          <div className='w-[250px] text-center'>
            <h3 className='mb-2.5 font-satoshi text-heading-4 font-bold -tracking-[1.6px] text-primary lg:text-heading-2 xl:text-[55px] xl:leading-[1.05]'>
              <CountUp targetNumber={320} />
              <span className='-ml-3'>+</span>
            </h3>
            <p className='text-lg font-medium -tracking-[0.2px]'>
              {t('type_three')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
