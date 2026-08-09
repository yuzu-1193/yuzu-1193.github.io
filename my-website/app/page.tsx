export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* ヘッダー・自己紹介セクション */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900">
            あなたの名前 (Name)
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            〇〇大学 〇〇学部 〇〇学科 | ITエンジニア志望
          </p>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            現在、Web開発を中心に技術を学んでいます。このポートフォリオサイトは Next.js と Tailwind CSS を用いて自身で実装・公開しました。
          </p>
        </header>

        {/* スキルセクション */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4">
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">HTML / CSS</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">JavaScript</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React / Next.js</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Git / GitHub</span>
          </div>
        </section>

        {/* 経験・活動セクション */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4">
            Experience & Activities
          </h2>
          <ul className="space-y-6">
            <li>
              <h3 className="font-bold text-gray-800">株式会社JSOL サマーインターンシップ（1day）参加</h3>
              <p className="text-sm text-gray-500 mb-1">2026年6月</p>
              <p className="text-sm text-gray-700">
                適性検査および選考を経て参加。ITソリューションやコンサルティング業務の基礎について理解を深めました。
              </p>
            </li>
            <li>
              <h3 className="font-bold text-gray-800">Google Maps コントリビューター活動</h3>
              <p className="text-sm text-gray-500 mb-1">2026年2月 〜 現在</p>
              <p className="text-sm text-gray-700">
                地域の店舗や施設に関する情報提供を通じ、ローカルコミュニティへの情報共有活動を行っています。
              </p>
            </li>
          </ul>
        </section>

        {/* 資格・趣味セクション */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2 mb-4">
            Licenses & Hobbies
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>普通自動車第一種運転免許</li>
            <li>PADI オープンウォーター・ダイバー（スキューバダイビング）</li>
            <li>趣味：音楽ライブ鑑賞</li>
          </ul>
        </section>

      </div>
    </main>
  );
}