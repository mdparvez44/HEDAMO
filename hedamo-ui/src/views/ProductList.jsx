import { useState } from "react"
import { products } from "../models/products"
import { filterProducts } from "../controllers/productController"
import StatusBadge from "./StatusBadge"
import Filters from "./Filters"
import { useNavigate } from "react-router-dom"

export default function ProductList() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [status, setStatus] = useState("")
  const [sort, setSort] = useState("")

  const navigate = useNavigate()

  const filtered = filterProducts(products, search, category, status, sort)

  if (filtered.length === 0) {
    return <p className="text-gray-500">No disclosures match your filters.</p>
  }

  return (
    <>
      <Filters {...{ search, setSearch, category, setCategory, status, setStatus, sort, setSort }} />
        <div className="rounded-2xl bg-sky-50 p-6 shadow-inner">
   
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    {filtered.map(p => (
      <div
        key={p.id}
        onClick={() => navigate(`/product/${p.id}`)}
        className="
          relative bg-white rounded-xl border border-gray-200 p-6 cursor-pointer
          transform transition-all duration-200 ease-out
          hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]
          active:translate-y-0 active:shadow-md
        "
      >
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition">
              {p.name}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {p.category} • {p.producer}
            </p>
          </div>

          <StatusBadge status={p.status} />
        </div>

        <div className="mt-6 flex justify-between items-center text-xs text-gray-400">
          <span>Last updated</span>
          <span>{p.updatedAt}</span>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  )
}
