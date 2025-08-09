import React, { useState } from 'react'
import Button from './Button'
import { questions } from '../data/questions'
import Result from './Result'
import exatoboy from '../assets/images/exatoboy.png'



const Quiz = () => {
  const [step, setStep] = useState('start')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))

  const handleAnswer = (index) => {
    const updated = [...answers]
    updated[current] = index
    setAnswers(updated)
  }

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1)
    } else {
      setStep('result')
    }
  }

  return (
    <section
      id="quiz"
      className="w-full bg-gray-50 dark:bg-indigo-900 max-w-5xl mx-auto px-4 py-8 border-4 border-indigo-200 shadow-lg shadow-indigo-600/20 rounded-lg"
    >
      {step === 'start' && (
        <div className="text-center space-y-4">
          <img src={exatoboy} alt="Exato" width={150} className='mx-auto'/>
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 dark:text-yellow-300">
            Que tipo de <span className="text-orange-500">Exater</span> você é?
          </h1>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-200">
            Iniciante? Intermediário? Avançado? Teste seus conhecimentos e mostre que você está bem informado sobre o Exame de Acesso ao Ensino Superior do Tocantins com esse teste de conhecimento.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            No final, que tal compartilhar seus resultados dando um print e postando lá no Instagram com a <strong className="text-orange-600">#quizexato</strong>?
          </p>

          <Button onClick={() => setStep('quiz')} icon="right">
            Começar Quiz
          </Button>
        </div>
      )}

      {step === 'quiz' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-200">
            <span>
              Questão <strong className='text-orange-600 text-lg bg-gray-200 p-1.5 rounded-sm'>{current + 1}</strong> de {questions.length}
            </span>
            <div className="w-1/2 bg-gray-200 rounded h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full transition-all duration-300"
                style={{ width: `${((current + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h2 className="text-lg md:text-xl font-semibold text-indigo-950 dark:text-white">
            {questions[current].question}
          </h2>

          <div className="space-y-4">
            {questions[current].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className={`w-full text-left px-4 py-3 border-2 rounded-md transition-all cursor-pointer ${
                  answers[current] === idx
                    ? 'bg-indigo-800/40 text-indigo-950 border-indigo-900'
                    : 'border-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-800/20 dark:hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={() => setCurrent((prev) => prev - 1)}
              disabled={current === 0}
              icon="left"
              variant="secondary"
            >
              Anterior
            </Button>

            <Button
              onClick={handleNext}
              disabled={answers[current] === null}
              icon="right"
            >
              {current === questions.length - 1 ? 'Finalizar' : 'Próxima'}
            </Button>
          </div>
        </div>
      )}


      {step === 'result' && (
      <Result userAnswers={answers} onRestart={() => {
        setAnswers(Array(questions.length).fill(null))
        setCurrent(0)
        setStep('start')
      }} />
    )}
    </section>
  )
}

export default Quiz
