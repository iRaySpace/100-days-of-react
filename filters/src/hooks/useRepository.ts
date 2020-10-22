import { useState, useEffect } from 'react'
import { DataRepository } from '../repositories/data.repository'

export function useRepository() {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [mount, setMount] = useState(false)

  const repository = new DataRepository()

  // fetch
  useEffect(() => {
    if (mount) return
    setMount(true)
    setLoading(true)
    ;(async function () {
      setData(await repository.fetch())
      setLoading(false)
    })()
  }, [mount, repository])

  // search
  useEffect(() => {
    if (!mount) return
    setLoading(true)
    ;(async function () {
      setData(
        search ? await repository.search(search) : await repository.fetch(),
      )
      setLoading(false)
    })()
  }, [mount, search])

  return { data, isLoading, setSearch }
}
