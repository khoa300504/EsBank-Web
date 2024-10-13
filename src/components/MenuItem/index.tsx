import Image from 'next/image'
import Link from 'next/link'

type MenuItemProps = {
  img_url: string
  img_alt: string
  title: string
}

export default function MenuItem({ img_url, img_alt, title }: MenuItemProps) {
  return (
    <li className="menu-item">
      <Link href="" className='flex px-4 py-3 gap-3 hover:text-[#314CA3]'>
        <span>
          <Image
            src={`/images/${img_url}.svg`}
            alt={img_alt}
            width={24}
            height={24}
            className='w-[24px] h-[24px]'
          />
        </span>
        <span className=''>{title}</span>
      </Link>
    </li>
  )
}