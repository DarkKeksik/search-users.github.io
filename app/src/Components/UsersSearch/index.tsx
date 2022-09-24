import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OctokitWithConfig } from '../../utils/oktokit'

import { setUsersToolkit, setTokenToolkit } from '../../toolkitRedux/reducers/externalApi'
import { setAccessTokenLS } from '../../utils/localstorage'
import { Input } from '../'

const SearchUsers = () => {
  const dispatch = useDispatch()
  const accessToken: string = useSelector(({ reducerExternalApi: {accessToken} }) => accessToken)

  const setUsers = useCallback(async (value: string) => {
    await OctokitWithConfig(accessToken).request('GET /users', {
      username: value
    }).then((data) => dispatch(setUsersToolkit(data)))
  }, [accessToken])

  const setToken = useCallback((value: string) => {
    setAccessTokenLS(value)
    dispatch(setTokenToolkit(value))
  }, [])

  return (
    <>
      <Input
        labelText='Search users'
        placeholderCustom='Username for search'
        anySideEffects={setUsers}
        labelStyled={
          {
            textAlign: 'center',
            fontSize: '1.8rem',
            paddingBottom: '1rem'
          }
        }
      />
      <Input
        placeholderCustom='Your github access token *'
        anySideEffects={setToken}
        defaultValue={accessToken}
      />
    </>
  )
}

export default SearchUsers