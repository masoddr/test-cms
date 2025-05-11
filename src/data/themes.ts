// Define the type for our color scheme
interface ColorScheme {
  primary: string;
  secondary: string;
  text: string;
  border: string;
  background: string;
  primaryOffset: string;
  textOffset: string;
  backgroundOffset: string;
}

// Define the type for our theme
interface Theme {
  id: string;
  name: string;
  colors: ColorScheme;
}

// Define our themes
export const themes: Theme[] = [
  {
    id: "bowser",
    name: "Bowser's Castle",
    colors: {
      primary: "#7f5af0",
      secondary: "#2cb67d",
      text: "#fffffe",
      border: "#383a61",
      background: "#16161a",
      primaryOffset: "#e068fd",
      textOffset: "#94a1b2",
      backgroundOffset: "#29293e"
    }
  },
  {
    id: "neon",
    name: "Neon Nights",
    colors: {
      primary: "#ff00ff",
      secondary: "#00ffff",
      text: "#ffffff",
      border: "#ff00ff",
      background: "#000000",
      primaryOffset: "#ff66ff",
      textOffset: "#cccccc",
      backgroundOffset: "#1a1a1a"
    }
  },
  {
    id: "sunset",
    name: "Sunset Vibes",
    colors: {
      primary: "#ff6b6b",
      secondary: "#ffd93d",
      text: "#2d3436",
      border: "#ff9f43",
      background: "#ffeaa7",
      primaryOffset: "#ff8787",
      textOffset: "#636e72",
      backgroundOffset: "#fdcb6e"
    }
  },
  {
    id: "ocean",
    name: "Deep Ocean",
    colors: {
      primary: "#00b894",
      secondary: "#0984e3",
      text: "#dfe6e9",
      border: "#00cec9",
      background: "#2d3436",
      primaryOffset: "#00d8a7",
      textOffset: "#b2bec3",
      backgroundOffset: "#353b48"
    }
  },
  {
    id: "default",
    name: "Light Mode",
    colors: {
      primary: "#2563eb",
      secondary: "#059669",
      text: "#1f2937",
      border: "#e5e7eb",
      background: "#ffffff",
      primaryOffset: "#1d4ed8",
      textOffset: "#4b5563",
      backgroundOffset: "#f3f4f6"
    }
  },
  {
    id: "dark",
    name: "Dark Mode",
    colors: {
      primary: "#3b82f6",
      secondary: "#10b981",
      text: "#f3f4f6",
      border: "#374151",
      background: "#111827",
      primaryOffset: "#60a5fa",
      textOffset: "#9ca3af",
      backgroundOffset: "#1f2937"
    }
  }
]; 