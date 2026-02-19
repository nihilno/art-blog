import { Post } from "@/generated/prisma/client";

export {};

declare global {
  type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    variant?: "default" | "secondary";
    disabled?: boolean;
  };

  type LabelProps = { label: string; className?: string };

  type LinkProps = {
    children: React.ReactNode;
    className?: string;
    href: string;
  };

  type ListProps = {
    type?: "magazine" | "podcast" | "author";
    size?: "sm" | "base";
    compact?: boolean;
    details?: Details;
  };

  type Details = {
    name?: string;
    createdAt?: Date;
    durationInMinutes?: number;
    occupation?: string;
    city?: string;
  };

  type SubtitleProps = {
    title: string;
    href: string;
    linkLabel: string;
  };

  type TitleProps = { label: string; wrapper?: boolean };

  type AuthorProps = {
    author: AuthorType;
    index?: number;
    length?: number;
    type: "latest" | "all";
  };

  type ArticleProps = {
    article: PostWithAuthor;
    className?: string;
    type?: "regular" | "compact";
    index: number;
    length: number;
  };

  type PostWithAuthor = Post & { author: { name: string } };

  type LatestProps = {
    label: string;
    type: "podcast" | "magazine";
    href: string;
  };

  type ContentType = {
    type: "podcast" | "magazine";
  };
}
