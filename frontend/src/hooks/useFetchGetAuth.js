import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

const useFetchGetAuth = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [reload, setReload] = useState(false)
  const { accessToken } = useContext(AuthContext)

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + accessToken
      }
    })
    .then(res => res.json())
    .then((data) => {
      setData(data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [url, reload])

  return {data, loading, setReload, reload}
}

export default useFetchGetAuth