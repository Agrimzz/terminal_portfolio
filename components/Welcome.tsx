import { defaultPath } from "@/app/page"
import { getCurrentTime } from "@/utlis/datetime"
import { Box, Group, Stack, Text } from "@mantine/core"
import { ArrowFatLineRight } from "@phosphor-icons/react/dist/ssr"
import React from "react"

function Welcome() {
  return (
    <Stack gap={10}>
      <Group justify="space-between">
        {defaultPath}
        <Box bg="#fde745" c="#000" px="sm">
          <Text>{getCurrentTime()}</Text>
        </Box>
      </Group>
      <Text fz={60} fw={800}>
        WELCOME TO MY PORTFOLIO
      </Text>
    </Stack>
  )
}

export default Welcome
