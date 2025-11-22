import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RouteHome } from './routes/home';
import { RoutePageAUI } from './routes/page-a';
import { TabBar } from "@/components/tab-bar";
import {type CSSProperties, useEffect, useMemo, useRef, useState} from "react";

export const Router = () => {
  const tabBarRef = useRef<HTMLDivElement>(null)
  const [tabBarHeight, setTabBarHeight] = useState<number>(0)
  const bottomPadding = useMemo<CSSProperties>(() => ({ paddingBottom: `${tabBarHeight + 16}px` }), [tabBarHeight])

  useEffect(() => {
    if (tabBarRef.current) {
      setTabBarHeight(tabBarRef.current.offsetHeight)
    }
  }, [tabBarRef]);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path={'/'} element={<RouteHome style={bottomPadding} />} />
        <Route path={'/page-a'} element={<RoutePageAUI style={bottomPadding} />} />
        <Route path={'/page-b'} element={'Page B'} />
        <Route path={'/page-c'} element={'Page C'} />
        <Route path={'/page-d'} element={'Page D'} />
      </Routes>
      <TabBar ref={tabBarRef} />
    </BrowserRouter>
  )
}