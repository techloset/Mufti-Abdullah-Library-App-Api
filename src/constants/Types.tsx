export type BooksDetails = {
  id?: string;
  title: string;
  categories?: string[];
  thumbnail: string;
  amount: number | string;
  description?: string;
  author?: [] | string;
  items?: string;
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

export type CategorySubComponentProps = {
  heading: string;
  subHeading: string;
  imageSource: any;
};
