import { client } from "@/app/lib/sanity";
import Link from "next/link";
import PopularAudioCarousel from "./PopularAudioCarousel";

// getdata
const getData = async () => {
    const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)]{
    _id,
        name,
        description,
        images,
        price,
        price_id,
        "slug": slug.current,
        "categories": categories[]-> {
            name
        }
    }`;


    const data = await client.fetch(query);
    return data;
};

const PopularAudios = async () => {
    const audios = await getData();
    return (
        <section className='py-24'>
            <div className="container mx-auto">
                <h2 className="text-center text-4xl mb-2 sm:text-[40px]">最も人気のある商品</h2>
                <p className="text-center mb-[30px]">
                    1925年以来のアイコニックな品質
                </p>
                <PopularAudioCarousel audios={audios} />
                <Link href="/store">
                <button className="btn btn-primary mx-auto">全ての製品を見る</button>
                </Link>
            </div>
        </section>
    )
}

export default PopularAudios