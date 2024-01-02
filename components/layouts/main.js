import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelLaptop from '../voxel-laptop'
import NoSsr from '../no-ssr'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jimmy Kong - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container mawW="container.md" pt={14}>
        <NoSsr>
          <VoxelLaptop />
        </NoSsr>


        {children}
      </Container>
    </Box>
  )
}

export default Main