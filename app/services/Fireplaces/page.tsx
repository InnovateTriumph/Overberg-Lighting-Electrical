import CallToAction from "@/app/comps/CallToAction";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image";

const Fireplaces = () => {
    return ( 
        <>
        <section className="flex flex-col justify-center items-center h-screen">
            <div className="lg:w-[766px] flex flex-col text-center gap-4">
                <h1 className="lg:text-[50px] text-[30px] font-bold leading-tight">Cozy Up with Our Expert Fireplace Services</h1>
                <p>Transform your space into a warm haven with our fireplace installation, maintenance, and repair services. From traditional hearths to modern designs, our skilled technicians ensure comfort and ambiance. Contact us today for a fireside experience like no other!</p>
                <div className="gap-5 flex flex-row  justify-center items-center">
                    <Link href={'tel:0285143417'}>
                        <button className="call-us-button">Call Now</button>
                    </Link>
                    <Link href={'mailto:overberg@overberglighting.co.za'}>
                        <button className="button border border-solid border-white">Email Us</button>
                    </Link>
                </div>
            </div>
        </section>
        <section>
            <p className="font-semibold">Tagline</p>
            <h2 className="lg:text-[48px] text-[28px] font-bold">
                Short heading goes here
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 my-10 grid-cols-2">
                <div className="text-black bg-white flex flex-col gap-4 col-span-2 lg:py-16 lg:px-10 py-8 px-5">
                    <h3 className="lg:text-[40px] text-[25px] font-semibold">Short heading here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Medium length section heading goes here</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Medium length section heading goes here</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </section>
        <section className="h-full flex flex-col gap-8 py-[150px] justify-center items-center">
            <h4 className="lg:text-[30px] md:text-[25px] font-semibold text-center">Work by Overberg Lighting & Electrical</h4>
            <Carousel>
                <CarouselItem className="pl-0">
                    <CarouselContent>
                        <div className="relative lg:h-[720px] lg:w-[1120px] w-[350px] h-[250px] md:h-[480px] md:w-[650px]">
                            <Image src={'/Image.png'} alt='' fill={true}/>
                        </div>
                    </CarouselContent>
                </CarouselItem>
            </Carousel>
        </section>
        <CallToAction/>
        </>
     );
}
 
export default Fireplaces;