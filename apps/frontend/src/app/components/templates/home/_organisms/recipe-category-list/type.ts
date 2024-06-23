import { Category } from '@/app/graphql/generate/generated';

export type RecipeCategoryListProps = {
  title: string;
  category: Category[];
  onClickItem: (categoryId: number) => void;
};
