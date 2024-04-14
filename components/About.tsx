import { getCurrentTime } from "@/utlis/datetime"
import { Box, Group, Stack, Text } from "@mantine/core"
import { ArrowFatLineRight, Folder, GitBranch } from "@phosphor-icons/react"
import React from "react"

function About() {
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
              <Text>/about</Text>
            </Group>
          </Box>
        </Group>
        <Box bg="#fde745" c="#000" px="sm">
          <Text>{getCurrentTime()}</Text>
        </Box>
      </Group>
      <Group>
        <ArrowFatLineRight size={20} />
        <Text>about</Text>
      </Group>
      <Box ml={30}>
        <Stack gap={5}>
          <Text fz={32} c="#fde745">
            What is Terminal Portfolio?
          </Text>
          <Text fz={18} c="#fff">
            The Terminal Portfolio is a unique showcase designed to navigate
            through portfolios in a terminal-style interface.
          </Text>
        </Stack>
        <Stack gap={5} mt={16}>
          <Text fz={32} c="#fde745">
            Tech Stack
          </Text>
          <Text fz={18} c="#fff">
            This site is built using NextJS, Typescript and MantineUI library.
          </Text>
        </Stack>
      </Box>
    </Stack>
  )
}

export default About
