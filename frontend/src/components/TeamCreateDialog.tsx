import { Box, Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useLazyQuery, useMutation } from "@apollo/client";
import { BaseDialog, BaseDialogProps } from "./_base/Dialog";
import { createTeamMutation } from "../graphql/mutation/createTeam";
import { useApolloUser } from "../types/ApolloUserContext";
import { MemberRole } from '../types/generated/graphql';

type Props = {
  open: boolean,
  setOpen: (open: boolean) => void,
};

const Actions = (props: {
  setOpen: (open: boolean) => void,
  teamName: string,
}) => {
  const { setOpen, teamName } = props;
  const { user } = useApolloUser();
  const [ createTeam, {} ] = useMutation(createTeamMutation);

  const register = () => {
    createTeam({
      variables: {
        input: {
          name: teamName,
          members: {
            create: [
              {
                user: {
                  connect: {
                    id: user.id
                  }
                },
                role: 'admin'
              }
            ]
          }
        }
      }
    }).then(() => {
    }).catch((e) => {
    }).finally(() => {
      setOpen(false);
    })
  }

  return (
    <Grid container textAlign={'center'}>
      <Grid item xs>
        <Button onClick={ () => setOpen(false) }>Cancel</Button>
      </Grid>
      <Grid item xs>
        <Button onClick={ () => register() }>Register</Button>
      </Grid>
    </Grid>
  )
}

const Content = (props: {
  teamName: string,
  setTeamName: (name: string) => void
}) => {
  const { teamName, setTeamName } = props;
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-required"
        label="New Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
    </Box>
  )
}

export const TeamCreateDialog = (props: Props) => {
  const { open, setOpen } = props;
  const [teamName, setTeamName] = useState('');
  const onClose = () => { setOpen(false) };

  return (
    <BaseDialog
      title="Create New Team"
      open={open}
      onClose={onClose}
      actions={<Actions setOpen={setOpen} teamName={teamName}/>}
      content={<Content teamName={teamName} setTeamName={setTeamName}/>}
    />
  )
}
