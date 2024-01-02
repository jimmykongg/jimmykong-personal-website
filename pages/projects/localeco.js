import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="LocalEco">
      <Container>
        <Title>
          LocalEco <Badge>Sep 2023 - Dec 2023</Badge>
        </Title>

        <P>
          My first academic team project! A web application to encourage recycling. It help users find their nearest recycling bin. 
          They can get virtual rewards after accumulating sufficient rewards point.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://local-eco-7eeb3.web.app'>
              https://local-eco-7eeb3.web.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Type</Meta>
            <span>Web Application</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML/CSS/JS, Bootstrap, Firebase, Firestore</span>
          </ListItem>

          <ListItem>
            <Meta>Source Code</Meta>
            <Link href='https://github.com/jimmykongg/LocalEco'>
              https://github.com/jimmykongg/LocalEco <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <ProjectImage src="/images/projects/localeco-banner.jpg" alt="LocalEco" />
      </Container>
    </Layout>
  )
}

export default Project