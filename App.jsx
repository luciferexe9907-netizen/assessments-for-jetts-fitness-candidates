import { useState } from 'react'
import Assessment from './components/Assessment'
import Result from './components/Result'
import { score } from './utils/scoring'
export default function App() {
  const [view, setView] = useState('start')
  const [name, setName] = useState('')
  const [res, setRes] = useState(null)
  return (
    <>
      <header className="top"><span className="logo"><i style={{background:'#2563eb'}}/><i style={{background:'#dc2626'}}/><i style={{background:'#16a34a'}}/><i style={{background:'#eab308'}}/></span> Four Colour Energy Assessment</header>
      <main>
        {view === 'start' && (
          <div className="card hero">
            <h1>Discover your colour energy</h1>
            <p>Choose the words that describe you best. Click a word to select it, click again to remove it. There are no right or wrong answers — go with your first instinct. When finished, press Submit to see your report.</p>
            <label>Your name (optional)<input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Priya Sharma" maxLength={80} /></label>
            <button className="btn" onClick={() => setView('test')}>Start Assessment</button>
            <p className="note">Your results are shown in your browser only and are not centrally stored.</p>
          </div>
        )}
        {view === 'test' && <Assessment onSubmit={sel => { setRes({ name: name.trim(), date: new Date(), s: score(sel) }); setView('result'); window.scrollTo(0, 0) }} />}
        {view === 'result' && <Result r={res} onRestart={() => { setRes(null); setView('start') }} />}
      </main>
    </>
  )
}
