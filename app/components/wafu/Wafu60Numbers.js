'use client'
import React from 'react'

const time = 
  [
    '零','壱','弐','参','四','伍','六','七','八','九',
    '十','十壱','十弐','十参','十四','十伍','十六','十七','十八','十九',
    '弐十','弐十壱','弐十弐','弐十参','弐十四','弐十伍','弐十六','弐十七','弐十八','弐十九',
    '参十','参十壱','参十弐','参十参','参十四','参十伍','参十六','参十七','参十八','参十九',
    '四十','四十壱','四十弐','四十参','四十四','四十伍','四十六','四十七','四十八','四十九',
    '伍十','伍十壱','伍十弐','伍十参','伍十四','伍十伍','伍十六','伍十七','伍十八','伍十九',
  ]

export const Number = ({value = 0}) => {
  return (
    <>
      {time[value]}
    </>
  )
}