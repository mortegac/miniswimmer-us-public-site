import SectionHeader from '@/components/Common/SectionHeader';
import { FeatureWithImg } from '@/types/featureWithImg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const FeaturesWithImage = (props:any) => {
  const { pageTraslation } = props;
  const t = useTranslations(`${pageTraslation}.features_with_image_section`);
  // const t = useTranslations('homepage.features_with_image_section');
  const featureItemData: FeatureWithImg[] = t.raw('items');

  return (
    <section className='overflow-hidden py-17.5 lg:py-22.5 xl:py-27.5'>
      {/* <!-- section title --> */}
      <SectionHeader title={t('title')} description={t('subtitle')} />

      <div className='mx-auto w-full max-w-[1040px] px-4 sm:px-8 xl:px-0'>
        {featureItemData?.map((data:any, i) => (
          <div
            key={data.title}
            className={`flex flex-col items-center justify-between gap-10 ${
              i % 2 === 0 ? 'sm:flex-row' : 'pt-17.5 sm:flex-row-reverse lg:pt-22.5 xl:pt-27.5'
            }`}
          >
            <div className='w-full max-w-[475px]'>
              <p className='mb-2.5 font-satoshi text-xl text-center text-slate-500 dark:text-white bg-slate-100 py-1 px-2'>
              {data?.subtitle2}
              </p>
              <h3 className='mb-4.5 font-satoshi text-2xl font-bold text-black dark:text-white lg:text-3xl xl:text-heading-4'>
                {data?.title}
              </h3>
              <p className='dark:text-gray-5'>{data?.subtitle}</p>

              <ul className='mt-7.5 flex flex-col items-start justify-start gap-3'>
                {data?.features?.map((feature:any) => (
                  <li key={feature} className='flex items-center gap-3'>
                    <svg
                      width='62'
                      height='62'
                      viewBox='0 0 22 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M20.1668 10.9999C20.1668 16.0625 16.0628 20.1666 11.0002 20.1666C5.93755 20.1666 1.8335 16.0625 1.8335 10.9999C1.8335 5.93731 5.93755 1.83325 11.0002 1.83325C16.0628 1.83325 20.1668 5.93731 20.1668 10.9999ZM14.6946 8.22212C14.9631 8.4906 14.9631 8.9259 14.6946 9.19439L10.1113 13.7777C9.84281 14.0462 9.40751 14.0462 9.13903 13.7777L7.30569 11.9444C7.03721 11.6759 7.03721 11.2406 7.30569 10.9721C7.57418 10.7036 8.00948 10.7036 8.27797 10.9721L9.62516 12.3193L11.6738 10.2707L13.7224 8.22212C13.9908 7.95363 14.4261 7.95363 14.6946 8.22212Z'
                        fill='#ae5eab'
                      />
                    </svg>

                    <span className='text-base font-satoshi'>
                      {feature.split(/<marker>(.*?)<\/marker>/).map((part: string, index: number) => {
                        if (index % 2 === 1) {
                          return (
                            <span key={index} className="relative text-slate-600 font-medium text-xl">
                              {part}
                            </span>
                          );
                        }
                        return part;
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='w-full max-w-[484px] overflow-hidden'>
              { data?.img && (
                <div className='transition-transform duration-300 ease-in-out hover:scale-110'>
                  <Image src={data?.img} alt={data?.title} width={484} height={400} />
                </div>
              )}
            </div>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesWithImage;
