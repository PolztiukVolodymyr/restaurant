import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import CartIcon from "./CartIcon";

const Navbar = () => {
    const user = false;
    return (
        <div className='h-8 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-16 lg:px-20 xl:px-40'>
            {/* left links */}
            <div className='hidden md:flex gap-4 flex-1'>
                <Link href='/'>Homepage</Link>
                <Link href='/menu'>Menu</Link>
                <Link href='/'>Contact</Link>
            </div>
            {/* logo */}
            <div className='text-xl md:font-bold flex-1 md:text-center'>
                <Link href='/'>Massimo</Link>
            </div>
            {/* mobile menu */}
            <div className='md:hidden'>
                <Menu />
            </div>
            {/* right links */}
            <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
                <div className='md:absolute top-1 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
                    <Image src='/phone.png' alt='' width={20} height={20} />
                    <span>123 456 78</span>
                </div>
                {!user ? (
                    <Link href='/login'>Login</Link>
                ) : (
                    <Link href='/orders'>Orders</Link>
                )}
                <CartIcon />
            </div>
        </div>
    );
};

export default Navbar;
