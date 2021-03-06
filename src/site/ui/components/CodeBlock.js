import React from 'react'
import tw, { styled } from 'twin.macro'
import { PSmall } from '@hummingbot/hbui/elements/typography'

const CodeBlock = ({ code }) => {
  return (
    <pre tw="mb-4 overflow-x-scroll lg:overflow-x-hidden text-sm text-secondary rounded border border-window bg-grey-light-200 dark:bg-grey-dark-700 p-4">
      {code}
    </pre>
  )
}

export default CodeBlock
