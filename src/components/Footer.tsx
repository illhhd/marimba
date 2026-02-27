import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-navy-deep pt-24 pb-12 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col">
                {/* Contact CTA */}
                <div className="flex flex-col gap-6 mb-24" id="contact">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        お問い合わせ
                    </span>
                    <a
                        className="text-[6vw] md:text-[5vw] font-black leading-none tracking-tighter text-white hover:text-primary transition-colors break-words w-full"
                        href="mailto:hello@marimba.co.jp"
                    >
                        HELLO@MARIMBA.CO.JP
                    </a>
                </div>

                {/* Footer info */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-white/10 pt-12">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold text-white">マリンバ株式会社</h4>
                        <address className="not-italic text-white/60 text-sm leading-relaxed">
                            MARIMBA Inc.
                        </address>
                    </div>

                    <div className="flex flex-wrap gap-8 md:gap-16">
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                                Links
                            </span>
                            <div className="flex gap-4">
                                <a
                                    className="text-white/60 hover:text-primary transition-colors text-sm"
                                    href="#"
                                >
                                    Podcast
                                </a>
                                <a
                                    className="text-white/60 hover:text-primary transition-colors text-sm"
                                    href="#"
                                >
                                    Note
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                                Legal
                            </span>
                            <div className="flex gap-4">
                                <Link
                                    className="text-white/60 hover:text-white transition-colors text-sm"
                                    href="/privacy"
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 flex justify-between items-center text-xs text-white/30 uppercase tracking-widest">
                    <span>© 2025 MARIMBA Inc.</span>
                </div>
            </div>
        </footer>
    );
}
