"use client"
import About from "@/components/About"
import Bio from "@/components/Bio"
import Commands from "@/components/Commands"
import Contact from "@/components/Contact"
import Date from "@/components/Date"
import Help from "@/components/Help"
import Skill from "@/components/Skill"
import UserInput from "@/components/UserInput"
import Welcome from "@/components/Welcome"
import {
  BackgroundImage,
  Box,
  Flex,
  Group,
  ScrollArea,
  Space,
  Stack,
  Text,
} from "@mantine/core"
import { Atom, Folder } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

export const defaultPath = (
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

export default function Home() {
  const [rowIds, setRowIds] = useState<number[]>([1, 2, 3, 4])

  const renderComponent = (rowId: number) => {
    switch (rowId) {
      case 1:
        return <Date />
      case 2:
        return <Welcome />
      case 3:
        return <Commands />
      case 4:
        return <UserInput id={rowId} setRowIds={setRowIds} />
      case 5:
        return (
          <Stack gap={20}>
            <Bio />
            <UserInput id={rowId} setRowIds={setRowIds} />
          </Stack>
        )
      case 6:
        return (
          <Stack gap={20}>
            <Skill />
            <UserInput id={rowId} setRowIds={setRowIds} />
          </Stack>
        )
      case 7:
        return (
          <Stack gap={20}>
            <Contact />
            <UserInput id={rowId} setRowIds={setRowIds} />
          </Stack>
        )
      case 8:
        return (
          <Stack gap={20}>
            <About />
            <UserInput id={rowId} setRowIds={setRowIds} />
          </Stack>
        )
      case 9:
        return (
          <Stack gap={20}>
            <Help />
            <UserInput id={rowId} setRowIds={setRowIds} />
          </Stack>
        )
      case 10:
        return (
          <Stack gap={20}>
            <Text>Invalid input. Type help to view list of commands.</Text>
            <UserInput id={rowId} setRowIds={setRowIds} />
          </Stack>
        )
      default:
        return null
    }
  }

  return (
    <Box>
      <BackgroundImage
        w="100vw"
        h="100vh"
        src="https://images.hdqwalls.com/wallpapers/ubuntu-linux-minimal-4k-on.jpg"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Flex
          w={{ base: "90%", md: 1000 }}
          h={50}
          bg="#3b3b3f"
          justify="space-between"
          style={{ borderRadius: "10px 10px 0 0" }}
          px="md"
        >
          <Group gap={10}>
            <Box w={20} h={20} bg="#f95955" style={{ borderRadius: "20px" }} />
            <Box w={20} h={20} bg="#e5bf3c" style={{ borderRadius: "20px" }} />
            <Box w={20} h={20} bg="#57c038" style={{ borderRadius: "20px" }} />
          </Group>

          <Group gap={0}>
            <Atom color="#fff" size={30} />
            <Text c="#fff">Agrimzz/terminal_portfolio</Text>
          </Group>

          <Space />
        </Flex>

        <ScrollArea
          w={{ base: "90%", md: 1000 }}
          h={500}
          p="sm"
          c="#fff"
          bg="rgba(28, 38, 43, 0.9)"
          style={{
            borderRadius: "0 0 10px 10px",
          }}
        >
          <Stack gap={20} m={0} style={{ margin: 0 }}>
            {rowIds.map((rowId, index) => (
              <Box key={index}>{renderComponent(rowId)}</Box>
            ))}
          </Stack>
        </ScrollArea>
      </BackgroundImage>
    </Box>
  )
}
