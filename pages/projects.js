import {
  Container,
  Heading,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import thumbLocalEco from '../public/images/projects/localeco-banner.jpg'
import thumbGacha from '../public/images/projects/gacha-banner.jpg'
import Layout from '../components/layouts/article.js'

const Projects = () => {
  return (
    <Layout>
      <Container mt={5}>
        <Heading as="h3" fontSize={20} mb={6}>
          Projects (Click to see more)
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem id="localeco" title="LocalEco" thumbnail={thumbLocalEco}>
              A web application to find nearest recycling bin, powered by Firebase, Firestore, and MapBox API
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem id="gacha" title="Gacha Simulator" thumbnail={thumbGacha}>
              A simple and free gacha simulator
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

      </Container>
    </Layout>
  )
}

export default Projects
