"use client"

import ButtonStyle from "./components/ButtonStyle";
import Navbar from "./components/Navbar";
import './assets/main.css'

export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <div>
          <header>

            <h1>Organize seus estudos, Crie Notas em Markdown📝com Praticidade em Segundos⏱ </h1>

            <div>

              <p>Contribuidores do Nippon🍥</p>

              <div className="members">
                <img src="/members/profile.jpg" className="over triple-over" alt="" />
                <img src="/members/eddy.jpg" className="over double-over" alt="" />
                <img src="/members/jpp.jpg" className="over" alt="" />
                <img src="/members/joaoo.jpg" className="last" alt="" />
              </div>

            </div>

          </header>
          <div className="download-buttons">
            <ButtonStyle href="/nippon.exe" platformImg="/logo-windows-1.png" system="Windows Download" platform={"windows"} />
            <ButtonStyle href="/nippon.deb" platformImg="/logo-tux-1.png" system="Linux Download .deb" platform={"linux"} />
          </div>
          <div className="img-field">
            <img id="screenshot" src="/nippon-screen.png" alt="screenshot" />
          </div>

        </div>
      </main>

    </>
  )
}
