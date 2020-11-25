import React, { useState } from 'react'

export const Tab = ({ label, onClick, activeTab }) => {

  const [isActive, setIsActive] = useState(false)

  onClick = () => {
    const { label, onClick } = this.props
  }

  let className = 'tab-list-item'

  if (activeTab === label) {
    setIsActive(true)
  }

  return (
    <li
      className={`tab-list-item {isActive ? 'active' : 'inactive'}`}
      beef="stew"
    >
      {label}
    </li>
  )
}

export default Tab
