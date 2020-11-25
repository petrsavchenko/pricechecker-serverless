import React from "react";
import { Box, Text, Button, Anchor } from "grommet";
import { FormClose } from "grommet-icons";
import { ToastLayer } from "./ToastLayer";

export const Toast = ({ message, undo = false, duration = 5, onClose = () => {} }) => (
  <ToastLayer
    margin="small"
    position="top"
    responsive={false}
    onClose={onClose}
    onEsc={onClose}
    duration={duration}
  >
    <Box
      direction="row"
      justify="between"
      align="center"
      elevation="small"
      pad={{ vertical: `xsmall`, left: `medium` }}
      background="light-3"
      width="medium"
      gap="small"
    >
      <Box flex={"grow"} align="center">
        <Text size="medium">{message}</Text>
      </Box>
      {undo && <Anchor onClick={onClose} label="Undo" />}
      <Button plain icon={<FormClose />} onClick={onClose} />
    </Box>
  </ToastLayer>
);
