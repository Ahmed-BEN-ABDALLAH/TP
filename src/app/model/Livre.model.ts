export interface Livre{
  id?:string;
  title:string;
  author:string;
  description:string;
  image:string ;

}
export interface LivrePage {
  volumeInfo:Array<Livre>;
  totalItems:number;
  limit:number;
  page:number;
  pages:number;
}
