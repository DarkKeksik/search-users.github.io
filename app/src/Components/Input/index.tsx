import React, {useState, useId, useEffect} from 'react'
import { useDebounce } from '../../utils/hooks'
import * as Styled from './Input.styled'
import { Props } from './types'

/**
 * @param labelText         - Adding a label
 * @param idCustom          - Adding a attr id label and input
 * @param placeholderCustom - Adding a attr placeholder
 * @param anySideEffects    - Any side effects after changed input
 * @param debounceTimeout   - Timeout for debounce
 * @param inputType         - Attr type for input
 * @param labelStyled       - Custom styles for label
 * @param defaultValue      - Just default value for input
 * */

const Input: React.FC<Props> = (
    {
      labelText,
      idCustom,
      placeholderCustom,
      anySideEffects,
      timeoutDebounce = 500,
      inputType,
      labelStyled,
      defaultValue
    }
) => {
  const [value, setValue] = useState<string>(defaultValue)
  const valueDebounced = useDebounce(value, timeoutDebounce)
  const inputId = useId()

  useEffect(() => {
    setValue(defaultValue)
  }, [])

  useEffect(() => {
    // @TODO empty string will break updating. It's feature! (but need fix)
    if (valueDebounced && anySideEffects) {
      anySideEffects(valueDebounced)
    }
  }, [valueDebounced])

  return (
    <Styled.Wrap>
      {
        labelText &&
          <Styled.Label
            {...labelStyled}
            htmlFor={idCustom || inputId}
          >{ labelText }</Styled.Label>
      }
      <Styled.Input
        id={idCustom || inputId}
        type={inputType || 'text'}
        value={value}
        onChange={({target}) => setValue(target.value)}
        placeholder={placeholderCustom}
      />
    </Styled.Wrap>
  )
}

export default Input