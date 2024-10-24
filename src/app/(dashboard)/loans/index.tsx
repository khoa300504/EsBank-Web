import KeyMetric from '~/components/KeyMetric'
import SectionTitle from '~/components/SectionTitle'

export default function LoansPage() {
  return (
    <div className="loans flex flex-col px-10 gap-7">
      <div className="hidden lg:flex mt-7 font-inter gap-[30px]">
        <KeyMetric img_url="img_user_02" title="Personal Loans" data="$50,000" width='1/3'/>
        <KeyMetric img_url="img_business" title="Business Loans" data="$500,000" width='1/3'/>
        <KeyMetric img_url="img_payday" title="Payday loans" data="$1,000" width='1/3'/>
      </div>
      <div className="flex lg:hidden mt-7 font-inter">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <KeyMetric img_url="img_user_02" title="Personal Loans" data="$50,000" width='full'/>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <KeyMetric img_url="img_business" title="Business Loans" data="$500,000" width='full'/>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <KeyMetric img_url="img_payday" title="Payday loans" data="$1,000" width='full'/>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[14px] font-inter">
        <div className="">
          <SectionTitle title='Active Loans Overview'/>
        </div>
        <div className="bg-white rounded-3xl">
          <div className="overflow-x-auto">
            <table className="table table-lg">
              <thead className='font-base'>
                <tr>
                  <th>No</th>
                  <th>Loan Money</th>
                  <th>Left to repay</th>
                  <th>Duration</th>
                  <th>Interest rate</th>
                  <th>Repay</th>
                </tr>
              </thead>
              <tbody className=''>
                <tr>
                  <th>1</th>
                  <td>$80,000</td>
                  <td>$40,500</td>
                  <td>8 Months</td>
                  <td>12%</td>
                  <th>
                    <button className="btn rounded-3xl btn-outline btn-info hover:!text-white">Repay</button>
                  </th>
                </tr>
                <tr>
                  <th>2</th>
                  <td>$100,000</td>
                  <td>$80,000</td>
                  <td>12 Months</td>
                  <td>5%</td>
                  <th>
                    <button className="btn rounded-3xl btn-outline btn-info hover:!text-white">Repay</button>
                  </th>
                </tr>
                <tr>
                  <th>3</th>
                  <td>$500,000</td>
                  <td>$150,000</td>
                  <td>24 Months</td>
                  <td>5%</td>
                  <th>
                    <button className="btn rounded-3xl btn-outline btn-info hover:!text-white">Repay</button>
                  </th>
                </tr>
                <tr>
                  <th>4</th>
                  <td>$50,000</td>
                  <td>$20,000</td>
                  <td>6 Months</td>
                  <td>7%</td>
                  <th>
                    <button className="btn rounded-3xl btn-outline btn-info hover:!text-white">Repay</button>
                  </th>
                </tr>
                <tr>
                  <th>5</th>
                  <td>$200,000</td>
                  <td>$50,000</td>
                  <td>12 Months</td>
                  <td>5%</td>
                  <th>
                    <button className="btn rounded-3xl btn-outline btn-info hover:!text-white">Repay</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}