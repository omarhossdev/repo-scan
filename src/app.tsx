import { useState, useEffect } from 'preact/hooks'
import { getAST, calculateComplexity } from './core/codeComplex.ts';

export default function App() {
  const [code, setCode] = useState('');

  const [complex, setComplex] = useState(1);
  const [issues, setIssues] = useState([]);

  // run on every code change
  useEffect(() => {
    setComplex( calculateComplexity(getAST(code)))
  }, [code])

  // get code issues
  async function analyzeCode(code: string) {
    const response = await fetch('/api/analyze', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    })

    return response.json(); 
  }

  return (
    <div className="p-2">
      <textarea placeholder="file code goes here.." className="textarea" value={code} onChange={e => setCode(e.target.value)}></textarea>

      <p>Code Complexity = {complex}</p>
    </div>
  )
}
