import { PexTableProps } from "../variables/columnsData";
import Card from 'components/card/Card'
import { Container, Flex, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";

export default function PexTable (props: PexTableProps) {
  const { title, subTitle, columns, lines } = props

  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')

  return (
    <Card
      flexDirection='column'
      w='100%'
      px='0px'
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex px='25px' justify='space-between' mb='10px' align='center'>
        <Text
          color='#2B3674'
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'
        >
          {title}
        </Text>
      </Flex>
      <Flex px='25px' justify='space-between' mb='10px' align='center'>
      <Text
          color='#A3AED0'
          fontSize='14px'
          fontWeight='700'
          lineHeight='100%'
        >
          {subTitle}
        </Text>
        </Flex>
      <Table role='table' variant='simple' color='gray.500' mb='24px'>
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th
                key={index}
                pe='10px'
                borderColor={borderColor}
              >
                <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: '10px', lg: '12px' }}
                      color='gray.400'
                >
                  {column}
                </Flex>

              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {lines.map((line, index) => (
            <Tr key={index}>
              <Td fontSize='14px' fontWeight='700'>{line.cell1}</Td>
              <Td fontSize='14px' fontWeight='700'>{line.cell2}</Td>
              <Td fontSize='14px' fontWeight='700'>{line.cell3}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  )
}
