import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

interface Post {
  title: string;
  body: string;
  id: number;
}

interface Props {
  posts: Post[];
  onDelete: (id: number) => void;
}

const Posts = ({ posts, onDelete }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="3xl" color="lavender">
          Posts
        </Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <Stack divider={<StackDivider />} spacing="4">
            {posts.map((post) => (
              <Box
                key={post.body}
                pt="2"
                fontSize="sm"
                display="flex"
                justifyContent="space-between"
              >
                <Box display="block">
                  <Text fontSize={25} fontWeight="bold">
                    {post.title}
                  </Text>
                  <Text>{post.body}</Text>
                </Box>
                <Button
                  backgroundColor="EDF2F7"
                  color="pink"
                  onClick={() => onDelete(post.id)}
                >
                  Delete
                </Button>
              </Box>
            ))}
          </Stack>
        </Box>
      </CardBody>
    </Card>
  );
};

export default Posts;
