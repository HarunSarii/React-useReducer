import { useState } from 'react'

function App() {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = () => {
    setLoading(true)
    setError('')
    setData('')

    fetch('')
      .then((res) => res.json())
      .then((res) => {
        setLoading(false)
        setData(res[0].url)
      })
      .catch(() => {
        setLoading(false)
        setError('Something went wrong!')
      })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={fetchData} disabled={loading} style={{ width: '100px', margin: '1rem' }}>
        Fetch Data
      </button>
      {data && <img src={data} alt="cat-img" />}
      {error && <p>{error}</p>}
    </div>
  )
}

export default App
