"use client"
import { defaultPath } from "@/app/page"
import { getCurrentTime } from "@/utlis/datetime"
import { Box, Group, Stack, Text, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { ArrowFatLineRight } from "@phosphor-icons/react"
import React, { useEffect, useRef, useState } from "react"
import classes from "./userinput.module.css"

function UserInput({ rowIds, setRowIds }: any) {
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
    switch (values.userInput) {
      case "help":
        setRowIds((prevRowIds: number[]) => [...prevRowIds, 9])
        break
      case "bio":
        setRowIds((prevRowIds: number[]) => [...prevRowIds, 5])
        break
      case "skill":
        setRowIds((prevRowIds: number[]) => [...prevRowIds, 6])

        break
      case "contact":
        setRowIds((prevRowIds: number[]) => [...prevRowIds, 7])

        break
      case "about":
        setRowIds((prevRowIds: number[]) => [...prevRowIds, 8])

        break
      case "cls":
        setRowIds([4])
        break

      default:
        setRowIds((prevRowIds: number[]) => [...prevRowIds, 10])
    }
    setDisabled(true)
  }
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
