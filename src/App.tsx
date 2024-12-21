import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PagePlay from './pages/layouts/PagePlay'
import PageMint from './pages/layouts/PageMint'
import Page404 from './pages/layouts/Page404'

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* The rest of your app goes here */}
        <Routes>
          <Route path='/' element={<PagePlay />} />
          <Route path='/overview' element={<PagePlay />} />
          <Route path='/mint' element={<PageMint />} />
          <Route path='/play' element={<PagePlay />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
