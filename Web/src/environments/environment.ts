// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const host = "https://localhost:444/api/";
export const hostCloud = "https://shoppi.eastus.cloudapp.azure.com/api/";

export const categories = [
  {value: 'Comida'},
  {value: 'Electrónica'},
  {value: 'Anime'},
  {value: 'Ropa'},
  {value: 'Calzado'},
  {value: 'Postres'},
  {value: 'Videojuegos'},
  {value: 'Servicios'},
  {value: 'Asesorías'},
  {value: 'Pines'},
  {value: 'Stickers'},
  {value: 'Trueque'},
  {value: 'Variado'},
];

export const ROUTEproductGrid ='products/grid';
