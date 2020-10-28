import React from "react";
import { Box, Text, Button, Anchor } from "grommet";
import { FormClose } from "grommet-icons";
import { ToastLayer } from "./ToastLayer";

export const Toast = ({ onClose = () => {} }) => (
  <ToastLayer
    margin="small"
    position="top"
    responsive={false}
    onClose={onClose}
    onEsc={onClose}
    duration={5}
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
      <Text size="medium">We are sad to see you leave!</Text>
      <Anchor onClick={onClose} label="Undo" />
      <Button plain icon={<FormClose />} onClick={onClose} />
    </Box>
  </ToastLayer>
);
