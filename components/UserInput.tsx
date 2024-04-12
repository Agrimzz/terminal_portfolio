"use client"
import { defaultPath } from "@/app/page"
import { commands } from "@/constants/constants"
import { getCurrentTime } from "@/utlis/datetime"
import { Box, Grid, Group, Stack, Text, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { ArrowFatLineRight } from "@phosphor-icons/react"
import React from "react"

function UserInput() {
  const form = useForm({
    initialValues: {
      userInput: "",
    },
  })
  return (
    <Stack gap={10}>
      <Group justify="space-between">
        {defaultPath}
        <Box bg="#fde745" c="#000" px="sm">
          <Text>{getCurrentTime()}</Text>
        </Box>
      </Group>
      <Group>
        <ArrowFatLineRight size={20} />
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values)
          })}
        >
          <TextInput
            w={600}
            color="#fff"
            variant="unstyled"
            placeholder="Type help to view list of commands"
            {...form.getInputProps("userInput")}
          />
        </form>
      </Group>
    </Stack>
  )
}

export default UserInput
