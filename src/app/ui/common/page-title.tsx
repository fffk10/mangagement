import React from 'react'

type PageTitleProps = {
  text: string
}

const PageTitle = ({ text }: PageTitleProps): JSX.Element => {
  return <h2 className='font-semibold text-2xl mx-2 my-3'>{text}</h2>
}

export default PageTitle
