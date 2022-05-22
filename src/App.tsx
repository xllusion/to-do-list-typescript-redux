import { ChakraProvider} from "@chakra-ui/react";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  );
}

export default App;
