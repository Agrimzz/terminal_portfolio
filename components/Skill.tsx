import { getCurrentTime } from "@/utlis/datetime"
import { Box, Group, SimpleGrid, Stack, Text } from "@mantine/core"
import { ArrowFatLineRight, Folder, GitBranch } from "@phosphor-icons/react"
import {
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconSql,
} from "@tabler/icons-react"
import React from "react"

function Skill() {
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
              <Text>/skill</Text>
            </Group>
          </Box>
        </Group>
        <Box bg="#fde745" c="#000" px="sm">
          <Text>{getCurrentTime()}</Text>
        </Box>
      </Group>
      <Group>
        <ArrowFatLineRight size={20} />
        <Text>skills</Text>
      </Group>
      <Box ml={30}>
        <SimpleGrid cols={2}>
          <Group align="center" gap={8}>
            <IconBrandReact stroke={2} color="#fde745" size={30} />
            <Text fz={20}>React</Text>
          </Group>
          <Group align="center" gap={8}>
            <IconBrandTypescript stroke={2} color="#fde745" size={30} />
            <Text fz={20}>Typescript</Text>
          </Group>
          <Group align="center" gap={8}>
            <IconBrandNextjs stroke={2} color="#fde745" size={30} />
            <Text fz={20}>Next.js</Text>
          </Group>
          <Group align="center" gap={8}>
            <IconBrandTailwind stroke={2} color="#fde745" size={30} />
            <Text fz={20}>Tailwindcss</Text>
          </Group>
          <Group align="center" gap={8}>
            <IconBrandPhp stroke={2} color="#fde745" size={30} />
            <Text fz={20}>php</Text>
          </Group>
          <Group align="center" gap={8}>
            <IconSql stroke={2} color="#fde745" size={30} />
            <Text fz={20}>Mysql</Text>
          </Group>
        </SimpleGrid>
      </Box>
    </Stack>
  )
}

export default Skill
