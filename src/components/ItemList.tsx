import { List } from '@chakra-ui/react';
import React from 'react';
import { TodoItem } from '../store/todo-slice';
import Item from './Item';

const ItemList: React.FC<{ data: TodoItem[] }> = (props) => {
  const { data } = props;

  return (
    <List spacing={3} w='full'>
      {data.map((item) => {
        return <Item key={item.id} id={item.id} text={item.text} />;
      })}
    </List>
  );
};

export default ItemList;