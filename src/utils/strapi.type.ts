
export type ImageFormatType = {
  ext: ".jpg"
  hash: "large_272156173_1134813827266071_3777159220451678385_n_82b9b589d4"
  height: 1000
  mime: "image/jpeg"
  name: "large_272156173_1134813827266071_3777159220451678385_n.jpg"
  path: null
  size: 173.52
  url: "/uploads/large_272156173_1134813827266071_3777159220451678385_n_82b9b589d4.jpg"
  width: 750
}

export type ImageFormatsType = {
  large: ImageFormatType;
  medium: ImageFormatType;
  small: ImageFormatType;
  thumbnail: ImageFormatType;
}

export type PhotosType = {
  alternativeText: string;
  caption: string;
  createdAt: string;
  ext: string;
  formats: ImageFormatsType
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  size: number;
  updatedAt: Date;
  url: string;
  width: 1200
}

export type StrapiPopulate<T> = {
  data : StrapiEntity<T>[]
}

export type StrapiPopulateOne<T> = {
  data : StrapiEntity<T>
}

export type StrapiEntity<T> = {
  attributes: T,
  id: number;
}

export type StrapiData<T> = {
  data: StrapiEntity<T>[],
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}
export type StrapiDataOne<T> = {
  data: StrapiEntity<T>,
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}