import { type } from "node:os"
import { DiagnosticCategory } from "typescript"

export type ProductsRequest = {
      content: Product [];
      totalpages: number;
}
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    date: string;
    categories: Category [];

}
export type Category = {
    id: number;
    name: string;

}
