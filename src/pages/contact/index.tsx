import {
  TextField,
  Heading,
  Flex,
  Button,
  PhoneNumberField,
  TextAreaField,
} from "@aws-amplify/ui-react";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Page" />
      </Head>
      <main>
        <Heading level={1}>Contact Us</Heading>
        <Flex as="form" alignContent={"center"}>
          <TextField
            label="Name"
            placeholder="Enter your name"
            required={true}
            type="text"
          />
          <TextField
            label="Email"
            placeholder="Enter your email"
            required={true}
            type="email"
          />
          <PhoneNumberField
            label="Phone Number"
            required={true}
            placeholder="574-555-1212"
            dialCodeList={["+1"]}
          />
          <TextAreaField label="Message" placeholder="Enter your message" />
          <Button type="submit">Submit</Button>
        </Flex>
      </main>
    </>
  );
}
