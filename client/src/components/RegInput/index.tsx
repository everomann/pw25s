import { Input, Text } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface IInput {
    name: string;
    id: string;
    className: string;
    type: string;
    placeholder: string;
    value: string;
    hasError: boolean;
    error: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


export function RegInput({
    id,
    name,
    className,
    type,
    placeholder,
    value,
    hasError,
    error,
    onChange,
}: IInput) {
    let inputClassName = className;
    if (hasError) {
        inputClassName += hasError ? " is-invalid" : " is-valid";
    }

    return (
        <>
            <Input
                id={id}
                name={name}
                className={inputClassName}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}

                focusBorderColor='black'
            />
            {hasError && <Text color={"red"}>{error}</Text>}
        </>
    );
}