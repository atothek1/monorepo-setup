#### Default usage
```typescript jsx
<Text>My example Text</Text>
```

#### Render bold text
```typescript jsx
<Text bold>My bold example Text</Text>
```

#### Render as a `<p>` tag
```typescript jsx
<Text as="p">My example Text rendered as a p tag</Text>
```

#### Render with custom css
```typescript jsx
const customCss = `color: red; font-weight: bold`;


<Text css={ customCss }>My example Text rendered with custom css</Text>
```

#### Create new Component from Text
```typescript jsx
import styled from "styled-components";


const Heading = styled(Text).attrs( props => ({
  ...props,
  as: "h1"
}))``;


<Heading>New Heading Component</Heading>
```

#### Wrap Text component
```typescript jsx
function InnerFormattedNumber(props, ref) {
    const {
        children,
        locale = "en-US",
        bold,
        as,
    } = props;
    const options = {

    };
    return <Text ref={ ref } as={ as } bold={ bold }>{ Number(children).toLocaleString( locale, options ) }</Text>
};
const FormattedNumber = React.forwardRef( InnerFormattedNumber );


<>
    <Text>en-US</Text>
    <FormattedNumber as="p">1234567.89</FormattedNumber>
    <Text>de-DE</Text>
    <FormattedNumber as="p" locale="de-DE">1234567.89</FormattedNumber>
</>
```
