export type Image = {
  imageId: number;
  modelId: number;
  name: string;
  extension: string;
  path: string;
};

export const defaultImage: Image = {
  imageId: 0,
  modelId: 0,
  name: "no_img",
  extension: "jpg",
  path: "https://www.car-info.com/build/images/",
};
