import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata = {
    title: "Prompts Master",
    description: "Prompts MasterはChat-GPTなどのAIに渡す命令文（プロンプト）を共有するためのプラットフォームです。みんなが発見した便利なプロンプトをシェアして、最新AIを使いこなそう！"
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;