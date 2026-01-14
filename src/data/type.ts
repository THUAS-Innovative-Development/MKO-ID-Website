export type ContactProps = {
  image: string;
  title: string;        
  description: string;  
  phone?: string;
  email?: string;
  address?: string;
  link?: string;
}

export type LocationCardProps = {
  image: string;
  title: string;
  link: string;
};

export type LocationData = {
  slug: string;
  title: string;
  image: string;
  description: string;
  phone?: string;
  email?: string;
  address?: string;
};
