import { GraphQLUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { Mutation, Resolver, Arg } from 'type-graphql';

export interface upload {
    filename: string;
    mimetype: string;
    encoding: string;
    createReadStream: () => Readable;
}

@Resolver()
export class UploadResolver {
    @Mutation(() => Boolean)
    async addImage(
        @Arg("picture", () => GraphQLUpload) {
            createReadStream,
            filename
        }: upload): Promise<Boolean> {
        return new Promise(async (resolve, reject) =>
            createReadStream()
                .pipe(createWriteStream(__dirname + `/../file/${filename}`))
                .on("finish", () => resolve(true))
                .on("error", () => reject(false))
        )
    }
}