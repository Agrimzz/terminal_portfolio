import { defaultPath } from "@/app/page"
import { getCurrentTime } from "@/utlis/datetime"
import { Box, Group, Stack, Text } from "@mantine/core"
import { ArrowFatLineRight } from "@phosphor-icons/react/dist/ssr"
import React from "react"
import AnimateText from "./AnimateText"
import AnimateOpacity from "./AnimationOpacity"

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
        {/* <Text fz={50} fw={800} id="#welcome">
        WELCOME TO MY PORTFOLIO
      </Text> */}
        <AnimateText text="WELCOME TO MY PORTFOLO" size={50} />
        <AnimateText text="Type help to view list of commands." size={16} />
      </Stack>
    </AnimateOpacity>
  )
}

export default Welcome
