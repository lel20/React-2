import { useState } from 'react'
export function userform (steps) {
  const [pasoActual, setPasoActual] = useState(0)
  function cambiarPaso (i, e) {
    if (e) e.preventDefault()
    if (i < 0 || i >= steps.length) return

    setPasoActual(i)
  }

  return {
    pasoActual,
    componeteActual: steps[pasoActual],
    cambiarPaso,
    ultimoPaso: pasoActual + 1 === steps.length,
    primerPaso: pasoActual === 0
  }
}
