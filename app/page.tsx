"use client"
import { commands } from "@/constants/constants"
import { getCurrentDateAndDay, getCurrentTime } from "@/utlis/datetime"
import {
  BackgroundImage,
  Box,
  Flex,
  Grid,
  Group,
  Paper,
  ScrollArea,
  SimpleGrid,
  Space,
  Stack,
  Text,
  TextInput,
} from "@mantine/core"
import { ArrowRight, Atom, File, Folder, Terminal } from "@phosphor-icons/react"
import { ArrowFatLineRight } from "@phosphor-icons/react/dist/ssr"
import { useEffect, useState } from "react"

export default function Home() {
  const { date, day } = getCurrentDateAndDay()
  const time = getCurrentTime()

  const [currTime, setCurrTime] = useState<string>("")
  const [path, setPath] = useState<any>()
  const [data, setData] = useState<any>()

  const [rows, setRows] = useState<any>([{}])
  const defaultPath = (
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

  const inputRow = {
    currTime: time,
    path: defaultPath,
    data: (
      <form>
        <input
          type="text"
          placeholder="Type help to view list of commands"
          style={{
            background: "none",
            outline: "none",
            color: "#fff",
            border: "none",
            width: "600px",
            padding: "5px",
          }}
        />
      </form>
    ),
  }

  useEffect(() => {
    const firstRow = {
      currTime: "",
      path: "",
      data: (
        <Group gap={15}>
          <Text>{day}</Text>
          <Text>{date}</Text>
        </Group>
      ),
    }

    const welcomeRow = {
      currTime: getCurrentTime(),
      path: defaultPath,
      data: (
        <Text fz={60} fw={800}>
          WELCOME TO MY PORTFOLIO
        </Text>
      ),
    }

    const cmdRow = {
      currTime: time,
      path: defaultPath,
      data: commands.map((command, index) => (
        <Stack gap={10} key={index}>
          <Grid>
            <Grid.Col span={2}>
              <Text c="#fde745">{command.cmd}</Text>
            </Grid.Col>
            <Grid.Col span="auto">
              <Text>{command.desc}</Text>
            </Grid.Col>
          </Grid>
        </Stack>
      )),
    }

    setRows([firstRow, welcomeRow, cmdRow, inputRow])
  }, [])
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
          w={1000}
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
          w={1000}
          h={500}
          p="sm"
          c="#fff"
          bg="rgba(28, 38, 43, 0.9)"
          style={{
            borderRadius: "0 0 10px 10px",
          }}
        >
          <Stack gap={20}>
            {rows.map((item: any, index: any) => (
              <Box key={index}>
                <Stack gap={10}>
                  <Group justify="space-between">
                    {item.path}
                    <Box bg="#fde745" c="#000" px="sm">
                      <Text>{item.currTime}</Text>
                    </Box>
                  </Group>
                  <Stack gap={5}>
                    <Group gap={0} align="center">
                      {index === 0 ? <></> : <ArrowFatLineRight size={20} />}
                    </Group>
                    {index === 0 || index === 1 ? (
                      <Box>{item.data}</Box>
                    ) : (
                      <Box pl={30}>{item.data}</Box>
                    )}
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Stack>
        </ScrollArea>
      </BackgroundImage>
    </Box>
  )
}
