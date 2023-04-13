// Chakra imports
import { Flex, Stat, StatLabel, StatNumber, useColorModeValue, Text, Divider } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';

export default function Default(props: {
	startContent?: JSX.Element;
	endContent?: JSX.Element;
	name: string;
	growth?: string | number;
	value: string | number;
  color: string;
  medValue: string | number;
}) {
	const { startContent, endContent, name, growth, value, medValue, color } = props;
	const textColor = useColorModeValue('#2B3674', '#2B3674');
	const textColorSecondary = 'secondaryGray.600';

	return (
		<Card py='15px' backgroundColor={color}>
			<Flex
				my='auto'
				h='100%'
				align={{ base: 'center', xl: 'center' }}
				justify={{ base: 'center', xl: 'center' }}
        marginLeft='-2'
      >

				<Stat my='auto' >
          {startContent}
          <StatNumber
						color={'black'}
						fontSize={{
							base: '4xl'
						}}>
						{value}
					</StatNumber>
					<StatLabel
						lineHeight='100%'
						color={textColor}
            opacity='70%'
						fontSize={{
							base: '2xl'
						}}>
						{name}
					</StatLabel>
          <Divider orientation='horizontal' width='100' padding='-1.5' paddingTop='5' />
          <StatNumber
						color={textColor}
            paddingTop='3'
						fontSize={{
							base: '1xl'
						}}>
						{medValue}
					</StatNumber>
          <StatLabel
						lineHeight='100%'
						color={textColor}
            opacity='70%'
						fontSize={{
							base: 'x-small'
						}}>
						{'Média por cliente'}
					</StatLabel>
					
					{growth ? (
						<Flex align='center'>
							<Text color='green.500' fontSize='xs' fontWeight='700' me='5px'>
								{growth}
							</Text>
							<Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
								since last month
							</Text>
						</Flex>
					) : null}
				</Stat>
				<Flex ms='auto' w='max-content'>
					{endContent}
				</Flex>
			</Flex>
		</Card>
	);
}
