import Image from 'next/image';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';

interface Props {}

export const Navbar = ({}: Props) => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 30px',
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png'
        alt='Pokemon Image'
        width={70}
        height={70}
      />

      <Link href='/'>
        <Text color='white' h2>
          P
        </Text>
        <Text color='white' h3>
          okémon
        </Text>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link href='/favorites'>
        <Text color='white' h3>
          Favorites
        </Text>
      </Link>
    </div>
  );
};
