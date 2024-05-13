import { Credentails } from "./Credentials";
import dnsimage3 from "../assets/dnsimage3.jpg"


export function Home() {
        return (
<>
           
        <div className=" lg:flex text-center justify-center  font-mono" >
            
           <div className="lg:w-1/2  bg-cover bg-fit xs:px-56     bg-center sl:bg-cover md:bg-cover  xs:bg-cover  bg-gray-100 h-screen w-screen   p-8 space-y-8  justify-center xs:bg-none 
            bg-no-repeat items-center"  style={{backgroundImage:`url(${dnsimage3})`}} > 
        </div>
           
            <div className="lg:w-3/5 lg:max-h-screen bg-cover xs:justify-center  bg-amber-200 ">
                <div className="flex flex-cols lg:h-screen sticky  justify-center items-center">
                    <Credentails />
                </div>

            </div>
        </div>
        </>
    );
}
