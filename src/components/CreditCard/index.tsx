import Image from 'next/image'

interface CardInfo {
  card_holder: string
  card_valid_date: string
  card_number: string
  card_balance: string
}

export default function CreditCard({ card_holder, card_valid_date, card_number, card_balance }: CardInfo) {
  return (
    <div className="credit-card flex flex-col h-60 gap-6 bg-dblue text-white w-4/5 self-center sm:w-[48%] rounded-3xl">
      {/* card-section-1 */}
      <div className="h-1/3 flex items-center justify-between px-6 pt-6">
        <div className="flex flex-col justify-start">
          <div className="font-lato text-xs">Balance</div>
          <div className="font-inter text-xl">${card_balance}</div>
        </div>
        <div className="">
          <Image
            alt='Chip Card'
            src='/images/img_chip_card.png'
            height={34}
            width={34}
          />
        </div>
      </div>
      {/* card-section-2 */}
      <div className="h-1/3 flex items-center justify-between font-inter px-6">
        <div className="">
          <div className="text-xs">CARD HOLDER</div>
          <div className="text-[15px]">{card_holder}</div>
        </div>
        <div className="">
          <div className="text-xs">VALID THRU</div>
          <div className="text-[15px]">{card_valid_date}</div>
        </div>
      </div>
      {/* card-section-3 */}
      <div className="h-1/3 bg-[#4B62AD] rounded-b-3xl flex items-center justify-between px-6">
        <div className="font-inter text-[22px]">{card_number}</div>
        <div className="">
          <Image
            alt='Logo'
            src='/images/img_new_logo.svg'
            height={30}
            width={30}
          />
        </div>
      </div>
    </div>
  )
}