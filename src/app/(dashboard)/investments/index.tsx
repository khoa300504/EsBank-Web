import Image from 'next/image'
import KeyMetric from '~/components/KeyMetric'
// import StatisticsInvestmentChart from '~/components/DotLineChart'
import SectionTitle from '~/components/SectionTitle'

function InvestmentsPage() {
  return (
    <div className="investments flex flex-col px-10 gap-7">
      {/* Overview */}
      <div className="hidden lg:flex mt-7 font-inter gap-[30px]">
        <KeyMetric img_url='img_money' title='Total Invested Amount' data='$150,000' width='1/3'/>
        <KeyMetric img_url='img_investment_02' title='Number of Investments' data='1,250' width='1/3'/>
        <KeyMetric img_url='img_income' title='Rate of Return' data='+5.80%' width='1/3'/>
      </div>
      <div className="flex lg:hidden mt-7 font-inter">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <KeyMetric img_url='img_money' title='Total Invested Amount' data='$150,000' width='full'/>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <KeyMetric img_url='img_investment_02' title='Number of Investments' data='1,250' width='full'/>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <KeyMetric img_url='img_income' title='Rate of Return' data='+5.80%' width='full'/>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
      {/* Trend and investment status */}
      <div className="flex flex-col lg:flex-row gap-[30px]">
        <div className="w-full lg:w-3/5 flex flex-col gap-[14px]">
          <div className=""><SectionTitle title='My Investment'/></div>
          {/* List investments */}
          <div className="flex flex-col gap-[14px] w-full">
            <div className="flex items-center bg-white rounded-2xl p-[14px] font-inter h-full gap-5">
              <div className="flex gap-1 justify-center p-[16px] bg-[#F4F4F6] h-full rounded-2xl">
                <Image
                  className=''
                  alt=''
                  src='/images/img_apple.svg'
                  height={24}
                  width={24}
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 items-start">
                <div className="text-base text-[#182651] font-medium">Apple Store</div>
                <div className="text-[15px] text-lgray">E-commerce, Marketplace</div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="text-base text-[#182651] font-medium">$54,000</div>
                <div className="text-[15px] text-lgray">Envestment Value</div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="text-base text-[#359766] font-medium">+16%</div>
                <div className="text-[15px] text-lgray">Return Value</div>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-2xl p-[14px] font-inter h-full gap-5">
              <div className="flex gap-1 justify-center p-[16px] bg-[#F4F4F6] h-full rounded-2xl">
                <Image
                  className=''
                  alt=''
                  src='/images/img_apple.svg'
                  height={24}
                  width={24}
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 items-start">
                <div className="text-base text-[#182651] font-medium">Apple Store</div>
                <div className="text-[15px] text-lgray">E-commerce, Marketplace</div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="text-base text-[#182651] font-medium">$54,000</div>
                <div className="text-[15px] text-lgray">Envestment Value</div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="text-base text-[#359766] font-medium">+16%</div>
                <div className="text-[15px] text-lgray">Return Value</div>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-2xl p-[14px] font-inter h-full gap-5">
              <div className="flex gap-1 justify-center p-[16px] bg-[#F4F4F6] h-full rounded-2xl">
                <Image
                  className=''
                  alt=''
                  src='/images/img_apple.svg'
                  height={24}
                  width={24}
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 items-start">
                <div className="text-base text-[#182651] font-medium">Apple Store</div>
                <div className="text-[15px] text-lgray">E-commerce, Marketplace</div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="text-base text-[#182651] font-medium">$54,000</div>
                <div className="text-[15px] text-lgray">Envestment Value</div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="text-base text-[#359766] font-medium">+16%</div>
                <div className="text-[15px] text-lgray">Return Value</div>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-2xl p-[14px] font-inter h-full gap-5">
              <div className="flex gap-1 justify-center p-[16px] bg-[#F4F4F6] h-full rounded-2xl">
                <Image
                  className=''
                  alt=''
                  src='/images/img_apple.svg'
                  height={24}
                  width={24}
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 items-start">
                <div className="text-base text-[#182651] font-medium">Apple Store</div>
                <div className="text-[15px] text-lgray">E-commerce, Marketplace</div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="text-base text-[#182651] font-medium">$54,000</div>
                <div className="text-[15px] text-lgray">Envestment Value</div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="text-base text-[#359766] font-medium">+16%</div>
                <div className="text-[15px] text-lgray">Return Value</div>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-2xl p-[14px] font-inter h-full gap-5">
              <div className="flex gap-1 justify-center p-[16px] bg-[#F4F4F6] h-full rounded-2xl">
                <Image
                  className=''
                  alt=''
                  src='/images/img_apple.svg'
                  height={24}
                  width={24}
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 items-start">
                <div className="text-base text-[#182651] font-medium">Apple Store</div>
                <div className="text-[15px] text-lgray">E-commerce, Marketplace</div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="text-base text-[#182651] font-medium">$54,000</div>
                <div className="text-[15px] text-lgray">Envestment Value</div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="text-base text-[#359766] font-medium">+16%</div>
                <div className="text-[15px] text-lgray">Return Value</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col gap-[14px]">
          <div className=""><SectionTitle title='Trending Stock'/></div>
          <div className="bg-white rounded-2xl">
            <div className="overflow-x-auto">
              <table className="table font-inter">
                <thead>
                  <tr className='text-base text-lgray'>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Return</th>
                  </tr>
                </thead>
                <tbody className='text-[#182651]'>
                  <tr>
                    <th>1</th>
                    <td>Trivago</td>
                    <td>$520</td>
                    <td className='text-[#359766]'>+10%</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Canon</td>
                    <td>$480</td>
                    <td className='text-[#359766]'>-3%</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Nokia</td>
                    <td>$940</td>
                    <td className='text-[#359766]'>+2%</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Tiktok</td>
                    <td>$670</td>
                    <td className='text-[#359766]'>-12%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Investment Detail */}
      <div className=""></div>
    </div>
  )
}

export default InvestmentsPage