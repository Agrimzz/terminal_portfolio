import { getCurrentDateAndDay } from "@/utlis/datetime"
import { Group, Text } from "@mantine/core"
import React from "react"

function Date() {
  const { date, day } = getCurrentDateAndDay()
  return (
    <Group gap={15}>
      <Text>{day}</Text>
      <Text>{date}</Text>
    </Group>
  )
}

export default Date
