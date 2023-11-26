import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { LayoutWrapper } from './style'

const Layout = memo(() => {

  return (
    <LayoutWrapper>
      <Outlet />
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
    </LayoutWrapper>
  )
})

export default Layout