import { Grid } from '@nextui-org/react';
import { FavoritePokemonCard } from './';

interface Props {
  pokemons: number[];
}

export const FavoritePokemons = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map((id) => (
        <FavoritePokemonCard key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
