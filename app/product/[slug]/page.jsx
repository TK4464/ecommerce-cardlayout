import { client, urlFor } from "@/app/lib/sanity"
import Image from "next/image"
import AddToCartBtn from "@/components/AddToCartBtn"
import Link from "next/link"

import { AudioWaveform, Clock, PackageCheck, RefreshCw, ChevronLeft } from "lucide-react"

const getData = async (slug) => {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "category": categories->{name}
    }`;
    const data = await client.fetch(query);
    return data;
}

const ProductDetails = async ({ params }) => {
    const audio = await getData(params.slug);
    return (
        <section className="pt-24 pb-32">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-14">
                    {/* img */}
                    <div className="xl:flex-1 h-[460px] bg-gradient-to-b from-slate-200 via-orange-100 to-slate-200 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
                        <Image
                            src={urlFor(audio.images[0]).url()}
                            width={473}
                            height={290}
                            priority
                            alt=''
                        />
                    </div>
                    {/* text */}
                    <div className="flex-1 flex flex-col justify-center items-start gap-10">
                        <Link href='/' className="flex items-center gap-2 font-semibold">
                            <ChevronLeft size={20} />
                            <div>ホームに戻る</div>
                        </Link>
                        <div className="flex flex-col gap-6 items-start">
                            <div>
                                <h3>{audio.name}</h3>
                                <p className="text-lg font-semibold">¥{audio.price}</p>
                            </div>
                            <p>{audio.description}</p>
                            <AddToCartBtn
                                price_id={audio.price_id}
                                name={audio.name}
                                currency="JPY"
                                description={audio.description}
                                images={audio.images}
                                price={audio.price}
                                text="カートに追加"
                                btnStyles="btn btn-primary"
                            />
                        </div>
                        {/* info */}
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2">
                                <PackageCheck size={24} className="text-accent" />
                                <p>¥13000以上のご注文で送料無料</p>
                            </div>

                            <div className="flex gap-2">
                                <RefreshCw size={24} className="text-accent" />
                                <p>30日間の返品・交換保証</p>
                            </div>

                            <div className="flex gap-2">
                                <AudioWaveform size={24} className="text-accent shrink-0" />
                                <p>Bang & Olufsen製品は、Bang & Olufsenアプリに追加すると自動的に登録されます。</p>
                            </div>

                            <div className="flex gap-2">
                                <Clock size={24} className="text-accent" />
                                <p>ご注文確認後、３営業日以内に発送</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProductDetails