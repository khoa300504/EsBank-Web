import Image from 'next/image'

interface KeyMetricData {
  img_url: string
  title: string
  data: string
  width: string
}

export default function KeyMetric({ img_url, title, data, width }: KeyMetricData) {
  return (
    <div className={`flex w-${width} justify-center lg:justify-start items-center gap-[14px] p-6 bg-white rounded-3xl`}>
      <div className="px-5 bg-[#F4F4F6] h-full flex items-center rounded-full cursor-pointer">
        <Image
          alt=''
          src={`/images/${img_url}.svg`}
          width={26}
          height={26}
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="text-base text-lgray">{title}</div>
        <div className="text-xl text-dblue font-semibold">{data}</div>
      </div>
    </div>
  )
}