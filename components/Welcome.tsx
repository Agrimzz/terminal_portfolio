import { defaultPath } from "@/app/page"
import { getCurrentTime } from "@/utlis/datetime"
import { useGSAP } from "@gsap/react"
import { Box, Group, Stack, Text } from "@mantine/core"
import { ArrowFatLineRight } from "@phosphor-icons/react/dist/ssr"
import gsap from "gsap"
import React from "react"

function Welcome() {
  useGSAP(() => {
    gsap.to("#welcome", { x: 250, repeat: -1, yoyo: true })
  })
  return (
    <Stack gap={10}>
      <Group justify="space-between">
        {defaultPath}
        <Box bg="#fde745" c="#000" px="sm">
          <Text>{getCurrentTime()}</Text>
        </Box>
      </Group>
      <Text fz={50} fw={800} id="#welcome">
        WELCOME TO MY PORTFOLIO
      </Text>
      <Text>Type help to view list of commands.</Text>
    </Stack>
  )
}

export default Welcome
