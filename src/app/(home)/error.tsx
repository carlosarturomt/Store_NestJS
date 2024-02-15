"use client"

import { useEffect } from "react"

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {

  useEffect(() => {
    console.log(error)
  }, [])

  return (
    <div className="px-10">
      <h1>:c</h1>
      <p>Ha ocurrido un error.</p>
      <button onClick={reset} className="border-2 rounded-md px-2 py-1 my-2">Intentar de nuevo</button>
    </div>
  )
}
