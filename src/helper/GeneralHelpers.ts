import path from 'path-browserify'

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

async function readFileReturnText(filePath: string): Promise<string> {
  const response = await fetch(path.join(filePath))
  const text = await response.text()
  return text
}

export { randomIntFromInterval, readFileReturnText }
