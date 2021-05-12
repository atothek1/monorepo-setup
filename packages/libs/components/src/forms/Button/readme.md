#### Default usage
```typescript jsx
<Button>My example Button</Button>
```

#### Disabled Button
```typescript jsx
<Button isDisabled>My example Button</Button>
```

#### onClick handler
```typescript jsx
import React, { useCallback, useState } from "react";


const [ disabled, setDisabled ] = useState( false );
const handleClick = useCallback( (evt) => {
    evt.preventDefault();
    console.log("Disable button")
    setDisabled( true );
}, [ disabled ] );


<Button onClick={ handleClick } isDisabled={ disabled }>My example Button</Button>
```
