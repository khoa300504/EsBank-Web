import MenuItem from '../MenuItem'

export default function Sidebar() {
  return (
    <nav className="side-menu">
      <ul className='flex flex-col gap-5 font-inter text-lg text-[#888EA2] font-medium'>
        <MenuItem img_url='img_home' img_alt='Home Icon' title='Dashboard'/>
        <MenuItem img_url='img_transaction' img_alt='Transactions Icon' title='Transactions'/>
        <MenuItem img_url='img_investment' img_alt='Investments Icon' title='Investments'/>
        <MenuItem img_url='img_loan' img_alt='Loans Icon' title='Loans'/>
        <MenuItem img_url='img_card' img_alt='CreditCard Icon' title='Credit Cards'/>
        <MenuItem img_url='img_user' img_alt='Account Icon' title='Account'/>
        <MenuItem img_url='img_setting' img_alt='Setting Icon' title='Setting'/>
      </ul>
    </nav>
  )
}