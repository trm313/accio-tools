import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const ColorPctTable = ({ color }: any) => {
  return (
    <TableContainer>
      <Table variant='simple' size='sm'>
        <Tbody>
          {[
            { name: "Red", prop: "r" },
            { name: "Green", prop: "g" },
            { name: "Blue", prop: "b" },
          ].map((row) => (
            <Tr key={`ColorPctTable_Row_${row.prop}`}>
              <Td fontWeight='semibold' fontSize='xs' textTransform='uppercase'>
                {row.name}
              </Td>
              <Td>{color.toPercentageRgb()[row.prop]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ColorPctTable;
