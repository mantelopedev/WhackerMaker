# WhackerMaker

WhackerMaker is a web application designed to convert common 3D model types, such as .fbx and .obj, into .whacker files for modding Beat Saber on standalone Quest. This application provides a user-friendly interface for uploading models, configuring saber settings, and previewing the saber before exporting.

## Features

- **Model Uploading**: Users can upload 3D models in .fbx or .obj formats.
- **Saber Configuration**: An interface allows users to configure various aspects of the saber, including colors, effects, and other settings.
- **3D Preview**: A real-time preview feature enables users to see their saber before exporting it.
- **Export Functionality**: Users can export their configured saber as a .whacker file ready for use in Beat Saber.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/WhackerMaker.git
   ```
2. Navigate to the project directory:
   ```
   cd WhackerMaker
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to access the application.

### Building for Production

To build the application for production, run:
```
npm run build
```
The production-ready files will be generated in the `dist` directory.

## Usage

1. Upload your 3D model using the Model Uploader.
2. Configure your saber settings in the Config Panel.
3. Preview your saber in the Preview Canvas.
4. Export your saber as a .whacker file using the Exporter component.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.