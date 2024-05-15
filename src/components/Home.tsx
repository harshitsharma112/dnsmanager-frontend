import { Credentails } from "./Credentials";
import dnsimage3 from "../assets/dnsimage3.jpg"


export function Home() {
        return (
<>
           
        <div className=" lg:flex text-center lg:bg-gray-100 justify-center  font-mono" >
            
           <div className="lg:w-1/2 lg:h-screen   bg-cover bg-fit xs:w-auto xs:h-96    bg-center sl:bg-cover md:bg-cover  xs:bg-cover  bg-gray-100 h-screen w-screen   p-8 space-y-8  
            bg-no-repeat items-center"  style={{backgroundImage:`url(${dnsimage3})`}} > 
        </div>
           
            <div className="lg:w-3/5 bg-cover xs:justify-center  bg-amber-200 ">
                <div className="flex flex-cols lg:h-auto lg:w-auto sticky  bg-cover justify-center items-center">
                    <Credentails />
                </div>

            </div>
        </div>
        </>
    );
}
