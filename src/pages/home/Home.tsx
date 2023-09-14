import React from 'react'
import Store from '../store/Store'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className='Home'>
        <Store />
    </div>
  )
}