import { useParams, Link } from "react-router-dom"
import { products } from "../models/products"
import StatusBadge from "./StatusBadge"

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id == id)

  if (!product) return <p>Disclosure not found.</p>

  return (
    <div className="space-y-6">
      <Link to="/" className="text-blue-600 text-sm">← Back to list</Link>

      <div className="bg-white p-6 rounded border">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <p className="text-gray-500">{product.category} • {product.producer}</p>

        <div className="mt-4">
          <StatusBadge status={product.status} />
        </div>

        <div className="mt-6 border-t pt-4 space-y-2">
          <p><b>Declared by:</b> {product.declaredBy}</p>
          <p><b>Last updated:</b> {product.updatedAt}</p>
          <p><b>Supporting evidence:</b> {product.evidence} files attached by producer</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded border">
        <h3 className="font-semibold mb-3">Version History</h3>
        {product.versions.map((v, i) => (
          <div key={i} className="flex justify-between text-sm border-b py-2">
            <span>{v.date}</span>
            <span>{v.status}</span>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded text-sm text-yellow-800">
        This page presents producer-declared information. It is not certification or verification.
      </div>
    </div>
  )
}
