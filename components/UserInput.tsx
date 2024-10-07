"use client"
import { getCurrentTime } from "@/utlis/datetime"
import { Box, Group, Stack, Text, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { ArrowFatLineRight } from "@phosphor-icons/react"
import React, { useEffect, useRef, useState } from "react"
import classes from "./userinput.module.css"
import DefaultPath from "./DefaultPath"

function UserInput({ rowIds, setRowIds, time }: any) {
  const [disabled, setDisabled] = useState<boolean>(false)
  const form = useForm({
    initialValues: {
      userInput: "",
    },
  })

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (values: any) => {
    const currentTime = getCurrentTime()

    switch (values.userInput) {
      case "help":
        setRowIds((prevRows: any[]) => [
          ...prevRows,
          { id: 9, time: currentTime },
        ])
        break
      case "bio":
        setRowIds((prevRows: any[]) => [
          ...prevRows,
          { id: 5, time: currentTime },
        ])
        break
      case "skill":
        setRowIds((prevRows: any[]) => [
          ...prevRows,
          { id: 6, time: currentTime },
        ])
        break
      case "contact":
        setRowIds((prevRows: any[]) => [
          ...prevRows,
          { id: 7, time: currentTime },
        ])
        break
      case "about":
        setRowIds((prevRows: any[]) => [
          ...prevRows,
          { id: 8, time: currentTime },
        ])
        break
      case "cls":
        setRowIds([{ id: 4, time: currentTime }])
        break
      default:
        setRowIds((prevRows: any[]) => [
          ...prevRows,
          { id: 10, time: currentTime },
        ])
    }
    setDisabled(true)
  }

  return (
    <Stack gap={10}>
      <Group justify="space-between">
        <DefaultPath />
        <Box bg="#fde745" c="#000" px="sm">
          <Text>{time}</Text>
        </Box>
      </Group>
      <Group>
        <ArrowFatLineRight size={20} />
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values)
            handleSubmit(values)
          })}
        >
          <TextInput
            ref={inputRef}
            w={600}
            c="#fff"
            variant="unstyled"
            disabled={disabled}
            classNames={{ root: classes.root }}
            placeholder="Type help to view list of commands"
            {...form.getInputProps("userInput")}
          />
        </form>
      </Group>
    </Stack>
  )
}

export default UserInput
