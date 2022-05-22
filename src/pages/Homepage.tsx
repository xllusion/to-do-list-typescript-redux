import { Container, Heading, SimpleGrid, GridItem } from '@chakra-ui/react';
import React from 'react';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { todoActions, TodoItem } from '../store/todo-slice';

const Homepage: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.todo.items);
  //const [data, setData] = useState<ItemData[]>([]);

  const addItemHandler = (text: string): void => {
    const item: TodoItem = { id: new Date().toISOString(), text: text };
    dispatch(todoActions.addItem(item));
    //setData((preData) => preData.concat(itemData));
  };

  return (
    <Container maxW='container.xl' p={0}>
      <Heading as='h2' w='full' p={4} textAlign='center'>
        To-Do List
      </Heading>
      <SimpleGrid columns={[1, null, 2]} p={4}>
        <GridItem p={6} bgColor='gray.100'>
          <ItemForm onAddItem={addItemHandler} />
        </GridItem>
        <GridItem p={6} bgColor='gray.50'>
          <ItemList data={items} />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export default Homepage;
