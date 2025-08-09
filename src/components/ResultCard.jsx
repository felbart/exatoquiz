import React, { useRef } from 'react'
import html2canvas from 'html2canvas'
import styles from './ResultCard.module.css'
import logo from '../assets/images/logo.svg'
import imgIniciante from '../assets/images/iniciante.png'
import imgIntermediario from '../assets/images/intermediario.png'
import imgAvancado from '../assets/images/avancado.png'

const ResultCard = ({ score, total, level }) => {
  const resultRef = useRef(null)

  // usa o campo `illustration` do evaluation: 'beginner' | 'intermediate' | 'advanced'
  const imageMap = {
    'iniciante': imgIniciante,
    'intermediario': imgIntermediario,
    'avancado': imgAvancado,
  }

  const imageSrc =
    imageMap[(level?.illustration || '').toLowerCase()] || imgIniciante

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
      <div ref={resultRef} className="bg-gradient-to-b from-orange-400 to-yellow-500 flex flex-col items-center gap-4 py-8 rounded-lg text-gray-50">
        {/* ILUSTRAÇÃO DO NÍVEL */}
        <img
          src={imageSrc}
          alt={level?.title || 'Nível do Exater'}
          className={styles.avatar}
        />

        <h2 className="text-2xl font-bold uppercase">Quiz Exato</h2>

        <p className="text-xl font-semibold">
          Eu acertei <span className={styles.scoreBox}>{score}</span> de {total} questões!
        </p>

        <p className="text-md font-bold">{level?.title}</p>

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
