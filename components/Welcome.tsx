import { defaultPath } from "@/app/page"
import { getCurrentTime } from "@/utlis/datetime"
import { Box, Group, Stack, Text } from "@mantine/core"
import React from "react"
import AnimateText from "./AnimateText"
import AnimateOpacity from "./AnimationOpacity"
import { TypeAnimation } from "react-type-animation"

function Welcome() {
  return (
    <AnimateOpacity>
      <Stack gap={10}>
        <Group justify="space-between">
          {defaultPath}
          <Box bg="#fde745" c="#000" px="sm">
            <Text>{getCurrentTime()}</Text>
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
