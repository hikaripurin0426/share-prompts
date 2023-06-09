import Feed from '@components/Feed';
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Prompts Master
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">Let's share your AI prompts!</span>
        </h1>
        <p className="desc text-center">
            Prompts MasterはChat-GPTなどのAIに渡す命令文（プロンプト）を共有するためのプラットフォームです。<br />
            みんなが発見した便利なプロンプトをシェアして、最新AIを使いこなそう！
        </p>
        
        <Feed />
    </section>
  )
}

export default Home;