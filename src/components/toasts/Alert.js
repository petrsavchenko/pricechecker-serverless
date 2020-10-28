import React from 'react'
import { Alert as AlertCore } from 'grommet-icons'
import { Box, Text, Anchor } from 'grommet'

export const Alert = ({ message, onClose }) => (
    <Box fill="horizontal" background="status-warning">
      <Box pad="medium" direction="row" gap="medium" align="center">
        <AlertCore />
        <Text>{message}</Text>
        <Anchor color="dark-2" onClick={onClose} label="Acknowledge" />
      </Box>
    </Box>
  )
  