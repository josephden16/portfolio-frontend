interface DefaultSeo {
  metaTitle: string;
  metaDescription: string;
  shareImage: any
}


export interface StrapiGlobalContext {
  siteName: string;
  defaultSeo: DefaultSeo;
}
