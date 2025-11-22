import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RouteHome } from './routes/home';
import { RoutePageA } from './routes/page-a';
import { RoutePageB } from './routes/page-b';
import { RouteCallbackFCM } from './routes/callback-fcm';
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
        <Route path={'/page-a'} element={<RoutePageA style={bottomPadding} />} />
        <Route path={'/page-b'} element={<RoutePageB style={bottomPadding} />} />
        <Route path={'/callback/fcm'} element={<RouteCallbackFCM style={bottomPadding} />} />
      </Routes>
      <TabBar ref={tabBarRef} />
    </BrowserRouter>
  )
}