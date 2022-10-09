import * as gql from '@nestjs/graphql';

@gql.ObjectType()
export class HelloWorld {
  @gql.Field(() => String)
  message: string;
}


/**
 * If we change the above code like this, it will work
 * 
 * ```
 * import {ObjectType, Field} from '@nestjs/graphql';
 * 
 * @ObjectType()
 * export class HelloWorld {
 *  @Field(() => String)
 *  message: string;
 * }
 */