import { JSDOM } from 'jsdom';
import { url } from 'lib/img';
import { getAllPosts, getPostBySlug } from 'lib/posts';
import { marked } from 'marked';
import { PostType } from 'types/posts';
import Layout from '@/layouts/article';
import Meta from '@/meta';
import PostBody from '@/pbody';
import PostHeader from '@/pheader';

type PostProps = {
    post: PostType;
};

const Post = ({ post }: PostProps) => {
    return (
        <Layout>
            <Meta />
            <div className="h-16" />
            <PostHeader post={post} />
            <PostBody content={post.content} />
        </Layout>
    );
};

export default Post;

type Params = {
    params: {
        slug: string[];
    };
};

export async function getStaticProps({ params }: Params) {
    // slug は配列のため、結合して文字列に変換
    const slug = params.slug.join('/');
    const post = getPostBySlug(slug, ['title', 'date', 'slug', 'content', 'thumbnail']);
    const content = marked(post.content || '');

    const dom = new JSDOM(content.toString());
    const images = dom.window.document.querySelectorAll<HTMLElement>('img');
    images.forEach((image: any) => {
        const src = image.getAttribute('src');
        if (src) {
            image.setAttribute('src', url(src));
        }
    });

    return {
        props: {
            post: {
                ...post,
                content: dom.serialize(),
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.postArray.map((post) => {
            return {
                params: {
                    // catch-all ルーティングの場合、slug を配列で返す
                    slug: post.slug.replace(/\.md$/, '').split('/'),
                },
            };
        }),
        fallback: false,
    };
}