import Image from 'next/image'
import Link from 'next/link'

interface MenuItemProps {
  img_url: string
  img_alt: string
  title: string
  page_url: string
  // eslint-disable-next-line no-unused-vars
  handleChangeIcon: (title: string) => void
}

export default function MenuItem({ img_url, img_alt, title, page_url, handleChangeIcon }: MenuItemProps) {

  return (
    <li className="menu-item">
      <Link href={`./${page_url}`} className='flex lg:px-4 w-full lg:py-3 gap-3 hover:text-[#314CA3]' onClick={() => handleChangeIcon(`${title}`)}>
        <span>
          <Image
            src={`/images/${img_url}.svg`}
            alt={img_alt}
            width={24}
            height={24}
            className='w-[24px] h-[24px]'
          />
        </span>
        <span className='hidden lg:block'>{title}</span>
      </Link>
    </li>
  )
}