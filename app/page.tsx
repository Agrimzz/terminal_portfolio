"use client"
import About from "@/components/About"
import AnimateOpacity from "@/components/AnimationOpacity"
import Bio from "@/components/Bio"
import Commands from "@/components/Commands"
import Contact from "@/components/Contact"
import Date from "@/components/Date"
import Help from "@/components/Help"
import Skill from "@/components/Skill"
import UserInput from "@/components/UserInput"
import Welcome from "@/components/Welcome"
import {
  Alert,
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
import { useState } from "react"
import { motion } from "framer-motion"
import { getCurrentTime } from "@/utlis/datetime"

export default function Home() {
  const [rowIds, setRowIds] = useState([
    { id: 1, time: getCurrentTime() },
    { id: 2, time: getCurrentTime() },
    { id: 4, time: getCurrentTime() },
  ])

  const renderComponent = (rowId: number, time: any) => {
    switch (rowId) {
      case 1:
        return <Date />
      case 2:
        return <Welcome time={time} />
      case 3:
        return <Commands />
      case 4:
        return <UserInput id={rowId} setRowIds={setRowIds} time={time} />
      case 5:
        return (
          <Stack gap={20}>
            <Bio time={time} />
            <UserInput id={rowId} setRowIds={setRowIds} time={time} />
          </Stack>
        )
      case 6:
        return (
          <Stack gap={20}>
            <Skill time={time} />
            <UserInput id={rowId} setRowIds={setRowIds} time={time} />
          </Stack>
        )
      case 7:
        return (
          <Stack gap={20}>
            <Contact time={time} />
            <UserInput id={rowId} setRowIds={setRowIds} time={time} />
          </Stack>
        )
      case 8:
        return (
          <Stack gap={20}>
            <About time={time} />
            <UserInput id={rowId} setRowIds={setRowIds} time={time} />
          </Stack>
        )
      case 9:
        return (
          <Stack gap={20}>
            <Help time={time} />
            <UserInput id={rowId} setRowIds={setRowIds} time={time} />
          </Stack>
        )
      case 10:
        return (
          <Stack gap={20}>
            <Text c="red">
              Command not found. Type help to view list of commands.
            </Text>
            <UserInput id={rowId} setRowIds={setRowIds} time={time} />
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
        <Alert
          variant="filled"
          color="blue"
          title="Design not for mobile view"
          style={{ position: "absolute", zIndex: 99, top: 150 }}
          hiddenFrom="md"
        >
          For best experience please view in PC. This design is not for mobile
          view.
        </Alert>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <Flex
            w={{ base: "90%", md: 900 }}
            h={50}
            bg="#3b3b3f"
            justify="space-between"
            style={{ borderRadius: "10px 10px 0 0" }}
            px="md"
          >
            <Group gap={10}>
              <Box
                w={20}
                h={20}
                bg="#f95955"
                style={{ borderRadius: "20px" }}
              />
              <Box
                w={20}
                h={20}
                bg="#e5bf3c"
                style={{ borderRadius: "20px" }}
              />
              <Box
                w={20}
                h={20}
                bg="#57c038"
                style={{ borderRadius: "20px" }}
              />
            </Group>

            <Group gap={0}>
              <Atom color="#fff" size={30} />
              <Text c="#fff">Agrimzz/terminal_portfolio</Text>
            </Group>

            <Space />
          </Flex>

          <ScrollArea
            w={{ base: "90%", md: 900 }}
            h={500}
            p="sm"
            c="#fff"
            bg="rgba(28, 38, 43, 0.9)"
            style={{
              borderRadius: "0 0 10px 10px",
            }}
          >
            <Stack gap={20} m={0} style={{ margin: 0 }}>
              {rowIds.map((row, index) => (
                <AnimateOpacity key={index}>
                  {renderComponent(row.id, row.time)}
                </AnimateOpacity>
              ))}
            </Stack>
          </ScrollArea>
        </motion.div>
      </BackgroundImage>
    </Box>
  )
}
