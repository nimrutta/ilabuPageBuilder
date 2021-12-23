import React from "react";
import { Box } from "rebass/styled-components";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";

export default function DraggableComponent({ ...props }) {
  const [, drag] = useDrag({
    item: { id: "ComponentName", type: DRAG_TYPES.COMPONENT, props: {} },
  });
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
      Component Name
    </Box>
  );
}
