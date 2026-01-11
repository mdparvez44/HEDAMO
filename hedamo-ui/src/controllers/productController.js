export function filterProducts(products, search, category, status, sort) {
  let data = [...products]

  if (search)
    data = data.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  if (category)
    data = data.filter(p => p.category === category)

  if (status)
    data = data.filter(p => p.status === status)

  if (sort === "name")
    data.sort((a,b)=>a.name.localeCompare(b.name))

  if (sort === "date")
    data.sort((a,b)=>new Date(b.updatedAt)-new Date(a.updatedAt))

  return data
}
