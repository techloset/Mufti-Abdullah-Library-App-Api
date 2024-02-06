export type BooksDetails = {
  id?: string;
  title: string;
  categories?: string[];
  thumbnail: string;
  amount: number;
  description?: string;
  author?: [];
};
export type Books = {
  id: string;
  volumeInfo?: {
    title: string;
    authors: [];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    pageCount: number;
  };
  amount: string | number;
};
