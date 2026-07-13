import { useState, useEffect } from 'preact/hooks'
import { getAST, calculateComplexity } from './core/codeComplex.ts';

export default function App() {
  const [code, setCode] = useState('');

  // run on every code change
  useEffect(() => {
    console.log( `Complexity num: ${calculateComplexity(getAST(code))}` )
  }, [code])
    
  return (
    <div className="p-2">
      <textarea placeholder="file code goes here.." className="textarea" value={code} onChange={e => setCode(e.target.value)}></textarea>
    </div>
  )
}
