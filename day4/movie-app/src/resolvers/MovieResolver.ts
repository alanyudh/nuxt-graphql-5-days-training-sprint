import { Movie } from '../entity/Movie';
import { Resolver, Arg, Mutation, Int, Query, InputType, Field } from "type-graphql";

@InputType()
class MovieUpateInput {
    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => Int, { nullable: true })
    minutes?: number;
}


@Resolver()
export class MovieResolver {
    @Mutation(() => Boolean)
    async createMovie(
        @Arg('title') title: string,
        @Arg('minutes', () => Int) minutes: number
    ) {
        await Movie.insert({ title, minutes })
        console.log(title);
        return true;
    }

    @Mutation(() => Boolean)
    async updateMovie(
        @Arg('id', () => Int) id: number,
        @Arg('input', () => MovieUpateInput) input: MovieUpateInput
    ) {
        await Movie.update({ id }, input);
        return true;
    }

    @Mutation(() => Boolean)
    async deleteMovie(
        @Arg('id', () => Int) id: number,
    ) {
        await Movie.delete({ id });
        return true;
    }

    @Query(() => [Movie])
    movies() {
        return Movie.find();
    }
}