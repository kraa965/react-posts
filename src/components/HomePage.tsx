import React, { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';

const fetchPosts = async ({ pageParam = 1 }) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};

const HomePage: React.FC = () => {
	const [page, setPage] = useState(1);
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
		'posts',
		fetchPosts,
		{
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.length < 10) return;
				return allPages.length + 1;
			},
		}
	);

	const handleLoadMore = () => {
		fetchNextPage();
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<div>
			<h1>Posts</h1>
			{data?.pages.map((page, index) => (
				<React.Fragment key={index}>
					{page.map((post: any) => (
						<div key={post.id}>
							<h3>
								{post.id}. {post.title}
							</h3>
							<p>{post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}</p>
							<Link to={`/post/${post.id}`}>View</Link>
						</div>
					))}
				</React.Fragment>
			))}
			{hasNextPage && (
				<button onClick={handleLoadMore} disabled={isFetchingNextPage}>
					{isFetchingNextPage ? 'Loading more...' : 'Load More'}
				</button>
			)}
		</div>
	);
};

export default HomePage;
