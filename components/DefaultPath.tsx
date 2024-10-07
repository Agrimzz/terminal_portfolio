import { Group, Box, Text } from "@mantine/core"
import { Folder } from "@phosphor-icons/react"
import React from "react"

function DefaultPath() {
  return (
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
    </Group>
  )
}

export default DefaultPath
