import React from 'react'
import './Layout.css'

type PlanLayoutProps= {
    children:React.ReactNode
}

export const PlanLayout = ({children}:PlanLayoutProps) => {
    return (
        <div className='layout'>
            <div className='layout__header'></div>
            <div className='layout__body'>{children}</div>
            <div className='layout__footer'></div>
        </div>
    )
}