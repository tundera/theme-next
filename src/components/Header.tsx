import Link from 'next/link';
import { useColorMode, Container, Flex, NavLink, Button } from 'theme-ui';

const modes = ['deep', 'light', 'dark', 'purpsGold'];

export default function Header(): JSX.Element {
  const [colorMode, setColorMode] = useColorMode();

  const handleClick = () => {
    const index = modes.indexOf(colorMode);
    const next = modes[(index + 1) % modes.length];
    setColorMode(next);
  };
  return (
    // see theme.layout.container for styles
    <Container sx={{ mb: 12 }} as="header">
      <Flex as="nav">
        {/* passHref is required with NavLink */}
        <Link href="/" passHref>
          <NavLink p={2}>Home</NavLink>
        </Link>
        <Link href="/style" passHref>
          <NavLink p={2}>Style Guide</NavLink>
        </Link>
        <Button ml="auto" onClick={handleClick}>
          Toggle Color Mode
        </Button>
      </Flex>
    </Container>
  );
}
