import { Menu } from '@/types/menu';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Dropdown = ({
  stickyMenu,
  item,
  setNavbarOpen,
}: {
  stickyMenu: boolean;
  item: Menu;
  setNavbarOpen: any;
}) => {
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();

  const t = useTranslations('header');

  return (
    <div className='group relative'>
      <button
        onClick={() => setDropdown(!dropdown)}
        className='flex w-full items-center justify-between gap-1.5 rounded-full px-[14px] py-[3px] font-satoshi font-medium text-dark group-hover:bg-primary/5 group-hover:text-primary dark:text-gray-5 dark:group-hover:bg-white/5 dark:group-hover:text-white'
      >
        {t('pages')}
        <svg
          className='group-hover:rotate-180'
          width='19'
          height='18'
          viewBox='0 0 19 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.29314 6.38394C4.49532 6.14807 4.85042 6.12075 5.0863 6.32293L9.97022 10.5092L14.8542 6.32293C15.09 6.12075 15.4451 6.14807 15.6473 6.38394C15.8495 6.61981 15.8222 6.97492 15.5863 7.17709L10.3363 11.6771C10.1256 11.8576 9.8148 11.8576 9.60415 11.6771L4.35415 7.17709C4.11828 6.97492 4.09097 6.61981 4.29314 6.38394Z'
            fill='currentColor'
          />
        </svg>
      </button>

      {/* <!-- Dropdown Start --> */}
      <ul
        className={`dropdown space-y-1.5 ${
          stickyMenu ? 'mt-2 lg:-mt-3' : 'mt-2 lg:mt-0'
        } ${dropdown && 'flex'}`}
      >
        {item?.submenu &&
          item?.submenu.map((item:any, i) => (
            <li key={i}>
              <Link
                onClick={() => {
                  setDropdown(false);
                  setNavbarOpen(false);
                }}
                href={item?.path}
                className={`flex rounded-[5px] px-4.5 py-[11px] text-dark duration-300 hover:bg-primary hover:text-white dark:text-gray-5 dark:hover:text-white ${
                  pathname === item?.path ? 'bg-primary text-white dark:text-white' : ''
                }`}
              >
                {t(item?.titleKey)}
              </Link>
            </li>
          ))}
      </ul>
      {/* //   <!-- Dropdown End --> */}
    </div>
  );
};

export default Dropdown;
