import Link from "next/link"

const ErrorPage = () => {
    return (
        <section className="py-72">
            <div className="container mx-auto">
                <h3 className="text-center mb-4">
                    お支払い手続き中にエラーが発生しました
                </h3>
                <p className="text-center mb-4">システムエラーにより購入処理が行えませんでした。時間を置いた上で再度お試しください。</p>
                <Link href="/">
                    <button className="btn btn-primary mx-auto">
                        トップページに戻る
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default ErrorPage 