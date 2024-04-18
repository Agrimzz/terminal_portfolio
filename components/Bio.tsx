import { Anchor, Box, Group, SimpleGrid, Stack, Text } from "@mantine/core"
import {
  ArrowFatLineRight,
  Folder,
  GitBranch,
  GithubLogo,
  InstagramLogo,
} from "@phosphor-icons/react"
import React from "react"

function Bio({ time }: any) {
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
          <Text>{time}</Text>
        </Box>
      </Group>
      <Group>
        <ArrowFatLineRight size={20} />
        <Text>bio</Text>
      </Group>
      <Box ml={35}>
        <Text fz={18}>
          Hello I'm Agrim Pradhananga, a third-year BCA student with a passion
          for frontend development. I'm dedicated to refining my skills,
          crafting engaging user experiences, and staying updated with the
          latest technologies to make meaningful contributions to web
          development.
        </Text>
        <SimpleGrid cols={2} mt={24}>
          <Group align="center" gap={10}>
            <Group gap={0}>
              <GithubLogo color="#fde745" size={20} />
              <Text c="#fde745" fz={18}>
                Github
              </Text>
            </Group>
            <Anchor href="https://github.com/Agrimzz" target="blank" fz={18}>
              @Agrimzz
            </Anchor>
          </Group>
          <Group align="center" gap={10}>
            <Group gap={0}>
              <InstagramLogo color="#fde745" size={20} />
              <Text c="#fde745" fz={18}>
                Instagram
              </Text>
            </Group>
            <Anchor
              href="https://www.instagram.com/__agrim__/"
              target="blank"
              fz={18}
            >
              @__agrim__
            </Anchor>
          </Group>
        </SimpleGrid>
      </Box>
    </Stack>
  )
}

export default Bio
