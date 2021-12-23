import React from "react";
import { Box } from "rebass/styled-components";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";

export default function DrTitle({ ...props }) {
  const [, drag] = useDrag({
    item: { id: "Title", type: DRAG_TYPES.COMPONENT, props: {} },
  });

  const upload = "upload.png"
  return (
    <Box
      ref={drag}
      width={100}
      height={100}
      bg="hsl(184deg 15% 58%)"
      color="white"
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      {...props}
      style={{borderRadius: 7}}
    >
     
      <span style={{fontSize: '32px', fontWeight: 600}}>Title</span>
    </Box>
  );
}
