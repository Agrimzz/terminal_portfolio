import { Box, Group, Stack, Text } from "@mantine/core"
import React from "react"
import AnimateOpacity from "./AnimationOpacity"
import { TypeAnimation } from "react-type-animation"
import DefaultPath from "./DefaultPath"

function Welcome({ time }: any) {
  return (
    <AnimateOpacity>
      <Stack gap={10}>
        <Group justify="space-between">
          <DefaultPath />
          <Box bg="#fde745" c="#000" px="sm">
            <Text>{time}</Text>
          </Box>
        </Group>

        <TypeAnimation
          sequence={[
            "WELCOME TO MY PORTFOLIO",
            1000,
            "Type help to get started",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "3em", display: "inline-block" }}
          repeat={Infinity}
        />
        <Text fz={16}>Type help to view list of commands.</Text>
      </Stack>
    </AnimateOpacity>
  )
}

export default Welcome
