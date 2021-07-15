import { Book } from '../entity/Book';
import { Resolver, Arg, Mutation, Int, Query, InputType, Field } from "type-graphql";

@InputType()
class BookUpateInput {
    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => Int, { nullable: true })
    page?: number;
}


@Resolver()
export class BookResolver {
    @Mutation(() => Boolean)
    async createBook(
        @Arg('title') title: string,
        @Arg('page', () => Int) page: number
    ) {
        await Book.insert({ title, page })
        console.log(title);
        return true;
    }

    @Mutation(() => Boolean)
    async updateBook(
        @Arg('id', () => Int) id: number,
        @Arg('input', () => BookUpateInput) input: BookUpateInput
    ) {
        await Book.update({ id }, input);
        return true;
    }

    @Mutation(() => Boolean)
    async deleteBook(
        @Arg('id', () => Int) id: number,
    ) {
        await Book.delete({ id });
        return true;
    }

    @Query(() => [Book])
    Books() {
        return Book.find();
    }
}