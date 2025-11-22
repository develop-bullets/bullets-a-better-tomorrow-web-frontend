import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RouteHome from './routes/home';
import { TabBar } from "@/components/tab-bar";

export const Router = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path={'/'} element={<RouteHome />} />
        <Route path={'/page-a'} element={'Page A'} />
        <Route path={'/page-b'} element={'Page B'} />
        <Route path={'/page-c'} element={'Page C'} />
        <Route path={'/page-d'} element={'Page D'} />
      </Routes>
      <TabBar />
    </BrowserRouter>
  )
}