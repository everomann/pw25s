import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

interface NumberInputQuantityProps {
    onChangeQuantity: (quantity: number) => void;
}

export function NumberInputQuantity({ onChangeQuantity }: NumberInputQuantityProps) {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 5,
            onChange: (valueString) => {
                const value = parseInt(valueString);
                onChangeQuantity(value);
            },
        });

    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();

    return (
        <HStack maxW="320px">
            <Button {...dec}>-</Button>
            <Input {...input} />
            <Button {...inc}>+</Button>
        </HStack>
    );
}
