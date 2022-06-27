import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />}>
              <Route path=":id" element={<ProductDetail />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

function Layout() {
  return (
    <div>
      <Link to="">HOME</Link>
      <Link to="product">PRODUCT</Link>
      <Outlet />
    </div>
  );
}

function Home() {
  return <div>Home</div>;
}

function NoMatch() {
  return <div>NoMatch</div>;
}

function Product() {
  const navigate = useNavigate()

  return (
    <>
      <div>Product</div>
      <button onClick={() => {
        navigate('/product/123')
      }}>跳转详情</button>
       <Outlet />
    </>
  );
}

function ProductDetail() {
  const params = useParams()

  return <div>ProductDetail: {params.id}</div>;
}


export default App
