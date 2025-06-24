import * as React from "react";
import {
  Html,
  Head,
  Font,
  Preview,
  Section,
  Row,
  Heading,
  Text,
} from "@react-email/components";

interface EmailProps {
  user: string;
  msg: string;
}

const SendEmail: React.FC<Readonly<EmailProps>> = ({
  user,
  msg,
}: Readonly<EmailProps>) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>{user} Wants to Connect With You</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Preview>{msg.slice(0, 50)}...</Preview>

      <Section style={{ padding: "20px" }}>
        <Row>
          <Heading as="h2" style={{ marginBottom: "10px" }}>
            Hello RK ,
          </Heading>
        </Row>
        <Row>
          <Text style={{ fontSize: "16px", lineHeight: "1.5" }}>{msg}</Text>
        </Row>
      </Section>
    </Html>
  );
};

export default SendEmail;
