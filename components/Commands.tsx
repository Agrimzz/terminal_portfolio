import { commands } from "@/constants/constants"
import { getCurrentTime } from "@/utlis/datetime"
import { Box, Grid, Group, Stack, Text } from "@mantine/core"
import { ArrowFatLineRight } from "@phosphor-icons/react"
import React from "react"
import DefaultPath from "./DefaultPath"

function Commands() {
  return (
    <Stack gap={10}>
      <Group justify="space-between">
        <DefaultPath />
        <Box bg="#fde745" c="#000" px="sm">
          <Text>{getCurrentTime()}</Text>
        </Box>
      </Group>
      <ArrowFatLineRight size={20} />
      {commands.map((item, index) => (
        <Stack gap={10} key={index} ml={30}>
          <Grid gutter={0}>
            <Grid.Col span={2}>
              <Text c="#fde745">{item.cmd}</Text>
            </Grid.Col>
            <Grid.Col span="auto">
              <Text>{item.desc}</Text>
            </Grid.Col>
          </Grid>
        </Stack>
      ))}
    </Stack>
  )
}

export default Commands
