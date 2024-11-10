# packifyui

A lightweight, modular UI component library for React, designed to enhance your web applications with reusable, customizable UI elements. Built with TypeScript and bundled using Rollup for optimal performance and flexibility.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Build](#build)
- [Contributing](#contributing)
- [License](#license)

## Installation

To add `packifyui` to your project, run:

```bash
npm install packifyui
```

## Usage

Import and use components from `packifyui` in your React project. Here's a basic example:

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

## Components

The library currently includes the following components:

- **Button**: A customizable button component.
- *(Add other components here as they are added to the library)*

### Button

- **Props**:
  - `label` (string): The text displayed on the button.
  - `onClick` (function): Callback function for the button's `onClick` event.

*Expand the list with descriptions of any additional components or utilities.*

## Build

To build the library, clone this repository and run:

```bash
npm install
npm run build
```

The built files will be output to the `dist/` folder.

## Contributing

We welcome contributions to enhance `packifyui`! If you’d like to contribute, please follow these steps:

1. Fork this repository.
2. Create a new branch with a descriptive name (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m "Description of changes"`).
4. Push the changes to your forked repository (`git push origin feature-name`).
5. Open a pull request on the main repository.

### Running Locally

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/packifyui.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server or build the project as required.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
