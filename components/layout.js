import Navbar from "./navbar";
import Image from 'next/image';

export default function Layout({children}) {
    return(

        
        <div>
            
            <header>
                <div className="container">
                    <Image  src={`/images/DatosBrinsit.png`} width={250} height={70} />
                </div>
                <Navbar/>
            </header>
            
            <main>
                {children}
            </main>
            
            <footer>
                <Image  src={`/images/LogoBrinsit.png`} width={60} height={10}  />
                <div>
                <h6> www.brins-it.com</h6>
                <h6> info@brins-it.com</h6>
                <h6> +54 (221)570-5044</h6>
                </div>
            </footer>
            
            <style jsx>
                {`

                    .container{
                        display: flex;
                        justify-content: center;
                    }
                    h6{
                        text-align:center;
                    }
                    

                `}

            </style>
            <style jsx global>
                {`  
                    body {
                        position:relative;
                        padding-bottom:3em;
                        min-height:100vh;
                    }
                    footer{
                        height:80px;
                        justify-content:center;
                        display:flex;
                        background-color:grey;
                        position:absolute;
                        bottom:0;
                        width:100%;
                        
                    }
                `}
            </style>
        </div>
        
    )
}