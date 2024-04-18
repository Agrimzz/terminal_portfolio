// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css"

import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core"

export const metadata = {
  title: "Terminal Portfolio",
  description: "My terminal portfolio",
}

const theme = createTheme({
  fontFamily: '"Ubuntu Mono", monospace',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
