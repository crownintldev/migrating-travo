// @ts-nocheck
// ** MUI Imports
import { useState } from 'react'
// import Drawer from '@mui/material/Drawer'
// import { styled } from '@mui/material/styles'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'

// ** Icon Imports
// import Icon from 'src/@core/components/icon'
import { Button } from '@mui/material'
import { Sheet } from 'lucide-react'

const FormDrawer = ({
  open,
  toggle,
  drawerTitle,
  Form,
  _id,
  removeSelection,

  //for VisaService
  anchor = 'right',
  fetchApi,
  formName,
  api,
  stateSelector
}) => {
  const [formSize, setFormSize] = useState(400)
// console.log(toggle)
  return (
    <Sheet
      open={open}
      anchor={anchor}
      variant='temporary'
      onClose={toggle}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400, md: formSize } } }}
    >
      <div>
        <p variant='h5'>{drawerTitle}</p>
        <IconButton
          size='small'
          onClick={toggle}
          sx={{
            p: '0.438rem',
            borderRadius: 1,
            color: 'text.primary',
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.16)`
            }
          }}
        >
          <Icon icon='tabler:x' fontSize='1.125rem' />
        </IconButton>
      </div>
      {open && (
        <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
          {Form && (
            <Form
              toggle={toggle}
              _id={_id}
              removeSelection={removeSelection}
              fetchApi={fetchApi}
              formName={formName}
              api={api}
              stateSelector={stateSelector}
              setFormSize={setFormSize}
            />
          )}
        </Box>
      )}
    </Sheet>
  )
}

export default FormDrawer
