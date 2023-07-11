import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Heading, Button, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useContext, useCallback } from "react";
import UserContext from "@/context/UserContext";
import axios from "axios";
import LogOut from "@/components/LogOut";
import Link from "next/link";
import CopyLink from "@/components/CopyLink";
import QuestionsLink from "@/components/QuestionsLink";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { fullname, first_name, setUser, username } = useContext(UserContext);

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/me`,
        {
          withCredentials: true,
        }
      );

      const user = res.data;
      console.log(user);
      return user;
    } catch (err) {
      console.error(err);
    }
  }, [first_name]);

  useEffect(() => {
    if (first_name) return;

    // console.log(first_name);

    (async () => {
      const user = await fetchUser();
      if (user) {
        setUser(user);
      }
    })();
  }, []);

  return (
    <>
      <section className=" flex flex-col justify-center items-center grow text-center gap-y-4 [&>button]:flex [&>button]:space-x-2">
        {!first_name && (
          <>
            <Heading color="whiteAlpha.600">
              Relay your message to someone.
            </Heading>
            <Link href="/signup">
              <Button colorScheme="whatsapp">Register</Button>
            </Link>
            <Button
              colorScheme="messenger"
              className="flex space-x-4 color-yellow-500"
            >
              <Image
                src="https://www.facebook.com/images/fb_icon_325x325.png"
                boxSize="25px"
                borderRadius="full"
              />
              <Text>Register with Facebook</Text>
            </Button>
            <Button colorScheme="gray">
              <Image
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                boxSize="25px"
                borderRadius="full"
              />
              <Text>Register with Google</Text>
            </Button>

            <Text>
              Already have an account?{" "}
              <Link href="login" className=" text-blue-900 font-bold">
                Log in here!
              </Link>{" "}
            </Text>
          </>
        )}

        {first_name && (
          <>
            <Heading>Welcome, {username}!</Heading>

            <Text>What do you want to do?</Text>

            <CopyLink />

            <QuestionsLink />

            <LogOut />
          </>
        )}
      </section>
    </>
  );
}
