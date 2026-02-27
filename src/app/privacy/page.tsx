import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "プライバシーポリシー | マリンバ株式会社",
    description: "マリンバ株式会社のプライバシーポリシーです。",
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-navy min-h-screen text-white">
            {/* Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-navy/90 backdrop-blur-md border-b border-white/5">
                <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-primary transition-colors">
                    MARIMBA
                </Link>
                <Link href="/" className="text-sm text-white/60 hover:text-primary transition-colors">
                    ← トップに戻る
                </Link>
            </nav>

            <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
                    プライバシーポリシー
                </h1>

                <p className="text-white/70 mb-8 leading-relaxed">
                    マリンバ株式会社（以下「当社」）は、個人情報の保護に関する法令を遵守し、以下のとおり個人情報を適切に取り扱います。
                </p>

                <div className="space-y-10">
                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4">1. 個人情報の収集</h2>
                        <p className="text-white/70 leading-relaxed">
                            当社は、お問い合わせフォームをご利用いただく際に、お名前、メールアドレス、電話番号、会社名などの個人情報をご提供いただくことがあります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4">2. 利用目的</h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            ご提供いただいた個人情報は、以下の目的の範囲内で利用し、これらの目的以外では利用いたしません。
                        </p>
                        <ul className="text-white/70 leading-relaxed space-y-2 pl-6 list-disc">
                            <li>お問い合わせへのご回答・ご連絡のため</li>
                            <li>当社サービスに関するご案内のため</li>
                            <li>取引先の管理のため</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4">3. 第三者提供の制限</h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            当社は、以下の場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
                        </p>
                        <ul className="text-white/70 leading-relaxed space-y-2 pl-6 list-disc">
                            <li>法令に基づく場合</li>
                            <li>人の生命・身体・財産の保護に必要な場合</li>
                            <li>公衆衛生・児童の健全育成に必要な場合</li>
                            <li>国の機関等の法令の定める事務に協力する場合</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4">4. 個人情報の管理</h2>
                        <p className="text-white/70 leading-relaxed">
                            当社は、個人情報の漏洩・改ざん・不正アクセスを防止するため、適切なセキュリティ対策を実施し、個人情報の安全な管理に努めます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4">5. Cookieおよびアクセス解析</h2>
                        <p className="text-white/70 leading-relaxed">
                            当社ウェブサイトでは、サイトの利用状況を把握し改善するため、Google アナリティクスを利用しています。Google アナリティクスはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。Cookieはブラウザの設定により無効にすることが可能です。ただし、無効にした場合、当サイトの一部機能がご利用いただけなくなることがあります。
                        </p>
                        <p className="text-white/70 leading-relaxed mt-3">
                            Google アナリティクスの利用規約およびプライバシーポリシーについては、Google のウェブサイトをご確認ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4">6. 開示・訂正・削除</h2>
                        <p className="text-white/70 leading-relaxed">
                            ご本人から個人情報の開示・訂正・削除のご請求があった場合は、ご本人確認のうえ速やかに対応いたします。当社ウェブサイトのお問い合わせフォームよりご連絡ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary mb-4">7. プライバシーポリシーの変更</h2>
                        <p className="text-white/70 leading-relaxed">
                            当社は、必要に応じて本プライバシーポリシーの内容を変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。
                        </p>
                    </section>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium"
                    >
                        ← トップに戻る
                    </Link>
                </div>
            </main>
        </div>
    );
}
