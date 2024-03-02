import React, { memo, useEffect, useState, Suspense } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import { LayoutWrapper } from './style'
import routes, { blankPages } from '../router/index'

const Layout = memo(() => {
  const location = useLocation()
  const [isBlank, setIsBlank] = useState(false)

  useEffect(() => {
    setIsBlank(blankPages.includes(location.pathname))
  }, [location.pathname])

  return (
    <LayoutWrapper>
      <Suspense fallback="loading...">
        {useRoutes(routes)}
      </Suspense>
      {
        !isBlank && <>
          <div className='layout'>
            <div className='topbar'>
              <div className='topbar-content'>
                <div className='title'>Arcaea</div>
                <div className='identity'>
                  <div>游客</div>
                </div>
                {/* <div className='config'>
              <div className='config-lock'></div>
            </div> */}
              </div>
              <div className='avatar'></div>
            </div>
          </div>
        </>
      }
    </LayoutWrapper>
  )
})

export default Layout