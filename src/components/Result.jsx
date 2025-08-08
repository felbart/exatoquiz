// components/Result.jsx
import React, { useState } from 'react'
import { questions } from '../data/questions'
import { answers as encodedAnswers } from '../data/answers'
import { evaluations } from '../data/result'
import Button from './Button'
import Modal from './Modal'
import ResultCard from './ResultCard'

import imgIniciante from '../assets/images/iniciante.png'
import imgIntermediario from '../assets/images/intermediario.png'
import imgAvancado from '../assets/images/avancado.png'


const Result = ({ userAnswers = [], onRestart }) => {
  const [showModal, setShowModal] = useState(false)

  const imageMap = {
    'Iniciante': imgIniciante,
    'Intermediário': imgIntermediario,
    'Avançado': imgAvancado
  };
  
  
  const score = userAnswers.reduce((acc, answer, index) => {
    const correct = parseInt(atob(encodedAnswers[index]))
    return answer === correct ? acc + 1 : acc
  }, 0)

  const evaluation = evaluations.find(({ range }) => {
    return score >= range[0] && score <= range[1]
  })

  const imageSrc = imageMap[evaluation.title] || imgIniciante;

  const errors = questions
    .map((q, i) => {
      const correctIndex = parseInt(atob(encodedAnswers[i]))
      return userAnswers[i] !== correctIndex
        ? {
            index: i + 1,
            question: q.question,
            user: q.options[userAnswers[i]],
            correct: q.options[correctIndex]
          }
        : null
    })
    .filter(Boolean)

  return (
    <div className="space-y-6 text-center">
      <h2 className="text-3xl font-bold text-indigo-950 dark:text-yellow-300">
        Resultado Final
      </h2>

      <div className="text-lg text-gray-700 dark:text-gray-100">
        Você acertou <strong>{score}</strong> de {questions.length} questões!
      </div>

      <div className="bg-indigo-100 dark:bg-indigo-800/40 p-6 rounded-md shadow flex flex-col items-center justify-center">
        
        <img src={imageSrc} alt={`Exater ${evaluation.title}`} width={250} />
        <h3 className="text-xl font-semibold text-indigo-900 dark:text-white">
          {evaluation.title}
        </h3>
        <p className="text-gray-800 text-sm text-pretty dark:text-gray-100 mt-2 whitespace-pre-line">
          {evaluation.text}
        </p>
      </div>
        <Button onClick={() => setShowModal(true)} icon="camera">
          Compartilhar Resultado
        </Button>
      {errors.length > 0 && (
        <div className="text-left space-y-4">
          <h4 className="text-lg font-semibold text-red-700">
            Questões que você errou:
          </h4>
          <ul className="space-y-6">
            {errors.map((err, idx) => (
              <li
                key={idx}
                className="bg-white dark:bg-slate-800 p-4 border border-gray-300 dark:border-gray-700 rounded-md"
              >
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  <strong>{err.index}.</strong> {err.question}
                </p>
                <p className="mt-2 text-sm text-red-500">
                  <strong>Sua resposta:</strong> {err.user || 'Não respondida'}
                </p>
                <p className="text-sm text-teal-700">
                  <strong>Resposta correta:</strong> {err.correct}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      

      <Button onClick={onRestart}>Refazer Quiz</Button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ResultCard
          score={score}
          total={questions.length}
          level={evaluation}
        />
      </Modal>
    </div>
  )
}

export default Result
