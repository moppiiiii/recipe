import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RecipeMaterial {
  @Field()
  material: string;
}

@ObjectType()
export class RecipeDetailResource {
  @Field(() => ID)
  recipeId: number;

  @Field()
  recipeTitle: string;

  @Field()
  recipeUrl: string;

  @Field()
  foodImageUrl: string;

  @Field()
  mediumImageUrl: string;

  @Field()
  smallImageUrl: string;

  @Field()
  nickname: string;

  @Field()
  pickup: number;

  @Field()
  rank: string;

  @Field()
  recipeCost: string;

  @Field()
  recipeDescription: string;

  @Field()
  recipeIndication: string;

  @Field(() => [String])
  recipeMaterial: string[];

  @Field()
  recipePublishday: string;

  @Field()
  shop: number;
}

@ObjectType()
export class RecipeDetail {
  @Field(() => [RecipeDetailResource])
  result: RecipeDetailResource[];
}
