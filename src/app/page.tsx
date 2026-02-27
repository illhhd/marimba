"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPath } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ─── Hero Section ─── */}
      <header className="relative flex min-h-screen flex-col justify-center bg-mint text-navy overflow-hidden">
        {/* Badge */}
        <div className="absolute top-24 left-6 md:left-10 text-xs font-bold tracking-widest uppercase border border-navy/30 px-3 py-1 rounded-full">
          Est. 2025
        </div>
        <div className="absolute bottom-10 right-6 md:right-10 text-xs font-bold tracking-widest uppercase border border-navy/30 px-3 py-1 rounded-full animate-bounce">
          Scroll to Explore ↓
        </div>

        {/* Kinetic marquee text */}
        <div className="flex flex-col gap-0 select-none opacity-90 mix-blend-multiply">
          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="animate-scroll-left flex gap-8 items-center">
              {[...Array(6)].map((_, i) => (
                <h1
                  key={i}
                  className="text-[18vw] font-black leading-[0.85] tracking-tighter"
                >
                  MARIMBA
                </h1>
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden whitespace-nowrap mt-[-2vw]">
            <div className="animate-scroll-right flex gap-8 items-center">
              {[...Array(6)].map((_, i) => (
                <h1
                  key={i}
                  className="text-[18vw] font-black leading-[0.85] tracking-tighter text-transparent"
                  style={{ WebkitTextStroke: "2px #10221e" }}
                >
                  MARIMBA
                </h1>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ─── Introduction / Catchcopy ─── */}
      <section className="relative bg-navy px-6 py-24 md:py-40 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start md:items-end">
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-7xl font-bold leading-[0.95] tracking-tight text-white mb-8">
              問いをカタチに、
              <br />
              <span className="text-primary">カタチを価値に。</span>
            </h2>
          </motion.div>
          <motion.div
            className="flex-1 max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            variants={fadeUp}
          >
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              すべての出発は、問いから始まる。
              <br />
              言葉にならない違和感。数字に落ちない確信。輪郭だけのビジョン。
              <br />
              その先に、次の時代への入り口がある。
            </p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mt-4">
              クライアントと共に踏み込み、価値あるカタチにしていく。
              <br />
              それが、マリンバの仕事であり、原点です。
            </p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mt-4">
              人の健康と、人の暮らし。
              <br />
              ヘルスケアとライフスタイルの領域で、あなたの「次の問い」に向き合います。
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── News Ticker ─── */}
      <div className="bg-primary text-navy py-4 overflow-hidden border-y border-navy/20">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...Array(2)].map((_, dupeIdx) => (
            <div key={dupeIdx} className="flex items-center gap-12 px-6">
              <span className="text-2xl font-bold tracking-tight uppercase flex items-center gap-4">
                LATEST NEWS{" "}
                <span className="w-2 h-2 bg-navy rounded-full inline-block" />
              </span>
              <span className="text-2xl font-bold tracking-tight uppercase flex items-center gap-4">
                マリンバのコーポレートサイト開設しました{" "}
                <span className="w-2 h-2 bg-navy rounded-full inline-block" />
              </span>
              <span className="text-2xl font-bold tracking-tight uppercase flex items-center gap-4">
                2026年2月{" "}
                <span className="w-2 h-2 bg-navy rounded-full inline-block" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Service Section ─── */}
      <section id="service" className="bg-navy px-6 py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-4">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              Service
            </h3>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              01 — 03
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Service 01: コンサルティング＆デザイン */}
            <motion.div
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 transition-colors hover:border-primary cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 pl-6">
                <span className="text-primary font-mono text-xl">01</span>
                <h2 className="text-4xl md:text-7xl font-black text-white group-hover:text-primary transition-colors tracking-tighter">
                  CONSULTING & DESIGN
                </h2>
              </div>
              <div className="mt-6 md:mt-0 max-w-sm pl-6 md:pl-0">
                <ul className="text-white/60 group-hover:text-white transition-colors text-base leading-relaxed space-y-1">
                  <li>ビジネスデューデリジェンス</li>
                  <li>事業戦略・中期計画策定</li>
                  <li>新規事業・サービス開発</li>
                  <li>プロジェクト統括・管理</li>
                  <li>ブランドデザイン</li>
                  <li>体験・サービスデザイン</li>
                  <li>組織開発デザイン 等</li>
                </ul>
              </div>
            </motion.div>

            {/* Service 02: オウンドコンテンツ */}
            <motion.div
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 transition-colors hover:border-primary cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 pl-6">
                <span className="text-primary font-mono text-xl">02</span>
                <h2 className="text-4xl md:text-7xl font-black text-white group-hover:text-primary transition-colors tracking-tighter">
                  OWNED CONTENT
                </h2>
              </div>
              <div className="mt-6 md:mt-0 max-w-sm pl-6 md:pl-0">
                <p className="text-white/60 group-hover:text-white transition-colors text-lg leading-snug">
                  現在、オリジナルPodcast「雑食日和」を絶賛配信予定！
                </p>
              </div>
            </motion.div>

            {/* Service 03: オウンドブランド・サービス */}
            <motion.div
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 transition-colors hover:border-primary cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 pl-6">
                <span className="text-primary font-mono text-xl">03</span>
                <h2 className="text-4xl md:text-7xl font-black text-white group-hover:text-primary transition-colors tracking-tighter">
                  OWNED BRAND
                </h2>
              </div>
              <div className="mt-6 md:mt-0 max-w-sm pl-6 md:pl-0">
                <p className="text-white/60 group-hover:text-white transition-colors text-lg leading-snug">
                  Coming Soon!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Expertise Section ─── */}
      <section
        id="expertise"
        className="bg-navy-deep px-6 py-24 md:py-40"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
              強みとする領域
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expertise 01 */}
            <motion.div
              className="group border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:bg-white/[0.02]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <span className="text-primary font-mono text-sm">01</span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">
                コンサルティング × デザイン
              </h3>
              <p className="text-xs text-primary uppercase tracking-widest mb-4">
                Consulting & Design
              </p>
              <p className="text-white/60 leading-relaxed text-sm">
                戦略の策定、事業開発、ブランド構築、体験設計、そして組織づくり。マリンバは経営にも現場にも深く踏み込みながら、この全体を一貫したプロセスで手がけます。ビジネスの視点で「何をすべきか」を見定め、ユーザーの視点で「誰に、どう届けるか」を形にする。この掛け合わせが、実効性のある課題解決を可能にします。
              </p>
            </motion.div>

            {/* Expertise 02 */}
            <motion.div
              className="group border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:bg-white/[0.02]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <span className="text-primary font-mono text-sm">02</span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">
                ヘルスケアとライフスタイル領域
              </h3>
              <p className="text-xs text-primary uppercase tracking-widest mb-4">
                Healthcare & Lifestyle Domain
              </p>
              <p className="text-white/60 leading-relaxed text-sm">
                ヘルスケア・ウェルネス・ファッション・コスメ・食品・飲料・デジタルサービスなど、生活者に近い領域に軸足を置いています。ユーザーの購買行動や生活文脈はもちろん、業界固有の商流や規制、競争環境にも精通しています。その両面を深く理解していることが、地に足のついた実行力を支えています。
              </p>
            </motion.div>

            {/* Expertise 03 */}
            <motion.div
              className="group border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:bg-white/[0.02]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              <span className="text-primary font-mono text-sm">03</span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">
                あらゆるフェーズの組織支援
              </h3>
              <p className="text-xs text-primary uppercase tracking-widest mb-4">
                From Startups to Enterprises
              </p>
              <p className="text-white/60 leading-relaxed text-sm">
                スタートアップから、複雑な組織構造を持つ大企業まで。規模やフェーズが変われば、最適な戦略も、キーパーソンも、意思決定のあり方も変わります。マリンバはそれぞれに応じた支援の形で、次の一歩を確実なものにします。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Members Section ─── */}
      <section id="members" className="bg-navy px-6 py-24 md:py-40 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Members
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
              メンバー
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Member 01: 酒井亮輔 */}
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 relative">
                <Image
                  src={getPath("/images/members/sakai.jpg")}
                  alt="酒井 亮輔"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">酒井 亮輔</h3>
                <p className="text-primary text-sm mt-1">代表取締役</p>
                <p className="text-white/60 leading-relaxed mt-4 text-sm">
                  慶應義塾大学法学部政治学科卒業後、2009年にアップルジャパン入社。2012年にアクセンチュアジャパンに参画し、ライフサイエンス・飲料・メディア等の業界において事業戦略や中期計画策定、PMI等のプロジェクトを担当。2015年にKPMGヘルスケアジャパンに加わり、総合商社・PEファンド・製薬会社等を顧客に事業戦略・新規事業開発、デュー・ディリジェンス等のプロジェクトを担当し、シニアマネージャーを務めた。
                </p>
                <p className="text-white/60 leading-relaxed mt-3 text-sm">
                  2021年にデザインファームのグッドパッチに入社し、コスメ・ヘルスケア領域を中心に新規事業開発支援、ブランディング、CXデザイン組織の立上げ等をリードし、ゼネラルマネージャーとして事業・組織を統括。コンサルティングとデザインの垣根を超えた新しい課題解決を目指し、2025年にマリンバ株式会社を創業。
                </p>
                <p className="text-white/60 leading-relaxed mt-3 text-sm">
                  ビジネス起点とユーザー起点の両輪による価値提供、提案からデリバリー、アカウント統括まで一貫したクライアントワーク、ヘルスケアやライフスタイル領域での深い知見を強みとする。
                </p>
              </div>
            </motion.div>

            {/* Member 02: 島田周 */}
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 relative">
                <Image
                  src={getPath("/images/members/shimada.jpg")}
                  alt="島田 周"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">島田 周</h3>
                <p className="text-primary text-sm mt-1">医師兼学生</p>
                <p className="text-white/60 leading-relaxed mt-4 text-sm">
                  長崎大学医学部卒業後、関東の精神科病院の臨床経験を経て、現在は東京大学大学院で西洋古典の研究に取り組む。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── About Section ─── */}
      <section id="about" className="bg-navy-deep px-6 py-24 md:py-40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              About
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
              会社概要
            </h2>
          </motion.div>

          <motion.div
            className="border border-white/10 rounded-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <table className="w-full">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-8 py-6 text-white/50 text-sm font-medium whitespace-nowrap w-40">
                    会社名
                  </td>
                  <td className="px-8 py-6 text-white">マリンバ株式会社</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-8 py-6 text-white/50 text-sm font-medium whitespace-nowrap">
                    代表取締役
                  </td>
                  <td className="px-8 py-6 text-white">酒井 亮輔</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-8 py-6 text-white/50 text-sm font-medium whitespace-nowrap">
                    事業内容
                  </td>
                  <td className="px-8 py-6 text-white">
                    コンサルティング＆デザイン、オリジナルコンテンツ、オウンドブランド・サービス 等
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-6 text-white/50 text-sm font-medium whitespace-nowrap">
                    設立
                  </td>
                  <td className="px-8 py-6 text-white">2025年4月</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ─── News Section ─── */}
      <section id="news" className="bg-navy px-6 py-24 md:py-40 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              News
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
              お知らせ
            </h2>
          </motion.div>

          <motion.div
            className="space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-6 border-b border-white/10 group cursor-pointer hover:border-primary/50 transition-colors">
              <span className="text-white/40 text-sm font-mono whitespace-nowrap">
                2026.02
              </span>
              <p className="text-white group-hover:text-primary transition-colors">
                マリンバのコーポレートサイト開設しました。ここから発信していきます。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
