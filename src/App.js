// import { useState } from 'react'
import { useReducer } from 'react'

import { reducer } from './reducer'
const initialState = {
  data: '',
  loading: false,
  error: ''
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { data, loading, error } = state

  // const [data, setData] = useState('')
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')

  const fetchData = () => {
    dispatch({ type: 'FETCH_START' })

    fetch('https://api.thecatapi.com/v1/images/search')
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res[0].url })
      })
      .catch(() => {
        dispatch({ type: 'FETCH_FAIL', payload: 'Something went wrong!' })
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
