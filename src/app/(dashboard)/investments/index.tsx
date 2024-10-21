import Image from 'next/image'
// import StatisticsInvestmentChart from '~/components/DotLineChart'
import SectionTitle from '~/components/SectionTitle'

function InvestmentsPage() {
  return (
    <div className="investments flex flex-col w-full px-10 gap-7 h-full">
      {/* Overview */}
      <div className="flex mt-7 font-inter gap-[30px]">
        <div className="flex w-1/3  items-center gap-[14px] p-6 bg-white rounded-3xl">
          <div className="px-5 bg-[#F4F4F6] h-full flex items-center rounded-full cursor-pointer">
            <Image
              alt=''
              src='/images/img_money.svg'
              width={31}
              height={31}
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="text-base text-lgray">Total Invested Amount</div>
            <div className="text-xl text-dblue font-semibold">$150,000</div>
          </div>
        </div>
        <div className="flex w-1/3 justify-start items-center gap-[14px] p-6 bg-white rounded-3xl">
          <div className="px-5 bg-[#F4F4F6] h-full flex items-center rounded-full cursor-pointer">
            <Image
              alt=''
              src='/images/img_money_tranfer.svg'
              width={31}
              height={31}
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="text-base text-lgray">Number of Investments</div>
            <div className="text-xl text-dblue font-semibold">1,250</div>
          </div>
        </div>
        <div className="flex w-1/3 justify-start items-center gap-[14px] p-6 bg-white rounded-3xl">
          <div className="px-5 bg-[#F4F4F6] h-full flex items-center rounded-full cursor-pointer">
            <Image
              alt=''
              src='/images/img_income.svg'
              width={31}
              height={31}
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="text-base text-lgray">Rate of Return</div>
            <div className="text-xl text-dblue font-semibold">+5.80%</div>
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