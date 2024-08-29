import Link from "next/link"

const SuccessPage  = () => {
    return (
        <section className="py-72">
            <div className="container mx-auto">
                <h3 className="text-center mb-4">
                    ご注文ありがとうございました
                </h3>
                <p className="text-center mb-4">ご注文商品のお届けまで、今しばらくお待ちいただけますようよろしくお願い申し上げます。</p>
                <Link href="/">
                    <button className="btn btn-primary mx-auto">
                        トップページに戻る
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default SuccessPage