import React from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const Button = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  icon,
  type = 'button'
}) => {
  const baseStyle = 'inline-flex items-center justify-center px-5 py-3 text-sm md:text-base font-medium rounded-lg transition-all cursor-pointer'

  const variants = {
    primary: 'bg-indigo-900 text-white hover:bg-orange-400',
    secondary: 'bg-gray-400 text-white hover:bg-gray-500',
    outline: 'border border-violet-600 text-violet-700 hover:bg-violet-100',
  }

  const disabledStyle = 'opacity-50 cursor-not-allowed'

  const iconLeft = icon === 'left' ? <ArrowLeft className="w-5 h-5 mr-2" /> : null
  const iconRight = icon === 'right' ? <ArrowRight className="w-5 h-5 ml-2" /> : null

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabled ? disabledStyle : ''}`}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  )
}

export default Button
