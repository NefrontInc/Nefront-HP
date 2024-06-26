import React from 'react';

export type PostType = {
    index: number;
    slug: string;
    title: string;
    date: string;
    content: string;
    thumbnail: string;
};

export type Post = {
    postArray: PostType[];
    postsLength: number;
    children: React.ReactNode;
};
