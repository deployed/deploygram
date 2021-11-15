# Workshops

## API

### POSTS

> GET api/posts

- Request body `-`
- Response body: `Post[]`

> GET api/posts/:postId

- Request body `-`
- Response body: `Post`

> GET api/posts/:postId/comments

- Request body `-`
- Response body: `Comment[]`

> POST api/posts

- Request Body: `CreatePost`
- Response Body: `Post`

> POST api/posts/:postId/like

- Request body `-`
- Response body: `PostLike`

> DELETE api/posts/:postId

- Request Body: `-`
- Response Body: `Post`

### COMMENTS

> POST api/comments

- Request body: `CreateComment`
- Response body: `Comment`

### USER

> GET api/users/:userId

- Request body: `-`
- Response body: `User`

> GET api/users/:userId/posts

- Request body: `-`
- Response body: `Post[]`

> POST api/users

- Request body: `CreateUser`
- Response body: `User`

## DATA MODELS

```ts
interface CreatePost {
  image: Buffer;
  description: string;
}
```

```ts
interface CreateComment {
  text: string;
  postId: number;
}
```

```ts
interface CreateUser {
  nickname: string;
  bio: string;
}
```

```ts
interface Post {
  id: number;
  userId: number;
  image: string; // url
  description: string;
  createdAt: Date; // or timestamp
  likes: PostLike[]; // @OneToMany
  comments: Comment[]; // @OneToMany
}
```

```ts
interface Comment {
  id: number;
  userId: number;
  postId: number;
  text: string;
  createdAt: Date; // or timestamp
}
```

```ts
interface User {
  id: number;
  nickname: string;
  bio: string;
  postsCount: number; // virtual field
}
```

```ts
interface PostLike {
  id: number;
  postId: number;
  userId: number;
}
```
