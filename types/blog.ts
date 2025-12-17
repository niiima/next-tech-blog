export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    publishedAt: string;
    readTime: string;
    tags: string[];
    category: string;
    featured: boolean;
    image: string;
}

export interface TeamMember {
    name: string;
    role: string;
    avatar: string;
    bio: string;
}