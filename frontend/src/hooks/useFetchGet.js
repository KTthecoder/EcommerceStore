import React, { useEffect, useState } from 'react'

const useFetchGet = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }, [url])

    return {data, loading}
}

export default useFetchGet