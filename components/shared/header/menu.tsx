
import Link from 'next/link'
import CartButton from './cart-button'

export default function Menu(){
    return(
        <div className="flex justify-end">
            <nav className="flex gap-3 w-full">
                <Link href="/signin" className='flex items-center header-button'>
                {/* <UserIcon className= 'h-8 w-8'/> */}
                {/* <span className="font-bold">Sign in</span> */}
                Hello, Sign in
                </Link>

               <CartButton/>

            </nav>

        </div>
    )
}