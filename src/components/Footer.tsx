import Link from "next/link";

const Footer = () => {
    return (
        <div className='h-8 md:h-12 p-4 lg:px-20 xl:px-40 text-red-400 flex items-center justify-around'>
            <Link href='/' className='font-bold text-xl'>
                MASSIMO
            </Link>
            <p>© ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer;
