import { AddIcon } from '@chakra-ui/icons';
import { Box, FormControl, IconButton, Input, SimpleGrid } from '@chakra-ui/react';
import React, { useRef } from 'react';

const ItemForm: React.FC<{ onAddItem: (text: string) => void }> = (props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    const enteredText = inputTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    // Clear form
    formRef.current?.reset();

    props.onAddItem(enteredText);
  };

  return (
    <Box w='full' h={{ base: 'auto', md: '60' }}>
      <form onSubmit={submitHandler} ref={formRef}>
        <SimpleGrid columns={[1, 2]} spacingX={6} spacingY={6}>
          <FormControl isRequired>
            <Input
              id='inputText'
              ref={inputTextRef}
              borderColor='blue.400'
              w='full'
              type='text'
              placeholder='Enter item'
            />
          </FormControl>
          <FormControl>
            <IconButton
              w={['full', 'full']}
              colorScheme='blue'
              aria-label='Add item'
              type='submit'
              icon={<AddIcon />}
            />
          </FormControl>
        </SimpleGrid>
      </form>
    </Box>
  );
};

export default ItemForm;
