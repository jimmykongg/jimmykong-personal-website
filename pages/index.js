import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article.js'
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoGoogle
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a student in Computer System Technology program at BCIT
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jimmy Kong
            </Heading>

            <p>Novice Full-stack developer</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              borderRadius="full"
              maxWidth="100px"
              display="inline-block"
              src="/images/jimmy.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Profile
          </Heading>

          <Paragraph>
            Why would I want to be a developer? Good question! 
            I had an experience developing an algo-trading strategy using Python in one of my business courses. 
            That experience raised my interest in programming. 
            The longer I explore the programming landscape, the more fun I discover.
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>

          <BioSection>
            <BioYear>2023 to Present</BioYear>
            Full-time student in Computer System Technoloogy diploma at British Columbia Institute of Technology
          </BioSection>

          <BioSection>
            <BioYear>2023</BioYear>
            Graduated from BBA in Financial Technology degree at Hong Kong Metropolitan Unversity
          </BioSection>

          <BioSection>
            <BioYear>2001</BioYear>
            Born in Hong Kong
          </BioSection>

        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Interests
          </Heading>

          <p>
            Conscious rap music, Anime & Manga, Pixel Art, Learning new languages
          </p>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/jimmykongg" target="_blank">
                <Button 
                  variant="ghost" 
                  colorScheme="teal" 
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @jimmykongg
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.linkedin.com/in/jimmykongg/" target="_blank">
                <Button 
                  variant="ghost" 
                  colorScheme="teal" 
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Jimmy (Tung Kiu) Kong
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://mail.google.com/" target="_blank">
                <Button 
                  variant="ghost" 
                  colorScheme="teal" 
                  leftIcon={<Icon as={IoLogoGoogle} />}
                >
                  jimmyatwork368@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page