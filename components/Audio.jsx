'use client'
import AddToCartBtn from "./AddToCartBtn";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag, } from "react-icons/cg"


const Audio = ({ audio }) => {
    const popularAudioCat = audio.categories.find(
        (audio) => audio.name === 'popular'
    );
    return (
        <div className="group p-2">
            <div className=" h-[328px] mb-4 overflow-hidden relative">
                <div className="bg-gradient-to-b from-slate-200 via-orange-100 to-slate-200 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
                    {/* {badge} */}
                    {popularAudioCat && (
                        <div className="absolute top-4 left-4 bg-primary text-white py-1 px-3 text-sm uppercase font-medium">
                            人気のアイテム
                        </div>
                    )}
                    <Image src={urlFor(audio.images[0]).url()}
                        width={240}
                        height={147}
                        alt=''
                    />
                </div>
                {/* btn group */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <AddToCartBtn
                        price_id={audio.price_id}
                        name={audio.name}
                        currency="JPY"
                        description={audio.description}
                        images={audio.images}
                        price={audio.price}
                        btnStyles="btn-icon btn-accent"
                        icon={<CgShoppingBag />}
                    />
                    <Link href={`/product/${audio.slug}`}>
                        <button className=" btn-icon btn-accent2">
                            <CgEye />
                        </button>
                    </Link>
                </div>

            </div>
            <h5 className="text-gray-400 font-semibold mb-2">
                {audio.categories[0].name}
            </h5>
            <h4 className="mb-1">{audio.name}</h4>
            <div className="text-lg font-bold text-primary">¥{audio.price}</div>
        </div>
    )
}

export default Audio