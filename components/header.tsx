import Link from "next/link";

// Icons
import { RocketIcon } from "@modulz/radix-icons";

// Mantine
import {
  Header as MHeader,
  Button,
  createStyles,
  ThemeIcon,
  Anchor,
} from "@mantine/core";

interface IHeader {
  login?: boolean;
}

const Header = ({ login }: IHeader) => {
  const { classes } = useStyles();

  return (
    <MHeader height={60}>
      <div className={classes.headerContainer}>
        {/* Title */}
        <Anchor component={Link} href="/">
          <a className={classes.headerTitle}>
            <ThemeIcon size="lg" radius="lg">
              <RocketIcon />
            </ThemeIcon>
            deBug
          </a>
        </Anchor>

        {/* Login Button */}
        {login && (
          <Link href="/login">
            <Button className={classes.headerLoginBtn}>
              <a>Login</a>
            </Button>
          </Link>
        )}
      </div>
    </MHeader>
  );
};

// Styles
const useStyles = createStyles((theme, _params) => {
  return {
    headerContainer: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
    headerTitle: {
      fontFamily: "Chakra Petch",
      fontWeight: 700,
      letterSpacing: 3,
      fontSize: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginLeft: "1rem",
    },
    headerLoginBtn: {
      height: "100%",
      marginLeft: "auto",
      borderRadius: 0,
    },
  };
});

export default Header;
