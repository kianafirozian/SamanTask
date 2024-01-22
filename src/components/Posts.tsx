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
  userId?: number;
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
          Main Posts
        </Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <Stack divider={<StackDivider />} spacing="4">
            {posts.map((post) => (
              <Box
                key={post.id}
                pt="2"
                fontSize="sm"
                display="flex"
                justifyContent="space-between"
              >
                <Box display="block">
                  <Text fontSize={20} fontWeight="bold">
                    {post.title}
                  </Text>
                  <Text>{post.body}</Text>
                </Box>
                <Button
                  backgroundColor="lavender"
                  color="darkviolet"
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
