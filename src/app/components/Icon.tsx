"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface IconProps{
    iconName: string
    size: number
    color?: string
}

const Icon = (props: IconProps) => {

    return (
        <FontAwesomeIcon icon={props.iconName} width={props.size} height={props.size} className={`text-${props.color}`}/>
    )
}

export default Icon