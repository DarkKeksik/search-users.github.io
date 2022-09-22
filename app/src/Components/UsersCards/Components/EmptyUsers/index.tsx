import React from 'react'
import * as Styled from './EmptyUsers.styled'

// @TODO here animation
const EmptyUsers = () => {
  const link = 'https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'

  return (
    <Styled.EmptyUsers>
      Try looking for other users, but first
      <Styled.Bold>you must set github access token for query!</Styled.Bold>
      <Styled.Link target='_blank' href={link}>Guide here</Styled.Link>
    </Styled.EmptyUsers>
  )
}

export default EmptyUsers