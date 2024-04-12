"use client"
import Commands from "@/components/Commands"
import Date from "@/components/Date"
import UserInput from "@/components/UserInput"
import Welcome from "@/components/Welcome"
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
import { useForm } from "@mantine/form"
import { ArrowRight, Atom, File, Folder, Terminal } from "@phosphor-icons/react"
import { ArrowFatLineRight } from "@phosphor-icons/react/dist/ssr"
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
  const { date, day } = getCurrentDateAndDay()
  const time = getCurrentTime()

  const [currTime, setCurrTime] = useState<string>("")
  const [path, setPath] = useState<any>()
  const [data, setData] = useState<any>()

  const [rows, setRows] = useState<any>([{}])

  const form = useForm({
    initialValues: {
      userInput: "",
    },
    validate: {
      userInput: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  })

  const [userInput, setUserInput] = useState<string>("")

  const inputRow = {
    currTime: time,
    path: defaultPath,
    data: (
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values)
        })}
      >
        <TextInput
          w={600}
          placeholder="Type help to view list of commands"
          {...form.getInputProps("userInput")}
        />
      </form>
      // <form
      //   onSubmit={(e) => {
      //     e.preventDefault()
      //     console.log(userInput)
      //   }}
      // >
      //   <input
      //     type="text"
      //     placeholder="Type"
      //     value={userInput}
      //     onChange={(e) => setUserInput(e.target.value)}
      //     style={{ width: 600 }}
      //   />
      // </form>
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
          <Grid gutter={0}>
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
            {/* {rows.map((item: any, index: any) => (
              <Box key={index}>
                <Stack gap={10}>
                  <Group justify="space-between">
                    {item.path}
                    <Box bg="#fde745" c="#000" px="sm">
                      <Text>{item.currTime}</Text>
                    </Box>
                  </Group>
                  {index < 3 ? (
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
                  ) : (
                    <Group gap={0}>
                      <Group gap={0} align="center">
                        {index === 0 ? <></> : <ArrowFatLineRight size={20} />}
                      </Group>
                      {index === 0 || index === 1 ? (
                        <Box>{item.data}</Box>
                      ) : (
                        <Box pl={30}>{item.data}</Box>
                      )}
                    </Group>
                  )}
                </Stack>
              </Box>
            ))} */}
            <Date />
            <Welcome />
            <Commands />
            <UserInput />
          </Stack>
        </ScrollArea>
      </BackgroundImage>
    </Box>
  )
}
