import { Box } from "@chakra-ui/layout";
import Sidebar from "./sideBar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" left="0px" bottom="0px">
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;