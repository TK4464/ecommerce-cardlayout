import Link from "next/link"
import { Input } from "./ui/input"
import { RiYoutubeFill, RiFacebookFill, RiInstagramFill, RiTwitterXFill} from "react-icons/ri"

const Footer = () => {
    return (
        <footer className="pt-12 xl:pt-24 border-y border-primary/20 text-primary text-center" >
            <div className="container mx-auto ">
                <div className="flex flex-col  gap-8">
                    <div>
                        <h2 className="capitalize  leading-tight mb-6 sm:mb-2 text-2xl sm:text-3xl">
                            ニュースレターを購読する
                        </h2>
                        <p className="text-sm sm:text-base ">
                            新製品や限定製品、会員様限定イベント、特別セールなどの情報をいち早くお届けいたします。
                        </p>
                    </div>
                    {/* form */}
                    <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5">
                        <Input placeholder="メールアドレスを入力"/>
                        <button className="btn w-full xl:max-w-[150px] h-[60px] btn-footer">
                            購読
                        </button>
                    </form>
                    {/* socials */}
                    <div className="flex gap-8 mx-auto text-[20px] mb-8">
                        <Link href="https://www.youtube.com/@bangolufsen" target="_blank" rel="noopener noreferrer">
                            <RiYoutubeFill />
                        </Link>
                        <Link href="https://x.com/BangOlufsen" target="_blank" rel="noopener noreferrer">
                            <RiTwitterXFill />
                        </Link>
                        <Link href="https://www.facebook.com/bangolufsen" target="_blank" rel="noopener noreferrer">
                            <RiFacebookFill />
                        </Link>
                        <Link href="https://www.instagram.com/bangolufsen/" target="_blank" rel="noopener noreferrer">
                            <RiInstagramFill />
                        </Link>
                    </div>
                </div>
                <h3 className="text-center mb-8">Bang & Olufsen</h3>
            </div>
            {/* copyright */}
            <div className="py-6 border-t border-primary/20 text-primary text-xs sm:test-base">
                &copy; 2024 Bang & Olufsen HAL STORE Allright reserved.
            </div>
        </footer>
    )
}

export default Footer