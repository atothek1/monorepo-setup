#### Default usage
```typescript jsx
<Box>My example Box content</Box>
```

#### Render as a `<section>` tag
```typescript jsx
<Box as="section">My example Box rendered as a section tag</Box>
```

#### Render with custom css
```typescript jsx
const customCss = `color: red; font-weight: bold; border: 1px solid black; border-radius: 4px;`;

<Box css={ customCss } padding=".8rem">My example Box rendered with custom css</Box>
```

#### Create a new Component from Box

```tsx
import styled from "styled-components";

// exclude as property as setting it in the attrs directly
// type CardProps = Omit<BoxProps, "as" | "column">;

const Card = styled(Box).attrs( props => ( { ...props, column: true, forwardedAs: "article" } ) )`
    max-width: 36rem;
    border: 1px solid lightgray;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba( 0, 0, 0, .50);
    overflow: hidden;
`;

const CardHeader = styled(Box)
    .attrs( props => {
        return {
            ...props,
            forwardedAs: "section",
            justifyContent: "center",
            alignItems: "center"
        };
    } )`
    min-height: 12.0rem;
    border-bottom: 1px solid lightgray;
`;

const CardContent = styled(Box)
    .attrs( props => {
        return {
            ...props,
            padding: ".8rem",
            forwardedAs: "section",
        };
    } )`
    height: content-fit;
`;

<Card>
    <CardHeader>CardHeader mostly an image with overlay text</CardHeader>
    <CardContent>CardContent summerizing the content details</CardContent>
</Card>
```
