export default function Filters({
  search, setSearch,
  category, setCategory,
  status, setStatus,
  sort, setSort
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

      {/* Search */}
      <div className="bg-gradient-to-b from-white to-gray-100 rounded-xl p-4 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] border border-gray-200">
        <label className="block text-xs font-semibold text-gray-600 mb-2">
          Search disclosures
        </label>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Product name"
          className="
            w-full bg-white rounded-lg px-3 py-2 text-sm
            border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-sky-300
            shadow-inner
          "
        />
      </div>

      {/* Category */}
      <div className="bg-gradient-to-b from-white to-gray-100 rounded-xl p-4 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] border border-gray-200">
        <label className="block text-xs font-semibold text-gray-600 mb-2">
          Category
        </label>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="
            w-full bg-white rounded-lg px-3 py-2 text-sm
            border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-sky-300
            shadow-inner
          "
        >
          <option value="">All</option>
          <option value="Textiles">Textiles</option>
          <option value="Chemicals">Chemicals</option>
          <option value="Energy">Energy</option>
          <option value="Water Treatment">Water Treatment</option>
          <option value="Packaging">Packaging</option>
          <option value="Renewable Energy">Renewable Energy</option>
          <option value="Electronics">Electronics</option>
          <option value="Construction">Construction</option>
        </select>
      </div>

      {/* Status */}
      <div className="bg-gradient-to-b from-white to-gray-100 rounded-xl p-4 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] border border-gray-200">
        <label className="block text-xs font-semibold text-gray-600 mb-2">
          Disclosure Status
        </label>
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="
            w-full bg-white rounded-lg px-3 py-2 text-sm
            border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-sky-300
            shadow-inner
          "
        >
          <option value="">All</option>
          <option value="Draft">Draft</option>
          <option value="Submitted">Submitted</option>
          <option value="Published">Published</option>
        </select>
      </div>

      {/* Sort */}
      <div className="bg-gradient-to-b from-white to-gray-100 rounded-xl p-4 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] border border-gray-200">
        <label className="block text-xs font-semibold text-gray-600 mb-2">
          Sort by
        </label>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="
            w-full bg-white rounded-lg px-3 py-2 text-sm
            border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-sky-300
            shadow-inner
          "
        >
          <option value="">Default</option>
          <option value="name">Name</option>
          <option value="date">Last Updated</option>
        </select>
      </div>

    </div>
  )
}
