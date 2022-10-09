import * as gql from '@nestjs/graphql';
import { HelloWorld } from 'src/app.model';

@gql.Resolver()
export class AppResolver {
    @gql.Query(() => HelloWorld)
    helloWorld(): HelloWorld {
        return { message: 'Hello World!' };
    }
}
