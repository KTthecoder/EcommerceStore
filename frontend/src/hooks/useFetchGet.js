import React, { useEffect, useState } from 'react'

const useFetchGet = (url) => {
    const [data, setData] = useState(null)

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
      })
      .catch(err => {
        console.log(err.message)
      })
    }, [url])

    return {data}
}

export default useFetchGet