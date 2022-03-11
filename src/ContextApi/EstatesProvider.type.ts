import { PhotosType, StrapiPopulate, StrapiPopulateOne } from "../utils/strapi.type"

export enum EstateStatus {
  forsale = 'forsale',
  aside = 'aside',
  sold = 'sold'
}

export type EstatesType = {
  title: string;
  address: string;
  price: number;
  whatsapp: boolean;
  shortDescription: string;
  description: string;
  photos?: StrapiPopulate<PhotosType>;
  cover?: StrapiPopulateOne<PhotosType>;
  status: EstateStatus;
  latitude: number;
  longitude: number;
  publishedAt: Date;
  updatedAt: Date;
  phone: string;
}