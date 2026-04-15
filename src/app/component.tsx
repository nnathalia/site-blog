"use client"
import { useEffect } from "react"

export const ErrorComponent = () => {

  useEffect(() => {
    throw new Error("Erro do componente!")
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-white">Erro ao carregar a página!</h1>
    </div>
  )
}