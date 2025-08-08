import React, { useRef } from 'react'
import html2canvas from 'html2canvas'
import styles from './ResultCard.module.css'
import logo from '../assets/images/logo.svg'

const ResultCard = ({ score, total, level }) => {
  const resultRef = useRef(null)

  const handleDownloadImage = () => {
    setTimeout(async () => {
      if (resultRef.current) {
        const canvas = await html2canvas(resultRef.current, {
          useCORS: true,
          scale: 2,
        })
        const link = document.createElement('a')
        link.download = 'quizexato_resultado.png'
        link.href = canvas.toDataURL('image/png')
        link.click()
      }
    }, 150)
  }

  return (
    <div className="text-center space-y-6">
      <div ref={resultRef} className={styles.card}>
        <h2 className="text-2xl font-bold uppercase">Quiz Exato</h2>
        <p className="text-xl font-semibold">
          Eu acertei{' '}
          <span className={styles.scoreBox}>{score}</span> de {total} questões!
        </p>
        <p className="text-md font-bold">Nível: {level.title}</p>
        <div className={styles.footer}>
          <img src={logo} alt="Logo Exato" />
          <p>@acessoexato · #quizexato</p>
        </div>
      </div>

      <button
        onClick={handleDownloadImage}
        className="bg-white text-indigo-900 font-semibold mt-4 px-6 py-2 rounded shadow hover:bg-indigo-50"
      >
        Baixar imagem
      </button>
    </div>
  )
}

export default ResultCard
