"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Hero = () => {
    const [isLowPowerMode, setIsLowPowerMode] = useState(false);

    const toggleLowPowerMode = () => {
        setIsLowPowerMode(!isLowPowerMode);
    };

    return (
        <section className="py-0 md:h-[900px] relative overflow-hidden">
            {/* 切り替えオプション */}
            <div className="container absolute inset-x-0 bottom-4 grid place-items-center">
                <button onClick={toggleLowPowerMode} className="z-50 text-white text-sm sm:text-base py-2 rounded">
                    {isLowPowerMode ? '動画モードに切り替え' : '静止画モードに切り替え'}
                </button>
            </div>

            {/* 条件に応じてビデオまたは静止画を表示 */}
            {isLowPowerMode ? (
                <div className="w-full h-full z-[-100] absolute bg-gradient-to-b from-slate-400 via-orange-200 to-slate-400 "></div>
            ) : (
                <div>
                    <video autoPlay muted loop playsInline className="w-full h-full z-[-100] absolute object-cover">
                        <source src="/hero/background.mp4" type="video/mp4" />
                        ブラウザはこの動画をサポートしていません。
                    </video>
                
                    <div className="absolute z-[-10] w-full h-full bg-black opacity-50"></div>
                </div>
            )}
        
            <div className="container mx-auto py-48 md:py-0">
                <div className="flex items-center justify-between">
                    {/* text */}
                    <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-center xl:items-start">
                        <h1 className="text-center xl:text-left mb-6 leading-tight text-white">
                            次の時代の<br className="hidden xl:inline" /><span>音楽体験を</span>
                        </h1>
                        <p className="mb-10 text-sm sm:text-lg max-w-[580px] mx-auto text-center xl:text-left xl:mx-0 leading-relaxed text-white">
                            革新的なサウンドと洗練されたデザインで、これまでにない音楽体験を実現します。<span className="contents">豊かな音の広がりと、視覚をも魅了する美しいフォルムが、あなたの日常を新しい次元へと導きます。</span>
                        </p>
                        {/* btn group */}
                        <div className="flex items-center gap-4 mx-auto xl:mx-0">
                            <Link href="/store" className="mx-auto md:mx-0">
                                <button className="btn btn-home text-sm sm:text-base">今すぐ購入</button>
                            </Link>
                            <Link href="/store" className="mx-auto md:mx-0 text-sm sm:text-base">
                                <button className="btn btn-home">オンラインストア</button>
                            </Link>
                        </div>
                    </div>
                    {/* img */}
                    <div className="hidden xl:flex">
                        <Image
                            src="/hero/audio.png"
                            width={765}
                            height={480}
                            alt=""
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero