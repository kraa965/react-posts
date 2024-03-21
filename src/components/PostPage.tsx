import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const fetchPost = async (postId: number) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};

const PostPage: React.FC = () => {
	const { postId } = useParams<{ postId: string }>();
	const { data, isLoading, isError } = useQuery(['post', postId], () => fetchPost(Number(postId)));

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error fetching post!</p>;

	return (
		<div>
			<h2>Post Details</h2>
			<h3>
				{data?.id}. {data?.title}
			</h3>
			<p>{data?.body}</p>
			<Link to="/">Back</Link>
		</div>
	);
};

export default PostPage;
