import React, { FC, useContext, ChangeEvent, useState } from 'react'
import { Search, AddBox } from '@material-ui/icons'
import { UsersState } from 'State'
import {
  Container,
  Grid,
  // Typography,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
} from '@material-ui/core'
import { User } from 'type'

type Key = keyof Omit<User, 'id'>

const UsersForm: FC = () => {
  const { openAddForm, onClear, formState, fetchUsers } = useContext(UsersState)
  const [selectType, setSelectType] = useState<Key>('schoolID')
  const toggle = () => {
    if (formState.currentKey !== null) formState.currentKey = null
    openAddForm()
    onClear()
  }

  const search = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    fetchUsers({ [selectType]: currentTarget.value })
  }

  const onSelectType = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSelectType(target.value as Key)
  }

  const searchLists: Key[] = ['schoolID', 'firstname', 'lastname']
  const searchNames = ['School ID', 'Firstname', 'Lastname']

  return (
    <Container maxWidth="xl">
      <Grid alignItems="center" justify="flex-end" spacing={4} container>
        {/* <Grid item>
          <Typography variant="h6">Users</Typography>
        </Grid> */}
        <Grid item>
          <Grid container alignItems="center">
            <TextField
              InputProps={{
                placeholder: 'Search',
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              onChange={search}
            />
            <TextField select value={selectType} onChange={onSelectType}>
              {searchLists.map((searchList, i) => (
                <MenuItem key={i} value={searchList}>
                  {searchNames[i]}
                </MenuItem>
              ))}
            </TextField>
            <IconButton onClick={toggle}>
              <AddBox />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default UsersForm
