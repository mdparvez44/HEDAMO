import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./views/Layout.jsx"
import ProductList from "./views/ProductList.jsx"
import ProductDetail from "./views/ProductDetails.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
