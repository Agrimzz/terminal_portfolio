import { defaultPath } from "@/app/page"
import { commands } from "@/constants/constants"
import { getCurrentTime } from "@/utlis/datetime"
import { Box, Grid, Group, Stack, Text } from "@mantine/core"
import { ArrowFatLineRight, Folder, GitBranch } from "@phosphor-icons/react"
import React from "react"

function Bio() {
  return (
    <Stack gap={10}>
      <Group justify="space-between">
        <Group gap={0}>
          <Text>|---</Text>
          <Box bg="#2682ea" c="#fff" px="sm">
            <Text>~/agrim</Text>
          </Box>
          <Box bg="#44a244" c="#fff" px="sm">
            <Group gap={0}>
              <Folder size={20} />
              <Text>/portfolio</Text>
            </Group>
          </Box>
          <Box bg="#cf57e4" c="#fff" px="sm">
            <Group gap={0}>
              <GitBranch size={20} />
              <Text>/bio</Text>
            </Group>
          </Box>
        </Group>
        <Box bg="#fde745" c="#000" px="sm">
          <Text>{getCurrentTime()}</Text>
        </Box>
      </Group>
      <Group>
        <ArrowFatLineRight size={20} />
        <Text>bio</Text>
      </Group>
      <Box ml={30}>
        <Text>Hello I am Agrim Pradhananga</Text>
      </Box>
    </Stack>
  )
}

export default Bio
