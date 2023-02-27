export const gerarNumero = (max: number, min: number) => {
  const numeroMax = Math.floor(max);
  const numeroMin = Math.ceil(min);

  return Math.floor(Math.random() * (numeroMin - numeroMax)) + numeroMin;
}

export const gerarPontosDeVida = (): number => {
  return Math.ceil(Math.random() * 1000)
}