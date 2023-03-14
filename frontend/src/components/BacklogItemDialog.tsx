import {
  Card,
  CardContent,
  Dialog,
  Divider,
  Stack,
  TextField,
  Typography
} from '@mui/material';


type Props = {
  open: boolean;
  onClose: () => void;
}

const BacklogItemDialog = ({ open, onClose }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h6'>
          BacklogItemを追加
        </Typography>

        <Divider
          style={{
            marginBottom: '10px',
            marginTop: '10px',
          }}
        />

      <Stack
        component="form"
        // spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          variant="outlined"
          label="アイテム名"
        />
        <br />

        <TextField
          variant="outlined"
          label="内容"
        />

      </Stack>

      </CardContent>
    </Card>

    </Dialog>
  )
}

export default BacklogItemDialog;
