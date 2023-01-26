import Header from 'components/HeaderNavigation'
import Sidebar from 'components/Sidebar/Sidebar'
import React from 'react'

const BaseLayout: React.FC<any> = ({ children }) => {
    return (
        <>
            <Sidebar />
            <div id="main">
            <Header />
                {children}
            </div>
        </>
    )
}

export default BaseLayout;