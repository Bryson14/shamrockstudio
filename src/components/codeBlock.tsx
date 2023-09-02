import CopyContent from "@/assets/icons/copyContent";
import { Button, View } from "@aws-amplify/ui-react";

// a button that has the svg icon of a copy button
function CopyButton() {
  return (
    <Button position={"absolute"} top={"20"} right={"20"}>
      <CopyContent />
    </Button>
  );
}

interface CodeBlockProps {
  children: string;
}
// a code black element that can show code with syntax highlighting and momospaced font with line numbers and copy button
export default function CodeBlock({ children }: CodeBlockProps) {
  // a div that is dark gray with white border, and white font, and a copy button in the top right corner
  // a pre element that has the code inside of it
  // the copy button should be in the top right corner of its parent
  return (
    <View
      width={"100%"}
      border={"1px solid lightgrey"}
      borderRadius={"medium"}
      position={"relative"}
      marginRight={"medium"}
    >
      <pre style={{ float: "left" }}>{children}</pre>
      <CopyButton />
    </View>
  );
}
