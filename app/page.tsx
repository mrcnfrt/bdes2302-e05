"use client"

import Image from "next/image";
import Featured from "./featured";
import Gallery from "./gallery";

export default function Home() {
  return (
 
    <div id="container" className="w-full max-w-6xl bg-red-100x mx-auto px-8">

        <div id="header" className="py-7 flex justify-between flex-col lg:flex-row items-center gap-4">

            <h1 className="text-[24px] cormorant-garamond-300 tracking-[1.92px]">
                CK  Architecture 
            </h1>

            <div id="menu" className="jetbrains-mono-500 uppercase text-[11px] tracking-[1.1px] flex gap-8 items-center">

                <a href="#featured">Featured</a>
                <a href="#about">Point of view</a>
                <a href="#gallery">Journal</a>

            </div>

        </div>
        <div id="featured" className="pb-16 border-b-1 border-black/20">


            <Featured />

            <div id="slider">
                 <Featured />



                <div className="relative">

                    <img className="saturate-0 hover:saturate-100 transition-all aspect-[16/9] w-full" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=1800&amp;q=85" alt="Warm, sunlit interior with a view toward an adjoining room" />
                    <div
                        className="absolute bottom-0 left-0 w-full text-white bg-black/20 backdrop-blur-[4px] p-8 border-t-1 border-white/20 hidden md:block">
                        <div className="flex items-center justify-between">
                            <h1 className="cormorant-garamond-300 text-[30px] leading-[36px]">The borrowed horizon</h1>
                            <h6 className="jetbrains-mono-400 text-[10px] leading-[15px]">KYOTO, 2024</h6>
                        </div>
                        <p className="jetbrains-mono-400 text-[11px] leading-[16.5px]">
                            A quiet threshold between inside and out
                        </p>
                    </div>

                </div>


            </div>
            



        </div>


        <div id="about" className="py-16 flex gap-16 items-center flex-col lg:flex-row">

            <div id="about_left" className="flex-1">

                <h6 className="text-[10px] tracking-[1.8px] jetbrains-mono-500 text-[#00789F] mb-2">
                    A NOTE ON MAKING · 01
                </h6>

                <h1 className="text-[48px] leading-none cormorant-garamond-300">
                    Leave room for<br/>
                    the day to change.
                </h1>

                <p className="text-[16px] leading-[24px] inter-300 text-[#666666] mt-6 mb-4">
                    We make places that notice the small things: the sun moving across
                    a wall, a doorway that slows you down, the grain of a board worn
                    smooth by daily life.
                </p>
                <p className="text-[14px] leading-[20px] inter-300 text-[#999999] mb-4">
                    Each project begins with what is already there.

                </p>
                 <p className="text-[14px] leading-[20px] inter-300 text-[#999999]">
                     We listen to a site, work with its materials, and shape rooms that feel generous without
                    asking to be the center of attention.
                </p>

            </div>
            <div id="about_right" className="flex-1">

                <img className="aspect-4/3 saturate-0 hover:saturate-100 transition-all duration-500" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&amp;fit=crop&amp;w=1200&amp;q=85" alt="Natural materials and soft daylight in a calm living space" />

            </div>


        </div>
        <div id="gallery">

            <h6 className="text-[10px] tracking-[1.8px] jetbrains-mono-500 text-[#00789F] mb-2">
                FROM THE NOTEBOOK
            </h6>
            <h1 className="text-[30px] leading-none cormorant-garamond-300">
                Details, places, passing light
            </h1>
                    
                    <Gallery />

            <div className="grid border-t-1 border-black/20 pt-8 mt-4">
            




            </div>


        </div>
        <div id="footer"
            className="py-10 flex justify-between jetbrains-mono-400 text-[#666666] text-[10px] tracking-[1px] flex-col lg:flex-row items-center gap-4 text-center lg:text-left">

            <h6>
                © 2026 CK ARCHITECTURE.
            </h6>

            <h6>
                BUILT SLOWLY · HELD LIGHTLY
            </h6>

        </div>

    </div>
   
  );
}
