// Complete the Index page component here
// Use chakra-ui
import { Box, Heading, Text, List, ListItem, Link, Image, SimpleGrid, Button } from "@chakra-ui/react";
import { FaCode, FaDesktop, FaMobileAlt, FaSearch, FaServer, FaTools } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Welcome to Your New Website!</Heading>
      <Text fontSize="lg" mb={4}>
        Follow these steps to set up your development environment and build your website.
      </Text>

      <List spacing={3}>
        <ListItem>
          <FaTools /> <strong>Set up your development environment:</strong> Install a code editor like Visual Studio Code, Sublime Text, or Atom. Make sure you have a modern web browser installed (Chrome, Firefox, Safari, Edge) for testing.
        </ListItem>
        <ListItem>
          <FaCode /> <strong>Plan your website structure:</strong> Outline the pages you want on your website and their content (e.g., home, about, features, contact, etc.).
        </ListItem>
        <ListItem>
          <FaDesktop /> <strong>Create the HTML structure:</strong> For each page, create an HTML file that contains the basic structure: <code>&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;&lt;/body&gt;&lt;/html&gt;</code>.
        </ListItem>
        <ListItem>
          <FaMobileAlt /> <strong>Add content and styles:</strong> Fill in the content inside the <code>&lt;body&gt;</code> tag and style the website using CSS. You can use CSS frameworks like Bootstrap or Tailwind for faster styling.
        </ListItem>
        <ListItem>
          <FaSearch /> <strong>Create reusable components:</strong> Identify and create reusable components like buttons, cards, and modals to maintain consistency and improve maintainability.
        </ListItem>
        <ListItem>
          <FaServer /> <strong>Optimize for various screen sizes:</strong> Ensure the website is responsive by using CSS media queries or a CSS framework. Test your website on different devices and screen sizes.
        </ListItem>
        <ListItem>
          <FaCode /> <strong>Implement interactivity:</strong> Add interactivity using JavaScript. Consider using a library like jQuery or a framework like React, Angular, or Vue.js to streamline the process.
        </ListItem>
        <ListItem>
          <FaSearch /> <strong>Optimize for search engines:</strong> Use on-page SEO techniques, such as adding descriptive meta tags, to improve your website's search engine visibility.
        </ListItem>
        <ListItem>
          <FaDesktop /> <strong>Test and publish your site:</strong> Test your website on different browsers and devices to ensure it works correctly. Publish your website using a hosting provider like Netlify, Vercel, or GitHub Pages.
        </ListItem>
        <ListItem>
          <FaMobileAlt /> <strong>Monitor and update:</strong> Continuously monitor your website's performance and user experience. Regularly update the content to keep it relevant and engaging.
        </ListItem>
      </List>

      <SimpleGrid columns={2} spacing={10} mt={10}>
        <Box>
          <Heading size="md" mb={3}>
            Development Tools
          </Heading>
          <Image src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwc2V0dXB8ZW58MHx8fHwxNzE0MDcyMjYyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Box>
        <Box>
          <Heading size="md" mb={3}>
            Responsive Design
          </Heading>
          <Image src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2ViJTIwZGVzaWdufGVufDB8fHx8MTcxNDA3MjI2Mnww&ixlib=rb-4.0.3&q=80&w=1080" />
        </Box>
      </SimpleGrid>

      <Box textAlign="center" mt={10}>
        <Link href="https://www.yourwebsite.com" isExternal>
          <Button colorScheme="blue" rightIcon={<FaDesktop />}>
            Visit Our Website
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Index;
