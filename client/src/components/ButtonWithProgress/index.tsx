import { Button, CircularProgress } from "@chakra-ui/react";

interface IButtonWithProgress {
    disabled: boolean;
    text: string;
    pendingApiCall: boolean;
    onClick: () => void;
  }
  
  export function ButtonWithProgress({
    disabled,
    pendingApiCall,
    text,
    onClick,
  }: IButtonWithProgress) {
    return (
      <Button
        width="full"
        bg="black"
        _hover={{ bg: "gray.600" }}
        color="white"
        
        onClick={onClick}
        disabled={disabled}
      >
        {pendingApiCall && (
            <CircularProgress isIndeterminate size="20px" color="white" />
        )}
        &nbsp; {text}
      </Button>
    );
  }