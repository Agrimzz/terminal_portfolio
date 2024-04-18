import { Box, Group, SimpleGrid, Stack, Text } from "@mantine/core"
import { ArrowFatLineRight, Folder, GitBranch } from "@phosphor-icons/react"
import React from "react"

function Contact({ time }: any) {
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
              <Text>/contact</Text>
            </Group>
          </Box>
        </Group>
        <Box bg="#fde745" c="#000" px="sm">
          <Text>{time}</Text>
        </Box>
      </Group>
      <Group>
        <ArrowFatLineRight size={20} />
        <Text>contact</Text>
      </Group>
      <Box ml={30}>
        <SimpleGrid cols={2} w={400}>
          <Text fz={18} c="#fde745">
            Phone Number
          </Text>
          <Text fz={18} c="#fff" td="underline">
            9840252973
          </Text>
          <Text fz={18} c="#fde745">
            Email
          </Text>
          <Text fz={18} c="#fff" td="underline">
            agrimp91@gmail.com
          </Text>
        </SimpleGrid>
      </Box>
    </Stack>
  )
}

export default Contact
