import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="nav navbar-nav" >
            
            <Image  src={`/images/LogoBrinsit.png`} width={40} height={40} />
            
            <Link href='/'>
                <a className="nav-item nav-link active" >Home</a>
            </Link>

            </div>
        </nav>

    )
}