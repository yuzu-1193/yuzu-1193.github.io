import React from "react";

// --- データ定義 ---

interface Skill {
  name: string;
  category: "Language & Framework" | "Tools & Others";
  level: string;
  period: string;
  comment: string;
  color: string;
}

const SKILLS: Skill[] = [
  {
    name: "React / Next.js",
    category: "Language & Framework",
    level: "個人開発・学習中",
    period: "約半年",
    comment: "本ポートフォリオサイトを含むWebアプリケーション開発で採用。コンポーネント設計、App Routerによるファイルベースルーティング、およびReact Server Componentsを用いたモダンなWebフロントエンド技術を学習中です。",
    color: "from-sky-400 to-blue-500",
  },
  {
    name: "TypeScript",
    category: "Language & Framework",
    level: "学習・導入中",
    period: "約半年",
    comment: "型安全なコード設計への関心から導入。インターフェースや型の定義による厳格なバグの早期発見、および安全で保守性の高いコードを書くための基礎を磨いています。",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "HTML5 / CSS3 / JavaScript",
    category: "Language & Framework",
    level: "基礎から実践",
    period: "約1年半",
    comment: "大学での講義や個人での制作を通じて基礎を修得。DOM操作や、CSS Flexbox / Gridを用いたレスポンシブデザインの実装など、Web開発に必要な根底部分を理解しています。",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Python",
    category: "Language & Framework",
    level: "基礎から実践",
    period: "約2年半",
    comment: "最も慣れ親しんでいるメイン言語。大学での情報工学の学びを通じたアルゴリズムの実装から、データ処理、AIモデルの基礎的な活用まで、幅広い用途で日常的に使用しています。",
    color: "from-blue-500 to-yellow-400", // Pythonの公式カラー（青×黄）
  },
  {
    name: "C言語",
    category: "Language & Framework",
    level: "基礎知識・学修",
    period: "約1年",
    comment: "大学の講義を通じて修得。ポインタやメモリ管理、基本的なアルゴリズムの実装など、コンピュータ・アーキテクチャの根底に関わるプログラミングの基礎的な理解を深めました。",
    color: "from-gray-500 to-slate-700",
  },
  {
    name: "Tailwind CSS",
    category: "Tools & Others",
    level: "個人開発・学習中",
    period: "約半年",
    comment: "本サイトのスタイリングに全面的に採用。ユーティリティクラスによる効率的かつ一貫したコンポーネントデザイン、レスポンシブなUI設計を素早く構築できます。",
    color: "from-cyan-400 to-teal-500",
  },
  {
    name: "Git / GitHub",
    category: "Tools & Others",
    level: "日常使用レベル",
    period: "約1年半",
    comment: "個人でのバージョン管理、およびGitHubへのコード公開・管理に日常的に使用。基本的なブランチ作成、コミット履歴の管理、Issueを用いた作業整理などを身につけています。",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "MySQL / SQL",
    category: "Tools & Others",
    level: "基礎知識・学修",
    period: "約1年",
    comment: "大学での講義や自己学習を通じてリレーショナルデータベースの基礎を修得。基本的なCRUD操作はもちろん、正規化やテーブル設計など、データを安全かつ効率的に管理する仕組みを理解しています。",
    color: "from-blue-600 to-cyan-500",
  },
];

interface Project {
  title: string;
  tag: string;
  period: string;
  description: string;
  techStack: string[];
  points: string[];
  isComingSoon?: boolean;
  isPortfolioSite?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "就職活動用ポートフォリオサイト",
    tag: "Web Site",
    period: "2026年8月",
    description: "自身の経歴、スキル、エンジニアとしてのビジョンを視覚的に分かりやすく伝えるためのポートフォリオ。UI/UXのモダンさと、情報設計の明瞭さにこだわりました。",
    techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "GitHub / Vercel"],
    points: [
      "最新のNext.jsとTailwind CSS v4による、追加のUIライブラリに頼らない超軽量・高速なレンダリングの実装",
      "デバイスを選ばずに完璧な配置を維持するフルレスポンシブデザイン",
      "スキルや活動履歴をオブジェクト配列から動的に描画する、保守・更新しやすいコンポーネント設計",
    ],
    isPortfolioSite: true,
  },
  {
    title: "AI搭載日記アプリ「Dialog」 (GDGハッカソン参加作品)",
    tag: "Hackathon / Web App",
    period: "2026年3月",
    description: "GDG（Google Developer Groups）が主催するハッカソンにて開発した日記Webアプリケーション。ユーザーが入力した日記に対して、AIが返答や分析を行うインタラクティブな機能を実装しました。",
    techStack: ["Next.js", "TypeScript", "AI API", "API通信"],
    points: [
      "AI APIを用いた開発の実践：外部の生成AIをシステムに組み込み、プロンプトを利用して適切なレスポンスを引き出す実装を経験",
      "データ通信・連携の理解：フロントエンドから外部APIへデータを送信し、結果を受け取って画面に描画する非同期通信の処理を実装",
      "学生エンジニアとの交流：優秀な同世代のエンジニアと技術的な意見交換を行い、多様な開発アプローチや高い熱量に大きな刺激を受けた",
    ],
  },
  {
    title: "3D自動生成 巨大迷路探索ゲーム",
    tag: "Unity / Game",
    period: "2026年7月",
    description: "大学のプロジェクトにおいてチームで共同制作した、プレイするたびに構造が変化する3D迷路ゲーム。複数のアイテム（経路ヒント、壁の破壊ツール等）や、ゴール条件（鍵の収集）といったゲーム性を組み込みました。",
    techStack: ["Unity", "C#", "GitHub Desktop"],
    points: [
      "迷路の自動生成アルゴリズム（Procedural Generation）の基礎を学び、C#のスクリプトを用いて動的にマップを構築するロジックを実装",
      "プレイヤーの操作（アイテム使用、壁の破壊、鍵の取得）に応じた状態管理と、それに連動するUI・エフェクト処理の構築",
      "GitHub Desktopを用いたチームでのバージョン管理の実践。競合（コンフリクト）を避けながら複数人で効率よく並行開発を進める手法を経験",
    ],
  }
];

interface Experience {
  title: string;
  subtitle: string;
  period: string;
  badge: string;
  details: string[];
}

const EXPERIENCES: Experience[] = [
  {
    title: "東芝デジタルエンジニアリング株式会社 サマーインターンシップ",
    subtitle: "AIを用いたシステム開発とフルサイクル・エンジニアリングの実践 (5days)",
    period: "2026年8月",
    badge: "選考突破・5日間",
    details: [
      "厳しい選考（エントリーシート・適性検査・面接等）を突破し、中部地区にて開催された対面式の5日間実践型インターンシップに参加。",
      "開発現場における一連の工程（要件定義、詳細設計、コーディング、テスト）を一気通貫で体験。実際の開発プロセスに則ったエンジニアリングを経験しました。",
      "AIを用いたコーディング手法に取り組み、AIを開発のアシスタントとして有効活用する最新のエンジニアリング手法を体感・実践しました。",
      "チームメンバーとの頻繁な情報共有や対話を通じ、多様な意見やアプローチを主体的に整理・集約し、チームとしての開発目標や実装方針をまとめ上げる役割を果たしました。",
      "最終日には開発成果のプレゼンテーション（発表）を行い、第一線で活躍するプロジェクトマネージャー（PM）や中部地区の人事幹部の方々から、技術的・ビジネス的視点双方からの貴重な講評とフィードバックを直接いただく有意義な機会となりました。",
    ]
  },
  {
    title: "名城大学 情報工学部 情報工学科",
    subtitle: "体系的な情報工学の修得と論理的思考力の養成",
    period: "在学中",
    badge: "学術・大学での学び",
    details: [
      "プログラミング言語理論、アルゴリズムとデータ構造、コンピュータネットワーク、リレーショナルデータベース、オペレーティングシステムなど、ITエンジニアとして土台となる専門知識を体系的に修得中。",
      "単なるプログラミングの実装スキルに留まらず、計算理論やハードウェア構成まで深く理解を広げることで、最適化やパフォーマンスを意識できるエンジニアを目指しています。",
    ]
  }
];

const LICENSES = [
  { name: "基本情報技術者試験 合格", comment: "体系的なIT基礎知識、アルゴリズム、管理分野の理解を証明。" },
  { name: "PADI オープンウォーター・ダイバー", comment: "自己管理能力、ペアとなるバディとの協調性、危機管理意識を体得。" },
  { name: "普通自動車第一種運転免許", comment: "安全・法令遵守での確実な意思決定と運行管理。" },
];

const HOBBIES = [
  { name: "音楽ライブ鑑賞", comment: "アーティストの創り出す作品や演出の細部（照明、音響など）にこだわりを感じつつ、ライブならではの圧倒的なエネルギーを浴びてリフレッシュ。新しい視野と活力を得る機会としています。" },
];

function CatBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="cat-silhouette cat-silhouette-1">
        <svg viewBox="0 0 260 180" role="img" aria-label="cat silhouette">
          <path d="M36 112c0-26 17-46 41-52 10-31 34-52 66-52 32 0 54 19 67 52 26 5 42 28 42 52 0 32-23 58-52 58H88c-29 0-52-26-52-58Zm54-72 16 24 16-24 22 26 18-24h-6l-15 18-15-18-16 18-16-18-15 18h-4l18 24 22-26Z" />
        </svg>
      </div>
      <div className="cat-silhouette cat-silhouette-2">
        <svg viewBox="0 0 220 150" role="img" aria-label="cat silhouette">
          <path d="M26 96c0-19 12-34 30-38 8-23 29-41 54-41 28 0 49 19 57 43 19 4 32 21 32 39 0 26-20 48-46 48H72c-26 0-46-22-46-51Zm44-58 12 18 12-18 15 19 14-18h-4l-11 14-11-14-10 14-12-14-10 14h-4l14 18 15-19Z" />
        </svg>
      </div>
      <div className="cat-silhouette cat-silhouette-3">
        <svg viewBox="0 0 200 130" role="img" aria-label="cat silhouette">
          <path d="M20 92c0-14 8-26 22-31 7-19 22-32 41-32 22 0 39 13 47 33 14 4 23 17 23 31 0 22-17 40-39 40H58c-22 0-38-18-38-41Zm32-42 11 15 11-15 12 16 12-16h-3l-9 12-9-12-9 12-9-12-9 12h-3l12 16 11-16Z" />
        </svg>
      </div>
    </div>
  );
}

// --- メインコンポーネント ---

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-24 md:py-32 px-6">
        <CatBackground />

        {/* 背景のアブストラクトな円形グラデーション（美しく浮き上がる） */}
        <div className="absolute top-1/4 right-0 md:right-12 w-72 md:w-96 h-72 md:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-48 md:w-64 h-48 md:h-64 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* 左側：自己紹介テキスト */}
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold tracking-wider border border-indigo-400/20 uppercase">
              Portfolio
            </div>
            <div className="space-y-2">
              <p className="text-indigo-400 font-medium text-sm md:text-base tracking-wide">
                名城大学 情報工学部 情報工学科 | ITエンジニア志望
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                守田 悠月 <span className="text-xl md:text-2xl font-light text-slate-300 ml-1">Morita Yuzuki</span>
              </h1>
            </div>
            
            {/* タグライン */}
            <h2 className="text-lg md:text-xl font-semibold text-indigo-200 leading-relaxed border-l-4 border-indigo-500 pl-4">
              「技術で日常の不便を解消し、アイデアを価値あるカタチに」
            </h2>
            
            <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
              C言語やPythonを用いたアルゴリズム構築から、Next.jsによるモダンなUI設計まで、情報の裏側の仕組みから表側の表現まで幅広く探究しています。
              単にコードを書くのではなく、システム全体を俯瞰し、ビジネスやユーザーにとって本当に価値のあるシステムを作れるエンジニアを目指しています。
            </p>

            {/* GitHub、その他へのリンク */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://github.com" // 後ほどユーザーが変更可能
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 border border-indigo-500/20"
              >
                {/* GitHub アイコン */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHubを見る
              </a>
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium px-5 py-2.5 rounded-lg border border-slate-700 shadow-sm transition-all duration-200"
              >
                制作実績
              </a>
            </div>
          </div>

          {/* 右側：基本資格などのクイックサマリーカード */}
          <div className="md:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl space-y-4">
              <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider border-b border-white/10 pb-2">
                Quick Profile
              </h3>
              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <span className="p-1.5 bg-indigo-500/20 rounded text-indigo-300 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 012.87-.418M12 3a9.003 9.003 0 00-2.87-.418" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-slate-400 text-xs">所属大学</p>
                    <p className="text-slate-100 font-medium">名城大学 情報工学部 情報工学科</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-1.5 bg-indigo-500/20 rounded text-indigo-300 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-slate-400 text-xs">取得資格</p>
                    <p className="text-slate-100 font-medium">基本情報技術者試験 合格</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-1.5 bg-indigo-500/20 rounded text-indigo-300 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-slate-400 text-xs">サブライセンス</p>
                    <p className="text-slate-100 font-medium">PADI オープンウォーター・ダイバー</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-1.5 bg-indigo-500/20 rounded text-indigo-300 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-slate-400 text-xs">拠点</p>
                    <p className="text-slate-100 font-medium">愛知県（名古屋市近郊）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center justify-center text-indigo-600 font-bold text-xs tracking-wider uppercase bg-indigo-100 px-3 py-1 rounded-full">
            Technical Arsenal
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            大学で習得した情報基礎知識をベースに、Web標準技術からモダンなSPA/SSRフレームワークまで幅広く関心を持って学習を深めています。
          </p>
        </div>

        {/* カテゴリごとのグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* 言語・フレームワーク */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-l-4 border-indigo-600 pl-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Language & Framework
            </h3>
            
            <div className="space-y-4">
              {SKILLS.filter(s => s.category === "Language & Framework").map((skill, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${skill.color}`} />
                      {skill.name}
                    </h4>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                        {skill.period}
                      </span>
                      <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs font-semibold">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {skill.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ツール・その他 */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800 border-l-4 border-cyan-600 pl-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Tools & Others
            </h3>

            <div className="space-y-4">
              {SKILLS.filter(s => s.category === "Tools & Others").map((skill, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${skill.color}`} />
                      {skill.name}
                    </h4>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                        {skill.period}
                      </span>
                      <span className="px-2 py-0.5 bg-cyan-50 text-cyan-600 rounded text-xs font-semibold">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {skill.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 制作実績セクション */}
      <section id="projects" className="py-20 bg-slate-100 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <div className="inline-flex items-center justify-center text-indigo-600 font-bold text-xs tracking-wider uppercase bg-indigo-100 px-3 py-1 rounded-full">
              Works & Concepts
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Projects / Works
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              実際に構築したWebサイトや、現在設計・構想中のインプットを活かす開発プロジェクトの紹介です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 shadow-sm flex flex-col h-full
                  ${project.isComingSoon 
                    ? "border-dashed border-slate-300 bg-white/70 hover:shadow-md" 
                    : "border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:-translate-y-1"
                  }`}
              >
                {/* カードヘッダー */}
                <div className={`p-6 pb-4 border-b ${project.isComingSoon ? "border-dashed border-slate-200" : "border-slate-100"}`}>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider uppercase
                      ${project.isComingSoon 
                        ? "bg-slate-100 text-slate-500 border border-slate-200" 
                        : "bg-indigo-50 text-indigo-600 border border-indigo-100"
                      }`}
                    >
                      {project.tag}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {project.period}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold ${project.isComingSoon ? "text-slate-500" : "text-slate-900"}`}>
                    {project.title}
                  </h3>
                </div>

                {/* カードボディ */}
                <div className="p-6 space-y-5 flex-grow">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 技術スタック */}
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className={`px-2 py-0.5 rounded text-xs font-medium
                            ${project.isComingSoon 
                              ? "bg-slate-100 text-slate-400" 
                              : "bg-slate-100 text-slate-700"
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* こだわり・ポイント */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Points & Purpose
                    </p>
                    <ul className="space-y-1.5">
                      {project.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                          <span className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full 
                            ${project.isComingSoon ? "bg-slate-400" : "bg-indigo-500"}`} 
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* カードフッター（ポートフォリオサイトのみ表示） */}
                {project.isPortfolioSite && (
                  <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100/60 mt-auto flex justify-end">
                    <span className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors inline-flex items-center gap-1">
                      このサイトが実績にあたります
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 活動実績セクション */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center justify-center text-indigo-600 font-bold text-xs tracking-wider uppercase bg-indigo-100 px-3 py-1 rounded-full">
            History & Growth
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Experience & Activities
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            学内外での主体的な活動、企業のインターンシップへの挑戦など、自らの経験を通じてどのような価値を学んできたかを整理しています。
          </p>
        </div>

        {/* タイムラインレイアウト */}
        <div className="relative border-l border-slate-200 pl-6 md:pl-8 space-y-12 max-w-3xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative group">
              {/* タイムラインのインジケーター（ドット） */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 bg-white border-2 border-indigo-600 rounded-full w-4 h-4 group-hover:bg-indigo-600 transition-colors duration-300" />
              
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <span className="text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded">
                    {exp.period}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {exp.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors duration-200">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500">
                    {exp.subtitle}
                  </p>
                </div>

                <ul className="space-y-2 pt-1">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 資格・趣味セクション */}
      <section id="additional" className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* 資格ライセンス */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-white/10 pb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Licenses & Certifications
            </h3>
            <div className="space-y-4">
              {LICENSES.map((lic, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-1.5 hover:bg-white/10 transition-colors duration-200">
                  <h4 className="font-bold text-slate-100 text-sm">
                    {lic.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lic.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 趣味・その他 */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-white/10 pb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hobbies & Passions
            </h3>
            <div className="space-y-4">
              {HOBBIES.map((hob, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-1.5 hover:bg-white/10 transition-colors duration-200">
                  <h4 className="font-bold text-slate-100 text-sm">
                    {hob.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {hob.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-950 text-slate-500 py-12 px-6 border-t border-white/5 text-center text-xs">
        <div className="max-w-5xl mx-auto space-y-3">
          <p className="text-slate-400">
            © {new Date().getFullYear()} 守田 悠月 (Morita Yuzuki). All Rights Reserved.
          </p>
          <p className="text-slate-600">
            Powered by Next.js, TypeScript & Tailwind CSS. Hosted on Vercel.
          </p>
        </div>
      </footer>

    </main>
  );
}
