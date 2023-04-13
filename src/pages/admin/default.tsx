/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
// Assets
// Custom components
import MiniCalendar from 'components/calendar/MiniCalendar'
import MiniStatistics from 'components/card/MiniStatistics'
import MiniStatisticsPex from 'components/card/MiniStatisticsPex'
import ColoredCard from 'components/card/ColoredCard'
import MiniStatisticsPex2 from 'components/card/MiniStatisticsPex2'
import IconBox from 'components/icons/IconBox'
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy
} from 'react-icons/md'
import CheckTable from 'views/admin/default/components/CheckTable'
import ComplexTable from 'views/admin/default/components/ComplexTable'
import PexTable from 'views/admin/default/components/PexTable'
import DailyTraffic from 'views/admin/default/components/DailyTraffic'
import PieCard from 'views/admin/default/components/PieCard'
import Tasks from 'views/admin/default/components/Tasks'
import TotalSpent from 'views/admin/default/components/TotalSpent'
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue'
import {
  columnsDataCheck,
  columnsDataComplex,
  TableData
} from 'views/admin/default/variables/columnsData'
import tableDataCheck from 'views/admin/default/variables/tableDataCheck.json'
import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json'
import { isWindowAvailable } from 'utils/navigation'
import AdminLayout from 'layouts/admin'
import { Image } from 'components/image/Image'
import Usa from 'img/dashboards/usa.png'

export default function UserReports () {
  // Chakra Color Mode

  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

  const tableItens1 = [
    { cell1: 'Estagiários', cell2: '312 clientes', cell3: 'R$ 123,90'},
    { cell1: 'Diretoria', cell2: '312 clientes', cell3: 'R$ 123,90'},
    { cell1: 'Geral', cell2: '312 clientes', cell3: 'R$ 123,90'},
    { cell1: 'Almoxarifado', cell2: '312 clientes', cell3: 'R$ 123,90'}
  ]

  const tableItens2 = [
    { cell1: '6 vendas', cell2: '312 clientes', cell3: 'R$ 123,90'},
    { cell1: '12 vendas', cell2: '312 clientes', cell3: 'R$ 123,90'},
    { cell1: '24 vendas', cell2: '312 clientes', cell3: 'R$ 123,90'},
    { cell1: 'Personalizado', cell2: '312 clientes', cell3: 'R$ 123,90'}
  ]

  const tableItens3 = [
    { cell1: 'Construtoras', cell2: '312 clientes', cell3: 'R$ 123,90'},
    { cell1: 'Clientes finais', cell2: '312 clientes', cell3: 'R$ 123,90'}
  ]

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <>
          <SimpleGrid
            columns={{ base: 1, md: 3, lg: 3, '2xl': 4 }}
            gap='20px'
            mb='20px'
          >
            <ColoredCard 
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg='white'
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color='#EC7A7A'
                    />
                  }
                />
              }
              value='R$ 312.321,00'
              medValue='R$ 67,20'
              name='Receita total'
              color='#EC7A7A'
            />
            <ColoredCard 
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg='white'
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color='#7A85EC'
                    />
                  }
                />
              }
              value='R$ 74.421,00'
              medValue='R$ 42,20'
              name='Lucro total'
              color='#7A85EC'
            />
            <ColoredCard
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg='white'
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color='#65D5AC'
                    />
                  }
                />
              }
              value='R$ 3,12'
              medValue='R$ 12,40'
              name='Lucro por venda'
              color='#65D5AC'
            />
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 6, lg: 6, '2xl': 6 }}
            gap='20px'
            mb='20px'
          >
            <MiniStatisticsPex growth='+2,6% (+12)' name='Clientes ativos' value='3.312' />
            <MiniStatisticsPex growth='+15,3% (+2)' name='Novos clientes' value='12' />
            <MiniStatisticsPex growth='+42,6% (+8)' name='Clientes adicionados' value='42' />
            <MiniStatisticsPex growth='-22,6% (+R$ 12,20)' name='LTV' redGrowth={true} value='R$ 142,32' />
            <MiniStatisticsPex growth='+42,6% (+3)' name='Turnover' value='24,3%' secondaryValue='32' />
            <MiniStatisticsPex growth='+32,6% (+6)' name='Turnover recuperado' value='54,42%' secondaryValue='12' />
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 4, lg: 4, '2xl': 4 }}
            gap='20px'
            mb='20px'
          >
            <MiniStatisticsPex2
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg='#F4F7FE'
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color='#4318FF'
                    />
                  }
                />
              }
              growth='+15,3% (+223)'
              name='Cotações realizadas' 
              value='312.321' 
            />
            <MiniStatisticsPex2
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg='#F4F7FE'
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color='#4318FF'
                    />
                  }
                />
              }
              growth='+15,3% (+223)'
              name='Vendas finalizadas' 
              value='212.012' 
            />
            <MiniStatisticsPex2
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg='#F4F7FE'
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color='#4318FF'
                    />
                  }
                />
              }
              growth='+15,3% (+223)'
              name='Cotações não concluídas' 
              value='42.021' 
            />
            <MiniStatisticsPex2
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg='#F4F7FE'
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color='#4318FF'
                    />
                  }
                />
              }
              growth='+15,3% (+223)'
              name='Cotações não respondidas' 
              value='3.122'
              secondaryValue='3%'
            />
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 3, lg: 3, '2xl': 3 }}
            gap='10px'
            mb='20px'
          >
            <PexTable title='Planos' subTitle='123 planos ativos' columns={['CLUBE', 'CLIENTES', 'PREÇO']} lines={tableItens1} />
            <PexTable title='Categorias' subTitle='4 categorias em uso' columns={['CLUBE', 'CLIENTES', 'PREÇO MÉDIO']} lines={tableItens2} />
            <PexTable title='Tipos de planos' subTitle='2 tipos em uso' columns={['CLUBE', 'CLIENTES', 'PREÇO MÉDIO']} lines={tableItens3} />
          </SimpleGrid>
        </>
      </Box>
    </AdminLayout>
  )
}
