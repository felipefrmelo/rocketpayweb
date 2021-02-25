import * as React from "react";
import {
  ChakraProvider,
  forwardRef,
  ChakraProps,
  chakra,
  Container,
  ComponentWithAs,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import { motion, MotionProps, isValidMotionProp } from "framer-motion";
import { Logo } from "./Logo";
type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

const MotionBox = motion.custom(
  forwardRef<MotionBoxProps, "div">((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <chakra.div ref={ref} {...chakraProps} />;
  })
) as ComponentWithAs<"div", MotionBoxProps>;

export function Rocket({ nickname }: { nickname?: string }) {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <Box position="fixed">
      <ChakraProvider>
        <Container position="unset">
          <MotionBox
            as="span"
            borderRight="25px"
            borderLeft="225px"
            top={"100vh"}
            left="-50vw"
            position="absolute"
            animate={{
              scale: [1, 2, 3],
              rotate: [0, 15, 0, 15, 0],
              y: ["0vh", isLargerThan1280 ? "-95vh" : "-140vh"],
              x: ["0vw", "110vw"],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeatType: "loop",
              repeatDelay: 1,
            }}
          >
            <div>
              <Logo justRocket />
              {nickname}
            </div>
          </MotionBox>
        </Container>
      </ChakraProvider>
    </Box>
  );
}
