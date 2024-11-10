# packifyui

A lightweight, modular UI component library for React, bundled with Rollup.

## Installation

To install `packifyui`, run:

```bash
npm install packifyui
```

## Usage

After installing, import the components or utilities you need in your project.

```javascript
import { YourComponent } from 'packifyui';

function App() {
  return <YourComponent />;
}

export default App;
```

### Example Usage

Here’s a basic example demonstrating how to use one of the components:

```javascript
import { Button } from 'packifyui';

function App() {
  return (
    <div>
      <Button label="Click Me" onClick={() => alert("Button clicked!")} />
    </div>
  );
}

export default App;
```

## Build

To build the library, use the following command:

```bash
npm run build
```

This will use Rollup to bundle the components into the `dist/` directory.

## API Reference

Here’s a summary of the available components and their props:

### `Button`

- `label` (string) - The text displayed on the button.
- `onClick` (function) - Function to execute on button click.

## Configuration

If the package supports customization or configuration, describe those options here.

## Contributing

If you would like to contribute to `packifyui`, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

## License

This project is licensed under the ISC License.