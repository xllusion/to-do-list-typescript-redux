import React from 'react';
import { MinusIcon } from '@chakra-ui/icons';
import { Flex, ListItem, Spacer, IconButton, Text, Checkbox } from '@chakra-ui/react';
import { useAppDispatch } from '../hooks/redux';
import { todoActions, TodoItem } from '../store/todo-slice';

const Item: React.FC<TodoItem> = (props) => {
  const { id, text } = props;

  const dispatch = useAppDispatch();

  const removeItemHandler = () => {
    dispatch(todoActions.removeItem(id));
  };

  return (
    <ListItem>
      <Flex alignItems='center'>
        <Checkbox marginX={4} />
        <Text color='gray.500' isTruncated>
          {text}
        </Text>
        <Spacer />
        <IconButton
          onClick={removeItemHandler}
          colorScheme='blue'
          aria-label='Remove item'
          size='xs'
          type='button'
          icon={<MinusIcon />}
        />
      </Flex>
    </ListItem>
  );
};

export default Item;
