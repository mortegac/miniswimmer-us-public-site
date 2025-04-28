export default function Newsletter() {
  return (
    // <section className="relative z-10 overflow-hidden bg-[linear-gradient(90deg,#F7E8F3_0%,#E0E0FC_100%)] py-17.5 dark:bg-gradient-to-t dark:from-gray-dark dark:to-gray-dark lg:py-[100px]">
    <section className="relative z-10 overflow-hidden bg-[linear-gradient(90deg,#ae5eab_0%,#be7ebb_100%)] py-17.5 dark:bg-gradient-to-t dark:from-gray-dark dark:to-gray-dark lg:py-[100px]">
      <div className="container mx-auto w-full max-w-[1170px]">
        <div className="mx-auto w-full max-w-[590px]">
          <div className="text-center">
            <h2 className="mb-5 font-satoshi text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-heading-2">
            {/* ¡Suscríbete a nuestro newsletter! */}
            ¡Suscríbete a <span className='relative text-[#87e0ff]'>Nuestro Newsletter!</span>
            </h2>
            <p className="mb-10 text-base text-slate-50 dark:text-gray-4">
              No te pierdas nuestras clases especiales de natación para bebés, niños, embarazadas y adultos. Entérate de eventos, descuentos y aprende sobre la prevención, seguridad y el método Miniswimmer para desarrollar nadadores confiados e independientes.
            </p>
          </div>

          <form className="relative mx-auto flex w-full max-w-[490px] flex-wrap justify-end">
            <input
              required
              type="email"
              placeholder="Enter your Name"
              className=" mb-4 h-12 w-full rounded-full bg-white px-7.5 shadow-[0px_5px_15px_0px_rgba(7,10,46,0.04)] outline-none ring-offset-1 duration-300 focus:shadow-input focus:ring-primary/20 dark:bg-white/5 dark:focus:ring-dark/20 lsm:h-16 lsm:pr-[150px]"
            />
            <input
              required
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full rounded-full bg-white px-7.5 shadow-[0px_5px_15px_0px_rgba(7,10,46,0.04)] outline-none ring-offset-1 duration-300 focus:shadow-input focus:ring-primary/20 dark:bg-white/5 dark:focus:ring-dark/20 lsm:h-16 lsm:pr-[150px]"
            />
            <button
              type="submit"
              className="mt-4 h-12 min-w-[125px] items-center justify-center rounded-full bg-primary px-7 font-satoshi text-base font-medium text-white duration-300 hover:bg-primary-dark "
              // className="right-2 mt-4 inline-flex h-12 min-w-[125px] items-center justify-center rounded-full bg-primary px-7 font-satoshi text-base font-medium text-white duration-300 hover:bg-primary-dark lsm:absolute lsm:top-1/2 lsm:mt-0 lsm:-translate-y-1/2"
            >
              Subscribirse
            </button>
          </form>
        </div>
      </div>

      {/* <Graphics /> */}
    </section>
  );
}
