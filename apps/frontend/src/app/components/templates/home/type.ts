import { Category } from '@/app/graphql/generate/generated';

export type HomeTemplateProps = {
  isLoading: boolean;
  largeCategory: Category[];
  mediumCategory: Category[];
  smallCategory: Category[];
};
