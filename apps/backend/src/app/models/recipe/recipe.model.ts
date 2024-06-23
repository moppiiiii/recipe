import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => ID)
  categoryId: number;

  @Field()
  categoryName: string;

  @Field()
  categoryUrl: string;

  @Field({ nullable: true })
  parentCategoryId?: number;
}

@ObjectType()
export class RecipeResource {
  @Field(() => [Category])
  large: Category[];

  @Field(() => [Category])
  medium: Category[];

  @Field(() => [Category])
  small: Category[];
}

@ObjectType()
export class Recipe {
  @Field(() => RecipeResource)
  result: RecipeResource;
}
