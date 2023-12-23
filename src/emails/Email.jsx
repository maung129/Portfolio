import * as React from 'react';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Heading } from '@react-email/heading';

export function Email(props) {
  const { email,contactNo,message } = props;

  return (
    <Html lang="en">
        <Heading as="h2">From {email}</Heading>;
        <Text>Contact no. {contactNo}</Text>
        <Text>Send Message to you - {message}</Text>
      {/* <Button href={url}>Click me</Button> */}
    </Html>
  );
}
