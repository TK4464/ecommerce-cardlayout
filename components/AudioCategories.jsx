"use client"
import { useState, useEffect } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "./ui/label"
import { Slider } from "./ui/slider"
import Audio from "./Audio"


const AudioCategories = ({ audios }) => {
    const [category, setCategory] = useState("all");
    const [filteredAudios, setFilteredAudios] = useState([]);
    const [price, setPrice] = useState(1300000);

    useEffect(() => {
        const filtered = audios.filter((audio) => {
            const categoryMatch =
                category === "all"
                    ? audios
                    : audio.categories.some((categ) => categ.name === category);
            const priceMatch = audio.price <= price;
            return categoryMatch && priceMatch;
        });
        setFilteredAudios(filtered);
    }, [category, price, audios]);


    return (
        <section className="min-h-[1200px] py-10">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row">
                    {/* sidebar */}
                    <aside className="w-full xl:p-4 pt-4 pb-8 mb-8 xl:w-[200px] border-b border-primary/20 xl:border-none ">
                        <RadioGroup
                            defaultValue="all"
                            className="flex flex-col gap-6 mb-12"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="all"
                                    id="all"
                                    onClick={() => setCategory("all")}
                                />
                                <Label htmlFor="all">全て</Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="speaker"
                                    id="speaker"
                                    onClick={() => setCategory("speaker")}
                                />
                                <label htmlFor="speaker">スピーカー</label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="headphones"
                                    id="headphones"
                                    onClick={() => setCategory("headphones")}
                                />
                                <label htmlFor="headphones">ヘッドフォン</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="tv"
                                    id="tv"
                                    onClick={() => setCategory("tv")}
                                />
                                <label htmlFor="tv">テレビ</label>
                            </div>
                        </RadioGroup>
                        {/* price slider */}
                        <div className="max-w-56">
                            <div className="text-lg mb-4 font-medium">
                                価格<br /><span className="text-primary font-semibold ml-2">¥{price}</span>
                                <span className="ml-2">
                                    (
                                    {filteredAudios.length > 1
                                        ? `${filteredAudios.length} 商品`
                                        : filteredAudios === 0
                                        ? `${filteredAudios.length} 商品`
                                        : `${filteredAudios.length} 商品`}
                                    )
                                </span>
                            </div>
                            <Slider
                                defaultValue={[1300000]}
                                max={1500000}
                                step={50000}
                                onValueChange={(val) => setPrice(val[0])}
                            />

                        </div>
                    </aside>
                    {/* bike list */}
                    <div className="w-full xl:w-[970px] ml-auto">
                        <div className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                            {filteredAudios.map(audio => {
                                return <Audio audio={audio} key={audio.price_id} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AudioCategories