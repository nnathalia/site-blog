'use client'

import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import error from "next/error"

type ErrorBoundaryProps = {
  error: Error
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {

  return (
    <div className="min-h-[400px] mt-20 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center" >
        <div className="relative inline-block mb-6">
          <AlertTriangle size={64} className="text-gray-100 mx-auto" />
          <div className="absolute h-1 bg-red-500 w-16 -rotate-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80" />
        </div>
        <h2 className="text-gray-100 text-heading-xl font-sans mb-2">Algo deu errado!</h2>
        {error.message &&
          <p className="text-gray-100 text-body-lg font-sans mb-6">{error.message}</p>
        }
        <Button variant='primary' onClick={reset}>
          Tente Novamente
        </Button>
      </div>
    </div>
  )
}