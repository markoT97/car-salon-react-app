export type VehicleSold = {
  carId: number;
  brandId: number;
  brandName: string;
  modelId: number;
  modelName: string;
  sellerId?: number;
  imageName: string;
  imageExtension: string;
  imagePath: string;
};

export const defaultVehicleSold: VehicleSold = {
  carId: 0,
  brandId: 0,
  brandName: "",
  modelId: 0,
  modelName: "",
  sellerId: 1,
  imageName: "",
  imageExtension: "",
  imagePath: "",
};
