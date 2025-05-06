'use client';

import { useState } from 'react';
import SectionHeader from '@/components/Common/SectionHeader';
import type { FeatureItem } from '@/types/featureItem';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  nombre: yup.string().required('El nombre es requerido'),
  email: yup.string().email('Email inválido').required('El email es requerido'),
  mensaje: yup.string().required('El mensaje es requerido')
}).required();

type FormData = yup.InferType<typeof schema>;

const Features = (props:any) => {
  const { pageTraslation } = props;
    const t = useTranslations(`${pageTraslation}.features_section`);
    // const featuresTop: FeatureItem[] = t.raw('featuresTop');
    // const features: FeatureItem[] = t.raw('features');

    
    
  // const t = useTranslations('homepage.features_section');
  // const featuresData: FeatureItem[] = t.raw('features');

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Aquí puedes agregar la lógica para enviar el formulario
      console.log(data);
      reset();
      alert('Formulario enviado con éxito');
    } catch (error) {
      console.error(error);
      alert('Error al enviar el formulario');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id='features'
      className='relative z-1 overflow-hidden bg-[linear-gradient(90deg,#7e7e7e_0%,#3b3b3b_100%)] py-17.5 dark:bg-black dark:text-white lg:py-22.5 xl:py-27.5'
    >
      {/* <!-- section title --> */}
      {/* <SectionHeader title={t('title')} description={t('subtitle')} /> */}

      <div className='relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <div className='flex justify-center items-center'>
       
            <div
              key={"KEY-CONTACT_FORM"}
              className='max-w-[600px] w-full bg-white border border-[rgba(0,17,51,0.15)] rounded-[24px] p-[48px] flex flex-col justify-start items-start relative'
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4  w-full">
                <div>
                  <label htmlFor="nombre" className="block text-lg font-light text-gray-700 dark:text-gray-300">
                    Nombre
                  </label>
                  <input
                    {...register('nombre')}
                    type="text"
                    id="nombre"
                    className="mt-1 mb-12 block w-full min-w-full h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]font-normal text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.nombre && (
                    <p className="-mt-10 text-sm text-red-300">{errors.nombre.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-light text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="mt-1 mb-12 block w-full h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]  text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.email && (
                    <p className="-mt-10 text-sm text-red-300">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-lg font-light text-gray-700 dark:text-gray-300">
                    ¿Cómo te podemos ayudar?
                  </label>
                  <textarea
                    {...register('mensaje')}
                    id="mensaje"
                    rows={4}
                    className="mt-1 mb-12 block w-full border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]  text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.mensaje && (
                    <p className="-mt-10 text-sm text-red-300">{errors.mensaje.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </form>
            </div>
      
        </div>
        

      </div>
    </section>
  );
};

export default Features;
