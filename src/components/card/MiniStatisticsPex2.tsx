// Chakra imports
import { Flex, Stat, StatLabel, StatNumber, useColorModeValue, Text, Box, Grid } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';

export default function Default(props: {
	startContent?: JSX.Element;
	endContent?: JSX.Element;
	name: string;
	growth?: string | number;
  redGrowth?: boolean;
	value: string | number;
  secondaryValue?: string | number;
}) {
	const { startContent, endContent, name, growth, value, redGrowth, secondaryValue } = props;
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'secondaryGray.600';

	return (
		<Card py='15px'>
			<Flex
				my='auto'
				h='100%'
				align={{ base: 'center', xl: 'center' }}
				justify={{ base: 'center', xl: 'center' }}>
				

				<Stat my='auto' >
          {startContent}
          { secondaryValue ? (
            <Grid templateColumns='repeat(5, 1fr)' gap={3}>
              <StatNumber
                color={textColor}
                fontSize={{
                  base: '2xl'
                }}>
                {value}
              </StatNumber>
              <StatNumber
                color={textColorSecondary}
                lineHeight='280%'
                fontSize={{
                  base: 'inherit'
                }}>
                {secondaryValue}
              </StatNumber>
            </Grid>
          ) :
            <StatNumber
            color={textColor}
            fontSize={{
              base: '2xl'
            }}>
            {value}
            </StatNumber>
          }
          <StatLabel
						lineHeight='100%'
						color={textColorSecondary}
            paddingBottom='3'
						fontSize={{
							base: 'sm'
						}}>
						{name}
					</StatLabel>
					{growth ? (
						<Flex align='center'>
              {redGrowth ? (
                <Text color='red.500' fontSize='xs' fontWeight='700' me='5px'>
								{growth}
							  </Text>
              ) :
              <Text color='green.500' fontSize='xs' fontWeight='700' me='5px'>
								{growth}
							  </Text>
              }
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
