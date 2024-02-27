import PieChart from "../assets/icons/iconspace_Presentation Chart Up.png";
import Diamond from "../assets/icons/iconspace_Diamond.png";
import Book from "../assets/icons/iconspace_Book_3.png";
import Group from "../assets/icons/iconspace_Group.png";
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

export type DetailBooks = {
  volumeInfo?: {
    title: string;
    description: string;
    authors: [];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    pageCount: number;
  };
  amount: string | number;
  id?: string;
  title: string;
  categories?: string[];
  thumbnail: string;
  description: string;
  author?: [];
  items?: string;
};

export type CategorySubComponentProps = {
  heading: string;
  subHeading: string;
  imageSource: any;
};
export const categories = [
  {
    heading: "Business & Finance",
    subHeading: "Books about Business World",
    imageSource: PieChart,
  },
  {
    heading: "Self Improvement",
    subHeading: "Books for Motivate Yourself",
    imageSource: Diamond,
  },
  {
    heading: "Novel Telenovela",
    subHeading: "Books about Great Story",
    imageSource: Book,
  },
  {
    heading: "Skill in Future",
    subHeading: "Books for Self Preparation",
    imageSource: Group,
  },
];
