import { client } from "@/app/lib/sanity"
import AudioCategories from "@/components/AudioCategories";

const getData = async () => {
    const query = `*[_type == 'product'] {
        _id,
        name,
        description,
        images,
        price,
        price_id,
        "slug": slug.current,
        "categories": categories[]-> {name}
    }`;
    const data = await client.fetch(query);
    return data;
};

const OurAudios = async() => {
    const audios = await getData()

    return (
        <div>
            <AudioCategories audios={audios}/>
        </div>
    )
}

export default OurAudios